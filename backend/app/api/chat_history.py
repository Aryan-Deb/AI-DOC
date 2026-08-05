from fastapi import APIRouter
from app.database.session import SessionLocal
from app.models.message import Message

router = APIRouter(
    prefix="/history",
    tags=["History"],
)


@router.get("/{conversation_id}")
def get_history(conversation_id: str):

    db = SessionLocal()

    messages = (
        db.query(Message)
        .filter(
            Message.conversation_id == conversation_id
        )
        .order_by(Message.id.asc())
        .all()
    )

    db.close()

    return [
        {
            "role": m.role,
            "content": m.content,
            "created_at": m.created_at,
        }
        for m in messages
    ]


@router.delete("/{conversation_id}")
def delete_chat(conversation_id: str):

    db = SessionLocal()

    db.query(Message).filter(
        Message.conversation_id == conversation_id
    ).delete()

    db.commit()

    db.close()

    return {
        "message": "Conversation deleted successfully"
    }