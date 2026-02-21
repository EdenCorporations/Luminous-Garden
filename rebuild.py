#!/usr/bin/env python3
"""Rebuild all EdenCORP pages with unified head, nav, footer, and styles."""
import re
from pathlib import Path

BASE = Path('/Users/mb/Documents/Github/Luminous Garden/site/public')

# ── SHARED TAILWIND CONFIG ──────────────────────────────────────────────

SHARED_TAILWIND_CONFIG = """
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "void": "#0A0A0A",
              "primary": "#FFD700",
              "gold": "#FFD700",
              "secondary": "#FFA500",
              "amber": "#FFA500",
              "amber-glow": "#FFA500",
              "obsidian": "#0F1419",
              "surface": "#0F1419",
              "muted": "#A1A1AA",
              "electric-blue": "#2D5BFF",
              "border-glass": "rgba(255, 255, 255, 0.12)",
              "glass-border": "rgba(255, 255, 255, 0.12)",
              "glass-fill": "rgba(15, 20, 25, 0.6)",
              "background-dark": "#0A0A0A",
              "background-light": "#f8f8f5",
              "primary-dim": "#b39600",
              "card-dark": "rgba(255, 255, 255, 0.03)",
            },
            fontFamily: {
              "display": ["Space Grotesk", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "mono": ["Space Mono", "monospace"],
              "sans": ["Inter", "sans-serif"],
            },
            backgroundImage: {
              'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              'void-gradient': 'radial-gradient(circle at center, #1a1a1a 0%, #0A0A0A 100%)',
              'grid-pattern': "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
            },
            boxShadow: {
              'glow-gold': '0 0 30px -5px rgba(255, 215, 0, 0.15)',
              'glow-card': '0 0 20px -5px rgba(255, 215, 0, 0.05)',
              'inner-gold': 'inset 0 0 20px rgba(255, 215, 0, 0.05)',
              'glow': '0 0 30px -10px rgba(255, 215, 0, 0.15)',
              'glow-hover': '0 0 50px -10px rgba(255, 215, 0, 0.3)',
              'input-focus': '0 4px 20px -5px rgba(255, 215, 0, 0.3)',
            },
            animation: {
              'breathe': 'breathe 8s ease-in-out infinite',
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'float': 'float 6s ease-in-out infinite',
              'spin-slow': 'spin 20s linear infinite',
              'spin-reverse-slow': 'spin 15s linear infinite reverse',
            },
            keyframes: {
              breathe: {
                '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
                '50%': { transform: 'scale(1.1)', opacity: '1' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
              }
            }
          },
        },
      }
"""

# ── SHARED CSS ──────────────────────────────────────────────────────────

SHARED_CSS = """
        body {
            background-color: #0A0A0A;
            color: white;
            overflow-x: hidden;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #FFD700; }

        /* Glassmorphism */
        .glass-panel {
            background: rgba(15, 20, 25, 0.4);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .glass-panel-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-panel-hover:hover {
            background: rgba(15, 20, 25, 0.8);
            border-color: rgba(255, 215, 0, 0.4);
            transform: translateY(-4px);
            box-shadow: 0 0 30px -10px rgba(255, 215, 0, 0.15);
        }

        /* Glass alias (for about page compatibility) */
        .glass {
            background: rgba(15, 20, 25, 0.4);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .tracking-tighter-custom { letter-spacing: -0.04em; }

        /* Scroll Reveal */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }

        /* Mobile Nav */
        .mobile-nav-overlay {
            opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
        }
        .mobile-nav-overlay.active {
            opacity: 1; pointer-events: auto;
        }
        .mobile-nav-drawer {
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-nav-overlay.active .mobile-nav-drawer {
            transform: translateX(0);
        }

        /* Page Transition */
        @keyframes pageEnter {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        body { animation: pageEnter 0.4s ease-out; }
        body.page-leaving {
            opacity: 0 !important;
            transform: translateY(-8px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        /* Button press feedback */
        button:active, a[class*="border-gold"]:active {
            transform: scale(0.97) !important;
            transition: transform 0.1s ease;
        }

        /* Theme Toggle */
        .theme-toggle {
            background: none; border: none; cursor: pointer; padding: 0;
        }
        .theme-toggle-track {
            display: flex; align-items: center;
            width: 52px; height: 28px; border-radius: 14px;
            background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
            padding: 2px; transition: all 0.3s ease; position: relative;
        }
        .theme-toggle-thumb {
            width: 22px; height: 22px; border-radius: 50%;
            background: #1a1a1a; display: flex; align-items: center; justify-content: center;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); position: relative;
            box-shadow: 0 0 8px rgba(255,215,0,0.2);
        }
        .theme-icon-dark { color: #FFD700; display: block; }
        .theme-icon-light { color: #333; display: none; position: absolute; }
        html.light .theme-toggle-track {
            background: rgba(0,0,0,0.06); border-color: rgba(0,0,0,0.15);
        }
        html.light .theme-toggle-thumb {
            transform: translateX(24px); background: #fff;
            box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        html.light .theme-icon-dark { display: none; }
        html.light .theme-icon-light { display: block; }

        /* Light Mode Overrides */
        html.light body { background-color: #FAFAF8; color: #1a1a1a; }
        html.light ::-webkit-scrollbar-track { background: #FAFAF8; }
        html.light ::-webkit-scrollbar-thumb { background: #ccc; }
        html.light ::-webkit-scrollbar-thumb:hover { background: #b8960a; }
        html.light .glass-panel, html.light .glass {
            background: rgba(255,255,255,0.7); border-color: rgba(0,0,0,0.08);
        }
        html.light .glass-panel-hover:hover {
            background: rgba(255,255,255,0.9); border-color: rgba(184,150,10,0.4);
            box-shadow: 0 4px 30px -10px rgba(0,0,0,0.1);
        }
        html.light .mobile-nav-drawer { background: #FAFAF8; border-color: rgba(0,0,0,0.1); }
        html.light footer { border-color: rgba(0,0,0,0.1); }
"""

# ── SHARED HEAD BUILDER ─────────────────────────────────────────────────

def build_head(title, extra_css=""):
    return f"""<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>{title}</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script>{SHARED_TAILWIND_CONFIG}</script>
<style>{SHARED_CSS}{extra_css}
</style>
</head>"""

# ── SHARED NAV BUILDER ──────────────────────────────────────────────────

def build_nav(active_page):
    pages = [
        ("Home", "index.html"),
        ("Orchard", "orchard.html"),
        ("PRISM", "prism.html"),
        ("About", "about.html"),
        ("Contact", "contact.html"),
    ]

    desktop_links = []
    mobile_links = []
    for label, href in pages:
        if label == active_page:
            desktop_links.append(f'<a class="text-sm font-medium text-white" href="{href}">{label}</a>')
            mobile_links.append(f'<a class="text-lg font-display font-medium text-white" href="{href}">{label}</a>')
        else:
            desktop_links.append(f'<a class="text-sm font-medium text-gray-400 hover:text-gold transition-colors" href="{href}">{label}</a>')
            mobile_links.append(f'<a class="text-lg font-display font-medium text-gray-400 hover:text-gold transition-colors" href="{href}">{label}</a>')

    desktop_html = "\n".join(desktop_links)
    mobile_html = "\n".join(mobile_links)

    return f"""
<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
<div class="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-glow-card">
<a href="index.html" class="flex items-center no-underline group" style="filter: drop-shadow(0 0 12px rgba(255,215,0,0.15));">
<span class="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent">Eden</span><span class="font-display font-bold text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">CORP</span>
</a>
<div class="hidden md:flex items-center gap-8">
{desktop_html}
</div>
<div class="hidden md:flex items-center">
<button onclick="toggleTheme()" class="theme-toggle" aria-label="Toggle theme">
<span class="theme-toggle-track">
<span class="theme-toggle-thumb">
<span class="material-symbols-outlined text-sm theme-icon-dark">dark_mode</span>
<span class="material-symbols-outlined text-sm theme-icon-light">light_mode</span>
</span>
</span>
</button>
</div>
<button class="md:hidden text-white hover:text-gold" onclick="toggleMobileNav()">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<!-- Mobile Navigation -->
<div class="mobile-nav-overlay fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" id="mobileNav" onclick="if(event.target===this)toggleMobileNav()">
<div class="mobile-nav-drawer absolute right-0 top-0 h-full w-72 bg-void border-l border-white/10 p-8 flex flex-col">
<button class="self-end text-white/60 hover:text-gold" onclick="toggleMobileNav()">
<span class="material-symbols-outlined text-2xl">close</span>
</button>
<div class="flex flex-col gap-6 mt-12">
{mobile_html}
</div>
<div class="mt-auto pb-8 flex items-center justify-between">
<span class="text-sm text-gray-500 font-mono">Theme</span>
<button onclick="toggleTheme()" class="theme-toggle" aria-label="Toggle theme">
<span class="theme-toggle-track">
<span class="theme-toggle-thumb">
<span class="material-symbols-outlined text-sm theme-icon-dark">dark_mode</span>
<span class="material-symbols-outlined text-sm theme-icon-light">light_mode</span>
</span>
</span>
</button>
</div>
</div>
</div>
"""

# ── SHARED FOOTER ───────────────────────────────────────────────────────

SHARED_FOOTER = """
<!-- Footer -->
<footer class="w-full border-t border-white/10 py-8 mt-auto">
<div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex items-center gap-3">
<span class="font-display font-bold text-sm tracking-tight"><span class="bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent">Eden</span><span class="text-white/60">CORP</span></span>
<span class="font-mono text-xs text-gray-500">&copy; 2026 EdenCORP. ALL SYSTEMS NOMINAL.</span>
</div>
<div class="flex gap-6">
<a class="text-xs font-mono text-gray-500 hover:text-gold transition-colors" href="about.html">About</a>
<a class="text-xs font-mono text-gray-500 hover:text-gold transition-colors" href="contact.html">Contact</a>
<a class="text-xs font-mono text-gray-500 hover:text-gold transition-colors" href="#">Privacy</a>
<a class="text-xs font-mono text-gray-500 hover:text-gold transition-colors" href="#">Terms</a>
</div>
</div>
</footer>
"""

# ── SHARED SCRIPT ───────────────────────────────────────────────────────

SHARED_SCRIPT = """
<script>
// Theme toggle
function toggleTheme() {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('eden-theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
}
(function() {
    if (localStorage.getItem('eden-theme') === 'light') document.documentElement.classList.add('light');
})();

// Mobile nav toggle
function toggleMobileNav() {
    document.getElementById('mobileNav').classList.toggle('active');
}

// Scroll reveal
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('revealed');
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Smooth page transitions
document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.endsWith('.html') && !href.startsWith('http')) {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.add('page-leaving');
            setTimeout(() => { window.location.href = href; }, 300);
        });
    }
});
</script>
"""

# ── PAGE-SPECIFIC EXTRA CSS ─────────────────────────────────────────────

INDEX_EXTRA_CSS = """
        /* Orb Simulation */
        .orb-core {
            background: radial-gradient(circle at center, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.05) 40%, transparent 70%);
            filter: blur(40px);
        }
        .particle { position: absolute; background: #FFD700; border-radius: 50%; opacity: 0.6; }
        .grid-bg {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
"""

ORCHARD_EXTRA_CSS = """
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .glass-input { background: transparent; border-bottom: 1px solid rgba(255, 255, 255, 0.12); }
        .text-gradient-gold {
            background: linear-gradient(to right, #FFD700, #FFA500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
"""

PRISM_EXTRA_CSS = """
        .glass-card {
            background: rgba(15, 20, 25, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s ease;
        }
        .glass-card:hover {
            border-color: rgba(255, 215, 0, 0.4);
            box-shadow: 0 0 30px -10px rgba(255, 215, 0, 0.15);
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 15px -5px rgba(255, 215, 0, 0.1); border-color: rgba(255, 215, 0, 0.3); }
            50% { box-shadow: 0 0 25px -5px rgba(255, 215, 0, 0.3); border-color: rgba(255, 215, 0, 0.8); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s infinite ease-in-out; }
        .glow-text { text-shadow: 0 0 20px rgba(255, 215, 0, 0.4); }
        .dashboard-grid {
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .code-text { font-family: 'Space Mono', monospace; }
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(500%); }
        }
"""

CONTACT_EXTRA_CSS = """
        /* Range Slider */
        input[type=range] { -webkit-appearance: none; background: transparent; }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 24px; width: 24px; border-radius: 50%;
            background: #FFFFFF; border: 2px solid #FFD700;
            box-shadow: 0 0 15px 2px rgba(255, 215, 0, 0.6);
            cursor: pointer; margin-top: -10px; position: relative; z-index: 20;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%; height: 4px; cursor: pointer; background: #27272a; border-radius: 2px;
        }
        input[type=range]:focus::-webkit-slider-runnable-track { background: #27272a; }
        input[type=range]::-moz-range-thumb {
            height: 24px; width: 24px; border-radius: 50%;
            background: #FFFFFF; border: 2px solid #FFD700;
            box-shadow: 0 0 15px 2px rgba(255, 215, 0, 0.6); cursor: pointer;
        }
        input[type=range]::-moz-range-track {
            width: 100%; height: 4px; cursor: pointer; background: #27272a; border-radius: 2px;
        }
        .orb-glow {
            position: absolute; width: 600px; height: 600px;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, rgba(10, 10, 10, 0) 70%);
            border-radius: 50%; pointer-events: none; z-index: 0; filter: blur(60px);
        }
        input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus,
        textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus,
        select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus {
            -webkit-text-fill-color: white;
            -webkit-box-shadow: 0 0 0px 1000px #0F1419 inset;
            transition: background-color 5000s ease-in-out 0s;
        }
"""

ABOUT_EXTRA_CSS = """
        .glow-primary { box-shadow: 0 0 20px rgba(255, 215, 0, 0.15); }
        .text-glow { text-shadow: 0 0 10px rgba(255, 215, 0, 0.3); }
        .bg-radial-gradient {
            background: radial-gradient(circle at top right, rgba(0, 102, 255, 0.08), transparent 40%);
        }
"""

# ── CONTENT EXTRACTION HELPERS ──────────────────────────────────────────

def extract_between(html, start_marker, end_marker, include_start=False, include_end=False):
    """Extract text between markers."""
    si = html.find(start_marker)
    ei = html.find(end_marker, si + len(start_marker) if si >= 0 else 0)
    if si < 0 or ei < 0:
        raise ValueError(f"Markers not found: '{start_marker}' / '{end_marker}'")
    result_start = si if include_start else si + len(start_marker)
    result_end = ei + len(end_marker) if include_end else ei
    return html[result_start:result_end]

def add_reveal_to_sections(html):
    """Add reveal class to <section> tags that don't already have it."""
    # Find section tags and add reveal class
    def add_reveal(match):
        tag = match.group(0)
        if 'reveal' in tag:
            return tag
        if 'class="' in tag:
            return tag.replace('class="', 'class="reveal ')
        else:
            return tag.replace('<section', '<section class="reveal"')
    return re.sub(r'<section[^>]*>', add_reveal, html)


# ══════════════════════════════════════════════════════════════════════════
#  REBUILD EACH PAGE
# ══════════════════════════════════════════════════════════════════════════

# ── INDEX.HTML ──────────────────────────────────────────────────────────

def rebuild_index():
    html = (BASE / 'index.html').read_text()

    # Extract main content (between </nav> and <footer>)
    nav_end = html.find('</nav>')
    if nav_end < 0:
        raise ValueError("Can't find </nav> in index.html")
    nav_end += len('</nav>')

    footer_start = html.find('<!-- Footer Simple -->')
    if footer_start < 0:
        footer_start = html.find('<footer')
    if footer_start < 0:
        raise ValueError("Can't find footer in index.html")

    main_content = html[nav_end:footer_start]
    main_content = add_reveal_to_sections(main_content)

    new_html = build_head("EdenCORP - The Greenhouse", INDEX_EXTRA_CSS)
    new_html += '\n<body class="font-body selection:bg-gold selection:text-void">'
    new_html += build_nav("Home")
    new_html += main_content
    new_html += SHARED_FOOTER
    new_html += SHARED_SCRIPT
    new_html += '\n</body></html>\n'

    (BASE / 'index.html').write_text(new_html)
    print("  ✓ index.html rebuilt")


# ── ORCHARD.HTML ────────────────────────────────────────────────────────

def rebuild_orchard():
    html = (BASE / 'orchard.html').read_text()

    # Extract ambient background (between <body> and <!-- Navigation -->)
    body_end = html.find('>', html.find('<body')) + 1
    nav_comment = html.find('<!-- Navigation -->')
    ambient_bg = html[body_end:nav_comment] if nav_comment > body_end else ""

    # Extract main content (between </header> and <!-- Footer Simple -->)
    header_end = html.find('</header>')
    if header_end < 0:
        raise ValueError("Can't find </header> in orchard.html")
    header_end += len('</header>')

    footer_start = html.find('<!-- Footer Simple -->')
    if footer_start < 0:
        footer_start = html.find('<footer')
    if footer_start < 0:
        raise ValueError("Can't find footer in orchard.html")

    main_content = html[header_end:footer_start]
    main_content = add_reveal_to_sections(main_content)

    new_html = build_head("EdenCORP - The Orchard", ORCHARD_EXTRA_CSS)
    new_html += '\n<body class="font-body selection:bg-gold selection:text-void min-h-screen flex flex-col">'
    new_html += ambient_bg
    new_html += build_nav("Orchard")
    # Add spacer for fixed nav
    new_html += '\n<!-- Nav Spacer -->\n<div class="h-24"></div>\n'
    new_html += main_content
    new_html += SHARED_FOOTER
    new_html += SHARED_SCRIPT
    new_html += '\n</body></html>\n'

    (BASE / 'orchard.html').write_text(new_html)
    print("  ✓ orchard.html rebuilt")


# ── PRISM.HTML ──────────────────────────────────────────────────────────

def rebuild_prism():
    html = (BASE / 'prism.html').read_text()

    # Extract main content (the <main> tag through </main>)
    main_start = html.find('<main')
    main_end = html.find('</main>') + len('</main>')
    if main_start < 0 or main_end < 0:
        raise ValueError("Can't find <main>...</main> in prism.html")

    main_content = html[main_start:main_end]
    main_content = add_reveal_to_sections(main_content)

    new_html = build_head("EdenCORP - PRISM Deep Dive", PRISM_EXTRA_CSS)
    new_html += '\n<body class="font-body selection:bg-gold selection:text-void min-h-screen flex flex-col">'
    new_html += build_nav("PRISM")
    new_html += '\n' + main_content
    new_html += SHARED_FOOTER
    new_html += SHARED_SCRIPT
    new_html += '\n</body></html>\n'

    (BASE / 'prism.html').write_text(new_html)
    print("  ✓ prism.html rebuilt")


# ── CONTACT.HTML ────────────────────────────────────────────────────────

def rebuild_contact():
    html = (BASE / 'contact.html').read_text()

    # Extract main content (<main> through </main>)
    main_start = html.find('<main')
    main_end = html.find('</main>') + len('</main>')
    if main_start < 0 or main_end < 0:
        raise ValueError("Can't find <main>...</main> in contact.html")

    main_content = html[main_start:main_end]

    # Also extract the budget slider script
    script_start = html.find('<script>\n        // Simple script')
    script_end = html.find('</script>', script_start) + len('</script>') if script_start >= 0 else -1
    slider_script = html[script_start:script_end] if script_start >= 0 else ""

    new_html = build_head("EdenCORP - Contact", CONTACT_EXTRA_CSS)
    new_html += '\n<body class="font-body selection:bg-gold selection:text-void min-h-screen flex flex-col antialiased">'
    new_html += build_nav("Contact")
    new_html += '\n' + main_content
    new_html += SHARED_FOOTER
    if slider_script:
        new_html += '\n' + slider_script
    new_html += SHARED_SCRIPT
    new_html += '\n</body></html>\n'

    (BASE / 'contact.html').write_text(new_html)
    print("  ✓ contact.html rebuilt")


# ── ABOUT.HTML ──────────────────────────────────────────────────────────

def rebuild_about():
    html = (BASE / 'about.html').read_text()

    # Extract main content (from <!-- Hero Section --> to <!-- Footer -->)
    hero_start = html.find('<!-- Hero Section -->')
    footer_start = html.find('<!-- Footer -->')
    if hero_start < 0:
        raise ValueError("Can't find <!-- Hero Section --> in about.html")
    if footer_start < 0:
        footer_start = html.find('<footer')

    main_content = html[hero_start:footer_start]
    main_content = add_reveal_to_sections(main_content)

    new_html = build_head("EdenCORP - About", ABOUT_EXTRA_CSS)
    new_html += '\n<body class="font-body selection:bg-gold selection:text-void">'
    new_html += build_nav("About")
    new_html += '\n' + main_content
    new_html += SHARED_FOOTER
    new_html += SHARED_SCRIPT
    new_html += '\n</body></html>\n'

    (BASE / 'about.html').write_text(new_html)
    print("  ✓ about.html rebuilt")


# ══════════════════════════════════════════════════════════════════════════
#  MAIN
# ══════════════════════════════════════════════════════════════════════════

if __name__ == "__main__":
    print("Rebuilding EdenCORP pages with unified design system...\n")

    # Backup originals
    backup_dir = BASE.parent / 'backup'
    backup_dir.mkdir(exist_ok=True)
    for f in BASE.glob('*.html'):
        (backup_dir / f.name).write_text(f.read_text())
    print(f"  ✓ Backed up originals to {backup_dir}\n")

    try:
        rebuild_index()
        rebuild_orchard()
        rebuild_prism()
        rebuild_contact()
        rebuild_about()
        print("\n✅ All pages rebuilt successfully!")
        print("\nUnified across all pages:")
        print("  • Floating pill navbar (homepage style)")
        print("  • Working mobile hamburger menu")
        print("  • Consistent Tailwind config & color tokens")
        print("  • Unified glass-panel styling")
        print("  • Matching scrollbar")
        print("  • Consistent footer")
        print("  • Scroll-triggered reveal animations")
    except Exception as e:
        print(f"\n❌ Error: {e}")
        print("  Restoring from backups...")
        for f in backup_dir.glob('*.html'):
            (BASE / f.name).write_text(f.read_text())
        print("  ✓ Restored originals")
        raise
