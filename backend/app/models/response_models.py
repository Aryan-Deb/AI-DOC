from pydantic import BaseModel


class UploadResponse(BaseModel):
    filename: str
    characters: int
    chunks: int
    stored_vectors: int


class ChatResponse(BaseModel):
    answer: str