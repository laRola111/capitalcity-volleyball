// src/dictionaries/en.js
export const dictionary = {
  navbar: {
    home: 'Home',
    about: 'About Us',
    programs: 'Programs',
    gallery: 'Gallery',
    merch: 'Merch',
    contact: 'Contact',
  },
  hero: {
    title: "Capital City Volleyball",
    subtitle: "Capital City Volleyball develops athletes through elite training, competitive play, and personalized coaching, building disciplined competitors committed to growth and performance excellence.",
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
  featureSection: {
    title: "Experience the Difference",
    subtitle: "Our facility is designed to bring out the best in every athlete.",
    description: "Join a community passionate about volleyball. Whether you are starting your journey or looking to compete at a high level, we provide the environment you need to succeed.",
    imageAlt: "Capital City Volleyball Action",
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
        title: "Womens Tournament",
        subtitle: "",
        description: "Get your team ready for our upcoming women's tournament.",
        imageUrl: "/tornament-woman-capital.jpeg"
      },
      {
        title: "Mens Tournament",
        subtitle: "",
        description: "Compete in our fast-paced men's tournament.",
        imageUrl: "/tornamente-mens-capital.jpeg"
      }
    ]
  },
  homeMission: {
    title: "It's Not Just How You Play,",
    subtitle: "It's How You Grow.",
    p1: "We are dedicated to developing every athlete to become a person of character, skill, and confidence.",
    vision: {
      title: "Our Vision",
      description: "Our vision is to elevate volleyball by developing disciplined athletes, transforming competition, and building a respected performance-driven community nationwide."
    }
  },
  gallerySlider: {
    title: "Our Facility in Action",
    subtitle: "Visual experience of our best moments.",
  },
  aboutPage: {
    title: "ABOUT US",
    p1: "Capital City Volleyball is more than a club—it’s a community built on passion, teamwork, and the relentless pursuit of excellence.",
    p2: "We are dedicated to developing skilled athletes while building confidence, character, and lifelong friendships—on and off the court.",
    p3: "Through hard work, positive culture, and unwavering commitment, we strive to empower every athlete to reach their full potential and make an impact in the game and in life.",
    develop: "DEVELOP",
    developDesc: "Building skills, strength, and confidence",
    teamwork: "TEAMWORK",
    teamworkDesc: "Stronger together on the court and in life",
    excellence: "EXCELLENCE",
    excellenceDesc: "Compete with purpose and integrity",
    community: "COMMUNITY",
    communityDesc: "A supportive family that has your back",
    slogan: "ONE TEAM. ONE CITY. ONE GOAL. CAPITAL CITY.",
  },
  programsPage: {
    title: "Our Programs",
    intro: "We offer a comprehensive range of programs tailored to different age groups and skill levels. Find the perfect fit for you or your child.",
    sections: [
      {
        id: "youth",
        title: "Youth Clinics (Ages 8-12)",
        description: "Our Youth Clinics focus on the fundamentals. We use fun drills and positive coaching to teach passing, setting, hitting, and serving. Perfect for beginners!",
        features: ["Focus on fundamentals", "Low player-to-coach ratio", "Positive environment"]
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
        description: "Private training delivers personalized coaching to refine technique, build consistency, and elevate performance through focused repetition, feedback, and structured development sessions.",
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
  },
  merchPreview: {
    badge: "Official Gear",
    title: "Rep Capital City Volleyball",
    subtitle: "Show your pride with official Capital City gear. Available in White, Black, and Navy.",
    shirt: "Shirts",
    hoodie: "Hoodies",
    hat: "Hats",
    colors: "Colors available: White • Black • Navy",
    cta: "Order Now",
  },
  merchPage: {
    title: "Capital City Volleyball Merch",
    subtitle: "Show your Capital City pride! Order your official gear below. Available in White, Black, and Navy.",
    products: [
      { id: "shirt", name: "Shirts", price: "$25", emoji: "👕" },
      { id: "hoodie", name: "Hoodies", price: "$45", emoji: "🧥" },
      { id: "hat", name: "Hats", price: "$20", emoji: "🧢" },
    ],
    colors: ["White", "Black", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    orderTitle: "Place Your Order",
    orderSubtitle: "Fill out the form below and we will confirm your order via Email or WhatsApp.",
    form: {
      name: "Your Name",
      phone: "WhatsApp / Phone Number",
      email: "Email Address",
      product: "Select Item",
      color: "Select Color",
      size: "Select Size",
      quantity: "Quantity",
      notes: "Special Notes (Optional)",
      submit: "Send Order",
      success: "✅ Order sent! We will contact you shortly to confirm.",
      error: "Something went wrong. Please try WhatsApp directly."
    }
  }
}