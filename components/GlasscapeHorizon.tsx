
import React from 'react';
import { Page } from '../types';
import SEO from './SEO';
import { ArrowLeft, Check, Download } from 'lucide-react';

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
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
            >
                <ArrowLeft className="w-3 h-3" /> Collection
            </button>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">Series 01</span>
        </nav>

        {/* Hero - Cinematic Product Shot */}
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
             {/* Ambient Background Gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A]" />

             {/* Atmospheric Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />

             {/* Hero Image */}
             <div className="relative z-10 w-full max-w-5xl px-6">
                <img
                    src="/images/glasscape/Glasscape-1.png"
                    alt="Glasscape Horizon"
                    className="w-full h-auto drop-shadow-2xl"
                />
             </div>

             {/* Floating Title */}
             <div className="absolute bottom-24 left-6 md:left-12 z-20">
                <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white/90">Horizon</h1>
                <p className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-white/40 mt-4">Desktop Collection</p>
             </div>
        </div>

        {/* Introduction */}
        <section className="py-32 px-6 md:px-12 border-t border-white/5">
             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-6 block">Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                        Calm technology<br/>for focused minds.
                    </h2>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-lg leading-relaxed text-white/60 mb-6">
                        A compact Glasscape collection built on a teak or painted-wood base. Designed for desks and bedside spaces. It can show circadian light patterns, local weather, or quiet ambient visuals.
                    </p>
                    <p className="text-lg leading-relaxed text-white/60">
                        Horizon sits quietly in your space—a block of glass and wood—only manifesting information when it is poetic or necessary.
                    </p>
                </div>
             </div>
        </section>

        {/* Visual Gallery */}
        <section className="py-24 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Image 1 - Full bleed */}
                    <div className="aspect-square overflow-hidden bg-[#111]">
                        <img
                            src="/images/glasscape/Glasscape-2.png"
                            alt="Horizon Detail"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Text Block */}
                    <div className="aspect-square bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0A] p-12 md:p-16 flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-light leading-tight mb-6">
                                Tangible light as<br/>a building material.
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                When active, Horizon holds presence. When silent, it dissolves into clear glass and premium wood, respecting the integrity of your interior.
                            </p>
                        </div>
                        <div className="w-16 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                    </div>

                    {/* Image 2 - Wide */}
                    <div className="md:col-span-2 aspect-[21/9] overflow-hidden bg-[#111]">
                        <img
                            src="/images/glasscape/Glasscape-wall-frame.png"
                            alt="Horizon in Context"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Specs Grid */}
                    <div className="aspect-square bg-white text-black p-12 md:p-16 flex flex-col justify-between">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/30 mb-8 block">Specifications</span>
                            <div className="space-y-6">
                                <div className="border-b border-black/10 pb-4">
                                    <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-1">Dimensions</div>
                                    <div className="text-lg">200 × 200 × 300mm</div>
                                </div>
                                <div className="border-b border-black/10 pb-4">
                                    <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-1">Base Material</div>
                                    <div className="text-lg">Teak / Painted Wood</div>
                                </div>
                                <div className="border-b border-black/10 pb-4">
                                    <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-1">Glass Type</div>
                                    <div className="text-lg">Low-Iron Crystal</div>
                                </div>
                                <div className="pb-4">
                                    <div className="font-mono text-xs uppercase tracking-widest text-black/40 mb-1">Power</div>
                                    <div className="text-lg">USB-C / WiFi 6</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="aspect-square overflow-hidden bg-[#111]">
                        <img
                            src="/images/glasscape/Glasscape-aquarium.png"
                            alt="Horizon Ambient Display"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Features */}
        <section className="py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-12 block">What it displays</span>

                <div className="space-y-12">
                    <div className="border-b border-white/5 pb-12">
                        <h3 className="text-2xl md:text-3xl font-light mb-4">Circadian Light Patterns</h3>
                        <p className="text-white/50 leading-relaxed max-w-2xl">
                            Soft gradients that shift throughout the day, mimicking natural sunlight—warm amber in the morning, cool blue at midday, deep orange at dusk.
                        </p>
                    </div>

                    <div className="border-b border-white/5 pb-12">
                        <h3 className="text-2xl md:text-3xl font-light mb-4">Local Weather</h3>
                        <p className="text-white/50 leading-relaxed max-w-2xl">
                            Abstract visualizations of your local climate—floating particles for rain, gentle waves for wind, soft pulses for temperature changes.
                        </p>
                    </div>

                    <div className="border-b border-white/5 pb-12">
                        <h3 className="text-2xl md:text-3xl font-light mb-4">Generative Art</h3>
                        <p className="text-white/50 leading-relaxed max-w-2xl">
                            Procedural visuals that never repeat—minimal geometric forms, organic growth patterns, or quiet meditative animations.
                        </p>
                    </div>

                    <div className="pb-12">
                        <h3 className="text-2xl md:text-3xl font-light mb-4">Custom Integrations</h3>
                        <p className="text-white/50 leading-relaxed max-w-2xl">
                            Connect to your calendar, meditation timer, or studio lighting for seamless ambient presence that adapts to your workflow.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-24 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-light mb-16">Technical Details</h2>

                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/5">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">Hardware</div>
                        <div className="md:col-span-2 space-y-4 text-sm">
                            <div className="flex justify-between border-b border-white/5 pb-3">
                                <span className="text-white/50">Display Volume</span>
                                <span className="text-white/90">200mm × 200mm × 200mm</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-3">
                                <span className="text-white/50">Resolution</span>
                                <span className="text-white/90">4M Voxels</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-3">
                                <span className="text-white/50">Brightness</span>
                                <span className="text-white/90">1500 nits (Daylight Visible)</span>
                            </div>
                            <div className="flex justify-between pb-3">
                                <span className="text-white/50">Processor</span>
                                <span className="text-white/90">ARM64 Neural Chip</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/5">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">Software</div>
                        <div className="md:col-span-2 space-y-4 text-sm">
                            <div className="flex justify-between border-b border-white/5 pb-3">
                                <span className="text-white/50">Operating System</span>
                                <span className="text-white/90">GlassOS 2.0</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-3">
                                <span className="text-white/50">Compatibility</span>
                                <span className="text-white/90">iOS / Android / Mac / Windows</span>
                            </div>
                            <div className="flex justify-between pb-3">
                                <span className="text-white/50">Updates</span>
                                <span className="text-white/90">OTA Forever</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">In the Box</div>
                        <div className="md:col-span-2 space-y-3 text-sm text-white/70">
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-white/40" />
                                <span>1× Horizon Unit</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-white/40" />
                                <span>1× Braided USB-C Power Cable (3m)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-white/40" />
                                <span>1× Microfiber Polishing Cloth</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-white/40" />
                                <span>1× Authenticity Certificate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF4400] mb-6 block">Made to Order</span>
                <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">Reserve your Horizon</h2>
                <p className="text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Each unit is assembled by hand in our studio in Goa. Due to the complexity of the optical components, production is limited to 50 units per quarter.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="mailto:glasscape@poetics.studio?subject=Inquiry: Horizon"
                        className="bg-white text-black px-10 py-5 text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#FF4400] hover:text-white transition-colors min-w-[240px] text-center"
                    >
                        Inquire Pricing
                    </a>
                    <button className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
                        <Download className="w-4 h-4" /> Download Specs
                    </button>
                </div>

                <p className="text-xs font-mono text-white/30 mt-12 uppercase tracking-widest">Ships Q2 2025</p>
            </div>
        </section>

    </div>
  );
};

export default GlasscapeHorizon;
