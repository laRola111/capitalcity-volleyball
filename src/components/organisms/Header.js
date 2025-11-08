// src/components/organisms/Header.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import logo from '../../../public/logo2.png'; 

export default function Header({ lang, dict }) {
  const pathname = usePathname();

  // --- Estados ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);

  // --- Effects ---
  // Visibilidad al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;
      setIsVisible(currentYPos < 50 || currentYPos < lastYPos);
      setLastYPos(currentYPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  // Cerrar menú móvil al cambiar ruta
  useEffect(() => { setIsMenuOpen(false); }, [pathname]);

  // Bloquear scroll del body con menú móvil abierto
  useEffect(() => { document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; }, [isMenuOpen]);

  // --- Links de Navegación (con verificación de dict) ---
  const navLinks = dict ? [
    { name: dict.navbar?.home || 'Home', href: `/${lang}/` },
    { name: dict.navbar?.about || 'About Us', href: `/${lang}/about` },
    { name: dict.navbar?.programs || 'Programs', href: `/${lang}/programs` },
    { name: dict.navbar?.gallery || 'Gallery', href: `/${lang}/gallery` },
    { name: dict.navbar?.contact || 'Contact', href: `/${lang}/contact` },
  ] : [];

  // --- Manejadores ---
  const handleLinkClick = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0">
            <Image src={logo} alt="Capital City Volleyball Logo" height={50} className="w-auto" priority />
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={handleLinkClick} className="text-base font-semibold text-foreground hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botones Derecha */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block"> <LanguageSwitcher /> </div>
            <button className="md:hidden text-foreground hover:text-accent z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Panel Menú Móvil */}
      <div
        className={`fixed inset-0 bg-background z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
          {/* Enlaces Móviles */}
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={handleLinkClick} className="text-2xl font-semibold text-foreground hover:text-accent transition-colors">
              {link.name}
            </Link>
          ))}
          <div className="mt-10"> <LanguageSwitcher /> </div>
        </div>
      </div>
    </>
  );
}