import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/danceToursData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden border-t border-[#B8975A]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B8975A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#7B1030]">
              Words of Distinction
            </span>
            <span className="w-8 h-[1px] bg-[#B8975A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2B2B] tracking-tight leading-tight">
            Endorsements from Dancers, Directors & Patrons
          </h2>
        </div>

        {/* Refined Slider Container styled like an Opera House Programme Book */}
        <div className="max-w-4xl mx-auto relative bg-white border border-[#B8975A]/40 p-8 sm:p-14 lg:p-16 shadow-xl rounded-xs">
          {/* Programme Corner Ornaments */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#B8975A]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B8975A]" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#B8975A]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#B8975A]" />

          {/* Large Quote Mark */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#7B1030]/10 flex items-center justify-center text-[#7B1030]">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center text-center">
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2B2B2B] italic font-normal leading-relaxed text-balance">
              “{activeTestimonial.quote}”
            </blockquote>
          </div>

          {/* Thin Hairline Divider */}
          <div className="opera-hairline my-8 max-w-xs mx-auto" />

          {/* Author, Role & Country attribution */}
          <div className="text-center">
            <p className="font-serif text-xl font-medium text-[#7B1030] tracking-wide">
              {activeTestimonial.author}
            </p>
            <p className="text-xs uppercase tracking-widest text-[#57534E] font-sans font-semibold mt-1">
              {activeTestimonial.role}
            </p>
            <p className="text-xs text-[#B8975A] font-sans mt-0.5 tracking-wider">
              {activeTestimonial.location}, {activeTestimonial.country} · {activeTestimonial.year}
            </p>
          </div>

          {/* Controls: Next / Prev Arrows */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#B8975A]/20">
            <button
              onClick={prevTestimonial}
              className="p-2 sm:px-4 sm:py-2 rounded-xs border border-[#B8975A]/40 text-[#7B1030] hover:bg-[#7B1030] hover:text-[#FAF6F0] transition-colors flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-[#7B1030]' : 'w-2 bg-[#B8975A]/40 hover:bg-[#B8975A]'
                  }`}
                  aria-label={`Jump to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 sm:px-4 sm:py-2 rounded-xs border border-[#B8975A]/40 text-[#7B1030] hover:bg-[#7B1030] hover:text-[#FAF6F0] transition-colors flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest cursor-pointer"
              aria-label="Next testimonial"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
