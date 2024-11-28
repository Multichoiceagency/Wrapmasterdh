/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['docker-image-production-fb86.up.railway.app'], // Allow external images from this domain
  },
};

export default nextConfig;
