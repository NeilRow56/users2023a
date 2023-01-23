import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import Providers from "../providers";
import { Poppins } from "@next/font/google";
import ReactQueryWrapper from "../ReactQueryWrapper";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Providers>
          <ReactQueryWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ReactQueryWrapper>
        </Providers>
      </body>
    </html>
  );
}
