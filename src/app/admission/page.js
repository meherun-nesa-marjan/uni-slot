import dbconnect from "@/lib/db";
import Link from "next/link";

export default async function Admission() {
  const collection = await dbconnect("allCollege");
  const data = await collection.find({}).toArray();

  const colleges = data.map(c => ({
    _id: c._id.toString(),
    name: c.name,
  }));

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Select a College for Admission</h1>
      <ul className="space-y-4">
        {colleges.map(college => (
          <li key={college._id}>
            <Link
              href={`/admission/${college._id}`}
              className="block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              {college.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
