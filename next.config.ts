/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Add any specific configurations needed for your project
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
