from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.models.request_models import ChatRequest
from app.services.rag import RAGService

router = APIRouter(tags=["Streaming"])


@router.post("/chat/stream")
def chat_stream(request: ChatRequest):

    def generate():

        answer = RAGService.ask(
            question=request.question,
            document=request.document,
        )["answer"]

        words = answer.split()

        for word in words:
            yield word + " "

    return StreamingResponse(
        generate(),
        media_type="text/plain",
    )