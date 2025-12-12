"use client"

import Image, { ImageProps } from "next/image"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  showSpinner?: boolean
  spinnerSize?: "sm" | "md" | "lg"
  spinnerColor?: string
  fallbackSrc?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  showSpinner = true,
  spinnerSize = "md",
  spinnerColor = "border-red-600",
  fallbackSrc = "/placeholder.jpg",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  const spinnerSizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading spinner overlay */}
      {isLoading && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 z-10">
          <div
            className={cn(
              "animate-spin rounded-full border-gray-200",
              spinnerSizes[spinnerSize],
              spinnerColor
            )}
            style={{ borderTopColor: "transparent" }}
          />
        </div>
      )}

      {/* Shimmer placeholder while loading */}
      {isLoading && (
        <div className="absolute inset-0 skeleton-shimmer z-5" />
      )}

      <Image
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    </div>
  )
}

// Eager loading variant for above-the-fold images
export function OptimizedImageEager({
  src,
  alt,
  className,
  showSpinner = true,
  spinnerSize = "md",
  spinnerColor = "border-red-600",
  fallbackSrc = "/placeholder.jpg",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  const spinnerSizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 z-10">
          <div
            className={cn(
              "animate-spin rounded-full border-gray-200",
              spinnerSizes[spinnerSize],
              spinnerColor
            )}
            style={{ borderTopColor: "transparent" }}
          />
        </div>
      )}

      {isLoading && (
        <div className="absolute inset-0 skeleton-shimmer z-5" />
      )}

      <Image
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        priority
        loading="eager"
        {...props}
      />
    </div>
  )
}
