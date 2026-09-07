import { Link, NavLink, useLocation } from "react-router-dom";

const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Sidebar() {
  const location = useLocation();

  const handleAnchor = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop masthead */}
      <aside className="hidden lg:flex lg:flex-col lg:w-[300px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen py-10">
        {/* identity */}
        <Link to="/" className="block">
          <div className="leading-[0.85] tracking-[-0.05em]">
            <span className="block text-[38px] font-semibold text-[#f2f2f3]">Muskan</span>
            <span className="block text-[38px] font-semibold text-[#f2f2f3]">Wagh</span>
          </div>
          <span className="mt-3 block font-mono text-[11px] tracking-[0.16em] uppercase text-[#6b7280]">Full-Stack Developer</span>
          <span className="mt-2 block text-[13px] leading-[1.5] text-[#6b7280]">Indore · B.Tech CS, SAGE University</span>
        </Link>

        {/* nav — vertical, product-like */}
        <nav className="mt-10 space-y-0.5" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleAnchor(item.href);
              }}
              className="group flex items-center justify-between rounded-[9px] px-3 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[#9aa0a6] hover:bg-[#151618] hover:text-[#e8e8ea] transition-colors"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[11px] text-[#3a3f45] group-hover:text-[#6b7280] transition-colors">↗</span>
            </a>
          ))}
          <div className="my-3 h-px bg-[#1a1c1e]" aria-hidden />
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `flex items-center justify-between rounded-[9px] px-3 py-2.5 text-[14px] font-medium tracking-[-0.01em] transition-colors ${
                isActive ? "bg-[#151618] text-[#e8e8ea]" : "text-[#9aa0a6] hover:bg-[#151618] hover:text-[#e8e8ea]"
              }`
            }
          >
            Certificates <span className="font-mono text-[11px] text-[#3a3f45]">↗</span>
          </NavLink>
          <NavLink
            to="/visuals"
            className={({ isActive }) =>
              `flex items-center justify-between rounded-[9px] px-3 py-2.5 text-[14px] font-medium tracking-[-0.01em] transition-colors ${
                isActive ? "bg-[#151618] text-[#e8e8ea]" : "text-[#9aa0a6] hover:bg-[#151618] hover:text-[#e8e8ea]"
              }`
            }
          >
            Visuals <span className="font-mono text-[11px] text-[#3a3f45]">↗</span>
          </NavLink>
        </nav>

        {/* bottom meta — restrained */}
        <div className="mt-auto pt-8 space-y-5">
          <div className="rounded-[12px] border border-[#1e2023] bg-[#151618] p-4">
            <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#e8e8ea]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2dc97d]" aria-hidden />
              Available for internships
            </p>
            <p className="mt-1 text-[12.5px] leading-[1.5] text-[#6b7280]">Replies within 24 hours. Open to product and AI roles.</p>
            <a href="mailto:muskanwagh1608@gmail.com" className="mt-3 block font-mono text-[12.5px] text-[#9aa0a6] hover:text-[#2dc97d] transition-colors">
              muskanwagh1608@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 px-1">
            <a href="https://github.com/muskan-wagh" target="_blank" rel="noreferrer" className="text-[13px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noreferrer" className="text-[13px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
              LinkedIn
            </a>
            <a href="mailto:muskanwagh1608@gmail.com" className="text-[13px] font-medium text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
              Email
            </a>
          </div>
          <p className="px-1 font-mono text-[11px] text-[#3a3f45]">© {new Date().getFullYear()} Muskan Wagh</p>
        </div>
      </aside>

      {/* Mobile header — minimal, name as anchor */}
      <header className="lg:hidden flex items-center justify-between py-6">
        <Link to="/" className="leading-none">
          <span className="block text-[20px] font-semibold tracking-[-0.04em] text-[#f2f2f3] leading-none">Muskan Wagh</span>
          <span className="block mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-[#6b7280]">Full-Stack Developer</span>
        </Link>
        <a href="mailto:muskanwagh1608@gmail.com" className="inline-flex h-8 items-center rounded-full bg-white px-4 text-[13px] font-medium text-[#0e0f11]">
          Contact
        </a>
      </header>
    </>
  );
}
