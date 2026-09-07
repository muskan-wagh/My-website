import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleAnchor = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors ${
        scrolled ? "bg-[#0e0f11]/90 border-[#1e2023]" : "bg-[#0e0f11]/70 border-[#141517]"
      }`}
    >
      <div className="mx-auto max-w-[1080px] px-6 flex h-[56px] items-center justify-between gap-6">
        <Link to="/" className="text-[15px] font-semibold tracking-[-0.02em] text-[#e8e8ea] hover:text-white transition-colors">
          Muskan Wagh
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleAnchor(item.href);
              }}
              className="px-3 py-2 text-[14px] font-medium tracking-[-0.01em] text-[#9aa0a6] hover:text-[#e8e8ea] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-2 mr-1 h-4 w-px bg-[#1e2023]" aria-hidden />
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              `px-3 py-2 text-[14px] font-medium tracking-[-0.01em] transition-colors ${
                isActive ? "text-[#e8e8ea]" : "text-[#9aa0a6] hover:text-[#e8e8ea]"
              }`
            }
          >
            Certificates
          </NavLink>
          <NavLink
            to="/visuals"
            className={({ isActive }) =>
              `px-3 py-2 text-[14px] font-medium tracking-[-0.01em] transition-colors ${
                isActive ? "text-[#e8e8ea]" : "text-[#9aa0a6] hover:text-[#e8e8ea]"
              }`
            }
          >
            Visuals
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/muskan-wagh"
            target="_blank"
            rel="noreferrer"
            className="text-[13.5px] font-medium text-[#9aa0a6] hover:text-[#e8e8ea] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
            target="_blank"
            rel="noreferrer"
            className="text-[13.5px] font-medium text-[#9aa0a6] hover:text-[#e8e8ea] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:muskanwagh1608@gmail.com"
            className="ml-1 inline-flex h-[32px] items-center rounded-[8px] bg-white px-4 text-[13.5px] font-medium tracking-[-0.01em] text-[#0e0f11] hover:bg-[#ececec] transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#232529] bg-[#151618] text-[#9aa0a6]"
        >
          {open ? <X size={14} /> : <Menu size={14} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1e2023] bg-[#0e0f11]">
          <nav className="px-6 py-5 flex flex-col" aria-label="Mobile primary">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchor(item.href);
                }}
                className="py-3 text-[15px] font-medium text-[#9aa0a6] border-b border-[#141517] last:border-0 hover:text-[#e8e8ea]"
              >
                {item.label}
              </a>
            ))}
            <Link to="/certificates" className="py-3 text-[15px] font-medium text-[#9aa0a6] border-b border-[#141517]">
              Certificates
            </Link>
            <Link to="/visuals" className="py-3 text-[15px] font-medium text-[#9aa0a6] border-b border-[#141517]">
              Visuals
            </Link>
            <div className="pt-5 flex gap-2.5">
              <a
                href="https://github.com/muskan-wagh"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 rounded-[8px] border border-[#232529] bg-[#151618] py-2.5 text-[14px] font-medium text-[#e8e8ea]"
              >
                GitHub
              </a>
              <a
                href="mailto:muskanwagh1608@gmail.com"
                className="flex-1 inline-flex justify-center items-center gap-2 rounded-[8px] bg-white text-[#0e0f11] py-2.5 text-[14px] font-medium"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
