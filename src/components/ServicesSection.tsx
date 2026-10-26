import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/danceToursData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="pt-24 pb-28 sm:pt-32 sm:pb-36 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
              Our Three Pillars
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight mb-4">
            The Pinnacle of British Ballet Artistry & Worldwide Dance Journeys
          </h2>

          <div className="modern-hairline my-6 max-w-xs mx-auto" />

          <p className="font-sans text-base sm:text-lg text-[#57534E] leading-relaxed text-balance font-light">
            Rooted in the lyrical grace of London's Covent Garden, Dance Tours offers bespoke international programs
            tailored to dancers, schools, and audiences seeking uncompromising classical excellence.
          </p>
        </div>

        {/* Three Tall Modern Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-white rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-stone-200/80 hover:border-[#B8975A] cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              {/* Tall Image Viewport */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#20040D]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />

                {/* Modern Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040D] via-[#20040D]/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

                {/* Minimalist Editorial Number */}
                <div className="absolute top-5 left-5 font-serif text-3xl font-light text-[#FAF6F0]/70 tracking-widest">
                  0{index + 1}
                </div>

                {/* Title Lockup over Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-semibold text-[#D4BA83] block mb-1.5">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[#FAF6F0] tracking-tight leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-1 bg-white">
                <p className="font-sans text-sm text-[#57534E] leading-relaxed mb-6 font-light">
                  {service.shortDesc}
                </p>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#7B1030] group-hover:text-[#580B22] transition-colors">
                    <span>Discover more</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8975A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[11px] font-sans text-stone-400 tracking-wider">
                    Syllabus & Info
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
