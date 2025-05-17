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
  title: "Knowley | AI Talent Development Matching",
  description: "Match employees to learning & development courses with AI. Cut course selection time from weeks to days.",
  openGraph: {
    title: "Knowley | AI Talent Development Matching",
    description: "Match employees to learning & development courses with AI. Cut course selection time from weeks to days.",
    url: "https://knowley.ai/",
    siteName: "Knowley",
    images: [
      {
        url: "/logo-color.png",
        width: 1200,
        height: 630,
        alt: "Knowley Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowley | AI Talent Development Matching",
    description: "Match employees to learning & development courses with AI. Cut course selection time from weeks to days.",
    site: "@knowleyai",
    images: ["/logo-color.png"],
  },
  metadataBase: new URL("https://knowley.ai/"),
  alternates: {
    canonical: "https://knowley.ai/",
  },
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
