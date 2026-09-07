import { experiences } from "../data/experience";
import { Section, SectionHeader } from "./ui";

/* Editorial experience — individual entries separated by whitespace and a
   single hairline each. No container card, no timeline, no icons. */
export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" />

      <div className="mt-10 border-t border-[#1f1f1f]">
        {experiences.map((e) => (
          <article
            key={e.role}
            className="group -mx-3 rounded-lg border-b border-[#161616] px-3 py-7 transition-colors duration-150 hover:bg-white/[0.02] sm:-mx-5 sm:px-5 md:py-8"
          >
            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-8">
              <div>
                <h3 className="text-[16px] font-medium tracking-[-0.01em] text-[#ededed]">
                  {e.role}
                </h3>
                <p className="mt-1 text-[14px] text-[#888888]">{e.org}</p>
                <p className="mt-3 max-w-[620px] text-[14.5px] leading-[1.65] text-[#a1a1a1]">
                  {e.description}
                </p>
              </div>
              <p className="shrink-0 text-[13px] tabular-nums text-[#666666] transition-colors duration-150 group-hover:text-[#a1a1a1] sm:pt-[3px] sm:text-right">
                {e.period}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
