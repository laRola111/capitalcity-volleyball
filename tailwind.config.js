// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva Paleta Capital City Volleyball
        background: '#FFFFFF', // Fondo claro
        foreground: '#1E293B', // Azul oscuro (para texto principal)
        muted: '#6B7280',      // Gris (para texto secundario)

        primary: {
          DEFAULT: '#0D1B3F', // Azul oscuro del logo
          light: '#1E293B',   
          dark: '#0A142C',    
        },
        secondary: {
          DEFAULT: '#6B7280', // Gris
          light: '#9CA3AF',   
          dark: '#4B5563',    
        },
        accent: {
          DEFAULT: '#DC2626', // Rojo del logo
          light: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
         // Limpiamos el patrón anterior
         'vazquez-pattern': 'none', 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};