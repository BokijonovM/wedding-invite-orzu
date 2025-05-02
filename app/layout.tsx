import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "@/components/shared/suspense";
import { Toaster } from "@/components/ui/toaster";

const jost = localFont({
  src: "./fonts/JostVF.ttf",
  variable: "--font-jost",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Taklifnoma",
  description: "28.06.2025 nikoh to'yi taklifnomasi",
  icons: {
    icon: "/favicon.ico",            // standard favicon
    shortcut: "/favicon.ico",        // same as above, for legacy browsers
    apple: "/apple-touch-icon.png",  // if you want an iOS touch-icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased font-[family-name:var(--font-jost)]`}>
        <Suspense>{children}</Suspense>
        <Toaster />
      </body>
    </html>
  );
}
