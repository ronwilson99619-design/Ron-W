import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const AmbientPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Classical ballet studio chord progression (Adagio in E-flat / C minor)
  const chordNotes = [
    [261.63, 329.63, 392.00, 523.25], // C major
    [220.00, 261.63, 329.63, 440.00], // A minor
    [174.61, 220.00, 261.63, 349.23], // F major
    [196.00, 246.94, 293.66, 392.00], // G major
  ];

  const playChime = () => {
    if (!audioCtxRef.current || isMuted) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const chord = chordNotes[Math.floor(Math.random() * chordNotes.length)];
      chord.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm harmonic tone
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);

        const startTime = ctx.currentTime + i * 0.15;
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.035, startTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 3.0);
      });
    } catch {
      // Audio fallback silent
    }
  };

  const togglePlay = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (!isPlaying) {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
      playChime();
      timerRef.current = window.setInterval(playChime, 3800);
    } else {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-[#B8975A]/40 px-3.5 py-2.5 rounded-full shadow-2xl text-xs font-sans text-[#2B2B2B]">
      {/* Waveform visualizer */}
      <div className="flex items-center gap-1 h-4 px-1">
        {isPlaying && !isMuted ? (
          <>
            <span className="w-0.5 bg-[#7B1030] rounded-full animate-wave-1" />
            <span className="w-0.5 bg-[#B8975A] rounded-full animate-wave-2" />
            <span className="w-0.5 bg-[#7B1030] rounded-full animate-wave-3" />
            <span className="w-0.5 bg-[#D4BA83] rounded-full animate-wave-4" />
          </>
        ) : (
          <Music className="w-3.5 h-3.5 text-[#7B1030]" />
        )}
      </div>

      <div className="flex flex-col pr-1">
        <span className="font-serif text-[11px] font-semibold text-[#7B1030] leading-none">
          Covent Garden Morning Barre
        </span>
        <span className="text-[9px] text-[#57534E] uppercase tracking-wider font-sans mt-0.5">
          {isPlaying ? (isMuted ? 'Muted' : 'Live Classical Sound') : 'Ballet Studio Audio'}
        </span>
      </div>

      <div className="flex items-center gap-1.5 border-l border-stone-200 pl-2">
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-full bg-[#7B1030] text-[#FAF6F0] hover:bg-[#580B22] transition-colors cursor-pointer"
          aria-label={isPlaying ? 'Pause studio audio' : 'Play studio audio'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
        </button>

        {isPlaying && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1 text-stone-500 hover:text-[#7B1030] transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-700" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    </div>
  );
};
