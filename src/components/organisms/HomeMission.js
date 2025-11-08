// src/components/organisms/HomeMission.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEye, FaBullseye } from 'react-icons/fa'; // Iconos para Misión/Visión

export default function HomeMission({ lang, dict }) {
  const t = dict.homeMission;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Imagen */}
          <motion.div 
            className="relative h-96 lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1543398398-9995186f81e6?q=80&w=1974&auto=format&fit=crop"
              alt="Team huddle"
              fill
              style={{ objectFit: 'cover' }}
              className="bg-gray-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {t.title}<br />
              <span className="text-accent">{t.subtitle}</span>
            </h2>
            <p className="mt-6 text-lg text-muted">
              {t.p1}
            </p>
            
            <div className="mt-8 space-y-6">
              {/* Vision */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <FaEye className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary">{t.vision.title}</h3>
                  <p className="mt-2 text-muted">{t.vision.description}</p>
                </div>
              </div>
              
              {/* Mission */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <FaBullseye className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-primary">{t.mission.title}</h3>
                  <p className="mt-2 text-muted">{t.mission.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}