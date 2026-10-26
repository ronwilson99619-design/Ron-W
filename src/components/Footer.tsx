import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/danceToursData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#3D0A1A] text-[#FAF6F0] relative overflow-hidden border-t-2 border-[#B8975A]">
      {/* Decorative Top Hairline */}
      <div className="opera-hairline" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          {/* Column 1: Logo & Mission (kept on ivory background so burgundy stays crisp) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block p-2.5 bg-[#FAF6F0] rounded-xs shadow-md border border-[#B8975A]/60">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Dance Tours Brand Mark"
                className="h-14 sm:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <span className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF6F0] block">
                Dance Tours
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#D4BA83] font-semibold">
                British Ballet Artistry · Global Stage
              </span>
            </div>

            <p className="font-sans text-sm text-[#FAF6F0]/80 leading-relaxed max-w-sm font-light">
              Taking the poetic beauty, technical precision, and dramatic mastery of British classical ballet to dancers, academies, and audiences worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#270510] border border-[#B8975A]/40 flex items-center justify-center text-[#D4BA83] hover:bg-[#7B1030] hover:text-white transition-colors"
                aria-label="Dance Tours Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#270510] border border-[#B8975A]/40 flex items-center justify-center text-[#D4BA83] hover:bg-[#7B1030] hover:text-white transition-colors"
                aria-label="Dance Tours Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xs bg-[#270510] border border-[#B8975A]/40 flex items-center justify-center text-[#D4BA83] hover:bg-[#7B1030] hover:text-white transition-colors"
                aria-label="Dance Tours YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#D4BA83] font-medium tracking-wide border-b border-[#B8975A]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans text-xs tracking-wider uppercase">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'British Workshops', href: '#workshops' },
                { name: 'Dance & Tourism', href: '#tourism' },
                { name: 'Royal Stage Productions', href: '#productions' },
                { name: 'Countries Visited', href: '#destinations' },
                { name: 'Photo Gallery', href: '#gallery' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Enquire for Groups', href: '#enquire' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#FAF6F0]/80 hover:text-[#D4BA83] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details & Administration */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-[#D4BA83] font-medium tracking-wide border-b border-[#B8975A]/30 pb-2">
              Contact & Administration
            </h4>

            <div className="space-y-3 text-xs text-[#FAF6F0]/85 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B8975A] shrink-0 mt-0.5" />
                <span>London, United Kingdom (Operating Globally)</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B8975A] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#D4BA83] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B8975A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#D4BA83] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-[#FAF6F0]/60">
                <p>Artistic Director & Tour Curator: <strong>{COMPANY_INFO.owner}</strong></p>
                <p className="mt-1">In association with premier dancers of The Royal Ballet & International Companies.</p>
                <div className="mt-3 pt-3 border-t border-[#B8975A]/20 flex items-center gap-1.5 text-xs text-[#D4BA83]">
                  <span className="font-serif italic text-sm text-[#D4BA83]">Digital Experience</span>
                  <span className="text-[#B8975A]/40">·</span>
                  <span className="font-sans font-medium text-white/90">Designed by Vintage Design Lab</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-[#B8975A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/60 font-sans">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span>© {new Date().getFullYear()} Dance Tours. All rights reserved.</span>
            <span className="hidden sm:inline text-[#B8975A]/40">·</span>
            <span>Refined in the tradition of the Royal Opera House.</span>
            <span className="hidden sm:inline text-[#B8975A]/40">·</span>
            <span className="text-[#D4BA83] font-medium">Designed by Vintage Design Lab</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D4BA83] hover:text-[#FAF6F0] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
