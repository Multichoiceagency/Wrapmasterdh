import { Section } from 'lucide-react'
import React from 'react'
import HeroSection from './components/hero/Hero'
import Diensten from './components/Diensten/Diensten'
import BentoGrid from './components/Bentogrid/BentoGrid'
import CustomSection from './components/Customsection/CustomSection'
import Portfolio from './components/portfolio/portfolio'

function Home() {
  return (

        <section>
                    <HeroSection />
                    <Diensten />
                      <BentoGrid />
                      <CustomSection />
                      <Portfolio />
        </section>
  )
}

export default Home