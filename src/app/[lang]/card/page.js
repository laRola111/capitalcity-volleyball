// src/app/[lang]/card/page.js
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import { FaGlobe, FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../public/logo3.png';
import { motion } from 'framer-motion';

// Información de Contacto del Cliente
const contactData = {
  phone: '512-803-3936',
  phoneHref: '+15128033936',
  // --- CAMBIO DE EMAIL ---
  email: 'capitalcityvolleyball25@yahoo.com',
  // --- DIRECCIÓN ELIMINADA ---
  // address: '13603 Letti Ln, Pflugerville, TX 78660',
  // googleMapsLink: 'http://googleusercontent.com/maps/google.com/0',
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
  }
};

// Componente de botón reutilizable (Estilo actualizado)
const ActionButton = ({ href, icon: Icon, text, target }) => (
  <a
    href={href}
    target={target || '_self'}
    rel={target === '_blank' ? 'noopener noreferrer' : ''}
    className="flex items-center justify-center w-full px-6 py-4 bg-white text-foreground font-semibold rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
  >
    <Icon className="w-5 h-5 mr-3 text-primary" />
    {text}
  </a>
);

export default function CardPage({ params: { lang } }) {
  
  const [dict, setDict] = React.useState(null);

  React.useEffect(() => {
    async function loadDict() {
      const d = await getDictionary(lang);
      setDict(d.cardPage);
    }
    loadDict();
  }, [lang]);

  if (!dict) {
    // Fondo claro mientras carga
    return (
      <div className="min-h-screen bg-gray-50" />
    );
  }

  return (
    <motion.div 
      className="flex flex-col items-center min-h-screen bg-gray-50 text-foreground p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md mx-auto">
        {/* Logo y Título */}
        <div className="text-center mb-8">
          <Image
            src={logo}
            alt="Capital City Volleyball Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
          <h1 className="text-3xl font-bold text-primary mt-4">
            Capital City Volleyball
          </h1>
          <p className="text-lg text-muted">
            {dict.title}
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="space-y-4 mb-8">
          <ActionButton
            href={`/${lang}`}
            icon={FaGlobe}
            text={dict.web}
          />
          <ActionButton
            href={`tel:${contactData.phoneHref}`}
            icon={FaPhone}
            text={dict.call}
          />
          <ActionButton
            href={`https://wa.me/${contactData.phoneHref}`}
            icon={FaWhatsapp}
            text={dict.whatsapp}
            target="_blank"
          />
          <ActionButton
            href={`mailto:${contactData.email}`}
            icon={FaEnvelope}
            text={dict.email}
          />
          {/* --- BOTÓN DE DIRECCIÓN ELIMINADO --- */}
        </div>

        {/* Redes Sociales */}
        <div className="text-center">
          <p className="text-lg text-muted mb-4">{dict.social}</p>
          <div className="flex justify-center space-x-6">
            <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-all transform hover:scale-110">
              <FaFacebook size={32} />
            </a>
            <a href={contactData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-all transform hover:scale-110">
              <FaInstagram size={32} />
            </a>
            <a href={contactData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-all transform hover:scale-110">
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}