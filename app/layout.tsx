import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Ultra, Slabo_27px } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

const ultra = Ultra({
  weight: ["400"],
  subsets: ["latin"]
});

const slabo = Slabo_27px({
  weight: ["400"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "My Algolia Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
