export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  live?: string;
  github: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "hirestack",
    title: "HireStack",
    subtitle: "RAG Candidate Discovery Engine",
    image: "/projects/hirestack.webp",
    description:
      "Paste a job description and get a ranked, explainable shortlist. Retrieval over resumes with skill-coverage scoring, async ingestion, and cached results.",
    tech: ["Next.js", "Express", "Qdrant", "OpenRouter", "BullMQ", "Redis"],
    highlights: [
      "Vector search on Qdrant (all-MiniLM-L6-v2, 384-d) + Jaccard skill coverage",
      "Weighted ranking: semantic 35%, skills 30%, experience 20%, education 15%",
      "Async PDF ingestion with Redis + 5-min TTL cache and Winston logging",
    ],
    live: "https://hirestack-vert.vercel.app",
    github: "https://github.com/muskan-wagh/rag-system",
  },
  {
    id: "echo",
    title: "Echo",
    subtitle: "CI/CD Reliability Monitor",
    image: "/projects/echo.webp",
    description:
      "CI triage that fingerprints failures and scores flakiness deterministically, from ingest to PR comments.",
    tech: ["Fastify", "Next.js", "PostgreSQL", "GitHub App", "Clerk"],
    highlights: [
      "Identity hashing by file + suite + name; ANSI-strip and path redaction",
      "Deterministic flake score 0–100 with recency weighting and BROKEN override",
      "HMAC webhooks, API-key ingest, dashboard and PR comment reporting",
    ],
    live: "https://echo-sable-five.vercel.app",
    github: "https://github.com/muskan-wagh/CI-CD-reliability-monitor",
  },
  {
    id: "orbit",
    title: "Orbit",
    subtitle: "AI Job Application OS",
    image: "/projects/orbit.webp",
    description:
      "Turns Gmail into a structured job-application pipeline, from OAuth ingest to a matching dashboard.",
    tech: ["Next.js", "Supabase", "Gmail API", "OpenAI", "PostgreSQL"],
    highlights: [
      "OS_* schema with RLS per user; session proxy and migrations",
      "Gmail OAuth with filtering, classification, and extraction to email_events",
      "Matching and Action engine feeding a structured dashboard",
    ],
    live: "https://orbit-lovat-six.vercel.app",
    github: "https://github.com/muskan-wagh/Orbit",
  },
  {
    id: "campus-connect",
    title: "Campus Connect",
    subtitle: "Clubs & Events Platform",
    image: "/projects/campus-connect.webp",
    description:
      "One home for campus clubs and events — roles, event lifecycle, and notifications with row-level security.",
    tech: ["Next.js", "Supabase", "PostgreSQL RLS", "Tailwind CSS"],
    highlights: [
      "Three roles: Admin, Club Lead, Student with verification flow",
      "Event lifecycle Draft → Published → Cancelled with subscriptions",
      "Notifications and audit logs isolated by RLS",
    ],
    live: "https://campus-connect-xi-umber.vercel.app",
    github: "https://github.com/muskan-wagh/Campus-Connect-old",
  },
];

export const secondaryProjects: Project[] = [
  {
    id: "estate",
    title: "Estate",
    subtitle: "Real Estate Platform",
    image: "/projects/estate.webp",
    description:
      "Browse plots and flats with media previews. Admin can publish properties with images, video, and blog posts.",
    tech: ["Next.js", "Supabase", "PostHog", "Tailwind CSS"],
    highlights: [
      "Listing and detail pages with image and video previews",
      "Admin create flow for properties and posts",
      "Property metadata modeling for real-world use",
    ],
    live: "https://estate-app-drab.vercel.app",
    github: "https://github.com/muskan-wagh/Estate-app",
  },
];
