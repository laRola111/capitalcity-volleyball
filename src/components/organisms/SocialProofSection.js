// src/components/organisms/SocialProofSection.js
'use client';
import { motion } from 'framer-motion';
import { FaSchool, FaAward, FaUsers } from 'react-icons/fa'; // Iconos de ejemplo

// Un array simple de iconos y texto para reemplazar los logos
const partners = [
  // { name: 'Pflugerville ISD Partner', icon: FaSchool },
  { name: 'Top Rated Facility', icon: FaAward },
  { name: 'Community Voted', icon: FaUsers },
  { name: 'Austin Sports Affiliate', icon: FaSchool },
];

const variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SocialProofSection({ lang, dict }) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-muted leading-8">
          {dict.socialProof.title}
        </h2>
        <motion.div 
          className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
        >
          {partners.map((partner) => (
            <motion.div 
              key={partner.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-2"
            >
              <partner.icon className="text-4xl text-muted" />
              <span className="text-sm font-medium text-muted">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}