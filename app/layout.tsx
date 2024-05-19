import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

import Navbar from "@/components/navbar";
import { AppWrapper } from "@/context/AddContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GTX",
  description: "gtx",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-black"}>
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" defer></script>
      </body>
    </html>
  );
}
