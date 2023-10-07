import { Resend } from "resend";
import Confirm from "../../../emails/Confirm";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const resend = new Resend("re_PPAoiPZT_4gTC8PorPqRYErJfxWb3oBN9");
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "zinpainghtet.215108@gmail.com",
    subject: "verify your email address",
    react: (
      <Confirm baseUrl="http://localhost:3000" token="token-from-api-route" />
    ),
  });

  return NextResponse.json({
    status: "success",
    message: "mail delivered",
  });
}
