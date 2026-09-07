import { ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <div className="pt-2 lg:pt-8">
      <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f2f2f3]">Certificates</h1>
      <p className="mt-2 text-[15px] leading-[1.6] text-[#9aa0a6] max-w-[560px]">
        Verified certifications — images can be added later. Same card system as projects.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <div key={c.title} className="flex flex-col overflow-hidden rounded-[14px] border border-[#1e2023] bg-[#151618] hover:border-[#25282b] transition-colors">
            <div className="aspect-[4/3] bg-[#0f1012] border-b border-[#1a1c1e] flex items-center justify-center">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#3a3f45]">Image — add later</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-[14px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#e8e8ea]">{c.title}</h2>
              <p className="mt-1.5 font-mono text-[11.5px] text-[#6b7280]">
                {c.issuer} · {c.year}
              </p>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#9aa0a6] line-clamp-2">{c.description}</p>
              {c.link && (
                <a href={c.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-medium text-[#9aa0a6] hover:text-[#e8e8ea] transition-colors">
                  View credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
