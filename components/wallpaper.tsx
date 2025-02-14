"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react"

interface Wallpaper {
  id: string
  title: string
  imagePath: string
}

export default function WallpaperGallery({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const prevImage = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : wallpapers.length - 1))
  const nextImage = () => setSelectedIndex((prev) => (prev !== null && prev < wallpapers.length - 1 ? prev + 1 : 0))

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Hero Section met afbeelding */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Achtergrondafbeelding */}
        <Image
          src="/wallpapers/Maasvlakte-1.jpg" // ✅ Pas dit pad aan naar je eigen afbeelding
          alt="Wallpapers Hero"
          fill
          className="object-cover"
        />

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
          {wallpapers.map((wallpaper, index) => (
            <div key={wallpaper.id} className="relative w-full h-64 cursor-pointer group" onClick={() => openLightbox(index)}>
              <Image
                src={wallpaper.imagePath}
                alt={wallpaper.title}
                fill
                className="object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
              />
              {/* ✅ Download knop (linksonder) */}
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

      {/* ✅ Lightbox Functionaliteit */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Sluitknop */}
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-3 bg-white/50 rounded-full hover:bg-white">
            <X className="w-6 h-6 text-black" />
          </button>

          {/* Vorige afbeelding */}
          <button onClick={prevImage} className="absolute left-4 p-3 bg-white/50 rounded-full hover:bg-white">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Afbeelding in Lightbox */}
          <div className="relative w-[90vw] max-w-3xl h-[80vh]">
            <Image
              src={wallpapers[selectedIndex].imagePath}
              alt="Wallpaper"
              fill
              className="object-contain"
            />
          </div>

          {/* Volgende afbeelding */}
          <button onClick={nextImage} className="absolute right-4 p-3 bg-white/50 rounded-full hover:bg-white">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* ✅ Download knop (linksonder in Lightbox) */}
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
