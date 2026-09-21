"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

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
  const mobileDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = mobileDialog.current;
    if (!mobileOpen || !dialog) return;

    // Native modal focus containment keeps the covered page out of keyboard navigation.
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousOverflow;
      dialog.close();
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-void/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link prefetch={false} href="/" className="flex items-center no-underline">
            <span data-nav-logo className="flex">
              <picture>
                <img width={2000} height={2000} src="/Dark Mode EdenCORP.svg" alt="EdenCORP" className="h-25 w-auto" />
              </picture>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link prefetch={false}
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
            type="button"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="md:hidden min-h-11 min-w-11 flex items-center justify-center text-text-secondary hover:text-ember transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <dialog
        ref={mobileDialog}
        id="mobile-navigation"
        aria-label="Navigation"
        onCancel={() => setMobileOpen(false)}
        className="fixed inset-0 z-[60] m-0 h-dvh w-full max-h-none max-w-none border-0 p-0 bg-void/95 backdrop-blur-lg backdrop:bg-transparent open:flex flex-col overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            type="button"
            aria-label="Close navigation"
            className="min-h-11 min-w-11 flex items-center justify-center text-text-secondary hover:text-ember transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-6">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
            >
              <Link prefetch={false}
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
      </dialog>
    </>
  );
}
