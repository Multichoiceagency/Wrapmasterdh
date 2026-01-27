/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker/Coolify deployment
  output: "standalone",

  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"],
    // Optimize image quality and sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
        hostname: "wordpress-ywswgkcs00k0c4wsoc8k0o04.135.181.47.19.sslip.io",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "wordpress-ywswgkcs00k0c4wsoc8k0o04.135.181.47.19.sslip.io",
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
        // Next.js static chunks - 1 year immutable cache
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Optimized images from Next.js - 1 year cache
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Video files - aggressive caching
        source: "/:path*.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // WebM video files
        source: "/:path*.webm",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Image files - aggressive caching
        source: "/:path*.(jpg|jpeg|png|gif|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Font files - aggressive caching
        source: "/:path*.(woff|woff2|ttf|otf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Other routes - 7 day cache with revalidation
        source: "/((?!_next|api).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;