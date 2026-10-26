import React, { useState } from 'react';
import { Search, MapPin, Calendar, Sparkles, Filter, ArrowRight } from 'lucide-react';

interface QuickFilterStripProps {
  onSearch: (criteria: { destination: string; type: string; season: string }) => void;
}

export const QuickFilterStrip: React.FC<QuickFilterStripProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState<string>('all');
  const [type, setType] = useState<string>('all');
  const [season, setSeason] = useState<string>('all');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, type, season });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10">
      <form
        onSubmit={handleApply}
        className="glass-panel-light p-4 sm:p-5 rounded-md shadow-2xl border border-[#B8975A]/40 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 justify-between"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
          {/* Destination */}
          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-[#7B1030] mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B8975A]" />
              <span>Destination</span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-white border border-stone-200 rounded-sm px-3 py-2 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] cursor-pointer"
            >
              <option value="all">All Destinations (Worldwide)</option>
              <option value="japan">Japan (Tokyo & Kyoto)</option>
              <option value="uk">United Kingdom (London Covent Garden)</option>
              <option value="spain">Spain (Madrid & Seville)</option>
              <option value="australia">Australia (Sydney & Melbourne)</option>
            </select>
          </div>

          {/* Program Type */}
          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-[#7B1030] mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#B8975A]" />
              <span>Program Type</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-white border border-stone-200 rounded-sm px-3 py-2 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] cursor-pointer"
            >
              <option value="all">All Programs</option>
              <option value="workshops">British Ballet Workshops</option>
              <option value="tourism">Dance & Tourism Itineraries</option>
              <option value="productions">Ballet Stage Productions</option>
            </select>
          </div>

          {/* Season */}
          <div className="flex flex-col">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-[#7B1030] mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#B8975A]" />
              <span>Preferred Season</span>
            </label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="bg-white border border-stone-200 rounded-sm px-3 py-2 text-xs text-[#2B2B2B] focus:outline-none focus:border-[#7B1030] cursor-pointer"
            >
              <option value="all">Any Upcoming Date (2027-2028)</option>
              <option value="spring">Spring 2027</option>
              <option value="summer">Summer 2027</option>
              <option value="autumn">Autumn 2027</option>
              <option value="winter">Winter 2027/28</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="shrink-0 flex items-end">
          <button
            type="submit"
            className="w-full lg:w-auto px-6 py-2.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#B8975A]/60"
          >
            <Search className="w-3.5 h-3.5 text-[#D4BA83]" />
            <span>Search Experiences</span>
          </button>
        </div>
      </form>
    </div>
  );
};
