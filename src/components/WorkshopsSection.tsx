import React from 'react';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { WORKSHOP_FACULTY, UpcomingWorkshop } from '../data/danceToursData';
import { WorkshopsSchedule } from './WorkshopsSchedule';

interface WorkshopsSectionProps {
  onOpenEnquire: (initialSubject?: string) => void;
  workshopsList?: UpcomingWorkshop[];
  onSelectRegister?: (workshop: UpcomingWorkshop) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  onOpenEnquire,
  workshopsList,
  onSelectRegister,
}) => {
  return (
    <section id="workshops" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden border-t border-[#B8975A]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B8975A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
                Artistry & Pedagogy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight">
              The British Classical Style: Purity, Musicality & Dramatic Grace
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#57534E] max-w-md leading-relaxed">
            Preserving and sharing the legendary tradition of British ballet across the world through rigorous, inspiring masterclasses with Covent Garden's greatest practitioners.
          </p>
        </div>

        {/* 2-Column Split: Image on Left, Rich Editorial Prose & Quote Highlight on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          {/* Left Column: Primary Classical Workshop Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#B8975A]/40 p-2 sm:p-3 bg-white shadow-xl">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#3D0A1A]">
                <img
                  src="/assets/aistudio/Ricardo_Cervera_dance_tours_workshop1_japan_bb531b80.jpg"
                  alt="Ricardo Cervera teaching at the barre in Japan"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#D4BA83] font-semibold">
                    Masterclass Session · Japan
                  </p>
                  <p className="font-serif text-base sm:text-lg italic text-[#FAF6F0]">
                    Ricardo Cervera perfecting student epaulement and arabesque line
                  </p>
                </div>
              </div>

              {/* Classical corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#B8975A]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#B8975A]" />
            </div>

            {/* Inset Secondary Image Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 sm:w-56 p-2 bg-white border border-[#B8975A]/40 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/Laura_morera_dance_tours_workshop_spain_madrid_55e3eb41.png"
                  alt="Laura Morera in Madrid workshop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] text-center font-serif italic text-[#7B1030] mt-1.5">
                Laura Morera · Madrid Masterclasses
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Quote Style Highlight */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quote Style Highlight as specifically requested in prompt */}
            <div className="relative py-8 px-6 sm:px-8 bg-white border-y border-[#B8975A]/40 my-2 shadow-xs">
              <span className="absolute -top-4 left-6 text-5xl font-serif text-[#B8975A] leading-none select-none">
                “
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#2B2B2B] italic leading-relaxed mb-3">
                Ballet is not merely technique; it is a language of poetry and grace passed down directly from master to dancer. The British tradition teaches that true virtuosity begins where mechanical effort disappears into musical truth.
              </blockquote>
              <div className="flex items-center gap-3 pt-2 text-xs font-sans text-[#7B1030] uppercase tracking-widest font-semibold">
                <span className="w-6 h-[1.5px] bg-[#B8975A]" />
                <span>The Dance Tours Artistic Philosophy</span>
              </div>
            </div>

            {/* Editorial Body Text */}
            <div className="space-y-4 my-6 text-[#57534E] text-sm sm:text-base leading-relaxed font-sans">
              <p>
                The British style is celebrated worldwide for its clean footwork, expressive port de bras, understated elegance, and deep theatrical storytelling. Established through the masterworks of Sir Frederick Ashton and Kenneth MacMillan, this heritage demands immaculate placement combined with vibrant human warmth.
              </p>
              <p>
                Dance Tours partners with dance schools, universities, and international conservatoires to deliver tailor-made intensives lasting from three days to several weeks. Every workshop is led by former Senior Soloists and Ballet Masters who have spent decades dancing on the Royal Opera House stage.
              </p>
            </div>

            {/* Core Syllabus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Classical Barre & Centre Precision",
                "Ashton & MacMillan Repertoire",
                "Pas de Deux & Partnering Artistry",
                "Pointe Work, Allegro & Virtuosity",
                "Musicality & Character Nuance",
                "Vocational Audition Preparation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2B2B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#7B1030] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquire('Dance Workshop Booking Enquiry')}
                className="px-7 py-3.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase rounded-xs border border-[#B8975A]/60 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Book a Workshop for Your School</span>
                <ArrowRight className="w-4 h-4 text-[#B8975A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Master Faculty Profiles Bar */}
        <div className="mt-16 pt-12 border-t border-[#B8975A]/25">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030] block mb-2">
              Distinguished Guest Faculty
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B]">
              Taught by Master Dancers of London's Royal Stages
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WORKSHOP_FACULTY.map((faculty) => (
              <div
                key={faculty.name}
                className="flex flex-col sm:flex-row gap-5 p-6 bg-white border border-[#B8975A]/25 rounded-xs hover:border-[#B8975A] transition-colors shadow-xs"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xs overflow-hidden shrink-0 border border-[#B8975A]/30">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs text-[#B8975A] font-semibold uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{faculty.credentials}</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-medium leading-snug">
                    {faculty.name}
                  </h4>
                  <p className="text-xs text-[#7B1030] font-medium tracking-wide mb-2">
                    {faculty.role}
                  </p>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {faculty.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Dynamic Workshops Schedule */}
        {workshopsList && onSelectRegister && (
          <WorkshopsSchedule
            workshopsList={workshopsList}
            onSelectRegister={onSelectRegister}
            onOpenEnquire={onOpenEnquire}
          />
        )}
      </div>
    </section>
  );
};
