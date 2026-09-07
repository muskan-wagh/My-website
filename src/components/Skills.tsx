import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1080px] px-6 py-10 md:py-12">
      <div className="h-px bg-[#1a1c1e] mb-10" aria-hidden />
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Technical skills</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.label} className="rounded-[12px] border border-[#1e2023] bg-[#151618] p-5">
            <h3 className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">{g.label}</h3>
            <div className="mt-3 flex flex-wrap gap-x-1.5 gap-y-1 font-mono text-[13px] leading-[1.6]">
              {g.items.map((item, idx) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <span className="text-[#9aa0a6]">{item}</span>
                  {idx < g.items.length - 1 && <span className="text-[#2a2e33]">·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
