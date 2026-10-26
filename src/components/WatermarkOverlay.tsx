import React from 'react';

export const WatermarkOverlay: React.FC = () => {
  return (
    <>
      {/* Repeating Diagonal Watermark Grid across the entire page (extremely subtle, zero compromise on design) */}
      <div
        className="fixed inset-0 pointer-events-none select-none z-30 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full h-full opacity-[0.032]"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='380' height='220' viewBox='0 0 380 220'><text x='20' y='140' transform='rotate(-22 20 140)' fill='%237B1030' font-family='Montserrat, sans-serif' font-size='12' font-weight='600' letter-spacing='0.2em'>DESIGNED BY VINTAGE DESIGN LAB</text></svg>")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Subtle Fixed Corner Watermark Signature (Low opacity, non-intrusive) */}
      <div
        className="fixed bottom-3 left-4 pointer-events-none select-none z-30 hidden sm:block opacity-25 hover:opacity-40 transition-opacity"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] font-sans font-medium text-[#2B2B2B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8975A]" />
          <span>Designed by Vintage Design Lab</span>
        </div>
      </div>
    </>
  );
};
