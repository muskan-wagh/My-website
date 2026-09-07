import type { ReactNode } from "react";
import { cn } from "../lib/cn";

/* One reusable Card — same border, radius, padding system, hover everywhere. */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#1f1f1f] bg-[#0a0a0a]",
        "transition-colors duration-150 hover:border-[#2e2e2e] hover:bg-[#0e0e0e]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* Consistent section rhythm: clear beginning and end, no giant gaps. */
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mt-24 scroll-mt-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <div>
        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#ededed]">{title}</h2>
        {description && (
          <p className="mt-2 max-w-[560px] text-[15px] leading-[1.65] text-[#888888]">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/* Quiet link used for secondary actions. */
export function QuietLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="text-[14px] text-[#888888] transition-colors duration-150 hover:text-[#3291ff]"
    >
      {children}
    </a>
  );
}

/* Intentional neutral visual — consistent aspect, no unfinished messaging. */
export function Visual({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] items-center justify-center border-b border-[#1f1f1f] bg-[#111111]">
      <span aria-hidden className="select-none text-[32px] font-semibold tracking-[-0.03em] text-[#262626]">
        {label.charAt(0)}
      </span>
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  external,
  onClick,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center justify-center rounded-md bg-[#0070f3] px-5 py-2.5 text-[14px] font-medium text-white transition-colors duration-150 hover:bg-[#3291ff]"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center justify-center rounded-md border border-[#2e2e2e] bg-transparent px-5 py-2.5 text-[14px] font-medium text-[#ededed] transition-colors duration-150 hover:border-[#444444] hover:bg-[#0a0a0a]"
    >
      {children}
    </a>
  );
}
