import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Visuals from "./pages/Visuals";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-[#e8e8ea] flex flex-col selection:bg-[rgba(45,201,125,0.22)]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/visuals" element={<Visuals />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
