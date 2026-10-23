import React, { useEffect } from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { X, Download, ExternalLink, FileCheck, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, language }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Resume Document Viewer"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080C14]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                {portfolioConfig.fullName} — {language === 'en' ? 'ATS Resume' : 'एटीएस रिज्यूमे'}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono-data">
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {language === 'en' ? 'Verified Document' : 'सत्यापित दस्तावेज'}
                </span>
                <span>·</span>
                <span>PDF (Official)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open in New Window */}
            <a
              href={portfolioConfig.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Open in Tab' : 'नए टैब में खोलें'}</span>
            </a>

            {/* Download Button */}
            <a
              href={portfolioConfig.resumePdfUrl}
              download={portfolioConfig.resumeFileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Download' : 'डाउनलोड'}</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Frame + Quick Summary Panel */}
        <div className="flex-1 flex flex-col md:flex-row h-full min-h-[500px] overflow-hidden">
          {/* PDF Viewer */}
          <div className="flex-1 bg-slate-100 dark:bg-black/50 relative h-[450px] md:h-auto">
            <iframe
              src={`${portfolioConfig.resumePdfUrl}#view=FitH`}
              title="Harshit Verma ATS Resume"
              className="w-full h-full border-0"
            />
            {/* Fallback overlay */}
            <div className="absolute bottom-2 left-2 right-2 p-2 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur rounded border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-600 dark:text-slate-300 md:hidden">
              <span>{language === 'en' ? 'Mobile browser? Tap ' : 'मोबाइल ब्राउज़र? '}</span>
              <a
                href={portfolioConfig.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-blue-600 dark:text-blue-400"
              >
                {language === 'en' ? 'Open in Tab' : 'नए टैब में खोलें'}
              </a>
              <span>{language === 'en' ? ' to view or download directly.' : ' पर क्लिक करें।'}</span>
            </div>
          </div>

          {/* Quick Verified Snapshot on Right */}
          <div className="w-full md:w-80 p-5 overflow-y-auto border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0A0E17]/70">
            <h4 className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 mb-3 font-mono-data">
              {language === 'en' ? 'ATS Source Summary' : 'एटीएस स्रोत सारांश'}
            </h4>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">
                  {language === 'en' ? 'Candidate' : 'अभ्यर्थी'}
                </span>
                <span className="font-semibold text-sm text-slate-900 dark:text-white">
                  {portfolioConfig.fullName}
                </span>
                <span className="block text-slate-600 dark:text-slate-400">
                  {portfolioConfig.location[language]}
                </span>
              </div>

              <div>
                <span className="text-slate-500 dark:text-slate-400 block">
                  {language === 'en' ? 'Primary Focus' : 'प्राथमिक फोकस'}
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {portfolioConfig.title[language]}
                </span>
              </div>

              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">
                  {language === 'en' ? 'Academic Program' : 'शैक्षणिक कार्यक्रम'}
                </span>
                <p className="font-semibold text-slate-900 dark:text-white">
                  BBA Finance (Second Year)
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Allenhouse Business School (Exp. 2028)
                </p>
              </div>

              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">
                  {language === 'en' ? 'Technical Stack' : 'तकनीकी कौशल'}
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-900 dark:text-white font-mono-data">
                  <span className="text-emerald-600 dark:text-emerald-400">Excel</span>
                  <span>·</span>
                  <span className="text-blue-600 dark:text-blue-400">Power BI</span>
                  <span>·</span>
                  <span className="text-blue-600 dark:text-blue-400">SQL</span>
                  <span>·</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Python</span>
                  <span>·</span>
                  <span className="text-blue-600 dark:text-blue-400">Tableau</span>
                </div>
              </div>

              <div>
                <span className="text-slate-500 dark:text-slate-400 block mb-1">
                  {language === 'en' ? 'Verified Credentials' : 'सत्यापित प्रमाण-पत्र'}
                </span>
                <ul className="space-y-1 text-slate-800 dark:text-slate-200">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>IBM SkillsBuild: AI Fundamentals</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>IBM SkillsBuild: Sustainability</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>NISM: National Financial Literacy Quiz</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={portfolioConfig.resumePdfUrl}
                  download={portfolioConfig.resumeFileName}
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Download Official PDF' : 'आधिकारिक PDF डाउनलोड करें'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
