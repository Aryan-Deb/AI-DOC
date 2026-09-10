CogniDoc AI

AI-powered document intelligence platform for working with PDF
documents using React, FastAPI, Google Gemini, semantic search, and a
modern AI workspace.

Overview

CogniDoc AI is a full-stack AI document intelligence application. Users
can create an account, log in, upload PDF documents, and interact with
their documents through an AI-powered workspace.

Features

PDF document upload

AI-powered document chat

Semantic/vector search with ChromaDB

Google Gemini integration

Document summaries and contextual answers

JWT authentication

Protected dashboard routes

Document workspace

AI insights dashboard

Modern responsive dark UI

React state management with Zustand

FastAPI REST backend

Tech Stack

Frontend

React

Vite

Tailwind CSS

React Router

Axios

Zustand

Framer Motion

Lucide React

React Hot Toast

Backend

Python

FastAPI

SQLAlchemy

Pydantic

JWT authentication

Password hashing

Google Gemini API

ChromaDB

PyMuPDF / PDF processing

Infrastructure

Neon PostgreSQL

Redis

Docker-ready architecture

Vercel

Render

Architecture

React + Vite
     |
     | REST API / Axios
     v
FastAPI Backend
     |
     +---- Authentication / JWT
     |
     +---- PDF Processing
     |
     +---- ChromaDB / Semantic Search
     |
     +---- Google Gemini
     |
     +---- Neon PostgreSQL

RAG Pipeline

PDF Upload
    ↓
Text Extraction / OCR
    ↓
Chunking
    ↓
Vector Storage
    ↓
ChromaDB
    ↓
User Question
    ↓
Semantic Retrieval
    ↓
Relevant Context
    ↓
Google Gemini
    ↓
AI Answer

Project Structure

AI-DOC/
├── backend/
│   ├── app/
│   │   ├── auth/
│   │   ├── database/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   └── schemas/
│   ├── uploads/
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── assets/
    │   ├── auth/
    │   ├── components/
    │   │   ├── chat/
    │   │   ├── dashboard/
    │   │   └── pdf/
    │   ├── layouts/
    │   ├── pages/
    │   ├── routes/
    │   ├── services/
    │   ├── store/
    │   ├── App.jsx
    │   └── index.css
    └── package.json

Local Development

Backend

cd backend

python -m venv venv

Windows:

venv\Scripts\activate

macOS/Linux:

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Create a backend .env file:

GOOGLE_API_KEY=your_gemini_api_key
DATABASE_URL=your_neon_database_url
SECRET_KEY=your_secret_key

Start FastAPI:

python -m uvicorn app.main:app --reload

API:

http://127.0.0.1:8000

Swagger docs:

http://127.0.0.1:8000/docs

Frontend

cd frontend
npm install
npm run dev

Frontend:

http://localhost:5173

For production:

npm run build

Authentication API

Method   Endpoint           Description

POST     /auth/register   Create an account
POST     /auth/login      Login and receive JWT
GET      /auth/me         Get authenticated user

Document API

Method   Endpoint        Description

POST     /upload       Upload a PDF
GET      /documents/   Get available documents

Additional chat, conversation, search, and document-processing endpoints
can be added as the application evolves.

Environment Variables

Never commit secrets to GitHub.

Recommended .gitignore entries:

.env
.env.*
venv/
__pycache__/
node_modules/
dist/
*.pyc

Deployment

The project supports separate frontend and backend deployment.

Frontend

The Vite frontend can be deployed to Vercel. Configure:

VITE_API_URL=https://your-backend-domain.com

Backend

The FastAPI backend can be deployed to Render or another Python hosting
provider.

Configure the production environment with the required database URL,
Gemini API key, JWT secret, CORS settings, and other application
variables.

Roadmap

Multiple PDF uploads

Drag-and-drop upload

Document deletion

Favorites

Conversation history

Streaming AI responses

Improved page citations

OCR improvements for scanned PDFs

Document comparison

Export answers to PDF/DOCX

Advanced analytics

Team collaboration

Rate limiting

Automated tests

CI/CD

Author

Aryan Gehlawat

Built as a full-stack AI document intelligence project using React,
FastAPI, Gemini, ChromaDB, and PostgreSQL.

License

No license has currently been specified for this repository. Add a
LICENSE file if you decide to open-source the project under a specific
license.

⭐ If you find CogniDoc AI useful, consider starring the repository.
