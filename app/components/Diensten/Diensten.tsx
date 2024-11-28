'use client';

import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/components/Diensten/slick-custom.css'; // Import custom styles
import { useEffect, useState } from 'react';

// Define the structure for each service
interface Dienst {
  id: number;
  title: string;
  video_file: string; // URL for video
  featured_image: string; // URL for featured image
  subtitle: string; // Subtitle of the service
  link_url: string; // Link for the service
  order_number: number; // Sorting order
}

const OnzeDiensten = () => {
  const [diensten, setDiensten] = useState<Dienst[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiensten = async () => {
      try {
        const response = await fetch(
          'https://docker-image-production-fb86.up.railway.app/wp-json/wp/v2/onze_diensten?_embed'
        );
        const data = await response.json();

        const formattedDiensten: Dienst[] = data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((dienst: any) => ({
            id: dienst.id,
            title: dienst.title.rendered,
            video_file: dienst.acf?.video_file || '',
            featured_image:
              dienst._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
            subtitle: dienst.acf?.subtitle || '',
            link_url: dienst.acf?.link_url || '#',
            order_number: dienst.acf?.order_number || 0,
          }))
          .sort((a: Dienst, b: Dienst) => a.order_number - b.order_number);

        setDiensten(formattedDiensten);
      } catch (error) {
        console.error('Failed to fetch diensten:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiensten();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    dotsClass: 'slick-dots custom-dots', // Custom dots class
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="spinner"></div>
        <style jsx>{`
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top-color: #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">BEKIJK ONZE DIENSTEN</h2>
        </div>
      </div>

      <div className="container w-full mx-auto">
        <Slider {...settings}>
          {diensten.map((dienst) => (
            <div key={dienst.id} className="p-4">
              <Link href={dienst.link_url}>
                <div className="relative flex flex-col items-center">
                  {dienst.video_file ? (
                    <video
                      src={dienst.video_file}
                      autoPlay
                      loop
                      muted
                      className="w-full h-[488px] object-cover mb-4"
                    />
                  ) : (
                    <img
                      src={dienst.featured_image}
                      alt={dienst.title}
                      className="w-full h-[488px] object-cover mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {dienst.title}
                  </h3>
                  <p className="text-sm text-center text-gray-600 mt-1">
                    {dienst.subtitle}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OnzeDiensten;
