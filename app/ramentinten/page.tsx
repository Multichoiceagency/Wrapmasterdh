"use client";

import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import OnzeDiensten from "@/app/components/Diensten/Diensten";
import { faInstagram, faTiktok, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageCarousel from "@/components/ImageCarousel";

const socialMedia = {
  instagram: "https://www.instagram.com/wrapmasterdh/",
  tiktok: "https://www.tiktok.com/@wrapmasterdh",
  whatsapp: "https://wa.me/31638718893",
  facebook: "https://www.facebook.com/WrapmasterDH",
};

const dienstData = {
  title: "RAMEN TINTEN",
  description: "Ontdek onze professionele ramentint services!",
  heroImage: "/enes-website/ramentint/35423.jpg",
  contentImage1: "/enes-website/ramentint/RSQ3-ramentint.jpg",
  contentImage2: "/enes-website/ramentint/174585ba-079e-4bc9-a934-3397441542e3.jpg",
  contentImage3: "/enes-website/ramentint/IMG_2906.JPG",
};

const sliderImages = [
  "/enes-website/ramentint/41144.jpg",
  "/enes-website/ramentint/47458.jpg",
  "/enes-website/ramentint/47254.jpg",
  "/enes-website/ramentint/43106.jpg",
];

export default function Ramentinten() {
  const [showMore, setShowMore] = useState(false);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <>
      <NextSeo
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
        <section className="relative h-[50vh] sm:h-screen">
          <Image
            src={dienstData.heroImage || "/placeholder.jpg"}
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
                <Link href="/diensten" className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit">
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
              <div>{showMore ? dienstData.description : dienstData.description.slice(0, 100) + "..."}</div>
              <button className="mt-4 text-blue-600 hover:underline focus:outline-none" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Lees minder" : "Lees meer"}
              </button>
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
  );
}
