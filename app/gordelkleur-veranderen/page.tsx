"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import OnzeDiensten from "@/app/components/Diensten/Diensten"
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
  title: "GORDELS IN KLEUR",
  description: "",
  heroImage: "/enes-website/gordelkleur/IMG_0496.JPG",
  contentImage1: "/enes-website/gordelkleur/IMG_2475.jpg",
  contentImage2: "/enes-website/gordelkleur/RSQ3-6.jpg",
  contentImage3: "/enes-website/memo/IMG_5363.JPG",
}

const sliderImages = [
  "/enes-website/gordelkleur/IMG_2067.JPG",
  "/enes-website/gordelkleur/IMG_1932.JPG",
  "/enes-website/gordelkleur/IMG_1750.JPG",
  "/enes-website/gordelkleur/IMG_1985.JPG",
]

const reels = [
  {
    id: 1,
    video: "/video/shot_1.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "/video/audi-rsq8.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "/video/audi-rsq8.mp4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "/video/audi-rsq8.mp4",
    likes: "78.9k",
    comments: "230",
  },
]

// Skeleton component for the Gordels Vervangen page
function GordelsVervangenSkeleton() {
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

      {/* Instagram Reels Section Skeleton - 2 side by side */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="flex justify-between gap-2 px-4">
          <Skeleton className="w-screen max-w-[49%] h-[300px] sm:h-[760px] rounded-lg" />
          <Skeleton className="w-screen max-w-[49%] h-[300px] sm:h-[760px] rounded-lg" />
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

export default function GordelsVervangen() {
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

  const shortText = (
    <p>
      Wil je jouw auto een persoonlijke en stijlvolle touch geven? Kies voor gordels vervangen in kleur bij Wrapmaster!
      Met onze hoogwaardige gekleurde gordels combineer je veiligheid met een exclusieve look die perfect past bij het
      interieur van jouw voertuig. Of je nu kiest voor een sportieve rode tint, een elegante beige kleur of een gedurfde
      neonoptie, onze expertise garandeert een perfect resultaat.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Waarom Kiezen voor Gordels in Kleur?</h3>
      <p className="mt-3">
        Gekleurde gordels bieden een opvallende upgrade voor elk voertuig, van luxe auto's tot sportieve modellen. Naast
        het verbeteren van de uitstraling van je interieur, blijven de gordels volledig functioneel en veilig. Dit maakt
        een kleurupgrade de ideale manier om jouw auto te personaliseren zonder concessies te doen aan veiligheid.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van gekleurde gordels:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Unieke uitstraling: Geef jouw interieur een exclusieve en gepersonaliseerde look.</li>
        <li>Breed kleurenpalet: Kies uit diverse kleuren die passen bij jouw stijl of de bekleding van je auto.</li>
        <li>Sportieve touch: Creëer een dynamische uitstraling met felle kleuren zoals rood, geel of blauw.</li>
        <li>Luxe interieurupgrade: Maak van jouw auto een echte blikvanger, zowel van binnen als van buiten.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Gekleurde Gordels</h3>
      <p className="mt-3">
        Bij Wrapmaster kun je rekenen op een team van professionals met jarenlange ervaring in het vervangen van
        autogordels. Onze monteurs werken met precisie en oog voor detail, zodat jouw nieuwe gordels niet alleen
        prachtig aansluiten bij je interieur, maar ook voldoen aan alle veiligheidsnormen. Of je nu een klassieke auto,
        een sportwagen of een moderne SUV hebt, wij bieden oplossingen die perfect passen bij jouw wensen.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Gordelkleuren en Opties</h3>
      <p className="mt-3">Bij Wrapmaster bieden we een breed scala aan kleuren en stijlen, waaronder:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Klassieke kleuren zoals zwart, grijs en beige voor een tijdloze uitstraling.</li>
        <li>Sportieve tinten zoals rood, oranje en geel voor een gedurfde look.</li>
        <li>Luxe en opvallende kleuren zoals blauw, groen en paars.</li>
        <li>Speciale custom opties voor unieke kleuren en patronen.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van Gordels Vervangen bij Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Veiligheid gegarandeerd: Onze gekleurde gordels voldoen aan alle wettelijke veiligheidsnormen.</li>
        <li>
          Hoogwaardige materialen: We gebruiken alleen gordels van premium kwaliteit die duurzaam en slijtvast zijn.
        </li>
        <li>Perfecte afwerking: Onze installatie is naadloos en professioneel, zodat jouw auto er perfect uitziet.</li>
        <li>Maatwerk: We stemmen de gordels volledig af op jouw voorkeuren en het interieur van jouw auto.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Hoe Werken Wij?</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: Samen bespreken we jouw wensen en helpen we je de perfecte kleur te kiezen.</li>
        <li>Demontage: De oude gordels worden zorgvuldig verwijderd, zonder schade aan het interieur.</li>
        <li>Montage: Onze professionals installeren de nieuwe gordels met oog voor detail en veiligheid.</li>
        <li>
          Controle: Na montage testen we de gordels om ervoor te zorgen dat ze perfect functioneren en aan alle eisen
          voldoen.
        </li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Waarom Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster staan kwaliteit, stijl en veiligheid centraal. Ons ervaren team werkt met de nieuwste technieken
        en materialen om ervoor te zorgen dat jouw nieuwe gekleurde gordels niet alleen prachtig zijn, maar ook voldoen
        aan alle veiligheidsvoorschriften. Jouw tevredenheid is onze prioriteit, en daarom leveren we alleen werk van de
        hoogste kwaliteit.
      </p>
      <h3 className="mt-6 text-xl font-semibold">
        Geef Jouw Auto een Persoonlijke Touch met Wrapmaster Gekleurde Gordels!
      </h3>
      <p className="mt-3">
        Ben je klaar om jouw auto een exclusieve uitstraling te geven? Kies voor gordels vervangen in kleur bij
        Wrapmaster en maak jouw voertuig uniek. Neem vandaag nog contact met ons op voor meer informatie of een
        vrijblijvende offerte. Samen zorgen we ervoor dat jouw auto straalt, zowel qua stijl als veiligheid!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <GordelsVervangenSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Gordels Vervangen in Kleur bij Wrapmaster - Geef Jouw Auto een Unieke Uitstraling"
        description="Upgrade je auto-interieur met gekleurde gordels van Wrapmaster. Veilig, stijlvol en volledig gepersonaliseerd. Ontdek onze gordel vervangen service."
        canonical="https://wrapmasterdh.nl/gordels-vervangen"
        openGraph={{
          url: "https://wrapmasterdh.nl/gordels-vervangen",
          title: "Gordels Vervangen in Kleur bij Wrapmaster - Geef Jouw Auto een Unieke Uitstraling",
          description:
            "Upgrade je auto-interieur met gekleurde gordels van Wrapmaster. Veilig, stijlvol en volledig gepersonaliseerd. Ontdek onze gordel vervangen service.",
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
            content:
              "gordels vervangen, gordelkleur vervangen, gordel vervangen, gekleurde autogordels, auto-interieur upgrade",
          },
        ]}
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
                  className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 font text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
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
              Gordels Vervangen in Kleur bij Wrapmaster – Geef Jouw Auto een Unieke en Luxe Uitstraling
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
                alt="Gordels Vervangen in Kleur bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[700px] sm:h-[700px]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[700px] sm:h-[700px]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Instagram Reels Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-black text-3xl font-bold mb-8 text-center">Bekijk Onze Reels</h2>
          <div className="flex justify-between gap-2 px-4">
            {reels.slice(0, 2).map((reel) => (
              <div
                key={reel.id}
                className="relative w-screen max-w-[49%] h-[300px] sm:h-[760px] bg-black rounded-lg overflow-hidden"
              >
                {/* Video */}
                <video src={reel.video} className="w-full h-full object-cover" loop muted autoPlay playsInline></video>
                {/* Instagram Reel Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-40">
                  <div className="flex items-center text-white text-sm font-semibold">
                    <Image src="/logos/logo-wit.png" alt="Reels Play Icon" width={20} height={20} className="mr-2" />
                    Reels
                  </div>
                  <div className="text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <Image
                          src="/logos/handtekening-wit.png"
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

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
