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
  title: "AMBIENT LIGHT",
  description: "",
  heroImage: "/enes-website/ambient-light/Mercedez-Benz AMG GT63_DONE_ (18 of 41).jpg",
  contentImage1: "/enes-website/ambient-light/ambient-light.jpg",
  contentImage2: "/enes-website/detailing/BlndrAgency_Wrapmaster_URUS (13 of 14).jpg",
  contentImage3: "/enes-website/detailing/BlndrAgency_Wrapmaster_URUS (14 of 14).jpg",
}

const sliderImages = [
  "/enes-website/ambient-light/Mercedez-Benz AMG GT63_DONE_ (15 of 41).jpg",
  "/enes-website/ambient-light/BlndrAgency_ (29 of 34).jpg",
  "/enes-website/ambient-light/Mercedez-Benz AMG GT63_DONE_ (14 of 41).jpg",
  "/enes-website/ambient-light/BlndrAgency_ (14 of 34).jpg",
]

const reels = [
  {
    id: 1,
    video: "/video/AMBIENT LIGHT 31-05.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "/video/Eljero Elia-_1.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "/video/copy_C55A7052-93D9-4EC9-ACC3-8EB7513E2BB5.mov",
    likes: "120k",
    comments: "345",
  },
]

// Skeleton component for the Ambient Lighting page
function AmbientLightingSkeleton() {
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

      {/* Image Carousel Skeleton */}
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
          <Skeleton className="h-[700px] sm:h-[800px]" />
          <Skeleton className="h-[700px] sm:h-[800px]" />
        </div>
      </section>

      {/* Instagram Reels Section Skeleton */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index} className="h-[760px] rounded-lg" />
          ))}
        </div>
      </section>

      {/* Wrapmaster Services Section Skeleton */}
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

export default function AmbientLighting() {
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
      Bij Wrapmaster tillen we jouw rijervaring naar een hoger niveau met professioneel ingebouwde ambient lighting.
      Deze stijlvolle, subtiele verlichting voegt niet alleen een moderne uitstraling toe aan het interieur van jouw
      auto, maar verhoogt ook het rijcomfort. Of je nu kiest voor zachte kleuren voor een ontspannen sfeer of juist een
      dynamisch lichtontwerp, onze oplossingen zijn volledig aanpasbaar aan jouw wensen.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Ambient Lighting?</h3>
      <p className="mt-3">
        Ambient lighting, ook wel sfeerverlichting genoemd, is decoratieve LED-verlichting die strategisch in het
        interieur van je auto wordt geplaatst. Denk aan verlichte deurlijsten, dashboardlijnen, middenconsoles en zelfs
        de voetruimte. Het resultaat? Een luxueuze, persoonlijke ambiance die jouw rijervaring uniek maakt, zowel
        overdag als snachts.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Ambient Lighting in jouw Auto?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Luxe uitstraling: Geef jouw auto een premium look die je normaal alleen in exclusieve voertuigen ziet.</li>
        <li>
          Aanpasbare kleuren: Kies uit een breed scala aan kleuren die aansluiten bij jouw stemming of het interieur van
          je auto.
        </li>
        <li>
          Verbeterde zichtbaarheid: Subtiele verlichting in de avonduren maakt knoppen, handgrepen en andere elementen
          beter zichtbaar.
        </li>
        <li>Persoonlijke touch: Maak jouw auto uniek met verlichting die volledig naar jouw smaak is ingesteld.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster kun je rekenen op een team van professionals met jarenlange ervaring in het inbouwen van
        hoogwaardige ambient lighting. We werken met de nieuwste technologieën en materialen om ervoor te zorgen dat het
        resultaat niet alleen mooi, maar ook duurzaam is. Onze expertise garandeert een nette installatie zonder
        zichtbare draden of beschadigingen aan het interieur van jouw voertuig.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van Ambient Lighting door Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          Premium kwaliteit: We gebruiken uitsluitend hoogwaardige LED-verlichting die energiezuinig en duurzaam is.
        </li>
        <li>
          Maatwerk oplossingen: Elke installatie wordt volledig aangepast aan jouw wensen en de unieke kenmerken van je
          auto.
        </li>
        <li>Perfecte afwerking: Ons ervaren team zorgt voor een naadloze en onzichtbare installatie.</li>
        <li>
          Innovatieve technologie: Geniet van opties zoals dimbare verlichting en verlichting die meebeweegt met de
          muziek in je auto.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Ons Proces: Zorgvuldigheid en Vakmanschap</h3>
      <p className="mt-3">
        Bij Wrapmaster doorlopen we een zorgvuldig proces om jouw ambient lighting perfect te installeren:
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Advies en ontwerp: We bespreken jouw voorkeuren en adviseren over de beste oplossingen voor jouw voertuig.
        </li>
        <li>Voorbereiding: Het interieur van je auto wordt zorgvuldig voorbereid om schade te voorkomen.</li>
        <li>Installatie: Onze professionals installeren de verlichting met uiterste precisie.</li>
        <li>
          Test en oplevering: We testen de verlichting om te garanderen dat alles perfect werkt en aan jouw
          verwachtingen voldoet.
        </li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Maak jouw auto uniek met Wrapmaster Ambient Lighting!</h3>
      <p className="mt-3">
        Ben je klaar om de sfeer in jouw auto naar een hoger niveau te tillen? Kies voor de expertise van Wrapmaster en
        geniet van stijlvolle, sfeervolle verlichting die jouw voertuig uniek maakt. Neem vandaag nog contact met ons op
        voor een vrijblijvend advies of een offerte!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <AmbientLightingSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Ambient Light Inbouwen bij Wrapmaster"
        description="Creëer een luxe en sfeervolle rijervaring met professioneel ingebouwde ambient lighting door Wrapmaster. Ontdek onze dynamische lichten en sfeerverlichting oplossingen."
        canonical="https://wrapmasterdh.nl/ambient-lighting"
        openGraph={{
          url: "https://wrapmasterdh.nl/ambient-lighting",
          title: "Ambient Light Inbouwen bij Wrapmaster",
          description:
            "Creëer een luxe en sfeervolle rijervaring met professioneel ingebouwde ambient lighting door Wrapmaster. Ontdek onze dynamische lichten en sfeerverlichting oplossingen.",
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
              "ambient lighting, sfeerverlichting, dynamische lichten, auto-interieur, LED-verlichting, luxe auto-upgrade",
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
              Ambient Lighting bij Wrapmaster – Verhoog de Sfeer in Jouw Auto
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
                alt="Ambient Lighting bij Wrapmaster"
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
            <div className="relative h-[700px] sm:h-[800px]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-[700px] sm:h-[800px]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ✅ Instagram Reels Section */}
        <section className="w-full bg-white py-16">
          <h2 className="text-black text-3xl font-bold mb-8 text-center">Bekijk Onze Reels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
            {reels.slice(0, 3).map((reel) => (
              <div key={reel.id} className="relative w-full h-[760px] bg-black rounded-lg overflow-hidden">
                {/* ✅ Video blijft overal 760px hoog */}
                <video src={reel.video} className="w-full h-full object-cover" loop muted autoPlay playsInline></video>

                {/* ✅ Instagram Reel Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
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
