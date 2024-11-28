import React from 'react'
import HeroSection from './components/hero/Hero'
import Diensten from './components/Diensten/Diensten'
import CustomSection from './components/Customsection/CustomSection'
import Portfolio from './components/portfolio/Portfolio'
import ServicesSection from './components/ServicesSection'
import LogoSlider from '@/components/LogoSlider'

function Home() {
  return (

        <section className='w-full'>
                    <HeroSection />
                    <ServicesSection />
                    <Diensten />
                      <CustomSection />
                      <Portfolio />
                      <LogoSlider />
        </section>
  )
}

export default Home