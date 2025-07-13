// /app/api/auth/forgot-password/route.js (or api folder if not app dir)
import dbconnect from "@/lib/db";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  const collection = await dbconnect("users");

  const user = await collection.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  const expiry = Date.now() + 1000 * 60 * 15; // 15 mins

  await collection.updateOne(
    { email },
    {
      $set: {
        resetToken,
        resetTokenExpiry: expiry,
      },
    }
  );

  const resetUrl = `https://yourdomain.com/reset-password?token=${resetToken}`;

  // Setup nodemailer (example with Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: email,
    subject: "Password Reset",
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link expires in 15 minutes.</p>`,
  });

  return NextResponse.json({ message: "Reset email sent" });
}
