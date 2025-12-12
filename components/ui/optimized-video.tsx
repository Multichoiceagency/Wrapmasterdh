"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  controls?: boolean
  showSpinner?: boolean
  spinnerSize?: "sm" | "md" | "lg"
  spinnerColor?: string
  preload?: "auto" | "metadata" | "none"
  lazy?: boolean
}

export function OptimizedVideo({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  showSpinner = true,
  spinnerSize = "lg",
  spinnerColor = "border-red-600",
  preload = "metadata",
  lazy = true,
}: OptimizedVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || !containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [lazy])

  const handleCanPlay = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleLoadedData = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  const spinnerSizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-14 h-14 border-4",
  }

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Loading spinner overlay */}
      {isLoading && showSpinner && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
          <div
            className={cn(
              "animate-spin rounded-full border-white/30",
              spinnerSizes[spinnerSize],
              spinnerColor
            )}
            style={{ borderTopColor: "transparent" }}
          />
        </div>
      )}

      {/* Poster/placeholder while loading or on error */}
      {(isLoading || hasError) && poster && (
        <div
          className="absolute inset-0 bg-cover bg-center z-5"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Shimmer placeholder if no poster */}
      {isLoading && !poster && (
        <div className="absolute inset-0 skeleton-shimmer z-5" />
      )}

      {/* Error state */}
      {hasError && !poster && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-5">
          <p className="text-white/70 text-sm">Video kon niet worden geladen</p>
        </div>
      )}

      {/* Video element - only render when in view */}
      {isInView && !hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload={preload}
          onCanPlay={handleCanPlay}
          onLoadedData={handleLoadedData}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
        />
      )}
    </div>
  )
}

// Eager loading variant for hero videos
export function OptimizedVideoEager({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  showSpinner = true,
  spinnerSize = "lg",
  spinnerColor = "border-red-600",
}: Omit<OptimizedVideoProps, "lazy" | "preload">) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleCanPlay = useCallback(() => {
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
  }, [])

  const spinnerSizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-14 h-14 border-4",
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
          <div
            className={cn(
              "animate-spin rounded-full border-white/30",
              spinnerSizes[spinnerSize],
              spinnerColor
            )}
            style={{ borderTopColor: "transparent" }}
          />
        </div>
      )}

      {(isLoading || hasError) && poster && (
        <div
          className="absolute inset-0 bg-cover bg-center z-5"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {isLoading && !poster && (
        <div className="absolute inset-0 skeleton-shimmer z-5" />
      )}

      {hasError && !poster && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-5">
          <p className="text-white/70 text-sm">Video kon niet worden geladen</p>
        </div>
      )}

      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="auto"
          onCanPlay={handleCanPlay}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
        />
      )}
    </div>
  )
}
