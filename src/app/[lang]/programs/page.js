// src/app/[lang]/programs/page.js
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const placeholderImages = [
  "/imgProgram-1.png",
  "/imgProgram-2.png",
  "/imgProgram-3.png",
  "/foto2.jpeg"
];

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Foto 1 */}
<div className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">                <Image 
                    src="/foto1.jpeg" 
                    alt="Volleyball Service 1" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            {/* Foto 2 */}
{/* <div className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">                <Image 
                    src="/foto2.jpeg" 
                    alt="Volleyball Service 1" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div> */}
            {/* Foto 3 */}
<div className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl">                <Image 
                    src="/foto3.jpeg" 
                    alt="Volleyball Service 1" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
        </div>

        {/* Lista de Programas */}
        <div className="space-y-16">
          {t.sections.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-mt-24"
            >
              {/* Imagen (alternando lados) */}
              <div className={`relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <Image
                  src={placeholderImages[index % placeholderImages.length]}
                  alt={`${section.title} volleyball program`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="bg-gray-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

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
          ))}
        </div>
      </div>
    </div>
  );
}