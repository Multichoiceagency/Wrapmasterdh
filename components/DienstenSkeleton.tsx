"use client"

import { Skeleton } from "@/components/ui/skeleton"

/**
 * Reusable skeleton loader for service (diensten) pages
 * Uses subtle shimmer animation instead of push/pulse animation
 */
export default function DienstenSkeleton() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
          <div className="text-center px-4 max-w-4xl">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto mb-6" />
            <Skeleton className="h-12 w-48 mx-auto" />
          </div>
        </div>
      </section>

      {/* Text with Image Section Skeleton */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <Skeleton className="h-10 w-3/4 mb-8" />
          <div className="space-y-3 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-12 w-40" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 px-4 lg:px-0">
          <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[500px]" />
        </div>
      </section>

      {/* Image Carousel Skeleton */}
      <section className="py-8 overflow-hidden">
        <div className="flex gap-4 px-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="flex-shrink-0 w-[280px] h-[200px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Two Images Section Skeleton */}
      <section className="max-w-full mx-auto mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-[500px] sm:h-[700px]" />
          <Skeleton className="h-[500px] sm:h-[700px]" />
        </div>
      </section>

      {/* Reels Section Skeleton */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[400px] sm:h-[600px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Diensten Section Skeleton */}
      <section className="py-9 px-4">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-[280px] rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  )
}

/**
 * Compact skeleton for pages with 4 reels
 */
export function DienstenSkeletonCompact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 space-y-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-12 w-48" />
        </div>
      </section>

      {/* Info Block Skeleton */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <Skeleton className="h-10 w-3/4 mb-8" />
          <div className="space-y-3 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-12 w-40" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 px-4 lg:px-0">
          <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[500px]" />
        </div>
      </section>

      {/* Slider Skeleton */}
      <section className="py-8 overflow-hidden">
        <div className="flex gap-4 px-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="flex-shrink-0 w-[280px] h-[200px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Two Image Section Skeleton */}
      <section className="max-w-full mx-auto mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-[500px] sm:h-[700px]" />
          <Skeleton className="h-[500px] sm:h-[700px]" />
        </div>
      </section>

      {/* Reels Skeleton (4 columns) */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-[300px] sm:h-[600px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Diensten Skeleton */}
      <section className="py-9 px-4">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[280px] rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  )
}
