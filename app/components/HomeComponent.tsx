"use client";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function HoemComponent() {
  const [login, setLogin] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") return;
  if (status === "authenticated") return redirect("/me");

  return (
    <>
      <Toaster />
      <div className=" flex flex-col justify-center gap-5 items-center  h-screen ">
        {login ? <Login /> : <SignUp toLogin={setLogin} />}

        <button
          onClick={() => setLogin((prev) => !prev)}
          className="btn btn-link"
        >
          {login ? "Sign Up" : "Login"}
        </button>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <div className=" flex flex-col gap-2">
          <button
            onClick={() => signIn("google", { callbackUrl: "/me" })}
            className="btn btn-sm btn-accent  max-w-xs"
          >
            Sign In With Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/me" })}
            className="btn btn-sm btn-active  max-w-xs"
          >
            Sign In With GitHub
          </button>
          {/* {session && <p>{session!["user"]["name"]}</p>} */}
        </div>
      </div>
    </>
  );
}
