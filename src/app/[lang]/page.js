  // src/app/[lang]/page.js
  import { getDictionary } from '@/lib/dictionaries';
  import HeroSection from '@/components/organisms/HeroSection';
  import SocialProofSection from '@/components/organisms/SocialProofSection';
  import ProgramsHomeSection from '@/components/organisms/ProgramsHomeSection';
  import TestimonialsSection from '@/components/organisms/TestimonialsSection';
  import FacilityStats from '@/components/organisms/FacilityStats';
  import UpcomingLeagues from '@/components/organisms/UpcomingLeagues';
  import HomeMission from '@/components/organisms/HomeMission';
  import CtaSection from '@/components/organisms/CtaSection';
  import GallerySlider from '@/components/organisms/GallerySlider';
  import FeatureSection from '@/components/organisms/FeatureSection';
  import MerchPreviewSection from '@/components/organisms/MerchPreviewSection';

  export default async function HomePage({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return (
      <>
        <HeroSection lang={lang} dict={dict.hero} />
        <FeatureSection dict={dict.featureSection} />
        <FacilityStats lang={lang} dict={dict} />
        <SocialProofSection lang={lang} dict={dict} />
        <ProgramsHomeSection lang={lang} dict={dict} />
        <UpcomingLeagues lang={lang} dict={dict} />
        <MerchPreviewSection lang={lang} dict={dict} />
        <HomeMission lang={lang} dict={dict} />
        <GallerySlider dict={dict.gallerySlider} />
        <TestimonialsSection lang={lang} dict={dict} />
        <CtaSection lang={lang} dict={dict} />
      </>
    );
  }