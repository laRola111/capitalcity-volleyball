// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection({ lang, dict }) {
  const menuLink = `/${lang}/programs`;

  return (
    // Ratio exacto de homepage-capital.png: 3168x1344 ≈ 2.36:1
    <section
      id="hero"
      className="relative w-full flex items-center justify-center bg-primary"
      style={{ aspectRatio: '3168/1344', maxHeight: '88vh' }}
    >
      {/* Imagen de Fondo — servida desde public/ sin import estático */}
      <Image
        src="/homepage-capital.png"
        alt={dict.imageAlt}
        fill
        style={{ objectFit: 'contain', objectPosition: 'center center' }}
        priority
        quality={90}
        sizes="100vw"
      />

      {/* Degradado izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />

      {/* Texto */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {dict.title}
            </h1>
            <p className="font-sans text-lg sm:text-xl text-gray-200 mb-8 max-w-lg">
              {dict.subtitle}
            </p>
            <Link
              href={menuLink}
              className="inline-block bg-accent text-white font-semibold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-accent-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-primary"
            >
              {dict.button}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}