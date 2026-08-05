from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    DateTime,
    Text,
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.session import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)

    filename = Column(String, nullable=False)

    document_id = Column(
        String,
        unique=True,
        nullable=False
    )

    file_url = Column(String, nullable=False)

    pages = Column(Integer)

    chunks = Column(Integer)

    summary = Column(Text)

    keywords = Column(Text)

    suggested_questions = Column(Text)

    owner_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    owner = relationship("User")