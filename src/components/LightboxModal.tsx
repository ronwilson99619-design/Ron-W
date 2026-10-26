import React, { useEffect } from 'react';
import { X, MapPin, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/danceToursData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenEnquire: (subject?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onOpenEnquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF6F0] rounded-xs overflow-hidden border border-[#B8975A] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#3D0A1A] text-[#FAF6F0] border-b border-[#B8975A]/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8975A]" />
            <span className="text-xs font-sans uppercase tracking-widest text-[#D4BA83] font-semibold">
              {item.category} Archive
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-xs text-[#FAF6F0]/80 hover:text-[#FAF6F0] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer Details */}
        <div className="p-6 bg-[#FAF6F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#B8975A]/30">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7B1030] font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] font-normal leading-snug">
              {item.title}
            </h3>
            <p className="font-sans text-xs text-[#57534E] italic mt-1">
              {item.caption}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenEnquire(`Enquiry regarding: ${item.title}`);
            }}
            className="px-5 py-2.5 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#B8975A] shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8975A]" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
