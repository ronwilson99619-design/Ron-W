import React, { useState, useMemo } from 'react';
import { Calculator, Users, Calendar, Award, Sparkles, Check, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

interface TourCustomizerProps {
  onApplyItinerary: (details: {
    destination: string;
    duration: string;
    groupSize: string;
    focus: string;
    estimatedCost: string;
    addons: string[];
  }) => void;
}

export const TourCustomizer: React.FC<TourCustomizerProps> = ({ onApplyItinerary }) => {
  const [destination, setDestination] = useState<'japan' | 'uk' | 'spain' | 'australia'>('japan');
  const [dancersCount, setDancersCount] = useState<number>(16);
  const [durationDays, setDurationDays] = useState<number>(10);
  const [focusTrack, setFocusTrack] = useState<string>('British Classical Syllabus & Ashton Repertoire');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Royal Opera House Backstage Passes',
    'Choreography Showcase Certificate',
  ]);

  const destinationRates = {
    japan: {
      name: 'Japan (Tokyo & Kyoto)',
      baseCost: 2150,
      dailyRate: 110,
      currency: '£',
      features: ['Shinkansen Bullet Train Transfer', 'Architanz Studio Bookings', 'Kyoto Shrine Excursion'],
    },
    uk: {
      name: 'United Kingdom (London & Covent Garden)',
      baseCost: 1850,
      dailyRate: 95,
      currency: '£',
      features: ['Covent Garden Central Studios', 'Royal Opera House Tickets', 'West End Theatrical Evening'],
    },
    spain: {
      name: 'Spain (Madrid & Seville)',
      baseCost: 1650,
      dailyRate: 85,
      currency: '£',
      features: ['Danza 180 Studio Bookings', 'Flamenco Rhythms Coaching', 'Prado Cultural Tour'],
    },
    australia: {
      name: 'Australia (Sydney & Melbourne)',
      baseCost: 2280,
      dailyRate: 120,
      currency: '£',
      features: ['Wharf Studios Harbourfront', 'Sydney Opera House Gala', 'Pacific Bridge Audition Pipeline'],
    },
  };

  const addonsList = [
    { id: 'roh', name: 'Royal Opera House Backstage Passes', cost: 75 },
    { id: 'cert', name: 'Choreography Showcase Certificate', cost: 0 },
    { id: 'video', name: '4K Multi-Camera Performance Reel', cost: 95 },
    { id: 'flamenco', name: 'Cultural Masterclass (Flamenco/Traditional)', cost: 60 },
  ];

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const calculations = useMemo(() => {
    const dest = destinationRates[destination];
    const durationMultiplier = (durationDays - 7) * dest.dailyRate;
    const addonsCost = selectedAddons.reduce((sum, name) => {
      const addon = addonsList.find((a) => a.name === name);
      return sum + (addon ? addon.cost : 0);
    }, 0);

    const groupDiscount = dancersCount >= 25 ? 0.88 : dancersCount >= 15 ? 0.93 : 1.0;
    const perDancer = Math.round((dest.baseCost + durationMultiplier + addonsCost) * groupDiscount);
    const totalGroupEstimate = perDancer * dancersCount;
    const chaperoneCount = Math.floor(dancersCount / 8);
    const totalMasterclassHours = Math.round(durationDays * 2.8);

    return {
      perDancer,
      totalGroupEstimate,
      chaperoneCount: Math.max(1, chaperoneCount),
      totalMasterclassHours,
      currency: dest.currency,
      destName: dest.name,
    };
  }, [destination, dancersCount, durationDays, selectedAddons]);

  const handleApply = () => {
    onApplyItinerary({
      destination: calculations.destName,
      duration: `${durationDays} Days`,
      groupSize: `${dancersCount} Dancers + ${calculations.chaperoneCount} Chaperone(s)`,
      focus: focusTrack,
      estimatedCost: `Approx. ${calculations.currency}${calculations.perDancer.toLocaleString()} per dancer`,
      addons: selectedAddons,
    });
  };

  return (
    <section id="customizer" className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
              Tour Configurator
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight mb-4">
            Customise Your Group’s Tour & Masterclass Itinerary
          </h2>

          <div className="modern-hairline my-6 max-w-xs mx-auto" />

          <p className="font-sans text-base sm:text-lg text-[#57534E] leading-relaxed text-balance font-light">
            Design a bespoke international package tailored to your studio's syllabus, group size, and travel dates with real-time budget and curriculum projections.
          </p>
        </div>

        {/* Modern Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-7 bg-[#FAF6F0] p-6 sm:p-10 rounded-lg border border-stone-200/80 shadow-sm space-y-8">
            {/* Step 1: Destination Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030]">
                  1. Destination & City Hub
                </label>
                <span className="text-[11px] text-[#57534E]">4 Global Centers</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'japan', label: 'Japan', sub: 'Tokyo & Kyoto' },
                  { id: 'uk', label: 'United Kingdom', sub: 'London' },
                  { id: 'spain', label: 'Spain', sub: 'Madrid' },
                  { id: 'australia', label: 'Australia', sub: 'Sydney' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDestination(item.id as any)}
                    className={`p-3.5 text-left rounded-md transition-all duration-300 cursor-pointer ${
                      destination === item.id
                        ? 'bg-[#7B1030] text-[#FAF6F0] shadow-md scale-102 border border-[#B8975A]'
                        : 'bg-white hover:bg-stone-50 text-[#2B2B2B] border border-stone-200'
                    }`}
                  >
                    <p className="font-serif text-base font-semibold leading-tight mb-0.5">{item.label}</p>
                    <p className={`text-[10px] uppercase font-sans tracking-wider ${destination === item.id ? 'text-[#D4BA83]' : 'text-[#57534E]'}`}>
                      {item.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dancers Slider with modern display */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030]">
                  2. Number of Dancers:
                </label>
                <span className="font-serif text-2xl font-semibold text-[#7B1030]">
                  {dancersCount} <span className="text-xs font-sans text-[#57534E] font-normal">Dancers</span>
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="40"
                step="1"
                value={dancersCount}
                onChange={(e) => setDancersCount(parseInt(e.target.value, 10))}
                className="w-full accent-[#7B1030] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#57534E] mt-1.5 font-sans">
                <span>Ensemble (6)</span>
                <span>Standard Troupe (18)</span>
                <span>Full Academy (40+)</span>
              </div>
            </div>

            {/* Step 3: Duration Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030] mb-3">
                3. Residency Duration:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { days: 7, label: '7 Days', desc: 'Sprint Intensive' },
                  { days: 10, label: '10 Days', desc: 'Ballet & Culture' },
                  { days: 14, label: '14 Days', desc: 'Residency & Gala' },
                ].map((item) => (
                  <button
                    key={item.days}
                    onClick={() => setDurationDays(item.days)}
                    className={`p-3.5 text-left rounded-md transition-all cursor-pointer ${
                      durationDays === item.days
                        ? 'bg-[#7B1030] text-[#FAF6F0] shadow-md border border-[#B8975A]'
                        : 'bg-white hover:bg-stone-50 text-[#2B2B2B] border border-stone-200'
                    }`}
                  >
                    <p className="font-serif text-base font-semibold">{item.label}</p>
                    <p className={`text-[10px] mt-0.5 ${durationDays === item.days ? 'text-[#D4BA83]' : 'text-[#57534E]'}`}>
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Pedagogical Track */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030] mb-2">
                4. Primary Repertoire Focus:
              </label>
              <select
                value={focusTrack}
                onChange={(e) => setFocusTrack(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-md text-xs sm:text-sm text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] cursor-pointer"
              >
                <option value="British Classical Syllabus & Ashton Repertoire">British Classical Syllabus & Frederick Ashton Repertoire</option>
                <option value="MacMillan Dramatic Storytelling & Pas de Deux">Kenneth MacMillan Dramatic Storytelling & Pas de Deux</option>
                <option value="Royal Opera House Audition Readiness & Variations">Royal Opera House Audition Readiness & Solo Variations</option>
                <option value="Vocational Classical Foundations & Epaulement">Vocational Classical Foundations & Pure Epaulement (Ages 11-15)</option>
              </select>
            </div>

            {/* Step 5: Inclusions */}
            <div>
              <label className="block text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030] mb-2.5">
                5. Bespoke Tour Privileges:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.name);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.name)}
                      className={`flex items-center gap-2.5 p-3 text-left rounded-md border text-xs transition-colors cursor-pointer ${
                        isChecked
                          ? 'border-[#7B1030] bg-[#7B1030]/10 text-[#7B1030] font-medium'
                          : 'border-stone-200 bg-white text-[#57534E] hover:border-[#B8975A]'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#7B1030] border-[#7B1030] text-white' : 'border-stone-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span className="flex-1">{addon.name}</span>
                      {addon.cost > 0 && (
                        <span className="text-[10px] text-[#8F723D] font-semibold">+£{addon.cost}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Price Summary Ticket */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#20040D] text-[#FAF6F0] p-7 sm:p-9 rounded-lg border border-[#B8975A]/50 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#D4BA83]" />
                  <span className="text-xs uppercase tracking-widest text-[#D4BA83] font-semibold">
                    Live Itinerary Proposal
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/50">
                  Ref: DT-{durationDays}D
                </span>
              </div>

              {/* Price Callout */}
              <div className="mb-6">
                <p className="text-[11px] text-white/70 uppercase tracking-wider font-sans">
                  Estimated Investment Per Dancer:
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-white">
                    {calculations.currency}{calculations.perDancer.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#D4BA83]">
                    / dancer ({durationDays} days)
                  </span>
                </div>
                <p className="text-[11px] text-white/60 mt-1.5 font-light">
                  Total troupe investment: {calculations.currency}{calculations.totalGroupEstimate.toLocaleString()} for {dancersCount} dancers.
                </p>
              </div>

              {/* Deliverables Breakdown */}
              <div className="space-y-3 py-5 border-y border-white/10 text-xs text-white/80 font-sans">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Destination:</span>
                  <span className="font-medium text-[#D4BA83]">{calculations.destName}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Duration:</span>
                  <span className="font-medium">{durationDays} Days / {durationDays - 1} Nights</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Masterclass Hours:</span>
                  <span className="font-medium text-white">{calculations.totalMasterclassHours} Hours Included</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Chaperone Allowance:</span>
                  <span className="font-medium text-[#D4BA83]">{calculations.chaperoneCount} Included Free</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">Lead Faculty:</span>
                  <span className="font-medium">Former Royal Ballet Artists</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={handleApply}
                  className="w-full py-4 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-widest rounded-md border border-[#B8975A] shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-[#D4BA83]" />
                  <span>Send This Custom Proposal to Justin</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4BA83] group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-white/60 mt-2 font-sans">
                  Auto-populates the direct enquiry form below. Justin responds personally.
                </p>
              </div>
            </div>

            {/* Reassurance badge */}
            <div className="p-4 bg-[#FAF6F0] border border-stone-200 rounded-md flex items-center gap-3 text-xs text-[#57534E]">
              <ShieldCheck className="w-5 h-5 text-[#7B1030] shrink-0" />
              <span>Full international travel coordination, private coach transfers, and bespoke safety protocols included.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
