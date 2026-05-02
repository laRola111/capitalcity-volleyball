// src/dictionaries/es.js
export const dictionary = {
  navbar: {
    home: 'Inicio',
    about: 'Nosotros',
    programs: 'Programas',
    gallery: 'Galería',
    merch: 'Tienda',
    contact: 'Contacto',
  },
  hero: {
    title: "Capital City Volleyball",
    subtitle: "Capital City Volleyball desarrolla atletas a través del entrenamiento de élite, el juego competitivo y el entrenamiento personalizado, formando competidores disciplinados comprometidos con el crecimiento y la excelencia en el rendimiento.",
    button: "Ver Programas",
    imageAlt: "Jugadora de Capital City Volleyball sirviendo una pelota",
  },
  socialProof: {
    title: "Con la confianza de atletas y padres en todo el centro de Texas",
    // --- CAMBIO: Eliminado 'Pflugerville ISD' ---
    partners: [
      { name: 'Austin Sports Center' },
      { name: 'Texas Volleyball League' },
      { name: 'Youth Sports of America' },
    ]
  },
  featureSection: {
    title: "Experimenta la Diferencia",
    subtitle: "Nuestras instalaciones están diseñadas para sacar lo mejor de cada atleta.",
    description: "Únete a una comunidad apasionada por el voleibol. Ya sea que estés comenzando tu camino o busques competir a un alto nivel, brindamos el entorno que necesitas para triunfar.",
    imageAlt: "Acción en Capital City Volleyball",
},
  programsHome: {
    title: "Programas Para Todas las Edades",
    subtitle: "Desde fundamentos hasta entrenamiento de élite, tenemos un programa para cada atleta.",
    categories: [
      {
        title: "Clínicas Juveniles (8-12 Años)",
        description: "Aprende los fundamentos del voleibol en un ambiente divertido y de apoyo.",
        link: "/es/programs#youth"
      },
      {
        // --- CAMBIO: "Teen Leagues" -> "Teen Clinics" ---
        title: "Clínicas de Adolescentes (13-18 Años)",
        description: "Juego competitivo diseñado para elevar habilidades y trabajo en equipo.",
        link: "/es/programs#teen"
      },
      {
        // --- NUEVO: "Adult Clinics" ---
        title: "Clínicas de Adultos (18+)",
        description: "Mantente activo, conoce gente nueva y pule tus habilidades.",
        link: "/es/programs#adultClinics"
      }
    ]
  },
  testimonials: {
    title: "Lo Que Dice Nuestra Comunidad",
    reviews: [
      {
        quote: "Los entrenadores en Capital City son fantásticos. La confianza de mi hija se ha disparado desde que se unió. ¡Muy recomendable!",
        author: "Sarah J.",
        role: "Madre"
      },
      {
        quote: "Excelentes instalaciones y clínicas bien organizadas. Es lo más destacado de mi semana.",
        author: "Mike R.",
        role: "Jugador de Clínica de Adultos"
      },
      {
        quote: "He aprendido mucho sobre técnica y estrategia. Las sesiones de entrenamiento son duras pero increíblemente gratificantes.",
        author: "Emily K.",
        role: "Atleta Adolescente"
      }
    ]
  },
  cta: {
    title: "¿Listo para Elevar tu Juego?",
    subtitle: "Únete a la familia de Capital City Volleyball hoy. Regístrate en un programa o contáctanos para más información.",
    button: "Regístrate Ahora"
  },
  // --- CAMBIOS DE STATS ---
  facilityStats: [
    { number: "2", label: "Canchas Profesionales" },
    { number: "5+", label: "Entrenadores Certificados" },
    { number: "25+", label: "Atletas Entrenados" }
  ],
  upcomingLeagues: {
    title: "Únete a la Acción",
    // --- CAMBIO: Subtítulo actualizado ---
    subtitle: "Las inscripciones para nuestros próximos torneos estarán disponibles.",
    leagues: [
      {
        title: "Torneo de Mujeres",
        subtitle: "",
        description: "Prepara a tu equipo para nuestro próximo torneo femenino.",
        imageUrl: "/tornament-woman-capital.jpeg"
      },
      {
        title: "Torneo de Hombres",
        subtitle: "",
        description: "Compite en nuestro torneo de hombres de alto ritmo.",
        imageUrl: "/tornamente-mens-capital.jpeg"
      }
    ]
  },
  homeMission: {
    title: "No es Solo Cómo Juegas,",
    subtitle: "Es Cómo Creces.",
    p1: "Estamos dedicados a desarrollar a cada atleta para que se convierta en una persona de carácter, habilidad y confianza.",
    vision: {
      title: "Nuestra Visión",
      description: "Nuestra visión es elevar el voleibol desarrollando atletas disciplinados, transformando la competencia y construyendo una comunidad respetada y enfocada en el rendimiento a nivel nacional."
    }
  },
  gallerySlider: {
    title: "Nuestra Instalación en Acción",
    subtitle: " Experiencia visual de nuestros mejores momentos.",

  },
  aboutPage: {
    title: "Sobre Capital City Volleyball",
    p1: "Capital City Volleyball es una organización enfocada en el rendimiento, dedicada a desarrollar atletas a través del entrenamiento de élite, coaching estructurado y competencia de alto nivel. Nuestro enfoque combina el desarrollo de habilidades, fuerza y acondicionamiento, e inteligencia de juego para crear jugadores completos que puedan competir con confianza y disciplina. Cada sesión y evento está diseñado con intención, enfocado en maximizar el crecimiento, refinar la técnica y empujar a los atletas más allá de sus límites.",
    // --- CAMBIO: Eliminado "áreas dedicadas de entrenamiento de fuerza" ---
    p2: "Estamos comprometidos a brindar una experiencia enfocada en el atleta que priorice la justicia, las oportunidades y el desarrollo a largo plazo. Desde lecciones privadas y entrenamiento grupal hasta torneos competitivos, Capital City Volleyball está redefiniendo el estándar al construir una cultura de responsabilidad, consistencia y excelencia. Nuestra misión es no solo mejorar el rendimiento, sino formar competidores disciplinados preparados para tener éxito tanto dentro como fuera de la cancha.",
  },
  programsPage: {
    title: "Nuestros Programas",
    intro: "Ofrecemos una gama completa de programas adaptados a diferentes grupos de edad y niveles de habilidad. Encuentra la opción perfecta para ti o tu hijo.",
    sections: [
      {
        id: "youth",
        title: "Clínicas Juveniles (8-12 Años)",
        description: "Nuestras Clínicas Juveniles se centran en los fundamentos. Usamos ejercicios divertidos y entrenamiento positivo para enseñar pase, colocación, remate y servicio. ¡Perfecto para principiantes!",
        features: ["Enfoque en fundamentos", "Baja proporción de jugadores por entrenador", "Ambiente positivo"]
      },
      {
        // --- CAMBIOS ---
        id: "teen",
        title: "Academia de Adolescentes (13-18 Años)",
        description: "Para atletas de secundaria y preparatoria que buscan avanzar en sus habilidades. Nuestra Academia ofrece entrenamiento posicional intensivo para mostrar su talento.",
        features: ["Entrenamiento posicional", "Fuerza y acondicionamiento", "Orientación de preparación universitaria"]
      },
      {
         // --- NUEVO ---
        id: "adultClinics",
        title: "Clínicas de Adultos (18+)",
        description: "Clínicas enfocadas para adultos que buscan mejorar habilidades específicas, desde el servicio hasta la colocación.",
        features: ["Sesiones de habilidades específicas", "Coaching profesional", "Ideal para todos los niveles"]
      },
      {
        id: "private",
        title: "Entrenamiento Privado",
        description: "El entrenamiento privado ofrece coaching personalizado para refinar la técnica, construir consistencia y elevar el rendimiento a través de la repetición enfocada, retroalimentación y sesiones de desarrollo estructurado.",
        // --- CAMBIO ---
        features: ["Atención personalizada", "Planes de ejercicios a medida", "Horarios flexibles"]
      }
      // Nota: Eliminé la sección "Adult Leagues" que estaba aquí pero no en la lista del cliente.
    ]
  },
  contactPage: {
    title: "Ponte en Contacto",
    subtitle: "¿Tienes preguntas? ¿Quieres reservar una sesión privada? Envíanos un mensaje y nuestro equipo te responderá en breve.",
    form: {
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono (Opcional)",
      subject: "Asunto",
      message: "Tu Mensaje",
      send: "Enviar Mensaje"
    },
    info: {
      title: "Información de Contacto",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo"
    }
  },
  galleryPage: {
    title: "Galería",
    subtitle: "Un vistazo a la acción en Capital City Volleyball. ¡Más fotos próximamente!"
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    quickLinks: 'Enlaces Rápidos',
    contactInfo: 'Información de Contacto',
    followUs: 'Síguenos',
    created: "Creado por RuedaLaRolaMedia.com"
  },
  cardPage: {
    title: "Centro de Entrenamiento para Niños y Adultos",
    web: "Visitar Sitio Web",
    call: "Llámanos",
    whatsapp: "Enviar WhatsApp",
    email: "Enviar Correo",
    location: "Ubicación (Google Maps)",
    social: "Síguenos"
  },
  merchPreview: {
    badge: "Ropa Oficial",
    title: "Representa a Capital City Volleyball",
    subtitle: "Muestra tu orgullo con ropa oficial de Capital City. Disponible en Blanco, Negro y Azul Marino.",
    shirt: "Camisas",
    hoodie: "Sudaderas",
    hat: "Gorras",
    colors: "Colores disponibles: Blanco • Negro • Azul Marino",
    cta: "Ordenar Ahora",
  },
  merchPage: {
    title: "Tienda Capital City Volleyball",
    subtitle: "¡Muestra tu orgullo Capital City! Ordena tu ropa oficial abajo. Disponible en Blanco, Negro y Azul Marino.",
    products: [
      { id: "shirt", name: "Camisas", price: "$25", emoji: "👕" },
      { id: "hoodie", name: "Sudaderas", price: "$45", emoji: "🧥" },
      { id: "hat", name: "Gorras", price: "$20", emoji: "🧢" },
    ],
    colors: ["Blanco", "Negro", "Azul Marino"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    orderTitle: "Haz Tu Pedido",
    orderSubtitle: "Llena el formulario y te confirmaremos tu pedido por correo o WhatsApp.",
    form: {
      name: "Tu Nombre",
      phone: "WhatsApp / Teléfono",
      email: "Correo Electrónico",
      product: "Seleccionar Artículo",
      color: "Seleccionar Color",
      size: "Seleccionar Talla",
      quantity: "Cantidad",
      notes: "Notas Especiales (Opcional)",
      submit: "Enviar Pedido",
      success: "✅ ¡Pedido enviado! Te contactaremos pronto para confirmar.",
      error: "Algo salió mal. Por favor contáctanos por WhatsApp."
    }
  }
}