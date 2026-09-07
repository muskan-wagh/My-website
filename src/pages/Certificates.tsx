import { certificates } from "../data/certificates";
import { Card, Visual } from "../components/ui";

export default function Certificates() {
  return (
    <div className="pb-4 pt-16 md:pt-20">
      <h1 className="text-[32px] font-semibold tracking-[-0.03em] text-[#ededed]">
        Certificates
      </h1>
      <p className="mt-2 max-w-[560px] text-[15px] leading-[1.65] text-[#888888]">
        Certifications and recognitions.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <Card key={c.title} className="flex h-full flex-col overflow-hidden">
            <Visual label={c.title} />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-[15px] font-medium leading-[1.4] tracking-[-0.01em] text-[#ededed]">
                {c.title}
              </h2>
              <p className="mt-1.5 text-[14px] text-[#888888]">{c.issuer}</p>
              <p className="mt-0.5 text-[13px] text-[#888888]">{c.year}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 border-t border-[#1f1f1f] pt-4 text-[14px] text-[#888888] transition-colors duration-150 hover:text-[#ededed] hover:underline hover:underline-offset-4"
                >
                  View credential
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
