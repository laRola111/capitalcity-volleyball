// src/components/organisms/UpcomingLeagues.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function UpcomingLeagues({ lang, dict }) {
  const leagues = dict.upcomingLeagues.leagues || [];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {dict.upcomingLeagues.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.upcomingLeagues.subtitle}
          </p>
        </motion.div>

        {/* Grid de Ligas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leagues.map((league) => (
            <motion.div 
              key={league.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-xl overflow-hidden group"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={league.imageUrl}
                  alt={league.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-accent uppercase">{league.subtitle}</p>
                <h3 className="mt-2 text-2xl font-bold text-primary">{league.title}</h3>
                <p className="mt-3 text-muted">{league.description}</p>
                <Link
                  href={`/${lang}/contact`} // Link genérico por ahora
                  className="inline-flex items-center font-semibold text-accent hover:text-accent-light transition-colors group mt-4"
                >
                  Register Now
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}