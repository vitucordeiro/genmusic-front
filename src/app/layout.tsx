import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";

import "./globals.css";

import {ClerkProvider} from '@clerk/nextjs'

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "genMusic",
  description: "Create playlist based on your emotions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
      <html lang="en">
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <main>
            {children}
          </main>
          </body>
      </html>
      </ClerkProvider>
  );
}
