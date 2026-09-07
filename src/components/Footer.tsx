export default function Footer() {
  return (
    <footer className="border-t border-[#1a1c1e]">
      <div className="mx-auto max-w-[1080px] px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] text-[#6b7280]">© {new Date().getFullYear()} Muskan Wagh</p>
        <div className="flex items-center gap-5 text-[13px]">
          <a href="https://github.com/muskan-wagh" target="_blank" rel="noreferrer" className="text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" target="_blank" rel="noreferrer" className="text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:muskanwagh1608@gmail.com" className="text-[#6b7280] hover:text-[#e8e8ea] transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
