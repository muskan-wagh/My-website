import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Visuals from "./pages/Visuals";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-[#ededed]">
      <ScrollToTop />
      <Navbar />
      <div className="mx-auto max-w-[1120px] px-6">
        <main className="pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/visuals" element={<Visuals />} />
          </Routes>
        </main>
        <footer className="mt-24 flex flex-col gap-3 border-t border-[#161616] py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#888888]">
            © {new Date().getFullYear()} Muskan Wagh
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/muskan-wagh"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[#888888] transition-colors duration-150 hover:text-[#ededed]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muskan-wagh-22b2b5325"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[#888888] transition-colors duration-150 hover:text-[#ededed]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:muskanwagh1608@gmail.com"
              className="text-[13px] text-[#888888] transition-colors duration-150 hover:text-[#ededed]"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
