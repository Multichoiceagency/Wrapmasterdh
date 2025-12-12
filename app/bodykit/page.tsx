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
  title: "BODYKIT MONTAGE",
  description: "",
  heroImage: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Splitters-Mercedes-AMG-GT-C-C190-Facelift-22294_20.jpg",
  contentImage1: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-Audi-RS6-C8-22437_16.jpg",
  contentImage2: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-Audi-RS6-C8-22437_17.jpg",
  contentImage3: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Splitters-V-3-BMW-1-M-Pack-F70-22415_11.jpg",
}

const sliderImages = [
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Rear-Splitter-with-vertical-bars-Mercedes-AMG-GT-C-C190-Facelift-22292_3.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Prepreg-Carbon-Fiber-Splitters-Audi-RS6-C8-22437_10.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Splitters-Land-Rover-Range-Rover-Sport-Mk2-22478_1.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/bodykit/eng_pl_Set-of-Splitters-V-2-Volkswagen-Golf-GTI-Clubsport-Mk8-Facelift-22345_10.jpg",
]

// Skeleton component for the Bodykit Montage page
function BodykitMontageSkeleton() {
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
          <Skeleton className="aspect-[4/3]" />
          <Skeleton className="aspect-[4/3]" />
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

export default function BodykitMontage() {
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
      Wil je jouw auto een compleet nieuwe uitstraling geven? Kies voor bodykit montage bij Wrapmaster! Met een
      professioneel gemonteerde bodykit verbeter je niet alleen de aerodynamica van jouw voertuig, maar geef je het ook
      een sportieve en opvallende look. Ons team met jarenlange ervaring zorgt voor een perfecte installatie, zodat jouw
      auto er strak uitziet en optimaal presteert.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is een Bodykit?</h3>
      <p className="mt-3">
        Een bodykit is een set carrosserie-onderdelen die speciaal is ontworpen om de stijl en prestaties van jouw
        voertuig te verbeteren. Denk hierbij aan bumpers, sideskirts, spoilers en diffuserkits. Een bodykit kan subtiel
        zijn voor een verfijnde look, of juist opvallend voor een agressief en sportief ontwerp.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van een bodykit:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Sportieve uitstraling: Geef jouw auto een dynamische en unieke look.</li>
        <li>Verbeterde aerodynamica: Verhoog de stabiliteit en prestaties van je voertuig.</li>
        <li>Personalisatie: Creëer een stijl die volledig aansluit bij jouw persoonlijke smaak.</li>
        <li>Waardeverhoging: Een professioneel gemonteerde bodykit voegt waarde toe aan jouw auto.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Bodykit Montage bij Wrapmaster</h3>
      <p className="mt-3">
        Bij Wrapmaster zijn we gespecialiseerd in de montage van diverse soorten bodykits. Of je nu kiest voor een
        subtiele styling of een complete transformatie, wij werken met precisie en zorgen voor een naadloze installatie.
        Ons team heeft ervaring met alle merken en modellen, zodat je verzekerd bent van een perfecte pasvorm en
        afwerking.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Wat wij bieden:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Montage van bumpers, sideskirts, spoilers en diffuserkits.</li>
        <li>Aanpassingen aan bestaande bodykits voor een perfecte pasvorm.</li>
        <li>Combinatie met wrapping of lakwerk voor een compleet nieuwe uitstraling.</li>
        <li>Advies over de beste bodykits die passen bij jouw auto en stijl.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we vakmanschap met hoogwaardige materialen om jouw auto een unieke uitstraling te
        geven. Ons team met jarenlange ervaring zorgt ervoor dat jouw bodykit perfect wordt geïnstalleerd, zonder
        compromissen op kwaliteit of veiligheid.
      </p>
      <h4 className="mt-4 text-lg font-semibold">Voordelen van Wrapmaster:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Professionele montage: Wij garanderen een veilige en nauwkeurige installatie van jouw bodykit.</li>
        <li>Hoogwaardige afwerking: Elk detail wordt met zorg behandeld voor een strak eindresultaat.</li>
        <li>Persoonlijke service: Samen met jou kiezen we de juiste bodykit die past bij jouw wensen en voertuig.</li>
        <li>Snelle doorlooptijd: Wij zorgen ervoor dat je snel weer de weg op kunt met jouw vernieuwde auto.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Onze Werkwijze</h3>
      <ol className="list-decimal list-inside mt-2">
        <li>Adviesgesprek: We bespreken jouw wensen en adviseren over de beste bodykit voor jouw auto.</li>
        <li>Voorbereiding: Jouw auto wordt grondig geïnspecteerd en voorbereid voor de montage.</li>
        <li>
          Montage: Onze professionals monteren de bodykit nauwkeurig, waarbij we zorgen voor een perfecte pasvorm.
        </li>
        <li>Afwerking: We werken de kit netjes af en testen of alles stevig en veilig is geïnstalleerd.</li>
      </ol>
      <h3 className="mt-6 text-xl font-semibold">Populaire Bodykit Onderdelen</h3>
      <p className="mt-3">Bij Wrapmaster kunnen we een breed scala aan bodykit-onderdelen installeren, waaronder:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Frontbumpers en achterbumpers: Voor een agressieve en sportieve look.</li>
        <li>Sideskirts: Voor een lager ogende en aerodynamische uitstraling.</li>
        <li>Spoilers: Verhoog de downforce en verbeter de stabiliteit.</li>
        <li>Diffusers: Voeg een dynamisch accent toe en verbeter de luchtstroom.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Transformeer Jouw Auto met Wrapmaster Bodykit Montage!</h3>
      <p className="mt-3">
        Wil je jouw auto een unieke en sportieve look geven? Kies voor de expertise van Wrapmaster en laat jouw bodykit
        professioneel installeren. Neem vandaag nog contact met ons op voor meer informatie of een vrijblijvende
        offerte. Samen maken we van jouw auto een echte blikvanger!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <BodykitMontageSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Bodykit Montage bij Wrapmaster - Geef Jouw Auto een Unieke en Sportieve Look"
        description="Professionele montage van bodykits voor een verbeterde aerodynamica en opvallende uitstraling. Transformeer jouw auto met Wrapmaster's expertise."
        canonical="https://wrapmasterdh.nl/bodykit-montage"
        openGraph={{
          url: "https://wrapmasterdh.nl/bodykit-montage",
          title: "Bodykit Montage bij Wrapmaster - Geef Jouw Auto een Unieke en Sportieve Look",
          description:
            "Professionele montage van bodykits voor een verbeterde aerodynamica en opvallende uitstraling. Transformeer jouw auto met Wrapmaster's expertise.",
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
              "bodykit, bodykit installatie, carrosserie, spoilers, sideskirts, bumpers, diffusers, auto styling",
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
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-gray-400 py-5 text-center">{dienstData.title}</h1>
              <p className="text-base sm:text-xl mb-6 text-gray-400 px-16 text-center">{dienstData.description}</p>
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
              Bodykit Montage bij Wrapmaster – Geef Jouw Auto een Unieke en Sportieve Look
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
                alt="Bodykit Montage bij Wrapmaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <ImageCarousel images={sliderImages} />

        {/* Two Images Section */}
        <section className="max-w-full mx-auto mt-16 md:mt-44">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 2"
                fill
                className="object-cover"
              />
            </div>
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
