import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin, Award, Compass, Play, Pause } from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/danceToursData';

interface HeroProps {
  onOpenEnquire: (initialSubject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquire }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-[96vh] flex items-center overflow-hidden bg-[#20040D]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Dance Tours Cinematic Hero"
    >
      {/* Background Slides with Slow Zoom (Ken Burns) and High-Fidelity Plum Gradient */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[9000ms] ease-out ${
                  isActive ? 'scale-108' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Modern Multi-layer Plum Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#20040D] via-[#3D0A1A]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040D] via-transparent to-black/40" />
            </div>
          );
        })}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Modern Curatorial Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 glass-panel-dark rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#D4BA83] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-sans font-medium text-[#FAF6F0]">
              The Royal Ballet Faculty · Global Experience
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF6F0] leading-[1.05] mb-6">
            Dance. <span className="italic text-[#D4BA83] font-light">Travel.</span> Inspire.
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#FAF6F0]/85 font-light leading-relaxed max-w-2xl mb-10 text-balance">
            British style ballet workshops, dance tours and productions, taking the art of ballet around the world.
          </p>

          {/* Two Buttons: Solid Burgundy and Outlined Gold Style */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <a
              href="#customizer"
              className="px-8 py-4 bg-[#7B1030] hover:bg-[#580B22] text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group text-center cursor-pointer border border-[#B8975A]/60"
            >
              <span>Explore & Customise Tours</span>
              <ArrowRight className="w-4 h-4 text-[#D4BA83] group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => onOpenEnquire('General Tour & Workshop Enquiry')}
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-[#FAF6F0] text-xs font-semibold tracking-widest uppercase border border-[#B8975A] rounded-sm transition-all duration-300 flex items-center justify-center gap-2 text-center cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4BA83]" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Modern Slide Progress Indicators */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#D4BA83] font-sans font-semibold">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
              <span className="text-xs text-[#FAF6F0]/70 font-sans italic truncate max-w-xs sm:max-w-md">
                {HERO_SLIDES[currentSlide].caption}
              </span>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                      i === currentSlide ? 'w-8 bg-[#D4BA83]' : 'w-3 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Modern Quick Metrics Ribbon (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 glass-panel-dark py-3.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between text-xs text-[#FAF6F0]/80 tracking-wider font-sans">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#D4BA83]" />
            <span>The Royal Ballet Senior Masters & Soloists</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#D4BA83]" />
            <span>London · Tokyo · Kyoto · Madrid · Sydney</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D4BA83] font-serif italic text-sm">Artistic Direction:</span>
            <span className="font-semibold text-white">{COMPANY_INFO.owner}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
