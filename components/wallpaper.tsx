"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton" // Assuming this is your existing skeleton component

interface Wallpaper {
  id: string
  title: string
  imagePath: string
}

export default function WallpaperGallery({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

  // Simulate initial loading
  useEffect(() => {
    // Set loading to false after a short delay to simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }))
  }

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const prevImage = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : wallpapers.length - 1))
  const nextImage = () => setSelectedIndex((prev) => (prev !== null && prev < wallpapers.length - 1 ? prev + 1 : 0))

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section met afbeelding */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Achtergrondafbeelding */}
        {loading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <Image
            src="/wallpapers/Maasvlakte-1.jpg"
            alt="Wallpapers Hero"
            fill
            className="object-cover"
            priority // Hero image should load with priority
          />
        )}

        {/* Overlay voor betere leesbaarheid */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Tekst in het midden-onder */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-4xl font-light text-white uppercase z-10 drop-shadow-lg">
          WALLPAPER
        </h1>
      </section>

      {/* Wallpapers Grid */}
      <section className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading
            ? // Skeleton loading state for grid
              Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="w-full h-64 rounded-lg" />)
            : wallpapers.map((wallpaper, index) => (
                <div
                  key={wallpaper.id}
                  className="relative w-full h-64 cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  {/* Show skeleton until image is loaded */}
                  {!loadedImages[index] && <Skeleton className="absolute inset-0 rounded-lg" />}
                  <Image
                    src={wallpaper.imagePath || "/placeholder.svg"}
                    alt={wallpaper.title}
                    fill
                    className={`object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105 ${
                      loadedImages[index] ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                  />
                  {/* Download knop (linksonder) */}
                  <a
                    href={wallpaper.imagePath}
                    download
                    className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black/50 text-white px-2 py-1 text-xs rounded-md hover:bg-black/70"
                    onClick={(e) => e.stopPropagation()} // Voorkomt openen van lightbox bij klikken
                  >
                    <Download className="w-4 h-4" />
                    <span>Downloaden</span>
                  </a>
                </div>
              ))}
        </div>
      </section>

      {/* Lightbox Functionaliteit */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Sluitknop */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 bg-white/50 rounded-full hover:bg-white"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Vorige afbeelding */}
          <button onClick={prevImage} className="absolute left-4 p-3 bg-white/50 rounded-full hover:bg-white">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Afbeelding in Lightbox */}
          <div className="relative w-[90vw] max-w-3xl h-[80vh]">
            <Image
              src={wallpapers[selectedIndex].imagePath || "/placeholder.svg"}
              alt="Wallpaper"
              fill
              className="object-contain"
            />
          </div>

          {/* Volgende afbeelding */}
          <button onClick={nextImage} className="absolute right-4 p-3 bg-white/50 rounded-full hover:bg-white">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Download knop (linksonder in Lightbox) */}
          <a
            href={wallpapers[selectedIndex].imagePath}
            download
            className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/50 text-black px-3 py-2 text-sm rounded-md hover:bg-white"
          >
            <Download className="w-5 h-5" />
            <span>Downloaden</span>
          </a>
        </div>
      )}
    </div>
  )
}
