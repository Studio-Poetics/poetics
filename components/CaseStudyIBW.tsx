
import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Copy, Users, Globe, Layers, Cpu } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';

interface CaseStudyProps {
    onNavigate: (page: Page) => void;
}

const CaseStudyIBW: React.FC<CaseStudyProps> = ({ onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedNFT, setSelectedNFT] = useState<any>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setTimeout(() => {
        video.play();
      }, 5000); // 5 second pause
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-[#111] selection:bg-[#FF9933] selection:text-black">
        <SEO
            title="India Blockchain Week 2023 - Brand Identity Design Case Study | Poetics Studio"
            description="Explore our comprehensive brand identity design for India Blockchain Week 2023. From mandala-inspired logos to NFT tickets, discover how we bridged Indian heritage with blockchain innovation for 2000+ attendees, 135+ speakers, and 100+ events."
            keywords={['India Blockchain Week 2023', 'Blockchain Event Branding', 'Web3 Design India', 'Mandala Logo Design', 'NFT Ticket Design', 'Cryptocurrency Event Branding', 'Indian Cultural Design', 'Blockchain Conference Identity', 'Event Brand Design', 'Digital Asset Design', 'Poetics Studio Portfolio', 'Generative Brand System']}
            schema={{
                "@type": "CreativeWork",
                "name": "India Blockchain Week 2023 - Brand Identity System",
                "creator": {
                    "@type": "Organization",
                    "name": "Poetics Studio"
                },
                "genre": "Brand Identity Design",
                "dateCreated": "2023",
                "about": "Comprehensive brand identity design for India's premier blockchain conference featuring mandala-inspired visual systems, NFT ticketing, and cultural heritage integration",
                "keywords": "blockchain branding, web3 design, event identity, NFT design, Indian cultural design"
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
        <div className="fixed top-0 left-0 h-1 bg-[#ffa232] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />


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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF42F] via-[#f450b2] to-[#3fcbff]">WEEK</span>
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
                        2023 — 2024
                    </div>
                </div>
            </div>

            {/* Right: IBW Logogram Video */}
            <div className="w-full md:w-1/2 bg-[#111] relative overflow-hidden min-h-[50vh] md:min-h-auto">
                {/* Video - Full Cover */}
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                >
                    <source src="/wave.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white font-mono text-xs">IBW Logogram</span>
                    </div>
                </video>

                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
            </div>
        </header>


        {/* ======================== NARRATIVE ======================== */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-black mt-16">
            <div className="md:col-span-8 md:col-start-3 px-8 py-24 md:py-32 md:border-x border-black bg-white">
                
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
                        Our solution was to bridge the gap between the ancient geometry of <span className="text-black font-medium border-b border-[#ffa232]">Mandalas</span> (recursive, centered systems) and the distributed nature of <span className="text-black font-medium border-b border-[#3fcbff]">Blockchain Nodes</span>.
                    </p>
                </div>
            </div>
        </section>

        {/* ======================== SCALE OF EVENT ======================== */}
        <section className="bg-[#111] text-[#F4F4F0] border-b border-black mt-24">
             <div className="px-6 py-8 border-b border-white/20 flex justify-between items-center bg-[#1a1a1a]">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest text-[#ffa232]">01. Impact & Scale</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-white/10 border-b border-white/10">
                {/* Metric 1 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Users className="w-6 h-6 text-[#FFF42F] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">2000+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Attendees</p>
                </div>

                {/* Metric 2 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Globe className="w-6 h-6 text-[#ffa232] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">135+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Speakers</p>
                </div>

                {/* Metric 3 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Layers className="w-6 h-6 text-[#f450b2] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">35+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Sponsors</p>
                </div>

                {/* Metric 4 */}
                <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group">
                    <Cpu className="w-6 h-6 text-[#3fcbff] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">100+</h3>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/50">Side Events</p>
                </div>
            </div>
        </section>


        {/* ======================== COLOR SYSTEM (Interactive) ======================== */}
        <section className="w-full border-b border-black mt-24">
            <div className="px-6 py-8 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest">02. Spectrum System</span>
                <span className="font-mono text-sm text-black/40 hidden md:inline">Hover to expand</span>
            </div>
            
            <div className="h-[60vh] flex flex-col md:flex-row w-full">
                
                {/* Color 1 */}
                <div className="group relative flex-1 bg-[#FFF42F] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-black">
                        <div className="font-mono text-xs bg-black text-white inline-block px-2 py-1">#FFF42F</div>
                    </div>
                </div>

                {/* Color 2 */}
                <div className="group relative flex-1 bg-[#ffa232] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-black">
                        <div className="font-mono text-xs bg-white text-black inline-block px-2 py-1">#ffa232</div>
                    </div>
                </div>

                {/* Color 3 */}
                <div className="group relative flex-1 bg-[#f450b2] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-white">
                        <div className="font-mono text-xs bg-white text-black inline-block px-2 py-1">#f450b2</div>
                    </div>
                </div>

                {/* Color 4 */}
                <div className="group relative flex-1 bg-[#3fcbff] hover:flex-[3] transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-black">
                        <div className="font-mono text-xs bg-white text-black inline-block px-2 py-1">#3fcbff</div>
                    </div>
                </div>

                {/* Color 5 */}
                <div className="group relative flex-1 bg-[#d0d81d] hover:flex-[3] transition-all duration-500 ease-out flex flex-col justify-end p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] transition-opacity" />
                    <div className="relative z-10 text-black">
                        <div className="font-mono text-xs bg-black text-white inline-block px-2 py-1">#d0d81d</div>
                    </div>
                </div>

            </div>
        </section>


        {/* ======================== VISUAL GRID ======================== */}
        <section className="bg-white border-b border-black mt-24">
            <div className="px-6 py-8 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest">03. Application</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

                {/* Item 1: Typography */}
                <div className="aspect-square border border-black rounded-lg p-8 md:p-16 flex flex-col justify-center group bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="text-center">
                        <span className="text-xs text-black/40 mb-8 block uppercase tracking-widest">Typography</span>

                        {/* Large Display of Jost */}
                        <div className="mb-8">
                            <h3 className="text-8xl font-light text-black mb-2">Aa</h3>
                            <p className="text-2xl font-bold text-black mb-1">JOST</p>
                            <p className="text-sm text-black/60">Google Fonts</p>
                        </div>

                        {/* Character Set */}
                        <div className="text-xs text-black/60 leading-relaxed">
                            <p className="mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            <p className="mb-2">abcdefghijklmnopqrstuvwxyz</p>
                            <p>0123456789</p>
                        </div>
                    </div>
                </div>

                {/* Item 2: Logo Mark Construction */}
                <div className="aspect-square border border-black rounded-lg relative overflow-hidden group bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                     <div className="p-8 h-full flex flex-col justify-between">
                        <div className="text-center">
                            <span className="text-xs text-black/40 uppercase tracking-widest">Logo Mark</span>
                        </div>

                        <div className="flex-1 flex items-center justify-center py-6">
                            <img
                                src="/images/ibw/casestudy/Logo-mark-grid.png"
                                alt="Logo Mark Construction Grid"
                                className="w-full max-w-[80%] h-auto object-contain"
                            />
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-base font-semibold text-black text-center">Construction & Meaning</h4>
                            <p className="text-xs text-black/70 leading-relaxed text-center">
                                A <span className="font-medium text-black">circular mandala</span> inspired by Indian art, with a <span className="font-medium text-black">lotus flower</span> at the centre.
                            </p>
                            <div className="pt-2 border-t border-black/10">
                                <p className="text-xs text-black/50 text-center font-mono uppercase tracking-widest">
                                    Sacred Geometry × Digital Innovation
                                </p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Item 3: Event Snapshots */}
{/*                 <div className="aspect-[4/3] md:col-span-2 relative overflow-hidden group">
                    <img
                        src="/images/ibw/mosaic.png"
                        alt="Event Snapshots"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#FF9933] mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="font-mono text-xs uppercase tracking-widest text-white">
                            Event Snapshots
                        </span>
                    </div>
                </div> */}
            </div>
        </section>

        {/* ======================== SOCIAL MEDIA TEMPLATES ======================== */}
        <section className="bg-white border-b border-black mt-24">
            <div className="px-6 py-8 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest">04. Social Media Templates</span>
                <span className="font-mono text-sm text-black/40 hidden md:inline">Hover to expand</span>
            </div>

            <div className="flex flex-col md:flex-row h-80 md:h-96 mt-4">
                {[
                    { name: 'Speaker Announcement', image: '/images/ibw/casestudy/Social-media-templates/speaker-announcement.png', isMain: true },
                    { name: 'Daily Update', image: '/images/ibw/casestudy/Social-media-templates/daily-update.png', isMain: false },
                    { name: 'Social Media', image: '/images/ibw/casestudy/Social-media-templates/social-media.png', isMain: false }
                ].map((template, index) => (
                    <div
                        key={index}
                        className={`${template.isMain ? 'flex-[2]' : 'flex-1'} border-b md:border-b-0 md:border-r border-black relative overflow-hidden group cursor-pointer transition-all duration-700 ease-in-out hover:flex-[3] last:border-r-0`}
                        onClick={() => setSelectedTemplate(template)}
                    >
                        <img
                            src={template.image}
                            alt={`${template.name} Template`}
                            className="w-full h-full object-contain bg-white"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-black text-xs bg-white/90 px-3 py-2 rounded shadow">{template.name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* ======================== PATTERNS & ICONOGRAPHY ======================== */}
        <section className="bg-[#F4F4F0] border-b border-black mt-24">
            <div className="px-6 py-8 border-b border-black flex justify-between items-center">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest">05. Patterns & Iconography</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="aspect-square border border-black rounded-lg relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <img
                        src="/images/ibw/casestudy/Pattern.png"
                        alt="Pattern Design"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-8">
                        <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">Patterns</span>
                    </div>
                </div>

                <div className="aspect-square border border-black rounded-lg bg-[#111] relative overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <img
                        src="/images/ibw/casestudy/Logo-pattern.png"
                        alt="Pattern Design"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3fcbff]/20 to-[#f450b2]/20"></div>
                    <div className="absolute bottom-8 left-8">
                        <span className="text-xs text-white/80">Pattern System</span>
                    </div>
                </div>
            </div>
        </section>

        {/* ======================== WEBSITE DESIGN ======================== */}
        <section className="bg-white border-b border-black mt-24">
            <div className="px-6 py-8 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest">06. Website</span>
            </div>

            <div className="aspect-[16/10] relative overflow-hidden border-b border-black bg-white cursor-pointer group" onClick={() => window.open('https://indiablockchainweek.com/ibw-2023', '_blank')}>
                <img
                    src="/images/ibw/casestudy/website-light.png"
                    alt="IBW Website Design"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-black bg-white/90 px-4 py-2 rounded-full text-sm font-medium shadow-lg">Visit Live Site</span>
                </div>
                <div className="hidden w-full h-full bg-[#111] p-8 absolute inset-0">
                    <div className="w-full h-full bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-2xl font-bold">IBW 2024</div>
                            <div className="flex gap-4 text-sm">
                                <span>Speakers</span>
                                <span>Schedule</span>
                                <span>Sponsors</span>
                                <span>Register</span>
                            </div>
                        </div>
                        <div className="h-32 bg-gradient-to-r from-[#FFF42F] via-[#ffa232] to-[#f450b2] rounded-lg mb-4 flex items-center justify-center">
                            <h1 className="text-4xl font-bold text-black">INDIA BLOCKCHAIN WEEK</h1>
                        </div>
                        <div className="grid grid-cols-3 gap-4 h-20">
                            <div className="bg-gray-100 rounded"></div>
                            <div className="bg-gray-100 rounded"></div>
                            <div className="bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ======================== NFT & TICKETS ======================== */}
        <section className="bg-[#050505] text-[#F4F4F0] border-b border-black py-32 md:py-48 px-6 md:px-12 overflow-hidden relative mt-24">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                     <span className="font-mono text-lg font-semibold uppercase tracking-widest text-[#9B4DCA] mb-6 block">Digital Artifacts & Ticketing</span>
                     <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">
                         NFT Tickets &<br/> Commemoratives
                     </h2>
                     <p className="text-white/60 leading-relaxed mb-8">
                         These NFT tickets were digitally issued to attendees, who had the unique opportunity to mint them into NFTs and own the very first IBW NFT collection.
                         Each ticket type represented different access levels and became a digital collectible commemorating India's premier blockchain event.
                     </p>
                     <div className="flex gap-4">
                         <div className="px-4 py-2 border border-white/20 rounded font-mono text-xs">Digital Assets</div>
                         <div className="px-4 py-2 border border-white/20 rounded font-mono text-xs">NFT Collection</div>
                     </div>
                </div>
                
                <div className="bg-[#111] rounded-xl border border-white/10 p-8">
                    {/* NFT Grid Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'General Pass', image: '/images/ibw/casestudy/NFT/General-Pass.png', color: 'from-[#FFF42F]' },
                            { name: 'Premium Pass', image: '/images/ibw/casestudy/NFT/Premium-Pass.png', color: 'from-[#ffa232]' },
                            { name: 'Speaker Pass', image: '/images/ibw/casestudy/NFT/Speaker-Pass.png', color: 'from-[#f450b2]' },
                            { name: 'Student Pass', image: '/images/ibw/casestudy/NFT/Student-Pass.png', color: 'from-[#3fcbff]' }
                        ].map((nft, index) => (
                            <div key={index} className="group cursor-pointer" onClick={() => setSelectedNFT(nft)}>
                                <div className="aspect-square rounded-2xl overflow-hidden border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105 mb-4">
                                    <img
                                        src={nft.image}
                                        alt={nft.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-white font-semibold text-sm mb-1">{nft.name}</h4>
                                    <div className={`h-1 w-full bg-gradient-to-r ${nft.color} to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* NFT Collection Info */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <span className="text-white/40 text-xs uppercase tracking-widest block mb-1">Collection</span>
                            <span className="text-white font-semibold">IBW 2023 Genesis Collection</span>
                        </div>
                        <div className="flex gap-6 text-xs text-white/60">
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest mb-1">Total Supply</span>
                                <span className="text-white">2000+ Tickets</span>
                            </div>
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest mb-1">Format</span>
                                <span className="text-white">Digital Tickets</span>
                            </div>
                            <div>
                                <span className="block text-white/40 uppercase tracking-widest mb-1">Type</span>
                                <span className="text-white">Mintable NFTs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ======================== EVENT PRINTS & MARKETING COLLATERAL ======================== */}
        {/* SECTION TEMPORARILY HIDDEN
        <section className="bg-white border-b border-black">
            <div className="px-6 py-4 border-b border-black bg-[#F4F4F0] flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest">07. Event Prints & Marketing Collateral</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px]">
                <div className="md:col-span-2 border-b border-black md:border-r relative overflow-hidden group">
                    <img
                        src="/images/ibw/poster-main.png"
                        alt="Main Event Poster"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFF42F] to-[#f450b2] flex items-center justify-center hidden">
                        <div className="text-center text-black">
                            <h3 className="text-4xl font-bold mb-4">IBW 2024</h3>
                            <p className="font-mono text-sm">Main Event Poster</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="font-mono text-xs uppercase tracking-widest text-white">Main Event Poster</span>
                    </div>
                </div>

                <div className="border-b border-black md:border-r relative overflow-hidden group bg-[#F4F4F0]">
                    <div className="h-full p-8 flex flex-col justify-center">
                        <div className="aspect-[3/4] bg-white rounded-lg shadow-lg p-4 mb-4">
                            <div className="h-1/3 bg-gradient-to-r from-[#ffa232] to-[#f450b2] rounded mb-3"></div>
                            <div className="h-2/3 space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                        <span className="font-mono text-xs text-black/60 text-center">Brochure Design</span>
                    </div>
                </div>

                <div className="border-b border-black relative overflow-hidden group bg-[#111]">
                    <div className="h-full p-8 flex flex-col justify-center">
                        <div className="aspect-square bg-[#3fcbff] rounded-xl mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold text-black">IBW</span>
                        </div>
                        <span className="font-mono text-xs text-white/60 text-center">Badge Design</span>
                    </div>
                </div>
            </div>
        </section>
        */}

        {/* ======================== THE ARCHIVE (MOSAIC GALLERY) ======================== */}
        <section className="bg-[#F4F4F0] mt-24">
            <div className="px-6 py-8 border-b border-black flex justify-between items-center">
                <span className="font-mono text-lg font-semibold uppercase tracking-widest">08. The Archive: Event Collaterals</span>
                <span className="font-mono text-sm text-black/40">12 Items</span>
            </div>

            {/* Masonry-ish Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-2 p-4">

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
        <div className="bg-[#111] text-white py-24 md:py-32 px-8 md:px-16 flex flex-col md:flex-row justify-between items-end mt-24">
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

        {/* ======================== NFT MODAL ======================== */}
        {selectedNFT && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedNFT(null)}>
                <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-black">{selectedNFT.name}</h3>
                        <button
                            onClick={() => setSelectedNFT(null)}
                            className="text-black/40 hover:text-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="aspect-square rounded-xl overflow-hidden mb-6 border border-black/10">
                        <img
                            src={selectedNFT.image}
                            alt={selectedNFT.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-4 text-sm text-black/60">
                        <p>
                            This digital ticket was issued to attendees of India Blockchain Week 2023.
                            Holders had the opportunity to mint these tickets as NFTs, creating the first-ever IBW collectible series.
                        </p>
                        <p>
                            Each ticket design incorporates the event's mandala-inspired visual identity,
                            representing the convergence of traditional Indian art and cutting-edge blockchain technology.
                        </p>
                    </div>
                </div>
            </div>
        )}

        {/* ======================== SOCIAL MEDIA TEMPLATE MODAL ======================== */}
        {selectedTemplate && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedTemplate(null)}>
                <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-black">{selectedTemplate.name}</h3>
                        <button
                            onClick={() => setSelectedTemplate(null)}
                            className="text-black/40 hover:text-black transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="rounded-xl overflow-hidden mb-6 border border-black/10 bg-gray-50">
                        <img
                            src={selectedTemplate.image}
                            alt={selectedTemplate.name}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="space-y-4 text-sm text-black/60">
                        <p>
                            Social media template designed for India Blockchain Week 2023 communications.
                            These templates maintained consistent brand identity across all digital platforms.
                        </p>
                        <p>
                            Each template incorporates the event's vibrant color palette and mandala-inspired visual elements,
                            ensuring cohesive brand representation throughout the event's social media presence.
                        </p>
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default CaseStudyIBW;
