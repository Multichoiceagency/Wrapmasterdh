'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ServiceHeroProps {
  mediaType: 'video' | 'image'
  mediaUrl: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function ServiceHero({
  mediaType,
  mediaUrl,
  title,
  description,
  buttonText,
  buttonLink
}: ServiceHeroProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative w-full h-[85vh] md:h-[93vh]">
      {isClient && (
        <>
          {mediaType === 'video' ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={mediaUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
            <h1 className="text-4xl md:text-5xl font mb-6">{title}</h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">{description}</p>
            <a
              href={buttonLink}
              className="mt-4 px-6 py-3 bg-black text-white font-semibold border border-white hover:bg-white hover:text-black transition duration-300"
            >
              {buttonText}
            </a>
          </div>
        </>
      )}
    </div>
  )
}

