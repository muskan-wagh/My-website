import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pt-12 md:pt-16 pb-8 md:pb-10">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
        {/* main intro — 60-70% */}
        <div className="flex-1 min-w-0 max-w-[680px]">
          <h1 className="text-[42px] md:text-[56px] font-semibold tracking-[-0.04em] leading-[0.95] text-[#f2f2f3]">
            Muskan Wagh
          </h1>
          <p className="mt-3 text-[16px] md:text-[18px] font-medium tracking-[-0.02em] text-[#e8e8ea]">Full-Stack Developer</p>

          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.7] text-[#9aa0a6] max-w-[640px]">
            I build full-stack applications, developer tools and AI-powered systems using React, Next.js, Node.js,
            PostgreSQL and related technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-[10px] text-[14px] font-medium tracking-[-0.01em] text-[#0e0f11] hover:bg-[#ececec] transition-colors"
            >
              View projects <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="https://github.com/muskan-wagh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#232529] bg-[#151618] px-5 py-[10px] text-[14px] font-medium tracking-[-0.01em] text-[#e8e8ea] hover:border-[#2a2e33] hover:bg-[#1a1c1e] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#232529] bg-transparent px-5 py-[10px] text-[14px] font-medium tracking-[-0.01em] text-[#9aa0a6] hover:text-[#e8e8ea] hover:border-[#2a2e33] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* small details — real info, no decorative labels */}
        <div className="lg:w-[280px] shrink-0 lg:pt-1">
          <div className="lg:border-l lg:border-[#1e2023] lg:pl-6 space-y-3">
            <p className="text-[14px] leading-[1.5] text-[#e8e8ea]">Indore, India — B.Tech CS, SAGE University (2023—2027)</p>
            <p className="inline-flex items-center gap-2 text-[14px] text-[#9aa0a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2dc97d]" aria-hidden />
              Available for internships
              <span className="text-[#2a2e33]">·</span>
              <span className="text-[#6b7280]">replies in 24h</span>
            </p>
            <a
              href="mailto:muskanwagh1608@gmail.com"
              className="block pt-1 font-mono text-[13px] text-[#9aa0a6] hover:text-[#e8e8ea] transition-colors"
            >
              muskanwagh1608@gmail.com
            </a>
            <p className="font-mono text-[12px] text-[#6b7280]">GitHub · LinkedIn · Email</p>
          </div>
        </div>
      </div>

      {/* hairline — separates hero from projects, brings Projects closer */}
      <div className="mt-10 h-px bg-[#1a1c1e]" aria-hidden />
    </section>
  );
}
