import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/ui/dot-pattern";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-zinc-900 text-zinc-50 antialiased relative`}>
        <DotPattern className="fixed inset-0 opacity-50 z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
