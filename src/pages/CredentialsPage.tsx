import React from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { EducationCertifications } from '../components/EducationCertifications';
import { AchievementsSection } from '../components/AchievementsSection';
import { FileText, ShieldCheck, Download } from 'lucide-react';

interface CredentialsPageProps {
  language: Language;
  onOpenResumeModal: () => void;
}

export const CredentialsPage: React.FC<CredentialsPageProps> = ({
  language,
  onOpenResumeModal,
}) => {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-blue-500/30 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-950/40">
            <span className="text-xs font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
              {language === 'en' ? 'Institutional Verification' : 'संस्थागत सत्यापन'}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              NISM · IBM SkillsBuild · Allenhouse
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {language === 'en'
              ? 'Education, Certifications & Achievements'
              : 'शिक्षा, प्रमाणन एवं उपलब्धियां'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'Academic degrees, competitive recognitions in national financial literacy, and technical AI & sustainability credentials verified by IBM.'
              : 'शैक्षणिक योग्यता, राष्ट्रीय वित्तीय साक्षरता प्रतियोगिता में मान्यता तथा आईबीएम द्वारा प्रमाणित एआई और सस्टेनेबिलिटी क्रेडेंशियल्स।'}
          </p>
        </div>
      </div>

      {/* Formal Education & Certifications */}
      <EducationCertifications
        language={language}
        onOpenResumeModal={onOpenResumeModal}
      />

      {/* Verified Achievements & Honors */}
      <AchievementsSection language={language} />

      {/* Official ATS Verification Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-1">
                {language === 'en' ? 'Verified Document Trail' : 'सत्यापित दस्तावेज रिकॉर्ड'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                {language === 'en'
                  ? 'All entries above are backed by official academic transcripts, participation certificates, and IBM SkillsBuild records documented in my resume.'
                  : 'उपर्युक्त सभी विवरण आधिकारिक शैक्षणिक प्रमाणपत्रों, प्रतिभागिता प्रमाण-पत्रों और आईबीएम रिकॉर्ड्स द्वारा समर्थित हैं।'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'View Resume Document' : 'रिज्यूमे दस्तावेज देखें'}</span>
            </button>
            <a
              href={portfolioConfig.resumePdfUrl}
              download={portfolioConfig.resumeFileName}
              className="px-4 py-2.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Download' : 'डाउनलोड'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
