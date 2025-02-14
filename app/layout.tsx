// layout.tsx
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppFloatingIcon from "@/components/WhatsAppFloatingIcon";
import OfferteAanvragen from "@/components/offerte-aanvragen";
import "photoswipe/dist/photoswipe.css";
import FloatingSocialIcons from "@/components/FloatingSocialIcons";

// Import DM Sans using Next.js built-in font support
const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Use the metadata API to define global meta tags, including the viewport.
export const metadata: Metadata = {
  title: "Wrapmaster - Specialisten in Car wrapping",
  description: "Hoogwaardige car wrapping en PPF diensten in Den Haag",
  // IMPORTANT: Set the viewport with viewport-fit=cover so that iOS extends content into the notch.
  openGraph: {
    title: "Wrapmaster - Specialisten in Car Wrapping",
    description:
      "Transformeer uw voertuig met onze hoogwaardige car wrapping diensten in Den Haag. Kies voor stijl, bescherming en perfectie.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={dmSans.className}>
      <body>
        <Header />
        {children}
        <OfferteAanvragen />
        <Footer />
        <FloatingSocialIcons />
        <WhatsAppFloatingIcon phoneNumber="31638718893" />
      </body>
    </html>
  );
}
