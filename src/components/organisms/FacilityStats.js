// src/components/organisms/FacilityStats.js
'use client';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FacilityStats({ lang, dict }) {
  const stats = dict.facilityStats || [];

  return (
    // Fondo oscuro que contrasta, como en la ref de golf
    <section className="bg-primary-dark"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={variants}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              variants={itemVariants}
              className="text-center py-8"
            >
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-base font-semibold text-white uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}