import { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";

// Import Barlow font from Google Fonts
const barlow = Barlow({
  weight: ["400", "700"],  // You can specify other weights if needed
  subsets: ["latin"],      // Specify the subsets you want
  variable: "--font-barlow", // Define a CSS variable for easier use
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
      </body>
    </html>
  );
}
