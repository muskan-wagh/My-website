import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1080px] px-6 py-10 md:py-12">
      <div className="h-px bg-[#1a1c1e] mb-10" aria-hidden />
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Experience & leadership</h2>

      <div className="mt-6 divide-y divide-[#1a1c1e] border-y border-[#1e2023]">
        {experiences.map((e) => (
          <div key={e.role} className="py-6 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#e8e8ea]">{e.role}</h3>
              <p className="mt-1 text-[14px] text-[#9aa0a6]">{e.org}</p>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-[#6b7280] max-w-[640px]">{e.description}</p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="inline-flex rounded-[7px] border border-[#232529] bg-[#151618] px-2.5 py-1 font-mono text-[11.5px] text-[#9aa0a6]">
                {e.period}
              </span>
              <span className="inline-flex rounded-[7px] bg-[rgba(45,201,125,0.10)] border border-[rgba(45,201,125,0.15)] px-2.5 py-1 font-mono text-[11.5px] font-medium text-[#2dc97d]">
                {e.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
