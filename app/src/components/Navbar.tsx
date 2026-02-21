"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/orchard", label: "Orchard" },
  { href: "/prism", label: "PRISM" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-glow-card">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center no-underline group"
            style={{ filter: "drop-shadow(0 0 12px rgba(255,215,0,0.15))" }}
          >
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent">
              Eden
            </span>
            <span className="font-display font-bold text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">
              CORP
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white hover:text-gold"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`mobile-nav-overlay fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm ${
          mobileOpen ? "active" : ""
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <div className="mobile-nav-drawer absolute right-0 top-0 h-full w-72 bg-void border-l border-white/10 p-8 flex flex-col">
          <button
            className="self-end text-white/60 hover:text-gold"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-6 mt-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-display font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-gold"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
