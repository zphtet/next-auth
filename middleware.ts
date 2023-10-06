import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request: NextRequest) {
    console.log("Middleware working");
    // return NextResponse.redirect(new URL("/me", request.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => (token ? true : false),
    },
  }
);

export const config = {
  matcher: "/me",
  //   secret: process.env.NEXTAUTH_SECRET,
};
