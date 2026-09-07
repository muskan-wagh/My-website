import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pt-10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Selected Projects</h2>
        <a href="https://github.com/muskan-wagh?tab=repositories" target="_blank" rel="noreferrer" className="hidden sm:inline-flex text-[13px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
          View all →
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-[14px] border border-[#1e2023] bg-[#151618] hover:border-[#25282b] hover:bg-[#191a1c] transition-colors"
          >
            {/* consistent preview area */}
            <div className="aspect-[16/10] bg-[#0f1012] border-b border-[#1a1c1e] flex items-center justify-center">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#3a3f45]">Preview — add screenshot</span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">{p.title}</h3>
              <p className="mt-1 font-mono text-[11.5px] tracking-[-0.01em] text-[#6b7280]">{p.subtitle}</p>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-[#9aa0a6] line-clamp-3">{p.description}</p>

              <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                {p.tech.map((t, i) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <span className="text-[#9aa0a6]">{t}</span>
                    {i < p.tech.length - 1 && <span className="text-[#2a2e33]">·</span>}
                  </span>
                ))}
              </div>

              {/* 2 highlights max, subtle */}
              <ul className="mt-3 space-y-1">
                {p.highlights.slice(0, 2).map((h) => (
                  <li key={h} className="flex gap-1.5 text-[12.5px] leading-[1.5] text-[#6b7280]">
                    <span className="text-[#2a2e33]">—</span>
                    <span className="line-clamp-1">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-3 border-t border-[#1a1c1e] pt-4">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[13px] font-medium text-[#e8e8ea] hover:text-white transition-colors">
                    Live <ArrowUpRight size={12} />
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-mono text-[12.5px] text-[#6b7280] hover:text-[#2dc97d] transition-colors">
                  GitHub <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
