/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.website.wrapmasterdh.nl",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc",
      },
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wrapmasterdh-production.up.railway.app",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)", // Alle routes en bestanden
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, must-revalidate", // 7 dagen cache
          },
        ],
      },
    ];
  },
};

export default nextConfig;
