from sqlalchemy.orm import Session
from app.models.message import Message


class ChatRepository:

    @staticmethod
    def add_message(db: Session, session_id, role, content):

        message = Message(
            session_id=session_id,
            role=role,
            content=content,
        )

        db.add(message)

        db.commit()

        db.refresh(message)

        return message