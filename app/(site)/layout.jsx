"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "@next/font/google";
import { QueryClientProvider, QueryClient } from "react-query";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "optional",
});

//Create a client
const queryClient = new QueryClient();

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer position="bottom-center" limit={1} />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
