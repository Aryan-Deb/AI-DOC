import { useState } from "react";
import { login, me } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Login and save token
      await login(form);

      // Fetch logged-in user
      const currentUser = await me();

      // Update Auth Context
      setUser(currentUser);

      toast.success("Welcome back!");

      // Redirect to dashboard
      navigate("/dashboard", { replace: true });

    } catch (err) {
      console.error(err);
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl"
      >
        <h1 className="text-center text-4xl font-bold">
          CogniDoc AI
        </h1>

        <p className="mt-2 text-center text-slate-400">
          AI Document Intelligence
        </p>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="mt-8 w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          className="mt-4 w-full rounded-xl bg-slate-800 p-4 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <p className="mt-6 text-center text-slate-400">
          No account?
          <Link
            to="/register"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}