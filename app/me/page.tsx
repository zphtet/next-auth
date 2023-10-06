import React from "react";
import { getServerSession } from "next-auth";
import authOption from "@/lib/authOptions";
import LogoutButton from "../components/LogoutButton";
import Image from "next/image";

const page = async () => {
  const session = await getServerSession(authOption);
  // if (!session) return redirect("/");
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-2 p-5">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={session?.user.image} />
          </div>
        </div>

        <p className="text-2xl">{session?.user.name}</p>
        <p>{session?.user.email}</p>
        <p>
          {" "}
          You Logged in using{" "}
          <span className="text-blue-500 text-2xl">
            {session?.provider}
          </span>{" "}
        </p>
        <LogoutButton />
      </div>
    </div>
  );
};

export default page;
