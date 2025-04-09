"use client"

import { useEffect, useState } from "react"
import WhatsAppFloatingIcon from "@/components/WhatsAppFloatingIcon"
import FloatingSocialIcons from "@/components/FloatingSocialIcons"
import ScrollToTop from "@/components/ScrollToTop"

export default function ClientComponents() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <FloatingSocialIcons />
      <WhatsAppFloatingIcon phoneNumber="31638718893" />
      <ScrollToTop />
    </>
  )
}
