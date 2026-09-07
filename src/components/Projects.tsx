import type { ComponentType } from "react";
import { projects, type Project } from "../data/projects";
import { QuietLink, SectionHeader } from "./ui";
import { cn } from "../lib/cn";

/* ------------------------------------------------------------------ */
/* Cover art — abstract, intentional visuals (no screenshots in repo). */
/* One restrained blue-family treatment per project: deep gradient,    */
/* soft glow, single line motif, film grain. No fake UI, no initials.  */
/* ------------------------------------------------------------------ */

function Noise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

type MotifProps = { className?: string };

function LayersMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z" />
      <path d="m4.5 11.5 7.5 4 7.5-4" />
      <path d="m4.5 15.5 7.5 4 7.5-4" />
    </svg>
  );
}

function PulseMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3 12h3.5l2-5 3.5 10 2.5-7 1 2H21" />
    </svg>
  );
}

function OrbitMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3.5" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4.2" transform="rotate(-20 12 12)" />
      <circle cx="20" cy="8.4" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function NodesMotif({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" className={className} aria-hidden>
      <path d="M7.2 7.2 16.5 8.3M7.2 7.2 9.6 15.5M16.5 8.3l1 7.4M9.6 15.5l7.9.2" opacity={0.7} />
      <circle cx="6" cy="6" r="1.8" />
      <circle cx="18" cy="8" r="1.8" />
      <circle cx="9.5" cy="17.5" r="1.8" />
      <circle cx="18" cy="17" r="1.8" />
    </svg>
  );
}

const art: Record<string, { background: string; orb: string; Motif: ComponentType<MotifProps> }> = {
  hirestack: {
    background:
      "radial-gradient(120% 100% at 50% 0%, #0b1e3a 0%, #070b14 55%, #05070c 100%)",
    orb: "h-56 w-56 bg-[#0070f3]/30",
    Motif: LayersMotif,
  },
  echo: {
    background:
      "radial-gradient(120% 100% at 50% 0%, #171233 0%, #0b0a14 55%, #060609 100%)",
    orb: "h-52 w-52 bg-[#7c6cf0]/25",
    Motif: PulseMotif,
  },
  orbit: {
    background:
      "radial-gradient(120% 100% at 50% 0%, #0a2231 0%, #070d13 55%, #05080b 100%)",
    orb: "h-52 w-52 bg-[#38bdf8]/20",
    Motif: OrbitMotif,
  },
  "campus-connect": {
    background:
      "radial-gradient(120% 100% at 50% 0%, #1a1d24 0%, #0c0d11 55%, #060607 100%)",
    orb: "h-52 w-52 bg-white/[0.08]",
    Motif: NodesMotif,
  },
};

function Cover({ project, large }: { project: Project; large?: boolean }) {
  if (project.image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-[#0b0b0d]",
          large ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[340px]" : "aspect-[16/9]"
        )}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    );
  }

  const a = art[project.id];
  const Motif = a?.Motif ?? LayersMotif;
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#0b0b0d]",
        large ? "aspect-[16/10] md:aspect-auto md:h-full md:min-h-[340px]" : "aspect-[16/9]"
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ background: a.background }}
      >
        <div
          aria-hidden
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
            a.orb
          )}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Motif className={large ? "h-16 w-16 text-white/70" : "h-14 w-14 text-white/70"} />
      </div>
      <Noise />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

function ProjectLinks({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <div className={cn("flex items-center gap-5", featured ? "mt-6 text-[14px]" : "mt-auto pt-5 text-[14px]")}>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[#ededed] transition-colors duration-150 hover:text-[#3291ff]"
        >
          Live Demo
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-[#888888] transition-colors duration-150 group-hover:text-[#a1a1a1] hover:!text-[#ededed]"
      >
        GitHub
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-colors duration-200 hover:border-white/[0.12] hover:bg-[#0c0c0c] md:grid-cols-5">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — live demo`}
          className="block md:col-span-3"
        >
          <Cover project={project} large />
        </a>
      ) : (
        <div className="md:col-span-3">
          <Cover project={project} large />
        </div>
      )}
      <div className="flex flex-col justify-center p-6 md:col-span-2 md:p-8">
        <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-[#ededed]">
          {project.title}
        </h3>
        <p className="mt-1 text-[14px] text-[#888888]">{project.subtitle}</p>
        <p className="mt-3 text-[15px] leading-[1.65] text-[#a1a1a1]">{project.description}</p>
        <p className="mt-5 font-mono text-[12px] leading-[1.6] text-[#888888]">
          {project.tech.slice(0, 5).join(" · ")}
        </p>
        <ProjectLinks project={project} featured />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-colors duration-200 hover:border-white/[0.12] hover:bg-[#0c0c0c]">
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — live demo`}
          className="block"
        >
          <Cover project={project} />
        </a>
      ) : (
        <Cover project={project} />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#ededed]">
          {project.title}
        </h3>
        <p className="mt-1 text-[13.5px] text-[#888888]">{project.subtitle}</p>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#a1a1a1] line-clamp-2">
          {project.description}
        </p>
        <p className="mt-4 font-mono text-[12px] leading-[1.6] text-[#888888]">
          {project.tech.slice(0, 4).join(" · ")}
        </p>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="projects" className="mt-10 scroll-mt-24 md:mt-14">
      <SectionHeader
        title="Selected Projects"
        description="Live products, open source — designed and built end to end."
        action={
          <QuietLink href="https://github.com/muskan-wagh?tab=repositories">
            View all →
          </QuietLink>
        }
      />

      <div className="mt-10">
        <FeaturedCard project={featured} />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
