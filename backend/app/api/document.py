from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.auth.dependencies import get_current_user
from app.models.user import User
from app.models.document import Document

router = APIRouter(
    prefix="/documents",
    tags=["Documents"],
)


@router.get("/")
def get_documents(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    documents = (
        db.query(Document)
        .filter(Document.owner_id == current_user.id)
        .order_by(Document.created_at.desc())
        .all()
    )

    return [
        {
            "id": doc.id,
            "filename": doc.filename,
            "document_id": doc.document_id,
            "file_url": doc.file_url,
            "pages": doc.pages,
            "chunks": doc.chunks,
            "summary": doc.summary,
            "keywords": doc.keywords,
            "questions": doc.suggested_questions,
            "created_at": doc.created_at,
        }
        for doc in documents
    ]