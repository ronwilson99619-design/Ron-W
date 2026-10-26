import React, { useState } from 'react';
import { Maximize2, Sparkles, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/danceToursData';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'workshops' | 'tourism' | 'productions'>('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden border-t border-[#B8975A]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
              Visual Chronicle
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight mb-4">
            A Gallery of Grace, Drama & Global Adventure
          </h2>

          <div className="opera-hairline my-6 max-w-xs mx-auto" />

          <p className="font-sans text-base sm:text-lg text-[#57534E] leading-relaxed text-balance">
            Moments captured in studios, theatres, and historic sanctuaries across the globe — celebrating ballet's expressive power and shared humanity.
          </p>
        </div>

        {/* Filter Controls (buttons with click handlers, anti-slop compliant) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Photographs' },
            { id: 'workshops', label: 'Workshops & Technique' },
            { id: 'tourism', label: 'Dance & Tourism' },
            { id: 'productions', label: 'Stage Productions' },
          ].map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#7B1030] text-[#FAF6F0] border-[#B8975A] shadow-xs'
                    : 'bg-white text-[#57534E] border-[#B8975A]/20 hover:border-[#B8975A] hover:text-[#2B2B2B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isSpanTwo = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => onSelectImage(item)}
                className={`group relative bg-white border border-[#B8975A]/25 rounded-xs overflow-hidden shadow-sm hover:shadow-xl hover:border-[#B8975A] transition-all duration-300 cursor-pointer ${
                  isSpanTwo ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#3D0A1A]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Overlay Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0A1A]/95 via-[#3D0A1A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                  {/* Hover Caption Details */}
                  <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#D4BA83] font-semibold mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#FAF6F0] font-normal leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#FAF6F0]/80 italic line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                  {/* Corner Expand Button */}
                  <div className="absolute top-4 right-4 p-2 bg-[#FAF6F0]/90 text-[#7B1030] rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Visible Minimal Card Bar */}
                <div className="p-4 bg-white border-t border-[#B8975A]/15 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-medium text-[#2B2B2B] truncate max-w-[200px] sm:max-w-[250px]">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#57534E] font-sans">
                      {item.location}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B8975A] font-semibold">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
