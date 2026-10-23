import React, { useState } from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { 
  BarChart3, 
  PieChart, 
  Cpu, 
  Database, 
  Table2, 
  FileSpreadsheet, 
  Terminal, 
  Presentation, 
  Sparkles, 
  TrendingUp, 
  Search, 
  GitBranch, 
  Layers 
} from 'lucide-react';

interface SkillsGridProps {
  language: Language;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Microsoft Excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Power BI':
        return <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'SQL':
        return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Python':
        return <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Tableau':
        return <Table2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Financial Analysis':
        return <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Business Research':
        return <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Budget Variance Analysis':
        return <PieChart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Process Improvement':
        return <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Microsoft PowerPoint':
        return <Presentation className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'AI Productivity Tools':
        return <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Spreadsheet Modeling':
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const categories = portfolioConfig.skillCategories;
  const displayedCategories = activeTab === 'all' 
    ? categories 
    : [categories[activeTab]];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
              {language === 'en' ? 'Core Competencies' : 'मूल दक्षता'}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? 'Technical & Analytical Stack' : 'तकनीकी एवं विश्लेषणात्मक दक्षता'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {language === 'en'
                ? 'Functional proficiency across spreadsheet modeling, business intelligence, database management, and financial analytics.'
                : 'स्प्रेडशीट मॉडलिंग, बिजनेस इंटेलिजेंस, रिलेशनल डेटाबेस और वित्तीय विश्लेषण में व्यावहारिक दक्षता।'}
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 self-start md:self-end shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {language === 'en' ? 'All Skills' : 'सभी कौशल'}
            </button>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {cat.name[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Cards Grid */}
        <div className="space-y-12">
          {displayedCategories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Title */}
              <div className="flex items-center gap-2 mb-6">
                <span className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  {category.name[language]}
                </span>
                <span className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((skill, sIndex) => (
                  <div
                    key={sIndex}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-200 group flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getToolIcon(skill.name)}
                        </div>
                        <span className="font-mono-data text-[11px] text-slate-500 dark:text-slate-400">
                          ATS Sourced
                        </span>
                      </div>

                      <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1.5">
                        {skill.name}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {skill.description[language]}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Verified Competency</span>
                      <span className="font-mono-data text-emerald-600 dark:text-emerald-400 font-semibold">
                        Core Tool
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
