import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="pt-14">
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Experience & leadership</h2>

      {/* structured grid — not a timeline */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {experiences.map((e) => (
          <div
            key={e.role}
            className="flex flex-col rounded-[14px] border border-[#1e2023] bg-[#151618] p-5 hover:border-[#25282b] hover:bg-[#191a1c] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[14px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#e8e8ea]">{e.role}</h3>
              <span className="shrink-0 rounded-full bg-[rgba(45,201,125,0.1)] border border-[rgba(45,201,125,0.15)] px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-[0.02em] text-[#2dc97d]">
                {e.type}
              </span>
            </div>
            <p className="mt-1.5 font-mono text-[12px] text-[#6b7280]">{e.org}</p>
            <p className="mt-3 text-[13px] leading-[1.6] text-[#9aa0a6] line-clamp-3">{e.description}</p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.02em] text-[#4a5058]">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
