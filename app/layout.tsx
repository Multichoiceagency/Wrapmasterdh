import { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppFloatingIcon from "@/components/WhatsAppFloatingIcon";
import "photoswipe/dist/photoswipe.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="nl" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingIcon phoneNumber="31638718893" />
      </body>
    </html>  
  );
}

