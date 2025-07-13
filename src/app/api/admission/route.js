import { NextResponse } from "next/server";
import dbconnect from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await dbconnect("admissions");

    const result = await collection.insertOne(body);
    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
