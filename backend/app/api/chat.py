from uuid import uuid4

from fastapi import APIRouter
from app.models.request_models import ChatRequest
from app.services.rag import RAGService

from app.database.session import SessionLocal
from app.models.message import Message

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    db = SessionLocal()

    # Create new conversation if needed
    conversation_id = (
        request.conversation_id
        if request.conversation_id
        else str(uuid4())
    )

    # Save user message
    user_message = Message(
        conversation_id=conversation_id,
        role="user",
        content=request.question,
    )

    db.add(user_message)
    db.commit()

    # Generate AI answer
    result = RAGService.ask(
        question=request.question,
        document=request.document,
    )

    # Save assistant message
    assistant_message = Message(
        conversation_id=conversation_id,
        role="assistant",
        content=result["answer"],
    )

    db.add(assistant_message)
    db.commit()

    db.close()

    return {
        "conversation_id": conversation_id,
        "question": request.question,
        "answer": result["answer"],
        "sources": result["sources"],
    }