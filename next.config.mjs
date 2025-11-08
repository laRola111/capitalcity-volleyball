// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- AÑADE ESTO ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // --- FIN DE LA MODIFICACIÓN ---
};

export default nextConfig;