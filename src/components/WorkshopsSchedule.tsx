import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { UpcomingWorkshop, UPCOMING_WORKSHOPS } from '../data/danceToursData';

interface WorkshopsScheduleProps {
  workshopsList: UpcomingWorkshop[];
  onSelectRegister: (workshop: UpcomingWorkshop) => void;
  onOpenEnquire: (subject?: string) => void;
}

export const WorkshopsSchedule: React.FC<WorkshopsScheduleProps> = ({
  workshopsList,
  onSelectRegister,
  onOpenEnquire,
}) => {
  const [seasonFilter, setSeasonFilter] = useState<string>('all');
  const [levelFilter, setLevelFilter] = useState<string>('all');

  const filteredWorkshops = workshopsList.filter((ws) => {
    const matchesSeason = seasonFilter === 'all' || ws.season.toLowerCase().includes(seasonFilter.toLowerCase());
    const matchesLevel = levelFilter === 'all' || ws.level.toLowerCase().includes(levelFilter.toLowerCase());
    return matchesSeason && matchesLevel;
  });

  return (
    <div className="mt-20 pt-16 border-t border-[#B8975A]/30">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-6 h-[1px] bg-[#B8975A]" />
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
            Live Calendar & Availability
          </span>
          <span className="w-6 h-[1px] bg-[#B8975A]" />
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B] font-normal">
          Upcoming British Ballet Intensives (2027 – 2028)
        </h3>
        <p className="font-sans text-sm text-[#57534E] mt-2">
          Direct coaching with Royal Ballet masters. Class capacities strictly capped at 24–32 dancers for individual corrections.
        </p>
      </div>

      {/* Dynamic Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3.5 border border-[#B8975A]/25 rounded-xs shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans text-[#57534E] font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#B8975A]" />
            <span>Season:</span>
          </span>
          {[
            { id: 'all', label: 'All Seasons' },
            { id: 'spring', label: 'Spring 2027' },
            { id: 'summer', label: 'Summer 2027' },
            { id: 'autumn', label: 'Autumn 2027' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSeasonFilter(item.id)}
              className={`px-3 py-1 text-xs rounded-xs font-sans transition-colors cursor-pointer ${
                seasonFilter === item.id
                  ? 'bg-[#7B1030] text-[#FAF6F0] font-semibold'
                  : 'bg-[#FAF6F0] text-[#57534E] hover:text-[#2B2B2B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-sans text-[#57534E] font-medium whitespace-nowrap">Level:</span>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="text-xs bg-[#FAF6F0] border border-[#B8975A]/30 rounded-xs px-2.5 py-1.5 text-[#2B2B2B] focus:outline-none focus:border-[#7B1030]"
          >
            <option value="all">All Age Groups</option>
            <option value="vocational">Vocational (11-14)</option>
            <option value="pre-professional">Pre-Professional (15-22)</option>
            <option value="advanced">All Advanced</option>
          </select>
        </div>
      </div>

      {/* Workshop Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredWorkshops.map((ws) => {
          const isLowSpots = ws.spotsLeft <= 5 && ws.spotsLeft > 0;
          const isSoldOut = ws.spotsLeft === 0;

          return (
            <div
              key={ws.id}
              className="bg-white border border-[#B8975A]/30 p-6 sm:p-7 rounded-xs shadow-md hover:border-[#B8975A] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#B8975A]/20 mb-4">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#B8975A] font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{ws.city}, {ws.country}</span>
                  </span>

                  {/* Live Spots Left Badge */}
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      isSoldOut ? 'bg-zinc-400' : isLowSpots ? 'bg-amber-600 animate-pulse' : 'bg-emerald-600'
                    }`} />
                    <span className={`text-[11px] font-sans font-semibold uppercase tracking-wider ${
                      isSoldOut ? 'text-zinc-500' : isLowSpots ? 'text-amber-700' : 'text-emerald-700'
                    }`}>
                      {isSoldOut ? 'Sold Out' : `${ws.spotsLeft} Spots Remaining`}
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-[#2B2B2B] font-medium leading-snug mb-1">
                  {ws.title}
                </h4>
                <p className="font-serif italic text-sm text-[#7B1030] mb-4">
                  Faculty: {ws.faculty.join(', ')}
                </p>

                <div className="space-y-2 text-xs text-[#57534E] font-sans mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span className="font-medium text-[#2B2B2B]">{ws.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>Level: {ws.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#B8975A]" />
                    <span>Venue: {ws.venue}</span>
                  </div>
                </div>

                {/* Focus list */}
                <div className="p-3.5 bg-[#FAF6F0]/70 rounded-xs border border-[#B8975A]/20 mb-6">
                  <p className="text-[10px] uppercase tracking-wider font-sans font-semibold text-[#7B1030] mb-1.5">
                    Curriculum Highlights:
                  </p>
                  <ul className="space-y-1">
                    {ws.curriculum.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-xs text-[#2B2B2B] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#B8975A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#B8975A]/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#57534E] uppercase tracking-wider block">Tuition</span>
                  <span className="font-serif text-xl font-bold text-[#7B1030]">{ws.tuition}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectRegister(ws)}
                    disabled={isSoldOut}
                    className="px-4 py-2 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#B8975A] transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Sparkles className="w-3 h-3 text-[#B8975A]" />
                    <span>{isSoldOut ? 'Join Waitlist' : 'Register Now'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
