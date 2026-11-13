export const profile = {
  name: "Mohammed Hani Al-Shabi",
  initials: "MH",
  title: "Software Engineer & Full-Stack Developer",
  location: "Kuala Lumpur, Malaysia",
  heritage: "Yemeni roots",
  email: "mohammedalshabi268624@gmail.com",
  emailSecondary: "moealshabi@yahoo.com",
  phone: "+601112662544",
  github: "https://github.com/m0al",
  linkedin: "https://www.linkedin.com/in/mohammed-hani-al-shabi-a79830348/",
  cvUrl: "/cv/mohammed-hani-cv.pdf",
  portraitUrl: "/images/portrait.png",
  heroPortraitUrl: "/images/hero-portrait.png",
};

export const aboutParagraphs = [
  "I am a Software Engineering student at Asia Pacific University (APU), pursuing a dual degree in Software Engineering with De Montfort University (DMU), United Kingdom.",
  "I am based in Kuala Lumpur, Malaysia, with Yemeni roots.",
  "I have a strong foundation in object-oriented programming, full-stack development, and software engineering methodology, with hands-on experience building both front-end and back-end systems.",
  "I enjoy transforming ideas into practical digital solutions — from full-service management systems to client-facing marketing websites.",
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C#", "Java", "R", "SQL", "JavaScript"],
  },
  {
    category: "Web Development",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter"],
  },
  {
    category: "Tools",
    skills: ["Git / GitHub", "Firebase", "IntelliJ", "Visual Studio", "Figma", "Draw.io"],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  period: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "foodiepoint",
    name: "FoodiePoint",
    description:
      "A C#-based restaurant management system simulating real operational workflows for a full-service dining and reservation environment. Multi-role architecture supporting Administrator, Manager, Chef, Reservation Coordinator, and Customer roles, with SQL Server integration for persistent storage of menus, reservations, inventory, orders, and user details.",
    tech: ["C#", "OOP", "Microsoft SQL Server"],
    period: "Apr 2025 — May 2025",
    image: "/projects/foodiepoint.svg",
    githubUrl: "https://github.com/m0al/Restaurant",
  },
  {
    id: "max-taxi",
    name: "Max Taxi",
    description:
      "An official React website for a transportation company based in Sana'a, Yemen.",
    tech: ["React", "JavaScript", "CSS"],
    period: "2025",
    image: "/projects/max-taxi.svg",
    liveUrl: "https://maxtaxi.taxi/",
  },
  {
    id: "topmax-travel",
    name: "TopMax Travel and Tourism",
    description:
      "A full-featured marketing website built as a freelance engagement for a travel and tourism company in Yemen. Designed, developed, and deployed a modern, responsive front-end with optimized user flows to highlight services, destinations, and booking options, backed by a clean, scalable structure for long-term maintainability.",
    tech: ["React", "JavaScript", "CSS"],
    period: "Oct 2025 — Nov 2025",
    image: "/projects/topmax-travel.svg",
    liveUrl: "https://topmaxtravel.com/",
  },
  {
    id: "amc-medical",
    name: "AMC Medical Center",
    description:
      "A Java-based medical center management system simulating real clinic workflows. Modular, object-oriented architecture managing patient records, doctor information, and appointment scheduling, built to be easily extended with additional modules such as billing and prescriptions.",
    tech: ["Java", "OOP"],
    period: "Aug 2025 — Oct 2025",
    image: "/projects/amc-medical.svg",
    githubUrl: "https://github.com/m0al/Medical-Centre-Management-System",
  },
  {
    id: "legal-management-system",
    name: "Legal Management System",
    description:
      "An enterprise-level legal case management system built for Yemenia Airways during an IT internship, using Java, JavaFX, and Clean Architecture principles. Supports full case lifecycle management, court session tracking, document management, role-based access control (Admin, Secretary, Lawyer), audit logging, and bilingual (English/Arabic) UI with full RTL support.",
    tech: ["Java", "JavaFX", "Clean Architecture"],
    period: "Apr 2026 — Jun 2026",
    image: "/projects/legal-management-system.svg",
  },
  {
    id: "bokey",
    name: "Bokey",
    description:
      "A mobile service marketplace application built with Flutter and Firebase. Bokey connects customers with local service providers such as barbers, mechanics, and tutors — customers can browse services, book appointments, and leave reviews, while providers manage profiles, services, availability, and booking requests.",
    tech: ["Flutter", "Firebase"],
    period: "2026",
    image: "/projects/bokey.svg",
  },
];

export type TimelineEntry = {
  id: string;
  type: "education" | "experience";
  title: string;
  org: string;
  period: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    id: "apu",
    type: "education",
    title: "BSc (Hons) Software Engineering — Dual Degree Program",
    org: "Asia Pacific University (APU)",
    period: "Jul 2023 — Sept 2027",
    description:
      "Dual degree program pursued jointly with De Montfort University (DMU), United Kingdom. Strong foundation in OOP, full-stack development, and software engineering methodology, with exposure to Agile development concepts and collaborative coding workflows.",
  },
  {
    id: "dmu",
    type: "education",
    title: "Dual Degree Partner Institution",
    org: "De Montfort University (DMU), United Kingdom",
    period: "Dual degree program",
    description:
      "Degree awarded jointly with Asia Pacific University as part of the dual-degree pathway.",
  },
  {
    id: "topmax",
    type: "experience",
    title: "Freelance Web Developer — TopMax Travel (Yemen)",
    org: "Remote",
    period: "Oct 2025 — Nov 2025",
    description:
      "Designed, developed, and deployed a full-featured marketing website for a leading travel and tourism company, collaborating closely with the client to align design, branding, and functionality with business goals.",
  },
  {
    id: "yemenia",
    type: "experience",
    title: "IT Intern",
    org: "Yemenia Airways",
    period: "Apr 2026 — Sept 2026",
    description:
      "Gained practical IT experience within the airline's information technology operations, including building a Legal Management System for the airline's legal department.",
  },
];

export const courses = [
  {
    name: "Soft Skills (Specialization)",
    url: "https://www.coursera.org/account/accomplishments/specialization/GHMYU45D0X8F",
  },
  {
    name: "Fundamentals of UI/UX Design",
    url: "https://www.coursera.org/account/accomplishments/verify/KSV7E3CK3AEV",
  },
  {
    name: "Responsible AI: Applying AI Principles with Google Cloud",
    url: "https://www.coursera.org/account/accomplishments/verify/TAR6E17DIE8P",
  },
  {
    name: "5G Pioneers Program",
    url: "https://www.credly.com/badges/f51325eb-c7b4-40ec-95aa-d19256b23d6b/whatsapp",
  },
];
