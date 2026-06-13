import type { Metadata } from "next";
import { Inter, Outfit, Geist_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshay Anand — Full Stack Developer & AI Builder",
  description:
    "Full Stack Developer, Freelancer, and AI Builder crafting digital experiences that solve real-world problems. Explore my portfolio of projects and skills.",
  keywords: [
    "Akshay Anand",
    "Full Stack Developer",
    "AI Builder",
    "Freelancer",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Akshay Anand" }],
  openGraph: {
    title: "Akshay Anand — Full Stack Developer & AI Builder",
    description:
      "Full Stack Developer, Freelancer, and AI Builder crafting digital experiences that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable}`}
    >
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
