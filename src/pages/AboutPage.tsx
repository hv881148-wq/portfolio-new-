import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioConfig, Language } from '../data/portfolioData';
import { About } from '../components/About';
import { JourneyTimeline } from '../components/JourneyTimeline';
import { FileText, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-blue-500/30 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-950/40">
            <span className="text-xs font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
              {language === 'en' ? 'Profile & Methodology' : 'प्रोफाइल एवं कार्यपद्धति'}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Allenhouse Business School '28
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {language === 'en'
              ? 'About Harshit Verma & Professional Journey'
              : 'हर्षित वर्मा का परिचय एवं करियर यात्रा'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'An in-depth look into my analytical perspective, foundational business training, and empirical timeline across business analysis and finance.'
              : 'मेरे विश्लेषणात्मक दृष्टिकोण, बुनियादी व्यावसायिक प्रशिक्षण और वित्तीय अनुभव का विस्तृत विवरण।'}
          </p>
        </div>
      </div>

      {/* Editorial About Component */}
      <About language={language} />

      {/* Academic & Career Journey Timeline */}
      <JourneyTimeline language={language} />

      {/* Bottom Cross-link CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-1">
              {language === 'en' ? 'Want to inspect the technical stack?' : 'तकनीकी दक्षता देखना चाहते हैं?'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {language === 'en'
                ? 'Explore Excel modeling, Power BI dashboarding, and SQL querying capabilities.'
                : 'एक्सेल मॉडलिंग, पावर बीआई और एसक्यूएल दक्षताओं का अन्वेषण करें।'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/skills"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <span>{language === 'en' ? 'View Skills & Tools' : 'कौशल एवं टूल्स देखें'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/resume"
              className="px-4 py-2.5 rounded-full text-xs font-semibold border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'ATS Resume' : 'एटीएस रिज्यूमे'}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
