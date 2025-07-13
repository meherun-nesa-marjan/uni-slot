'use client';

import { Registerusers } from "@/app/action/auth/registeruser";
import SocialLogin from "@/app/login/components/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Registerform() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await Registerusers({ name, email, password });
      toast.success("Registration successful!");
      router.push("/"); 
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="max-w-md mx-auto mt-10 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full p-2 border rounded"
      />
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
        Register
      </button>
       <SocialLogin></SocialLogin>
       <p className="text-center">
        Already Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>

      </p>
     
    </form>
  );
}
