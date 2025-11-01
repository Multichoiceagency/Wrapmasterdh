"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import OnzeDiensten from "@/app/components/Diensten/Diensten"
import ImageCarousel from "@/components/ImageCarousel"
import { Skeleton } from "@/components/ui/skeleton"

const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
}

const dienstData = {
  title: "CHROME DELETE",
  description: "",
  heroImage: "http://localhost:3010/uploads/enes-website/OSMAN/q3/DSC05363.jpg",
  contentImage1: "http://localhost:3010/uploads/enes-website/chrome-delete/mercedes.jpg",
  contentImage2: "http://localhost:3010/uploads/enes-website/chrome-delete/bmw.jpg",
  contentImage3: "http://localhost:3010/uploads/enes-website/chrome-delete/FOTO-1-2.jpeg",
}

const sliderImages = [
  "http://localhost:3010/uploads/enes-website/memo/DSC04799.jpeg",
  "http://localhost:3010/uploads/enes-website/memo/1000010430.jpg",
  "http://localhost:3010/uploads/enes-website/chrome-delete/IMG_1903.JPG",
  "http://localhost:3010/uploads/enes-website/OSMAN/idbuzz/DSC05899.jpg",
]

// Skeleton component for the Chrome Delete page
function ChromeDeleteSkeleton() {
  return (
    <div className="animate-pulse bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative h-[100vh] sm:h-[100vh]">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
          <div className="text-left px-4 max-w-4xl">
            <Skeleton className="h-10 w-64 mx-auto mb-2" />
            <Skeleton className="h-6 w-full mx-auto mb-6" />
            <div className="flex justify-center">
              <Skeleton className="h-10 w-48" />
            </div>
          </div>
        </div>
      </section>

      {/* Text + Image Section Skeleton */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <Skeleton className="h-12 w-3/4 mb-8" />
          <div className="space-y-4 mb-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[500px]" />
        </div>
      </section>

      {/* Carousel Skeleton */}
      <section className="py-8">
        <div className="overflow-hidden">
          <div className="flex space-x-4 px-4">
            {[1, 2, 3, 4].map((_, index) => (
              <Skeleton key={index} className="min-w-[280px] h-[200px] rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Two Images Section Skeleton */}
      <section className="max-w-full mx-auto mt-16 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-[700px] sm:h-[700px]" />
          <Skeleton className="h-[700px] sm:h-[700px]" />
        </div>
      </section>

      {/* Onze Diensten Section Skeleton */}
      <section className="py-9">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index} className="h-[300px] rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default function ChromeDelete() {
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [bannerLoaded, setBannerLoaded] = useState(false)
  const [contentImagesLoaded, setContentImagesLoaded] = useState([false, false, false])

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const shortText = (
    <p>
      Met Chrome Delete kun je glanzende chromen details vervangen door een strakke, moderne afwerking. Denk aan
      raamomlijstingen, grilles, spiegelkappen en sierlijsten. Een perfecte keuze voor een minimalistische uitstraling.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Chrome Delete?</h3>
      <p className="mt-3">
        Chrome Delete is een aanpassingsoptie waarbij chromen accenten op je auto worden voorzien van een matte,
        satijnen of glanzende afwerking. Hiermee geef je jouw auto een strakke en elegante look.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Chrome Delete?</h3>
      <ul className="mt-3 list-disc list-inside">
        <li>Strakke uitstraling: Verminder de glans van chromen details.</li>
        <li>Volledig aanpasbaar: Kies uit matte, glanzende of carbon-afwerkingen.</li>
        <li>Bescherming: Bescherm de originele onderdelen tegen krassen en verkleuring.</li>
        <li>Flexibiliteit: Niet permanent en eenvoudig te verwijderen.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Chrome Delete Specialist</h3>
      <p className="mt-3">
        Ons ervaren team zorgt voor een naadloos resultaat zonder zichtbare randen. Wij bieden maatwerk en werken
        uitsluitend met hoogwaardige materialen.
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <ChromeDeleteSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Chrome Delete bij Wrapmaster"
        description="Transformeer jouw voertuig met Wrapmaster's chrome delete diensten. Vervang glanzende chromen details door een strakke, moderne afwerking."
        canonical="https://wrapmasterdh.nl/chrome-delete"
        openGraph={{
          url: "https://wrapmasterdh.nl/chrome-delete",
          title: "Chrome Delete bij Wrapmaster",
          description:
            "Transformeer jouw voertuig met Wrapmaster's chrome delete diensten. Vervang glanzende chromen details door een strakke, moderne afwerking.",
          images: [
            {
              url: dienstData.heroImage,
              width: 1200,
              height: 630,
              alt: dienstData.title,
            },
          ],
          site_name: "Wrapmaster",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "chrome delete, chrome wrap, chrome blackout, chrome trim wrap, chrome delete auto",
          },
        ]}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[100vh] sm:h-[100vh]">
          {!bannerLoaded && <Skeleton className="absolute w-full h-full" />}
          <Image
            src={dienstData.heroImage || "/placeholder.svg"}
            alt={dienstData.title}
            fill
            onLoad={() => setBannerLoaded(true)}
            className={`object-cover transition-opacity duration-700 ${bannerLoaded ? "opacity-100" : "opacity-0"}`}
            priority
          />
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 py-5 text-center">{dienstData.title}</h1>
              <p className="text-base sm:text-xl mb-6 px-16 text-center">{dienstData.description}</p>
              <div className="flex justify-center">
                <Link
                  href="/diensten"
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
                >
                  TERUG NAAR DIENSTEN
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Text + Image Section */}
        <section className="flex flex-col lg:flex-row py-8 lg:py-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
            <h2 className="text-2xl font-light sm:text-3xl lg:text-4xl mb-4 lg:mb-8">
              Chrome Delete bij Wrapmaster – Geef jouw Voertuig een Strakke Look
            </h2>
            <div className="mb-6 lg:mb-8 leading-relaxed max-w-xl font-regular text-sm sm:text-base">
              {showMore ? fullText : shortText}
              <button
                className="mt-4 text-blue-600 hover:underline focus:outline-none"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Lees minder" : "Lees meer"}
              </button>
            </div>
            <Link
              href="/offerte-aanvragen"
              className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
            >
              Offerte aanvragen
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              {!contentImagesLoaded[0] && <Skeleton className="absolute w-full h-full" />}
              <Image
                src={dienstData.contentImage1 || "/placeholder.svg"}
                alt="Chrome Delete bij Wrapmaster"
                fill
                onLoad={() =>
                  setContentImagesLoaded((prev) => {
                    const newState = [...prev]
                    newState[0] = true
                    return newState
                  })
                }
                className={`object-cover transition-opacity duration-700 ${
                  contentImagesLoaded[0] ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Carousel */}
        <ImageCarousel images={sliderImages} />

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[dienstData.contentImage2, dienstData.contentImage3].map((src, idx) => (
              <div key={idx} className="relative h-[700px] sm:h-[700px]">
                {!contentImagesLoaded[idx + 1] && <Skeleton className="absolute w-full h-full" />}
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Content Image ${idx + 2}`}
                  fill
                  onLoad={() =>
                    setContentImagesLoaded((prev) => {
                      const newState = [...prev]
                      newState[idx + 1] = true
                      return newState
                    })
                  }
                  className={`object-cover transition-opacity duration-700 ${
                    contentImagesLoaded[idx + 1] ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              </div>
            ))}
          </div>
        </section>

        {/* Onze Diensten Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
