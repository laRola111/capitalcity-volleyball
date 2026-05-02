// src/app/[lang]/programs/page.js
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

// Only the private training section gets an image (coaching photo)
const sectionImages = {
  private: "/tornament-woman-capital.jpeg", // coaching photo placeholder
};

export default async function ProgramsPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const t = dict.programsPage;

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-muted">
            {t.intro}
          </p>
        </div>

        {/* Lista de Programas */}
        <div className="space-y-16">
          {t.sections.map((section, index) => {
            const imgSrc = sectionImages[section.id];
            return (
              <div 
                key={section.id} 
                id={section.id}
                className={`scroll-mt-24 ${imgSrc ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center' : 'max-w-3xl'}`}
              >
                {/* Imagen solo para Private Training */}
                {imgSrc && (
                  <div className={`relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image
                      src={imgSrc}
                      alt={`${section.title} volleyball program`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="bg-gray-100"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Texto */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
                  <p className="text-muted mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted">
                        <FaCheckCircle className="text-accent mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}