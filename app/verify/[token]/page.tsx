import React from "react";
import GoBack from "@/app/components/GoBack";
import connectDB from "@/lib/connectDB";
import userModel from "@/model/user.model";
const Verify = async ({ params }: { params: { token: string } }) => {
  await connectDB();

  const { token } = params;
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
      <p>Your Email Have Been Verified</p>
      <p>{token}</p>
      <GoBack link="/" text="Log In Again" />
    </div>
  );
};

export default Verify;
