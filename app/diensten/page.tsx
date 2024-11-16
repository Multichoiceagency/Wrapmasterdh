'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

const diensten = [
  {
    title: 'Carwrapping',
    description: 'Verander je voertuig volledig met een hoogwaardige car wrap die niet alleen stijlvol is, maar ook bescherming biedt tegen schade.',
    image: '/images/carwrapping.jpg'
  },
  {
    title: 'Detail Wrapping',
    description: 'Geef je auto een sportieve en elegante uitstraling met professioneel getinte koplampen. Kies uit verschillende tinten die passen bij jouw stijl.',
    image: '/images/detailwrapping.png'
  },
  {
    title: 'Chrome Delete',
    description: 'Geen fan van chromen accenten? Met een chrome delete veranderen wij alle chromen onderdelen van je auto naar een matte of glanzende afwerking.',
    image: '/images/chrome-delete.jpg'
  },
  {
    title: 'Reclamebelettering',
    description: 'Verhoog de zichtbaarheid van je bedrijf met professionele autobelettering. Creëer een mobiele advertentie voor je merk.',
    image: '/images/reclamebelettering.png'
  },
  {
    title: 'Poetsen & Glascoating',
    description: 'Bescherm je auto met een duurzame glascoating die zorgt voor een diepe glans en eenvoudige reiniging.',
    image: '/images/poetsen-glascoating.jpeg'
  },
  {
    title: 'Velgen & Remklauwen',
    description: 'Laat je velgen en remklauwen opvallen met een nieuwe, op maat gemaakte afwerking.',
    image: '/images/velgen-remklauwen-spuiten.png'
  },
  {
    title: 'Koplampen Tinten',
    description: 'Geef je auto een sportieve en elegante uitstraling met professioneel getinte koplampen.',
    image: '/images/lampen-tinten.png'
  },
  {
    title: 'Autogordels',
    description: 'Wrapmaster is dé specialist in het vervangen en aanpassen van autogordels.',
    image: '/images/gordelkleur-vervangen.jpg'
  },
  {
    title: 'Scooter & Motorwrap',
    description: 'Geef je scooter of motor een opvallende nieuwe look met een professionele wrap.',
    image: '/images/scooter-motorwrapping.png'
  }
]

function useParallax() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return offset
}

export default function Diensten() {
  const scrollY = useParallax()

  return (
    <main>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        >
          <Image 
            src="/images/hero-background.jpg" 
            alt="Wrapmaster services"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div 
          className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        >
          <h1 className="text-6xl font-bold text-white mb-4 items-center">Onze diensten.</h1>
          <p className="text-xl text-white mb-8 justify-items-center">
            Bij Wrapmaster zorgen wij voor eersteklas car wrapping en nevendiensten die je voertuig naar een hoger niveau tillen.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition w-max">
            Ontdek meer
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <span className="text-white text-sm">Scrollen</span>
          <svg className="w-6 h-6 text-white mx-auto mt-2 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <section className="mb-16 pt-16">
          <h2 className="text-4xl font-bold mb-8">Onze diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diensten.map((service, index) => (
              <div key={index} className="max-w-xs w-full mx-auto">
                <div
                  className={cn(
                    "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                    `bg-[url('${service.image}')] bg-cover`,
                    "before:bg-[url('/images/hover-background.gif')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url('/images/hover-background.gif')]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                    "transition-all duration-500"
                  )}
                >
                  <div className="text relative z-50">
                    <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                      {service.title}
                    </h1>
                    <p className="font-normal text-base text-gray-50 relative my-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}