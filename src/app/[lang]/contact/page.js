// src/app/[lang]/contact/page.js
import { getDictionary } from '@/lib/dictionaries';
import ContactPageClient from '@/components/organisms/ContactPageClient'; // Importamos el nuevo componente

// Esta página ahora es un Componente de Servidor
// (no 'use client')
export default async function ContactPage({ params: { lang } }) {
  
  // 1. Obtenemos el diccionario en el servidor
  const dict = await getDictionary(lang);

  // 2. Pasamos el diccionario y el idioma al Componente de Cliente
  return (
    <ContactPageClient lang={lang} dict={dict.contactPage} />
  );
}