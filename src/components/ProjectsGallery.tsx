import React, { useState, useEffect } from 'react';
import { portfolioConfig, ProjectItem, Language } from '../data/portfolioData';
import { 
  FileSpreadsheet, 
  BarChart, 
  ExternalLink, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Clock, 
  Table, 
  ChevronRight 
} from 'lucide-react';

interface ProjectsGalleryProps {
  language: Language;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'analytics' | 'finance' | 'bi'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filterOptions = [
    { key: 'all' as const, label: { en: 'All Projects', hi: 'सभी प्रोजेक्ट्स' } },
    { key: 'analytics' as const, label: { en: 'Retail Analytics', hi: 'खुदरा विश्लेषण' } },
    { key: 'finance' as const, label: { en: 'Financial Modeling', hi: 'वित्तीय मॉडलिंग' } },
    { key: 'bi' as const, label: { en: 'SQL & Power BI', hi: 'एसक्यूएल एवं पावर बीआई' } },
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioConfig.projects
    : portfolioConfig.projects.filter((p) => p.categoryKey === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
              {language === 'en' ? 'Portfolio Case Studies' : 'पोर्टफोलियो केस स्टडीज'}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
              {language === 'en' ? 'Featured Analytics & Modeling' : 'विशेष एनालिटिक्स एवं मॉडलिंग प्रोजेक्ट्स'}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {language === 'en'
                ? 'Empirical quantitative projects addressing retail profitability, expense variance, and repeat customer retention.'
                : 'खुदरा लाभप्रदता, बजट भिन्नता और ग्राहक प्रतिधारण पर केंद्रित परिमाणात्मक परियोजनाएं।'}
            </p>
          </div>

          {/* Interactive Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 self-start md:self-end shadow-sm">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setActiveFilter(opt.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === opt.key
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {opt.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isInProgress = project.status.en === 'In Progress';
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md group"
              >
                {/* Visual Header / Preview Area */}
                <div 
                  className="relative h-44 bg-gradient-to-br from-blue-500/10 via-slate-100/40 to-emerald-500/10 dark:from-blue-900/20 dark:via-[#0A0D14]/50 dark:to-emerald-900/20 border-b border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono-data tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold">
                      {project.category[language]}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                      <Clock className="w-3 h-3 text-emerald-500" />
                      {project.status[language]}
                    </span>
                  </div>

                  {/* Graphic Mockup Element */}
                  <div className="flex items-center justify-center py-2">
                    <div className="w-16 h-16 rounded-2xl bg-white/90 dark:bg-[#162032]/90 backdrop-blur border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md group-hover:scale-110 transition-transform">
                      {project.categoryKey === 'analytics' && <Table className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
                      {project.categoryKey === 'finance' && <FileSpreadsheet className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                      {project.categoryKey === 'bi' && <BarChart className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono-data">
                    <span>{language === 'en' ? 'Click to inspect methodology' : 'पद्धति विवरण देखने हेतु क्लिक करें'}</span>
                    <Maximize2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                      {project.title[language]}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.summary[language]}
                    </p>

                    {/* Zero-Pill Unboxed Tech Tags */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono-data mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="inline-flex items-center">
                          <span>{tech}</span>
                          {idx < Math.min(project.technologies.length, 4) - 1 && (
                            <span className="mx-1 text-slate-300 dark:text-slate-700">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>{language === 'en' ? 'View Methodology' : 'पद्धति देखें'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[11px] font-mono-data text-emerald-600 dark:text-emerald-400 font-semibold">
                      {isInProgress ? 'Active Phase' : 'Specification Ready'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 font-mono-data text-xs text-blue-600 dark:text-blue-400 font-semibold">
                <span>{selectedProject.category[language]}</span>
                <span>·</span>
                <span className="text-emerald-600 dark:text-emerald-400">{selectedProject.status[language]}</span>
              </div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-slate-900 dark:text-white">
                {selectedProject.title[language]}
              </h3>
            </div>

            {/* Full Summary */}
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-2 font-mono-data">
                  {language === 'en' ? 'Project Overview' : 'परियोजना विवरण'}
                </h4>
                <p>{selectedProject.summary[language]}</p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-2 font-mono-data">
                  {language === 'en' ? 'Analytical Methodology' : 'विश्लेषणात्मक पद्धति'}
                </h4>
                <p className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {selectedProject.methodology[language]}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-2 font-mono-data">
                  {language === 'en' ? 'Planned Business Deliverables' : 'नियोजित परिणाम एवं उपलब्धियां'}
                </h4>
                <div className="space-y-2">
                  {selectedProject.deliverables[language].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-2 font-mono-data">
                  {language === 'en' ? 'Strategic Business Impact' : 'रणनीतिक प्रभाव'}
                </h4>
                <p className="italic text-slate-900 dark:text-white font-medium">
                  "{selectedProject.impact[language]}"
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-2 font-mono-data">
                  {language === 'en' ? 'Toolchain & Formats' : 'टूल्स एवं फॉर्मेट्स'}
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedProject.technologies.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono-data"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified ATS Notice */}
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-xs text-slate-800 dark:text-slate-200 flex items-center justify-between border border-blue-500/20">
                <span>
                  {language === 'en'
                    ? 'Project scope & status confirmed directly from Harshit Verma resume.'
                    : 'हर्षित वर्मा के रिज्यूमे से सीधे सत्यापित परियोजना विवरण।'}
                </span>
                <span className="font-mono-data font-bold text-emerald-600 dark:text-emerald-400">
                  ATS Verified
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
