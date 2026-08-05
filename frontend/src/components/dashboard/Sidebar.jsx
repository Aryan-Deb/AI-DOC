import { useEffect, useState } from "react";
import { FileText, Upload, LogOut, Plus } from "lucide-react";

import { getDocuments } from "../../services/documentService";
import useDocumentStore from "../../store/documentStore";
import useChatStore from "../../store/chatStore";

export default function Sidebar() {
  const [documents, setDocuments] = useState([]);

  const { setSelectedPdf } = useDocumentStore();

  const {
    clearChat,
    setConversationId,
    setMessages,
  } = useChatStore();

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (error) {
      console.error("Failed to load documents:", error);
    }
  };

  const handleOpen = (doc) => {
    setSelectedPdf(
      `http://127.0.0.1:8000/uploads/${doc.filename}`
    );
  };

  const handleNewChat = () => {
    clearChat();
    setConversationId(null);
    setMessages([]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      {/* Logo */}
      <div className="p-6">

        <h1 className="text-2xl font-bold text-white">
          CogniDoc AI
        </h1>

        {/* Upload Button */}
        <button
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
        >
          <Upload size={18} />
          Upload PDF
        </button>

        {/* New Chat */}
        <button
          onClick={handleNewChat}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 text-white transition hover:bg-slate-800"
        >
          <Plus size={18} />
          New Chat
        </button>

      </div>

      {/* Documents */}
      <div className="flex-1 overflow-y-auto px-4">

        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Documents
        </h2>

        {documents.length === 0 ? (
          <div className="rounded-xl bg-slate-800 p-4 text-center text-slate-400">
            No documents uploaded
          </div>
        ) : (
          documents.map((doc) => (
            <div
              key={doc.document_id || doc.id}
              onClick={() => handleOpen(doc)}
              className="mb-3 cursor-pointer rounded-xl bg-slate-800 p-4 transition hover:bg-slate-700"
            >
              <div className="flex items-start gap-3">

                <FileText
                  size={20}
                  className="text-blue-400"
                />

                <div className="flex-1">

                  <p className="truncate font-medium text-white">
                    {doc.filename}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {doc.pages} Pages
                  </p>

                  <p className="text-xs text-slate-500">
                    {doc.chunks} Chunks
                  </p>

                </div>

              </div>
            </div>
          ))
        )}

      </div>

      {/* Logout */}
      <div className="p-5">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 text-white transition hover:bg-slate-800"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </div>
  );
}