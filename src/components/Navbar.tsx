import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioConfig, Language } from '../data/portfolioData';
import { Moon, Sun, Globe, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  isDarkMode,
  onThemeToggle,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: { en: 'Home', hi: 'होम' } },
    { path: '/about', label: { en: 'About', hi: 'परिचय' } },
    { path: '/skills', label: { en: 'Skills', hi: 'कौशल' } },
    { path: '/projects', label: { en: 'Projects', hi: 'प्रोजेक्ट्स' } },
    { path: '/credentials', label: { en: 'Credentials', hi: 'प्रमाण-पत्र' } },
    { path: '/contact', label: { en: 'Contact', hi: 'संपर्क' } },
  ];

  return (
    <>
      {/* Floating Capsule Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <nav
            className={`flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? 'bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/50 border border-slate-200 dark:border-slate-800'
                : 'bg-white/80 dark:bg-[#0F172A]/75 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800/80'
            }`}
            aria-label="Main Navigation"
          >
            {/* Zone 1: Monogram / Brand Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-blue-500/40 dark:border-blue-400/50 bg-blue-50 dark:bg-blue-950/40 group-hover:border-blue-600 transition-colors">
                <span className="font-display font-bold text-xs tracking-wider text-blue-600 dark:text-blue-400">
                  {portfolioConfig.monogram}
                </span>
              </div>
              <span className="font-display font-semibold text-sm tracking-tight hidden sm:inline text-slate-900 dark:text-white">
                {portfolioConfig.fullName}
              </span>
            </Link>

            {/* Zone 2: Multi-Page Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`whitespace-nowrap transition-colors duration-150 relative py-1 hover:text-blue-600 dark:hover:text-blue-400 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : ''
                    }`}
                  >
                    {item.label[language]}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Zone 3: Actions (Language toggle, Dark mode toggle, Resume view, Mobile trigger) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Switcher */}
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 transition-colors whitespace-nowrap"
                title={language === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="font-mono-data text-[11px] font-semibold">
                  {language === 'en' ? 'HI' : 'EN'}
                </span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={onThemeToggle}
                className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-blue-600" />
                )}
              </button>

              {/* Dedicated Resume Page Link with Emerald/Blue accents */}
              <Link
                to="/resume"
                className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap shadow-sm ${
                  location.pathname === '/resume'
                    ? 'bg-blue-700 dark:bg-blue-500 text-white ring-2 ring-emerald-400'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Resume' : 'रिज्यूमे'}</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 left-4 right-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{item.label[language]}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <Link
                  to="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Resume Page' : 'रिज्यूमे पृष्ठ'}</span>
                </Link>

                <a
                  href={portfolioConfig.resumePdfUrl}
                  download={portfolioConfig.resumeFileName}
                  className="px-3 py-2 text-xs font-medium border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === 'en' ? 'PDF' : 'पीडीएफ'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
