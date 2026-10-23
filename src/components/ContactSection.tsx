import React, { useState } from 'react';
import { portfolioConfig, Language } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-blue-600 dark:text-blue-400 mb-2 font-mono-data">
            {language === 'en' ? 'Direct Communication' : 'सीधा संपर्क'}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
            {language === 'en' ? 'Get in Touch' : 'संपर्क स्थापित करें'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            {language === 'en'
              ? 'Available for business analytics internships, financial modeling projects, and collaborative research.'
              : 'बिजनेस एनालिटिक्स इंटर्नशिप, वित्तीय मॉडलिंग प्रोजेक्ट्स और सहयोगात्मक शोध हेतु उपलब्ध।'}
          </p>
        </div>

        {/* Contact Grid: Direct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card (Blue Accent) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono-data uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                {language === 'en' ? 'Direct Email' : 'ईमेल'}
              </span>
              <p className="font-display font-medium text-base text-slate-900 dark:text-white break-all">
                {portfolioConfig.email}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${portfolioConfig.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
              >
                <span>{language === 'en' ? 'Send Email' : 'ईमेल भेजें'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(portfolioConfig.email, 'email')}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Phone Card (Emerald Accent) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono-data uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                {language === 'en' ? 'Phone / Mobile' : 'फोन नंबर'}
              </span>
              <p className="font-display font-medium text-base text-slate-900 dark:text-white">
                {portfolioConfig.phone}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2">
              <a
                href={`tel:${portfolioConfig.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
              >
                <span>{language === 'en' ? 'Call Directly' : 'कॉल करें'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(portfolioConfig.phone, 'phone')}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card (Blue & WhatsApp Green) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono-data uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                {language === 'en' ? 'LinkedIn Network' : 'लिंक्डइन प्रोफाइल'}
              </span>
              <p className="font-display font-medium text-sm text-slate-900 dark:text-white truncate">
                {portfolioConfig.social.linkedinDisplay}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2">
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
              >
                <span>{language === 'en' ? 'Connect on LinkedIn' : 'लिंक्डइन पर जुड़ें'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={portfolioConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                title="Message on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Response Promise Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'en' ? 'Primary Location' : 'प्राथमिक स्थान'}
              </p>
              <p className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                {portfolioConfig.location[language]}
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right font-mono-data">
            <span>{language === 'en' ? 'Active Inquiries: ' : 'सक्रिय संपर्क: '}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              {language === 'en' ? 'Within 24 Hours' : '24 घंटे के भीतर उत्तर'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
