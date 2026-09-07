import { projects, secondaryProjects } from "../data/projects";
import { Card, Visual } from "../components/ui";

const all = [...projects, ...secondaryProjects];

export default function Visuals() {
  return (
    <div className="pb-4 pt-16 md:pt-20">
      <h1 className="text-[32px] font-semibold tracking-[-0.03em] text-[#ededed]">Visuals</h1>
      <p className="mt-2 max-w-[560px] text-[15px] leading-[1.65] text-[#888888]">
        Project previews.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {all.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <Visual label={p.title} />
            <div className="p-5">
              <h2 className="text-[15px] font-medium tracking-[-0.01em] text-[#ededed]">
                {p.title}
              </h2>
              <p className="mt-0.5 text-[14px] text-[#888888]">{p.subtitle}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
