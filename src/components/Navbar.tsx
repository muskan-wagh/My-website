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
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-[-0.02em] text-[#ededed]"
        >
          Muskan Wagh
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {anchors.map((a) => (
            <button
              key={a.id}
              onClick={() => goAnchor(a.id)}
              className="text-[14px] text-[#888888] transition-colors duration-150 hover:text-[#ededed]"
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
                  "text-[14px] transition-colors duration-150 hover:text-[#ededed]",
                  isActive ? "text-[#ededed]" : "text-[#888888]"
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
            className="rounded-md bg-[#ededed] px-3.5 py-1.5 text-[13px] font-medium text-black transition-colors duration-150 hover:bg-white"
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#1f1f1f] text-[#a1a1a1] md:hidden"
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
                    "rounded-md px-2 py-2.5 text-[15px] transition-colors hover:bg-[#0a0a0a] hover:text-[#ededed]",
                    isActive ? "text-[#ededed]" : "text-[#a1a1a1]"
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
