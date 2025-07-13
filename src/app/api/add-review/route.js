import dbconnect from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, userName, collegeName, rating, text } = body;

    if (!email || !collegeName || !text || !userName) {
      return Response.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const collection = await dbconnect("reviews");

    const result = await collection.insertOne({
      email,
      userName,
      collegeName,
      rating: Number(rating),
      text,
      createdAt: new Date(),
    });

    return Response.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Review insert error:", error);
    return Response.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
