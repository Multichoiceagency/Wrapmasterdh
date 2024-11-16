import { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Load the Barlow font from Google Fonts
const barlow = Barlow({
  weight: ["400", "500", "600", "700"], // Specify weights you want to use
  subsets: ["latin"],
  variable: "--font-barlow", // CSS variable for the font
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
    <html lang="nl" suppressHydrationWarning>
      <body className={`${barlow.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
