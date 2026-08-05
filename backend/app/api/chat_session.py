from fastapi import APIRouter
from sqlalchemy import func

from app.database.session import SessionLocal
from app.models.message import Message

router = APIRouter(
    prefix="/sessions",
    tags=["Chat Sessions"]
)


@router.get("")
def get_sessions():

    db = SessionLocal()

    sessions = (
        db.query(
            Message.conversation_id,
            func.max(Message.created_at).label("last_message"),
        )
        .group_by(Message.conversation_id)
        .order_by(func.max(Message.created_at).desc())
        .all()
    )

    db.close()

    return [
        {
            "conversation_id": s.conversation_id,
            "title": f"Chat {i+1}",
            "updated_at": s.last_message,
        }
        for i, s in enumerate(sessions)
    ]