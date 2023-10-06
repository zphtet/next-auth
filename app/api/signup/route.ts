import { NextResponse, NextRequest } from "next/server";
import userModel from "@/model/user.model";
import connectDB from "@/lib/connectDB";
const bcrypt = require("bcrypt");
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
  const res = await userModel.create(userObj);
  return NextResponse.json({
    status: "success",
    data: {
      user: res,
    },
  });
}
