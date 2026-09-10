✨ CogniDoc AI

<p align="center">
  <strong>AI-Powered Document Intelligence for Your PDFs</strong>
</p>

<p align="center">
  Upload documents • Search intelligently • Ask questions • Get contextual AI answers
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google" alt="Gemini">
  <img src="https://img.shields.io/badge/ChromaDB-Vector%20Search-FF6F61?style=for-the-badge" alt="ChromaDB">
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
</p>

🚀 What is CogniDoc AI?

CogniDoc AI is a full-stack document intelligence platform designed to make working with PDFs faster and more interactive.

Instead of manually reading through long documents, users can upload a PDF and use an AI workspace to:

📄 Upload PDF documents

🤖 Ask questions about their documents

🔎 Search document content semantically

🧠 Generate contextual AI answers

📝 Create document summaries

🔐 Manage authenticated accounts

📊 View document and AI insights

The project combines Retrieval-Augmented Generation (RAG) with modern web technologies to turn static PDFs into an interactive knowledge base.

🎯 Why CogniDoc AI?

Reading a large document can take hours.

CogniDoc AI aims to reduce that friction:

        📄 PDF
          │
          ▼
   ┌───────────────┐
   │ Text / OCR    │
   │ Processing    │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ Chunking &    │
   │ Vector Search │
   └───────┬───────┘
           │
           ▼
      🔎 ChromaDB
           │
           ▼
      User Question
           │
           ▼
   ┌───────────────┐
   │ Relevant      │
   │ Context       │
   └───────┬───────┘
           │
           ▼
      ✨ Gemini AI
           │
           ▼
     💬 AI Answer

✨ Core Features

📄 Smart PDF Upload

Upload PDF documents directly from the dashboard and build your document workspace.

🤖 AI Document Chat

Ask natural-language questions about your uploaded documents instead of manually searching through pages.

🔎 Semantic Search

Relevant document content can be retrieved using vector-based semantic search rather than relying only on exact keyword matches.

🧠 Gemini-Powered Responses

Google Gemini is used to generate contextual responses using retrieved document information.

📝 Document Intelligence

The platform is designed around document extraction, search, summarization, and question answering.

🔐 Authentication

User registration, login, JWT-based authentication, and protected dashboard routes.

📊 AI Workspace

A dashboard interface brings documents, chat, insights, storage information, and quick actions together in one workspace.

🛠️ Tech Stack

Frontend

Technology

Purpose

⚛️ React

UI

⚡ Vite

Development & build

🎨 Tailwind CSS

Styling

🧭 React Router

Routing

📡 Axios

API communication

🗃️ Zustand

State management

✨ Framer Motion

UI animations

🎯 Lucide React

Icons

🔔 React Hot Toast

Notifications

Backend

Technology

Purpose

🐍 Python

Backend language

🚀 FastAPI

REST API

🗄️ SQLAlchemy

Database ORM

🔐 JWT

Authentication

🔒 Password Hashing

Credential security

🧠 Google Gemini

Generative AI

🔎 ChromaDB

Vector / semantic search

📄 PyMuPDF / PDF processing

Document processing

Infrastructure

☁️ Neon PostgreSQL

⚡ Redis

🐳 Docker-ready architecture

▲ Vercel

🚀 Render

🏗️ Architecture

┌─────────────────────────────────────────────────────┐
│                    CogniDoc AI                      │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
              ┌────────────────────┐
              │ React + Vite       │
              │ Frontend           │
              └─────────┬──────────┘
                        │
                     Axios
                        │
                        ▼
              ┌────────────────────┐
              │ FastAPI            │
              │ Backend            │
              └─────────┬──────────┘
                        │
        ┌───────────────┼────────────────┐
        │               │                │
        ▼               ▼                ▼
   🔐 Auth        📄 Documents       🤖 AI / RAG
        │               │                │
        │               ▼                ▼
        │          PDF Processing     Gemini
        │               │                │
        │               ▼                │
        │           ChromaDB ◄──────────┘
        │
        ▼
   PostgreSQL / Neon

🧠 RAG Pipeline

CogniDoc AI is designed around a Retrieval-Augmented Generation workflow:

PDF Upload
    ↓
Document Processing
    ↓
Text Extraction / OCR
    ↓
Text Chunking
    ↓
Vector Representation
    ↓
ChromaDB
    ↓
Semantic Retrieval
    ↓
Relevant Document Context
    ↓
Google Gemini
    ↓
Contextual AI Response

This allows the AI response to be grounded in retrieved document content rather than treating every question as a completely standalone prompt.

📁 Project Structure

AI-DOC/
│
├── backend/
│   ├── app/
│   │   ├── auth/
│   │   ├── database/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   └── schemas/
│   │
│   ├── uploads/
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── auth/
│   │   ├── components/
│   │   │   ├── chat/
│   │   │   ├── dashboard/
│   │   │   └── pdf/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── ...
│
└── README.md

⚡ Quick Start

1. Clone

git clone https://github.com/Aryan-Deb/AI-DOC.git
cd AI-DOC

2. Backend

cd backend
python -m venv venv

Windows

venv\Scripts\activate

macOS / Linux

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

3. Environment Variables

Create:

backend/.env

Example:

GOOGLE_API_KEY=your_gemini_api_key
DATABASE_URL=your_neon_database_url
SECRET_KEY=your_secret_key

⚠️ Never commit API keys, passwords, database credentials, or .env files to GitHub.

4. Start FastAPI

python -m uvicorn app.main:app --reload

Backend:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs

5. Frontend

Open another terminal:

cd frontend
npm install
npm run dev

Frontend:

http://localhost:5173

🔐 Authentication

The authentication flow uses JWT:

Register
   ↓
POST /auth/register
   ↓
Login
   ↓
POST /auth/login
   ↓
JWT Access Token
   ↓
Frontend Storage
   ↓
Authenticated API Requests

Authentication endpoints

Method

Endpoint

Description

POST

/auth/register

Create an account

POST

/auth/login

Login

GET

/auth/me

Current authenticated user

📡 Document API

Method

Endpoint

Description

POST

/upload

Upload a PDF

GET

/documents/

Retrieve documents

Additional endpoints can support chat, conversations, search, and document processing depending on the current backend implementation.

🌐 Deployment

CogniDoc AI is structured for separate frontend and backend deployment.

Frontend

The React/Vite application can be deployed using Vercel.

Configure:

VITE_API_URL=https://your-backend-domain.com

Backend

The FastAPI application can be deployed using Render or another Python hosting platform.

Production configuration should include:

Database URL
Gemini API Key
JWT Secret
CORS configuration
Other application secrets

🔒 Security Checklist

Before deploying publicly:

Remove .env from Git tracking

Rotate any accidentally exposed API keys

Use a strong production JWT secret

Configure production CORS

Validate PDF file type and size

Protect private document endpoints

Enable HTTPS

Avoid logging passwords

Avoid exposing sensitive document content in logs

Recommended .gitignore:

.env
.env.*
venv/
__pycache__/
*.pyc
node_modules/
dist/

🗺️ Roadmap

Document Intelligence

Multiple PDF upload

Drag & drop uploads

Document deletion

Document favorites

Better page-level citations

Improved scanned-PDF OCR

Document comparison

Table extraction

AI

Streaming responses

Better conversation memory

Follow-up questions

AI-generated document insights

Custom AI instructions

Productivity

Export answers to PDF/DOCX

Conversation history

Advanced analytics

Search across multiple documents

Document sharing

Team collaboration

Engineering

Automated tests

CI/CD

Rate limiting

Production monitoring

Improved error handling

📸 Product

CogniDoc AI provides a dark, modern workspace focused on making document analysis feel like a dedicated AI product rather than a traditional file manager.

Upload → Understand → Search → Ask → Discover

👨‍💻 Author

Aryan Gehlawat

CogniDoc AI — Enterprise AI Document Intelligence

Built with:

React · FastAPI · Gemini · ChromaDB · PostgreSQL

⭐ Support

If you find this project interesting, consider giving the repository a ⭐.

Feedback, ideas, and contributions are welcome.
