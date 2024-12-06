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
//onze diensten slider moet ergens 

function Home() {
  return (

        <section className='w-full'>
                    <HeroSection />
                    <ServicesSection />
                    <NewsEvents />
                    <Afbeelding />
                    <DynamicSection />
                    <ProductSlider />
                    <CustomSection />
                    <OnzeDiensten />
                    <LogoSlider />
        </section>
  )
}

export default Home