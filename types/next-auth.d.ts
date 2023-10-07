import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    expires: string;
    provider: string;
    user: {
      /** The user's postal address. */
      image: string;
      email: string;
      name: string;
    };
  }
  interface Error extends Error {
    code: number;
  }
}
