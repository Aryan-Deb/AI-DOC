import { useState } from "react";
import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

      {/* Header */}

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500">

              <Bot size={24} className="text-white" />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                AI Workspace
              </h2>

              <p className="text-sm text-slate-400">
                Ask anything about your documents
              </p>

            </div>

          </div>

          <Sparkles className="text-cyan-400" />

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-hidden">

        {messages.length === 0 ? (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex h-full flex-col items-center justify-center px-10 text-center"
          >

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-xl">

              <Bot size={36} />

            </div>

            <h2 className="mb-3 text-3xl font-bold">
              Welcome to CogniDoc AI
            </h2>

            <p className="max-w-md text-slate-400">
              Upload a document and ask questions,
              generate summaries, extract insights,
              and chat with your PDFs using AI.
            </p>

          </motion.div>

        ) : (

          <ChatMessages
            messages={messages}
          />

        )}

      </div>

      {/* Input */}

      <div className="border-t border-white/10 bg-slate-900/40 p-5 backdrop-blur-lg">

        <ChatInput
          messages={messages}
          setMessages={setMessages}
        />

      </div>

    </div>
  );
}