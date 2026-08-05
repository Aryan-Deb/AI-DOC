from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
    Depends,
)
from sqlalchemy.orm import Session
import os
import shutil
import uuid

from app.database.session import get_db
from app.models.document import Document
from app.models.user import User
from app.auth.dependencies import get_current_user

from app.services.pdf_loader import PDFLoaderService
from app.services.text_splitter import TextSplitterService
from app.services.embedding import EmbeddingService
from app.services.llm import llm_service

router = APIRouter(tags=["Documents"])

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    # Validate PDF
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    # Generate unique ID
    document_id = str(uuid.uuid4())

    filename = f"{document_id}_{file.filename}"

    file_path = os.path.join(
        UPLOAD_DIR,
        filename,
    )

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text
    pages = PDFLoaderService.extract_pages(file_path)

    total_chunks = 0
    stored_vectors = 0
    full_text = ""

    for page in pages:

        page_text = page["text"]
        page_number = page["page"]

        full_text += page_text + "\n"

        chunks = TextSplitterService.split_text(page_text)

        total_chunks += len(chunks)

        stored_vectors += EmbeddingService.save_chunks(
            chunks=chunks,
            filename=filename,
            page=page_number,
            document_id=document_id,
        )

    # AI Processing
    summary = llm_service.summarize_document(full_text)

    keywords = llm_service.generate_keywords(full_text)

    questions = llm_service.suggested_questions(full_text)

    # Save metadata
    document = Document(
        filename=filename,
        document_id=document_id,
        file_url=f"/uploads/{filename}",
        pages=len(pages),
        chunks=total_chunks,
        summary=summary,
        keywords=keywords,
        suggested_questions=questions,
        owner_id=current_user.id,
    )

    db.add(document)
    db.commit()
    db.refresh(document)

    return {
        "status": "success",
        "document": {
            "id": document.id,
            "filename": document.filename,
            "file_url": document.file_url,
            "pages": document.pages,
            "chunks": document.chunks,
            "summary": document.summary,
            "keywords": document.keywords,
            "questions": document.suggested_questions,
            "stored_vectors": stored_vectors,
        },
    }