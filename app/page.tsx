import { Section } from 'lucide-react'
import React from 'react'
import HeroSection from './components/hero/Hero'
import Diensten from './components/Diensten/Diensten'
import BentoGrid from './components/Bentogrid/BentoGrid'

function Home() {
  return (

        <section>
                    <HeroSection />
                    <Diensten />
                      <BentoGrid />

        </section>
  )
}

export default Home