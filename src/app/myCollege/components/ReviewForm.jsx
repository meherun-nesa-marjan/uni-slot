'use client';
import { useState } from "react";
import toast from "react-hot-toast";

export default function ReviewForm({ userName, email, collegeName }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('click');

    const res = await fetch("/api/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        userName,
        collegeName,
        text: review,
        rating,
      }),
    });

    const result = await res.json();
    if (result.success) {
      toast.success(" Review submitted!");
      setReview("");
      setRating(5);
    } else {
      toast.error("❌ Failed to submit review.");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Write your review"
        required
      />
      <div className="my-2">
        <label className="mr-2">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="border p-1 rounded"
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      <button className="btn bg-red-600 px-5 py-3 mt-2">Submit Review</button>
    </form>
  );
}
