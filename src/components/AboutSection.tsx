import React from 'react';
import { Award, Compass, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/danceToursData';

interface AboutSectionProps {
  onOpenEnquire: (initialSubject?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquire }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden border-t border-[#B8975A]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Emblem & Portrait Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white border border-[#B8975A]/40 p-4 sm:p-6 shadow-xl">
              {/* Emblem Header with Crisp Burgundy Logo on Ivory as required */}
              <div className="p-4 bg-[#FAF6F0] border border-[#B8975A]/30 flex items-center justify-center mb-6">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Dance Tours Crest"
                  className="h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="aspect-[4/3] overflow-hidden bg-[#3D0A1A] mb-4">
                <img
                  src="/assets/aistudio/Laura_morera_dance_tours_workshop_spain_madrid_55e3eb41.png"
                  alt="Dance Tours Masterclass"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center pt-2">
                <p className="font-serif italic text-base text-[#7B1030]">
                  “Dance. Travel. Inspire.”
                </p>
                <p className="text-[11px] font-sans uppercase tracking-widest text-[#57534E] mt-1">
                  Founder & Artistic Director: {COMPANY_INFO.owner}
                </p>
                <p className="text-[10px] font-sans text-[#8F723D] tracking-wider mt-1.5 uppercase font-medium">
                  Designed by Vintage Design Lab
                </p>
              </div>

              {/* Classical Corner Notches */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#B8975A]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#B8975A]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#B8975A]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#B8975A]" />
            </div>
          </div>

          {/* Right Column: Editorial Monograph Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B8975A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
                About Dance Tours
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight mb-6">
              A Legacy Born from the World's Greatest Ballet Stages
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#57534E] leading-relaxed mb-6 font-light">
              Dance Tours was created with a clear and singular ambition: to share the timeless artistry, musical precision, and theatrical emotion of the British classical ballet tradition with dancers and audiences across the globe.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#57534E] leading-relaxed mb-8">
              Founded and directed by <strong>{COMPANY_INFO.owner}</strong>, Dance Tours collaborates directly with celebrated figures from London's Royal Opera House, including former Royal Ballet Principal Dancers and Senior Ballet Masters. Whether coaching vocational students in Tokyo and Madrid, curating educational journeys through Covent Garden, or mounting full-scale theatrical productions like <em>Royal Night of Elegance</em>, every experience is guided by reverence for the art form.
            </p>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#B8975A]/25 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2B2B2B] font-medium">
                    Royal Ballet Lineage
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                    Coaching rooted directly in Ashton and MacMillan repertory.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2B2B2B] font-medium">
                    Worldwide Vision
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                    Tours linking the UK, Japan, Australia, Spain, and Europe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2B2B2B] font-medium">
                    Empathetic Mentorship
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                    Nurturing confidence, stage presence, and joy in every student.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2B2B2B] font-medium">
                    Impeccable Care
                  </h4>
                  <p className="text-xs text-[#57534E] leading-relaxed mt-0.5">
                    Comprehensive safety, dedicated chaperones, and complete trust.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenEnquire('General Enquiry regarding Dance Tours Story & Programs')}
              className="px-6 py-3 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase rounded-xs border border-[#B8975A] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Speak with Justin</span>
              <ArrowRight className="w-4 h-4 text-[#B8975A]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
