export default function Contact() {
  return (
    <section id="contact" className="pt-14">
      <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Contact</h2>
      <div className="mt-6 rounded-[14px] border border-[#1e2023] bg-[#151618] p-5 md:p-6">
        <p className="text-[14px] leading-[1.6] text-[#9aa0a6] max-w-[560px]">Open to internships and collaborations. I reply within 24 hours.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <a href="mailto:muskanwagh1608@gmail.com" className="rounded-[12px] border border-[#232529] bg-[#0f1012] px-4 py-3 hover:border-[#2a2e33] transition-colors">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">Email</span>
            <span className="mt-1 block truncate text-[13px] font-medium text-[#e8e8ea]">muskanwagh1608@gmail.com</span>
          </a>
          <a href="https://github.com/muskan-wagh" target="_blank" rel="noreferrer" className="rounded-[12px] border border-[#232529] bg-[#0f1012] px-4 py-3 hover:border-[#2a2e33] transition-colors">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">GitHub</span>
            <span className="mt-1 block text-[13px] font-medium text-[#e8e8ea]">muskan-wagh</span>
          </a>
          <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noreferrer" className="rounded-[12px] border border-[#232529] bg-[#0f1012] px-4 py-3 hover:border-[#2a2e33] transition-colors">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">LinkedIn</span>
            <span className="mt-1 block text-[13px] font-medium text-[#e8e8ea]">Muskan Wagh</span>
          </a>
        </div>
        <a href="mailto:muskanwagh1608@gmail.com?subject=Hello%20Muskan%20—%20from%20portfolio" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#0e0f11] hover:bg-[#ececec] transition-colors">
          Send a message
        </a>
      </div>
    </section>
  );
}
