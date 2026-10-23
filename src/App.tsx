/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Language } from './data/portfolioData';
import { ScrollToTop } from './components/ScrollToTop';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

// Dedicated multi-page route views
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CredentialsPage } from './pages/CredentialsPage';
import { ContactPage } from './pages/ContactPage';
import { ResumePage } from './pages/ResumePage';

export default function App() {
  // Theme state: dark mode by default
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('hv_theme_mode');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return true; // Default dark
  });

  // Language state: 'en' by default
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('hv_language');
      if (savedLang === 'en' || savedLang === 'hi') {
        return savedLang;
      }
    }
    return 'en';
  });

  // Intro animation visibility (shown once per session or on demand)
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const hasSeenIntro = sessionStorage.getItem('hv_intro_shown');
      return !hasSeenIntro;
    }
    return true;
  });

  // Quick Resume modal state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Sync theme with document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('hv_theme_mode', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('hv_theme_mode', 'light');
    }
  }, [isDarkMode]);

  // Sync language with document & localStorage
  useEffect(() => {
    localStorage.setItem('hv_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('hv_intro_shown', 'true');
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#080C14] text-slate-900 dark:text-white transition-colors duration-200">
        {/* Scroll to top on every route transition */}
        <ScrollToTop />

        {/* Intro Animation (shown once per session) */}
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

        {/* Floating Multi-Page Navigation */}
        <Navbar
          language={language}
          onLanguageChange={setLanguage}
          isDarkMode={isDarkMode}
          onThemeToggle={toggleTheme}
        />

        {/* Main Content Router */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  language={language}
                  onOpenResumeModal={() => setIsResumeModalOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage language={language} />}
            />
            <Route
              path="/skills"
              element={<SkillsPage language={language} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage language={language} />}
            />
            <Route
              path="/credentials"
              element={
                <CredentialsPage
                  language={language}
                  onOpenResumeModal={() => setIsResumeModalOpen(true)}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage language={language} />}
            />
            <Route
              path="/resume"
              element={<ResumePage language={language} />}
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Multi-Page Footer */}
        <Footer language={language} />

        {/* Quick Resume Modal Viewer (Accessible from anywhere) */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
          language={language}
        />
      </div>
    </BrowserRouter>
  );
}
