from pydantic import BaseModel
from typing import Optional


class ChatRequest(BaseModel):

    question: str

    document: Optional[str] = None

    conversation_id: Optional[str] = None