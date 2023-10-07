import { Resend } from "resend";
import Confirm from "../../../emails/Confirm";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_CODE);
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "zinpainghtet.215108@gmail.com",
    subject: "verify your email address",
    react: (
      <Confirm baseUrl={process.env.LIVE_URL!} token="token-from-api-route" />
    ),
  });

  return NextResponse.json({
    status: "success",
    message: "mail delivered",
  });
}
