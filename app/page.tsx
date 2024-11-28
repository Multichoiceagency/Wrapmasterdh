import React from 'react'
import HeroSection from './components/hero/Hero'
import Diensten from './components/Diensten/Diensten'
import CustomSection from './components/Customsection/CustomSection'
import Portfolio from './components/portfolio/Portfolio'
import ServicesSection from './components/ServicesSection'
import LogoSlider from '@/components/LogoSlider'
import NewsEvents from '@/components/newsevents'
import Afbeelding from '@/components/Afbeelding'
import DynamicSection from '@/components/DynamicSection'

function Home() {
  return (

        <section className='w-full'>
                    <HeroSection />
                    <ServicesSection />
                    <NewsEvents />
                    <Afbeelding />
                    <DynamicSection />
                    <Diensten />
                      <CustomSection />
                      <Portfolio />
                      <LogoSlider />
        </section>
  )
}

export default Home