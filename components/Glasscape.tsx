
import React from 'react';
import SEO from './SEO';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface GlasscapeProps {
    onNavigate: (page: Page) => void;
}

const Glasscape: React.FC<GlasscapeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0EE]">
        <SEO 
            title="Glasscape - Holographic Architecture"
            description="Premium holographic display technology for architects and interior designers. Bespoke light installations by Poetics Studio."
            keywords={['Holographic Display', 'Architectural Hologram', 'Luxury Interior Tech', 'Glasscape', 'Future Furniture', 'Bespoke Lighting']}
            schema={{
                "@type": "Product",
                "name": "Glasscape",
                "brand": { "@type": "Brand", "name": "Poetics Studio" },
                "description": "A series of holographic displays designed for the modern sanctuary. Tangible light as a building material.",
                "audience": "Architects, Interior Designers"
            }}
        />

        {/* Hero */}
        <div className="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505] z-0" />
            
            {/* Abstract Hologram Visual */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-[100px] animate-pulse z-0" />
            <div className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-0" />
            
            <div className="relative z-10 text-center px-6">
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-1000">The Architecture of Light</span>
                <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white mb-8 mix-blend-overlay animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    Glasscape
                </h1>
                <p className="text-xl font-light text-white/60 max-w-lg mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    We invite you to build with the immaterial. <br/>
                    Holographic displays for the modern sanctuary.
                </p>
            </div>

            <div className="absolute bottom-12 animate-bounce opacity-30">
                <ArrowDown className="w-4 h-4 text-white" />
            </div>
        </div>

        {/* Philosophy */}
        <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div>
                    <h2 className="text-3xl md:text-4xl font-light leading-tight mb-8">
                        The screen is dead. <br/>Long live the volume.
                    </h2>
                </div>
                <div>
                    <p className="text-white/60 leading-relaxed mb-8">
                        For too long, digital content has been trapped behind black mirrors. Glasscape liberates pixels from the slab. We treat light as a tactile material—like wood, stone, or brass.
                    </p>
                    <p className="text-white/60 leading-relaxed">
                        Designed for architects and purists, Glasscape displays are "intangible furniture". When active, they hold presence. When silent, they dissolve into clear glass and premium metal, respecting the integrity of your interior.
                    </p>
                </div>
            </div>
        </section>

        {/* The Collection */}
        <section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-4">
                    <h2 className="text-2xl font-light">The Collection</h2>
                    <span className="font-mono text-xs text-white/30">Series 01</span>
                </div>

                <div className="space-y-32">
                    
                    {/* Product 01 - Horizon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group cursor-pointer" onClick={() => onNavigate(Page.GLASSCAPE_HORIZON)}>
                        <div className="aspect-[4/5] bg-[#151515] relative overflow-hidden">
                             <img
                                src="/images/glasscape/Glasscape-1.png"
                                alt="Glasscape Horizon"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="md:px-12">
                            <span className="font-mono text-xs text-[#FF4400] mb-4 block">Desktop Model</span>
                            <h3 className="text-4xl md:text-5xl font-light mb-6 group-hover:text-white/90 transition-colors">Horizon</h3>
                            <p className="text-white/50 leading-relaxed mb-8">
                                A compact Glasscape collection built on a teak or painted-wood base. Designed for desks and bedside spaces. It can show circadian light patterns, local weather, or quiet ambient visuals.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 text-xs font-mono text-white/40 uppercase tracking-widest border-t border-white/10 pt-8 mb-8">
                                <div>
                                    <span className="block text-white/20 mb-1">Dimensions</span>
                                    560 x 410 x 120mm
                                </div>
                                <div>
                                    <span className="block text-white/20 mb-1">Materials</span>
                                    White Ash / Teak / MS
                                </div>
                            </div>

                            <button className="text-xs font-mono uppercase tracking-widest flex items-center gap-2 hover:text-[#FF4400] transition-colors">
                                View Configuration <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Product 02 - Monolith */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                        <div className="md:order-2 aspect-[4/5] bg-[#151515] relative overflow-hidden">
                             <img
                                src="/images/glasscape/Glasscape-2.png"
                                alt="Glasscape Monolith"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:px-12 md:order-1">
                            <span className="font-mono text-xs text-[#FF4400] mb-4 block">Floor Standing</span>
                            <h3 className="text-4xl md:text-5xl font-light mb-6">Monolith</h3>
                            <p className="text-white/50 leading-relaxed mb-8">
                                A human-scale holographic column. A statement piece for lobbies, retail galleries, and luxury living rooms. Can display life-size digital fashion, architectural models, or spatial interfaces.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 text-xs font-mono text-white/40 uppercase tracking-widest border-t border-white/10 pt-8">
                                <div>
                                    <span className="block text-white/20 mb-1">Dimensions</span>
                                    710 x 450 x 120mm
                                </div>
                                <div>
                                    <span className="block text-white/20 mb-1">Materials</span>
                                    Black Steel / Teak / Recycled Materials
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 03 - CityScape - HIDDEN FOR NOW */}
                    {false && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                        <div className="aspect-[16/9] md:aspect-[4/5] bg-[#151515] relative overflow-hidden">
                             <img
                                src="/images/glasscape/Glasscape-aquarium.png"
                                alt="Glasscape CityScape"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:px-12">
                            <span className="font-mono text-xs text-[#FF4400] mb-4 block">Urban Installation</span>
                            <h3 className="text-4xl md:text-5xl font-light mb-6">CityScape</h3>
                            <p className="text-white/50 leading-relaxed mb-8">
                                A modular collection for cities. It displays real-time urban data—traffic, weather, energy use—and turns it into a clear, living snapshot of the city.
                            </p>

                            <div className="grid grid-cols-2 gap-8 text-xs font-mono text-white/40 uppercase tracking-widest border-t border-white/10 pt-8">
                                <div>
                                    <span className="block text-white/20 mb-1">Dimensions</span>
                                    Modular (Unlimited)
                                </div>
                                <div>
                                    <span className="block text-white/20 mb-1">Materials</span>
                                    Cast Concrete / Tempered Glass
                                </div>
                            </div>
                        </div>
                    </div>
                    )}

                </div>
            </div>
        </section>

        {/* Integration */}
        <section className="py-32 px-6 md:px-12 bg-[#F6F6F4] text-[#111]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tighter">Bespoke Integration</h2>
                <p className="text-black/60 leading-relaxed mb-12 text-lg">
                    We partner with architects to embed Glasscape technology directly into the fabric of the building. 
                    From holographic partitions to smart windows that dream.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="p-8 border border-black/10">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-2">Retail</h4>
                        <p className="text-sm text-black/50">Immersive product storytelling without physical clutter.</p>
                    </div>
                    <div className="p-8 border border-black/10">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-2">Hospitality</h4>
                        <p className="text-sm text-black/50">Wayfinding and concierge avatars in pure light.</p>
                    </div>
                    <div className="p-8 border border-black/10">
                        <h4 className="font-mono text-xs uppercase tracking-widest mb-2">Residential</h4>
                        <p className="text-sm text-black/50">Art displays that vanish when turned off.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 md:px-12 bg-[#050505] text-center">
            <h2 className="text-2xl font-light text-white mb-8">Request Trade Catalogue</h2>
            <a 
                href="mailto:glasscape@poetics.studio" 
                className="inline-block border-b border-white/30 pb-1 text-xl text-white hover:text-[#FF4400] hover:border-[#FF4400] transition-colors"
            >
                pranshu@poetics.studio / hello@poetics.studio
            </a>
            <p className="text-xs font-mono text-white/30 mt-8 uppercase tracking-widest">
                Available for Global Shipping • Made to Order in India
            </p>
        </section>
    </div>
  );
};

export default Glasscape;
