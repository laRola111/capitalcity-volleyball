// src/components/organisms/ContactPageClient.js
'use client'; 

import React, { useState, useTransition } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { sendEmail } from '@/app/actions/send-email'; 

// Info del Cliente (Email público)
const contactData = {
  phone: '(512) 803-3936',
  phoneHref: '+15128033936',
  email: 'infor@capitalcity-volleyball.com', 
};

// Este es el componente de cliente que recibe el 'dict' como prop
export default function ContactPageClient({ lang, dict }) {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState({
    success: false,
    error: null,
  });

  // Manejador del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ success: false, error: null });
    const formData = new FormData(event.target);
    
    startTransition(async () => {
      // Esta acción usa el email OCULTO (el de Vercel)
      const result = await sendEmail(formData); 
      if (result.success) {
        setFormState({ success: true, error: null });
        event.target.reset(); 
      } else {
        setFormState({ success: false, error: result.error || 'Failed to send message.' });
      }
    });
  };

  // El dict ya viene cargado desde el servidor
  if (!dict) {
    return <div className="bg-gray-50 py-16 sm:py-24 min-h-[60vh]" />;
  }
  
  const t = dict;

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-muted">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">{t.form.name}</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">{t.form.email}</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
             <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">{t.form.phone}</label>
              <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground">{t.form.subject}</label>
              <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">{t.form.message}</label>
              <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-accent-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:bg-gray-400"
              >
                {isPending ? 'Sending...' : t.form.send}
              </button>
            </div>
            {formState.success && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {formState.error && (
              <p className="text-red-600">Error: {formState.error}</p>
            )}
          </form>

          {/* Información de Contacto (Email público) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">{t.info.title}</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaPhone className="text-accent text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t.info.phone}</h3>
                <a href={`tel:${contactData.phoneHref}`} className="text-muted hover:text-accent transition-colors">
                  {contactData.phone}
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaEnvelope className="text-accent text-xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t.info.email}</h3>
                <a href={`mailto:${contactData.email}`} className="text-muted hover:text-accent transition-colors">
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}