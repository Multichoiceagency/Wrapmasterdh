/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.website.wrapmasterdh.nl',
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc', // Allow Google Drive direct image URLs
      },
      {
        protocol: 'https',
        hostname: 'asset.cloudinary.com',
        pathname: '/**', // Allow all assets under asset.cloudinary.com
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Allow all assets under res.cloudinary.com
      },
      {
        protocol: 'https',
        hostname: 'wrapmasterdh-production.up.railway.app',
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
