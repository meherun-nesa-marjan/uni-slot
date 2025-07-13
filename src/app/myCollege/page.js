import dbconnect from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ReviewForm from "./components/ReviewForm";
import Link from "next/link";

export default async function MyCollegePage() {
  const session = await getServerSession(authOptions);

  // 🔐 Redirect if not logged in
  if (!session) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          🔒 Please log in to view your college information.
        </h1>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const collection = await dbconnect("admissions");
  const admissions = await collection.find({ email: session.user.email }).toArray();

  if (!admissions || admissions.length === 0) {
    return <div className="p-8 text-center">❌ You haven’t applied to any colleges yet.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">🎓 My Colleges</h1>

      {admissions.map((admission) => {
        const college = admission.college;
        return (
          <div
            key={admission._id.toString()}
            className="bg-white rounded-xl shadow-md p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* College Image */}
              <img
                src={college?.image || "/placeholder.jpg"}
                alt={college?.name}
                width={600}
                height={300}
                className="rounded-lg w-full h-60 object-cover"
              />

              {/* College Info */}
              <div>
                <h2 className="text-2xl font-semibold">{college?.name}</h2>
                <p className="text-gray-700 mt-2">
                  <strong>Admission Date:</strong> {college?.admissionDate}
                </p>
                <p className="text-gray-700">
                  <strong>Rating:</strong> {college?.rating} ⭐
                </p>
                <p className="text-gray-700">
                  <strong>Research History:</strong> {college?.researchHistory}
                </p>
                <p className="text-gray-700">
                  <strong>Sports:</strong> {college?.sports?.categories?.join(", ") || "N/A"}
                </p>
                <p className="text-gray-700">
                  <strong>Events:</strong> {college?.events?.length || 0}
                </p>
              </div>
            </div>

            {/* Review Form */}
            <div className="pt-6 border-t">
              <h3 className="text-lg font-semibold mb-2">📝 Add a Review</h3>
              <ReviewForm
                email={admission.email}
                collegeName={college?.name}
                userName={session.user.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
