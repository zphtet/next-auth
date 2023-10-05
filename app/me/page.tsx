import React from "react";

const fetchMe = async () => {
  const res = await fetch("http://localhost:3000/api/getme", {
    cache: "no-store",
  });
  return await res.json();
};

const page = async () => {
  const session = await fetchMe();
  console.log("get me ");
  console.log(session);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
};

export default page;
