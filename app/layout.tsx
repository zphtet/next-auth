import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "./components/NextAuthProvider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Your trusted authentication system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Toaster /> */}
      <NextAuthProvider>
        <body className={inter.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
