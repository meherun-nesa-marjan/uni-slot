'use client';



import { signIn } from "next-auth/react"
import toast from 'react-hot-toast';
import SocialLogin from "./SocialLogin";
import Link from "next/link";
export default function LoginForm() {

  const handleLogin = async (e) => {
   
    
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    try {
      await signIn("credentials", { email, password, callbackUrl: "/" });
      //router.push("/");
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
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      alert("Authentication Failed");
      toast.error("FAILED to Log In");
    }
    
    
  
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 space-y-4">
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
        className="w-full bg-black text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Login
      </button>
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/register" className="text-orange-500 font-bold">
          Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </form>
  );
}
