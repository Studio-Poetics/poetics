
import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Practice', page: Page.HOME },
    { label: 'Glasscape', page: Page.GLASSCAPE },
    { label: 'Games', page: Page.GAMES },
    { label: 'Consultancy', page: Page.CONSULTANCY },
    { label: 'Experiments', page: Page.EXPERIMENTS },
    { label: 'Journal', page: Page.JOURNAL },
    { label: 'About', page: Page.ABOUT },
    { label: 'Contact', page: Page.CONTACT },
  ];

  const handleMobileNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#F6F6F4]/95 backdrop-blur-md border-b border-black/5">
        <div className="flex justify-between items-center px-6 py-4 md:px-12 md:py-6">
          {/* Logo */}
          <div 
            className="flex items-center gap-4 cursor-pointer z-50 relative"
            onClick={() => handleMobileNavigate(Page.HOME)}
          >
            <div className="w-3 h-3 bg-[#FF4400] rounded-full animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-black/80">
              poetics.studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => onNavigate(item.page)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors whitespace-nowrap ${
                  currentPage === item.page ? 'text-[#FF4400]' : 'text-black/60 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://eth.poetics.studio" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border border-black/10 rounded-full text-xs font-mono uppercase hover:bg-black hover:text-white transition-all whitespace-nowrap"
            >
              Community Lab ↗
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative p-2 -mr-2 text-black/80 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F6F6F4] flex flex-col items-center justify-center animate-in fade-in duration-300 md:hidden">
           <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.label} 
                onClick={() => handleMobileNavigate(item.page)}
                className={`text-3xl font-light tracking-tight transition-colors ${
                  currentPage === item.page ? 'text-[#FF4400]' : 'text-black/80'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="w-12 h-[1px] bg-black/10 my-4" />
             <a 
              href="https://eth.poetics.studio" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono uppercase tracking-widest text-black/60 hover:text-[#FF4400] transition-colors"
            >
              Community Lab ↗
            </a>
           </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
