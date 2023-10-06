import authOption from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";

export async function GET(request: Request) {
  const session = await getServerSession(authOption);
  await connectDB();
  console.log(session);
  return NextResponse.json({
    session,
  });
}
