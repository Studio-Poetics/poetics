
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Page } from './types';
import Navigation from './components/Navigation';
import HeroManifesto from './components/HeroManifesto';
import PoeticMachine from './components/PoeticMachine';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Consultancy from './components/Consultancy';
import Games from './components/Games';
import About from './components/About';
import Journal from './components/Journal';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import CaseStudyIBW from './components/CaseStudyIBW';
import CaseStudyReclaim from './components/CaseStudyReclaim';
import CaseStudySpace from './components/CaseStudySpace';
import CaseStudyWordsprint from './components/CaseStudyWordsprint';
import CaseStudyMicroGold from './components/CaseStudyMicroGold';
import Glasscape from './components/Glasscape';
import GlasscapeHorizon from './components/GlasscapeHorizon';

// URL to Page mapping
const URL_TO_PAGE: Record<string, Page> = {
  '/': Page.HOME,
  '/consultancy': Page.CONSULTANCY,
  '/glasscape': Page.GLASSCAPE,
  '/glasscape/horizon': Page.GLASSCAPE_HORIZON,
  '/work/india-blockchain-week': Page.CASE_STUDY_IBW,
  '/work/reclaim-protocol': Page.CASE_STUDY_RECLAIM,
  '/work/space-film': Page.CASE_STUDY_SPACE,
  '/work/wordsprint': Page.CASE_STUDY_WORDSPRINT,
  '/work/micro-gold': Page.CASE_STUDY_MICRO_GOLD,
  '/games': Page.GAMES,
  '/about': Page.ABOUT,
  '/journal': Page.JOURNAL,
  '/experiments': Page.EXPERIMENTS,
  '/contact': Page.CONTACT,
};

// Page to URL mapping
const PAGE_TO_URL: Record<Page, string> = {
  [Page.HOME]: '/',
  [Page.CONSULTANCY]: '/consultancy',
  [Page.GLASSCAPE]: '/glasscape',
  [Page.GLASSCAPE_HORIZON]: '/glasscape/horizon',
  [Page.CASE_STUDY_IBW]: '/work/india-blockchain-week',
  [Page.CASE_STUDY_RECLAIM]: '/work/reclaim-protocol',
  [Page.CASE_STUDY_SPACE]: '/work/space-film',
  [Page.CASE_STUDY_WORDSPRINT]: '/work/wordsprint',
  [Page.CASE_STUDY_MICRO_GOLD]: '/work/micro-gold',
  [Page.GAMES]: '/games',
  [Page.ABOUT]: '/about',
  [Page.JOURNAL]: '/journal',
  [Page.EXPERIMENTS]: '/experiments',
  [Page.CONTACT]: '/contact',
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Get current page from URL
  const currentPage = URL_TO_PAGE[location.pathname] || Page.HOME;

  // Navigation handler that uses React Router
  const handleNavigate = (page: Page) => {
    const url = PAGE_TO_URL[page];
    if (url) {
      navigate(url);
    }
  };

  // Determine if navigation should be shown
  const hideNavPages = [
    Page.CASE_STUDY_IBW,
    Page.CASE_STUDY_RECLAIM,
    Page.CASE_STUDY_SPACE,
    Page.CASE_STUDY_WORDSPRINT,
    Page.CASE_STUDY_MICRO_GOLD,
    Page.GLASSCAPE_HORIZON,
  ];

  const showNav = !hideNavPages.includes(currentPage);
  const showFooter = currentPage !== Page.GLASSCAPE && currentPage !== Page.GLASSCAPE_HORIZON;

  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-[#FF4400] selection:text-white bg-[#F6F6F4]">
      {showNav && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}
      {currentPage === Page.GLASSCAPE && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}

      <main className={`flex-grow ${showNav ? 'pt-16' : ''} animate-in fade-in duration-500`}>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroManifesto />
                <PoeticMachine />
                <ProjectList onNavigate={handleNavigate} />
              </>
            }
          />

          {/* Main Pages */}
          <Route path="/consultancy" element={<Consultancy onNavigate={handleNavigate} />} />
          <Route path="/games" element={<Games onNavigate={handleNavigate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/contact" element={<Contact />} />

          {/* Glasscape */}
          <Route path="/glasscape" element={<Glasscape onNavigate={handleNavigate} />} />
          <Route path="/glasscape/horizon" element={<GlasscapeHorizon onNavigate={handleNavigate} />} />

          {/* Case Studies */}
          <Route path="/work/india-blockchain-week" element={<CaseStudyIBW onNavigate={handleNavigate} />} />
          <Route path="/work/reclaim-protocol" element={<CaseStudyReclaim onNavigate={handleNavigate} />} />
          <Route path="/work/space-film" element={<CaseStudySpace onNavigate={handleNavigate} />} />
          <Route path="/work/wordsprint" element={<CaseStudyWordsprint onNavigate={handleNavigate} />} />
          <Route path="/work/micro-gold" element={<CaseStudyMicroGold onNavigate={handleNavigate} />} />

          {/* 404 - Redirect to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {showFooter && <Footer onNavigate={handleNavigate} />}
      {(currentPage === Page.GLASSCAPE || currentPage === Page.GLASSCAPE_HORIZON) && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
};

// Navigate component for 404 redirect
const Navigate: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, [to, navigate]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
