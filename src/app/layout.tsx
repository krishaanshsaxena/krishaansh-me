import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishaansh Saxena | Digital Garden & Now",
  description:
    "B.Tech CSE (AI & ML) student at KIIT University. A digital garden and 'Now' page tracking my learning, projects, reading list, and goals.",
  keywords: [
    "Krishaansh Saxena",
    "Krishaansh Pushkarprabhat Saxena",
    "Digital Garden",
    "Now Page",
    "KIIT University",
    "Computer Science",
    "AI/ML Student",
  ],
  authors: [{ name: "Krishaansh Pushkarprabhat Saxena" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
