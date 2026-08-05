from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database.session import Base


class Message(Base):

    __tablename__ = "messages"

    id = Column(Integer, primary_key=True)

    conversation_id = Column(String, index=True)

    session_id = Column(
        Integer,
        ForeignKey("chat_sessions.id"),
        nullable=True,
    )

    role = Column(String)

    content = Column(String)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    session = relationship("ChatSession")