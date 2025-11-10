// eslint.config.mjs
import nextPlugin from 'eslint-config-next';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  // nextPlugin ya incluye automáticamente las reglas
  // de core-web-vitals y los 'ignores' para .next/
  nextPlugin,

  // Tus reglas personalizadas (si tienes) irían aquí
];

export default config;