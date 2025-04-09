"use client"

import { useEffect, useState, type ReactNode } from "react"
import SmoothScrolling from "./SmoothScrolling"

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <SmoothScrolling>{children}</SmoothScrolling>
}
