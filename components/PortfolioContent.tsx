'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PortfolioContentProps {
  videos: string[]
  images: string[]
}

export default function PortfolioContent({ videos, images }: PortfolioContentProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="w-full pb-16">
      {isClient && (
        <>
          {/* Video Grid */}
          <div className="container mx-auto px-4 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <div key={index} className="aspect-[9/16] relative overflow-hidden rounded-lg">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {images.slice(0, 3).map((image, index) => (
                <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            {images[3] && (
              <div className="aspect-[21/9] relative overflow-hidden rounded-lg">
                <Image
                  src={images[3]}
                  alt="Portfolio image 4"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

