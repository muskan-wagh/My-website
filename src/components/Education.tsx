export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1080px] px-6 py-10 md:py-12">
      <div className="h-px bg-[#1a1c1e] mb-10" aria-hidden />
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Education</h2>

      <div className="mt-6 rounded-[12px] border border-[#1e2023] bg-[#151618] p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[#e8e8ea]">Bachelor of Technology — Computer Science</h3>
            <p className="mt-1 text-[14px] text-[#9aa0a6]">SAGE University Indore</p>
          </div>
          <span className="inline-flex self-start rounded-[7px] border border-[#232529] bg-[#0f1012] px-3 py-1.5 font-mono text-[11.5px] text-[#9aa0a6]">
            2023 — 2027 · 3rd Year
          </span>
        </div>
        <p className="mt-4 text-[14.5px] leading-[1.6] text-[#6b7280] max-w-[640px]">
          Specialization in MERN stack development and scalable web architecture. Active in technical communities and campus
          developer groups.
        </p>
      </div>
    </section>
  );
}
