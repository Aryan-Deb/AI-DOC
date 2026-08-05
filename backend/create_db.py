from app.database.session import Base, engine

from app.models.user import User
from app.models.document import Document
from app.models.chat_session import ChatSession
from app.models.message import Message

Base.metadata.create_all(bind=engine)

print("Database Ready 🚀")