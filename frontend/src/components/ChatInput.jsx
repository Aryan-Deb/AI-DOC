import { useState } from "react";
import { Loader2 } from "lucide-react";
import { streamChat } from "../services/chatStream";

function ChatInput({ messages, setMessages }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!question.trim() || loading) return;

    const userQuestion = question;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userQuestion,
      },
    ]);

    // Clear input
    setQuestion("");

    // Show assistant typing bubble
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "",
      },
    ]);

    setLoading(true);

    let aiText = "";

    try {
      await streamChat(userQuestion, (chunk) => {
        aiText += chunk;

        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            role: "assistant",
            text: aiText,
          };

          return updated;
        });
      });
    } catch (err) {
      console.error(err);

      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          role: "assistant",
          text: "❌ Something went wrong while contacting the server.",
        };

        return updated;
      });
    }

    setLoading(false);
  };

  return (
    <div className="border-t border-slate-800 bg-slate-900 p-5">

      <div className="flex gap-3">

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Ask anything about your document..."
          className="flex-1 rounded-xl bg-slate-800 p-4 outline-none text-white"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="flex items-center justify-center rounded-xl bg-blue-600 px-6 hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? (
            <Loader2
              className="animate-spin"
              size={20}
            />
          ) : (
            "Send"
          )}
        </button>

      </div>

    </div>
  );
}

export default ChatInput;