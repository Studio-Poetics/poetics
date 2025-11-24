
import React from 'react';
import { Page } from '../types';
import SEO from './SEO';
import { ArrowLeft, Check, Download } from 'lucide-react';

interface GlasscapeHorizonProps {
    onNavigate: (page: Page) => void;
}

const GlasscapeHorizon: React.FC<GlasscapeHorizonProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F6F6F4] text-[#111]">
         <SEO 
            title="Horizon - Glasscape Collection"
            description="Glasscape Horizon: A desktop holographic display for executive environments. Walnut base, tempered glass, generative art integration."
            keywords={['Glasscape Horizon', 'Desktop Hologram', 'Executive Tech', 'Luxury Desk Accessories', 'Generative Art Display']}
            schema={{
                "@type": "Product",
                "name": "Glasscape Horizon",
                "category": "Technology/Decor",
                "image": "https://poetics.studio/horizon-product.jpg",
                "brand": { "@type": "Brand", "name": "Poetics Studio" },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/PreOrder"
                }
            }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
            <button 
                onClick={() => onNavigate(Page.GLASSCAPE)}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Collection
            </button>
            <span className="font-mono text-xs uppercase tracking-widest">Glasscape / Series 01</span>
        </nav>

        {/* Hero Product Shot */}
        <div className="h-screen w-full relative flex flex-col justify-end pb-24 px-6 md:px-12 bg-[#E5E5E5] overflow-hidden">
             {/* Mock Product Image */}
             <div className="absolute inset-0">
                <img 
                    src="https://picsum.photos/1600/1200?grayscale&blur=1" 
                    alt="Horizon Product Context" 
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
             </div>

             <div className="relative z-10 text-white max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-4">Horizon.</h1>
                <p className="text-xl md:text-2xl font-light text-white/80 max-w-xl">
                    A desktop sanctuary. The Horizon model brings the ambient intelligence of Glasscape to your personal workspace.
                </p>
             </div>
        </div>

        {/* Introduction */}
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
             <div className="flex flex-col md:flex-row gap-12 items-baseline border-b border-black/10 pb-12 mb-12">
                <h2 className="text-2xl font-light whitespace-nowrap">The Concept</h2>
                <p className="text-lg font-light leading-relaxed text-black/70">
                    We designed Horizon to be a "calm technology". In an era of aggressive notifications and bright screens, Horizon is passive. It sits quietly on your desk, a block of pristine glass and wood, only manifesting information when it is poetic or necessary.
                </p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div>
                     <h4 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">Base Material</h4>
                     <p>American Walnut</p>
                 </div>
                 <div>
                     <h4 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">Glass Type</h4>
                     <p>Low-Iron Crystal</p>
                 </div>
                 <div>
                     <h4 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">Input</h4>
                     <p>USB-C / WiFi 6</p>
                 </div>
                 <div>
                     <h4 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">Edition</h4>
                     <p>Made to Order</p>
                 </div>
             </div>
        </section>

        {/* Features Gallery */}
        <section className="bg-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-square bg-[#F0F0EE] p-12 flex flex-col justify-between">
                        <h3 className="text-3xl font-light">Generative Clock</h3>
                        <p className="text-black/60">Time represented not by numbers, but by the position of a digital sun or the bloom of a procedural flower.</p>
                        <div className="w-12 h-12 border border-black/10 rounded-full"></div>
                    </div>
                    <div className="aspect-square bg-[#111] text-white p-12 flex flex-col justify-between">
                        <h3 className="text-3xl font-light">Market Pulse</h3>
                        <p className="text-white/60">Visualize your portfolio or crypto assets as a topographic landscape that shifts with market volatility.</p>
                        <div className="w-12 h-12 border border-white/10 rounded-full"></div>
                    </div>
                    <div className="md:col-span-2 aspect-[2/1] bg-[#E5E5E5] relative overflow-hidden">
                        <img src="https://picsum.photos/1200/600?grayscale" alt="Detail Shot" className="w-full h-full object-cover" />
                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-3xl font-light text-white drop-shadow-md">Material Honesty</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Specifications */}
        <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-12">Specifications</h2>
            <div className="border-t border-black/10">
                <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-black/10">
                    <div className="font-mono text-xs uppercase tracking-widest text-black/40">Hardware</div>
                    <div className="md:col-span-2 text-sm space-y-2">
                        <div className="flex justify-between"><span>Display Volume</span> <span>200mm x 200mm x 200mm</span></div>
                        <div className="flex justify-between"><span>Resolution</span> <span>4 Million Voxels</span></div>
                        <div className="flex justify-between"><span>Brightness</span> <span>1500 nits (Daylight Visible)</span></div>
                        <div className="flex justify-between"><span>Processor</span> <span>Custom ARM64 Neural Chip</span></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-black/10">
                    <div className="font-mono text-xs uppercase tracking-widest text-black/40">Software</div>
                    <div className="md:col-span-2 text-sm space-y-2">
                        <div className="flex justify-between"><span>OS</span> <span>GlassOS 2.0</span></div>
                        <div className="flex justify-between"><span>Compatibility</span> <span>iOS / Android / Mac / Windows</span></div>
                        <div className="flex justify-between"><span>Updates</span> <span>OTA Forever</span></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 py-6 border-b border-black/10">
                    <div className="font-mono text-xs uppercase tracking-widest text-black/40">In the Box</div>
                    <div className="md:col-span-2 text-sm space-y-2">
                        <p>1x Horizon Unit</p>
                        <p>1x Braided USB-C Power Cable (3m)</p>
                        <p>1x Microfiber Polishing Cloth</p>
                        <p>1x Authenticity Certificate (NFT)</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 flex gap-4">
                 <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-black/10 px-6 py-3 hover:bg-black hover:text-white transition-colors">
                    <Download className="w-4 h-4" /> Spec Sheet (PDF)
                 </button>
                 <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-black/10 px-6 py-3 hover:bg-black hover:text-white transition-colors">
                    <Download className="w-4 h-4" /> 3D Model (.obj)
                 </button>
            </div>
        </section>

        {/* Purchase CTA */}
        <section className="bg-[#111] text-white py-24 px-6 md:px-12 text-center">
             <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Availability</span>
             <h2 className="text-4xl md:text-6xl font-light mb-8">Reserve your Horizon.</h2>
             <p className="text-white/60 max-w-xl mx-auto mb-12">
                 Each unit is assembled by hand in our studio in Goa. Due to the complexity of the optical components, production is limited to 50 units per quarter.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <a 
                    href="mailto:orders@poetics.studio?subject=Inquiry: Horizon" 
                    className="bg-white text-black px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-[#FF4400] hover:text-white transition-colors min-w-[200px]"
                >
                    Inquire Pricing
                 </a>
                 <span className="text-xs font-mono text-white/40">Ships Q4 2024</span>
             </div>
        </section>

    </div>
  );
};

export default GlasscapeHorizon;
