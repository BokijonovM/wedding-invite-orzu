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
  title: "M&M Taklifnoma",
  description: "28.06.2025 nikoh to'yi taklifnomasi",
  openGraph: {
    title:      "M&M Taklifnoma",
    description:"28.06.2025 nikoh to'yi taklifnomasi",
    siteName:   "M&M Wedding",
    type:    "website",
    locale:  "en_US"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
