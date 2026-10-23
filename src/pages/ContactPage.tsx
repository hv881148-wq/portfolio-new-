import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../data/portfolioData';
import { ContactSection } from '../components/ContactSection';
import { FileText, Clock } from 'lucide-react';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full border border-blue-500/30 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-950/40">
            <span className="text-xs font-mono-data text-blue-600 dark:text-blue-400 font-semibold">
              {language === 'en' ? 'Direct Communication' : 'सीधा संपर्क'}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-600 dark:text-slate-300">
              {language === 'en' ? 'Form-Free Contact' : 'सीधे संपर्क सूत्र'}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {language === 'en'
              ? 'Connect & Inquiries'
              : 'संपर्क एवं पूछताछ'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'I welcome conversations regarding business analysis internships, financial modeling, process improvement projects, or data consulting.'
              : 'बिजनेस एनालिटिक्स इंटर्नशिप, वित्तीय मॉडलिंग और डेटा परामर्श से संबंधित बातचीत का स्वागत है।'}
          </p>
        </div>
      </div>

      {/* Direct Contact Cards Component */}
      <ContactSection language={language} />

      {/* Response Expectation & Resume Reference */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-1">
                {language === 'en' ? 'Response Time Commitment' : 'प्रतिक्रिया समय आश्वासन'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                {language === 'en'
                  ? 'All professional inquiries via email, LinkedIn, or phone are answered within 24 business hours.'
                  : 'ईमेल, लिंक्डइन या फोन पर सभी व्यावसायिक संदेशों का 24 कार्य घंटों के भीतर उत्तर दिया जाता है।'}
              </p>
            </div>
          </div>

          <Link
            to="/resume"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Review ATS Resume' : 'एटीएस रिज्यूमे देखें'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
