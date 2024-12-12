import Image from 'next/image'

interface DienstHeroProps {
  title: string
  description: string
  backgroundImage: string
}

export default function DienstHero({ title, description, backgroundImage }: DienstHeroProps) {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px]">
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl">{description}</p>
      </div>
    </div>
  )
}

