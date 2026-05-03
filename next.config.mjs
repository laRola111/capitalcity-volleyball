// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    // Evita que Vercel bloquee el build por errores de ESLint (como el "Failed to patch ESLint")
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;