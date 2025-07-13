import dbconnect from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const collection = await dbconnect("allCollege");
    const college = await collection.findOne({ _id: new ObjectId(params.id) });

    return NextResponse.json(college);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
