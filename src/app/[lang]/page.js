// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
// --- Nuevos Componentes ---
import SocialProofSection from '@/components/organisms/SocialProofSection';
import ProgramsHomeSection from '@/components/organisms/ProgramsHomeSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection';
import CtaSection from '@/components/organisms/CtaSection';

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <SocialProofSection lang={lang} dict={dict} />
      <ProgramsHomeSection lang={lang} dict={dict} />
      <TestimonialsSection lang={lang} dict={dict} />
      <CtaSection lang={lang} dict={dict} />
    </>
  );
}