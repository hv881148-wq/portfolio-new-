import React from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface JourneyTimelineProps {
  language: Language;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ language }) => {
  return (
    <section id="journey" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
            {language === 'en' ? 'Verified Timeline' : 'सत्यापित समयरेखा'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? 'Academic & Career Journey' : 'शैक्षणिक एवं करियर यात्रा'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
            {language === 'en'
              ? 'Chronological milestones derived exclusively from verified institutional records.'
              : 'संस्थानिक अभिलेखों से सत्यापित शैक्षणिक उपलब्धियों का कालक्रमानुसार विवरण।'}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 space-y-12">
          {portfolioConfig.journey.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline marker node (Electric Blue with White/Black outline) */}
              <div className="absolute -left-[32px] sm:-left-[40px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#080C14] bg-blue-600 dark:bg-blue-400 shadow-sm transition-transform group-hover:scale-125" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors shadow-sm">
                
                {/* Clean Unboxed Metadata Line */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono-data">
                  <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period[language]}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location[language]}
                  </span>
                  {item.score && (
                    <>
                      <span>·</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {item.score}
                      </span>
                    </>
                  )}
                </div>

                {/* Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {item.role[language]}
                  </h3>
                  <span className="text-sm font-serif-editorial text-blue-600 dark:text-blue-400">
                    {item.organization[language]}
                  </span>
                </div>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description[language]}
                </p>

                {/* Verified Bullet Highlights (Emerald checkmarks) */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                  {item.keyHighlights[language].map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
