import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {

    e.preventDefault();

    try {

      await register(form);

      toast.success("Account created");

      navigate("/login");

    } catch {

      toast.error("Registration failed");

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-10"
      >

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="mt-8 w-full rounded-xl bg-slate-800 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              full_name: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="mt-4 w-full rounded-xl bg-slate-800 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full rounded-xl bg-slate-800 p-4"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          className="mt-8 w-full rounded-xl bg-blue-600 py-4"
        >
          Register
        </button>

        <p className="mt-6 text-center text-slate-400">

          Already have an account?

          <Link
            className="ml-2 text-blue-400"
            to="/login"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );
}