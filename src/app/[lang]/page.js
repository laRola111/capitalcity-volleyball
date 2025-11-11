// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import dynamic from 'next/dynamic'; // <-- 1. Importar dynamic

// 2. Mantener HeroSection estático (se ve primero)
import HeroSection from '@/components/organisms/HeroSection';

// 3. Cargar el resto dinámicamente
const FacilityStats = dynamic(() => import('@/components/organisms/FacilityStats'));
const SocialProofSection = dynamic(() => import('@/components/organisms/SocialProofSection'));
const ProgramsHomeSection = dynamic(() => import('@/components/organisms/ProgramsHomeSection'));
const UpcomingLeagues = dynamic(() => import('@/components/organisms/UpcomingLeagues'));
const HomeMission = dynamic(() => import('@/components/organisms/HomeMission'));
const GallerySlider = dynamic(() => import('@/components/organisms/GallerySlider'));
const TestimonialsSection = dynamic(() => import('@/components/organisms/TestimonialsSection'));
const CtaSection = dynamic(() => import('@/components/organisms/CtaSection'));

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <FacilityStats lang={lang} dict={dict} />
      <SocialProofSection lang={lang} dict={dict} />
      <ProgramsHomeSection lang={lang} dict={dict} />
      <UpcomingLeagues lang={lang} dict={dict} /> 
      <HomeMission lang={lang} dict={dict} /> 
      <GallerySlider dict={dict.gallerySlider} />
      <TestimonialsSection lang={lang} dict={dict} />
      <CtaSection lang={lang} dict={dict} />
    </>
  );
} 