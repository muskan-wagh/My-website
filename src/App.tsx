import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileDock from "./components/MobileDock";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Visuals from "./pages/Visuals";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-[#e8e8ea]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col">
            <main className="flex-1 min-w-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/visuals" element={<Visuals />} />
              </Routes>
            </main>
            <footer className="mt-16 py-8 border-t border-[#1a1c1e] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="font-mono text-[11px] text-[#4a5058]">© {new Date().getFullYear()} Muskan Wagh · Built with React · Dark system</p>
              <div className="flex items-center gap-4 font-mono text-[11px] text-[#6b7280]">
                <a href="https://github.com/muskan-wagh" target="_blank" rel="noreferrer" className="hover:text-[#e8e8ea]">GitHub</a>
                <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noreferrer" className="hover:text-[#e8e8ea]">LinkedIn</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <MobileDock />
    </div>
  );
}
