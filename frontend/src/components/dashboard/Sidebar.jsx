import { useEffect, useMemo, useRef, useState } from "react";
import {
  FileText,
  Upload,
  LogOut,
  Plus,
  Sparkles,
  FolderOpen,
  Search,
  UserCircle2,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  getDocuments,
  uploadDocument,
} from "../../services/documentService";

import useDocumentStore from "../../store/documentStore";
import useChatStore from "../../store/chatStore";

export default function Sidebar() {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");

  const fileRef = useRef(null);

  const { selectedPdf, setSelectedPdf } =
    useDocumentStore();

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
    } catch (err) {
      console.error(err);
    }
  };

  const filteredDocuments = useMemo(() => {

    if (!search.trim()) return documents;

    return documents.filter((doc) =>
      doc.filename
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [documents, search]);

  const handleUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    try {

      const res = await uploadDocument(file);

      await loadDocuments();

      setSelectedPdf(
        `http://127.0.0.1:8000${res.document.file_url}`
      );

      e.target.value = "";

    } catch (err) {

      console.error(err);

      alert("Upload failed");

    }

  };

  const handleOpen = (doc) => {

    setSelectedPdf(
      `http://127.0.0.1:8000${doc.file_url}`
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
    <aside className="flex h-screen w-80 flex-col border-r border-white/10 bg-slate-950/70 backdrop-blur-2xl">

      {/* Logo */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-xl">

            <Sparkles
              size={24}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-2xl font-black text-white">

              CogniDoc AI

            </h1>

            <p className="text-sm text-slate-400">

              Enterprise Workspace

            </p>

          </div>

        </div>

      </div>

      {/* Profile */}

      <div className="px-6 pt-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600">

              <UserCircle2 size={28} />

            </div>

            <div>

              <h3 className="font-semibold text-white">

                AI Workspace

              </h3>

              <p className="text-xs text-slate-400">

                Ready to analyze

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Upload */}

      <div className="p-6">

        <button
          onClick={() => fileRef.current?.click()}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 font-semibold transition hover:scale-[1.02]"
        >

          <Upload size={20} />

          Upload PDF

        </button>

        <input
          ref={fileRef}
          hidden
          type="file"
          accept=".pdf"
          onChange={handleUpload}
        />

        <button
          onClick={handleNewChat}
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 transition hover:bg-white/10"
        >

          <Plus size={18} />

          New Chat

        </button>

      </div>

      {/* Search */}

      <div className="px-6">

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            value={search}
            onChange={(e)=>
              setSearch(e.target.value)
            }
            placeholder="Search documents..."
            className="w-full bg-transparent outline-none placeholder:text-slate-500"
          />

        </div>

      </div>

      {/* Documents */}

      <div className="mt-6 flex-1 overflow-y-auto px-6">

        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FolderOpen
              size={18}
              className="text-cyan-400"
            />

            <span className="font-semibold">

              Documents

            </span>

          </div>

          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">

            {filteredDocuments.length}

          </span>

        </div>

        {filteredDocuments.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-slate-500">

            No documents found

          </div>

        ) : (

          filteredDocuments.map((doc) => {

            const active =
              selectedPdf ===
              `http://127.0.0.1:8000${doc.file_url}`;

            return (

              <motion.div
                key={doc.id}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() =>
                  handleOpen(doc)
                }
                className={`mb-4 cursor-pointer rounded-2xl border p-4 transition ${
                  active
                    ? "border-cyan-500 bg-cyan-500/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10"
                }`}
              >

                <div className="flex gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">

                    <FileText
                      size={22}
                      className="text-cyan-300"
                    />

                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="truncate font-semibold">

                      {doc.filename}

                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">

                      <Clock3 size={13} />

                      {doc.pages} Pages

                    </div>

                    <div className="mt-1 text-xs text-slate-500">

                      {doc.chunks} Chunks

                    </div>

                  </div>

                </div>

              </motion.div>

            );

          })

        )}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500/10 py-4 text-red-300 transition hover:bg-red-500/20"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}