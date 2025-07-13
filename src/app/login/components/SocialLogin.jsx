"use client";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function SocialLogin() {
  const router = useRouter();

  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
    if (result.ok) {
      router.push("/");
      toast.success(`Logged In Successfully using ${providerName}`);
    } else {
      toast.error("Something Went Wrong");
    }
    console.log(result);
  };
  return (
    <div className="flex justify-center gap-8">
      <button
        onClick={() => handleSocialLogin("google")}
        className="bg-black text-white w-full flex justify-center px-4 py-4 rounded-full p-3"
      >
        <FaGoogle type="button" />
      </button>
      
    </div>
  );
}