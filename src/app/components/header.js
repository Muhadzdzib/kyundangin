"use client";

import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [lang, setLang] = useState("Ind");
  const lastScrollY = useRef(0);

  const menus = [
    { label: "Home", link: "hero" },
    { label: "Template", link: "contoh" },
    { label: "Fitur", link: "fitur" },
    { label: "Harga", link: "harga" },
    { label: "Kontak", link: "kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrollspy
      const sections = menus.map((m) => document.getElementById(m.link));
      for (let section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section.id);
            break;
          }
        }
      }
      // show/hide header
      if (window.scrollY < 10) {
        setShowHeader(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      setShowHeader(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } bg-white/30 backdrop-blur-md`}
      style={{
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Container, desktop tetap, mobile ada padding */}
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center py-4 px-4 md:px-0 font-jakarta text-[#34656D]">
        {/* Logo */}
        <div className="font-bold text-4xl">
          Kyundang <span className="text-xl">tautan</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu, idx) => (
            <a
              key={idx}
              href={`#${menu.link}`}
              className={`relative pb-1 font-medium transition border-t-2 ${
                activeSection === menu.link
                  ? "border-[#34656D] text-[#34656D]"
                  : "border-transparent text-[#34656D] hover:border-[#34656D]"
              }`}
            >
              {menu.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-1 bg-[#34656D] rounded"></span>
          <span className="block w-7 h-1 bg-[#34656D] rounded"></span>
          <span className="block w-7 h-1 bg-[#34656D] rounded"></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-4 right-4 bg-white/90 backdrop-blur-md shadow-md rounded-lg z-20 flex flex-col py-4 px-6 md:hidden animate-fade-in">
            {menus.map((menu, idx) => (
              <a
                key={idx}
                href={`#${menu.link}`}
                className={`py-2 font-medium transition ${
                  activeSection === menu.link
                    ? "text-[#34656D]"
                    : "text-gray-800 hover:text-[#09DCD5]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {menu.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
