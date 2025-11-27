
import React from 'react';
import SEO from './SEO';
import { ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface GamesProps {
  onNavigate: (page: Page) => void;
}

const Games: React.FC<GamesProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#F0F0EE]">
        <SEO
            title="Ludic Interfaces & Indie Games"
            description="We develop games that explore play as the highest form of research. Monsoon Stories and Wordsprint."
            keywords={['Indie Game Dev', 'Monsoon Stories', 'Wordsprint', 'Cozy Games', 'Narrative Games']}
        />

        <header className="mb-24 max-w-6xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Ludic Interfaces</span>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12">
                Play is the <br/>highest form of research.
            </h1>
        </header>

        {/* ======================== TWO GAMES GRID ======================== */}
        <section className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* ======================== MONSOON STORIES ======================== */}
                <div
                    className="bg-white border border-black/5 overflow-hidden cursor-pointer group"
                    onClick={() => onNavigate(Page.MONSOON_STORIES)}
                >
                    <div className="relative bg-gradient-to-br from-[#7B8FA1] to-[#4A5F73] h-[400px] overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                         {/* Hero Video */}
                         <video
                            src="/images/monsoon/hero-monsoon.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                         />

                         <span className="absolute bottom-6 left-6 text-white font-mono text-xs uppercase tracking-widest z-20 opacity-80">
                             Work In Progress
                         </span>

                         {/* Hover overlay */}
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10 flex items-center justify-center">
                            <span className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 backdrop-blur-sm">
                                View Project →
                            </span>
                         </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <div className="mb-6">
                            <span className="font-mono text-xs text-[#FF4400] uppercase tracking-widest mb-3 block">In Development</span>
                            <h2 className="text-3xl md:text-4xl font-light mb-4 group-hover:text-[#FF4400] transition-colors">Monsoon Stories</h2>
                            <p className="text-black/70 leading-relaxed mb-6">
                                A warm, cozy narrative game about reliving 100 monsoons and the stories within them.
                                Like a moving picture book.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 font-mono text-xs text-black/50 uppercase tracking-widest border-t border-black/5 pt-6">
                            <div>
                                <span className="block text-black/30 mb-1">Genre</span>
                                Narrative / Cozy
                            </div>
                            <div>
                                <span className="block text-black/30 mb-1">Platform</span>
                                PC / Mac
                            </div>
                            <div>
                                <span className="block text-black/30 mb-1">Status</span>
                                Storyboarding
                            </div>
                            <div>
                                <span className="block text-black/30 mb-1">Stage</span>
                                Pre-Alpha
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======================== WORDSPRINT ======================== */}
                <div
                    className="bg-white border border-black/5 overflow-hidden cursor-pointer group"
                    onClick={() => onNavigate(Page.CASE_STUDY_WORDSPRINT)}
                >
                    <div className="relative bg-gradient-to-br from-[#E0E5EC] to-[#C9D1D9] h-[400px] overflow-hidden">
                         {/* Placeholder for Wordsprint screenshot */}
                         <img
                            src="https://picsum.photos/800/800?grayscale&random=12"
                            alt="Wordsprint Game"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                         />

                         <div className="absolute bottom-6 left-6 bg-white text-black text-xs font-mono px-3 py-1 uppercase tracking-widest z-20">
                             Published
                         </div>

                         {/* Hover overlay */}
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10 flex items-center justify-center">
                            <span className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 backdrop-blur-sm">
                                View Case Study →
                            </span>
                         </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <div className="mb-6">
                            <span className="font-mono text-xs text-[#FF4400] uppercase tracking-widest mb-3 block">Android / iOS</span>
                            <h2 className="text-3xl md:text-4xl font-light mb-4 group-hover:text-[#FF4400] transition-colors">Wordsprint</h2>
                            <p className="text-black/70 leading-relaxed mb-6">
                                A fast, engaging English word game that turns everyday moments into meaningful learning through calm, distraction-free gameplay.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 font-mono text-xs text-black/50 uppercase tracking-widest border-t border-black/5 pt-6">
                            <div>
                                <span className="block text-black/30 mb-1">Genre</span>
                                Educational / Puzzle
                            </div>
                            <div>
                                <span className="block text-black/30 mb-1">Platform</span>
                                Android / iOS
                            </div>
                            <div>
                                <span className="block text-black/30 mb-1">Year</span>
                                2023
                            </div>
                            <div>
                                <span className="block text-black/30 mb-1">Downloads</span>
                                10,000+
                            </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-black/5">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.studiopoetics.wordsprintenglish"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-[#FF4400] transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span>Play Store</span>
                                <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  );
};

export default Games;
