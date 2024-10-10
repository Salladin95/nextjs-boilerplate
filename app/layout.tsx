import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Noto_Sans } from "next/font/google"

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" })
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-noto" })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}