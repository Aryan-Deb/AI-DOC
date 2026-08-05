import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { motion } from "framer-motion";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await register(form);

      toast.success("Account created successfully 🎉");

      navigate("/login");

    } catch {

      toast.error("Registration failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[170px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-full max-w-md"
      >

        <div className="rounded-[34px] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-2xl">

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">

              <Sparkles
                size={34}
                className="text-white"
              />

            </div>

            <h1 className="mt-6 text-4xl font-black text-white">

              Create Account

            </h1>

            <p className="mt-3 text-slate-400">

              Join

              <span className="ml-2 font-semibold text-cyan-400">

                CogniDoc AI

              </span>

            </p>

          </div>

          <form
            onSubmit={submit}
            className="mt-10 space-y-6"
          >

            {/* Full Name */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-300">

                Full Name

              </label>

              <div className="flex items-center rounded-2xl border border-white/10 bg-slate-900/70 px-4">

                <User
                  size={18}
                  className="text-slate-500"
                />

                <input
                  required
                  value={form.full_name}
                  placeholder="Aryan Gehlawat"
                  onChange={(e)=>
                    setForm({
                      ...form,
                      full_name:e.target.value,
                    })
                  }
                  className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-300">

                Email

              </label>

              <div className="flex items-center rounded-2xl border border-white/10 bg-slate-900/70 px-4">

                <Mail
                  size={18}
                  className="text-slate-500"
                />

                <input
                  type="email"
                  required
                  value={form.email}
                  placeholder="you@example.com"
                  onChange={(e)=>
                    setForm({
                      ...form,
                      email:e.target.value,
                    })
                  }
                  className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-300">

                Password

              </label>

              <div className="flex items-center rounded-2xl border border-white/10 bg-slate-900/70 px-4">

                <Lock
                  size={18}
                  className="text-slate-500"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  required
                  value={form.password}
                  placeholder="••••••••"
                  onChange={(e)=>
                    setForm({
                      ...form,
                      password:e.target.value,
                    })
                  }
                  className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-slate-500"
                />

                <button
                  type="button"
                  onClick={()=>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="text-slate-500 hover:text-cyan-400"
                >

                  {showPassword
                    ? <EyeOff size={18}/>
                    : <Eye size={18}/>
                  }

                </button>

              </div>

            </div>
                        <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-bold text-white shadow-xl transition hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <Loader2
                    size={22}
                    className="animate-spin"
                  />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={20} />
                </>
              )}

            </motion.button>

            <div className="relative py-2">

              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>

              <div className="relative flex justify-center">

                <span className="bg-slate-900 px-4 text-sm text-slate-500">

                  OR

                </span>

              </div>

            </div>

            <Link
              to="/login"
              className="block w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-center text-lg font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >

              Already have an account? Login

            </Link>

          </form>

        </div>

      </motion.div>

      {/* Floating Decorations */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24 hidden h-28 w-28 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl lg:block"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-24 hidden h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl lg:block"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-44 top-24 hidden h-20 w-20 rounded-full border border-cyan-400/20 lg:block"
      />

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">

        <p className="text-sm text-slate-500">

          Powered by

        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">

          {[
            "React",
            "FastAPI",
            "Gemini",
            "ChromaDB",
            "Neon",
          ].map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300"
            >

              {tech}

            </span>

          ))}

        </div>

      </div>

    </div>

  );

}