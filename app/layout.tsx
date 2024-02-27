import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

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
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-NINRoboto antialiased", NINRoboto.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
