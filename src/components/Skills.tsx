import { skillGroups } from "../data/skills";
import { Section, SectionHeader } from "./ui";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title="Skills" />

      <div className="mt-8">
        {skillGroups.map((g, i) => (
          <div
            key={g.label}
            className={
              i === 0
                ? "flex flex-col gap-1 py-4 sm:flex-row sm:gap-8"
                : "flex flex-col gap-1 border-t border-[#161616] py-4 sm:flex-row sm:gap-8"
            }
          >
            <p className="w-28 shrink-0 text-[14px] font-medium text-[#ededed]">{g.label}</p>
            <p className="text-[14px] leading-[1.7] text-[#888888]">{g.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
