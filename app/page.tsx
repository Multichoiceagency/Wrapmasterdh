'use client'
import React from 'react'
import { NextSeo } from 'next-seo';
import HeroSection from './components/hero/Hero'
import CustomSection from './components/Customsection/CustomSection'
import ServicesSection from './components/ServicesSection'
import LogoSlider from '@/components/LogoSlider'
import NewsEvents from '@/components/newsevents'
import Afbeelding from '@/components/Afbeelding'
import DynamicSection from '@/components/DynamicSection'
import ProductSlider from '@/components/ProductSlider'
import OnzeDiensten from './components/Diensten/Diensten'
import PrintFolie from '@/components/PrintFolie'
import NewCustomSection from '@/components/NewCustomSection'
import ThreeDCarwrapping from '@/components/ThreeDCarwrapping'
import BoatSection from '@/components/BoatSection'
import BoatenSlider from '@/components/BoatenSlider'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <NextSeo
        title="Wrapmaster - Professionele Carwrapping Specialist"
        description="Wrapmaster biedt hoogwaardige carwrapping, chrome delete, en andere autofolie diensten. Transformeer uw voertuig met onze expertise en kwaliteitsproducten."
        canonical="https://wrapmasterdh.nl/"
        openGraph={{
          url: 'https://wrapmasterdh.nl/',
          title: 'Wrapmaster - Professionele Carwrapping Specialist',
          description: 'Ontdek de transformatieve kracht van professionele carwrapping en autofolie diensten bij Wrapmaster. Van chrome delete tot printfolie, wij bieden topkwaliteit voor uw voertuig.',
          images: [
            {
              url: 'https://wrapmasterdh.nl/images/wrapmaster-og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Wrapmaster Carwrapping',
            },
          ],
          site_name: 'Wrapmaster',
        }}
        twitter={{
          handle: '@wrapmasterdh',
          site: '@wrapmasterdh',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'carwrapping, autofolie, chrome delete, printfolie, voertuigbelettering, auto styling, auto wrappen Den Haag',
          },
        ]}
      />
      <HeroSection />
      <ServicesSection />
      <NewsEvents />
      <Afbeelding />
      <DynamicSection />
      <OnzeDiensten />
      <CustomSection />
      <ProductSlider />
      <PrintFolie  />
      <ThreeDCarwrapping />
      <NewCustomSection />
      <BoatenSlider />
      <BoatSection />
      <LogoSlider />
    </div>
  )
}

