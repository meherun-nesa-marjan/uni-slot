import dbconnect from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

// GET: Get current user
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const collection = await dbconnect("users");
  const user = await collection.findOne({ email: session.user.email });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(user), { status: 200 });
}

// PATCH: Update profile
export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const body = await req.json();
  const { name, university, address } = body;

  const collection = await dbconnect("users");

  const result = await collection.updateOne(
    { email: session.user.email },
    {
      $set: {
        name,
        university,
        address,
      },
    }
  );

  if (result.modifiedCount > 0) {
    return new Response(JSON.stringify({ message: "Updated successfully" }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ error: "Nothing updated" }), {
      status: 400,
    });
  }
}
