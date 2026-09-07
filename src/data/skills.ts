import { projects, secondaryProjects } from "./projects";

/* ------------------------------------------------------------------ */
/* Skill explorer data — every entry is verifiable from the portfolio. */
/* `projects` lists featured builds (by title) where the technology is  */
/* actually used. Empty = in the toolkit, not tied to a featured build. */
/* No proficiency levels, no ratings — only real usage.                 */
/* ------------------------------------------------------------------ */

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "AI / ML"
  | "Tools";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  /** Official / commonly-recognized brand color for the technology. */
  color: string;
  /** One verified line — what it was used for. */
  note: string;
  /** Featured project titles where it is used. */
  projects: string[];
};

export type SkillGroup = {
  label: SkillCategory;
  skills: Skill[];
};

const allProjects = [...projects, ...secondaryProjects];

function githubFor(title: string): string | undefined {
  return allProjects.find((p) => p.title === title)?.github;
}

export { githubFor };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      {
        id: "javascript",
        name: "JavaScript",
        category: "Languages",
        color: "#F7DF1E",
        note: "Working language across frontend and backend projects.",
        projects: ["HireStack", "Echo", "Orbit", "Campus Connect"],
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "Languages",
        color: "#3178C6",
        note: "Primary language for Next.js apps and Node services.",
        projects: ["HireStack", "Echo", "Orbit", "Campus Connect"],
      },
      {
        id: "cpp",
        name: "C++",
        category: "Languages",
        color: "#659AD2",
        note: "Systems language in the toolkit.",
        projects: [],
      },
      {
        id: "html",
        name: "HTML",
        category: "Languages",
        color: "#E34F26",
        note: "Markup behind every Next.js page.",
        projects: ["Campus Connect", "Estate"],
      },
      {
        id: "css",
        name: "CSS",
        category: "Languages",
        color: "#2965F1",
        note: "Styling foundation, composed via Tailwind.",
        projects: ["Campus Connect", "Estate"],
      },
    ],
  },
  {
    label: "Frontend",
    skills: [
      {
        id: "react",
        name: "React",
        category: "Frontend",
        color: "#61DAFB",
        note: "UI layer behind every Next.js project.",
        projects: ["HireStack", "Echo", "Orbit", "Campus Connect"],
      },
      {
        id: "nextjs",
        name: "Next.js",
        category: "Frontend",
        color: "#FFFFFF",
        note: "App Router apps, each deployed with a live demo.",
        projects: ["HireStack", "Echo", "Orbit", "Campus Connect", "Estate"],
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "Frontend",
        color: "#06B6D4",
        note: "Utility styling for Campus Connect and Estate.",
        projects: ["Campus Connect", "Estate"],
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        category: "Backend",
        color: "#5FA04E",
        note: "Runtime for the Express and Fastify services.",
        projects: ["HireStack", "Echo"],
      },
      {
        id: "express",
        name: "Express",
        category: "Backend",
        color: "#EDEDED",
        note: "API service for HireStack ranking and ingestion.",
        projects: ["HireStack"],
      },
      {
        id: "fastify",
        name: "Fastify",
        category: "Backend",
        color: "#C8C8C8",
        note: "API service for Echo CI triage and ingest.",
        projects: ["Echo"],
      },
      {
        id: "bullmq",
        name: "BullMQ",
        category: "Backend",
        color: "#F0522B",
        note: "Async PDF ingestion queue in HireStack.",
        projects: ["HireStack"],
      },
      {
        id: "clerk",
        name: "Clerk",
        category: "Backend",
        color: "#6C47FF",
        note: "Auth for the Echo dashboard and API.",
        projects: ["Echo"],
      },
      {
        id: "gmail-api",
        name: "Gmail API",
        category: "Backend",
        color: "#EA4335",
        note: "OAuth ingest feeding the Orbit pipeline.",
        projects: ["Orbit"],
      },
    ],
  },
  {
    label: "Databases",
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        category: "Databases",
        color: "#5E9BCE",
        note: "Primary store for Echo, Orbit and Campus Connect.",
        projects: ["Echo", "Orbit", "Campus Connect"],
      },
      {
        id: "supabase",
        name: "Supabase",
        category: "Databases",
        color: "#3ECF8E",
        note: "Postgres plus auth and RLS for three builds.",
        projects: ["Orbit", "Campus Connect", "Estate"],
      },
      {
        id: "redis",
        name: "Redis",
        category: "Databases",
        color: "#FF4438",
        note: "Queue backing and 5-minute result cache in HireStack.",
        projects: ["HireStack"],
      },
      {
        id: "qdrant",
        name: "Qdrant",
        category: "Databases",
        color: "#F63D68",
        note: "Vector search over resumes in HireStack.",
        projects: ["HireStack"],
      },
      {
        id: "mongodb",
        name: "MongoDB",
        category: "Databases",
        color: "#4DB33D",
        note: "Document store in the toolkit.",
        projects: [],
      },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      {
        id: "openrouter",
        name: "OpenRouter",
        category: "AI / ML",
        color: "#94A3B8",
        note: "LLM inference for HireStack ranking.",
        projects: ["HireStack"],
      },
      {
        id: "openai",
        name: "OpenAI",
        category: "AI / ML",
        color: "#FFFFFF",
        note: "Classification and extraction in Orbit.",
        projects: ["Orbit"],
      },
      {
        id: "rag",
        name: "RAG",
        category: "AI / ML",
        color: "#A1A1A1",
        note: "Retrieval over resumes with skill-coverage scoring.",
        projects: ["HireStack"],
      },
      {
        id: "embeddings",
        name: "Embeddings",
        category: "AI / ML",
        color: "#A1A1A1",
        note: "384-d vectors with all-MiniLM-L6-v2 in HireStack.",
        projects: ["HireStack"],
      },
    ],
  },
  {
    label: "Tools",
    skills: [
      {
        id: "git",
        name: "Git",
        category: "Tools",
        color: "#F05032",
        note: "Version control across every project.",
        projects: ["HireStack", "Echo", "Orbit"],
      },
      {
        id: "docker",
        name: "Docker",
        category: "Tools",
        color: "#2496ED",
        note: "Containerized services and local infra.",
        projects: [],
      },
      {
        id: "vercel",
        name: "Vercel",
        category: "Tools",
        color: "#FFFFFF",
        note: "Hosting for every live demo below.",
        projects: ["HireStack", "Echo", "Orbit", "Campus Connect", "Estate"],
      },
      {
        id: "github-actions",
        name: "GitHub Actions",
        category: "Tools",
        color: "#4493F8",
        note: "CI automation; Echo triages these workflows.",
        projects: ["Echo"],
      },
      {
        id: "posthog",
        name: "PostHog",
        category: "Tools",
        color: "#F9BD2C",
        note: "Product analytics in Estate.",
        projects: ["Estate"],
      },
    ],
  },
];

export const allSkills: Skill[] = skillGroups.flatMap((g) => g.skills);
