'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface SectionData {
  id: number
  title: string
  description: string
  featured_image: string
  button_text: string
  button_link: string
}

export default function CollectionSection() {
  const [sectionData, setSectionData] = useState<SectionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const response = await fetch(
          'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/dynamic_section?_embed'
        )
        const data = await response.json()

        if (data.length > 0) {
          const section = {
            id: data[0].id,
            title: data[0].title.rendered,
            description: data[0].content.rendered || '',
            featured_image:
              data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg',
            button_text: data[0]?.acf?.button_text || 'DISCOVER NOW',
            button_link: data[0]?.acf?.button_link || '#',
          }
          setSectionData(section)
        }
      } catch (error) {
        console.error('Failed to fetch section data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSectionData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <div className="w-16 h-16 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!sectionData) {
    return <p className="text-center text-gray-700 h-[600px] flex items-center justify-center">No section data found.</p>
  }

  return (
    <div className="flex py-16">
      {/* Image Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="relative w-full h-[500px]">
          <Image
            src={sectionData.featured_image}
            alt={sectionData.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-3xl font-bold mb-8">
          {sectionData.title}
        </h1>
        <div 
          className="mb-8 leading-relaxed max-w-xl font-regular"
          dangerouslySetInnerHTML={{ __html: sectionData.description }}
        />
        <a 
          href={sectionData.button_link}
          className="bg-black text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors w-fit"
        >
          {sectionData.button_text}
        </a>
      </div>
    </div>
  )
}