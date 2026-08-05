import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { askQuestion } from "../../services/chatService";

export default function ChatInput({
  messages,
  setMessages,
}) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);

  const send = async () => {
    if (!question.trim() || loading) return;

    const userQuestion = question.trim();

    setQuestion("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userQuestion,
      },
    ]);

    setLoading(true);

    try {
      const res = await askQuestion(
        userQuestion,
        conversationId
      );

      if (res.conversation_id) {
        setConversationId(res.conversation_id);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: res.answer,
          sources: res.sources || [],
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "⚠️ Something went wrong while contacting the AI.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="border-t border-slate-800 bg-slate-900 p-5">

      {loading && (
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
          <Loader2
            size={16}
            className="animate-spin"
          />
          CogniDoc AI is thinking...
        </div>
      )}

      <div className="flex gap-3">

        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Ask anything about your document..."
          className="flex-1 rounded-xl bg-slate-800 p-4 outline-none transition focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={send}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold transition hover:bg-blue-700 disabled:opacity-50"
        >
          <Send size={18} />
          Send
        </button>

      </div>
    </div>
  );
}