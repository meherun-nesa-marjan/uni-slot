'use client';
import { useState } from "react";
import Link from "next/link";

export default function CollegeClient({ colleges }) {
  const [search, setSearch] = useState("");

  if (!Array.isArray(colleges)) {
    return <div className="p-6 text-red-600">❌ No colleges provided.</div>;
  }

  const filteredColleges = colleges
    .filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 3); 

  return (
    <div className="mx-auto w-7xl">
      {/*  Search bar under navbar */}
      <div className="my-8">
        <input
          type="text"
          placeholder="Search for a college..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full max-w-md mx-auto block"
        />
      </div>

      {/*  College cards section */}
      {filteredColleges.length === 0 ? (
        <p className="text-center text-gray-500">No colleges found.</p>
      ) : (
        <section className="grid grid-cols-1 mb-8 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <div
              key={college._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={college.image || "https://via.placeholder.com/400x200"}
                alt={college.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Admission:</strong> {college.admissionDate || "N/A"}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Events:</strong> {college.events?.length || 0}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Research Papers:</strong> {college.numberOfResearch || 0}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Sports:</strong>{" "}
                  {college.sports?.categories?.join(", ") || "N/A"}
                </p>
                <Link
                  href={`/colleges/${college._id}`}
                  className="inline-block mt-2 bg-[#FF3115] text-white text-sm px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
