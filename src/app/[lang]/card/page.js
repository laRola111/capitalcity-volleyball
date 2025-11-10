// src/app/[lang]/card/page.js
import { getDictionary } from '@/lib/dictionaries';
import CardPageClient from '@/components/organisms/CardPageClient'; // Importamos el nuevo componente

// Esta página ahora es un Componente de Servidor (quitamos 'use client')
export default async function CardPage({ params: { lang } }) {
  
  // 1. Obtenemos el diccionario en el servidor
  const dict = await getDictionary(lang);

  // 2. Pasamos el diccionario y el idioma al Componente de Cliente
  return (
    <CardPageClient lang={lang} dict={dict.cardPage} />
  );
}