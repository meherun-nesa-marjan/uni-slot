"use client";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AdmissionForm(props) {
  const { id: collegeId } = use(props.params); // ✅ unwrap params
  const [college, setCollege] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: "",
  });

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await fetch(`/api/college/${collegeId}`);
        const data = await res.json();
        setCollege(data);
      } catch (err) {
        toast.error("Failed to load college data");
      }
    };
    fetchCollege();
  }, [collegeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, college }),
    });

    if (res.ok) {
      toast.success("🎉 Admission submitted successfully!");
      setFormData({
        name: "",
        subject: "",
        email: "",
        phone: "",
        address: "",
        dob: "",
        image: "",
      });
    } else {
      toast.error("❌ Submission failed");
    }
  };

  if (!college) return <div className="p-4">Loading college...</div>;

  return (
    <section className="max-w-xl my-8 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admission to {college.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "subject", "email", "phone", "address", "dob", "image"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "dob" ? "date" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
