import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Coding Basic Guide - Panduan Lengkap",
  description: "Panduan lengkap Vibe Coding untuk mengubah ide menjadi aplikasi fungsional dengan bantuan AI. Pelajari alur kerja modern dari brainstorming hingga deployment.",
  keywords: ["Vibe Coding", "AI Development", "Prompt Engineering", "UI Generation", "Deployment", "Indonesia"],
  authors: [{ name: "Vibe Coding Indonesia" }],
  openGraph: {
    title: "Vibe Coding Basic Guide",
    description: "Panduan lengkap Vibe Coding untuk mengubah ide menjadi aplikasi fungsional dengan bantuan AI",
    url: "https://chat.z.ai",
    siteName: "Vibe Coding Indonesia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding Basic Guide",
    description: "Panduan lengkap Vibe Coding untuk mengubah ide menjadi aplikasi fungsional dengan bantuan AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
