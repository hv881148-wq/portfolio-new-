import React from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { 
  Download, 
  ExternalLink, 
  FileCheck, 
  CheckCircle2 
} from 'lucide-react';

interface ResumePageProps {
  language: Language;
}

export const ResumePage: React.FC<ResumePageProps> = ({ language }) => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-blue-500/30 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-950/40">
              <span className="text-xs font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
                {language === 'en' ? 'Official Document' : 'आधिकारिक दस्तावेज'}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-600 dark:text-slate-300">
                PDF · ATS Standard Format
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight mb-2">
              {portfolioConfig.fullName} — {language === 'en' ? 'ATS Resume' : 'एटीएस रिज्यूमे'}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {language === 'en'
                ? 'Original resume document uploaded for institutional and employer review.'
                : 'नियोक्ताओं एवं संस्थागत समीक्षा हेतु मूल सत्यापित रिज्यूमे दस्तावेज।'}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <a
              href={portfolioConfig.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Open in Tab' : 'नए टैब में खोलें'}</span>
            </a>

            <a
              href={portfolioConfig.resumePdfUrl}
              download={portfolioConfig.resumeFileName}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Download PDF' : 'डाउनलोड PDF'}</span>
            </a>
          </div>
        </div>

        {/* Embedded Viewer + ATS Data Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Full-Height Embedded PDF Viewer */}
          <div className="lg:col-span-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080C14] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-data">
              <span className="flex items-center gap-1.5 text-slate-900 dark:text-white font-medium">
                <FileCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Harshit_Verma_Resume_ATS.pdf</span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">1 Page · ATS Standard</span>
            </div>

            <div className="w-full h-[720px] bg-slate-100 dark:bg-black/50 relative">
              <iframe
                src={`${portfolioConfig.resumePdfUrl}#view=FitH`}
                title="Harshit Verma Resume ATS"
                className="w-full h-full border-0"
              />

              {/* Mobile notice */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-600 dark:text-slate-300 lg:hidden">
                <span>{language === 'en' ? 'Viewing on mobile? ' : 'मोबाइल पर देख रहे हैं? '}</span>
                <a
                  href={portfolioConfig.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 underline"
                >
                  {language === 'en' ? 'Tap here to open full PDF' : 'यहाँ टैप करें'}
                </a>
              </div>
            </div>
          </div>

          {/* Right: ATS Summary & Verification Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Candidate Overview Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 font-mono-data mb-4">
                {language === 'en' ? 'Document Metadata' : 'दस्तावेज विवरण'}
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Candidate Name</span>
                  <span className="font-semibold text-sm text-slate-900 dark:text-white">
                    {portfolioConfig.fullName}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Location</span>
                  <span className="text-slate-800 dark:text-slate-200">
                    {portfolioConfig.location[language]}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Email</span>
                  <span className="font-mono-data text-blue-600 dark:text-blue-400">
                    {portfolioConfig.email}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Phone</span>
                  <span className="font-mono-data text-emerald-600 dark:text-emerald-400 font-semibold">
                    {portfolioConfig.phone}
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">LinkedIn</span>
                  <a
                    href={portfolioConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline truncate block"
                  >
                    {portfolioConfig.social.linkedinDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Education Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 font-mono-data mb-4">
                {language === 'en' ? 'Documented Education' : 'अभिलेखित शिक्षा'}
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    BBA, Finance (Second Year)
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Allenhouse Business School, Kanpur
                  </p>
                  <span className="text-[11px] font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
                    Expected 2028
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Class XII — 74%
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    KR Education Center (2025)
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Class X — 79%
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    KR Education Center (2023)
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Certifications */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400 font-mono-data mb-3">
                {language === 'en' ? 'Verified Credentials' : 'सत्यापित प्रमाणन'}
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      AI Fundamentals
                    </span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                      IBM SkillsBuild (May 2026)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Sustainability & Technology
                    </span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                      IBM SkillsBuild (Dec 2025)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      National Financial Literacy Quiz
                    </span>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                      NISM Certificate of Participation (2026)
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
