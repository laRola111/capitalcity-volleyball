// src/components/organisms/GallerySlider.js
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Lista de imágenes de la galería/gallery/page.js]
const images = [
   "/IMG-20251110-WA0001.jpg",
  "/IMG-20251110-WA0002.jpg",
  "/IMG-20251110-WA0003.jpg",
  "/IMG-20251110-WA0004.jpg",
  "/IMG-20251110-WA0005.jpg",
  "/IMG-20251110-WA0006.jpg",
  "/IMG-20251110-WA0007.jpg",
  "/IMG-20251110-WA0008.jpg",
  "/imgProgram-1.png",
  "/imgProgram-2.png",
  "/imgProgram-3.png",
  "/imgProgram-4.png",
  "/imgUpcoming-1.png",
  "/imgUpcoming-2.png",
];

export default function GallerySlider({ dict }) {
  // Usamos el plugin de Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  ]);

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {dict.title}
          </h2>
        </motion.div>
      </div>

      {/* Slider */}
      <motion.div 
        className="embla" 
        ref={emblaRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0 }}
      >
        <div className="embla__container">
          {images.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative aspect-video w-full h-[50vh] md:h-[60vh] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="bg-gray-100"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}