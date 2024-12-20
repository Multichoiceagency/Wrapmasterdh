"use client";

import React, { useEffect, useState } from "react";

// Define the structure of the API response
interface ServiceData {
  id: number;
  acf: {
    service_1: string;
    service_1_link: string;
    service_2: string;
    service_2_link: string;
    service_3: string;
    service_3_link: string;
    service_4: string;
    service_4_link: string;
  };
}

const ServicesSection: React.FC = () => {
  const [services, setServices] = useState<ServiceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://www.website.wrapmasterdh.nl/wp-json/wp/v2/services_section?_embed"
        );
        const data: ServiceData[] = await response.json();
        if (data.length > 0) {
          setServices(data[0]); // Use the first entry for simplicity
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="loader">
          <div className="spinner"></div>
        </div>
        <style jsx>{`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
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

  if (!services) {
    return (
      <div className="flex items-center justify-center h-[10vh]">
        <p>No services available</p>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col items-center h-[10vh]">
      {/* Services Container */}
      <div className="w-full flex flex-wrap justify-between items-center text-center border-b border-gray-300 py-4 px-4">
        <div className="w-1/2 sm:w-1/4 mb-4 sm:mb-0">
          {services.acf.service_1_link ? (
            <a
              href={services.acf.service_1_link}
              className="text-sm sm:text-base md:text-lg font-bold tracking-wider hover:text-red-900"
            >
              {services.acf.service_1}
            </a>
          ) : (
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">
              {services.acf.service_1}
            </span>
          )}
        </div>
        <div className="w-1/2 sm:w-1/4 mb-4 sm:mb-0">
          {services.acf.service_2_link ? (
            <a
              href={services.acf.service_2_link}
              className="text-sm sm:text-base md:text-lg font-bold tracking-wider hover:text-red-900"
            >
              {services.acf.service_2}
            </a>
          ) : (
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">
              {services.acf.service_2}
            </span>
          )}
        </div>
        <div className="w-1/2 sm:w-1/4">
          {services.acf.service_3_link ? (
            <a
              href={services.acf.service_3_link}
              className="text-sm sm:text-base md:text-lg font-bold tracking-wider hover:text-red-900"
            >
              {services.acf.service_3}
            </a>
          ) : (
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">
              {services.acf.service_3}
            </span>
          )}
        </div>
        <div className="w-1/2 sm:w-1/4">
          {services.acf.service_4_link ? (
            <a
              href={services.acf.service_4_link}
              className="text-sm sm:text-base md:text-lg font-bold tracking-wider hover:text-red-900"
            >
              {services.acf.service_4}
            </a>
          ) : (
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider">
              {services.acf.service_4}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
