"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-5">
      <p>The Page doesn't exist !</p>
      <Link href={"/"} className="px-4 py-2 bg-blue-600 text-white">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
