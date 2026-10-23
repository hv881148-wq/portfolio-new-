import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioConfig, Language } from '../data/portfolioData';
import { Hero } from '../components/Hero';
import { 
  ArrowRight, 
  FileSpreadsheet, 
  BarChart3, 
  Database, 
  TrendingUp, 
  Sparkles, 
  FileText 
} from 'lucide-react';

interface HomePageProps {
  language: Language;
  onOpenResumeModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ language, onOpenResumeModal }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero language={language} onOpenResumeModal={onOpenResumeModal} />

      {/* Featured Projects Spotlight */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
                {language === 'en' ? 'Analytical Spotlight' : 'विशेष एनालिटिक्स कार्य'}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                {language === 'en' ? 'Featured Case Studies' : 'प्रमुख केस स्टडीज'}
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline self-start sm:self-end"
            >
              <span>{language === 'en' ? 'View All 3 Projects' : 'सभी 3 प्रोजेक्ट्स देखें'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioConfig.projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-data mb-3">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{project.category[language]}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{project.status[language]}</span>
                  </div>

                  <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                    {project.title[language]}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.summary[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono-data text-slate-500 dark:text-slate-400">
                    {project.technologies[0]} · {project.technologies[1]}
                  </span>
                  <Link
                    to="/projects"
                    className="text-xs text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>{language === 'en' ? 'Details' : 'विवरण'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Approach Overview Section */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 font-mono-data">
                {language === 'en' ? 'Professional Philosophy' : 'व्यावसायिक दृष्टिकोण'}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                {language === 'en' 
                  ? 'Bridging academic finance with computational analytics.' 
                  : 'शैक्षणिक वित्त को परिमाणात्मक एनालिटिक्स से जोड़ना।'}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {portfolioConfig.about.narrative[language][0]}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {portfolioConfig.about.narrative[language][1]}
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                >
                  <span>{language === 'en' ? 'Explore Full Background & Journey' : 'पूर्ण विवरण एवं यात्रा देखें'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {portfolioConfig.about.corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-white mb-1">
                    {pillar.title[language]}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc[language]}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Skills & Tech Teaser */}
      <section className="py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
                {language === 'en' ? 'Toolchain & Capabilities' : 'तकनीकी दक्षता'}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-slate-900 dark:text-white tracking-tight">
                {language === 'en' ? 'Core Technology Stack' : 'प्रमुख तकनीकी स्टैक'}
              </h2>
            </div>

            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline self-start sm:self-end"
            >
              <span>{language === 'en' ? 'Inspect All Competencies' : 'सभी कौशल देखें'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Microsoft Excel', sub: 'PivotTables & Modeling', icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> },
              { name: 'Power BI', sub: 'DAX & Dashboards', icon: <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" /> },
              { name: 'SQL', sub: 'Queries & JOINs', icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" /> },
              { name: 'Python', sub: 'Data Manipulation', icon: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> },
              { name: 'Tableau', sub: 'Visual Analytics', icon: <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" /> },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-center gap-2 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xs text-slate-900 dark:text-white">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono-data">
                    {tool.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Direct Contact Banner (White/Blue/Black/Green) */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-600/10 via-slate-100/50 to-emerald-600/10 dark:from-blue-950/30 dark:via-[#080C14]/50 dark:to-emerald-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-1">
              {language === 'en' ? 'Interested in collaborating?' : 'क्या आप संपर्क करना चाहते हैं?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {language === 'en'
                ? 'Open for business analytics internships, financial modeling opportunities, and research.'
                : 'बिजनेस एनालिटिक्स इंटर्नशिप और वित्तीय मॉडलिंग अवसरों हेतु तत्पर।'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors whitespace-nowrap shadow-sm"
            >
              {language === 'en' ? 'Contact Details' : 'संपर्क विवरण'}
            </Link>
            <Link
              to="/resume"
              className="px-4 py-2.5 rounded-full text-xs font-semibold border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors whitespace-nowrap"
            >
              {language === 'en' ? 'View Resume PDF' : 'रिज्यूमे देखें'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
