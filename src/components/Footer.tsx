import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg italic text-text">Eden</span>
          <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary">
            CORP
          </span>
          <span className="font-mono text-xs text-text-tertiary ml-2">
            &copy; 2026 EdenCORP
          </span>
        </div>
        <div className="flex gap-8">
          {[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-body text-text-tertiary hover:text-ember transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
