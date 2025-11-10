// src/components/organisms/ProgramsHomeSection.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function ProgramsHomeSection({ lang, dict }) {
  const programs = dict.programsHome.categories || [];

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {dict.programsHome.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {dict.programsHome.subtitle}
          </p>
        </motion.div>

        {/* --- CAMBIO EN ESTA LÍNEA --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Antes: md:grid-cols-3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
        {/* --- FIN DEL CAMBIO --- */}
          {programs.map((program) => (
            <motion.div 
              key={program.title}
              variants={itemVariants}
              // Hacemos que la tarjeta crezca para mantener simetría
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{program.title}</h3>
              <p className="text-muted flex-grow mb-4">{program.description}</p>
              <Link
                href={program.link}
                className="inline-flex items-center font-semibold text-accent hover:text-accent-light transition-colors group"
              >
                {/* Asumo que quieres el texto en inglés, si no, lo pasamos al dict */}
                Learn More 
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}