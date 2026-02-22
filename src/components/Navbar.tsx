"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-void/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-0.5 no-underline group" data-nav-logo>
            <span className="font-display text-2xl text-text tracking-tight italic">
              Eden
            </span>
            <span className="font-body font-semibold text-sm tracking-[0.15em] uppercase text-text-secondary group-hover:text-ember transition-colors duration-200">
              CORP
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-body font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-text"
                    : "text-text-secondary hover:text-ember"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-ember"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-text-secondary hover:text-ember transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-void/95 backdrop-blur-lg flex flex-col"
            onClick={(e) => {
              if (e.target === e.currentTarget) setMobileOpen(false);
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                className="text-text-secondary hover:text-ember transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-display transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-ember"
                        : "text-text-secondary hover:text-text"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
