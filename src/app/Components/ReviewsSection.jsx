'use client';
import { useEffect, useState } from "react";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading reviews...</p>;

  if (reviews.length === 0)
    return <p className="text-center text-gray-500">No reviews yet.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8">⭐ User Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="font-semibold">{review.userName}</p>
            <p className="text-yellow-500 font-bold">{review.rating} ★</p>
            <p className="mt-2 text-gray-700">{review.text}</p>
            <p className="text-xs text-gray-400 mt-3">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">College: {review.collegeName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
