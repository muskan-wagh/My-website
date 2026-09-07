import { projects } from "../data/projects";
import { PrimaryButton, SecondaryButton } from "./ui";

/* Editorial masthead — one connected identity block.
   Single-line name + role locked directly beneath it, framed by two
   hairline rules; below, intro/CTAs beside a selected-work index that
   pulls straight into the projects section. Typography only. */
export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedWork = projects.slice(0, 3);

  return (
    <section className="pt-12 md:pt-16">
      {/* Identity — name and role form one unit, opened by a rule. */}
      <div className="border-t border-[#1f1f1f] pt-7 md:pt-9">
        <h1 className="whitespace-nowrap text-[clamp(3rem,9.2vw,8.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#ededed]">
          Muskan Wagh
        </h1>
        <p className="mt-3 text-[19px] font-medium tracking-[-0.02em] text-[#ededed] md:mt-4 md:text-[21px]">
          Full-Stack Developer
        </p>
      </div>

      <div className="mt-8 border-t border-[#1f1f1f] md:mt-10" />

      {/* Intro + actions beside the work index — one row, one block. */}
      <div className="grid gap-10 py-8 md:grid-cols-12 md:gap-8 md:py-10">
        <div className="md:col-span-7">
          <p className="max-w-[540px] text-[16px] leading-[1.7] text-[#888888]">
            I build full-stack applications, developer tools and AI-powered
            systems using React, Next.js, Node.js and PostgreSQL.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href="#projects" onClick={scrollToProjects}>
              View projects
            </PrimaryButton>
            <SecondaryButton href="https://github.com/muskan-wagh" external>
              GitHub
            </SecondaryButton>
          </div>
        </div>

        <nav
          aria-label="Selected work"
          className="md:col-span-5 md:justify-self-end"
        >
          <p className="text-[13px] text-[#666666] md:text-right">
            Selected work
          </p>
          <ul className="mt-3 space-y-2.5 md:text-right">
            {selectedWork.map((p) => (
              <li key={p.id}>
                <a
                  href={p.live ?? p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-block text-[15px] font-medium tracking-[-0.01em] text-[#ededed] transition-colors duration-150 hover:text-[#3291ff]"
                >
                  {p.title}
                  <span
                    aria-hidden
                    className="ml-1.5 text-[#555555] transition-colors duration-150 group-hover:text-[#3291ff]"
                  >
                    ↗
                  </span>
                </a>
                <span className="mt-0.5 block text-[13px] text-[#666666]">
                  {p.subtitle}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
