import { Link } from "react-router-dom";
import { projects, secondaryProjects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

const all = [...projects, ...secondaryProjects];

export default function Visuals() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-10 md:py-12">
      <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f2f2f3]">Visuals</h1>
      <p className="mt-2 text-[15px] leading-[1.6] text-[#9aa0a6] max-w-[560px]">
        Project screenshots and event photographs. Replace placeholders with your images when ready.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {all.map((p) => (
          <a
            key={p.id}
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-[12px] border border-[#1e2023] bg-[#151618] hover:border-[#232529] transition-colors"
          >
            <div className="aspect-[16/10] bg-[#0f1012] flex items-center justify-center border-b border-[#1e2023]">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#3a3f45]">Screenshot — add later</span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-[14.5px] font-semibold tracking-[-0.01em] text-[#e8e8ea] group-hover:text-white">{p.title}</h2>
                  <p className="font-mono text-[12px] text-[#6b7280]">{p.subtitle}</p>
                </div>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-[7px] border border-[#232529] bg-[#0f1012] text-[#6b7280] group-hover:text-[#e8e8ea] group-hover:border-[#2a2e33] transition-colors">
                  <ArrowUpRight size={13} />
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#9aa0a6] line-clamp-2">{p.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/" className="text-[13.5px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
