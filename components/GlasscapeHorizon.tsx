
import React from 'react';
import { Page } from '../types';
import SEO from './SEO';
import { ArrowLeft, ArrowDown } from 'lucide-react';

interface GlasscapeHorizonProps {
    onNavigate: (page: Page) => void;
}

const GlasscapeHorizon: React.FC<GlasscapeHorizonProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0EE]">
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

        {/* Hero - Typography Based, Single Fold */}
        <div className="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden px-6">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505] z-0" />

            {/* Subtle Hologram Visual */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-[120px] animate-pulse z-0" />
            <div className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

            <div className="relative z-10 text-center px-6">
                {/* Back Link */}
                <button
                    onClick={() => onNavigate(Page.GLASSCAPE)}
                    className="absolute top-[-200px] left-0 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white/70 transition-colors"
                >
                    <ArrowLeft className="w-3 h-3" /> Collection
                </button>

                <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Glasscape / Series 01
                </span>
                <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    Horizon
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    A compact holographic display built on teak or paint on wood base.<br/>
                    Designed for desks and bedside spaces.
                </p>
            </div>

            <div className="absolute bottom-12 animate-bounce opacity-30">
                <ArrowDown className="w-4 h-4 text-white" />
            </div>
        </div>

        {/* Philosophy */}
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-white">
                        Calm technology<br/>for focused minds.
                    </h2>
                </div>
                <div>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Horizon sits quietly in your space—a minimal holographic display on wood—only manifesting information when it is poetic or necessary.
                    </p>
                    <p className="text-white/60 text-lg leading-relaxed">
                        It can show circadian light patterns, local weather, or quiet ambient visuals. When silent, it fades to black, respecting the integrity of your interior.
                    </p>
                </div>
            </div>
        </section>

        {/* Collection Variations - Each Image as Product */}
        <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 border-b border-white/10 pb-6">
                    <h2 className="text-2xl font-light text-white">Variations</h2>
                </div>

                {/* Variation 01 - Teak Base */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                        <div className="md:col-span-3">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">01</span>
                            <h3 className="text-3xl font-light mb-4 text-white">Horizon / Teak</h3>
                            <p className="text-white/50 leading-relaxed">
                                Natural solid teak base with warm grain. Premium holographic display. Handcrafted brass details.
                            </p>
                        </div>
                    </div>
                    <div className="w-full aspect-[16/9] overflow-hidden">
                        <img
                            src="/images/glasscape/Glasscape-1.png"
                            alt="Horizon Teak Variation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Variation 02 - Painted Base */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                        <div className="md:col-span-3">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">02</span>
                            <h3 className="text-3xl font-light mb-4 text-white">Horizon / Matte Black</h3>
                            <p className="text-white/50 leading-relaxed">
                                Hand-painted wood base in matte black finish. Minimal aesthetic for modern interiors. Seamless integration.
                            </p>
                        </div>
                    </div>
                    <div className="w-full aspect-[16/9] overflow-hidden">
                        <img
                            src="/images/glasscape/Glasscape-2.png"
                            alt="Horizon Matte Black Variation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Variation 03 - Installation Context */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                        <div className="md:col-span-3">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">03</span>
                            <h3 className="text-3xl font-light mb-4 text-white">Wall Installation</h3>
                            <p className="text-white/50 leading-relaxed">
                                Optional wall-mounted configuration. Flush mount with concealed power. Transforms into ambient art piece.
                            </p>
                        </div>
                    </div>
                    <div className="w-full aspect-[21/9] overflow-hidden">
                        <img
                            src="/images/glasscape/Glasscape-wall-frame.png"
                            alt="Horizon Wall Installation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Variation 04 - Display Showcase */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                        <div className="md:col-span-3">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">04</span>
                            <h3 className="text-3xl font-light mb-4 text-white">Ambient Display Mode</h3>
                            <p className="text-white/50 leading-relaxed">
                                Generative visuals in motion. Procedural animations that never repeat. Calm presence for meditation spaces.
                            </p>
                        </div>
                    </div>
                    <div className="w-full aspect-[16/9] overflow-hidden">
                        <img
                            src="/images/glasscape/Glasscape-aquarium.png"
                            alt="Horizon Ambient Display"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Specifications */}
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-white/5">
            <h2 className="text-3xl font-light mb-16 text-white">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <div className="border-b border-white/10 pb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Dimensions (Small)</div>
                    <div className="text-2xl font-light text-white">560 × 410 × 120mm</div>
                </div>
                <div className="border-b border-white/10 pb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Dimensions (Large)</div>
                    <div className="text-2xl font-light text-white">710 × 470 × 120mm</div>
                </div>
                <div className="border-b border-white/10 pb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Base Material</div>
                    <div className="text-2xl font-light text-white">Solid Teak / Paint on Wood</div>
                </div>
                <div className="border-b border-white/10 pb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Display Resolution</div>
                    <div className="text-2xl font-light text-white">Full HD</div>
                </div>
                <div className="border-b border-white/10 pb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Connectivity</div>
                    <div className="text-2xl font-light text-white">USB-C / WiFi 6</div>
                </div>
                <div className="border-b border-white/10 pb-6">
                    <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">Power Consumption</div>
                    <div className="text-2xl font-light text-white">15-45W (65W adapter)</div>
                </div>
            </div>
        </section>

        {/* What It Displays */}
        <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/5">
            <h2 className="text-3xl font-light mb-16 text-white">What it displays</h2>
            <div className="space-y-16">
                <div>
                    <h3 className="text-2xl font-light mb-4 text-white">Circadian Light Patterns</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Soft gradients that shift throughout the day, mimicking natural sunlight—warm amber in the morning, cool blue at midday, deep orange at dusk.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-light mb-4 text-white">Local Weather</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Abstract visualizations of your local climate—floating particles for rain, gentle waves for wind, soft pulses for temperature changes.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-light mb-4 text-white">Generative Art</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Procedural visuals that never repeat—minimal geometric forms, organic growth patterns, or quiet meditative animations.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-light mb-4 text-white">Custom Integrations</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                        Connect to your calendar, meditation timer, or studio lighting for seamless ambient presence that adapts to your workflow.
                    </p>
                </div>
            </div>
        </section>

        {/* Bespoke Craftsmanship */}
        <section className="py-32 px-6 md:px-12 bg-[#F6F6F4] text-[#111]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tighter">Bespoke Craftsmanship</h2>
                <p className="text-black/60 leading-relaxed mb-12 text-lg max-w-2xl mx-auto">
                    Each Horizon unit is assembled by hand in our studio in Goa. We work with master woodworkers and optical engineers to ensure every detail meets our standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 border border-black/10">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-black/40">Material Selection</h4>
                        <p className="text-sm text-black/60 leading-relaxed">Hand-selected teak from sustainable forests. Each grain pattern is unique.</p>
                    </div>
                    <div className="p-8 border border-black/10">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-black/40">Display Calibration</h4>
                        <p className="text-sm text-black/60 leading-relaxed">Full HD holographic display individually calibrated for color accuracy.</p>
                    </div>
                    <div className="p-8 border border-black/10">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-black/40">Quality Control</h4>
                        <p className="text-sm text-black/60 leading-relaxed">72-hour burn-in test and individual calibration before shipping.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 bg-[#050505] text-center border-t border-white/5">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF4400] mb-6 block">Limited Production</span>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
                Reserve your Horizon
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-12 leading-relaxed text-lg">
                Production is limited to 50 units per quarter due to the complexity of the optical components.
            </p>
            <a
                href="mailto:glasscape@poetics.studio?subject=Inquiry: Horizon"
                className="inline-block border-b border-white/30 pb-1 text-xl text-white hover:text-[#FF4400] hover:border-[#FF4400] transition-colors"
            >
                glasscape@poetics.studio
            </a>
            <p className="text-xs font-mono text-white/30 mt-8 uppercase tracking-widest">
                Ships Q2 2025 • Made to Order in Goa, India
            </p>
        </section>

    </div>
  );
};

export default GlasscapeHorizon;
