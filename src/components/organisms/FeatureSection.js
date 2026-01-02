'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeatureSection({ dict }) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
              {dict.title}
            </h2>
            <p className="text-lg text-muted mb-6">
              {dict.subtitle}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {dict.description}
            </p>
          </motion.div>

          {/* Columna de Imagen (Derecha) */}
          <motion.div
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/home-feature..jpeg" // La imagen que renombramos
              alt={dict.imageAlt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}