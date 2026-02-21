import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-sm tracking-tight">
            <span className="bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent">
              Eden
            </span>
            <span className="text-white/60">CORP</span>
          </span>
          <span className="font-mono text-xs text-gray-500">
            &copy; 2026 EdenCORP. ALL SYSTEMS NOMINAL.
          </span>
        </div>
        <div className="flex gap-6">
          <Link
            href="/about"
            className="text-xs font-mono text-gray-500 hover:text-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xs font-mono text-gray-500 hover:text-gold transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-xs font-mono text-gray-500 hover:text-gold transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs font-mono text-gray-500 hover:text-gold transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
