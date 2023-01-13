"use client";
import "../(site)/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

import Link from "next/link";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function AuthLayout({ children, session }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 pt-24 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-500 transition-colors hover:text-stone-800"
          >
            <ChevronLeftIcon className="w-5" />
            <span className="font-medium uppercase">Home</span>
          </Link>
        </div>
        <SessionProvider session={session}>
          <ToastContainer position="bottom-center" limit={1} />

          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
