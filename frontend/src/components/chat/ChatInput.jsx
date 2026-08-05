import { useState, useRef } from "react";

import {
  Send,
  Loader2,
  Paperclip,
  Mic,
} from "lucide-react";

import { motion } from "framer-motion";

import { askQuestion } from "../../services/chatService";

export default function ChatInput({
  messages,
  setMessages,
}) {

  const [question, setQuestion] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [
    conversationId,
    setConversationId,
  ] = useState(null);

  const textareaRef =
    useRef(null);

  const autoResize = () => {

    const textarea =
      textareaRef.current;

    if (!textarea) return;

    textarea.style.height =
      "auto";

    textarea.style.height =
      textarea.scrollHeight + "px";

  };

  const send = async () => {

    if (
      !question.trim() ||
      loading
    )
      return;

    const userQuestion =
      question.trim();

    setQuestion("");

    if (textareaRef.current) {
      textareaRef.current.style.height =
        "56px";
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userQuestion,
      },
    ]);

    setLoading(true);

    try {

      const res =
        await askQuestion(
          userQuestion,
          conversationId
        );

      if (
        res.conversation_id
      ) {

        setConversationId(
          res.conversation_id
        );

      }

      setMessages((prev) => [
        ...prev,
        {
          role:
            "assistant",

          text:
            res.answer,

          sources:
            res.sources ||
            [],
        },
      ]);

    } catch (err) {

      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role:
            "assistant",

          text:
            "⚠️ Something went wrong while contacting the AI.",
        },
      ]);

    }

    setLoading(false);

  };

  return (

    <div className="border-t border-white/10 bg-slate-950 p-6 backdrop-blur-xl">

      {loading && (

        <motion.div

          initial={{
            opacity: 0,
            y: 10,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          className="mb-4 flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-cyan-300"

        >

          <Loader2
            size={18}
            className="animate-spin"
          />

          <span>

            CogniDoc AI is thinking...

          </span>

        </motion.div>

      )}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">

        <textarea

          ref={textareaRef}

          rows={1}

          value={question}

          placeholder="Ask anything about your document..."

          onChange={(e) => {

            setQuestion(
              e.target.value
            );

            autoResize();

          }}

          onKeyDown={(e) => {

            if (
              e.key ===
                "Enter" &&
              !e.shiftKey
            ) {

              e.preventDefault();

              send();

            }

          }}

          className="max-h-40 min-h-[56px] w-full resize-none bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"

        />
                <div className="mt-3 flex items-center justify-between px-2">

          {/* Left Actions */}

          <div className="flex items-center gap-2">

            <button
              className="rounded-xl p-3 text-slate-400 transition hover:bg-white/10 hover:text-cyan-400"
              title="Attach file (Coming Soon)"
            >
              <Paperclip size={20} />
            </button>

            <button
              className="rounded-xl p-3 text-slate-400 transition hover:bg-white/10 hover:text-cyan-400"
              title="Voice (Coming Soon)"
            >
              <Mic size={20} />
            </button>

          </div>

          {/* Right Actions */}

          <div className="flex items-center gap-4">

            <span className="hidden text-xs text-slate-500 md:block">
              Enter ↵ to send • Shift + Enter for new line
            </span>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.94,
              }}
              onClick={send}
              disabled={
                loading ||
                !question.trim()
              }
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 shadow-lg transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <Loader2
                  size={22}
                  className="animate-spin text-white"
                />
              ) : (
                <Send
                  size={22}
                  className="text-white"
                />
              )}
            </motion.button>

          </div>

        </div>

      </div>

    </div>

  );

}