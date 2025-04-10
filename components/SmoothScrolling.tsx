"use client"

import type React from "react"
import { useEffect, type ReactNode } from "react"

interface SmoothScrollingProps {
  children: ReactNode
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Apply smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return <>{children}</>
}

export default SmoothScrolling
