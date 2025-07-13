import dbconnect from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { token, password } = await req.json();
  const collection = await dbconnect("users");

  const user = await collection.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await collection.updateOne(
    { email: user.email },
    {
      $set: { password: hashed },
      $unset: { resetToken: "", resetTokenExpiry: "" },
    }
  );

  return NextResponse.json({ message: "Password reset successful" });
}
