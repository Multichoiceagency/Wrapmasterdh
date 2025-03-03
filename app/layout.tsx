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
import SmoothScrolling from "@/components/SmoothScrolling";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wrapmaster - Specialisten in Car wrapping",
  description: "Hoogwaardige car wrapping en PPF diensten in Den Haag",
  icons: "/favicon.ico", 
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
    <html lang="nl" className={dmSans.className} suppressHydrationWarning>
            <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KHW52J3G');`}
        </Script>
      </head>
      <body>
      <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHW52J3G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        <ScrollToTop /><SmoothScrolling>{children}</SmoothScrolling>
        <OfferteAanvragen />
        <Footer />
        <FloatingSocialIcons />
        <WhatsAppFloatingIcon phoneNumber="31638718893" />
      </body>
    </html>
  );
}
