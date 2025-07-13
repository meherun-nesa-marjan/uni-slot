'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">


      <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Sorry, this page doesn't exist or has been moved.</p>

      <Link
        href="/"
        className="px-6 py-3 bg-pink-600 text-white font-medium rounded hover:bg-pink-700 transition"
      >
        🔙 Back to Home
      </Link>

      <p className="mt-8 text-sm text-gray-500 italic">
        "Not all those who wander are lost — but this page definitely is."
      </p>
    </section>
  );
}
