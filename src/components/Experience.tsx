import { experiences } from "../data/experience";
import { Card, Section, SectionHeader } from "./ui";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" />

      <Card className="mt-8 px-6 py-2">
        {experiences.map((e, i) => (
          <div
            key={e.role}
            className={
              i === 0
                ? "py-5"
                : "border-t border-[#1f1f1f] py-5"
            }
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[#ededed]">
                {e.role}
              </h3>
              <p className="shrink-0 text-[13px] text-[#888888]">{e.period}</p>
            </div>
            <p className="mt-0.5 text-[14px] text-[#888888]">{e.org}</p>
            <p className="mt-2 max-w-[640px] text-[14px] leading-[1.65] text-[#a1a1a1]">
              {e.description}
            </p>
          </div>
        ))}
      </Card>
    </Section>
  );
}
