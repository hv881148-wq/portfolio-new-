import React from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { Award, Trophy, BookmarkCheck, Calendar, ShieldCheck } from 'lucide-react';

interface AchievementsProps {
  language: Language;
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ language }) => {
  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
            {language === 'en' ? 'Verified Honors & Impact' : 'सत्यापित उपलब्धियां'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? 'Achievements & Milestones' : 'उपलब्धियां एवं प्रमुख मील के पत्थर'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            {language === 'en'
              ? 'Institutional recognitions in capital markets competition, global IBM technical certifications, and academic performance.'
              : 'पूंजी बाजार प्रतियोगिता, वैश्विक आईबीएम तकनीकी प्रमाणन और शैक्षणिक प्रदर्शन में संस्थागत मान्यता।'}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.achievements.map((item, index) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between shadow-sm group"
            >
              <div>
                {/* Header Icon + Year */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    {index === 0 && <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                    {index === 1 && <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    {index === 2 && <BookmarkCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <span className="font-mono-data text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.year}
                  </span>
                </div>

                {/* Category label */}
                <span className="text-[11px] font-mono-data tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold block mb-1">
                  {item.category[language]}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title[language]}
                </h3>

                {/* Organization */}
                <p className="text-xs font-serif-editorial text-slate-600 dark:text-slate-300 mb-3">
                  {item.organization[language]}
                </p>

                {/* Narrative Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description[language]}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Resume Documented</span>
                </span>
                <span className="font-mono-data text-emerald-600 dark:text-emerald-400 font-bold">
                  Official
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
