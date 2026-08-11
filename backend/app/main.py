import os

# Import Models
import app.models.user
import app.models.document
import app.models.message
import app.models.chat_session

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# Routers
from app.api.upload import router as upload_router
from app.api.chat import router as chat_router
from app.api.chat_history import router as history_router
from app.api.chat_stream import router as chat_stream_router
from app.api.document import router as document_router
from app.api.conversations import router as conversations_router
from app.auth.routes import router as auth_router
from app.api.chat_session import router as sessions_router


app = FastAPI(
    title="CogniDoc AI",
    version="2.0.0",
    description="Enterprise AI Document Intelligence Platform",
)


# =============================
# CORS
# =============================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-doc-brown.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =============================
# Static Files
# =============================

os.makedirs("uploads", exist_ok=True)

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)


# =============================
# API Routes
# =============================

app.include_router(auth_router)
app.include_router(upload_router)
app.include_router(chat_router)
app.include_router(chat_stream_router)
app.include_router(document_router)
app.include_router(conversations_router)
app.include_router(history_router)
app.include_router(sessions_router)


# =============================
# Health Check
# =============================

@app.get("/", tags=["Health"])
def root():
    return {
        "message": "CogniDoc AI Backend Running 🚀",
        "version": "2.0.0",
        "status": "healthy",
    }