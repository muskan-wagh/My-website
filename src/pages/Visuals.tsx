import { projects, secondaryProjects } from "../data/projects";

const all = [...projects, ...secondaryProjects];

export default function Visuals() {
  return (
    <div className="pt-2 lg:pt-8">
      <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f2f2f3]">Visuals</h1>
      <p className="mt-2 text-[15px] leading-[1.6] text-[#9aa0a6] max-w-[560px]">Project screenshots and event photographs. Consistent gallery grid.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {all.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-[14px] border border-[#1e2023] bg-[#151618] hover:border-[#25282b] transition-colors">
            <div className="aspect-[16/10] bg-[#0f1012] border-b border-[#1a1c1e] flex items-center justify-center">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#3a3f45]">Image — add later</span>
            </div>
            <div className="p-4">
              <h2 className="text-[14px] font-semibold tracking-[-0.01em] text-[#e8e8ea]">{p.title}</h2>
              <p className="font-mono text-[11.5px] text-[#6b7280]">{p.subtitle}</p>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-[#9aa0a6] line-clamp-2">{p.description}</p>
              {p.live && <p className="mt-2 font-mono text-[11px] text-[#4a5058] truncate">{p.live.replace("https://", "")}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
