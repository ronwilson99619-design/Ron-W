import React, { useState } from 'react';
import { MapPin, Calendar, Check, ArrowRight, Globe2, Clock, Sparkles } from 'lucide-react';
import { DESTINATIONS_DATA, DestinationItem, DESTINATION_ITINERARIES, DayItinerary } from '../data/danceToursData';

interface DestinationsSectionProps {
  onOpenEnquire: (initialSubject?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onOpenEnquire }) => {
  const [selectedDestination, setSelectedDestination] = useState<DestinationItem>(DESTINATIONS_DATA[0]);
  const [viewMode, setViewMode] = useState<'overview' | 'itinerary'>('overview');

  const currentItinerary: DayItinerary[] = DESTINATION_ITINERARIES[selectedDestination.id] || [];

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
              Global Itineraries & Schedules
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight mb-4">
            Destinations Visited Around the Globe
          </h2>

          <div className="opera-hairline my-6 max-w-xs mx-auto" />

          <p className="font-sans text-base sm:text-lg text-[#57534E] leading-relaxed text-balance">
            Explore the historic cities, grand stages, and cultural crossroads where Dance Tours has guided dancers and mounted unforgettable performances.
          </p>
        </div>

        {/* Countries Row / Strip as requested */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {DESTINATIONS_DATA.map((dest) => {
            const isSelected = dest.id === selectedDestination.id;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className={`px-5 py-3 rounded-xs font-serif text-base sm:text-lg transition-all duration-300 flex items-center gap-2.5 shrink-0 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#7B1030] text-[#FAF6F0] border-[#B8975A] shadow-md scale-102'
                    : 'bg-white text-[#2B2B2B] border-[#B8975A]/25 hover:border-[#B8975A] hover:bg-[#FAF6F0]'
                }`}
              >
                <span className="text-xl">{dest.flag}</span>
                <span className="font-medium">{dest.country}</span>
                <span className={`text-xs uppercase font-sans tracking-widest ml-1 ${isSelected ? 'text-[#D4BA83]' : 'text-[#57534E]'}`}>
                  {dest.cities}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Mode Switcher: Overview vs Day-by-Day Schedule */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white border border-[#B8975A]/30 rounded-xs shadow-xs">
            <button
              onClick={() => setViewMode('overview')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                viewMode === 'overview'
                  ? 'bg-[#7B1030] text-[#FAF6F0]'
                  : 'text-[#57534E] hover:text-[#2B2B2B]'
              }`}
            >
              Tour Overview & Highlights
            </button>
            <button
              onClick={() => setViewMode('itinerary')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'itinerary'
                  ? 'bg-[#7B1030] text-[#FAF6F0]'
                  : 'text-[#57534E] hover:text-[#2B2B2B]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#B8975A]" />
              <span>Day-by-Day Schedule ({currentItinerary.length} Days)</span>
            </button>
          </div>
        </div>

        {viewMode === 'overview' ? (
          /* Active Destination Feature Card */
          <div className="bg-white border border-[#B8975A]/30 rounded-xs shadow-xl overflow-hidden transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Image Showcase using supplied photos */}
              <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-[#3D0A1A]">
                <img
                  src={selectedDestination.image}
                  alt={`${selectedDestination.country} Dance Tours`}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 bg-[#FAF6F0]/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#B8975A] text-xs font-sans font-semibold tracking-wider text-[#7B1030] uppercase shadow-xs">
                  Featured Country: {selectedDestination.country}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4BA83] mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedDestination.cities}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0]">
                    {selectedDestination.tagline}
                  </h3>
                </div>
              </div>

              {/* Right Details Panel */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#FAF6F0]/60">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#B8975A]/25 mb-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#7B1030] font-semibold">
                      <Calendar className="w-4 h-4 text-[#B8975A]" />
                      <span>Typical Duration:</span>
                    </div>
                    <span className="font-serif text-lg font-medium text-[#2B2B2B]">
                      {selectedDestination.duration}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-[#57534E] leading-relaxed mb-6">
                    {selectedDestination.story}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest text-[#2B2B2B] font-semibold mb-3">
                      Curated Tour Highlights:
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedDestination.keyHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2B2B2B]">
                          <span className="w-4 h-4 rounded-full bg-[#7B1030]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#7B1030]">
                            <Check className="w-3 h-3 text-[#7B1030]" />
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#B8975A]/25 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onOpenEnquire(`Tour Enquiry for ${selectedDestination.country} (${selectedDestination.cities})`)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase rounded-xs border border-[#B8975A] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>Enquire for {selectedDestination.country}</span>
                    <ArrowRight className="w-4 h-4 text-[#B8975A]" />
                  </button>

                  <button
                    onClick={() => setViewMode('itinerary')}
                    className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-[#FAF6F0] text-[#7B1030] text-xs font-semibold tracking-wider uppercase rounded-xs border border-[#B8975A]/40 transition-colors cursor-pointer"
                  >
                    View Day Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Day-by-Day Interactive Schedule Table */
          <div className="bg-white border border-[#B8975A]/35 p-6 sm:p-10 rounded-xs shadow-xl animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#B8975A]/25 mb-8 gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#7B1030] font-semibold font-sans">
                  Sample Itinerary Plan
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B]">
                  {selectedDestination.country} ({selectedDestination.cities}): Day-by-Day Schedule
                </h3>
              </div>
              <button
                onClick={() => onOpenEnquire(`Customise Day-by-Day Schedule for ${selectedDestination.country}`)}
                className="px-5 py-2.5 bg-[#7B1030] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#B8975A] transition-colors cursor-pointer self-start sm:self-auto"
              >
                Request Custom Schedule
              </button>
            </div>

            <div className="space-y-4">
              {currentItinerary.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xs border border-[#B8975A]/20 hover:border-[#B8975A] transition-colors bg-[#FAF6F0]/40"
                >
                  <div className="flex items-center gap-3 sm:w-36 shrink-0">
                    <span className="w-8 h-8 rounded-full bg-[#7B1030] text-[#FAF6F0] font-serif text-sm font-semibold flex items-center justify-center shrink-0">
                      D{item.day}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-sans font-semibold text-[#7B1030] uppercase">
                        Day 0{item.day}
                      </span>
                      <span className="text-[10px] text-[#57534E] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#B8975A]" />
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-serif text-base sm:text-lg font-medium text-[#2B2B2B]">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#57534E] mt-0.5 leading-relaxed">
                      {item.activity}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className={`text-[10px] uppercase tracking-wider font-sans font-semibold px-2.5 py-1 rounded-xs border ${
                      item.type === 'dance'
                        ? 'bg-[#7B1030]/10 border-[#7B1030]/30 text-[#7B1030]'
                        : item.type === 'performance'
                        ? 'bg-[#3D0A1A]/10 border-[#3D0A1A]/30 text-[#3D0A1A]'
                        : 'bg-[#B8975A]/15 border-[#B8975A]/40 text-[#92753F]'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#B8975A]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#57534E]">
                * Itineraries can be tailored to match your school term dates, rehearsals, and performance requests.
              </p>
              <button
                onClick={() => setViewMode('overview')}
                className="text-xs text-[#7B1030] hover:text-[#580B22] underline underline-offset-4 cursor-pointer"
              >
                ← Back to Country Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

