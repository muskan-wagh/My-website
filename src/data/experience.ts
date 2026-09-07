export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  type: "Community" | "Leadership";
};

export const experiences: Experience[] = [
  {
    role: "Google Student Ambassador",
    org: "Google for Gemini",
    period: "2025 — 2026",
    description:
      "Representing Google AI initiatives on campus. Organizing Gemini workshops, facilitating AI learning, and bridging Google with SAGE University.",
    type: "Community",
  },
  {
    role: "Sponsorship Co-Lead",
    org: "GDG on Campus · SAGE University Indore",
    period: "2024 — 2025",
    description:
      "Founding team member. Built sponsorship pipeline and industry partnerships, secured resources for community events and technical workshops.",
    type: "Community",
  },
  {
    role: "Campus Ambassador",
    org: "MyCaptain",
    period: "2025",
    description:
      "Led marketing and student outreach for career-development programs. Coordinated on-campus campaigns and engagement.",
    type: "Leadership",
  },
  {
    role: "Campus Representative",
    org: "Pregrad",
    period: "2025",
    description:
      "Student outreach and career-acceleration initiatives. Facilitated workshops connecting students with opportunity pathways.",
    type: "Leadership",
  },
];
