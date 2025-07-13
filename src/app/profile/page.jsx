'use client';

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", university: "", address: "" });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();

        if (!res.ok) {
          toast.error(data.error || "Failed to load profile");
          return;
        }

        setUser(data);
        setForm({
          name: data.name || "",
          email: data.email || "",
          university: data.university || "",
          address: data.address || "",
        });
      } catch (err) {
        toast.error("Failed to load profile");
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save updates
  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Profile updated successfully");
        setUser(data.user);
        setEditing(false);
      } else {
        toast.error(data.error || "Update failed");
      }
    } catch (err) {
      toast.error("Network error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div className="max-w-md my-36 mx-auto p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>

      <div className="space-y-2">
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border px-2 py-1 rounded"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            name="email"
            value={form.email}
            disabled
            className="w-full border px-2 py-1 rounded bg-gray-100"
          />
        </div>

        <div>
          <label>University:</label>
          <input
            name="university"
            value={form.university}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Add your university"
            className="w-full border px-2 py-1 rounded"
          />
        </div>

        <div>
          <label>Address:</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Add your address"
            className="w-full border px-2 py-1 rounded"
          />
        </div>
      </div>

      <div className="mt-4">
        {editing ? (
          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
