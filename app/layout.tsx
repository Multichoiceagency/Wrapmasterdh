import { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import ClientLoaderWrapper from "@/components/ClientLoaderWrapper"; // Client-side wrapper for loader
import Footer from "./components/Footer/Footer";

const barlow = Barlow({
  weight: ['400', '600', '500', '700',], // Add weights you want to use
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Wrapmaster Website",
  description: "High-quality car wrapping and PPF services in Den Haag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
