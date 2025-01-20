import { Metadata } from "next";
import { DM_Sans } from 'next/font/google'; // Gebruik DM Sans van next/font
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppFloatingIcon from "@/components/WhatsAppFloatingIcon";
import "photoswipe/dist/photoswipe.css";

// Importeer DM Sans met de juiste configuratie
const dmSans = DM_Sans({
  weight: ['400', '500', '700'], // Voeg de gewenste gewichten toe
  subsets: ['latin'], // Gebruik 'latin' subset
  display: 'swap', // Voor betere prestaties
});

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
    <html lang="nl" className={dmSans.className}> {/* Gebruik DM Sans hier */}
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingIcon phoneNumber="31638718893" />
      </body>
    </html>
  );
}
