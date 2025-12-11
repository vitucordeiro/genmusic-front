/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scdn.co',
      },
      {
        protocol: 'https',
        hostname: '**.spotifycdn.com',
      },
      {
        protocol: 'https',
        hostname: '**.spotify.com',
      },
      {
        protocol: 'https',
        hostname: '**.i.scdn.co',
      },
    ],
  },
};

export default nextConfig;
