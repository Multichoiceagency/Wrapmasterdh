"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import OnzeDiensten from "@/app/components/Diensten/Diensten"
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ImageCarousel from "@/components/ImageCarousel"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const NextSeoClient = dynamic(() => import("next-seo").then((mod) => mod.NextSeo), { ssr: false })

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
}

const dienstData = {
  title: "CARWRAPPING",
  heroVideo: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/BLACK FERARRI CLASSIC 25-12.mp4",
  contentImage1: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/rs6/RS6-10.jpg",
  contentImage2: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/g-wagon/Brabus g800 Nardo grey  (17 of 24).jpg",
  contentImage3: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/elia/BlndrAgency_ (25 of 34).jpg",
}

const sliderImages = [
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/elia/elia1.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/rs6/RS6-11.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/urus-khaki/urus2.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/auto-wrappen/g-wagon/brabus1.jpg",
]

const reels = [
  {
    id: 1,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/audi-rsq8.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/YELLOW FERARRI VERSIE 1.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/BLACK FERARRI normal 25-12.mp4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/Eljero Elia-_1.mp4",
    likes: "78.9k",
    comments: "230",
  },
]

// Separate Skeleton component
function CarwrappingSkeleton() {
  return (
    <main className="bg-white">
      {/* Hero Video Skeleton */}
      <section className="relative h-[100vh] sm:h-[100vh]">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
          <div className="text-left px-4 max-w-4xl">
            <Skeleton className="h-10 w-48 mx-auto mb-4" />
            <div className="flex justify-center">
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Text with Image Section Skeleton */}
      <section className="flex flex-col lg:flex-row py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
          <Skeleton className="h-10 w-3/4 mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />
          <Skeleton className="h-10 w-40 mt-4" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[500px]" />
        </div>
      </section>

      {/* Image Carousel Skeleton */}
      <section className="py-8">
        <Skeleton className="w-full h-[400px]" />
      </section>

      {/* Two Images Section Skeleton */}
      <section className="max-w-full mx-auto mt-16 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-[700px] sm:h-[800px]" />
          <Skeleton className="h-[700px] sm:h-[800px]" />
        </div>
      </section>

      {/* Instagram Reels Section Skeleton */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-48 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-[300px] sm:h-[760px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-9">
        <Skeleton className="h-[400px] w-full" />
      </section>
    </main>
  )
}

export default function Carwrapping() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", slidesToScroll: 1 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const shortText = (
    <p>
      Bij Wrapmaster zijn we gespecialiseerd in carwrapping, dé perfecte manier om jouw voertuig een compleet nieuwe
      uitstraling te geven. Of je nu kiest voor een opvallende kleur, een matte afwerking, of een bedrijfsbranding, met
      carwrapping transformeren we jouw auto precies zoals jij het wilt.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Carwrapping?</h3>
      <p className="mt-3">
        Carwrapping is een innovatieve techniek waarbij een hoogwaardige folie over de originele lak van je voertuig
        wordt aangebracht. Dit biedt niet alleen een visuele upgrade, maar beschermt ook de lak tegen steenslag,
        UV-straling en kleine beschadigingen. Het grote voordeel? De wrap is volledig verwijderbaar, waardoor je altijd
        kunt terugkeren naar de originele lak.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster mag je rekenen op vakmanschap, precisie en passie. Ons team bestaat uit professionals met
        jarenlange ervaring in carwrapping. We hebben talloze projecten succesvol afgerond, variërend van luxe
        sportauto's tot bedrijfswagens.
      </p>
      <p className="mt-3">
        Met oog voor detail en gebruik van alleen de beste wrapfolies van toonaangevende merken zorgen wij voor een
        perfecte afwerking die niet alleen stijlvol, maar ook duurzaam is. Of je nu kiest voor een complete wrap of
        alleen voor specifieke delen zoals dak, spiegels of motorkap, wij leveren maatwerk dat past bij jouw wensen.
      </p>
    </>
  )

  // Use the separate skeleton component
  if (loading) {
    return <CarwrappingSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Carwrapping bij Wrapmaster"
        description="Transformeer jouw voertuig met Wrapmaster's carwrapping diensten. Bescherm je lak en geef je auto een unieke uitstraling."
        canonical="https://wrapmasterdh.nl/carwrapping"
      />

      <main className="bg-white">
        {/* ✅ Hero Video */}
        <section className="relative h-[100vh] sm:h-[100vh]">
          <video
            src={dienstData.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-20">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 py-5 text-center">{dienstData.title}</h1>
              <div className="flex justify-center">
                <Link
                  href="/diensten"
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
                >
                  TERUG NAAR DIENSTEN
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Tekst met Afbeelding-sectie met Lees Meer functionaliteit */}
        <section className="flex flex-col lg:flex-row py-8 lg:py-16">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 mb-8 lg:mb-0">
            <h2 className="text-2xl font-light sm:text-3xl lg:text-4xl mb-4 lg:mb-8">
              Carwrapping bij Wrapmaster – Geef jouw Voertuig een Nieuwe Look
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
              className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
            >
              Offerte aanvragen
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={dienstData.contentImage1 || "/placeholder.svg"}
                alt="Carwrapping bij Wrapmaster"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[700px] sm:h-[800px]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[700px] sm:h-[800px]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-black text-3xl font-bold mb-8 text-center">Bekijk Onze Reels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {reels.map((reel) => (
              <div key={reel.id} className="relative w-full h-[300px] sm:h-[760px] bg-black rounded-lg overflow-hidden">
                {/* Video */}
                <video src={reel.video} className="w-full h-full object-cover" loop muted autoPlay playsInline></video>
                {/* Instagram Reel Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex items-center text-white text-sm font-semibold">
                    <Image src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/logo-wit.png" alt="Reels Play Icon" width={20} height={20} className="mr-2" />
                    Reels
                  </div>
                  <div className="text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <Image
                          src="https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/logos/handtekening-wit.png"
                          alt="Reels Play Icon"
                          width={100}
                          height={20}
                          className="mr-2"
                        />
                      </span>
                      <div className="flex space-x-2">
                        <a
                          href={socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                          href={socialMedia.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                        <a
                          href={socialMedia.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                        <a
                          href={socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Wrapmaster Services */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
