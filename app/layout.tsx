import { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "photoswipe/dist/photoswipe.css";

export const metadata: Metadata = {
  title: "Wrapmaster - Specialisten in Car wrapping",
  description: "Hoogwaardige car wrapping en PPF diensten in Den Haag",
  openGraph: {
    title: "Wrapmaster - Specialisten in Car Wrapping",
    description: "Transformeer uw voertuig met onze hoogwaardige car wrapping diensten in Den Haag. Kies voor stijl, bescherming en perfectie.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      {/* Voeg de font-DIN class toe via Tailwind */}
      <body className="font-DIN">
        <Header />
        {children}
        <Footer />
      </body>
    </html>  
  );
}
