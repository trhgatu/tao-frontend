import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gateway',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
