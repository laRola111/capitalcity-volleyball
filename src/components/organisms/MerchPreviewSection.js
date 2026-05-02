// src/components/organisms/MerchPreviewSection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90 } },
};

export default function MerchPreviewSection({ lang, dict }) {
  const t = dict.merchPreview;

  const products = [
    { name: t.shirt,   price: '$25', emoji: '👕' },
    { name: t.hoodie,  price: '$45', emoji: '🧥' },
    { name: t.hat,     price: '$20', emoji: '🧢' },
  ];

  return (
    <section className="bg-primary py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaShoppingBag size={14} />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Content: Image + Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/40"
              style={{ aspectRatio: '2/3' }}
            >
              <Image
                src="/capitalcityp-edidos.jpeg"
                alt="Capital City Volleyball Merch"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                sizes="(max-width: 768px) 90vw, 380px"
              />
            </div>
          </motion.div>

          {/* Product cards + CTA */}
          <div>
            <motion.div
              className="grid grid-cols-3 gap-4 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {products.map((p) => (
                <motion.div
                  key={p.name}
                  variants={itemVariants}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-5 text-center transition-colors duration-300"
                >
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <p className="text-white font-semibold text-sm mb-1">{p.name}</p>
                  <p className="text-accent text-2xl font-extrabold">{p.price}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-gray-300 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t.colors}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={`/${lang}/merch`}
                className="inline-flex items-center gap-3 bg-accent text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-accent-light transition-colors duration-300 group"
              >
                {t.cta}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
