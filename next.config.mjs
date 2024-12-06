/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docker-image-production-fb86.up.railway.app',
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
        pathname: '/**', // Allow all Cloudinary assets
      },
      {
        protocol: 'https',
        hostname: 'wrapmasterdh-production.up.railway.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

