// src/app/[lang]/card/layout.js

// Este layout simple se asegura de que la página
// no herede el Header y Footer del layout principal.
export default function CardLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}