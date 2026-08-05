function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-slate-400">
          Upload a PDF and ask your first question.
        </div>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-6 flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-2xl rounded-2xl px-5 py-4 whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ChatWindow;