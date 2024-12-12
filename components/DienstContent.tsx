import Image from 'next/image'

interface Feature {
  title: string
  description: string
  icon: string
}

interface DienstContentProps {
  content: string
  features: Feature[]
  gallery: string[]
}

export default function DienstContent({ content, features, gallery }: DienstContentProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="prose max-w-none mb-16" dangerouslySetInnerHTML={{ __html: content }} />
      
      {features.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {gallery.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image src={image} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

