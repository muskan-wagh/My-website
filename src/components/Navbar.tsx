import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/cn";

const anchors = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const routes = [
  { label: "Certificates", to: "/certificates" },
  { label: "Visuals", to: "/visuals" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goAnchor = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // wait for home to mount before scrolling
      setTimeout(() => scrollToId(id), 80);
      return;
    }
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#161616] bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
        {/* Name — left anchored, hover reveals profile card */}
        <div className="group relative">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-md text-[15px] font-semibold tracking-[-0.02em] text-[#ededed] transition-colors duration-150 hover:text-white"
          >
            Muskan Wagh
          </Link>

          {/* Hover profile card */}
          <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <div className="w-72 rounded-lg border border-[#1f1f1f] bg-[#0a0a0a] p-5 shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(0,112,243,0.14)] text-[15px] font-semibold text-[#3291ff]"
                >
                  M
                </span>
                <div>
                  <p className="text-[14px] font-medium text-[#ededed]">Muskan Wagh</p>
                  <p className="text-[13px] text-[#888888]">Full-Stack Developer</p>
                </div>
              </div>
              <div className="mt-4 space-y-1.5 border-t border-[#1f1f1f] pt-4 text-[13px] leading-[1.6] text-[#888888]">
                <p>B.Tech CS · SAGE University Indore</p>
                <p>React · Next.js · Node.js · PostgreSQL</p>
                <p className="flex items-center gap-1.5 text-[#a1a1a1]">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
                  Available for internships
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4 border-t border-[#1f1f1f] pt-4 text-[13px]">
                <a
                  href="https://github.com/muskan-wagh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#888888] transition-colors duration-150 hover:text-[#3291ff]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#888888] transition-colors duration-150 hover:text-[#3291ff]"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:muskanwagh1608@gmail.com"
                  className="text-[#888888] transition-colors duration-150 hover:text-[#3291ff]"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {anchors.map((a) => (
            <button
              key={a.id}
              onClick={() => goAnchor(a.id)}
              className="rounded-md px-3 py-1.5 text-[14px] text-[#888888] transition-colors duration-150 hover:bg-[#111111] hover:text-[#ededed]"
            >
              {a.label}
            </button>
          ))}
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-1.5 text-[14px] transition-colors duration-150 hover:bg-[#111111]",
                  isActive ? "text-[#3291ff]" : "text-[#888888] hover:text-[#ededed]"
                )
              }
            >
              {r.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://github.com/muskan-wagh"
            target="_blank"
            rel="noreferrer"
            className="text-[14px] text-[#888888] transition-colors duration-150 hover:text-[#ededed]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
            target="_blank"
            rel="noreferrer"
            className="text-[14px] text-[#888888] transition-colors duration-150 hover:text-[#ededed]"
          >
            LinkedIn
          </a>
          <button
            onClick={() => goAnchor("contact")}
            className="rounded-md bg-[#0070f3] px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors duration-150 hover:bg-[#3291ff]"
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#1f1f1f] text-[#a1a1a1] transition-colors duration-150 hover:border-[#2e2e2e] hover:text-[#ededed] md:hidden"
        >
          <span className="text-[16px] leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-[#161616] px-6 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {anchors.map((a) => (
              <button
                key={a.id}
                onClick={() => goAnchor(a.id)}
                className="rounded-md px-2 py-2.5 text-left text-[15px] text-[#a1a1a1] transition-colors hover:bg-[#0a0a0a] hover:text-[#ededed]"
              >
                {a.label}
              </button>
            ))}
            {routes.map((r) => (
              <NavLink
                key={r.to}
                to={r.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-2 py-2.5 text-[15px] transition-colors hover:bg-[#0a0a0a]",
                    isActive ? "text-[#3291ff]" : "text-[#a1a1a1] hover:text-[#ededed]"
                  )
                }
              >
                {r.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-5 border-t border-[#161616] px-2 pt-4">
              <a
                href="https://github.com/muskan-wagh"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-[#888888] hover:text-[#ededed]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-[#888888] hover:text-[#ededed]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
