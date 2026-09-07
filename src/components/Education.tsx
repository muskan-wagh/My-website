import { Card, Section, SectionHeader } from "./ui";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader title="Education" />

      <Card className="mt-8 p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[#ededed]">
            B.Tech, Computer Science
          </h3>
          <p className="shrink-0 text-[13px] text-[#888888]">2023 — 2027</p>
        </div>
        <p className="mt-0.5 text-[14px] text-[#888888]">SAGE University Indore</p>
        <p className="mt-2 max-w-[640px] text-[14px] leading-[1.65] text-[#a1a1a1]">
          Focus on full-stack development and scalable web architecture.
        </p>
      </Card>
    </Section>
  );
}
