from sqlalchemy import Column,Integer,ForeignKey,DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.database.session import Base


class ChatSession(Base):

    __tablename__="chat_sessions"

    id=Column(Integer,primary_key=True,index=True)

    owner_id=Column(
        Integer,
        ForeignKey("users.id")
    )

    document_id=Column(
        Integer,
        ForeignKey("documents.id")
    )

    created_at=Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    owner=relationship("User")

    document=relationship("Document")