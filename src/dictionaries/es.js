// src/dictionaries/es.js
export const dictionary = {
  navbar: {
    home: 'Inicio',
    about: 'Nosotros',
    programs: 'Programas',
    gallery: 'Galería',
    contact: 'Contacto',
  },
  hero: {
    title: "Capital City Volleyball",
    subtitle: "Centro de entrenamiento de voleibol para niños y adultos en Pflugerville, TX. Construyendo confianza y habilidad dentro y fuera de la cancha.",
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
        // --- CAMBIO ---
        title: "Torneo de Mujeres",
        subtitle: "", // Eliminado "Inscripciones Abiertas"
        description: "Prepara a tu equipo para nuestro próximo torneo femenino.",
        imageUrl: "/imgUpcoming-1.png"
      },
      {
        // --- CAMBIO ---
        title: "Torneo de Hombres",
        subtitle: "", // Eliminado "Inscripciones Abiertas"
        description: "Compite en nuestro torneo de hombres de alto ritmo.",
        imageUrl: "/imgUpcoming-2.png"
      }
    ]
  },
  homeMission: {
    title: "No es Solo Cómo Juegas,",
    subtitle: "Es Cómo Creces.",
    p1: "Estamos dedicados a desarrollar a cada atleta para que se convierta en una persona de carácter, habilidad y confianza.",
    vision: {
      title: "Nuestra Visión",
      description: "Ser el destino principal para el desarrollo del voleibol en el centro de Texas, fomentando el amor por el juego."
    },
    mission: {
      title: "Nuestra Misión",
      description: "Empoderar a los atletas con entrenamiento de élite en un ambiente positivo, formando líderes dentro y fuera de la cancha."
    }
  },
  gallerySlider: {
    title: "Nuestra Instalación en Acción"
  },
  aboutPage: {
    title: "Sobre Capital City Volleyball",
    p1: "Fundado en 2023, Capital City Volleyball nació de la pasión por el deporte y el deseo de construir una instalación de entrenamiento de primer nivel para la comunidad de Pflugerville y el norte de Austin. Creemos que el voleibol es más que un juego: es una herramienta para desarrollar el carácter, la disciplina y amistades para toda la vida.",
    // --- CAMBIO: Eliminado "áreas dedicadas de entrenamiento de fuerza" ---
    p2: "Nuestras instalaciones de última generación cuentan con múltiples canchas y un equipo de entrenadores profesionales con experiencia a nivel colegial y profesional. Estamos comprometidos a proporcionar un ambiente seguro, positivo y competitivo para atletas de todas las edades y niveles de habilidad.",
    missionTitle: "Nuestra Misión",
    missionP: "Empoderar a los atletas para que alcancen su máximo potencial dentro y fuera de la cancha a través de un entrenamiento de alta calidad, refuerzo positivo y una comunidad fuerte.",
  },
  programsPage: {
    title: "Nuestros Programas",
    intro: "Ofrecemos una gama completa de programas adaptados a diferentes grupos de edad y niveles de habilidad. Encuentra la opción perfecta para ti o tu hijo.",
    sections: [
      {
        id: "youth",
        title: "Clínicas Juveniles (8-12 Años)",
        description: "Nuestras Clínicas Juveniles se centran en los fundamentos. Usamos ejercicios divertidos y entrenamiento positivo para enseñar pase, colocación, remate y servicio. ¡Perfecto para principiantes!",
        features: ["Sesiones semanales de 1 hora", "Enfoque en fundamentos", "Baja proporción de jugadores por entrenador", "Ambiente positivo"]
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
        description: "Sesiones individuales o en grupos pequeños con nuestros mejores entrenadores. Recibe retroalimentación personalizada y ejercicios específicos para perfeccionar tu juego.",
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
  }
}