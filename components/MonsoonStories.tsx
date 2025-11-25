
import React from 'react';
import { ArrowLeft, Instagram } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';

interface MonsoonStoriesProps {
    onNavigate: (page: Page) => void;
}

const MonsoonStories: React.FC<MonsoonStoriesProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7B8FA1] to-[#5A6F82] text-white selection:bg-white selection:text-[#7B8FA1]">
        <SEO
            title="Monsoon Stories - Narrative Game in Development"
            description="A warm, cozy narrative game about reliving 100 monsoons. Like a moving picture book. Currently in storyboarding and character sketch stage."
            keywords={['Narrative Game', 'Cozy Game', 'Indie Game Development', 'Picture Book Game', 'Monsoon Stories']}
        />

        {/* ======================== FIXED NAVIGATION ======================== */}
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference pointer-events-none">
            <button
                onClick={() => onNavigate(Page.GAMES)}
                className="pointer-events-auto flex items-center gap-3 text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Games</span>
            </button>

            <div className="hidden md:flex flex-col items-end pointer-events-none">
                <span className="font-mono text-xs uppercase tracking-widest opacity-50">In Development</span>
                <span className="font-mono text-xs uppercase tracking-widest">Monsoon Stories</span>
            </div>
        </div>

        {/* ======================== HERO SECTION ======================== */}
        <header className="relative w-full min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
            {/* Atmospheric Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest mb-8">
                    Work In Progress
                </span>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.85] mb-8">
                    Monsoon<br/>
                    <span className="italic">Stories</span>
                </h1>

                <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12 text-white/80">
                    A warm, cozy narrative game about reliving 100 monsoons and the stories within them.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-white/60">
                    <div className="text-center">
                        <span className="block text-white/40 mb-1">Genre</span>
                        Narrative / Cozy
                    </div>
                    <div className="text-center">
                        <span className="block text-white/40 mb-1">Platform</span>
                        PC / Mac
                    </div>
                    <div className="text-center">
                        <span className="block text-white/40 mb-1">Stage</span>
                        Storyboarding
                    </div>
                </div>
            </div>
        </header>

        {/* ======================== ABOUT SECTION ======================== */}
        <section className="py-24 px-6 border-t border-white/10 bg-black/20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-light mb-8 text-center">Like a moving picture book</h2>

                <div className="space-y-6 text-lg leading-relaxed text-white/80">
                    <p>
                        Monsoon Stories is a narrative-driven game that captures the warmth and nostalgia of monsoon seasons.
                        Each of the 100 monsoons tells a different story—some quiet, some dramatic, all deeply human.
                    </p>

                    <p>
                        The game is designed to feel like reading a picture book that comes alive. Soft illustrations,
                        gentle animations, and a focus on atmosphere over mechanics.
                    </p>

                    <p className="text-white/60 italic">
                        Currently in the early stages: storyboarding, character sketches, and defining the visual language.
                    </p>
                </div>
            </div>
        </section>

        {/* ======================== DEVELOPMENT STAGE ======================== */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-light mb-16 text-center">What we're working on</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stage 1 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 font-mono text-sm">01</div>
                        <h4 className="text-xl font-medium mb-4">Storyboarding</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                            Mapping out the narrative structure, pacing, and emotional beats for each monsoon story.
                        </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 font-mono text-sm">02</div>
                        <h4 className="text-xl font-medium mb-4">Character Sketches</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                            Designing characters that feel warm, relatable, and fit within the cozy aesthetic we're building.
                        </p>
                    </div>

                    {/* Stage 3 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 font-mono text-sm">03</div>
                        <h4 className="text-xl font-medium mb-4">Visual Style</h4>
                        <p className="text-white/70 leading-relaxed text-sm">
                            Exploring illustration styles, color palettes, and animation approaches that evoke picture books.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* ======================== CHARACTER SKETCHES PLACEHOLDER ======================== */}
        <section className="py-24 px-6 bg-black/30">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-light mb-16 text-center">Early Character Explorations</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded overflow-hidden">
                            <img
                                src={`https://picsum.photos/400/400?grayscale&random=${20+i}`}
                                alt={`Character Sketch ${i}`}
                                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/50 text-sm font-mono mt-8 uppercase tracking-widest">
                    Work in Progress
                </p>
            </div>
        </section>

        {/* ======================== FOLLOW DEVELOPMENT ======================== */}
        <section className="py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-light mb-6">Follow the journey</h3>
                <p className="text-white/70 mb-12 leading-relaxed">
                    We're sharing development updates, character sketches, and behind-the-scenes process on Instagram.
                </p>

                <a
                    href="https://www.instagram.com/100_monsoon_stories/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white/20 transition-all group"
                >
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>@100_monsoon_stories</span>
                </a>
            </div>
        </section>

        {/* ======================== FOOTER NOTE ======================== */}
        <footer className="py-16 px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-white/50 text-sm leading-relaxed">
                    Monsoon Stories is being developed slowly and thoughtfully by Poetics Studio.<br/>
                    No release date yet—we're letting it take the time it needs.
                </p>
            </div>
        </footer>
    </div>
  );
};

export default MonsoonStories;
