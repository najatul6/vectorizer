import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const NINRoboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Vectorizer",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-NINRoboto antialiased", NINRoboto.variable)}>
        {children}
      </body>
    </html>
  );
}
