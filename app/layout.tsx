import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SentIA",
  metadataBase: new URL("https://sentia.com"),
  description: "La teva empresa de confiança per a valoracions reals i transparents.",
  keywords: ["valoracions", "IA", "empresa", "reviews", "sentiment", "transparència"],
  authors: [{ name: "SentIA Team" }],
  openGraph: {
    title: "SentIA",
    description: "Valoracions reals i transparents amb IA.",
    url: "https://sentia.com",
    siteName: "SentIA",
    images: [
      {
        url: "/sentia-fons.jpeg",
        width: 1200,
        height: 630,
        alt: "SentIA Logo",
      },
    ],
    locale: "ca_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SentIA",
    description: "Valoracions reals i transparents amb IA.",
    images: ["/sentia-fons.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
