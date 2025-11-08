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
    // Dejamos esto listo para cuando el cliente nos dé logos
    partners: [
      { name: 'Pflugerville ISD' },
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
        title: "Teen Leagues (Ages 13-18)",
        description: "Competitive play designed to elevate skills and teamwork.",
        link: "/en/programs#teen"
      },
      {
        title: "Adult Leagues (18+)",
        description: "Stay active, meet new people, and compete in our friendly adult leagues.",
        link: "/en/programs#adult"
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
        quote: "Great facility and well-organized leagues. It's the highlight of my week.",
        author: "Mike R.",
        role: "Adult League Player"
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
  // ... (después de cta)
  facilityStats: [
    { number: "4", label: "Full-Size Courts" },
    { number: "10+", label: "Certified Coaches" },
    { number: "1K+", label: "Athletes Trained" },
    { number: "1", label: "Strength & Conditioning Area" }
  ],
  upcomingLeagues: {
    title: "Join The Action",
    subtitle: "Registrations for our upcoming leagues and tournaments are now open.",
    leagues: [
      {
        title: "Spring Youth League",
        subtitle: "Ages 8-16",
        description: "Registrations now open for our competitive spring season.",
        imageUrl: "/imgUpcoming-1.png"
      },
      {
        title: "Adult Co-Ed Tournament",
        subtitle: "November 30th",
        description: "Get your team ready for our one-day competitive tournament.",
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
  aboutPage: {
    title: "About Capital City Volleyball",
    p1: "Founded in 2023, Capital City Volleyball was born from a passion for the sport and a desire to build a premier training facility for the Pflugerville and North Austin community. We believe volleyball is more than just a game—it's a tool for building character, discipline, and lifelong friendships.",
    p2: "Our state-of-the-art facility features multiple courts, dedicated strength training areas, and a team of professional coaches with collegiate and pro-level experience. We are committed to providing a safe, positive, and competitive environment for athletes of all ages and skill levels.",
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
        id: "teen",
        title: "Teen Academy & Leagues (Ages 13-18)",
        description: "For middle and high school athletes looking to advance their skills. Our Academy offers intensive positional training, while our leagues provide a competitive environment to showcase their talent.",
        features: ["Positional training", "Strength & conditioning", "Competitive leagues", "College prep guidance"]
      },
      {
        id: "adult",
        title: "Adult Leagues (18+)",
        description: "Whether you're a former player or just looking for a fun way to stay active, our adult leagues are for you. We offer multiple divisions (recreational, intermediate, competitive).",
        features: ["Co-ed and single-gender leagues", "Flexible evening schedules", "Officiated games", "End-of-season tournament"]
      },
      {
        id: "private",
        title: "Private Training",
        description: "One-on-one or small group sessions with our top coaches. Get personalized feedback and targeted drills to perfect your game.",
        features: ["Personalized attention", "Custom drill plans", "Video analysis available", "Flexible scheduling"]
      }
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
}