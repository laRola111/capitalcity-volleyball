'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  "/IMG-20251110-WA0001.jpg",
  "/imgProgram-1.png",
  "/IMG-20251110-WA0002.jpg",
  "/imgProgram-2.png",
  "/IMG-20251110-WA0003.jpg",
  "/imgProgram-3.png",
  "/IMG-20251110-WA0004.jpg",
  "/imgProgram-4.png",
  "/IMG-20251110-WA0005.jpg",
  "/imgUpcoming-1.png",
  "/IMG-20251110-WA0006.jpg",
  "/imgUpcoming-2.png",
  "/IMG-20251110-WA0007.jpg",
  "/IMG-20251110-WA0008.jpg",
];

export default function GallerySlider({ dict }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-28 overflow-hidden">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {dict?.title || "Our Facility in Action"}
        </motion.h2>
        <p className="text-gray-500 text-lg">
        {dict?.subtitle || "Visual experience of our best moments"}
        </p>
      </div>

      {/* Slider */}
      <motion.div
        className="embla"
        ref={emblaRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <div className="embla__container flex gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="embla__slide relative flex-[0_0_80%] sm:flex-[0_0_60%] lg:flex-[0_0_40%]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-200 aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Indicadores */}
      <div className="mt-10 flex justify-center gap-2">
        <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" />
        <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse delay-100" />
        <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse delay-200" />
      </div>
    </section>
  );
}
