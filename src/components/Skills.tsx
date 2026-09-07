import { useState, type CSSProperties } from "react";
import { Bot, Layers, Share2, Waypoints } from "lucide-react";
import { githubFor, skillGroups, type Skill, type SkillCategory } from "../data/skills";
import { brandIconPaths } from "../data/tech-icons";
import { Section, SectionHeader } from "./ui";
import { cn } from "../lib/cn";

/* ------------------------------------------------------------------ */
/* Technology showcase — category nav | tech grid | detail panel.      */
/* Cards rest neutral; brand color appears only on hover/select.       */
/* Detail panel shows verified usage only — no levels, no metrics.     */
/* ------------------------------------------------------------------ */

type CategoryFilter = "All" | SkillCategory;

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Frontend",
  "Backend",
  "Databases",
  "AI / ML",
  "Tools",
  "Languages",
];

/* Brand glyph where one exists; neutral generic mark for concepts
   (RAG, Embeddings) and unlisted marks (BullMQ, OpenAI). */
function TechIcon({ skill, size = 20 }: { skill: Skill; size?: number }) {
  const path = brandIconPaths[skill.id];
  if (path) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden
      >
        <path d={path} />
      </svg>
    );
  }
  const Generic =
    skill.id === "bullmq"
      ? Layers
      : skill.id === "openai"
        ? Bot
        : skill.id === "rag"
          ? Share2
          : Waypoints;
  return <Generic size={size} strokeWidth={1.8} aria-hidden />;
}

function TechCard({
  skill,
  active,
  onSelect,
}: {
  skill: Skill;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onSelect}
      style={{ "--brand": skill.color } as CSSProperties}
      className={cn("tech-card", active && "tech-card-active")}
    >
      <span aria-hidden className="tech-tile">
        <TechIcon skill={skill} />
      </span>
      <span className="mt-auto block w-full pt-3 text-left">
        <span className="tech-name block truncate">{skill.name}</span>
        <span className="mt-0.5 block truncate text-[12px] leading-[1.4] text-[#666666]">
          {skill.category}
        </span>
      </span>
    </button>
  );
}

function DetailPanel({ skill }: { skill: Skill }) {
  return (
    <div
      key={skill.id}
      aria-live="polite"
      style={
        {
          "--brand": skill.color,
          borderColor: `color-mix(in srgb, ${skill.color} 26%, #1f1f1f)`,
        } as CSSProperties
      }
      className="skill-detail rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] p-6"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border bg-white/[0.03]"
          style={{
            color: skill.color,
            borderColor: `color-mix(in srgb, ${skill.color} 45%, transparent)`,
            backgroundColor: `color-mix(in srgb, ${skill.color} 10%, transparent)`,
          }}
        >
          <TechIcon skill={skill} size={22} />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-[18px] font-semibold tracking-[-0.02em] text-[#ededed]">
            {skill.name}
          </h3>
          <p className="text-[13px] text-[#888888]">{skill.category}</p>
        </div>
      </div>

      <p className="mt-4 text-[14px] leading-[1.65] text-[#a1a1a1]">
        {skill.note}
      </p>

      <div className="mt-5 border-t border-[#1f1f1f] pt-4">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#666666]">
          Used in
        </p>
        {skill.projects.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {skill.projects.map((title) => {
              const href = githubFor(title);
              return (
                <li key={title}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-[14px] text-[#ededed] transition-colors duration-150 hover:text-[#3291ff]"
                    >
                      {title}
                      <span
                        aria-hidden
                        className="text-[#555555] transition-all duration-150 group-hover/link:translate-x-[1px] group-hover/link:text-[#3291ff]"
                      >
                        →
                      </span>
                    </a>
                  ) : (
                    <span className="text-[14px] text-[#ededed]">{title}</span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-3 text-[14px] leading-[1.6] text-[#888888]">
            In the toolkit — not tied to a featured build below.
          </p>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [selectedId, setSelectedId] = useState<string>("react");

  const all = skillGroups.flatMap((g) => g.skills);
  const visible =
    category === "All" ? all : all.filter((s) => s.category === category);
  const selected = visible.find((s) => s.id === selectedId) ?? visible[0];

  const countFor = (c: CategoryFilter) =>
    c === "All" ? all.length : all.filter((s) => s.category === c).length;

  return (
    <Section id="skills">
      <SectionHeader title="Skills" description="Technologies I work with." />

      <div className="mt-10 grid gap-10 lg:grid-cols-[190px_minmax(0,1fr)_300px] lg:gap-8 xl:gap-10">
        {/* Category navigation — horizontal scroll on touch, sidebar on desktop */}
        <nav
          aria-label="Filter technologies by category"
          className="flex gap-1 overflow-x-auto lg:sticky lg:top-24 lg:flex-col lg:self-start"
        >
          {CATEGORIES.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c)}
                className={cn(
                  "flex shrink-0 items-center justify-between gap-6 rounded-md px-3 py-2 text-left text-[14px] transition-colors duration-150",
                  active
                    ? "bg-white/[0.06] text-[#ededed]"
                    : "text-[#888888] hover:bg-white/[0.03] hover:text-[#ededed]"
                )}
              >
                {c}
                <span
                  className={cn(
                    "text-[12.5px] tabular-nums",
                    active ? "text-[#a1a1a1]" : "text-[#555555]"
                  )}
                >
                  {countFor(c)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Technology grid — uniform cards */}
        <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {visible.map((skill) => (
            <TechCard
              key={skill.id}
              skill={skill}
              active={skill.id === selected.id}
              onSelect={() => setSelectedId(skill.id)}
            />
          ))}
        </div>

        {/* Selected technology — stacks underneath on touch */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <DetailPanel skill={selected} />
        </div>
      </div>
    </Section>
  );
}
