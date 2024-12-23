import { cache } from 'react';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  background_image: string;
}

interface DienstCard {
  id: number;
  titel: string;
  subtitel: string;
  afbeelding: string;
  slug: string;
  sort_order: number;
}

function formatGoogleDriveUrl(url: string): string {
  if (url.includes('drive.google.com')) {
    const fileId = url.split('/d/')[1]?.split('/')[0];
    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  return url;
}

export const getHeroSlides = cache(async (): Promise<HeroSlide[]> => {
  const response = await fetch(
    'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/hero-slide?_embed',
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  const data = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((slide: any) => ({
    id: slide.id,
    title: slide.title.rendered || 'Default Title',
    subtitle: slide.acf?.subtitle || 'Default Subtitle',
    button_text: slide.acf?.button_text || 'Discover Now',
    button_link: slide.acf?.button_link || '#',
    background_image: formatGoogleDriveUrl(slide.acf?.background_image || ''),
  }));
});

export const getDienstCards = cache(async (): Promise<DienstCard[]> => {
  const response = await fetch(
    'https://www.website.wrapmasterdh.nl/wp-json/wp/v2/diensten-pagina?_embed&per_page=100',
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  const data = await response.json();

  return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((dienst: any) => ({
      id: dienst.id,
      titel: dienst.title.rendered || 'Default Title',
      subtitel: dienst.acf?.subtitle || 'Default Subtitle',
      afbeelding: formatGoogleDriveUrl(dienst.acf?.background_image || ''),
      slug: dienst.slug || '',
      sort_order: dienst.acf?.sort_order ? parseInt(dienst.acf.sort_order, 10) : 0,
    }))
    .sort((a: DienstCard, b: DienstCard) => a.sort_order - b.sort_order);
});

