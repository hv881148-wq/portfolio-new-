import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../data/portfolioData';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  language: Language;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ language }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-blue-500/30 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-950/40">
            <span className="text-xs font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
              {language === 'en' ? 'Empirical Case Studies' : 'केस स्टडीज'}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Excel · SQL · Power BI
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {language === 'en'
              ? 'Projects & Analytical Modeling'
              : 'प्रोजेक्ट्स एवं विश्लेषणात्मक मॉडलिंग'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'Factual portfolio projects addressing retail profitability, financial variance tracking, and customer retention segmentation.'
              : 'खुदरा लाभप्रदता, वित्तीय भिन्नता ट्रैकिंग और ग्राहक प्रतिधारण पर केंद्रित परिमाणात्मक परियोजनाएं।'}
          </p>
        </div>
      </div>

      {/* Main Projects Gallery Component */}
      <ProjectsGallery language={language} />

      {/* Project Methodology Promise */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
              {language === 'en' ? 'Verified ATS Resume Specifications' : 'सत्यापित एटीएस रिज्यूमे विवरण'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {language === 'en'
                ? 'All project titles, statuses (In Progress / Planned), and analytical descriptions correspond strictly to official documents.'
                : 'सभी परियोजना शीर्षक, स्थिति (प्रगति पर / नियोजित) और विवरण आधिकारिक दस्तावेजों के अनुरूप हैं।'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/credentials"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <span>{language === 'en' ? 'View Credentials' : 'प्रमाण-पत्र देखें'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
