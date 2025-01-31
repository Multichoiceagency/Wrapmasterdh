/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
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
};

export default nextConfig;
