export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  features: string[];
  audience: string;
  actionText: string;
  actionHref: string;
}

export interface WorkshopFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductionItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  starring: string[];
  image: string;
  synopsis: string;
  director: string;
  reviewQuote: string;
  reviewer: string;
}

export interface DestinationItem {
  id: string;
  country: string;
  cities: string;
  flag: string;
  image: string;
  tagline: string;
  duration: string;
  keyHighlights: string[];
  story: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'workshops' | 'tourism' | 'productions';
  image: string;
  caption: string;
  location: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  country: string;
  location: string;
  year: string;
}

export interface UpcomingWorkshop {
  id: string;
  title: string;
  city: string;
  country: string;
  venue: string;
  dates: string;
  season: 'Spring 2027' | 'Summer 2027' | 'Autumn 2027' | 'Winter 2027';
  faculty: string[];
  level: 'Vocational (Ages 11-14)' | 'Pre-Professional (Ages 15-22)' | 'Teachers & Masters' | 'All Advanced Levels';
  capacity: number;
  spotsLeft: number;
  tuition: string;
  status: 'Open' | 'Filling Fast' | 'Waitlist' | 'Sold Out';
  focus: string;
  curriculum: string[];
}

export interface DayItinerary {
  day: number;
  title: string;
  time: string;
  activity: string;
  type: 'dance' | 'culture' | 'performance';
}

export interface StoredEnquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  interest: string;
  destination: string;
  groupSize: string;
  message: string;
  status: 'New' | 'In Progress' | 'Itinerary Sent' | 'Confirmed';
  notes?: string;
}

export const COMPANY_INFO = {
  name: "Dance Tours",
  owner: "Justin",
  email: "justin@dancetoursproductions.com",
  phone: "07855 048350",
  address: "London, United Kingdom",
  tagline: "Dance. Travel. Inspire.",
  subheading: "British style ballet workshops, dance tours and productions, taking the art of ballet around the world.",
  logoUrl: "/assets/aistudio/Dance_tour_Justin_34cedc7b.png",
  founded: "2012",
  accreditation: "Featuring Artists from The Royal Ballet & Premier International Companies",
};

export const HERO_SLIDES = [
  {
    id: "productions",
    title: "The Art of Classical Grandeur",
    headline: "Dance. Travel. Inspire.",
    subheading: "British style ballet workshops, dance tours and productions, taking the art of ballet around the world.",
    image: "/assets/aistudio/Laura_Morera_dangerous_liasons1_royal_night_of_elegance_Japan_2018_7bae953d.jpg",
    caption: "Laura Morera in Dangerous Liaisons, Royal Night of Elegance Japan",
    badge: "International Stage Productions",
  },
  {
    id: "workshops",
    title: "Mastery from Royal Ballet Artists",
    headline: "Purity of Line, Depth of Soul",
    subheading: "Direct coaching by world-renowned former Royal Ballet Principal & Soloist masters across five continents.",
    image: "/assets/aistudio/Ricardo_Cervera_dance_tours_workshop1_japan_bb531b80.jpg",
    caption: "Ricardo Cervera coaching masterclass technique at the barre, Japan",
    badge: "British Style Masterclasses",
  },
  {
    id: "tourism",
    title: "Unforgettable Cultural Odysseys",
    headline: "More Than Memories of Dance",
    subheading: "Curated cultural immersion, private theatre privileges, and international friendship that lasts a lifetime.",
    image: "/assets/aistudio/dance_tours_dance_tourism_australian_ballet_london_7bdfc3c2.png",
    caption: "Dance Tours cultural journey with Australian dancers in central London",
    badge: "Dance & Tourism Experiences",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "workshops",
    title: "Dance Workshops",
    subtitle: "British Style & Classical Artistry",
    image: "/assets/aistudio/Laura_morera_dance_tours_workshop_spain_madrid_55e3eb41.png",
    shortDesc: "Rigorous masterclasses in the renowned British classical tradition, conducted by former soloists and rehearsal masters of The Royal Ballet.",
    fullDesc: "Dance Tours workshops bring the peerless coaching of London's royal stages directly to schools, conservatoires, and studios globally. Focusing on Ashton, MacMillan and Petipa repertory, dancers cultivate nuanced musicality, epaulement, razor-sharp precision, and the poetic artistry distinctive of British classical heritage.",
    highlights: [
      "Former Royal Ballet Principals & Ballet Masters faculty",
      "Technique, Pas de Deux, Repertoire & Variations",
      "Tailored levels from vocational hopefuls to pre-professionals",
      "Personalised feedback & certificate of artistic attendance"
    ],
    features: [
      "Pure classical syllabus & epaulement training",
      "Direct theatrical coaching from Royal Opera House veterans",
      "Pointe work, virtuosity, and musical phrasing",
      "Custom intensive duration (3 days to 2 weeks)"
    ],
    audience: "Vocational dance students, private studios, academies & conservatoires",
    actionText: "Explore Workshops",
    actionHref: "#workshops",
  },
  {
    id: "tourism",
    title: "Dance & Tourism",
    subtitle: "A Lifetime Experience Worldwide",
    image: "/assets/aistudio/Dance_Tours_dance_tourism1_japan_6d7ed561.jpg",
    shortDesc: "Seamlessly uniting elite dance instruction with inspiring world travel, historic architecture, and cross-cultural friendship.",
    fullDesc: "Every journey is crafted to be exciting, educational, and deeply memorable. From private studio rehearsals in Tokyo to historic walks through Kyoto's ancient shrines, or backstage tours of the Royal Opera House Covent Garden, we turn travel into transformative creative inspiration.",
    highlights: [
      "Full tour itinerary curation with safe 24/7 chaperoning",
      "Exclusive masterclasses at host nation prestigious academies",
      "Sightseeing, local gastronomy & cultural heritage exploration",
      "Enduring friendships between dancers across the globe"
    ],
    features: [
      "London, Tokyo, Kyoto, Madrid, Sydney, Rome itineraries",
      "Bespoke packages for school groups and private academies",
      "Private theatre tickets & VIP backstage access",
      "Dedicated bilingual tour managers and logistics coordinators"
    ],
    audience: "Dance academies, youth performance troupes, and dance tour groups",
    actionText: "Discover Tours",
    actionHref: "#tourism",
  },
  {
    id: "productions",
    title: "Ballet Productions",
    subtitle: "Starring Top International Dancers",
    image: "/assets/aistudio/Laura_Morera_dangerous_liasons1_royal_night_of_elegance_Japan_2018_7bae953d.jpg",
    shortDesc: "High-calibre ballet galas and theatrical spectacles featuring celebrated Principal Dancers from The Royal Ballet and leading companies.",
    fullDesc: "We produce and co-produce stunning theatrical productions, from classical gala evenings to narrative adaptations such as 'Dangerous Liaisons' and 'Royal Night of Elegance'. We connect world-class artists with theatres, festivals, and audiences hungry for unmatched excellence.",
    highlights: [
      "World-class casting from London's Royal Opera House & Europe",
      "Full scenic production, costumes & theatrical direction",
      "Collaborative gala models for international venues & festivals",
      "Student curtain-raiser & chorus opportunities when requested"
    ],
    features: [
      "Bespoke repertory tailored to venue dimensions and audiences",
      "Virtuosic classical pas de deux and contemporary masterworks",
      "Comprehensive touring technical & stage management",
      "Press, media and VIP meet-and-greet orchestration"
    ],
    audience: "Theatres, festivals, corporate patrons & international promoters",
    actionText: "View Productions",
    actionHref: "#productions",
  },
];

export const WORKSHOP_FACULTY = [
  {
    name: "Ricardo Cervera",
    role: "Former Soloist & Ballet Master, The Royal Ballet",
    bio: "Renowned for his impeccable Ashton technique and clarity of execution, Ricardo served as a leading soloist before becoming one of The Royal Ballet's most revered Ballet Masters, rehearsing both the classical canon and iconic MacMillan repertory.",
    image: "/assets/aistudio/Ricardo_Cervera_dance_tours_workshop1_japan_bb531b80.jpg",
    credentials: "The Royal Ballet · Royal Ballet School",
  },
  {
    name: "Laura Morera",
    role: "Former Principal Dancer, The Royal Ballet",
    bio: "Famed for her extraordinary dramatic passion, lyrical phrasing, and masterly musicality, Laura spent over 25 years with The Royal Ballet dancing Giselle, Tatiana (Onegin), Manon, and Lise (La Fille mal gardée) to universal international acclaim.",
    image: "/assets/aistudio/Laura_morera_dance_tours_workshop_spain_madrid_55e3eb41.png",
    credentials: "The Royal Ballet · Critics' Circle Dance Award Winner",
  },
];

export const PRODUCTIONS_DATA: ProductionItem[] = [
  {
    id: "royal-night-elegance",
    title: "Royal Night of Elegance",
    subtitle: "A Celebration of British Ballet Heritage",
    year: "Japan Tour",
    location: "Tokyo & Osaka Concert Halls",
    starring: ["Laura Morera", "Federico Bonelli", "Ricardo Cervera", "Royal Ballet Soloists"],
    image: "/assets/aistudio/Laura_Morera_dangerous_liasons1_royal_night_of_elegance_Japan_2018_7bae953d.jpg",
    synopsis: "A glamorous evening honoring the pinnacle of British choreography, presenting dramatic masterpieces and lyrical divertissements alongside sublime musical accompaniment.",
    director: "Dance Tours Productions",
    reviewQuote: "An unforgettable night of royal distinction. Laura Morera and the British contingent delivered a masterclass in theatrical nuance and sublime line.",
    reviewer: "Tokyo Ballet Review",
  },
  {
    id: "dangerous-liaisons",
    title: "Dangerous Liaisons (Les Liaisons Dangereuses)",
    subtitle: "A Dark, Opulent Tale of Seduction and Intrigue",
    year: "International Staging",
    location: "Suntory Hall & Grand Theatres",
    starring: ["Laura Morera (Marquise de Merteuil)", "Guest Principals"],
    image: "/assets/aistudio/Laura_Morera_dangerous_liasons1_royal_night_of_elegance_Japan_2018_7bae953d.jpg",
    synopsis: "An aristocratic chamber ballet combining period elegance, psychological tension, and razor-sharp pas de deux, bringing Pierre Choderlos de Laclos' celebrated epistolary novel into vivid theatrical life.",
    director: "Dance Tours Theatrical Co.",
    reviewQuote: "Breathtaking in its dramatic restraint and emotional power. The stage design and choreography held the audience mesmerised from opening curtain.",
    reviewer: "International Stage Gazette",
  },
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: "japan",
    country: "Japan",
    cities: "Tokyo & Kyoto",
    flag: "🇯🇵",
    image: "/assets/aistudio/Dance_Tours_dance_tourism1_japan_6d7ed561.jpg",
    tagline: "Ancient Heritage Meets Modern Ballet Mastery",
    duration: "10 to 14 Days",
    keyHighlights: [
      "Masterclasses with Royal Ballet faculty in premier Tokyo studios",
      "Historical tour of Kyoto temples, bamboo groves & tea ceremonies",
      "Cultural dance exchange with Japanese youth ballet academies",
      "Performance attendance at the New National Theatre Tokyo"
    ],
    story: "From Kyoto's striking orange pagodas to Tokyo's electric urban energy, our Japan tours combine intense studio discipline with peaceful cultural reflection.",
  },
  {
    id: "united-kingdom",
    country: "United Kingdom",
    cities: "London & Covent Garden",
    flag: "🇬🇧",
    image: "/assets/aistudio/dance_tours_dance_tourism_australian_ballet_london_7bdfc3c2.png",
    tagline: "The Epicentre of the British Classical Style",
    duration: "7 to 12 Days",
    keyHighlights: [
      "Backstage access & rehearsals at the Royal Opera House",
      "Workshops led by former Royal Ballet Soloists and guests",
      "Trafalgar Square, West End shows, British Museum & historic London",
      "Joint studio sessions with Australian and UK dance delegations"
    ],
    story: "Walking the streets of London and training in historical studios where legendary choreographers created ballet history is an experience every dancer cherishes.",
  },
  {
    id: "spain",
    country: "Spain",
    cities: "Madrid & Seville",
    flag: "🇪🇸",
    image: "/assets/aistudio/Laura_morera_dance_tours_workshop_spain_madrid_55e3eb41.png",
    tagline: "Classical Precision Meets Iberian Passion",
    duration: "8 to 10 Days",
    keyHighlights: [
      "Intensives with Laura Morera in historic Madrid studios",
      "Authentic Andalusian flamenco rhythm & character masterclasses",
      "Visits to the Prado Museum, Royal Palace & Retiro Park",
      "End-of-intensive showcase for European parents and patrons"
    ],
    story: "Spain's vibrant artistic spirit inspires dancers to infuse classical technique with emotional boldness, grounded pride, and dynamic expression.",
  },
  {
    id: "australia",
    country: "Australia",
    cities: "Sydney & Melbourne",
    flag: "🇦🇺",
    image: "/assets/aistudio/dance_tours_dance_tourism_australian_ballet_london_7bdfc3c2.png",
    tagline: "Trans-Pacific Bridges of Ballet Excellence",
    duration: "10 to 14 Days",
    keyHighlights: [
      "Nationwide masterclass tour across major Australian conservatoires",
      "Sydney Opera House tour and performance viewings",
      "Direct audition pipelines for British summer schools",
      "Coastal workshops and bespoke choreography development"
    ],
    story: "Partnering with Australian dance schools for over a decade, creating life-changing connections that bring young dancers to London's Covent Garden.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Laura Morera on Stage in Dangerous Liaisons",
    category: "productions",
    image: "/assets/aistudio/Laura_Morera_dangerous_liasons1_royal_night_of_elegance_Japan_2018_7bae953d.jpg",
    caption: "Dramatic repose on stage in Japan, Royal Night of Elegance 2018.",
    location: "Tokyo, Japan",
    aspect: "tall",
  },
  {
    id: "gal-2",
    title: "Ricardo Cervera Teaching at the Barre",
    category: "workshops",
    image: "/assets/aistudio/Ricardo_Cervera_dance_tours_workshop1_japan_bb531b80.jpg",
    caption: "Mastering epaulement and classical line with The Royal Ballet's Ballet Master.",
    location: "Tokyo Studios, Japan",
    aspect: "tall",
  },
  {
    id: "gal-3",
    title: "Cultural Exchange in Kyoto",
    category: "tourism",
    image: "/assets/aistudio/Dance_Tours_dance_tourism1_japan_6d7ed561.jpg",
    caption: "Dance Tours participants exploring historic pagoda shrines in Kyoto.",
    location: "Kyoto, Japan",
    aspect: "tall",
  },
  {
    id: "gal-4",
    title: "Laura Morera Mid-Air Elevation in Madrid",
    category: "workshops",
    image: "/assets/aistudio/Laura_morera_dance_tours_workshop_spain_madrid_55e3eb41.png",
    caption: "Demonstrating explosive allegro and suspension in Madrid masterclass.",
    location: "Madrid, Spain",
    aspect: "wide",
  },
  {
    id: "gal-5",
    title: "Australian Dancers Exploring London",
    category: "tourism",
    image: "/assets/aistudio/dance_tours_dance_tourism_australian_ballet_london_7bdfc3c2.png",
    caption: "Dancers posing gracefully along Whitehall and Trafalgar Square in London.",
    location: "London, United Kingdom",
    aspect: "wide",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Working directly with Ricardo Cervera and Laura Morera transformed our students' understanding of classical port de bras. Their patience, kindness, and royal standards brought an unmistakable elegance into our academy.",
    author: "Keiko Minami",
    role: "Artistic Director, Tokyo Classical Ballet Academy",
    country: "Japan",
    location: "Tokyo",
    year: "2024",
  },
  {
    id: "test-2",
    quote: "Our London tour with Dance Tours was simply unforgettable. Beyond the masterclasses at prestigious studios, our dancers made lifelong memories watching The Royal Ballet at Covent Garden and seeing the historic sights with Justin and his team.",
    author: "Fiona Henderson",
    role: "Principal, Southern Cross Dance Society",
    country: "Australia",
    location: "Sydney",
    year: "2023",
  },
  {
    id: "test-3",
    quote: "The production of Dangerous Liaisons brought a standard of theatrical sophistication that our audiences had never witnessed before. The artistry, costumes, and musical synergy were of the highest world-class calibre.",
    author: "Hiroshi Sato",
    role: "General Producer, Stage Arts Festival",
    country: "Japan",
    location: "Osaka",
    year: "2022",
  },
  {
    id: "test-4",
    quote: "As a parent, I was so impressed with the safe, meticulous care Dance Tours provided while giving my daughter the artistic breakthrough of her young life. The British classical style taught here has elevated her entire future.",
    author: "Beatriz Gomez",
    role: "Parent of Pre-Professional Dancer",
    country: "Spain",
    location: "Madrid",
    year: "2024",
  },
];

export const UPCOMING_WORKSHOPS: UpcomingWorkshop[] = [
  {
    id: "ws-tokyo-2027",
    title: "Tokyo British Ballet Intensive",
    city: "Tokyo",
    country: "Japan",
    venue: "Studio Architanz & Shinjuku Ballet Hall",
    dates: "April 12 – 18, 2027",
    season: "Spring 2027",
    faculty: ["Ricardo Cervera (Ballet Master)", "Laura Morera (Former Principal)"],
    level: "Pre-Professional (Ages 15-22)",
    capacity: 28,
    spotsLeft: 5,
    tuition: "£780 / ¥148,000",
    status: "Filling Fast",
    focus: "Ashton Port de Bras, MacMillan Repertoire, Pas de Deux & Technical Virtuosity",
    curriculum: [
      "Daily 90-min British Classical Barre & Centre",
      "Frederick Ashton's La Fille mal gardée Variations",
      "Pointe work & Allegro suspension",
      "Theatrical dramaturgy & audition coaching"
    ]
  },
  {
    id: "ws-london-2027",
    title: "Covent Garden Summer Masterclass Series",
    city: "London",
    country: "United Kingdom",
    venue: "Pineapple Dance Studios & Covent Garden Private Studios",
    dates: "July 5 – 16, 2027",
    season: "Summer 2027",
    faculty: ["Ricardo Cervera", "Royal Ballet Guest Soloists"],
    level: "All Advanced Levels",
    capacity: 32,
    spotsLeft: 8,
    tuition: "£1,150",
    status: "Open",
    focus: "Royal Ballet Heritage, Romeo and Juliet excerpts, Classical Line & Stamina",
    curriculum: [
      "Pure classical syllabus & epaulement placement",
      "Royal Opera House rehearsal observation privileges",
      "Partnering & pas de deux foundations",
      "Masterclass with West End & Royal Ballet repetiteurs"
    ]
  },
  {
    id: "ws-madrid-2027",
    title: "Madrid Classical Artistry Intensive",
    city: "Madrid",
    country: "Spain",
    venue: "Danza 180 Studio Central",
    dates: "October 18 – 24, 2027",
    season: "Autumn 2027",
    faculty: ["Laura Morera", "Guest Repetiteurs"],
    level: "Vocational (Ages 11-14)",
    capacity: 24,
    spotsLeft: 3,
    tuition: "£690 / €820",
    status: "Filling Fast",
    focus: "Lyrical Phrasing, Musical Nuance, Classical Footwork & Stage Projection",
    curriculum: [
      "Foundational placement & clean turnout alignment",
      "Giselle Act I Peasant Pas variations",
      "Spanish character dance infusion & musical timing",
      "Certificated studio gala performance for family"
    ]
  },
  {
    id: "ws-sydney-2027",
    title: "Australasia Ballet Bridge Masterclasses",
    city: "Sydney",
    country: "Australia",
    venue: "Sydney Dance Company Wharf Studios",
    dates: "January 14 – 20, 2028",
    season: "Summer 2027",
    faculty: ["Ricardo Cervera", "Justin (Artistic Director)"],
    level: "Pre-Professional (Ages 15-22)",
    capacity: 30,
    spotsLeft: 12,
    tuition: "£750 / A$1,450",
    status: "Open",
    focus: "UK Vocational School Audition Pipeline & Repertoire Masterclass",
    curriculum: [
      "Audition solo polishing & camera preparation",
      "MacMillan's Manon & Mayerling soloist styling",
      "Cardiovascular stamina & injury-prevention barre",
      "Direct guidance for British summer school admissions"
    ]
  }
];

export const DESTINATION_ITINERARIES: Record<string, DayItinerary[]> = {
  japan: [
    { day: 1, title: "Arrival in Tokyo", time: "16:00", activity: "Check-in at Tokyo central boutique hotel, orientation with Justin and welcome dinner.", type: "culture" },
    { day: 2, title: "First Royal Masterclass", time: "09:30", activity: "British style classical barre with Ricardo Cervera at Studio Architanz.", type: "dance" },
    { day: 3, title: "Ashton Repertoire & Meiji Shrine", time: "10:00", activity: "Morning variations class followed by guided cultural walk through Meiji Shrine and Harajuku.", type: "culture" },
    { day: 4, title: "Pas de Deux & Partnering", time: "10:30", activity: "Supported adagio and allegro coaching with former Royal Ballet soloists.", type: "dance" },
    { day: 5, title: "Bullet Train to Ancient Kyoto", time: "08:45", activity: "Shinkansen high-speed journey to Kyoto; check-in and visit Fushimi Inari-taisha torii gates.", type: "culture" },
    { day: 6, title: "Kyoto Heritage & Pagoda Walk", time: "11:00", activity: "Kiyomizu-dera temple, traditional tea ceremony, and iconic pagoda photo session.", type: "culture" },
    { day: 7, title: "Joint Exchange Masterclass", time: "10:00", activity: "Joint masterclass and artistic friendship exchange with Kyoto youth dancers.", type: "dance" },
    { day: 8, title: "Farewell Gala & Studio Showcase", time: "14:00", activity: "Certificates ceremony, student showcase, and traditional Kaiseki banquet celebration.", type: "performance" }
  ],
  "united-kingdom": [
    { day: 1, title: "Welcome to London", time: "15:00", activity: "Meet Justin at Covent Garden accommodations; evening walk along the River Thames.", type: "culture" },
    { day: 2, title: "The Royal Opera House Backstage", time: "10:00", activity: "Private behind-the-scenes tour of Royal Opera House followed by studio barre in Covent Garden.", type: "dance" },
    { day: 3, title: "British Classical Intensive", time: "09:30", activity: "MacMillan style masterclass with former Royal Ballet soloists; afternoon at National Gallery.", type: "dance" },
    { day: 4, title: "Evening at the Ballet", time: "19:00", activity: "Attend a live performance by The Royal Ballet from prime stalls seats.", type: "performance" },
    { day: 5, title: "West End & Musicality Class", time: "10:00", activity: "Pointe work and musical phrasing workshop, followed by historic Westminster walk.", type: "culture" },
    { day: 6, title: "Studio Showcase & Reception", time: "15:00", activity: "Demonstration performance, individual teacher feedback, and celebration afternoon tea.", type: "performance" }
  ],
  spain: [
    { day: 1, title: "Arrival in Sunny Madrid", time: "15:00", activity: "Check-in in historic Madrid; orientation with Laura Morera and tapas welcome evening.", type: "culture" },
    { day: 2, title: "Laura Morera Classical Masterclass", time: "10:00", activity: "Intensive focus on suspension, port de bras, and stage projection at Danza 180.", type: "dance" },
    { day: 3, title: "Prado Museum & Retiro Park", time: "14:00", activity: "Morning pointe workshop; afternoon exploring masterpieces of Velázquez and Goya.", type: "culture" },
    { day: 4, title: "Flamenco Rhythms & Spanish Flair", time: "11:00", activity: "Specialist masterclass in Iberian character dance, zapateado, and port de bras passion.", type: "dance" },
    { day: 5, title: "Royal Palace & Gala Exhibition", time: "16:00", activity: "Tour of Palacio Real and final studio presentation of rehearsed classical variations.", type: "performance" }
  ],
  australia: [
    { day: 1, title: "Arrival in Sydney Harbour", time: "14:00", activity: "Harbourfront orientation with Justin; welcome briefing for Australian and international guests.", type: "culture" },
    { day: 2, title: "Wharf Studios Classical Barre", time: "09:30", activity: "Intensive training with Ricardo Cervera overlooking stunning Sydney Harbour.", type: "dance" },
    { day: 3, title: "Sydney Opera House Tour & Gala", time: "14:00", activity: "Architectural backstage tour and evening performance at the world's most famous sails.", type: "performance" },
    { day: 4, title: "Audition Preparation Workshop", time: "10:00", activity: "UK vocational school entry audition simulations, variations, and video reels coaching.", type: "dance" },
    { day: 5, title: "Coastal Bondi Walk & Farewell Dinner", time: "15:00", activity: "Celebratory afternoon, certificates of distinction, and sunset banquet.", type: "culture" }
  ]
};

export const INITIAL_STORED_ENQUIRIES: StoredEnquiry[] = [
  {
    id: "enq-9021",
    createdAt: "2026-10-25 14:32",
    name: "Helena Rostova",
    email: "h.rostova@balletconservatoire.org",
    phone: "+44 7700 900142",
    organization: "London Youth Ballet Troupe",
    interest: "Dance & Tourism",
    destination: "Japan (Tokyo & Kyoto) - Spring 2027",
    groupSize: "18 Dancers (Ages 13-17) + 3 Chaperones",
    message: "We are seeking a 10-day tour combining morning masterclasses with Ricardo Cervera and cultural sightseeing in Tokyo and Kyoto. Looking for custom pricing and itinerary details.",
    status: "New"
  },
  {
    id: "enq-9018",
    createdAt: "2026-10-23 09:15",
    name: "Marcus Vance",
    email: "m.vance@sydneydancearts.com.au",
    phone: "+61 412 899 431",
    organization: "Sydney Academy of Classical Dance",
    interest: "Dance Workshops",
    destination: "London (Covent Garden)",
    groupSize: "12 Pre-Professionals",
    message: "Our pre-professional students would like a bespoke 2-week intensive in London focusing on Ashton repertoire and audition readiness.",
    status: "In Progress",
    notes: "Justin spoke on phone 24/10. Sent draft studio schedule."
  },
  {
    id: "enq-8994",
    createdAt: "2026-10-20 18:40",
    name: "Kiyoshi Takahashi",
    email: "k.takahashi@stagearts-osaka.jp",
    phone: "+81 90 4432 9901",
    organization: "Kansai Theatre Foundation",
    interest: "Ballet Productions",
    destination: "Japan (Osaka)",
    groupSize: "Promoter / Venue",
    message: "Proposing a return staging of Dangerous Liaisons starring Laura Morera for October 2027 in Osaka Symphony Hall.",
    status: "Itinerary Sent",
    notes: "Contract proposal emailed by Justin."
  }
];

