import dbconnect from "@/lib/db";
import { ObjectId } from "mongodb";

export default async function CollegeDetails({ params }) {
  const collection = await dbconnect("allCollege");
  const college = await collection.findOne({ _id: new ObjectId(params.id) });

  if (!college) {
    return <div className="p-8 text-red-600">❌ College not found</div>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{college.name}</h1>

      <img
        src={college.image}
        alt={college.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div className="space-y-3 text-gray-700">
        <p><strong>📅 Admission Date:</strong> {college.admissionDate}</p>
        <p><strong>⭐ Rating:</strong> {college.rating}</p>
        <p><strong>🧾 Admission Process:</strong> {college.admissionProcess}</p>
        <p><strong>📚 Research History:</strong> {college.researchHistory}</p>
        <p><strong>📄 Number of Research Papers:</strong> {college.numberOfResearch}</p>

        <div>
          <strong>🔬 Research Works:</strong>
          <ul className="list-disc ml-6 mt-1">
            {college.researchWorks?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <strong>🎉 Events:</strong>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            {college.events?.map((event, idx) => (
              <li key={idx}>
                <p className="font-semibold">{event.name} – <span className="font-normal">{event.date}</span></p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>🏟️ Sports Facilities:</strong>
          <p>{college.sports?.facilities || "N/A"}</p>
          <p><strong>Categories:</strong> {college.sports?.categories?.join(", ") || "N/A"}</p>
        </div>
      </div>
    </section>
  );
}
