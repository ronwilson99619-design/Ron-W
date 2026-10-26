import React from 'react';
import { ArrowRight, Star, Clapperboard, Sparkles } from 'lucide-react';
import { PRODUCTIONS_DATA } from '../data/danceToursData';

interface ProductionsSectionProps {
  onOpenProductionsModal: () => void;
  onOpenEnquire: (initialSubject?: string) => void;
}

export const ProductionsSection: React.FC<ProductionsSectionProps> = ({
  onOpenProductionsModal,
  onOpenEnquire,
}) => {
  const featuredProduction = PRODUCTIONS_DATA[0];

  return (
    <section id="productions" className="py-24 sm:py-32 bg-[#20040D] text-[#FAF6F0] relative overflow-hidden">
      {/* Decorative Theatrical Backdrop */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4BA83_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-semibold text-[#D4BA83]">
              Theatrical Stage Works
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
            World-Class Productions Featuring Dancers from The Royal Ballet
          </h2>

          <div className="modern-hairline my-6 max-w-xs mx-auto" />

          <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed text-balance">
            From glamorous international galas to evocative narrative ballets, Dance Tours stages productions of rare distinction, bringing the world's most acclaimed artists to global audiences.
          </p>
        </div>

        {/* Cinematic Widescreen Feature Card */}
        <div className="bg-[#3D0A1A]/80 border border-[#B8975A]/40 rounded-lg overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Large Dramatic Stage Image */}
            <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] overflow-hidden bg-black">
              <img
                src={featuredProduction.image}
                alt={featuredProduction.title}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040D] via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#20040D]/80 hidden lg:block" />

              {/* Tag on image */}
              <div className="absolute top-6 left-6 bg-[#7B1030]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#B8975A]/60 text-[10px] uppercase tracking-widest text-[#FAF6F0] font-sans font-semibold rounded-sm">
                Stage Production · {featuredProduction.year}
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-xs text-white/90">
                <p className="font-serif italic text-lg text-[#D4BA83] mb-0.5">
                  Laura Morera in Dangerous Liaisons
                </p>
                <p className="text-[11px] font-sans uppercase tracking-wider text-white/70">
                  {featuredProduction.location}
                </p>
              </div>
            </div>

            {/* Right: Theatrical Details */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-[#20040D]/90 to-[#3D0A1A]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4BA83] font-sans uppercase tracking-widest mb-3">
                  <Star className="w-3.5 h-3.5 fill-[#D4BA83]" />
                  <span>Featured Repertoire</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-2">
                  {featuredProduction.title}
                </h3>

                <p className="font-serif text-lg text-[#D4BA83] italic mb-6">
                  {featuredProduction.subtitle}
                </p>

                <p className="text-sm font-sans text-white/80 leading-relaxed mb-6 font-light">
                  {featuredProduction.synopsis}
                </p>

                {/* Cast credits */}
                <div className="py-4 border-y border-white/10 mb-6 space-y-2 font-sans">
                  <div className="flex items-start justify-between text-xs">
                    <span className="text-white/60 uppercase tracking-wider">Starring:</span>
                    <span className="text-white font-medium text-right">
                      {featuredProduction.starring.join(' · ')}
                    </span>
                  </div>
                  <div className="flex items-start justify-between text-xs">
                    <span className="text-white/60 uppercase tracking-wider">Direction:</span>
                    <span className="text-[#D4BA83] font-medium text-right">
                      {featuredProduction.director}
                    </span>
                  </div>
                </div>

                {/* Review snippet */}
                <div className="bg-white/5 p-4 border-l-2 border-[#D4BA83] rounded-sm mb-8">
                  <p className="text-xs italic font-serif text-white/90 leading-relaxed mb-1">
                    “{featuredProduction.reviewQuote}”
                  </p>
                  <p className="text-[10px] text-[#D4BA83] font-sans tracking-wide">
                    — {featuredProduction.reviewer}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenProductionsModal}
                  className="px-6 py-3.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase rounded-sm border border-[#B8975A] shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Clapperboard className="w-4 h-4 text-[#D4BA83]" />
                  <span>View Productions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4BA83] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenEnquire('Production & Gala Booking Enquiry')}
                  className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase border border-white/30 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4BA83]" />
                  <span>Booking Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
