import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  Bot,
  User,
  FileText,
  Copy,
  CheckCircle,
} from "lucide-react";

import useDocumentStore from "../../store/documentStore";

export default function ChatMessages({ messages }) {
  const bottomRef = useRef(null);

  const { setCurrentPage } = useDocumentStore();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const copyText = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 p-6">

      {messages.length === 0 ? (
        <div className="mt-24 text-center">

          <Bot
            size={70}
            className="mx-auto text-blue-500"
          />

          <h1 className="mt-6 text-3xl font-bold text-white">
            CogniDoc AI
          </h1>

          <p className="mt-3 text-slate-400">
            Upload a document and ask anything.
          </p>

        </div>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-8 flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div className="flex max-w-[92%] gap-3">

              {msg.role === "assistant" && (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                  <Bot size={18} />
                </div>
              )}

              <div className="flex-1">

                <div
                  className={`rounded-2xl px-6 py-5 shadow-lg ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-100"
                  }`}
                >

                  {msg.role === "assistant" ? (
                    <div className="prose prose-invert max-w-none">

                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code({
                            inline,
                            className,
                            children,
                            ...props
                          }) {

                            const match =
                              /language-(\w+)/.exec(
                                className || ""
                              );

                            return !inline && match ? (
                              <SyntaxHighlighter
                                style={tomorrow}
                                language={match[1]}
                                PreTag="div"
                              >
                                {String(children).replace(
                                  /\n$/,
                                  ""
                                )}
                              </SyntaxHighlighter>
                            ) : (
                              <code
                                className={className}
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          },
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>

                    </div>
                  ) : (
                    <p>{msg.text}</p>
                  )}

                </div>

                {msg.role === "assistant" && (

                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">

                    <button
                      onClick={() =>
                        copyText(msg.text)
                      }
                      className="flex items-center gap-1 hover:text-white"
                    >
                      <Copy size={14} />
                      Copy
                    </button>

                    <span>
                      {new Date().toLocaleTimeString()}
                    </span>

                  </div>

                )}

                {msg.role === "assistant" &&
                  msg.sources &&
                  msg.sources.length > 0 && (

                    <div className="mt-4 rounded-xl bg-slate-900 p-4">

                      <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-300">

                        <FileText size={17} />

                        Sources

                      </h3>

                      <div className="space-y-2">

                        {msg.sources.map((source, i) => (

                          <button
                            key={i}
                            onClick={() =>
                              setCurrentPage(
                                source.page
                              )
                            }
                            className="flex w-full items-center justify-between rounded-lg bg-slate-800 px-4 py-3 transition hover:bg-slate-700"
                          >

                            <span>

                              📄 {source.document}

                            </span>

                            <span className="text-blue-400">

                              Page {source.page}

                            </span>

                          </button>

                        ))}

                      </div>

                    </div>

                  )}

              </div>

              {msg.role === "user" && (

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-700">

                  <User size={18} />

                </div>

              )}

            </div>
          </div>
        ))
      )}

      <div ref={bottomRef} />

    </div>
  );
}