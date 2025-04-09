"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ServicesSection from "./components/ServicesSection";
// SEO dynamisch importeren
const NextSeoClient = dynamic(() =>
  import("next-seo").then((mod) => mod.NextSeo),
  { ssr: false }
);

// Dynamisch importeren van componenten
const HeroSection = dynamic(() => import("./components/hero/Hero"));
const CustomSection = dynamic(() => import("./components/Customsection/CustomSection"));
const NewsEvents = dynamic(() => import("@/components/newsevents"));
const Afbeelding = dynamic(() => import("@/components/Afbeelding"));
const DynamicSection = dynamic(() => import("@/components/DynamicSection"));
const ProductSlider = dynamic(() => import("@/components/ProductSlider"));
const OnzeDiensten = dynamic(() => import("./components/Diensten/Diensten"));
const PrintFolie = dynamic(() => import("@/components/PrintFolie"));
const NewCustomSection = dynamic(() => import("@/components/NewCustomSection"));
const ThreeDCarwrapping = dynamic(() => import("@/components/ThreeDCarwrapping"));
const BoatSection = dynamic(() => import("@/components/BoatSection"));
const BoatenSlider = dynamic(() => import("@/components/BoatenSlider"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wacht tot alle componentbestanden zijn ingeladen
    Promise.all([
      import('./components/hero/Hero'),
      import('./components/Customsection/CustomSection'),
      import('@/components/newsevents'),
      import('@/components/Afbeelding'),
      import('@/components/DynamicSection'),
      import('@/components/ProductSlider'),
      import('./components/Diensten/Diensten'),
      import('@/components/PrintFolie'),
      import('@/components/NewCustomSection'),
      import('@/components/ThreeDCarwrapping'),
      import('@/components/BoatSection'),
      import('@/components/BoatenSlider')
    ]).then(() => {
      setTimeout(() => setIsLoading(false), 300);
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <NextSeoClient
        title="Wrapmaster - Professionele Carwrapping Specialist"
        description="Wrapmaster biedt hoogwaardige carwrapping, chrome delete, en andere autofolie diensten. Transformeer uw voertuig met onze expertise en kwaliteitsproducten."
        canonical="https://wrapmasterdh.nl/"
        openGraph={{
          url: "https://wrapmasterdh.nl/",
          title: "Wrapmaster - Professionele Carwrapping Specialist",
          description:
            "Ontdek de transformatieve kracht van professionele carwrapping en autofolie diensten bij Wrapmaster. Van chrome delete tot printfolie, wij bieden topkwaliteit voor uw voertuig.",
          images: [
            {
              url: "https://wrapmasterdh.nl/logos/logo-zwart.png",
              width: 1200,
              height: 630,
              alt: "Wrapmaster Carwrapping",
            },
          ],
          site_name: "Wrapmaster",
        }}
        twitter={{
          handle: "@wrapmasterdh",
          site: "@wrapmasterdh",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "carwrapping, autofolie, chrome delete, printfolie, voertuigbelettering, auto styling, auto wrappen Den Haag",
          },
        ]}
      />

      {isLoading ? (
        <div className="p-10 flex flex-col space-y-6 animate-pulse">
          <div className="h-[400px] bg-gray-200 rounded-md" />
          <div className="h-10 bg-gray-200 rounded-md w-1/2" />
          <div className="h-32 bg-gray-200 rounded-md" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-40 bg-gray-200 rounded-md" />
            <div className="h-40 bg-gray-200 rounded-md" />
            <div className="h-40 bg-gray-200 rounded-md" />
            <div className="h-40 bg-gray-200 rounded-md" />
          </div>
        </div>
      ) : (
        <>
          <HeroSection />
          <ServicesSection />
          <NewsEvents />
          <Afbeelding />
          <DynamicSection />
          <OnzeDiensten />
          <CustomSection />
          <ProductSlider />
          <PrintFolie />
          <ThreeDCarwrapping />
          <NewCustomSection />
          <BoatenSlider />
          <BoatSection />
        </>
      )}
    </div>
  );
}
