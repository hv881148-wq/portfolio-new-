import React, { useState } from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { FileText, Download, ArrowDown, Sparkles, CheckCircle2, Camera } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenResumeModal }) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient Blue & Emerald glows */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[350px] h-[250px] bg-emerald-500/10 dark:bg-emerald-400/10 blur-[100px] rounded-full pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout: Content (Left) & Portrait Frame (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Badge (Green & Blue accents) */}
            {portfolioConfig.openToOpportunities && (
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 mb-6 rounded-full border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide">
                  {language === 'en' ? 'Open to Opportunities' : 'इंटर्नशिप एवं अवसरों हेतु उपलब्ध'}
                </span>
                <span className="text-xs text-emerald-400 dark:text-emerald-600">·</span>
                <span className="text-xs text-slate-600 dark:text-slate-300">Kanpur / Remote</span>
              </div>
            )}

            {/* Title / Role Kicker */}
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-3 font-mono-data">
              {portfolioConfig.title[language]}
            </p>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6 text-balance">
              {language === 'en' ? (
                <>
                  Turning complex business numbers into{' '}
                  <span className="font-serif-editorial italic font-normal text-blue-600 dark:text-blue-400 underline decoration-emerald-500 decoration-2 underline-offset-4">
                    decisive strategic insights.
                  </span>
                </>
              ) : (
                <>
                  जटिल व्यावसायिक आंकड़ों को{' '}
                  <span className="font-serif-editorial italic font-normal text-blue-600 dark:text-blue-400 underline decoration-emerald-500 decoration-2 underline-offset-4">
                    ठोस रणनीतिक निर्णयों
                  </span>{' '}
                  में बदलना।
                </>
              )}
            </h1>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              {portfolioConfig.shortIntro[language]}
            </p>

            {/* Primary Action Buttons (Blue & Emerald accents) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {/* Explore My Work CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all transform hover:-translate-y-0.5 shadow-md shadow-blue-600/20"
              >
                <span>{language === 'en' ? 'Explore My Work' : 'मेरा काम देखें'}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              {/* View Resume CTA */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'en' ? 'View Resume' : 'रिज्यूमे देखें'}</span>
              </button>

              {/* Download Resume Link */}
              <a
                href={portfolioConfig.resumePdfUrl}
                download={portfolioConfig.resumeFileName}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Download ATS Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Download PDF' : 'डाउनलोड करें'}</span>
              </a>
            </div>

            {/* Verified Candidate Tagline (Emerald Green) */}
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>
                {language === 'en' 
                  ? 'All experience, education & certifications verified from official ATS resume' 
                  : 'सभी अनुभव, शिक्षा और प्रमाण-पत्र आधिकारिक एटीएस रिज्यूमे से सत्यापित'}
              </span>
            </div>
          </div>

          {/* Right Column: Tall Editorial Portrait Frame (Blue/Green/Black styling) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden p-1 border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-500/20 via-slate-800/10 to-emerald-500/20 group shadow-xl">
              
              <div className="w-full h-full rounded-[22px] overflow-hidden relative flex flex-col justify-between bg-white dark:bg-[#0F172A] p-6 border border-slate-200/80 dark:border-slate-800/80">
                
                {/* Background visual texture */}
                {customPhotoUrl ? (
                  <img
                    src={customPhotoUrl}
                    alt={portfolioConfig.fullName}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-6 pointer-events-none">
                    {/* Financial/Analytical Waveform Graphic (Blue & Emerald) */}
                    <div className="w-full h-32 flex items-end justify-between gap-1 opacity-30 mb-4">
                      {[35, 60, 45, 75, 55, 90, 70, 85, 95, 65, 80, 100].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-t ${
                            i % 3 === 0 
                              ? 'bg-gradient-to-t from-emerald-600/30 to-emerald-400' 
                              : 'bg-gradient-to-t from-blue-600/30 to-blue-400'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Monogram Crest */}
                    <div className="w-24 h-24 rounded-full border-2 border-blue-500/30 dark:border-blue-400/40 flex flex-col items-center justify-center bg-white/90 dark:bg-[#080C14]/90 backdrop-blur-md shadow-xl">
                      <span className="font-display font-bold text-3xl tracking-widest text-blue-600 dark:text-blue-400">
                        {portfolioConfig.monogram}
                      </span>
                      <span className="text-[10px] tracking-wider text-emerald-600 dark:text-emerald-400 font-mono-data font-semibold">
                        ANALYTICS
                      </span>
                    </div>
                  </div>
                )}

                {/* Top Corner Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full text-[11px] font-mono-data font-semibold bg-white/90 dark:bg-[#080C14]/90 backdrop-blur border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{portfolioConfig.monogram} · 2026</span>
                  </div>

                  {/* Photo Replacement Control */}
                  <label 
                    className="cursor-pointer p-1.5 rounded-full bg-white/90 dark:bg-[#080C14]/90 backdrop-blur border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Preview custom photo / headshot"
                  >
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleCustomPhotoUpload} 
                      className="hidden" 
                    />
                    <Camera className="w-3.5 h-3.5" />
                  </label>
                </div>

                {/* Bottom Frame Card */}
                <div className="relative z-10 p-4 rounded-xl bg-white/95 dark:bg-[#080C14]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                  <p className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                    {portfolioConfig.fullName}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    BBA Finance · Allenhouse Business School
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{portfolioConfig.location[language]}</span>
                    <span className="font-mono-data text-emerald-600 dark:text-emerald-400 font-semibold">
                      ATS Verified
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI / Evidence Strip below hero split */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <span className="font-mono-data text-2xl lg:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
              2028
            </span>
            <span className="block text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-1 font-semibold font-mono-data">
              {language === 'en' ? 'Expected Graduation' : 'संभावित स्नातक'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              BBA Finance · Allenhouse
            </p>
          </div>

          <div>
            <span className="font-mono-data text-2xl lg:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
              5+
            </span>
            <span className="block text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-1 font-semibold font-mono-data">
              {language === 'en' ? 'Core Analytical Tools' : 'मुख्य एनालिटिकल टूल्स'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Excel, Power BI, SQL, Python, Tableau
            </p>
          </div>

          <div>
            <span className="font-mono-data text-2xl lg:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
              3
            </span>
            <span className="block text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mt-1 font-semibold font-mono-data">
              {language === 'en' ? 'Verified Credentials' : 'सत्यापित प्रमाण-पत्र'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              IBM SkillsBuild & NISM
            </p>
          </div>

          <div>
            <span className="font-mono-data text-2xl lg:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
              100%
            </span>
            <span className="block text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mt-1 font-semibold font-mono-data">
              {language === 'en' ? 'Factual Authenticity' : 'सत्यापित प्रामाणिकता'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Zero invented details or numbers
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
