import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Brain,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute right-[-120px] top-32 h-[560px] w-[560px] rounded-full bg-indigo-600/20 blur-[180px]" />
        <div className="absolute left-1/2 top-[45%] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      {/* Navbar */}

      <nav className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">

        <Link to="/" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          <span className="text-white">Cogni</span>
          <span className="text-cyan-400">Doc</span>
          <span className="text-white"> AI</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">

          <Link
            to="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white sm:px-5 sm:py-3 sm:text-base"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400 sm:px-6 sm:py-3 sm:text-base"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="relative z-20 mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-20">

        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">

              <Sparkles size={18} />

              Enterprise AI Document Intelligence

            </div>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

              Chat with PDFs

              <br />

              Like Never Before.

            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">

              Upload any PDF.

              Search instantly.

              Generate summaries.

              Ask questions.

              Powered by Gemini AI,

              OCR,

              ChromaDB,

              and Neon PostgreSQL.

            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">

              <Link
                to="/register"
                className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400 sm:px-8 sm:py-5 sm:text-lg"
              >

                Start Free

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/login"
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/10 sm:px-8 sm:py-5 sm:text-lg"
              >

                Live Demo

              </Link>

            </div>

          </motion.div>

        </div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
            <div className="rounded-[22px] border border-white/10 bg-slate-950/90 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">COGNIDOC AI</p>
                  <h3 className="mt-1 text-lg font-bold">Document Assistant</h3>
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  AI Ready
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Documents
                  </p>
                  {["Research Paper.pdf", "Project Report.pdf", "Financial Report.pdf"].map(
                    (file, index) => (
                      <div
                        key={file}
                        className={`mb-2 rounded-xl border px-3 py-3 text-xs ${
                          index === 0
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                            : "border-white/5 bg-white/[0.02] text-slate-400"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <FileText size={14} />
                          <span className="truncate">{file}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    <p className="text-xs font-semibold text-slate-300">AI Conversation</p>
                  </div>

                  <div className="space-y-3">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-cyan-500/15 px-4 py-3 text-xs leading-5 text-cyan-100">
                      Summarize the key findings from this document.
                    </div>

                    <div className="max-w-[90%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-5 text-slate-300">
                      The document identifies three major findings: improved
                      retrieval accuracy, faster document analysis, and stronger
                      contextual responses.
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs text-slate-500">
                    Ask anything about your PDF...
                    <ArrowRight className="ml-auto text-cyan-400" size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </section>
      {/* ========================= */}
      {/* Stats */}
      {/* ========================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-8 md:grid-cols-4">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              99%
            </h2>

            <p className="mt-4 text-slate-400">
              OCR Accuracy
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold text-indigo-400">
              5x
            </h2>

            <p className="mt-4 text-slate-400">
              Faster Search
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold text-green-400">
              AI
            </h2>

            <p className="mt-4 text-slate-400">
              Gemini Powered
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold text-pink-400">
              24/7
            </h2>

            <p className="mt-4 text-slate-400">
              Instant Answers
            </p>
          </motion.div>

        </div>

      </section>

      {/* ========================= */}
      {/* Features */}
      {/* ========================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-8 pb-32">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">

            Everything You Need

          </h2>

          <p className="mt-6 text-lg text-slate-400">

            Enterprise AI tools for understanding documents faster.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <Brain
              size={42}
              className="text-cyan-400"
            />

            <h3 className="mt-6 text-2xl font-bold">

              AI Chat

            </h3>

            <p className="mt-4 text-slate-400">

              Ask natural language questions and receive contextual answers.

            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <FileText
              size={42}
              className="text-indigo-400"
            />

            <h3 className="mt-6 text-2xl font-bold">

              PDF Intelligence

            </h3>

            <p className="mt-4 text-slate-400">

              Extract, search, summarize and navigate documents instantly.

            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <Sparkles
              size={42}
              className="text-yellow-400"
            />

            <h3 className="mt-6 text-2xl font-bold">

              OCR

            </h3>

            <p className="mt-4 text-slate-400">

              Scan image-based PDFs and convert them into searchable text.

            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <ShieldCheck
              size={42}
              className="text-green-400"
            />

            <h3 className="mt-6 text-2xl font-bold">

              Secure Cloud

            </h3>

            <p className="mt-4 text-slate-400">

              Built with Neon PostgreSQL and enterprise-ready architecture.

            </p>

          </motion.div>

        </div>

      </section>
            {/* ========================= */}
      {/* How It Works */}
      {/* ========================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-8 py-32">

        <div className="text-center">

          <h2 className="text-5xl font-bold">

            How It Works

          </h2>

          <p className="mt-5 text-lg text-slate-400">

            Four simple steps to unlock AI-powered document intelligence.

          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-4">

          {[
            {
              number: "01",
              title: "Upload PDF",
              desc: "Upload any scanned or digital PDF securely.",
            },
            {
              number: "02",
              title: "AI Reads",
              desc: "OCR + Gemini process every page automatically.",
            },
            {
              number: "03",
              title: "Vector Search",
              desc: "ChromaDB indexes every chunk for semantic retrieval.",
            },
            {
              number: "04",
              title: "Ask Anything",
              desc: "Receive accurate answers with page references.",
            },
          ].map((step) => (

            <motion.div
              key={step.number}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-6 text-6xl font-extrabold text-cyan-500/20">

                {step.number}

              </div>

              <h3 className="text-2xl font-bold">

                {step.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                {step.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ========================= */}
      {/* Technology Stack */}
      {/* ========================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-8 pb-32">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-14 shadow-2xl">

          <div className="text-center">

            <h2 className="text-5xl font-bold">

              Powered By Modern AI

            </h2>

            <p className="mt-6 text-lg text-slate-400">

              Built using enterprise-grade technologies.

            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-4">

            {[
              "Gemini AI",
              "FastAPI",
              "React",
              "TailwindCSS",
              "ChromaDB",
              "Neon PostgreSQL",
              "LangChain",
              "PyMuPDF",
              "OCR",
              "JWT Auth",
              "Redis",
              "Docker Ready",
            ].map((tech) => (

              <motion.div
                key={tech}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-5 text-center font-semibold backdrop-blur-xl transition hover:border-cyan-400"
              >

                {tech}

              </motion.div>

            ))}

          </div>

        </div>

      </section>
            {/* ========================= */}
      {/* Testimonials */}
      {/* ========================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-8 py-28">

        <div className="text-center">

          <h2 className="text-5xl font-bold">

            Loved by Developers

          </h2>

          <p className="mt-5 text-lg text-slate-400">

            Built for students, researchers and professionals.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {[
            {
              name: "Sarah Johnson",
              role: "AI Researcher",
              review:
                "CogniDoc AI reduced hours of document reading into minutes. The AI citations are incredibly accurate.",
            },
            {
              name: "Michael Chen",
              role: "Software Engineer",
              review:
                "The PDF chat experience feels magical. It's faster than manually searching documents.",
            },
            {
              name: "Emily Davis",
              role: "Product Manager",
              review:
                "The OCR, semantic search and AI summaries have transformed how our team works.",
            },
          ].map((user) => (

            <motion.div
              key={user.name}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-5 flex">

                {[1,2,3,4,5].map((i)=>(

                  <span
                    key={i}
                    className="text-xl text-yellow-400"
                  >
                    ★
                  </span>

                ))}

              </div>

              <p className="leading-8 text-slate-300">

                "{user.review}"

              </p>

              <div className="mt-8">

                <h3 className="font-bold">

                  {user.name}

                </h3>

                <p className="text-sm text-slate-500">

                  {user.role}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ========================= */}
      {/* CTA */}
      {/* ========================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-8 pb-32">

        <motion.div

          whileHover={{
            scale: 1.01,
          }}

          className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-16 shadow-[0_0_80px_rgba(6,182,212,0.25)]"

        >

          <div className="flex flex-col items-center text-center">

            <h2 className="max-w-4xl text-6xl font-black leading-tight">

              Ready to Experience

              <br />

              AI Document Intelligence?

            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-cyan-100">

              Upload your first PDF and start chatting with your documents
              using Gemini AI, OCR and Retrieval-Augmented Generation.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                to="/register"
                className="rounded-2xl bg-white px-10 py-5 text-lg font-bold text-slate-900 transition hover:scale-105"
              >

                Get Started Free

              </Link>

              <Link
                to="/login"
                className="rounded-2xl border border-white/30 px-10 py-5 text-lg font-semibold backdrop-blur-xl transition hover:bg-white/10"
              >

                Login

              </Link>

            </div>

          </div>

        </motion.div>

      </section>
            {/* ========================= */}
      {/* Footer */}
      {/* ========================= */}

      <footer className="relative z-20 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-8 py-20">

          <div className="grid gap-12 md:grid-cols-4">

            {/* Brand */}

            <div>

              <h2 className="text-3xl font-black">

                CogniDoc AI

              </h2>

              <p className="mt-6 leading-8 text-slate-400">

                Enterprise AI Document Intelligence Platform built with
                FastAPI, React, Gemini AI, ChromaDB and Neon PostgreSQL.

              </p>

            </div>

            {/* Product */}

            <div>

              <h3 className="mb-5 text-lg font-bold">

                Product

              </h3>

              <div className="space-y-3 text-slate-400">

                <p className="transition hover:text-white cursor-pointer">
                  AI Chat
                </p>

                <p className="transition hover:text-white cursor-pointer">
                  OCR Engine
                </p>

                <p className="transition hover:text-white cursor-pointer">
                  Semantic Search
                </p>

                <p className="transition hover:text-white cursor-pointer">
                  AI Summary
                </p>

              </div>

            </div>

            {/* Resources */}

            <div>

              <h3 className="mb-5 text-lg font-bold">

                Resources

              </h3>

              <div className="space-y-3 text-slate-400">

                <p className="transition hover:text-white cursor-pointer">
                  Documentation
                </p>

                <p className="transition hover:text-white cursor-pointer">
                  API
                </p>

                <p className="transition hover:text-white cursor-pointer">
                  GitHub
                </p>

                <p className="transition hover:text-white cursor-pointer">
                  Support
                </p>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="mb-5 text-lg font-bold">

                Contact

              </h3>

              <div className="space-y-3 text-slate-400">

                <p>

                  hello@cognidoc.ai

                </p>

                <p>

                  India

                </p>

                <p>

                  Enterprise Ready

                </p>

              </div>

            </div>

          </div>

          <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-slate-500">

              © 2026 CogniDoc AI. All rights reserved.

            </p>

            <div className="flex gap-4">

              {["React", "FastAPI", "Gemini", "Neon"].map((item) => (

                <motion.div
                  key={item}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                  }}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300"
                >

                  {item}

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Glow */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-3xl" />

      </footer>

    </div>
  );
}