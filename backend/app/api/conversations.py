from fastapi import APIRouter
from sqlalchemy import func

from app.database.session import SessionLocal
from app.models.message import Message

router = APIRouter(
    prefix="/conversations",
    tags=["Conversations"]
)


@router.get("")
def conversations():

    db = SessionLocal()

    conversations = (
        db.query(
            Message.conversation_id,
            func.min(Message.content).label("title"),
            func.max(Message.created_at).label("updated_at"),
        )
        .group_by(Message.conversation_id)
        .order_by(func.max(Message.created_at).desc())
        .all()
    )

    db.close()

    return [
        {
            "conversation_id": c.conversation_id,
            "title": c.title[:40],
            "updated_at": c.updated_at,
        }
        for c in conversations
    ]