import dbconnect from "@/lib/db";
import Link from "next/link";

export default async function Colleges() {
  const collection = await dbconnect("allCollege");
  const data = await collection.find({}).toArray();

  const colleges = data.map((college) => ({
    ...college,
    _id: college._id.toString(),
  }));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">All Colleges</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
          <img
                src={college.image || "https://via.placeholder.com/400x200"}
                alt={college.name}
                className="w-full h-48 object-cover"
              />

            <h2 className="text-xl font-semibold mb-2">{college.name}</h2>

            <p className="text-sm text-gray-600">
              <strong>Rating:</strong> {college.rating || "N/A"} ⭐
            </p>
            <p className="text-sm text-gray-600">
              <strong>Admission Date:</strong> {college.admissionDate || "N/A"}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Research Papers:</strong> {college.numberOfResearch || 0}
            </p>

            <Link
              href={`/colleges/${college._id}`}
              className="inline-block bg-[#FF3115] text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
