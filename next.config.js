/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint checks during build process
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"],
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

  // Set cache headers for all routes
  async headers() {
    return [
      {
        source: "/(.*)", // All routes and files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, must-revalidate", // 7-day cache
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;