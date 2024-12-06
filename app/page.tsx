import React from 'react'
import HeroSection from './components/hero/Hero'
import CustomSection from './components/Customsection/CustomSection'
import Portfolio from './components/portfolio/Portfolio'
import ServicesSection from './components/ServicesSection'
import LogoSlider from '@/components/LogoSlider'
import NewsEvents from '@/components/newsevents'
import Afbeelding from '@/components/Afbeelding'
import DynamicSection from '@/components/DynamicSection'
import OnzeDiensten from './components/Diensten/Diensten'

function Home() {
  return (

        <section className='w-full'>
                    <HeroSection />
                    <ServicesSection />
                    <NewsEvents />
                    <Afbeelding />
                    <DynamicSection />
                      <OnzeDiensten />
                      <CustomSection />
                      <Portfolio />
                      <LogoSlider />
        </section>
  )
}

export default Home