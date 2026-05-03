// src/app/[lang]/about/page.js
import { getDictionary } from '@/lib/dictionaries';
import Image from 'next/image';
import { FaShieldAlt, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';

export default async function AboutPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const t = dict.aboutPage;

  // We will highlight "on and off the court." and "dentro y fuera de la cancha."
  const highlightPhrase = lang === 'es' ? 'dentro y fuera de la cancha.' : 'on and off the court.';
  const p2Parts = t.p2?.split ? t.p2.split(highlightPhrase) : [t.p2];

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      
      {/* Top Section: White/Light Background */}
      <div className="w-full px-6 sm:px-10 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Column */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#001b3a] tracking-tight mb-6 font-sans uppercase">
            {t.title}
          </h1>
          
          <div className="w-16 h-1 bg-red-600 mb-8"></div>
          
          <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            <p>{t.p1}</p>
            <p>
              {p2Parts.length > 1 ? (
                <>
                  {p2Parts[0]}
                  <span className="font-bold">{highlightPhrase}</span>
                  {p2Parts[1]}
                </>
              ) : (
                t.p2
              )}
            </p>
            <p>{t.p3}</p>
          </div>
        </div>

        {/* Logo Column */}
        <div className="flex justify-center items-center p-6 md:p-12">
          <div className="relative w-full max-w-sm md:max-w-md aspect-square">
            <Image
              src="/logo.png"
              alt="Capital City Volleyball Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
      </div>

      {/* Bottom Section: Dark Blue Background */}
      <div className="w-full bg-[#0B1E36] flex-grow shadow-inner">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Icons and Slogan Column */}
          <div className="flex flex-col justify-center w-full">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-white mb-12">
              
              {/* DEVELOP */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center">
                  <FaShieldAlt className="text-red-600 text-5xl" />
                </div>
                <div>
                  <h3 className="text-red-600 font-extrabold uppercase tracking-wider text-sm mb-2">{t.develop}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-tight">{t.developDesc}</p>
                </div>
              </div>

              {/* TEAMWORK */}
              <div className="flex flex-col items-center text-center space-y-4 md:border-l border-white/20">
                <div className="flex items-center justify-center">
                  <FaUsers className="text-red-600 text-5xl" />
                </div>
                <div>
                  <h3 className="text-red-600 font-extrabold uppercase tracking-wider text-sm mb-2">{t.teamwork}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-tight">{t.teamworkDesc}</p>
                </div>
              </div>

              {/* EXCELLENCE */}
              <div className="flex flex-col items-center text-center space-y-4 md:border-l border-white/20">
                <div className="flex items-center justify-center">
                  <FaTrophy className="text-white text-5xl drop-shadow-md" /> 
                </div>
                <div>
                  <h3 className="text-red-600 font-extrabold uppercase tracking-wider text-sm mb-2">{t.excellence}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-tight">{t.excellenceDesc}</p>
                </div>
              </div>

              {/* COMMUNITY */}
              <div className="flex flex-col items-center text-center space-y-4 md:border-l border-white/20">
                <div className="flex items-center justify-center">
                  <FaHeart className="text-red-600 text-5xl" />
                </div>
                <div>
                  <h3 className="text-red-600 font-extrabold uppercase tracking-wider text-sm mb-2">{t.community}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-tight">{t.communityDesc}</p>
                </div>
              </div>
              
            </div>

            {/* Slogan */}
            <div className="text-center xl:text-left border-t border-white/20 pt-8 mt-2">
              <h2 className="text-lg sm:text-2xl font-extrabold text-white uppercase tracking-widest leading-relaxed">
                {t.slogan ? (
                  <>
                    {t.slogan.replace('CAPITAL CITY.', '')}
                    <span className="text-red-600 block sm:inline mt-2 sm:mt-0">CAPITAL CITY.</span>
                  </>
                ) : (
                  <>ONE TEAM. ONE CITY. ONE GOAL. <span className="text-red-600 block sm:inline mt-2 sm:mt-0">CAPITAL CITY.</span></>
                )}
              </h2>
            </div>
            
          </div>

          {/* Team Image Column */}
          <div className="flex justify-center items-center w-full">
             <div className="relative w-full aspect-square sm:aspect-video xl:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src="/tem-1.jpeg" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  alt="Capital City Team Huddle" 
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />
             </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}