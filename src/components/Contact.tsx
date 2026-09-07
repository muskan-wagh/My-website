import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1080px] px-6 py-10 md:py-14">
      <div className="h-px bg-[#1a1c1e] mb-10" aria-hidden />
      <div className="rounded-[14px] border border-[#1e2023] bg-[#151618] p-6 md:p-8">
        <h2 className="text-[18px] font-semibold tracking-[-0.02em] text-[#f2f2f3]">Contact</h2>
        <p className="mt-1 text-[14.5px] text-[#6b7280]">Open to internships and collaborations. I reply within 24 hours.</p>

        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          <a href="mailto:muskanwagh1608@gmail.com" className="group rounded-[10px] border border-[#232529] bg-[#0f1012] px-4 py-3.5 hover:border-[#2a2e33] transition-colors">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">Email</span>
            <span className="mt-1 block text-[13.5px] font-medium tracking-[-0.01em] text-[#e8e8ea] group-hover:text-white">muskanwagh1608@gmail.com</span>
          </a>
          <a href="https://github.com/muskan-wagh" target="_blank" rel="noreferrer" className="group rounded-[10px] border border-[#232529] bg-[#0f1012] px-4 py-3.5 hover:border-[#2a2e33] transition-colors">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">GitHub</span>
            <span className="mt-1 block text-[13.5px] font-medium tracking-[-0.01em] text-[#e8e8ea] group-hover:text-white">muskan-wagh</span>
          </a>
          <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noreferrer" className="group rounded-[10px] border border-[#232529] bg-[#0f1012] px-4 py-3.5 hover:border-[#2a2e33] transition-colors">
            <span className="block font-mono text-[11px] tracking-[0.08em] uppercase text-[#6b7280]">LinkedIn</span>
            <span className="mt-1 block text-[13.5px] font-medium tracking-[-0.01em] text-[#e8e8ea] group-hover:text-white">Muskan Wagh</span>
          </a>
        </div>

        <a
          href="mailto:muskanwagh1608@gmail.com?subject=Hello%20Muskan%20—%20from%20portfolio"
          className="mt-6 inline-flex items-center gap-2 rounded-[9px] bg-white px-4 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[#0e0f11] hover:bg-[#ececec] transition-colors"
        >
          Send a message <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
