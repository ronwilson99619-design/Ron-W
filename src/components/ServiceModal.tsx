import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/danceToursData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenEnquire: (subject?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onOpenEnquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-[#FAF6F0] rounded-xs overflow-y-auto border border-[#B8975A] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#3D0A1A] text-[#FAF6F0] border-b border-[#B8975A]/40 sticky top-0 z-10">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D4BA83] font-semibold block">
              Dance Tours Programme
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF6F0]">
              {service.title}
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

        {/* Hero image banner */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#3D0A1A] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#270510] via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-widest text-[#D4BA83] font-semibold">
              {service.subtitle}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-serif text-2xl text-[#2B2B2B] mb-3">
              Overview & Philosophy
            </h4>
            <p className="font-sans text-sm sm:text-base text-[#57534E] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="p-5 bg-white border border-[#B8975A]/25 rounded-xs">
            <h5 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030] mb-3">
              Key Programme Highlights
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2B2B2B]">
                  <CheckCircle2 className="w-4 h-4 text-[#7B1030] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="p-5 bg-white border border-[#B8975A]/25 rounded-xs">
            <h5 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#7B1030] mb-3">
              Curriculum & Technical Structure
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2B2B2B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A] shrink-0 mt-1.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div className="text-xs text-[#57534E] border-t border-[#B8975A]/20 pt-4">
            <p><strong>Recommended For:</strong> {service.audience}</p>
          </div>

          {/* Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border border-[#B8975A]/40 text-xs font-semibold uppercase tracking-wider text-[#2B2B2B] rounded-xs hover:bg-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquire(`Enquiry for: ${service.title}`);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#B8975A] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8975A]" />
              <span>Enquire for {service.title}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
