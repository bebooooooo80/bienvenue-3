import React, { useEffect, useState } from 'react';

export const FrenchBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slowOffset = prefersReducedMotion ? 0 : Math.min(scrollY * 0.06, 90);
  const mediumOffset = prefersReducedMotion ? 0 : Math.min(scrollY * 0.12, 160);
  const reverseOffset = prefersReducedMotion ? 0 : Math.max(-scrollY * 0.05, -70);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#0B1F3A] overflow-x-hidden selection:bg-[#0055A4] selection:text-white">
      
      {/* ============================================================ */}
      {/* LAYER 1: Warm Ivory & Subtle Fine Paper Grain Texture */}
      {/* ============================================================ */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-25 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#0055A4 0.6px, transparent 0.6px), radial-gradient(#EF4135 0.5px, #FAF8F5 0.5px)`,
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px'
        }}
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* LAYER 2: Soft Watercolor / Artistic Atmospheric Splashes */}
      {/* ============================================================ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Soft French Blue watercolor bloom in top right */}
        <div 
          className="absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#0055A4]/8 via-[#0055A4]/2 to-transparent blur-3xl transition-transform duration-700"
          style={{ transform: `translate3d(0, ${slowOffset * 0.6}px, 0)` }}
        />
        
        {/* Delicate French Red watercolor wash on middle left */}
        <div 
          className="absolute top-[35%] -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#EF4135]/6 via-[#EF4135]/1 to-transparent blur-3xl transition-transform duration-700"
          style={{ transform: `translate3d(0, ${reverseOffset * 0.8}px, 0)` }}
        />

        {/* Warm Cream glow in central viewport */}
        <div 
          className="absolute top-[65%] right-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-b from-[#EFE8DC]/70 to-transparent blur-2xl pointer-events-none"
        />

        {/* Lower Blue splash */}
        <div 
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#0055A4]/6 to-transparent blur-3xl"
        />
      </div>

      {/* ============================================================ */}
      {/* LAYER 3: French Architectural Scenery (Line Art & Silhouettes) */}
      {/* ============================================================ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        
        {/* 1. Eiffel Tower Sketch (Subtle right-side skyline balance) */}
        <svg
          className="absolute top-16 -right-10 w-[340px] sm:w-[420px] h-[600px] text-[#0055A4] opacity-[0.05] transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(0, ${slowOffset}px, 0)` }}
          viewBox="0 0 300 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Spire */}
          <line x1="150" y1="20" x2="150" y2="70" strokeWidth="1.5" />
          <rect x="142" y="70" width="16" height="80" rx="1" />
          {/* Upper Section */}
          <path d="M 130 150 L 170 150 L 180 250 L 120 250 Z" />
          <line x1="110" y1="250" x2="190" y2="250" strokeWidth="2" />
          {/* Mid Section & Arch */}
          <path d="M 115 250 L 80 390 L 220 390 L 185 250" />
          <line x1="70" y1="390" x2="230" y2="390" strokeWidth="2.5" />
          {/* Base Pillars and Grand Vaulted Arch */}
          <path d="M 75 390 Q 55 490 40 500 L 95 500 Q 110 430 150 430 Q 190 430 205 500 L 260 500 Q 245 490 225 390" />
          {/* Structural Cross-Hatching Trusses */}
          <line x1="120" y1="250" x2="180" y2="150" strokeDasharray="3,3" />
          <line x1="180" y1="250" x2="120" y2="150" strokeDasharray="3,3" />
          <line x1="80" y1="390" x2="185" y2="250" strokeDasharray="4,4" />
          <line x1="220" y1="390" x2="115" y2="250" strokeDasharray="4,4" />
        </svg>

        {/* 2. Louvre Glass Pyramid (Left Side Line-Art) */}
        <svg
          className="absolute top-28 -left-16 w-[420px] h-[420px] text-[#0B1F3A] opacity-[0.045] transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(0, ${reverseOffset}px, 0)` }}
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <polygon points="200,50 50,330 350,330" />
          <line x1="200" y1="50" x2="200" y2="330" strokeDasharray="3,3" />
          <line x1="200" y1="50" x2="130" y2="330" />
          <line x1="200" y1="50" x2="270" y2="330" />
          <line x1="90" y1="260" x2="310" y2="260" />
          <line x1="130" y1="190" x2="270" y2="190" />
          <line x1="165" y1="120" x2="235" y2="120" />
          <polygon points="200,370 100,330 300,330" strokeDasharray="2,2" />
        </svg>

        {/* 3. Arc de Triomphe & Parisian Street Lamp (Mid-Scroll Left) */}
        <svg
          className="absolute top-[42%] -left-12 w-[380px] h-[380px] text-[#0055A4] opacity-[0.035] transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(0, ${mediumOffset * 0.7}px, 0)` }}
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {/* Parisian Classical Street Lamp (Le Lampadaire de Paris) */}
          <line x1="80" y1="380" x2="80" y2="100" strokeWidth="2.5" />
          <circle cx="80" cy="90" r="14" />
          <path d="M 66 90 Q 80 60 94 90 Z" fill="none" strokeWidth="1.5" />
          <line x1="72" y1="75" x2="88" y2="75" />
          {/* Arc Silhouette */}
          <rect x="140" y="140" width="220" height="200" rx="3" />
          <path d="M 200 340 L 200 240 A 50 50 0 0 1 300 240 L 300 340" />
          <line x1="120" y1="340" x2="380" y2="340" strokeWidth="2" />
          <line x1="140" y1="180" x2="360" y2="180" strokeDasharray="3,3" />
        </svg>

        {/* 4. Parisian Haussmannian Rooflines (Bottom Right Canvas Bleed) */}
        <svg
          className="absolute bottom-12 -right-16 w-[560px] h-[340px] text-[#0B1F3A] opacity-[0.035] transition-transform duration-500 ease-out"
          style={{ transform: `translate3d(0, ${reverseOffset * 0.5}px, 0)` }}
          viewBox="0 0 500 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M 30 140 L 80 50 L 220 50 L 260 140 L 300 50 L 460 50 L 490 140" />
          <rect x="110" y="70" width="30" height="45" rx="3" />
          <rect x="170" y="70" width="30" height="45" rx="3" />
          <rect x="340" y="70" width="30" height="45" rx="3" />
          <rect x="400" y="70" width="30" height="45" rx="3" />
          <line x1="30" y1="140" x2="490" y2="140" strokeWidth="2" />
          <line x1="30" y1="190" x2="490" y2="190" strokeWidth="1.5" />
          <path d="M 40 185 L 480 185" strokeDasharray="3,3" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* LAYER 4: Foreground Active Content Canvas */}
      {/* ============================================================ */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
