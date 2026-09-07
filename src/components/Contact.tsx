import { Section, SectionHeader } from "./ui";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        title="Contact"
        description="Open to internships and collaborations. I reply within 24 hours."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:muskanwagh1608@gmail.com?subject=Hello%20Muskan%20—%20from%20portfolio"
          className="inline-flex items-center justify-center rounded-md bg-[#ededed] px-5 py-2.5 text-[14px] font-medium text-black transition-colors duration-150 hover:bg-white"
        >
          Send email
        </a>
        <a
          href="https://github.com/muskan-wagh"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-[#2e2e2e] px-5 py-2.5 text-[14px] font-medium text-[#ededed] transition-colors duration-150 hover:border-[#444444] hover:bg-[#0a0a0a]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-[#2e2e2e] px-5 py-2.5 text-[14px] font-medium text-[#ededed] transition-colors duration-150 hover:border-[#444444] hover:bg-[#0a0a0a]"
        >
          LinkedIn
        </a>
      </div>
      <p className="mt-6 text-[14px] text-[#888888]">muskanwagh1608@gmail.com</p>
    </Section>
  );
}
