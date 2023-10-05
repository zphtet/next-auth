import authOption from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOption);
  console.log(session);
  return NextResponse.json({
    session,
  });
}
