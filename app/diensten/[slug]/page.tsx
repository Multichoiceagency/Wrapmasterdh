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

  const createSlides = (prefix: string, count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const key = `${prefix}_${i + 1}`;
      const url = getMediaUrl(dienstItem.acf[key]);
      return {
        imageUrl: url,
        alt: dienstItem.title.rendered,
      };
    }).filter(slide => slide.imageUrl);
  };

  const heroSlides = createSlides('hero_afbeelding', 5);
  const detailSlides = createSlides('detail_gallerij_afbeelding', 5);
  const fullWidthSlides = createSlides('volledige_breedte_afbeelding', 3);
  const engineSlides = createSlides('motor_gallerij_afbeelding', 3);
  const detailGallerySlides = createSlides('detail_gallerij_2_afbeelding', 3);

  const features = [
    {
      title: dienstItem.acf?.kenmerk_1_titel || '',
      description: dienstItem.acf?.kenmerk_1_beschrijving || '',
      icon: getMediaUrl(dienstItem.acf?.kenmerk_1_icoon),
    },
    // Add more features if needed
  ].filter(feature => feature.title && feature.description);

  const gallery = [
    getMediaUrl(dienstItem.acf?.gallerij_afbeelding_1),
    // Add more gallery images if needed
  ].filter(Boolean);

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
        features={features}
        gallery={gallery}
      />
    </div>
  );
}

