import React, { useEffect } from 'react';
import { X, Star, Calendar, MapPin, Sparkles, Award } from 'lucide-react';
import { PRODUCTIONS_DATA } from '../data/danceToursData';

interface ProductionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire: (subject?: string) => void;
}

export const ProductionModal: React.FC<ProductionModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-[#3D0A1A] text-[#FAF6F0] rounded-xs overflow-y-auto border border-[#B8975A] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#270510] border-b border-[#B8975A]/40 sticky top-0 z-20">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D4BA83] font-semibold block">
              Dance Tours Theatrical Stage Repertoire
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#FAF6F0]">
              Productions Featuring Royal Ballet Artists
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-[#FAF6F0]/80 hover:text-[#FAF6F0] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          {PRODUCTIONS_DATA.map((prod, index) => (
            <div
              key={prod.id}
              className="bg-[#270510]/80 border border-[#B8975A]/30 rounded-xs p-6 sm:p-8 space-y-6 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Production thumbnail */}
                <div className="w-full md:w-56 aspect-[4/3] rounded-xs overflow-hidden shrink-0 border border-[#B8975A]/40">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Main info */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#D4BA83] font-sans">
                    <span className="flex items-center gap-1 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-[#B8975A]" />
                      {prod.year}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#B8975A]" />
                      {prod.location}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl sm:text-3xl text-[#FAF6F0]">
                    {prod.title}
                  </h4>
                  <p className="font-serif italic text-base text-[#D4BA83]">
                    {prod.subtitle}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#FAF6F0]/85 leading-relaxed pt-2">
                    {prod.synopsis}
                  </p>
                </div>
              </div>

              {/* Cast & Reviews */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#B8975A]/25 text-xs">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#B8975A] font-semibold mb-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#B8975A]" />
                    <span>Principle Cast & Artists:</span>
                  </p>
                  <p className="text-[#FAF6F0]/90">
                    {prod.starring.join(', ')}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#B8975A] font-semibold mb-1 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>Critical Acclaim:</span>
                  </p>
                  <p className="italic font-serif text-[#FAF6F0]/90">
                    “{prod.reviewQuote}”
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Booking note */}
          <div className="p-6 bg-[#270510] border border-[#B8975A]/40 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-serif text-xl text-[#FAF6F0] mb-1">
                Bring a Production to Your Theatre or Festival
              </h5>
              <p className="text-xs text-[#FAF6F0]/75 font-sans">
                Full repertory staging, bespoke galas, and guest artist contracts coordinated by Dance Tours.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenEnquire('Production Staging or Festival Booking');
              }}
              className="px-6 py-3 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#B8975A] shrink-0 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8975A]" />
              <span>Discuss Booking</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
