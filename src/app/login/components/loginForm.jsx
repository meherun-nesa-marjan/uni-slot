'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showForgot, setShowForgot] = useState(false);
  const [emailToReset, setEmailToReset] = useState("");
  const [loadingReset, setLoadingReset] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
    } catch (error) {
      console.log(error);
      toast.error("Authentication Failed");
    }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setLoadingReset(true);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailToReset }),
    });

    const data = await res.json();
    setLoadingReset(false);

    if (res.ok) {
      toast.success("Reset email sent!");
      setShowForgot(false);
      setEmailToReset("");
    } else {
      toast.error(data.error || "Error sending reset email");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white px-4 py-2 rounded-full hover:bg-green-700"
        >
          Login
        </button>
      </form>

      {/* Forgot Password Button */}
      <button
        type="button"
        onClick={() => setShowForgot(true)}
        className="text-sm text-blue-600 hover:underline mt-2"
      >
        Forgot Password?
      </button>

      {/* Forgot Password Form (conditionally rendered) */}
      {showForgot && (
        <form onSubmit={handleForgotSubmit} className="mt-3 space-y-2">
          <input
            type="email"
            value={emailToReset}
            onChange={(e) => setEmailToReset(e.target.value)}
            required
            placeholder="Enter your email"
            className="border rounded p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            disabled={loadingReset}
          >
            {loadingReset ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      )}

      <SocialLogin />

      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
}
