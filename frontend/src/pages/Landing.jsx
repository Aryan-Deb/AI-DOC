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
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-0 top-60 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[180px]" />

      </div>

      {/* Navbar */}

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

        <h1 className="text-3xl font-bold">

          CogniDoc AI

        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="rounded-xl px-5 py-3 transition hover:bg-white/10"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="relative z-20 mx-auto flex min-h-[80vh] max-w-7xl items-center px-8">

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

            <h1 className="text-6xl font-extrabold leading-tight">

              Chat with PDFs

              <br />

              Like Never Before.

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-400">

              Upload any PDF.

              Search instantly.

              Generate summaries.

              Ask questions.

              Powered by Gemini AI,

              OCR,

              ChromaDB,

              and Neon PostgreSQL.

            </p>

            <div className="mt-10 flex gap-5">

              <Link
                to="/register"
                className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-5 text-lg font-bold transition hover:scale-105 hover:bg-cyan-400"
              >

                Start Free

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/login"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg backdrop-blur transition hover:bg-white/10"
              >

                Live Demo

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}
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