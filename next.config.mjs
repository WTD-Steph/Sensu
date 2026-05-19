/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2560],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lenis"],
  },
};

export default nextConfig;
