
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Copy, Users, Globe, Layers, Cpu } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';

interface CaseStudyProps {
    onNavigate: (page: Page) => void;
}

const CaseStudyIBW: React.FC<CaseStudyProps> = ({ onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] selection:bg-[#FF9933] selection:text-black">
        <SEO 
            title="India Blockchain Week - Identity System"
            description="Case Study: A generative brand identity system for India's web3 revolution. Bridging heritage and future through mandala systems."
            keywords={['India Blockchain Week Branding', 'Generative Identity', 'Web3 Design India', 'Mandala Design System', 'Blockchain Event Branding']}
            schema={{
                "@type": "CreativeWork",
                "name": "India Blockchain Week Identity",
                "creator": "Poetics Studio",
                "genre": "Brand Identity System",
                "award": "Featured in Brand New (Hypothetical)"
            }}
        />

        {/* ======================== FIXED NAVIGATION ======================== */}
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-white pointer-events-none">
            <button 
                onClick={() => onNavigate(Page.CONSULTANCY)}
                className="pointer-events-auto flex items-center gap-3 text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                <span>Index</span>
            </button>
            
            <div className="hidden md:flex flex-col items-end">
                <span className="font-mono text-xs uppercase tracking-widest opacity-50">Project 01</span>
                <span className="font-mono text-xs uppercase tracking-widest">IBW Identity System</span>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 h-1 bg-[#FF9933] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />


        {/* ======================== HERO SECTION ======================== */}
        <header className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-black">
            
            {/* Left: Typography */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black relative z-10 bg-[#F4F4F0]">
                <div className="mt-24 md:mt-0">
                    <span className="inline-block px-3 py-1 border border-black rounded-full text-xs font-mono uppercase tracking-widest mb-6 bg-white">
                        Client Commission
                    </span>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
                        INDIA<br/>
                        BLOCKCHAIN<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#E01E5A] to-[#9B4DCA]">WEEK</span>
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest text-black/60">
                    <div>
                        <span className="block text-black/30 mb-1">Role</span>
                        Brand Identity<br/>
                        Visual Strategy<br/>
                        Motion Design
                    </div>
                    <div>
                        <span className="block text-black/30 mb-1">Year</span>
                        2024 — 2025
                    </div>
                </div>
            </div>

            {/* Right: The Solar Mandala (CSS Art) */}
            <div className="w-full md:w-1/2 bg-[#111] relative flex items-center justify-center overflow-hidden min-h-[50vh] md:min-h-auto">
                {/* Gradient Mesh Background */}
                <div className="absolute inset-0 opacity-40" style={{
                    background: 'radial-gradient(circle at 50% 50%, #9B4DCA 0%, #E01E5A 40%, #FF9933 100%)',
                    filter: 'blur(60px)'
                }}></div>

                {/* Rotating Rings */}
                <div className="relative w-[80%] aspect-square flex items-center justify-center">
                    {/* Ring 1 */}
                    <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_30s_linear_infinite]" />
                    {/* Ring 2 */}
                    <div className="absolute inset-[10%] border border-white/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" 
                         style={{ borderStyle: 'dashed' }} />
                    {/* Ring 3 */}
                    <div className="absolute inset-[20%] border border-white/20 rounded-full animate-[spin_15s_linear_infinite]" />
                    
                    {/* Center Core */}
                    <div className="absolute w-32 h-32 bg-white rounded-full mix-blend-overlay blur-md animate-pulse" />
                    <div className="absolute w-24 h-24 bg-black rounded-full border border-white/50 flex items-center justify-center z-10">
                        <span className="text-white font-mono text-xs font-bold tracking-tighter">IBW</span>
                    </div>
                </div>

                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
            </div>
        </header>


        {/* ======================== NARRATIVE ======================== */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
            <div className="md:col-span-8 md:col-start-3 px-6 py-24 md:py-32 md:border-x border-black bg-white">
                
                <h2 className="text-3xl md:text-5xl font-light leading-tight mb-12">
                    How do you visualize a decentralized future without losing the warmth of heritage?
                </h2>

                <div className="prose prose-lg text-black/70 font-light">
                    <p className="mb-6">
                        Blockchain branding often falls into a trap of cold blues, dark modes, and futuristic wireframes. It feels distant. Alien.
                    </p>
                    <p className="mb-6">
                        For <strong>India Blockchain Week</strong>, the organizers wanted something that felt authentically Indian—chaotic, vibrant, and warm—without resorting to kitsch or clichés. They needed a visual system that could hold the complexity of web3 protocols while inviting a diverse, global audience.
                    </p>
                    <p>
                        Our solution was to bridge the gap between the ancient geometry of <span className="text-black font-medium border-b border-[#FF9933]">Mandalas</span> (recursive, centered systems) and the distributed nature of <span className="text-black font-medium border-b border-[#9B4DCA]">Blockchain Nodes</span>.
                    </p>
                </div>
            </div>
        </section>

        {/* ======================== SCALE OF EVENT ======================== */}
        <section className="bg-[#111] text-[#F4F4F0] border-b border-black">
             <div className="px-6 py-4 border-b border-white/20 flex justify-between items-center bg-[#1a1a1a]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF9933]">01. Impact & Scale</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-white/10 border-b border-white/10">
                {/* Metric 1 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Users className="w-6 h-6 text-[#FF9933] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">2000+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Attendees</p>
                </div>

                {/* Metric 2 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Globe className="w-6 h-6 text-[#E01E5A] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">50+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Countries</p>
                </div>

                {/* Metric 3 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Layers className="w-6 h-6 text-[#9B4DCA] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">125+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Side Events</p>
                </div>

                {/* Metric 4 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Cpu className="w-6 h-6 text-[#FFD700] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">7 Days</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Of Innovation</p>
                </div>
            </div>
        </section>


        {/* ======================== COLOR SYSTEM (Interactive) ======================== */}
        <section className="w-full border-b border-black">
            <div className="px-6 py-4 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest">02. Spectrum System</span>
                <span className="font-mono text-xs text-black/40 hidden md:inline">Hover to expand</span>
            </div>
            
            <div className="h-[60vh] flex flex-col md:flex-row w-full">
                
                {/* Color 1: Saffron */}
                <div className="group relative flex-1 bg-[#FF9933] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-black">
                        <span className="font-mono text-xs mb-2 block opacity-60">Primary</span>
                        <h3 className="text-4xl font-bold tracking-tighter mb-2 transform md:-translate-x-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                            Saffron
                        </h3>
                        <div className="font-mono text-xs bg-black text-white inline-block px-2 py-1">#FF9933</div>
                    </div>
                </div>

                {/* Color 2: Rani Pink */}
                <div className="group relative flex-1 bg-[#E01E5A] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-white">
                        <span className="font-mono text-xs mb-2 block opacity-60">Accent A</span>
                        <h3 className="text-4xl font-bold tracking-tighter mb-2 transform md:-translate-x-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                            Rani Pink
                        </h3>
                        <div className="font-mono text-xs bg-white text-black inline-block px-2 py-1">#E01E5A</div>
                    </div>
                </div>

                {/* Color 3: Royal Purple */}
                <div className="group relative flex-1 bg-[#9B4DCA] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-white">
                        <span className="font-mono text-xs mb-2 block opacity-60">Accent B</span>
                        <h3 className="text-4xl font-bold tracking-tighter mb-2 transform md:-translate-x-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                            Royal Purple
                        </h3>
                        <div className="font-mono text-xs bg-white text-black inline-block px-2 py-1">#9B4DCA</div>
                    </div>
                </div>

                {/* Color 4: Marigold */}
                <div className="group relative flex-1 bg-[#FFD700] hover:flex-[3] transition-all duration-500 ease-out flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-black">
                        <span className="font-mono text-xs mb-2 block opacity-60">Highlight</span>
                        <h3 className="text-4xl font-bold tracking-tighter mb-2 transform md:-translate-x-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                            Marigold
                        </h3>
                        <div className="font-mono text-xs bg-black text-white inline-block px-2 py-1">#FFD700</div>
                    </div>
                </div>

            </div>
        </section>


        {/* ======================== VISUAL GRID ======================== */}
        <section className="bg-white border-b border-black">
            <div className="px-6 py-4 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest">03. Application</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Item 1: Typography */}
                <div className="aspect-square border-b border-black md:border-r p-8 md:p-16 flex flex-col justify-between group">
                    <div>
                        <span className="font-mono text-xs text-black/40 mb-4 block">Typography</span>
                        <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none group-hover:text-[#FF9933] transition-colors">
                            BOLD<br/>MOVES<br/>ONLY.
                        </h3>
                    </div>
                    <div className="text-sm font-mono text-black/60">
                        Typeface: Monument Extended<br/>
                        Usage: Headlines / Impact
                    </div>
                </div>

                {/* Item 2: Pattern */}
                <div className="aspect-square border-b border-black relative overflow-hidden group">
                     <div className="absolute inset-0 bg-black"></div>
                     {/* CSS Grid Pattern */}
                     <div className="absolute inset-0" 
                          style={{ 
                              backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                              backgroundSize: '40px 40px' 
                          }}>
                     </div>
                     {/* Floating Elements */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#E01E5A] rounded-full mix-blend-screen animate-pulse" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#FF9933] rotate-45 mix-blend-screen" />
                     
                     <div className="absolute bottom-8 left-8 text-white font-mono text-xs z-10">
                        Grid System / Backgrounds
                     </div>
                </div>

                {/* Item 3: Mockup (Placeholder) */}
                <div className="aspect-[4/3] md:col-span-2 relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-mono text-xs uppercase bg-white px-2 py-1 z-10">Event Wayfinding Mockup</span>
                    </div>
                    <img 
                        src="https://picsum.photos/1600/900?grayscale&blur=2" 
                        alt="Event Mockup" 
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                </div>
            </div>
        </section>

        {/* ======================== NFT DESIGN ======================== */}
        <section className="bg-[#050505] text-[#F4F4F0] border-b border-black py-24 px-6 md:px-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                     <span className="font-mono text-xs uppercase tracking-widest text-[#9B4DCA] mb-4 block">Digital Artifacts</span>
                     <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
                         Soulbound <br/> Commemoratives
                     </h2>
                     <p className="text-white/60 leading-relaxed mb-8">
                         Beyond the physical, we designed the "Genesis Pulse" NFT collection. 
                         These soulbound tokens served as proof-of-attendance, utilizing a 
                         procedural shader that generated a unique mandala for every single attendee based on their wallet address.
                     </p>
                     <div className="flex gap-4">
                         <div className="px-4 py-2 border border-white/20 rounded font-mono text-xs">WebGL</div>
                         <div className="px-4 py-2 border border-white/20 rounded font-mono text-xs">Polygon</div>
                     </div>
                </div>
                
                <div className="aspect-square bg-[#111] rounded-xl border border-white/10 relative flex items-center justify-center overflow-hidden group">
                    {/* Placeholder for NFT Video/Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9B4DCA]/20 to-[#E01E5A]/20 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    <div className="w-2/3 h-2/3 border border-white/30 rounded-lg flex items-center justify-center relative shadow-[0_0_50px_rgba(155,77,202,0.3)] group-hover:scale-105 transition-transform duration-700">
                        <div className="text-center">
                            <Cpu className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
                            <span className="font-mono text-xs uppercase tracking-widest">Genesis Pulse #001</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ======================== THE ARCHIVE (MOSAIC GALLERY) ======================== */}
        <section className="bg-[#F4F4F0]">
            <div className="px-6 py-4 border-b border-black flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest">04. The Archive: Event Collaterals</span>
                <span className="font-mono text-xs text-black/40">12 Items</span>
            </div>

            {/* Masonry-ish Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px]">

                {/* IBW Images */}
                {[
                    { src: '/images/ibw/IBW Branding.webp', title: 'Brand Identity', span: 'md:col-span-2' },
                    { src: '/images/ibw/IBW Logo.webp', title: 'Logo Design' },
                    { src: '/images/ibw/IBW Brands.webp', title: 'Brand Applications' },
                    { src: '/images/ibw/IBW Stage.webp', title: 'Stage Design' },
                    { src: '/images/ibw/IBW Gate.webp', title: 'Entry Gate', span: 'md:col-span-2' },
                    { src: '/images/ibw/IBW SIgnage.webp', title: 'Signage System' },
                    { src: '/images/ibw/IBW Registration.webp', title: 'Registration Desk', span: 'md:col-span-2' },
                    { src: '/images/ibw/IBW Stage 3.webp', title: 'Stage Graphics' },
                    { src: '/images/ibw/IBW stage 4.webp', title: 'Visual Elements' },
                    { src: '/images/ibw/IBW stage 5.webp', title: 'Event Atmosphere' },
                    { src: '/images/ibw/IBW Ticketing booth.webp', title: 'Ticketing Booth' }
                ].map((item, i) => (
                    <div
                        key={i}
                        className={`relative group overflow-hidden border-r border-b border-black/10 bg-white ${item.span || ''}`}
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter contrast-125"
                        />
                        <div className="absolute inset-0 bg-[#FF9933] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 w-full p-4 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="font-mono text-xs uppercase tracking-widest text-black">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </section>


        {/* ======================== FOOTER NAV ======================== */}
        <div className="bg-[#111] text-white py-24 px-6 md:px-12 flex flex-col md:flex-row justify-between items-end">
            <div>
                <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4 block">Next Case Study</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter hover:text-[#FF9933] cursor-pointer transition-colors" onClick={() => onNavigate(Page.CASE_STUDY_RECLAIM)}>
                    Proving the Invisible
                </h2>
            </div>
            
            <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="mt-12 md:mt-0 flex items-center gap-2 border-b border-white pb-1 hover:text-[#FF9933] hover:border-[#FF9933] transition-colors"
            >
                Start a Project <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>

    </div>
  );
};

export default CaseStudyIBW;
