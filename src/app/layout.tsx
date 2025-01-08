import type { Metadata } from "next";
import { Open_Sans, Gochi_Hand } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next JumpStart",
  description: "An opinionated starter kit for Nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${gochiHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
