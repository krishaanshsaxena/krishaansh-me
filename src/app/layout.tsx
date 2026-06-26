import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metadata as siteMetadata } from "@/lib/metadata";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <div className="container min-h-screen">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
