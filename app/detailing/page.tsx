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
  title: "DETAILING",
  description: "",
  heroImage: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/20211216_141527.jpg",
  contentImage1: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/Lamborghini Urus11.jpg",
  contentImage2: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/WM-8.jpg",
  contentImage3: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/Lamborghini Urus7.jpg",
}

const sliderImages = [
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/BlndrAgency_ (5 of 34).jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/RSQ3-8.jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/Mercedez-Benz AMG GT63_DONE_ (3 of 41).jpg",
  "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/enes-website/detailing/Maasvlakte-18.jpg",
]

const reels = [
  {
    id: 1,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/BLACK FERARRI normal 25-12.mp4",
    likes: "65.2k",
    comments: "195",
  },
  {
    id: 2,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/G WAGON 50FPS_1.mp4",
    likes: "120k",
    comments: "345",
  },
  {
    id: 3,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/PORSCHE FINAL 2.MP4",
    likes: "45.6k",
    comments: "89",
  },
  {
    id: 4,
    video: "https://minio-bwc0g844occs44gc8k08os04.135.181.47.19.sslip.io/wrapmaster/video/SWIPE V2 - @wrapmaster.MP4",
    likes: "78.9k",
    comments: "230",
  },
]

// Skeleton component for the Auto Detailing page
function AutoDetailingSkeleton() {
  return (
    <div className="bg-white min-h-screen">
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

      {/* Instagram Reels Section Skeleton */}
      <section className="w-full bg-white py-16">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="h-[300px] sm:h-[760px] rounded-lg" />
          ))}
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

export default function AutoDetailing() {
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
      Wil jij jouw auto weer laten stralen als nooit tevoren? Bij Wrapmaster bieden we professionele auto detailing
      diensten aan die zorgen voor een diepgaande reiniging en herstel van zowel het interieur als exterieur van jouw
      voertuig. Onze detailing services zijn ontworpen om jouw auto in topconditie te brengen en te houden, terwijl we
      elk detail met de grootste zorg aanpakken.
    </p>
  )

  const fullText = (
    <>
      {shortText}
      <h3 className="mt-6 text-xl font-semibold">Wat is Auto Detailing?</h3>
      <p className="mt-3">
        Auto detailing gaat verder dan een standaard wasbeurt. Het is een uitgebreide en precieze aanpak waarbij we elk
        onderdeel van jouw auto reinigen, herstellen en beschermen. Of het nu gaat om de glans van de lak, het herstel
        van kunststofdelen of het reinigen van bekleding, met detailing geef je jouw auto een frisse, verzorgde
        uitstraling die lijkt alsof hij net uit de showroom komt.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Auto Detailing?</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Diepgaande reiniging: Elk oppervlak, van velgen tot bekleding, wordt grondig gereinigd en opgefrist.</li>
        <li>
          Lakherstel: Dankzij technieken zoals polijsten wordt jouw lak ontdaan van krassen, swirls en verkleuringen.
        </li>
        <li>
          Bescherming: Hoogwaardige coatings en waxlagen zorgen ervoor dat jouw auto beschermd is tegen vuil,
          UV-straling en weersinvloeden.
        </li>
        <li>Langdurige waarde: Door regelmatig detailing behoudt jouw voertuig zijn waarde en uitstraling.</li>
        <li>Perfect interieur: Vlekken en geurtjes verdwijnen dankzij specialistische reinigingsmethoden.</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Wrapmaster: Jouw Specialist in Auto Detailing</h3>
      <p className="mt-3">
        Bij Wrapmaster werken we met een team van ervaren professionals met jarenlange ervaring in het perfectioneren
        van voertuigen. Onze passie voor autos en oog voor detail zorgen ervoor dat elk project met precisie en
        vakmanschap wordt uitgevoerd. Wij gebruiken uitsluitend premium producten en technieken om ervoor te zorgen dat
        jouw auto het beste resultaat krijgt.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Onze Detailing Diensten</h3>
      <p className="mt-3">
        We bieden een breed scala aan auto detailing services aan die volledig op jouw wensen en voertuig zijn
        afgestemd:
      </p>
      <h4 className="mt-4 text-lg font-semibold">Exterieur Detailing:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Polijsten voor een diepe glans en lakherstel</li>
        <li>Reiniging van velgen, banden en sierlijsten</li>
        <li>Aanbrengen van lakbescherming, zoals wax of keramische coatings</li>
      </ul>
      <h4 className="mt-4 text-lg font-semibold">Interieur Detailing:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Grondige reiniging van bekleding, dashboard en vloerbedekking</li>
        <li>Diepreiniging voor vlekverwijdering</li>
        <li>Behandeling van leren bekleding voor een frisse uitstraling</li>
      </ul>
      <h4 className="mt-4 text-lg font-semibold">Motorruimte Reiniging:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>Zorgvuldige schoonmaak en bescherming van de motorruimte</li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">Waarom kiezen voor Wrapmaster?</h3>
      <p className="mt-3">
        Bij Wrapmaster combineren we expertise, passie en premium producten om jouw auto een ongeëvenaarde afwerking te
        geven. Ons team werkt met geavanceerde technieken en tools om ervoor te zorgen dat jouw voertuig er perfect
        uitziet. Daarnaast bieden we maatwerk oplossingen aan, zodat elke auto de aandacht krijgt die het verdient.
      </p>
      <h3 className="mt-6 text-xl font-semibold">Voordelen van Auto Detailing bij Wrapmaster</h3>
      <ul className="list-disc list-inside mt-2">
        <li>Premium materialen: We gebruiken alleen de beste producten die veilig zijn voor jouw auto.</li>
        <li>Professionele aanpak: Ons ervaren team weet precies wat jouw auto nodig heeft.</li>
        <li>Maatwerk oplossingen: We bieden detailing op maat, afgestemd op jouw wensen en budget.</li>
        <li>
          Langdurige bescherming: Onze coatings en waxlagen zorgen ervoor dat je auto beschermd blijft tegen invloeden
          van buitenaf.
        </li>
      </ul>
      <h3 className="mt-6 text-xl font-semibold">
        Geef jouw auto de zorg die het verdient met Wrapmaster Auto Detailing!
      </h3>
      <p className="mt-3">
        Wil jij jouw auto laten stralen als nooit tevoren? Kies voor de detailing services van Wrapmaster en geniet van
        een resultaat dat jouw verwachtingen overtreft. Neem vandaag nog contact met ons op voor meer informatie of een
        vrijblijvende offerte. Samen zorgen we ervoor dat jouw auto er weer als nieuw uitziet!
      </p>
    </>
  )

  // Show skeleton while loading
  if (loading) {
    return <AutoDetailingSkeleton />
  }

  return (
    <>
      <NextSeoClient
        title="Auto Detailing bij Wrapmaster - Voor een Showroomwaardige Auto"
        description="Professionele auto detailing diensten bij Wrapmaster. Diepgaande reiniging en herstel van uw voertuig. Laat uw auto weer stralen als nooit tevoren!"
        canonical="https://wrapmasterdh.nl/auto-detailing"
        openGraph={{
          url: "https://wrapmasterdh.nl/auto-detailing",
          title: "Auto Detailing bij Wrapmaster - Voor een Showroomwaardige Auto",
          description:
            "Professionele auto detailing diensten bij Wrapmaster. Diepgaande reiniging en herstel van uw voertuig. Laat uw auto weer stralen als nooit tevoren!",
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
              "auto detailing, auto detailen, auto reinigen, auto schoonmaken, lakherstel, interieur reiniging, exterieur reiniging",
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
              Auto Detailing bij Wrapmaster – Voor een Showroomwaardige Auto
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
                alt="Auto Detailing bij Wrapmaster"
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
            <div className="relative h-[700px] sm:h-[700px]">
              <Image
                src={dienstData.contentImage2 || "/placeholder.svg"}
                alt="Content Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[700px] sm:h-[700px]">
              <Image
                src={dienstData.contentImage3 || "/placeholder.svg"}
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

        {/* Wrapmaster Services Section */}
        <section className="py-9">
          <OnzeDiensten />
        </section>
      </main>
    </>
  )
}
