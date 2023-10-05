"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/api/auth/signin/google");
  };
  console.log(session);
  // console.log(status);
  return (
    <div className="border h-screen grid place-items-center">
      <div>
        <button
          onClick={() => signIn()}
          // onClick={handleSignIn}
          className="px-4 py-1 mr-6 bg-blue-600 rounded text-white"
        >
          Sign In
        </button>
        <button
          onClick={() => signOut()}
          className="px-4 py-1 bg-blue-600 rounded text-white"
        >
          Sign Out
        </button>
        <p>
          {status === "loading"
            ? "loading ..."
            : status === "authenticated"
            ? session?.user?.name
            : "Not Authenticated"}
        </p>
        {status === "authenticated" && (
          <Image
            alt="profile picture"
            src={session?.user?.image}
            width={"100"}
            height={"100"}
            className="rounded-full"
          />
        )}

        {status === "authenticated" && (
          <p>
            Provider{" "}
            <span className="text-blue-500 text-3xl">{session.provider}</span>{" "}
          </p>
        )}
      </div>
      <Link className="underline" href={"/me"}>
        Me
      </Link>
    </div>
  );
}
