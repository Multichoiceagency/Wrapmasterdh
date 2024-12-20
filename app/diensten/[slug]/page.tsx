import { notFound } from 'next/navigation'
import HeroSlider from '@/components/HeroSlider'
import DetailSlider from '@/components/DetailSlider'
import FullWidthSlider from '@/components/FullWidthSlider'
import EngineSlider from '@/components/EngineSlider'
import DetailGallerySlider from '@/components/DetailGallerySlider'
import DesignSection from '@/components/DesignSection'
import DienstContent from '@/components/DienstContent'
import { getMediaUrl } from '@/utils/MediaUrl'
import TechnicalSpecs from '@/components/Technicalspecs'

async function getDienstItem(slug: string) {
  const res = await fetch(`https://www.website.wrapmasterdh.nl/wp-json/wp/v2/diensten-pagina?slug=${slug}&_embed`)
  if (!res.ok) {
    notFound()
  }
  const data = await res.json()
  return data[0]
}

export default async function DienstPage({ params }: { params: { slug: string } }) {
  const dienstItem = await getDienstItem(params.slug)

  const heroSlides = [1, 2, 3, 4, 5].map(num => ({
    imageUrl: getMediaUrl(dienstItem.acf[`hero_afbeelding_${num}`] || ''),
    alt: dienstItem.title.rendered,
  })).filter(slide => slide.imageUrl);

  const detailSlides = [1, 2, 3, 4, 5].map(num => ({
    imageUrl: getMediaUrl(dienstItem.acf[`detail_gallerij_afbeelding_${num}`] || ''),
    alt: dienstItem.title.rendered,
  })).filter(slide => slide.imageUrl);

  const fullWidthSlides = [1, 2, 3].map(num => ({
    imageUrl: getMediaUrl(dienstItem.acf[`volledige_breedte_afbeelding_${num}`] || ''),
    alt: dienstItem.title.rendered,
  })).filter(slide => slide.imageUrl);

  const engineSlides = [1, 2, 3].map(num => ({
    imageUrl: getMediaUrl(dienstItem.acf[`motor_gallerij_afbeelding_${num}`] || ''),
    alt: dienstItem.title.rendered,
  })).filter(slide => slide.imageUrl);

  const detailGallerySlides = [1, 2, 3].map(num => ({
    imageUrl: getMediaUrl(dienstItem.acf[`detail_gallerij_2_afbeelding_${num}`] || ''),
    alt: dienstItem.title.rendered,
  })).filter(slide => slide.imageUrl);

  return (
    <div>
      <HeroSlider slides={heroSlides} />
      <TechnicalSpecs
        title={dienstItem.acf?.tech_specs_titel || dienstItem.title.rendered}
        specs={dienstItem.acf?.tech_specs_inhoud || ''}
      />
      <DetailSlider slides={detailSlides} />
      <div className="py-16">
        <FullWidthSlider slides={fullWidthSlides} />
      </div>
      <DesignSection
        title={dienstItem.acf?.design_sectie_titel || "DESIGN & EXTERIEUR"}
        subtitle={dienstItem.acf?.design_sectie_subtitel || "MONOCHROME"}
        description={[
          dienstItem.acf?.design_sectie_beschrijving_1,
          dienstItem.acf?.design_sectie_beschrijving_2,
          dienstItem.acf?.design_sectie_beschrijving_3,
        ].filter(Boolean)}
      />
      <div className="py-16">
        <EngineSlider slides={engineSlides} />
      </div>
      <DesignSection
        title={dienstItem.acf?.vermogen_sectie_titel || "POWER & SOUND"}
        subtitle={dienstItem.acf?.vermogen_sectie_subtitel || "LUXURIOUS MEETS POWERFUL"}
        description={[
          dienstItem.acf?.vermogen_sectie_beschrijving_1,
          dienstItem.acf?.vermogen_sectie_beschrijving_2,
          dienstItem.acf?.vermogen_sectie_beschrijving_3,
        ].filter(Boolean)}
      />
      <div className="py-16">
        <DetailGallerySlider slides={detailGallerySlides} />
      </div>
      <DesignSection
        title={dienstItem.acf?.wielen_sectie_titel || "RÄDER & FAHRWERK"}
        subtitle={dienstItem.acf?.wielen_sectie_subtitel || "FORGED IN GRAY"}
        description={[
          dienstItem.acf?.wielen_sectie_beschrijving_1,
          dienstItem.acf?.wielen_sectie_beschrijving_2,
        ].filter(Boolean)}
      />
      <DesignSection
        title={dienstItem.acf?.interieur_sectie_titel || "INTERIEUR"}
        subtitle={dienstItem.acf?.interieur_sectie_subtitel || "MASTERPIECE"}
        description={[
          dienstItem.acf?.interieur_sectie_beschrijving_1,
          dienstItem.acf?.interieur_sectie_beschrijving_2,
        ].filter(Boolean)}
      />
      <DienstContent
        content={dienstItem.content.rendered}
        features={[
          {
            title: dienstItem.acf?.kenmerk_1_titel || '',
            description: dienstItem.acf?.kenmerk_1_beschrijving || '',
            icon: getMediaUrl(dienstItem.acf?.kenmerk_1_icoon || ''),
          },
        ]}
        gallery={[getMediaUrl(dienstItem.acf?.gallerij_afbeelding_1 || '')].filter(Boolean)}
      />
    </div>
  );
}
