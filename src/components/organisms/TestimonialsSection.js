// src/components/organisms/TestimonialsSection.js
'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', duration: 0.8 }
  }
};

export default function TestimonialsSection({ lang, dict }) {
  const reviews = dict.testimonials.reviews || [];

  return (
    <section className="bg-background text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {dict.testimonials.title}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-primary-light rounded-lg p-6 flex flex-col items-center text-center shadow-lg"
            >
              <blockquote className="text-lg text-white flex-grow">
                "{review.quote}"
              </blockquote>
              <footer className="mt-6">
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-gray-200">{review.role}</p>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}