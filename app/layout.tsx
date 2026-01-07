import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Rotary Silver Jubilee Trust, Sangli - Serving Society Since 1974",
  description: "Established by Rotary Club of Sangli, the Trust has been a cornerstone of social development in Sangli and surrounding regions through landmark projects in education, healthcare, disability support, and community infrastructure.",
  keywords: ["Rotary", "Sangli", "Charitable Trust", "NGO", "Social Service", "Education", "Healthcare"],
  authors: [{ name: "The Rotary Silver Jubilee Trust, Sangli" }],
  openGraph: {
    title: "The Rotary Silver Jubilee Trust, Sangli",
    description: "Serving Society Since 1974",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
