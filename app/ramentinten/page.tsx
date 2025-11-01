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
  title: "RAMEN TINTEN",
  description: "Ontdek onze professionele ramentint services!",
  heroImage: "http://localhost:3010/uploads/enes-website/ramentint/35423.jpg",
  contentImage1: "http://localhost:3010/uploads/enes-website/ramentint/RSQ3-ramentint.jpg",
  contentImage2: "http://localhost:3010/uploads/enes-website/ramentint/174585ba-079e-4bc9-a934-3397441542e3.jpg",
  contentImage3: "http://localhost:3010/uploads/enes-website/ramentint/IMG_2906.JPG",
}

const sliderImages = [
  "http://localhost:3010/uploads/enes-website/ramentint/41144.jpg",
  "http://localhost:3010/uploads/enes-website/ramentint/47458.jpg",
  "http://localhost:3010/uploads/enes-website/ramentint/47254.jpg",
  "http://localhost:3010/uploads/enes-website/ramentint/43106.jpg",
]

// Skeleton component for the Ramentinten page
function RamentintenSkeleton() {
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

      {/* Text with Image Section Skeleton */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <Skeleton className="h-12 w-3/4 mb-8" />
          <div className="space-y-4 mb-8">
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

export default function Ramentinten() {
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  )

  // Simulate loading
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Enhanced description content
  const shortDescription =
    "Ontdek onze professionele ramentint services! Wij bieden hoogwaardige raamfolie die privacy, UV-bescherming en stijl combineert voor uw voertuig."
  const fullDescription = `
    Ontdek onze professionele ramentint services! Wij bieden hoogwaardige raamfolie die privacy, UV-bescherming en stijl combineert voor uw voertuig.
    
    Bij Wrapmaster gebruiken we alleen premium kwaliteit raamfolie die tot 99% van de schadelijke UV-stralen blokkeert, de interieurtemperatuur verlaagt en uw privacy verhoogt. Onze professionele installatie garandeert een perfect resultaat zonder luchtbellen of oneffenheden.
    
    Kies uit verschillende tintniveaus, van licht tot donker, afhankelijk van uw voorkeuren en de wettelijke vereisten. Onze raamfolie is duurzaam, krasbestendig en verkleurt niet na verloop van tijd.
    
    Naast de esthetische voordelen, helpt onze raamtint ook bij het verminderen van verblinding tijdens het rijden en beschermt het uw interieur tegen verkleuring door zonlicht. Ervaar het comfort en de stijl van professioneel getinte ramen bij Wrapmaster!
  `

  // Show skeleton while loading
  if (loading) {
    return <RamentintenSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Ramentinten bij Wrapmaster - Stijl, Privacy en Bescherming in Één"
        description="Upgrade je auto met professionele ramentinten en chameleon folie van Wrapmaster. Verbeter privacy, stijl en UV-bescherming. Ontdek onze diensten!"
        canonical="https://wrapmasterdh.nl/ramentinten"
        openGraph={{
          url: "https://wrapmasterdh.nl/ramentinten",
          title: "Ramentinten bij Wrapmaster - Stijl, Privacy en Bescherming in Één",
          description: "Upgrade je auto met professionele ramentinten en chameleon folie van Wrapmaster.",
          images: [
            {
              url: dienstData.heroImage || "/fallback-image.jpg",
              width: 1200,
              height: 630,
              alt: dienstData.title,
            },
          ],
          site_name: "Wrapmaster",
        }}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[100vh] sm:h-100vh">
          <Image
            src={dienstData.heroImage || "/placeholder.svg"}
            alt={dienstData.title}
            fill
            className="object-cover"
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

        {/* Text with Image Section */}
        <section className="flex flex-col lg:flex-row py-8 lg:py-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
            <h2 className="text-2xl font-light sm:text-3xl lg:text-4xl mb-4 lg:mb-8">
              Ramentinten bij Wrapmaster – Stijl, Privacy en Bescherming in Één
            </h2>
            <div className="mb-6 lg:mb-8 leading-relaxed max-w-xl font-regular text-sm sm:text-base">
              <div className="whitespace-pre-line">{showMore ? fullDescription : shortDescription}</div>
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
              <Image
                src={dienstData.contentImage1 || "/placeholder.svg"}
                alt="Ramentinten bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />

        {/* Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
