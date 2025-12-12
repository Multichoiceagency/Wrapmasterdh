/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker/Coolify deployment
  output: "standalone",

  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3010",
        pathname: "/**",
      },
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
      // Supabase Storage (cloud)
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/**",
      },
      // Self-hosted Supabase on Coolify (sslip.io)
      {
        protocol: "http",
        hostname: "*.sslip.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.sslip.io",
        pathname: "/**",
      },
      // Coolify deployment domain
      {
        protocol: "https",
        hostname: "coolify.barosy.nl",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.barosy.nl",
        pathname: "/**",
      },
    ],
  },

  // Set cache headers for routes (excluding Next.js chunks)
  async headers() {
    return [
      {
        // Exclude Next.js internal files from long cache
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 year cache for static chunks
          },
        ],
      },
      {
        // Apply 7-day cache to other routes (pages, API routes, etc.)
        source: "/((?!_next).*)",
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