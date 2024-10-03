'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const diensten = [
  {
    title: 'Carwrapping',
    description: 'Simpelweg het inpakken van jouw voertuig met een speciaal gekleurde folie.',
    image: '/images/carwrapping.jpg'
  },
  {
    title: 'Koplampen Tinten',
    description: 'Geef je eigen draai aan de verlichting van je voertuig.',
    image: '/images/koplampen-tinten.jpg'
  },
  {
    title: 'Chrome Delete',
    description: 'Verander alle chrome delen naar elk gewenste kleur.',
    image: '/images/chrome-delete.jpg'
  },
  {
    title: 'Reclamebelettering',
    description: 'Voordelige en aantrekkelijke manier om uw bedrijf te presenteren.',
    image: '/images/reclamebelettering.jpg'
  }
]

const additionalServices = [
  {
    title: 'Poetsen & Glascoating',
    description: 'Bescherm uw auto met een coating voor makkelijker onderhoud.',
    image: '/images/poetsen-glascoating.jpg'
  },
  {
    title: 'Velgen & Remklauwen',
    description: 'Spuiten, coaten of wrappen van velgen en remklauwen.',
    image: '/images/velgen-remklauwen.jpg'
  }
]

const specializedServices = [
  {
    title: 'Autogordels',
    description: 'De autogordel specialist van Nederland.',
    image: '/images/autogordels.jpg'
  },
  {
    title: 'Scooter & Motorwrap',
    description: 'Geef je scooter of motor een unieke draai.',
    image: '/images/scooter-motorwrap.jpg'
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
  const [currentAdditionalService, setCurrentAdditionalService] = useState(0)
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
            src="/images/brabus900-rocket-r.jpg" 
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
          <h1 className="text-6xl font-bold text-white mb-4">Onze services.</h1>
          <p className="text-xl text-white mb-8">
            Bij Wrapmaster gaan we heel ver om voor eersteklas services voor uw auto te zorgen.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diensten.map((service, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={service.image} alt={service.title} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    Meer weten
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Aanvullende Diensten</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image 
                src={additionalServices[currentAdditionalService].image} 
                alt={additionalServices[currentAdditionalService].title} 
                width={600} 
                height={400} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{additionalServices[currentAdditionalService].title}</h3>
              <p className="text-gray-600 mb-4">{additionalServices[currentAdditionalService].description}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Meer weten
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {additionalServices.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentAdditionalService ? 'bg-red-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentAdditionalService(index)}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Specialistische Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={service.image} alt={service.title} width={200} height={200} className="w-1/3 object-cover" />
                <div className="w-2/3 p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                    Meer weten
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">Zakelijke en wagenparkoplossingen.</h2>
              <p className="text-gray-600 mb-4">
                Profiteer van wagenparkoplossingen en zakelijke diensten van Wrapmaster. 
                Wij bieden op maat gemaakte oplossingen voor uw bedrijfsvoertuigen.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Meer weten
              </button>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/zakelijke-oplossingen.jpg" alt="Zakelijke oplossingen" width={600} height={400} className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}