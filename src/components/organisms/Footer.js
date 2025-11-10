// src/components/organisms/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../public/logo3.png';

// Info del Cliente
const contactData = {
  phone: '(512) 803-3936',
  // --- CAMBIO DE EMAIL ---
  email: 'infor@capitalcity-volleyball.com',
  emailTwo: 'capitalcityvolleyball25@yahoo.com',

  // --- DIRECCIÓN ELIMINADA ---
  // address: '13603 Letti Ln, Pflugerville, TX 78660',
  // googleMapsLink: 'http://googleusercontent.com/maps/google.com/1'
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-300 hover:text-white transition-colors"
  >
    <Icon size={24} />
  </a>
);

export default function Footer({ lang, dict }) {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: dict.navbar.home, href: `/${lang}/` },
    { name: dict.navbar.about, href: `/${lang}/about` },
    { name: dict.navbar.programs, href: `/${lang}/programs` },
    { name: dict.navbar.gallery, href: `/${lang}/gallery` },
    { name: dict.navbar.contact, href: `/${lang}/contact` },
  ];

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Columna 1: Logo */}
          <div className="space-y-4 md:col-span-1 lg:col-span-1">
            <Link href={`/${lang}`} className="inline-block">
               <Image
                src={logo}
                alt="Capital City Volleyball Logo" 
                height={100}
                className="w-auto"
              />
            </Link>
          </div>

          {/* Columna 2: Quick Links */}
          <div className="md:justify-self-start">
            <h3 className="text-base font-semibold text-white mb-4">{dict.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contact Info */}
          <div className="md:justify-self-start">
             <h3 className="text-base font-semibold text-white mb-4">{dict.footer.contactInfo}</h3>
             <address className="space-y-2 text-sm not-italic text-gray-300">
               <p>
                 <a href={`tel:${contactData.phone}`} className=" text-white hover:text-white transition-colors">
                   {contactData.phone}
                 </a>
               </p>
               <p className="break-all">
                 <a href={`mailto:${contactData.email}`} className=" text-white hover:text-white transition-colors">
                   {contactData.email}
                 </a>
               </p>
                <p className="break-all">
                 <a href={`mailto:${contactData.emailTwo}`} className=" text-white hover:text-white transition-colors">
                   {contactData.emailTwo}
                 </a>
               </p>
              </address>
          </div>

           {/* Columna 4: Follow Us */}
           <div className="md:col-span-3 lg:col-span-1 lg:justify-self-end">
             <h3 className="text-base font-semibold text-white mb-4">{dict.footer.followUs}</h3>
             <div className="flex space-x-4">
               <SocialLink href="#" icon={FaFacebookF} label="Facebook" />
               <SocialLink href="#" icon={FaInstagram} label="Instagram" />
               <SocialLink href="#" icon={FaTwitter} label="Twitter" />
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-light text-center text-xs">
          <p className="text-gray-400">
            © {currentYear} Capital City Volleyball. {dict.footer.rights}
          </p>
           <p className="text-gray-400">
          {dict.footer.created}
          </p>
        </div>
      </div>
    </footer>
  );
}