import React, { useEffect, useState } from 'react';
import { portfolioConfig } from '../data/portfolioData';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lineActive, setLineActive] = useState(false);
  const [textActive, setTextActive] = useState(false);

  useEffect(() => {
    // Respect reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      setIsVisible(false);
      return;
    }

    const t1 = setTimeout(() => setTextActive(true), 150);
    const t2 = setTimeout(() => setLineActive(true), 400);
    const t3 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080C14] text-white transition-opacity duration-500 ease-out"
      aria-label="Introduction Animation"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative flex flex-col items-center">
        {/* Monogram Display */}
        <div 
          className={`transition-all duration-700 ease-out transform ${
            textActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <span className="font-display text-5xl md:text-7xl font-light tracking-[0.2em] text-white">
            {portfolioConfig.monogram}
          </span>
        </div>

        {/* Fine Royal Blue & Green Accent Line */}
        <div className="w-36 h-[2px] my-4 overflow-hidden relative bg-slate-800 rounded-full">
          <div 
            className={`absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400 transition-all duration-700 ease-in-out ${
              lineActive ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        {/* Subtitle */}
        <p 
          className={`text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-400 transition-all duration-500 delay-300 font-mono-data ${
            textActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {portfolioConfig.fullName}
        </p>
      </div>

      {/* Accessible Skip Button */}
      <button
        onClick={() => {
          setIsVisible(false);
          onComplete();
        }}
        className="absolute bottom-8 px-4 py-1.5 text-xs tracking-wider text-slate-400 hover:text-white border border-slate-700 hover:border-blue-500 rounded-full transition-colors duration-200"
      >
        Skip Intro
      </button>
    </div>
  );
};
