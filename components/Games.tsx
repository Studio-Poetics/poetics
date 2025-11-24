
import React from 'react';
import SEO from './SEO';
import { Page } from '../types';

interface GamesProps {
  onNavigate?: (page: Page) => void;
}

const Games: React.FC<GamesProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
        <SEO 
            title="Ludic Interfaces & Indie Games"
            description="We develop off-beat games using custom hardware and mundane objects. Exploring play as the highest form of research."
            keywords={['Indie Game Dev', 'Custom Hardware Games', 'Alt Ctrl', 'Generative Gaming', 'Interactive Art', 'Digital Toys']}
        />
        <header className="mb-24 max-w-6xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Ludic Interfaces</span>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12">
                Play is the <br/>highest form of research.
            </h1>
        </header>

        <section className="mb-32">
            <div className="max-w-6xl mx-auto border-b border-black/10 pb-4 mb-12 flex justify-between items-end">
                <h2 className="text-2xl font-light">Off-Beat Games</h2>
                <span className="text-xs font-mono text-black/50 max-w-xs text-right hidden md:block">
                    Custom hardware. Mundane objects re-imagined.
                </span>
            </div>

            {/* ======================== OFF-BEAT GAMES LIST ======================== */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Game 1 */}
                <div
                    className="group cursor-pointer"
                    onClick={() => onNavigate && onNavigate(Page.CASE_STUDY_WORDSPRINT)}
                >
                    <div className="aspect-square bg-[#E0E0E0] mb-6 overflow-hidden relative">
                        {/* EDIT IMAGE HERE */}
                        <img src="https://picsum.photos/800/800?grayscale&random=10" alt="Wordsprint" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    {/* EDIT TEXT HERE */}
                    <h3 className="text-xl font-medium">Wordsprint</h3>
                    <p className="text-sm text-black/60 mt-2 leading-relaxed">
                        An Android vocabulary game where players practice language by unscrambling words and learning their meanings through interactive gameplay.
                    </p>
                </div>

                {/* Game 2 */}
                <div className="group cursor-pointer md:mt-24">
                    <div className="aspect-square bg-[#E0E0E0] mb-6 overflow-hidden relative">
                         {/* EDIT IMAGE HERE */}
                         <img src="https://picsum.photos/800/800?grayscale&random=11" alt="Game 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                    </div>
                    {/* EDIT TEXT HERE */}
                    <h3 className="text-xl font-medium">Rain Drop Symphony</h3>
                    <p className="text-sm text-black/60 mt-2 leading-relaxed">
                        Piezo sensors attached to an umbrella that turn rain impact into a generative rhythm game played by walking in a storm.
                    </p>
                </div>

            </div>
            {/* ===================================================================== */}
        </section>

        <section>
            <div className="max-w-6xl mx-auto border-b border-black/10 pb-4 mb-12 flex justify-between items-end">
                <h2 className="text-2xl font-light">Digital Experiences</h2>
                <span className="text-xs font-mono text-black/50 hidden md:block">
                    Screen-based immersion.
                </span>
            </div>

            {/* ======================== DIGITAL GAMES LIST ======================== */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                         <div className="aspect-video bg-[#E0E0E0] mb-4 overflow-hidden">
                             {/* EDIT IMAGE HERE */}
                             <img src={`https://picsum.photos/600/400?grayscale&random=${12+i}`} alt="Digital Game" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
                         </div>
                         {/* EDIT TEXT HERE */}
                         <h3 className="text-lg font-medium">Void Walker {i}</h3>
                         <span className="text-xs font-mono uppercase text-black/40">PC / Mac / Linux</span>
                    </div>
                 ))}
            </div>
            {/* ==================================================================== */}
        </section>
    </div>
  );
};

export default Games;
