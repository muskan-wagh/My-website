import { projects } from "../data/projects";
import { Card, QuietLink, Section, SectionHeader, Visual } from "./ui";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        title="Projects"
        description="Selected full-stack work. Each project is live and open source."
        action={
          <QuietLink href="https://github.com/muskan-wagh?tab=repositories">
            View all
          </QuietLink>
        }
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.id} className="flex h-full flex-col overflow-hidden">
            <Visual label={p.title} />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[#ededed]">
                {p.title}
              </h3>
              <p className="mt-0.5 text-[14px] text-[#888888]">{p.subtitle}</p>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#a1a1a1]">
                {p.description}
              </p>
              <p className="mt-4 font-mono text-[12px] leading-[1.6] text-[#888888]">
                {p.tech.join(" · ")}
              </p>
              <div className="mt-5 flex items-center gap-2 border-t border-[#1f1f1f] pt-4 text-[14px]">
                {p.live && (
                  <>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#ededed] transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-4"
                    >
                      Live Demo
                    </a>
                    <span aria-hidden className="text-[#333333]">
                      ·
                    </span>
                  </>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#888888] transition-colors duration-150 hover:text-[#ededed] hover:underline hover:underline-offset-4"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
