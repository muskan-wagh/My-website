export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  credentialId?: string;
  link?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Full-Stack Development Training",
    issuer: "Coding Blocks",
    year: "2024",
    description: "Summer training covering MERN stack — MongoDB, Express, React, Node.js.",
  },
  {
    title: "Project Design and Development",
    issuer: "SAGE University Indore",
    year: "2026",
    description: "Awarded for design, planning, and development of academic projects.",
  },
  {
    title: "Smart India Hackathon — Internal",
    issuer: "SAGE University Indore",
    year: "2025",
    description: "Recognized for technical creativity and teamwork at SIH Internal.",
  },
  {
    title: "GDG on Campus — Founding Team Member",
    issuer: "Google Developer Groups",
    year: "2024 — 2025",
    description: "Founding team member of the GDG on Campus chapter at SAGE University Indore.",
  },
  {
    title: "Campus Ambassador",
    issuer: "MyCaptain",
    year: "2025",
    description: "Campus Ambassador programme in marketing and community engagement.",
  },
  {
    title: "Campus Representative",
    issuer: "Pregrad",
    year: "2025",
    description: "Campus Ambassador Intern programme focused on career acceleration.",
  },
  {
    title: "Scrum Master Certification",
    issuer: "Udemy",
    year: "2026",
    description: "Scrum framework certification. Credential UC-27dd53f7-a6c8-40d9-9174-fb68bceca58.",
    credentialId: "UC-27dd53f7-a6c8-40d9-9174-fb68bceca58",
    link: "https://ude.my/UC-27dd53f7-a6c8-40d9-9174-fb68bceca58",
  },
  {
    title: "Ultimate Web Development Course",
    issuer: "Udemy",
    year: "2026",
    description: "Build Modern Websites — HTML, CSS, JavaScript and modern tooling. Credential UC-b4461a5a-31b4-4764-ba75-fdf5c9b0bc38.",
    credentialId: "UC-b4461a5a-31b4-4764-ba75-fdf5c9b0bc38",
    link: "https://ude.my/UC-b4461a5a-31b4-4764-ba75-fdf5c9b0bc38",
  },
];
