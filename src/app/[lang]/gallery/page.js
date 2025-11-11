// src/app/[lang]/gallery/page.js
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';

// Placeholder images
const images = [
  "/IMG-20251111-WA0004.jpg",
  "/IMG-20251110-WA0001.jpg",
  "/IMG-20251111-WA0005.jpg",
  "/imgProgram-1.png",
  "/IMG-20251111-WA0006.jpg",
  "/IMG-20251110-WA0002.jpg",
  "/IMG-20251111-WA0007.jpg",
  "/imgProgram-2.png",
  "/IMG-20251111-WA0008.jpg",
  "/IMG-20251110-WA0003.jpg",
  "/IMG-20251111-WA0009.jpg",
  "/imgProgram-3.png",
  "/IMG-20251111-WA0010.jpg",
  "/IMG-20251110-WA0004.jpg",
  "/imgProgram-4.png",
  "/IMG-20251111-WA0011.jpg",
  "/IMG-20251110-WA0005.jpg",
  "/imgUpcoming-1.png",
  "/IMG-20251111-WA0012.jpg",
  "/IMG-20251110-WA0006.jpg",
  "/imgUpcoming-2.png",
  "/IMG-20251111-WA0013.jpg",
  "/IMG-20251110-WA0007.jpg",
  "/IMG-20251110-WA0008.jpg",
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
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}