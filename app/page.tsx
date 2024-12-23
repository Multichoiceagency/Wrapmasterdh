import React from 'react'
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
import InstagramSection from '@/components/InstagramSection'
import ThreeDCarWrapping from '@/components/ThreeDCarwrapping'

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <NewsEvents />
      <Afbeelding />
      <DynamicSection />
      <OnzeDiensten />
      <CustomSection />
      <ProductSlider />
      <PrintFolie  />
      <ThreeDCarWrapping />
      <InstagramSection />
      <LogoSlider />
    </div>
  )
}

