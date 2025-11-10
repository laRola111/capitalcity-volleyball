// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    about: 'About Us',
    programs: 'Programs',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  hero: {
    title: "Capital City Volleyball",
    subtitle: "Training Volleyball facility for kids and adults in Pflugerville, TX. Building confidence and skill on and off the court.",
    button: "View Our Programs",
    imageAlt: "Capital City Volleyball player serving a ball",
  },
  socialProof: {
    title: "Trusted by athletes and parents across Central Texas",
    // --- CAMBIO: Eliminado 'Pflugerville ISD' ---
    partners: [
      { name: 'Austin Sports Center' },
      { name: 'Texas Volleyball League' },
      { name: 'Youth Sports of America' },
    ]
  },
  programsHome: {
    title: "Programs For All Ages",
    subtitle: "From fundamentals to elite training, we have a program for every athlete.",
    categories: [
      {
        title: "Youth Clinics (Ages 8-12)",
        description: "Learn the fundamentals of volleyball in a fun and supportive environment.",
        link: "/en/programs#youth"
      },
      {
        // --- CAMBIO: "Teen Leagues" -> "Teen Clinics" ---
        title: "Teen Clinics (Ages 13-18)",
        description: "Competitive training designed to elevate skills and teamwork for teens.",
        link: "/en/programs#teen"
      },
      {
        // --- NUEVO: "Adult Clinics" ---
        title: "Adult Clinics (18+)",
        description: "Stay active, meet new people, and sharpen your skills.",
        link: "/en/programs#adultClinics" // (ID nuevo)
      }
    ]
  },
  testimonials: {
    title: "What Our Community Says",
    reviews: [
      {
        quote: "The coaches at Capital City are fantastic. My daughter's confidence has skyrocketed since she joined. Highly recommend!",
        author: "Sarah J.",
        role: "Parent"
      },
      {
        quote: "Great facility and well-organized clinics. It's the highlight of my week.",
        author: "Mike R.",
        role: "Adult Clinic Player"
      },
      {
        quote: "I've learned so much about technique and strategy. The training sessions are tough but incredibly rewarding.",
        author: "Emily K.",
        role: "Teen Athlete"
      }
    ]
  },
  cta: {
    title: "Ready to Elevate Your Game?",
    subtitle: "Join the Capital City Volleyball family today. Register for a program or contact us for more information.",
    button: "Register Now"
  },
  // --- CAMBIOS DE STATS ---
  facilityStats: [
    { number: "2", label: "Full-Size Courts" },
    { number: "5+", label: "Certified Coaches" },
    { number: "25+", label: "Athletes Trained" },
  ],
  upcomingLeagues: {
    title: "Join The Action",
    // --- CAMBIO: Subtítulo actualizado ---
    subtitle: "Registration for our upcoming Tournaments will be available.",
    leagues: [
      {
        // --- CAMBIO ---
        title: "Womens Tournament",
        subtitle: "", // Eliminado "Registrations Open"
        description: "Get your team ready for our upcoming women's tournament.",
        imageUrl: "/imgUpcoming-1.png"
      },
      {
        // --- CAMBIO ---
        title: "Mens Tournament",
        subtitle: "", // Eliminado "Registrations Open"
        description: "Compete in our fast-paced men's tournament.",
        imageUrl: "/imgUpcoming-2.png"
      }
    ]
  },
  homeMission: {
    title: "It's Not Just How You Play,",
    subtitle: "It's How You Grow.",
    p1: "We are dedicated to developing every athlete to become a person of character, skill, and confidence.",
    vision: {
      title: "Our Vision",
      description: "To be the premier destination for volleyball development in Central Texas, fostering a love for the game."
    },
    mission: {
      title: "Our Mission",
      description: "Empower athletes with elite coaching in a positive environment, building leaders on and off the court."
    }
  },
  gallerySlider: {
    title: "Our Facility in Action"
  },
  aboutPage: {
    title: "About Capital City Volleyball",
    p1: "Founded in 2023, Capital City Volleyball was born from a passion for the sport and a desire to build a premier training facility for the Pflugerville and North Austin community. We believe volleyball is more than just a game—it's a tool for building character, discipline, and lifelong friendships.",
    // --- CAMBIO: Eliminado "Dedicated strength training areas" ---
    p2: "Our state-of-the-art facility features multiple courts and a team of professional coaches with collegiate and pro-level experience. We are committed to providing a safe, positive, and competitive environment for athletes of all ages and skill levels.",
    missionTitle: "Our Mission",
    missionP: "To empower athletes to achieve their full potential on and off the court through high-quality coaching, positive reinforcement, and a strong community.",
  },
  programsPage: {
    title: "Our Programs",
    intro: "We offer a comprehensive range of programs tailored to different age groups and skill levels. Find the perfect fit for you or your child.",
    sections: [
      {
        id: "youth",
        title: "Youth Clinics (Ages 8-12)",
        description: "Our Youth Clinics focus on the fundamentals. We use fun drills and positive coaching to teach passing, setting, hitting, and serving. Perfect for beginners!",
        features: ["Weekly 1-hour sessions", "Focus on fundamentals", "Low player-to-coach ratio", "Positive environment"]
      },
      {
        // --- CAMBIOS ---
        id: "teen",
        title: "Teen Academy (Ages 13-18)",
        description: "For middle and high school athletes looking to advance their skills. Our Academy offers intensive positional training to showcase their talent.",
        features: ["Positional training", "Strength & conditioning", "College prep guidance"]
      },
      {
        // --- NUEVO ---
        id: "adultClinics",
        title: "Adult Clinics (18+)",
        description: "Focused clinics for adults looking to improve specific skills, from serving to setting.",
        features: ["Skill-specific sessions", "Professional coaching", "Great for all levels"]
      },
      {
        id: "private",
        title: "Private Training",
        description: "One-on-one or small group sessions with our top coaches. Get personalized feedback and targeted drills to perfect your game.",
        // --- CAMBIO ---
        features: ["Personalized attention", "Custom drill plans", "Flexible scheduling"]
      }
      // Nota: Eliminé la sección "Adult Leagues" que estaba aquí pero no en la lista del cliente.
    ]
  },
  contactPage: {
    title: "Get In Touch",
    subtitle: "Have questions? Want to book a private session? Send us a message and our team will get back to you shortly.",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number (Optional)",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message"
    },
    info: {
      title: "Contact Information",
      address: "Address",
      phone: "Phone",
      email: "Email"
    }
  },
  galleryPage: {
    title: "Gallery",
    subtitle: "A glimpse into the action at Capital City Volleyball. More photos coming soon!"
  },
  footer: {
    rights: 'All rights reserved.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    created: "Created by RuedaLaRolaMedia.com"
  },
  cardPage: {
    title: "Training Facility for Kids & Adults",
    web: "Visit Website",
    call: "Call Us",
    whatsapp: "Send WhatsApp",
    email: "Send Email",
    location: "Find Us (Google Maps)",
    social: "Follow Us"
  }
}