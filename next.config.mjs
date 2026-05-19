/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2560],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lenis"],
    // Inline critical CSS to reduce the render-blocking CSS request that
    // Lighthouse audit "Render blocking requests" flags (~990 ms savings
    // observed in PSI). Requires the `critters` package, which Next 14
    // pulls in automatically when this flag is set.
    optimizeCss: true,
  },
};

export default nextConfig;
