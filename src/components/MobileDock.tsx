import { useLocation } from "react-router-dom";

const items = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function MobileDock() {
  const location = useLocation();
  const handle = (href: string) => {
    const id = href.replace("/#", "");
    if (location.pathname !== "/") {
      window.location.href = href;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <nav className="flex items-center gap-1 rounded-full border border-[#1e2023] bg-[#151618]/95 backdrop-blur-xl px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {items.map((it) => (
          <button
            key={it.label}
            onClick={() => handle(it.href)}
            className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[#9aa0a6] hover:text-[#e8e8ea] hover:bg-[#1e2023] transition-colors"
          >
            {it.label}
          </button>
        ))}
        <a href="/certificates" className="rounded-full px-3 py-1.5 text-[13px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
          More
        </a>
      </nav>
    </div>
  );
}
