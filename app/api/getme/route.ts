import { NextResponse } from "next/server";
export async function GET(request: Request) {
  return NextResponse.json({
    code: process.env.RESEND_CODE,
    url: process.env.LIVE_URL,
  });
}
