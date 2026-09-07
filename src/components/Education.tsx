export default function Education() {
  return (
    <section id="education" className="pt-14">
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Education</h2>
      <div className="mt-6">
        <div className="rounded-[14px] border border-[#1e2023] bg-[#151618] p-5 md:p-6 hover:border-[#25282b] transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#e8e8ea]">Bachelor of Technology — Computer Science</h3>
              <p className="mt-1 text-[13.5px] text-[#9aa0a6]">SAGE University Indore</p>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#6b7280] max-w-[560px]">
                Specialization in MERN stack development and scalable web architecture. Active in technical communities and campus developer groups.
              </p>
            </div>
            <span className="inline-flex shrink-0 self-start rounded-full border border-[#232529] bg-[#0f1012] px-3 py-1.5 font-mono text-[11.5px] text-[#9aa0a6]">
              2023 — 2027 · 3rd Year
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
