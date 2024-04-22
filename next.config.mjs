/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: '**.referrals.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdn.vnoc.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vnoc.com',
      }
    ],
  },
};

export default nextConfig;
