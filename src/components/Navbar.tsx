import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, ShieldAlert, Search, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/danceToursData';

interface NavbarProps {
  onOpenEnquire: (initialSubject?: string) => void;
  onOpenAdmin?: () => void;
  onQuickSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquire, onOpenAdmin, onQuickSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Workshops', href: '#workshops' },
    { name: 'Tour Configurator', href: '#customizer' },
    { name: 'Dance & Tourism', href: '#tourism' },
    { name: 'Productions', href: '#productions' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      {/* Sleek Top Status & Director Utility Ribbon */}
      <div className="bg-[#20040D] text-[#FAF6F0] text-[11px] py-1.5 px-4 sm:px-6 border-b border-[#B8975A]/25 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 tracking-widest uppercase font-sans text-[#FAF6F0]/75">
            <span className="hidden sm:inline text-[#D4BA83] font-medium">The Royal Ballet Heritage</span>
            <span className="hidden sm:inline text-[#B8975A]/40">/</span>
            <span>Worldwide Workshops & Productions</span>
            <span className="hidden xl:inline text-[#B8975A]/40">·</span>
            <span className="hidden xl:inline text-[#D4BA83]/80 font-medium">Designed by Vintage Design Lab</span>
          </div>

          <div className="flex items-center gap-4 text-[#FAF6F0]/85">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#D4BA83] hover:text-white px-2 py-0.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#B8975A]/30 transition-all cursor-pointer"
              >
                <ShieldAlert className="w-3 h-3 text-[#B8975A]" />
                <span>Director Portal</span>
              </button>
            )}

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#D4BA83] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B8975A]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <span className="hidden md:inline text-[#B8975A]/40">·</span>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#D4BA83] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#B8975A]" />
              <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Modern Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6F0]/90 backdrop-blur-xl shadow-lg border-b border-[#B8975A]/30 py-2.5'
            : 'bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#B8975A]/20 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Modern Brand Lockup (Logo kept crisp on ivory) */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 shrink-0 group focus:outline-none"
          >
            <div className="h-11 sm:h-12 w-auto p-1 bg-white rounded-md shadow-xs border border-[#B8975A]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Dance Tours Logo"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#7B1030] leading-none">
                Dance Tours
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#8F723D] font-semibold mt-0.5">
                British Ballet Worldwide
              </span>
            </div>
          </a>

          {/* Zone 2: Modern Editorial Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-[#2B2B2B] hover:text-[#7B1030] transition-colors relative py-1 group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B8975A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Modern Actions (Quick Tour Search + Enquire CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {onQuickSearch && (
              <button
                onClick={onQuickSearch}
                className="p-2 text-[#57534E] hover:text-[#7B1030] hover:bg-white rounded-full border border-stone-200/80 transition-colors cursor-pointer hidden sm:flex items-center justify-center"
                title="Search workshops and destinations"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => onOpenEnquire()}
              className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] rounded-sm shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-[#B8975A]/60"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4BA83] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#7B1030] lg:hidden rounded-sm hover:bg-stone-200/50 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#B8975A]/20 bg-[#FAF6F0]/98 backdrop-blur-xl px-5 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium tracking-wide uppercase text-[#2B2B2B] hover:text-[#7B1030] hover:bg-[#7B1030]/5 rounded-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#B8975A]/20 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquire();
                  }}
                  className="w-full py-3 bg-[#7B1030] text-[#FAF6F0] font-semibold text-xs tracking-widest uppercase rounded-sm border border-[#B8975A]"
                >
                  Enquire Now
                </button>
                <div className="text-center text-xs text-[#57534E] pt-2">
                  <span>Founder: {COMPANY_INFO.owner} · {COMPANY_INFO.phone}</span>
                  <p className="text-[10px] text-[#8F723D] uppercase tracking-wider font-medium mt-1">
                    Designed by Vintage Design Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
