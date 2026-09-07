import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/projects";

const featured = projects[0];
const rest = projects.slice(1);

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1080px] px-6 pt-8 pb-12 md:pb-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-[18px] md:text-[19px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Selected Projects</h2>
        <a
          href="https://github.com/muskan-wagh?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-[13px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors"
        >
          All repositories <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Featured */}
      <article className="mt-6 overflow-hidden rounded-[14px] border border-[#232529] bg-[#151618]">
        <div className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#2dc97d]">Featured</p>
              <h3 className="mt-2 text-[22px] md:text-[26px] font-semibold tracking-[-0.03em] leading-none text-[#f2f2f3]">{featured.title}</h3>
              <p className="mt-1.5 font-mono text-[13px] tracking-[-0.01em] text-[#6b7280]">{featured.subtitle}</p>

              {/* typographic preview — subtle, not a dashboard */}
              <div className="mt-6 rounded-[10px] border border-[#1e2023] bg-[#0f1012] p-6 md:p-7">
                <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#3a3f45]">Preview</p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#9aa0a6] line-clamp-3">{featured.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11.5px]">
                  {featured.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-[6px] border border-[#232529] bg-[#151618] px-2 py-1 text-[#9aa0a6]">
                      {t}
                    </span>
                  ))}
                  {featured.tech.length > 4 && <span className="px-1 py-1 text-[#4a5058]">+{featured.tech.length - 4}</span>}
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-[1.65] text-[#9aa0a6] max-w-[640px]">{featured.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[13px]">
                {featured.tech.map((t, i) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <span className="text-[#9aa0a6]">{t}</span>
                    {i < featured.tech.length - 1 && <span className="text-[#2a2e33]">·</span>}
                  </span>
                ))}
              </div>

              {featured.highlights.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {featured.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex gap-2 text-[13px] leading-[1.5] text-[#6b7280]">
                      <span className="text-[#2a2e33]">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex gap-3">
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[9px] bg-white px-4 py-2 text-[13.5px] font-medium text-[#0e0f11] hover:bg-[#ececec] transition-colors"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[9px] border border-[#232529] bg-[#0f1012] px-4 py-2 text-[13.5px] font-medium text-[#9aa0a6] hover:text-[#e8e8ea] hover:border-[#2a2e33] transition-colors"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              </div>
            </div>

            {/* right meta — lightweight, keeps focus on project */}
            <div className="hidden lg:block w-[260px] shrink-0 pt-1">
              <div className="rounded-[10px] border border-[#1e2023] bg-[#0f1012] p-4">
                <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">Stack</p>
                <p className="mt-2 font-mono text-[12px] leading-[1.7] text-[#9aa0a6]">
                  {featured.tech.join(" · ")}
                </p>
                <div className="mt-4 h-px bg-[#1e2023]" aria-hidden />
                <p className="mt-4 font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">Links</p>
                <div className="mt-2 flex flex-col gap-1.5">
                  <a href={featured.live} target="_blank" rel="noreferrer" className="font-mono text-[12.5px] text-[#9aa0a6] hover:text-[#2dc97d] transition-colors">
                    Live demo →
                  </a>
                  <a href={featured.github} target="_blank" rel="noreferrer" className="font-mono text-[12.5px] text-[#9aa0a6] hover:text-[#2dc97d] transition-colors">
                    GitHub repository →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Rest */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {rest.map((p) => (
          <article key={p.id} className="flex flex-col rounded-[14px] border border-[#1e2023] bg-[#151618] p-6 hover:border-[#232529] transition-colors">
            <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">{p.title}</h3>
            <p className="mt-1 font-mono text-[12.5px] tracking-[-0.01em] text-[#6b7280]">{p.subtitle}</p>
            <p className="mt-3 text-[14.5px] leading-[1.6] text-[#9aa0a6]">{p.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-1.5 font-mono text-[11.5px]">
              {p.tech.map((t, i) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="text-[#9aa0a6]">{t}</span>
                  {i < p.tech.length - 1 && <span className="text-[#2a2e33]">·</span>}
                </span>
              ))}
            </div>

            {p.highlights.length > 0 && (
              <ul className="mt-4 space-y-1">
                {p.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex gap-2 text-[12.5px] leading-[1.5] text-[#6b7280]">
                    <span className="text-[#2a2e33]">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex items-center gap-4 pt-4 border-t border-[#1a1c1e]">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[13px] font-medium text-[#e8e8ea] hover:text-white transition-colors">
                  Live Demo <ArrowUpRight size={13} />
                </a>
              )}
              <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-[13px] text-[#6b7280] hover:text-[#2dc97d] transition-colors">
                GitHub <ArrowUpRight size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
