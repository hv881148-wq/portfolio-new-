import React, { useState } from 'react';
import { portfolioConfig, CertificationItem, Language } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, X, FileText } from 'lucide-react';

interface EducationCertificationsProps {
  language: Language;
  onOpenResumeModal: () => void;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({
  language,
  onOpenResumeModal,
}) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
            {language === 'en' ? 'Credentials & Pedigree' : 'शैक्षणिक योग्यता एवं प्रमाण-पत्र'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? 'Education & Certifications' : 'शिक्षा एवं व्यावसायिक प्रमाणन'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            {language === 'en'
              ? 'Academic degrees and professional certifications issued by recognized business institutions and global technology bodies.'
              : 'मान्यता प्राप्त बिजनेस स्कूलों और वैश्विक तकनीकी संस्थानों द्वारा जारी शैक्षणिक डिग्रियां और प्रमाण-पत्र।'}
          </p>
        </div>

        {/* 2-Column Split: Education (Left) & Certifications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left: Formal Education Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                {language === 'en' ? 'Academic Qualifications' : 'शैक्षणिक योग्यता'}
              </h3>
            </div>

            <div className="space-y-4">
              {/* Allenhouse */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-data mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Expected 2028</span>
                  <span>Kanpur, UP</span>
                </div>
                <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  BBA in Finance (Second Year)
                </h4>
                <p className="text-xs font-serif-editorial text-blue-600 dark:text-blue-400 mt-0.5 mb-2">
                  Allenhouse Business School
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'en'
                    ? 'Pursuing core finance, quantitative decision modeling, financial statement analysis, and managerial statistics.'
                    : 'वित्तीय प्रबंधन, परिमाणात्मक निर्णय मॉडलिंग, वित्तीय विवरण विश्लेषण और सांख्यिकी का अध्ययन।'}
                </p>
              </div>

              {/* KR Education Center Class XII */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-data mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">2025</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">74% Aggregate</span>
                </div>
                <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  Senior Secondary (Class XII)
                </h4>
                <p className="text-xs font-serif-editorial text-blue-600 dark:text-blue-400 mt-0.5 mb-2">
                  KR Education Center
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'en'
                    ? 'Senior secondary education with strong quantitative fundamentals in commerce and mathematics.'
                    : 'वाणिज्य और गणित में मजबूत विश्लेषणात्मक आधार के साथ उच्चतर माध्यमिक शिक्षा उत्तीर्ण।'}
                </p>
              </div>

              {/* KR Education Center Class X */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-data mb-2">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">2023</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">79% Aggregate</span>
                </div>
                <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  Secondary School (Class X)
                </h4>
                <p className="text-xs font-serif-editorial text-blue-600 dark:text-blue-400 mt-0.5 mb-2">
                  KR Education Center
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'en'
                    ? 'Comprehensive foundational coursework completed with distinction.'
                    : 'उत्कृष्ट अंकों के साथ माध्यमिक शिक्षा सफलतापूर्वक पूर्ण।'}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Verified Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                  {language === 'en' ? 'Verified Certifications' : 'सत्यापित प्रमाण-पत्र'}
                </h3>
              </div>
              <button
                onClick={onOpenResumeModal}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'View Resume Proof' : 'रिज्यूमे प्रमाण देखें'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {portfolioConfig.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all shadow-sm group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-[11px] font-mono-data uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                      {cert.type[language]}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono-data flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      {cert.date[language]}
                    </span>
                  </div>

                  <h4 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-1">
                    {cert.title[language]}
                  </h4>

                  <p className="text-xs font-serif-editorial text-blue-600 dark:text-blue-400 mb-3">
                    {cert.issuer[language]}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description[language]}
                  </p>

                  {/* Skills learned tag list */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono-data pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                    <span className="text-slate-900 dark:text-white font-semibold">Curriculum:</span>
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="inline-flex items-center">
                        <span>{skill}</span>
                        {sIdx < cert.skillsLearned.length - 1 && (
                          <span className="mx-1 text-slate-300 dark:text-slate-700">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>{language === 'en' ? 'Inspect Details' : 'विवरण देखें'}</span>
                    </button>
                    <span className="text-[11px] font-mono-data text-emerald-600 dark:text-emerald-400 font-semibold">
                      {cert.credentialStatus[language]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-mono-data uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold block mb-1">
              {selectedCert.type[language]}
            </span>

            <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-1">
              {selectedCert.title[language]}
            </h3>

            <p className="text-sm font-serif-editorial text-blue-600 dark:text-blue-400 mb-4">
              {selectedCert.issuer[language]} · {selectedCert.date[language]}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{selectedCert.description[language]}</p>

              <div>
                <span className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider block mb-2 font-mono-data">
                  {language === 'en' ? 'Competencies Covered' : 'कवर की गई दक्षताएं'}
                </span>
                <div className="space-y-1.5">
                  {selectedCert.skillsLearned.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    onOpenResumeModal();
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                >
                  {language === 'en' ? 'View in ATS Resume' : 'एटीएस रिज्यूमे में देखें'}
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  {language === 'en' ? 'Close' : 'बंद करें'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
