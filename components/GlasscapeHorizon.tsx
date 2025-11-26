
import React from 'react';
import { Page } from '../types';
import SEO from './SEO';
import { ArrowLeft, Download } from 'lucide-react';

interface GlasscapeHorizonProps {
    onNavigate: (page: Page) => void;
}

const GlasscapeHorizon: React.FC<GlasscapeHorizonProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F6F6F4]">
         <SEO
            title="Horizon - Glasscape Collection"
            description="Glasscape Horizon: A compact desktop holographic display built on teak or painted-wood base. Designed for desks and bedside spaces with circadian light patterns and ambient visuals."
            keywords={['Glasscape Horizon', 'Desktop Hologram', 'Executive Tech', 'Luxury Desk Accessories', 'Generative Art Display', 'Ambient Light Display']}
            schema={{
                "@type": "Product",
                "name": "Glasscape Horizon",
                "category": "Technology/Decor",
                "brand": { "@type": "Brand", "name": "Poetics Studio" },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/PreOrder"
                }
            }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-center">
            <button
                onClick={() => onNavigate(Page.GLASSCAPE)}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-3 h-3" /> Collection
            </button>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Series 01</span>
        </nav>

        {/* Hero - Full Bleed Image */}
        <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden pt-24 pb-32">
             {/* Dark Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#151520] to-[#0A0A0A]" />

             {/* Atmospheric Glow */}
             <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl" />

             {/* Hero Image - Full Width, Natural Aspect */}
             <div className="relative z-10 w-full max-w-7xl px-6 md:px-16">
                <img
                    src="/images/glasscape/Glasscape-1.png"
                    alt="Glasscape Horizon"
                    className="w-full h-auto"
                />
             </div>

             {/* Floating Title */}
             <div className="absolute bottom-16 md:bottom-24 left-6 md:left-16 z-20">
                <h1 className="text-7xl md:text-[12rem] font-light tracking-tighter text-white leading-none">Horizon</h1>
                <p className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-white/50 mt-6">Desktop Collection</p>
             </div>
        </div>

        {/* Introduction - Spacious */}
        <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/10">
             <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
                    <div className="md:col-span-5">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-8 block">Philosophy</span>
                        <h2 className="text-4xl md:text-6xl font-light leading-[1.1] text-white">
                            Calm technology<br/>for focused minds.
                        </h2>
                    </div>
                    <div className="md:col-span-7 flex flex-col justify-center space-y-8">
                        <p className="text-xl md:text-2xl leading-relaxed text-white/80">
                            A compact Glasscape collection built on a teak or painted-wood base. Designed for desks and bedside spaces.
                        </p>
                        <p className="text-xl md:text-2xl leading-relaxed text-white/80">
                            It can show circadian light patterns, local weather, or quiet ambient visuals—manifesting information only when it is poetic or necessary.
                        </p>
                    </div>
                </div>
             </div>
        </section>

        {/* Image Gallery - Full Bleed with Space */}
        <section className="py-24 md:py-32">
            {/* Image 1 - Full Width */}
            <div className="w-full mb-24 md:mb-32">
                <img
                    src="/images/glasscape/Glasscape-2.png"
                    alt="Horizon Detail"
                    className="w-full h-auto"
                />
            </div>

            {/* Text Block - Centered */}
            <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 md:py-32 text-center">
                <h3 className="text-4xl md:text-6xl font-light leading-tight mb-12 text-white">
                    Tangible light as a building material.
                </h3>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                    When active, Horizon holds presence. When silent, it dissolves into clear glass and premium wood, respecting the integrity of your interior.
                </p>
            </div>

            {/* Image 2 - Full Width */}
            <div className="w-full mb-24 md:mb-32">
                <img
                    src="/images/glasscape/Glasscape-wall-frame.png"
                    alt="Horizon in Context"
                    className="w-full h-auto"
                />
            </div>

            {/* Specs - Clean Layout */}
            <div className="max-w-5xl mx-auto px-6 md:px-16 py-24 md:py-32">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-16 block">Specifications</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="border-b border-white/10 pb-8">
                        <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Dimensions</div>
                        <div className="text-2xl md:text-3xl font-light text-white">200 × 200 × 300mm</div>
                    </div>
                    <div className="border-b border-white/10 pb-8">
                        <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Base Material</div>
                        <div className="text-2xl md:text-3xl font-light text-white">Teak / Painted Wood</div>
                    </div>
                    <div className="border-b border-white/10 pb-8">
                        <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Glass Type</div>
                        <div className="text-2xl md:text-3xl font-light text-white">Low-Iron Crystal</div>
                    </div>
                    <div className="border-b border-white/10 pb-8">
                        <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Power</div>
                        <div className="text-2xl md:text-3xl font-light text-white">USB-C / WiFi 6</div>
                    </div>
                </div>
            </div>

            {/* Image 3 - Full Width */}
            <div className="w-full">
                <img
                    src="/images/glasscape/Glasscape-aquarium.png"
                    alt="Horizon Ambient Display"
                    className="w-full h-auto"
                />
            </div>
        </section>

        {/* Features - Generous Spacing */}
        <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-24 block">What it displays</span>

                <div className="space-y-24 md:space-y-32">
                    <div className="border-b border-white/10 pb-16">
                        <h3 className="text-3xl md:text-5xl font-light mb-6 text-white">Circadian Light Patterns</h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
                            Soft gradients that shift throughout the day, mimicking natural sunlight—warm amber in the morning, cool blue at midday, deep orange at dusk.
                        </p>
                    </div>

                    <div className="border-b border-white/10 pb-16">
                        <h3 className="text-3xl md:text-5xl font-light mb-6 text-white">Local Weather</h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
                            Abstract visualizations of your local climate—floating particles for rain, gentle waves for wind, soft pulses for temperature changes.
                        </p>
                    </div>

                    <div className="border-b border-white/10 pb-16">
                        <h3 className="text-3xl md:text-5xl font-light mb-6 text-white">Generative Art</h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
                            Procedural visuals that never repeat—minimal geometric forms, organic growth patterns, or quiet meditative animations.
                        </p>
                    </div>

                    <div className="pb-16">
                        <h3 className="text-3xl md:text-5xl font-light mb-6 text-white">Custom Integrations</h3>
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
                            Connect to your calendar, meditation timer, or studio lighting for seamless ambient presence that adapts to your workflow.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Technical Specifications - Cleaner */}
        <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-24 text-white">Technical Details</h2>

                <div className="space-y-20">
                    <div>
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-8">Hardware</div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-lg text-white/60">Display Volume</span>
                                <span className="text-xl text-white font-light">200mm × 200mm × 200mm</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-lg text-white/60">Resolution</span>
                                <span className="text-xl text-white font-light">4M Voxels</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-lg text-white/60">Brightness</span>
                                <span className="text-xl text-white font-light">1500 nits</span>
                            </div>
                            <div className="flex justify-between items-baseline pb-4">
                                <span className="text-lg text-white/60">Processor</span>
                                <span className="text-xl text-white font-light">ARM64 Neural Chip</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/40 mb-8">Software</div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-lg text-white/60">Operating System</span>
                                <span className="text-xl text-white font-light">GlassOS 2.0</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                                <span className="text-lg text-white/60">Compatibility</span>
                                <span className="text-xl text-white font-light">iOS / Android / Mac / Windows</span>
                            </div>
                            <div className="flex justify-between items-baseline pb-4">
                                <span className="text-lg text-white/60">Updates</span>
                                <span className="text-xl text-white font-light">OTA Forever</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA - Spacious */}
        <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF4400] mb-8 block">Made to Order</span>
                <h2 className="text-5xl md:text-7xl font-light mb-12 tracking-tight text-white leading-none">
                    Reserve your<br/>Horizon
                </h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Each unit is assembled by hand in our studio in Goa. Production is limited to 50 units per quarter.
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
                    <a
                        href="mailto:glasscape@poetics.studio?subject=Inquiry: Horizon"
                        className="bg-white text-black px-12 py-6 text-sm font-mono uppercase tracking-[0.2em] hover:bg-[#FF4400] hover:text-white transition-colors"
                    >
                        Inquire Pricing
                    </a>
                    <button className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                        <Download className="w-4 h-4" /> Download Specs
                    </button>
                </div>

                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Ships Q2 2025</p>
            </div>
        </section>

    </div>
  );
};

export default GlasscapeHorizon;
