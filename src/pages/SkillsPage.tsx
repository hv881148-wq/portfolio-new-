import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../data/portfolioData';
import { SkillsGrid } from '../components/SkillsGrid';
import { ArrowRight } from 'lucide-react';

interface SkillsPageProps {
  language: Language;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ language }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-blue-500/30 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-950/40">
            <span className="text-xs font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
              {language === 'en' ? 'Core Capabilities' : 'मुख्य क्षमताएं'}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Verified Technical Stack
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {language === 'en'
              ? 'Technical & Analytical Competencies'
              : 'तकनीकी एवं विश्लेषणात्मक दक्षता'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'Organized into Data & Analytics, Business & Finance, and Productivity domains. Every competency corresponds strictly to documented tools in my ATS resume.'
              : 'डेटा एवं एनालिटिक्स, व्यवसाय एवं वित्त तथा आधुनिक उत्पादकता टूल्स का सुव्यवस्थित विवरण।'}
          </p>
        </div>
      </div>

      {/* Main Skills Component */}
      <SkillsGrid language={language} />

      {/* Applied Tooling in Practice Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">
              {language === 'en'
                ? 'See these analytical tools applied in real case studies'
                : 'इन एनालिटिकल टूल्स को वास्तविक केस स्टडीज में देखें'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'en'
                ? 'From Excel PivotTable modeling for retail margins to SQL segmentation and Power BI cohort dashboards.'
                : 'खुदरा मार्जिन हेतु एक्सेल पिवट मॉडलिंग से लेकर एसक्यूएल सेगमेंटेशन और पावर बीआई डैशबोर्ड तक।'}
            </p>
          </div>

          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>{language === 'en' ? 'Explore Projects' : 'प्रोजेक्ट्स देखें'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
