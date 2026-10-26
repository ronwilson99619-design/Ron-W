import React from 'react';
import { Compass, Users, HeartHandshake, MapPin, Sparkles } from 'lucide-react';

interface TourismSectionProps {
  onOpenEnquire: (initialSubject?: string) => void;
}

export const TourismSection: React.FC<TourismSectionProps> = ({ onOpenEnquire }) => {
  return (
    <section id="tourism" className="relative w-full bg-[#3D0A1A] text-[#FAF6F0] overflow-hidden">
      {/* Full Width Image Band as requested */}
      <div className="relative min-h-[550px] lg:min-h-[640px] flex items-center">
        {/* Background photo montage with rich plum overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/dance_tours_dance_tourism_australian_ballet_london_7bdfc3c2.png"
            alt="Dance Tours dancers in London"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Rich Dark Plum Overlay (#3D0A1A) with soft gold tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D0A1A] via-[#3D0A1A]/85 to-[#3D0A1A]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#270510] via-transparent to-[#3D0A1A]/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Emotional text & core quote */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#7B1030]/80 border border-[#B8975A]/50 rounded-xs text-xs uppercase tracking-[0.25em] text-[#D4BA83] font-semibold mb-6">
                <Compass className="w-3.5 h-3.5 text-[#B8975A]" />
                <span>Worldwide Cultural Journeys</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF6F0] leading-tight mb-6">
                Making Every Country <span className="italic text-[#D4BA83]">Exciting</span> and Educational
              </h2>

              {/* Exact quote from user prompt */}
              <div className="py-4 border-l-2 border-[#B8975A] pl-5 my-6 bg-[#270510]/40 backdrop-blur-xs">
                <p className="font-serif text-xl sm:text-2xl text-[#FAF6F0] italic leading-relaxed">
                  “More than just the memories of dance, an unforgettable experience that lasts a lifetime.”
                </p>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#FAF6F0]/85 font-light leading-relaxed mb-8 max-w-2xl text-balance">
                Dance Tours creates transformative travel programs that unite rigorous masterclasses with deep cultural discovery. Dancers walk in the footsteps of history, rehearse inside world-famous theatres, and forge bonds with fellow dancers across continents.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-4 border-t border-[#B8975A]/30">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#D4BA83] font-serif text-lg">
                    <Users className="w-4 h-4 text-[#B8975A]" />
                    <span>Global Fellowship</span>
                  </div>
                  <p className="text-xs text-[#FAF6F0]/75 leading-relaxed">
                    Connecting young dancers from the UK, Japan, Australia, Spain and beyond.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#D4BA83] font-serif text-lg">
                    <MapPin className="w-4 h-4 text-[#B8975A]" />
                    <span>Curated Discovery</span>
                  </div>
                  <p className="text-xs text-[#FAF6F0]/75 leading-relaxed">
                    Ancient shrines, historic opera houses, world heritage sights and royal landmarks.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#D4BA83] font-serif text-lg">
                    <HeartHandshake className="w-4 h-4 text-[#B8975A]" />
                    <span>Safe & Seamless</span>
                  </div>
                  <p className="text-xs text-[#FAF6F0]/75 leading-relaxed">
                    Expert 24/7 chaperoning, premium private logistics, and complete parental peace of mind.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnquire('Dance & Tourism Group Tour Enquiry')}
                  className="px-8 py-3.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase border border-[#B8975A] rounded-xs shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#B8975A]" />
                  <span>Enquire About a Group Tour</span>
                </button>
                <a
                  href="#destinations"
                  className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase border border-[#FAF6F0]/40 rounded-xs transition-colors"
                >
                  View Destinations
                </a>
              </div>
            </div>

            {/* Right Column: Visual polaroid-style showcase of international tours */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Primary Card: Japan Pagoda */}
                <div className="bg-[#FAF6F0] p-3 rounded-xs shadow-2xl border border-[#B8975A]/60 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/4.5] overflow-hidden bg-black/20">
                    <img
                      src="/assets/aistudio/Dance_Tours_dance_tourism1_japan_6d7ed561.jpg"
                      alt="Dancers in Japan at Kyoto pagoda"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-[#2B2B2B] text-center">
                    <p className="font-serif italic text-base text-[#7B1030]">
                      Kyoto Shinto Shrine & Temple Expedition
                    </p>
                    <p className="text-[11px] font-sans uppercase tracking-widest text-[#57534E] mt-0.5">
                      Japan Cultural Dance Tour
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-[#7B1030] text-[#FAF6F0] p-4 border border-[#B8975A] rounded-xs shadow-xl hidden sm:block">
                  <p className="font-serif text-2xl font-bold leading-none text-[#D4BA83]">100%</p>
                  <p className="text-[10px] uppercase tracking-widest mt-1 text-white/90">Curated Itineraries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
