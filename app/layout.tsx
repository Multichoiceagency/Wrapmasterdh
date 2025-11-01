import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import WhatsAppFloatingIcon from "@/components/WhatsAppFloatingIcon"
import OfferteAanvragen from "@/components/offerte-aanvragen"
import "photoswipe/dist/photoswipe.css"
import FloatingSocialIcons from "@/components/FloatingSocialIcons"
import ScrollToTop from "@/components/ScrollToTop"
import SmoothScrolling from "@/components/SmoothScrolling"
import { GoogleTagManager } from "@next/third-parties/google"

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wrapmaster - Specialisten in Car wrapping",
  description: "Hoogwaardige car wrapping en PPF diensten in Den Haag",
  icons: "http://localhost:3010/uploads/favicon.ico",
  openGraph: {
    title: "Wrapmaster - Specialisten in Car Wrapping",
    description:
      "Transformeer uw voertuig met onze hoogwaardige car wrapping diensten in Den Haag. Kies voor stijl, bescherming en perfectie.",
    locale: "nl_NL",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={dmSans.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        <Header />
        <ScrollToTop />
        <SmoothScrolling>
          <main>{children}</main>
        </SmoothScrolling>
        <OfferteAanvragen />
        <Footer />
        <FloatingSocialIcons />
        <WhatsAppFloatingIcon phoneNumber="31638718893" />
        <GoogleTagManager gtmId="GTM-KHW52J3G" />
      </body>
    </html>
  )
}
