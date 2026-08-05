import { useEffect, useState } from "react";
import {
  FileText,
  Brain,
  Sparkles,
  Loader2,
  Hash,
  BarChart3,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import api from "../../api/axios";

export default function RightPanel() {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLatestDocument();
  }, []);

  const loadLatestDocument = async () => {
    try {
      const res = await api.get("/documents");

      if (res.data.length > 0) {
        setDocument(res.data[0]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-80 border-l border-slate-800 bg-slate-900 flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  return (
    <div className="w-80 border-l border-slate-800 bg-slate-900 overflow-y-auto">
      <div className="p-6">

        {/* Header */}
        <h1 className="flex items-center gap-3 text-2xl font-bold">
          <Brain className="text-blue-500" />
          AI Insights
        </h1>

        {!document ? (
          <div className="mt-8 rounded-2xl bg-slate-800 p-6 text-center text-slate-400">
            Upload a PDF to unlock AI insights.
          </div>
        ) : (
          <>
            {/* Document */}
            <div className="mt-8 rounded-2xl bg-slate-800 p-5">

              <h2 className="flex items-center gap-2 font-semibold">
                <FileText size={18} />
                Document
              </h2>

              <p className="mt-4 break-all text-blue-400 font-semibold">
                {document.filename}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-slate-900 p-3">
                  <p className="text-xs text-slate-400">Pages</p>
                  <p className="mt-1 text-xl font-bold">
                    {document.pages}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-3">
                  <p className="text-xs text-slate-400">Chunks</p>
                  <p className="mt-1 text-xl font-bold">
                    {document.chunks}
                  </p>
                </div>

              </div>

            </div>

            {/* Summary */}
            <div className="mt-6 rounded-2xl bg-slate-800 p-5">

              <h2 className="flex items-center gap-2 font-semibold">
                <Sparkles size={18} />
                AI Summary
              </h2>

              <div className="mt-4 text-sm leading-7 whitespace-pre-wrap text-slate-300">

                {document.summary ? (
                  document.summary
                ) : (
                  <div className="flex items-center gap-3 text-blue-400">
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Generating AI Summary...
                  </div>
                )}

              </div>

            </div>

            {/* Statistics */}
            <div className="mt-6 rounded-2xl bg-slate-800 p-5">

              <h2 className="flex items-center gap-2 font-semibold">
                <BarChart3 size={18} />
                Statistics
              </h2>

              <div className="mt-5 space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-slate-400">Pages</span>
                  <span>{document.pages}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Chunks</span>
                  <span>{document.chunks}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    AI Index
                  </span>

                  <span className="flex items-center gap-1 text-green-400">
                    <CheckCircle2 size={16} />
                    Indexed
                  </span>

                </div>

              </div>

            </div>

            {/* AI Keywords */}
            <div className="mt-6 rounded-2xl bg-slate-800 p-5">

              <h2 className="flex items-center gap-2 font-semibold">
                <Hash size={18} />
                AI Keywords
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">

                {document.keywords ? (
                  document.keywords
                    .split(",")
                    .map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-600/20 border border-blue-500/30 px-3 py-1 text-xs text-blue-300"
                      >
                        {tag.trim()}
                      </span>
                    ))
                ) : (
                  <p className="text-slate-500 text-sm">
                    No keywords generated.
                  </p>
                )}

              </div>

            </div>

            {/* Suggested Questions */}
            <div className="mt-6 rounded-2xl bg-slate-800 p-5">

              <h2 className="flex items-center gap-2 font-semibold">
                <MessageSquare size={18} />
                Suggested Questions
              </h2>

              <div className="mt-4 space-y-3">

                {document.questions ? (
                  document.questions
                    .split("\n")
                    .filter((q) => q.trim())
                    .map((question) => (
                      <button
                        key={question}
                        className="w-full rounded-xl bg-slate-900 p-3 text-left text-sm hover:bg-slate-700 transition"
                      >
                        {question}
                      </button>
                    ))
                ) : (
                  <p className="text-slate-500 text-sm">
                    No suggestions available.
                  </p>
                )}

              </div>

            </div>

          </>
        )}
      </div>
    </div>
  );
}