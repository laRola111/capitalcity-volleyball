// src/app/[lang]/gallery/page.js
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';

// Placeholder images
const images = [
  "/imgProgram-1.png",
  "/imgProgram-2.png",
  "/imgProgram-3.png",
  "/imgProgram-4.png",
  "/imgUpcoming-1.png",
  "/imgUpcoming-2.png"
];

export default async function GalleryPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const t = dict.galleryPage;

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-muted">
            {t.subtitle}
          </p>
        </div>

        {/* Grilla de Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="bg-gray-100 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}