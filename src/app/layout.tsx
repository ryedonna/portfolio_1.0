import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryedonna Epin - Frontend Developer",
  description: "Frontend Developer & UI/UX Enthusiast crafting beautiful web experiences",
  keywords: ["frontend developer", "react", "next.js", "typescript", "web development"],
  authors: [{ name: "Ryedonna Epin" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
