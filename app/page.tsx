import React from 'react'
import HeroSection from './components/hero/Hero'
import Diensten from './components/Diensten/Diensten'
import CustomSection from './components/Customsection/CustomSection'
import Portfolio from './components/portfolio/Portfolio'
import ServicesSection from './components/ServicesSection'

function Home() {
  return (

        <section className='w-full'>
                    <HeroSection />
                    <ServicesSection />
                    <Diensten />
                      <CustomSection />
                      <Portfolio />
        </section>
  )
}

export default Home