import React from 'react'
import HeroSection from './components/hero/Hero'
import Diensten from './components/Diensten/Diensten'
import BentoGrid from './components/Bentogrid/BentoGrid'
import CustomSection from './components/Customsection/CustomSection'
import Portfolio from './components/portfolio/Portfolio'

function Home() {
  return (

        <section className='w-full'>
                    <HeroSection />
                    <Diensten />
                      <BentoGrid />
                      <CustomSection />
                      <Portfolio />
        </section>
  )
}

export default Home