"use client";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

export default function Proiders({ children }) {
  return (
    <SessionProvider>
      {children}
      <ToastContainer position="bottom-center" limit={1} />
    </SessionProvider>
  );
}
