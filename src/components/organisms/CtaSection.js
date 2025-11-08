// src/components/organisms/CtaSection.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaSection({ lang, dict }) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {dict.cta.title}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {dict.cta.subtitle}
          </p>
          <div className="mt-8">
            <Link
              href={`/${lang}/contact`} // O podría ir a una página de registro
              className="inline-block bg-accent text-white font-semibold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-accent-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              {dict.cta.button}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}