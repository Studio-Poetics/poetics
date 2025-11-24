
import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Helper to scroll to top on nav change
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <HeroManifesto />
            <PoeticMachine />
            <ProjectList onNavigate={handleNavigate} />
          </>
        );
      case Page.CONSULTANCY:
        return <Consultancy onNavigate={handleNavigate} />;
      case Page.GLASSCAPE:
        return <Glasscape onNavigate={handleNavigate} />;
      case Page.GLASSCAPE_HORIZON:
        return <GlasscapeHorizon onNavigate={handleNavigate} />;
      case Page.CASE_STUDY_IBW:
        return <CaseStudyIBW onNavigate={handleNavigate} />;
      case Page.CASE_STUDY_RECLAIM:
        return <CaseStudyReclaim onNavigate={handleNavigate} />;
      case Page.CASE_STUDY_SPACE:
        return <CaseStudySpace onNavigate={handleNavigate} />;
      case Page.CASE_STUDY_WORDSPRINT:
        return <CaseStudyWordsprint onNavigate={handleNavigate} />;
      case Page.CASE_STUDY_MICRO_GOLD:
        return <CaseStudyMicroGold onNavigate={handleNavigate} />;
      case Page.GAMES:
        return <Games onNavigate={handleNavigate} />;
      case Page.ABOUT:
        return <About />;
      case Page.JOURNAL:
        return <Journal />;
      case Page.EXPERIMENTS:
        return <Experiments />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <HeroManifesto />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-[#FF4400] selection:text-white bg-[#F6F6F4]">
      {currentPage !== Page.CASE_STUDY_IBW && currentPage !== Page.CASE_STUDY_RECLAIM && currentPage !== Page.CASE_STUDY_SPACE && currentPage !== Page.CASE_STUDY_WORDSPRINT && currentPage !== Page.CASE_STUDY_MICRO_GOLD && currentPage !== Page.GLASSCAPE && currentPage !== Page.GLASSCAPE_HORIZON && (
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      {/* Navigation for Glasscape (We might want it visible but customized, for now we keep standard nav or hidden if full immersion desired. 
          Let's show Nav for Glasscape to keep site navigable, but maybe dark mode compatible? 
          For simplicity in this architecture, we will RENDER navigation but Glasscape overrides styles.
      */}
      {currentPage === Page.GLASSCAPE && (
         // We render Navigation but overlay it or let it sit on top. 
         // Since Navigation is fixed, it will appear.
         // Ideally Navigation needs to support dark mode context.
         // For now, let's keep it visible.
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      <main className={`flex-grow ${currentPage !== Page.CASE_STUDY_IBW && currentPage !== Page.CASE_STUDY_RECLAIM && currentPage !== Page.CASE_STUDY_SPACE && currentPage !== Page.CASE_STUDY_WORDSPRINT && currentPage !== Page.CASE_STUDY_MICRO_GOLD && currentPage !== Page.GLASSCAPE && currentPage !== Page.GLASSCAPE_HORIZON ? 'pt-16' : ''} animate-in fade-in duration-500`}>
        {renderPage()}
      </main>
      
      {currentPage !== Page.GLASSCAPE && currentPage !== Page.GLASSCAPE_HORIZON && <Footer onNavigate={handleNavigate} />}
      {/* Glasscape has its own footer style or included footer */}
      {(currentPage === Page.GLASSCAPE || currentPage === Page.GLASSCAPE_HORIZON) && <Footer onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;
