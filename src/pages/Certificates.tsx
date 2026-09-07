import { ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";
import { Link } from "react-router-dom";

export default function Certificates() {
  return (
    <div className="mx-auto max-w-[1080px] px-6 py-10 md:py-12">
      <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-[#f2f2f3]">Certificates</h1>
      <p className="mt-2 text-[15px] leading-[1.6] text-[#9aa0a6] max-w-[560px]">
        Verified certifications. Add your certificate images to each entry — gallery layout ready.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certificates.map((c) => (
          <div key={c.title} className="overflow-hidden rounded-[12px] border border-[#1e2023] bg-[#151618]">
            {/* image placeholder */}
            <div className="aspect-[4/3] bg-[#0f1012] border-b border-[#1e2023] flex items-center justify-center">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#3a3f45]">Image — add later</span>
            </div>
            <div className="p-5">
              <h2 className="text-[14.5px] font-semibold tracking-[-0.01em] text-[#e8e8ea]">{c.title}</h2>
              <p className="mt-1 font-mono text-[12px] text-[#6b7280]">
                {c.issuer} · {c.year}
              </p>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-[#9aa0a6]">{c.description}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-medium text-[#9aa0a6] hover:text-[#e8e8ea] transition-colors"
                >
                  View credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
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
