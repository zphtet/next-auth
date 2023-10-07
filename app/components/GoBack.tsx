"use client";

import Link from "next/link";

const GoBack = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link className="px-4 py-2 text-white bg-blue-500" href={link}>
      {text}{" "}
    </Link>
  );
};

export default GoBack;
