import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioConfig, Language } from '../data/portfolioData';
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: { en: 'Home', hi: 'होम' } },
    { path: '/about', label: { en: 'About & Journey', hi: 'परिचय एवं यात्रा' } },
    { path: '/skills', label: { en: 'Skills & Tools', hi: 'कौशल एवं टूल्स' } },
    { path: '/projects', label: { en: 'Projects Gallery', hi: 'प्रोजेक्ट्स गैलरी' } },
    { path: '/credentials', label: { en: 'Credentials', hi: 'प्रमाण-पत्र' } },
    { path: '/contact', label: { en: 'Contact', hi: 'संपर्क' } },
    { path: '/resume', label: { en: 'Resume PDF', hi: 'रिज्यूमे पीडीएफ' } },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080C14] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand & Page Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80 dark:border-slate-800/80 items-start">
          
          {/* Brand Signature */}
          <div className="md:col-span-5 space-y-3">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full flex items-center justify-center border-2 border-blue-500/40 text-blue-600 dark:text-blue-400 font-display font-bold text-sm bg-blue-50 dark:bg-blue-950/40 group-hover:scale-105 transition-transform">
                {portfolioConfig.monogram}
              </div>
              <span className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                {portfolioConfig.fullName}
              </span>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'Undergraduate Finance Scholar & Data Analyst specializing in spreadsheet modeling, business intelligence, variance analysis, and process optimization.'
                : 'बीबीए फाइनेंस छात्र एवं डेटा एनालिस्ट, जो स्प्रेडशीट मॉडलिंग, बिजनेस इंटेलिजेंस और प्रक्रिया सुधार में विशेषज्ञता रखते हैं।'}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono-data text-slate-500 dark:text-slate-400">
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${portfolioConfig.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              <a
                href={`tel:${portfolioConfig.phoneRaw}`}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Phone</span>
              </a>
            </div>
          </div>

          {/* Quick Page Directory */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono-data uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold block mb-3">
              {language === 'en' ? 'Pages Directory' : 'पृष्ठ निर्देशिका'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline py-1 transition-colors"
                >
                  {link.label[language]}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
              aria-label="Scroll back to top"
            >
              <span>{language === 'en' ? 'Back to Top' : 'शीर्ष पर जाएं'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Factual Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {currentYear} {portfolioConfig.fullName}. {language === 'en' ? 'All rights reserved.' : 'सर्वाधिकार सुरक्षित।'}
          </p>

          <p className="font-mono-data text-[11px] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              {language === 'en' 
                ? 'Portfolio verified strictly against official ATS Resume' 
                : 'आधिकारिक एटीएस रिज्यूमे के अनुसार सत्यापित पोर्टफोलियो'}
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};
