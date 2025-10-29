import { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#technology', label: 'Technology' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-[#0a0e27]/70 border-b border-white/5' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_#00d4ff66]"></div>
          <span className="text-white font-semibold tracking-wide">ZODIC</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-md border border-cyan-500/50 px-4 py-2 text-sm text-cyan-200 hover:text-white hover:border-cyan-400 transition-colors"
          >
            <LogIn size={16} /> Login
          </a>
          <a
            href="#get-started"
            className="relative inline-flex items-center rounded-md bg-cyan-500/90 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition-colors shadow-[0_0_24px_#00d4ff66]"
          >
            Get Started
            <span className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/10" />
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 text-gray-200 hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0e27]/95">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#login" className="flex-1 rounded-md border border-cyan-500/50 px-3 py-2 text-center text-sm text-cyan-200 hover:text-white hover:border-cyan-400">Login</a>
              <a href="#get-started" className="flex-1 rounded-md bg-cyan-500/90 px-3 py-2 text-center text-sm font-medium text-black hover:bg-cyan-400">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
