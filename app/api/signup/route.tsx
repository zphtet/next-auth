import { NextResponse, NextRequest } from "next/server";
import userModel from "@/model/user.model";
import connectDB from "@/lib/connectDB";
const bcrypt = require("bcrypt");

// import { Resend } from "resend";
// import Confirm from "../../../emails/Confirm";

export async function POST(req: NextRequest) {
  await connectDB();

  const data = await req.json();
  const cryptedPass = await bcrypt.hash(
    data.password,
    Number(process.env.BCRYPT_SALT_ROUND)
  );
  const userObj = {
    name: data.name,
    email: data.email,
    password: cryptedPass,
  };
  try {
    const res = await userModel.create(userObj);

    return NextResponse.json({
      status: "success",
      data: {
        user: res,
      },
    });
  } catch (err) {
    const msg =
      (err as any).code === 11000
        ? "Email Already Registered"
        : (err as any).message;
    return NextResponse.json({
      status: "fail",
      message: msg,
      statusCode: (err as any).code,
    });
  }
}
