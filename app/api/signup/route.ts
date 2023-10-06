import { NextResponse, NextRequest } from "next/server";
import userModel from "@/model/user.model";
import connectDB from "@/lib/connectDB";
export async function POST(req: NextRequest) {
  await connectDB();
  const data = await req.json();
  const userObj = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  const res = await userModel.create(userObj);
  return NextResponse.json({
    status: "success",
    data: {
      user: res,
    },
  });
}
