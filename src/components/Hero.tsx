import { SecondaryButton } from "./ui";

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pb-4 pt-20 md:pt-28">
      <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#ededed] md:text-[56px]">
        Muskan Wagh
      </h1>
      <p className="mt-3 text-[19px] tracking-[-0.02em] text-[#a1a1a1] md:text-[21px]">
        Full-Stack Developer
      </p>
      <p className="mt-5 max-w-[600px] text-[16px] leading-[1.7] text-[#888888]">
        I build full-stack applications, developer tools and AI-powered systems using React,
        Next.js, Node.js and PostgreSQL.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          onClick={scrollToProjects}
          className="inline-flex items-center justify-center rounded-md bg-[#ededed] px-5 py-2.5 text-[14px] font-medium text-black transition-colors duration-150 hover:bg-white"
        >
          View projects
        </a>
        <SecondaryButton href="https://github.com/muskan-wagh" external>
          GitHub
        </SecondaryButton>
      </div>
    </section>
  );
}

