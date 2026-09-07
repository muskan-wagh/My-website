export default function Hero() {
  return (
    <section className="pt-2 lg:pt-8 pb-10">
      {/* mobile name anchor — shown only when sidebar is hidden */}
      <div className="lg:hidden mb-8">
        <h1 className="text-[42px] font-semibold tracking-[-0.05em] leading-[0.85] text-[#f2f2f3]">
          Muskan
          <br />
          Wagh
        </h1>
        <p className="mt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#6b7280]">Full-Stack Developer — Indore</p>
      </div>

      <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-10 items-end">
        {/* statement — editorial */}
        <div>
          <p className="hidden lg:block font-mono text-[11px] tracking-[0.14em] uppercase text-[#6b7280]">
            Full-Stack Developer <span className="text-[#2a2e33]">·</span> B.Tech CS — SAGE University
          </p>
          <h2 className="mt-3 lg:mt-4 text-[26px] md:text-[32px] lg:text-[34px] font-medium leading-[1.2] tracking-[-0.03em] text-[#f2f2f3]">
            I build full-stack applications,
            <br />
            developer tools and AI-powered
            <br />
            <span className="text-[#9aa0a6]">systems with React, Next.js</span>
            <br />
            <span className="text-[#9aa0a6]">and PostgreSQL.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-[#6b7280] max-w-[520px]">
            Focused on typed, maintainable systems — retrieval, reliability tooling, and RLS-native data modeling. Four live
            projects, all open source.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[#0e0f11] hover:bg-[#ececec] transition-colors"
            >
              Selected work
            </a>
            <a
              href="https://github.com/muskan-wagh"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#232529] bg-[#151618] px-5 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[#e8e8ea] hover:border-[#2a2e33] hover:bg-[#1a1c1e] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* right — vertical link list, asymmetrical */}
        <div className="hidden lg:flex flex-col gap-1.5 lg:pl-6 lg:border-l lg:border-[#1a1c1e] py-2">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center justify-between rounded-[10px] px-3 py-2.5 hover:bg-[#151618] transition-colors"
          >
            <span className="text-[14px] font-medium text-[#e8e8ea]">Selected work</span>
            <span className="text-[13px] text-[#6b7280] group-hover:text-[#e8e8ea] transition-colors">→</span>
          </a>
          <a href="https://github.com/muskan-wagh" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-[10px] px-3 py-2.5 hover:bg-[#151618] transition-colors">
            <span className="text-[14px] font-medium text-[#9aa0a6] group-hover:text-[#e8e8ea]">GitHub</span>
            <span className="text-[13px] text-[#6b7280] group-hover:text-[#e8e8ea]">→</span>
          </a>
          <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-[10px] px-3 py-2.5 hover:bg-[#151618] transition-colors">
            <span className="text-[14px] font-medium text-[#9aa0a6] group-hover:text-[#e8e8ea]">LinkedIn</span>
            <span className="text-[13px] text-[#6b7280] group-hover:text-[#e8e8ea]">→</span>
          </a>
          <a href="mailto:muskanwagh1608@gmail.com" className="group flex items-center justify-between rounded-[10px] px-3 py-2.5 hover:bg-[#151618] transition-colors">
            <span className="font-mono text-[13px] text-[#6b7280] group-hover:text-[#e8e8ea]">Email</span>
            <span className="text-[13px] text-[#6b7280] group-hover:text-[#e8e8ea]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
