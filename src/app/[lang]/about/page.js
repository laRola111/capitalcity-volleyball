// src/app/[lang]/about/page.js
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';

export default async function AboutPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const t = dict.aboutPage;

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-muted mb-4">
              {t.p1}
            </p>
            <p className="text-lg text-muted mb-8">
              {t.p2}
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-3">{t.missionTitle}</h2>
            <p className="text-lg text-muted">{t.missionP}</p>
          </div>

          {/* Columna de Imagen */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https.images.unsplash.com/photo-1542666070-21b8f0a82f23?q=80&w=1974&auto=format&fit=crop"
              alt="Jugadores de voleibol en la cancha"
              fill
              style={{ objectFit: 'cover' }}
              className="bg-gray-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}