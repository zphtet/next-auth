"use client";

import React from "react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button className="btn btn-secondary" onClick={() => signOut()}>
      SignOut
    </button>
  );
};

export default LogoutButton;
