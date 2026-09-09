import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <picture>
            <source media="(prefers-color-scheme: light)" srcSet="/White Mode EdenCORP.svg" />
            <img src="/Dark Mode EdenCORP.svg" alt="EdenCORP" className="h-6 w-auto opacity-70" />
          </picture>
          <span className="font-mono text-xs text-text-secondary">
            &copy; 2026 EdenCORP
          </span>
          <a href="https://tin.computer" className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text">
            <svg aria-hidden="true" viewBox="0 0 32 32" className="w-[1em] h-[1em]"><rect width="32" height="32" fill="#66DC9D" /></svg>
            Growth by Tin
          </a>
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
              className="text-xs font-body text-text-secondary hover:text-ember-glow transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
