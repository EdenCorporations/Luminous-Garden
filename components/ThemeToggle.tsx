"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("eden-theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("light", !next);
      localStorage.setItem("eden-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex items-center w-[52px] h-[28px] rounded-full border
        bg-white/[0.08] border-white/[0.15]
        dark:bg-white/[0.08] dark:border-white/[0.15]
        light:bg-black/[0.06] light:border-black/[0.15]
        transition-all duration-300 p-[2px]"
    >
      <span
        className={`flex items-center justify-center w-[22px] h-[22px] rounded-full
          shadow-[0_0_8px_rgba(255,215,0,0.2)] transition-all duration-300
          ${dark ? "translate-x-0 bg-[#1a1a1a]" : "translate-x-6 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.2)]"}`}
      >
        {dark ? (
          <Moon className="w-3.5 h-3.5 text-gold" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-[#333]" />
        )}
      </span>
    </button>
  );
}
