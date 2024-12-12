import { notFound } from 'next/navigation'
import DienstHero from '@/components/DienstHero'
import DienstContent from '@/components/DienstContent'

async function getDienstItem(slug: string) {
  const res = await fetch(`https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/diensten-pagina?slug=${slug}&_embed`)
  if (!res.ok) {
    notFound()
  }
  const data = await res.json()
  return data[0]
}

export default async function DienstPage({ params }: { params: { slug: string } }) {
  const dienstItem = await getDienstItem(params.slug)

  return (
    <div>
      <DienstHero
        title={dienstItem.title.rendered}
        description={dienstItem.acf?.description || ''}
        backgroundImage={dienstItem.acf?.background_image || ''}
      />
      <DienstContent
        content={dienstItem.content.rendered}
        features={dienstItem.acf?.features || []}
        gallery={dienstItem.acf?.gallery || []}
      />
    </div>
  )
}

