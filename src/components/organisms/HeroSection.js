// src/components/organisms/HeroSection.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
// Usamos la imagen que nos diste
import heroImage from "../../../public/imageHerocopia.webp"; 

export default function HeroSection({ lang, dict }) {
  const menuLink = `/${lang}/programs`; // Enlace actualizado a Programas

  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[500px] md:h-[80vh] flex items-center bg-primary">
      {/* Imagen de Fondo */}
      <Image
        src={heroImage} // Imagen del cliente
        alt={dict.imageAlt}
        fill
        style={{ objectFit: 'cover' }}
        priority
        quality={85}
      />
      
      {/* Degradado Oscuro a la Izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />

      {/* Contenido de Texto (Izquierda) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
      
      {/* La parte derecha queda vacía para mostrar a la jugadora */}
    </section>
  );
}