import dbconnect from "@/lib/db";

export async function GET() {
  const collection = await dbconnect("reviews");
  const reviews = await collection.find().sort({ createdAt: -1 }).limit(20).toArray();

  return new Response(JSON.stringify(reviews), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
