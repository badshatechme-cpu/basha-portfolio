import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),
  title: {
    default: "Basha Portfolio",
    template: "%s",
  },
  description: "Enterprise Architecture and Solution Design Portfolio",
  openGraph: {
    title: "Basha Portfolio",
    description: "Enterprise Architecture and Solution Design Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Basha Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basha Portfolio",
    description: "Enterprise Architecture and Solution Design Portfolio",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}