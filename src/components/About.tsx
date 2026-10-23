import React from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { Compass, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const pillarIcons = [
    <TrendingUp key="1" className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <ShieldCheck key="2" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Cpu key="3" className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
            {language === 'en' ? 'Editorial Perspective' : 'संपादकीय दृष्टिकोण'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
            {language === 'en' 
              ? 'Analyzing numbers with financial rigor and computational clarity.' 
              : 'वित्तीय सटीकता और विश्लेषणात्मक स्पष्टता के साथ डेटा का अध्ययन।'}
          </h2>
        </div>

        {/* 2-Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {portfolioConfig.about.narrative[language].map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2 text-xs text-slate-900 dark:text-white font-mono-data">
              <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                {language === 'en' ? 'Core Focus Areas:' : 'मुख्य रुचि क्षेत्र:'}
              </span>
              {portfolioConfig.careerInterests.map((interest, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span>{interest[language]}</span>
                  {idx < portfolioConfig.careerInterests.length - 1 && (
                    <span className="mx-2 text-slate-400 dark:text-slate-600">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Side Editorial Quote Callout */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm relative">
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-5">
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>

            <blockquote className="font-serif-editorial text-lg md:text-xl text-slate-900 dark:text-white leading-relaxed italic mb-4">
              {language === 'en'
                ? '"Data analysis is not merely about writing formulas; it is about uncovering where an organization is leaking value and illuminating the exact decisions that restore profitability."'
                : '"डेटा विश्लेषण केवल फॉर्मूले लिखने के बारे में नहीं है; यह समझना है कि कोई संगठन कहाँ मूल्य खो रहा है और उन ठोस निर्णयों को उजागर करना है जो लाभप्रदता को पुनः स्थापित करते हैं।"'}
            </blockquote>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">
                {portfolioConfig.fullName}
              </span>
              <span className="font-mono-data text-emerald-600 dark:text-emerald-400 font-medium">
                BBA Finance '28
              </span>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.about.corePillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 group shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {pillarIcons[index]}
              </div>
              <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2">
                {pillar.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.desc[language]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
