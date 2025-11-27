
import React, { useRef, useEffect } from 'react';
import PoeticMachine from './PoeticMachine';
import { Image, Music, Video } from 'lucide-react';
import SEO from './SEO';

const CommunityLabVisual: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const mouse = { x: -1000, y: -1000 };
        
        // Configuration
        const GAP = 40; // Spacing between grid points (Emptiness)
        let rows = 0;
        let cols = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if(parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                cols = Math.ceil(canvas.width / GAP);
                rows = Math.ceil(canvas.height / GAP);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;

            mouse.x = (e.clientX - rect.left) * scaleX;
            mouse.y = (e.clientY - rect.top) * scaleY;
        };
        
        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', resize);
        
        resize();

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const time = Date.now() * 0.001;

            for (let ix = 0; ix < cols; ix++) {
                for (let iy = 0; iy < rows; iy++) {
                    const x = ix * GAP + GAP / 2;
                    const y = iy * GAP + GAP / 2;

                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 400;
                    
                    let angle = 0;
                    let scaleX = 1;
                    let scaleY = 1;

                    if (dist < maxDist) {
                        angle = Math.atan2(dy, dx);
                        const intensity = 1 - (dist / maxDist); 
                        scaleX = 1 + (intensity * 2); 
                        scaleY = 1 - (intensity * 0.7); 
                    } else {
                        angle = Math.sin(time + ix * 0.1 + iy * 0.1) * 0.1;
                    }

                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(angle);
                    ctx.fillStyle = '#111';
                    const baseSize = 12; 
                    ctx.beginPath();
                    ctx.fillRect(
                        -(baseSize * scaleX) / 2, 
                        -(baseSize * scaleY) / 2, 
                        baseSize * scaleX, 
                        baseSize * scaleY
                    );
                    ctx.fill();
                    ctx.restore();
                }
            }
            
            if (mouse.x > 0 && mouse.x < canvas.width && mouse.y > 0 && mouse.y < canvas.height) {
                 ctx.save();
                 ctx.translate(mouse.x, mouse.y);
                 ctx.strokeStyle = '#FF4400';
                 ctx.lineWidth = 2;
                 const size = 10;
                 ctx.beginPath();
                 ctx.moveTo(-size, 0); ctx.lineTo(size, 0);
                 ctx.moveTo(0, -size); ctx.lineTo(0, size);
                 ctx.stroke();
                 ctx.restore();
            }

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (canvas) {
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="w-full h-full block bg-[#F0F0EE] cursor-none touch-none" 
        />
    );
};

const Experiments: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-24">
        <SEO 
            title="Experiments & Prototypes"
            description="Our laboratory for sonic architecture, machine learning prototypes, community interactions, and indie games."
            keywords={['Creative Coding', 'Design Lab', 'Poetic Machine', 'Community Lab', 'Prototyping', 'Indie Games India', 'Poetics of Play', 'Game Archive']}
        />
        <div className="px-6 md:px-12 mb-12">
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter">Laboratory</h1>
        </div>
        
        {/* ======================== POETIC MACHINE ======================== */}
        <div className="border-t border-b border-black/5 bg-[#F0F0EE]">
            {/* This is the interactive AI/Game component */}
            <PoeticMachine />
        </div>
        {/* ================================================================ */}

        <div className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
            
            {/* ======================== COMMUNITY LAB SECTION ======================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
                <div>
                     <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Community Interactions Lab</span>
                     {/* EDIT TITLE */}
                     <h2 className="text-3xl font-light mb-6">Open Source Culture</h2>
                     {/* EDIT DESCRIPTION */}
                     <p className="text-black/70 leading-relaxed mb-8">
                         The Community Interactions Lab is our dedicated space for civic technology and public art. 
                         We host monthly hackathons in Prayagraj exploring how digital tools can aid local craftsmanship.
                         <br/><br/>
                         <span className="text-xs font-mono text-black/40">INTERACTION: The field aligns to your attention.</span>
                     </p>
                     {/* EDIT LINK */}
                     <a href="https://eth.poetics.studio" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-black text-xs font-mono uppercase hover:bg-black hover:text-white transition-colors">
                         Visit Lab Microsite ↗
                     </a>
                </div>
                <div className="aspect-video w-full relative overflow-hidden group cursor-none border border-black/10">
                     {/* The Interactive Visual Canvas */}
                     <CommunityLabVisual />
                </div>
            </div>
            {/* ========================================================================= */}

            {/* ======================== POETICS OF PLAY SECTION ======================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
                <div className="md:order-2">
                     <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Indie Game Archive</span>
                     {/* EDIT TITLE */}
                     <h2 className="text-3xl font-light mb-6">Poetics of Play</h2>
                     {/* EDIT DESCRIPTION */}
                     <p className="text-black/70 leading-relaxed mb-8">
                         A curated collection of indie games created by Studio Poetics and our vibrant community. We release fresh, innovative games every 2-3 weeks. 
                         We envision this platform as an archive, a learning ground, and a showcase for Indian game developers to experiment with mechanics beyond the known norms of commercial gaming.
                     </p>
                     {/* EDIT LINK */}
                     <a href="http://play.poetics.studio/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border border-black text-xs font-mono uppercase hover:bg-black hover:text-white transition-colors">
                         Enter Arcade ↗
                     </a>
                </div>
                <div className="bg-[#111] aspect-video w-full relative overflow-hidden group cursor-pointer md:order-1">
                     {/* Abstract visual */}
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border border-white/20 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                        <div className="absolute w-16 h-16 border border-[#FF4400] rounded-full transform -translate-x-4 mix-blend-screen group-hover:translate-x-4 transition-transform duration-700 opacity-60"></div>
                        <div className="absolute w-2 h-2 bg-white rounded-full top-1/3 left-1/3 animate-pulse"></div>
                     </div>
                </div>
            </div>
            {/* ========================================================================= */}

            {/* ======================== ARCHIVE OF PROTOTYPES ======================== */}
            <div className="border-t border-black/10 pt-16">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-2xl font-light">Archive of Prototypes</h2>
                    <span className="font-mono text-xs text-black/40 hidden md:block">Status: Open Sorce / Demo Ready</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Prototype Item 1 */}
                    <a href="/experiments/pixelforge" className="border border-black/5 p-8 bg-white hover:border-[#FF4400]/30 transition-colors group cursor-pointer">
                        <div className="mb-6 text-black/30 group-hover:text-[#FF4400] transition-colors">
                            <Image className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">PixelForge</h3>
                        <p className="text-sm text-black/60 leading-relaxed mb-4">
                            A tool to batch process and optimise images for web.
                        </p>
                        <span className="text-xs font-mono uppercase bg-black/5 px-2 py-1 rounded text-black/50">Image Processing</span>
                    </a>

                    {/* Prototype Item 2 */}
                    <a href="/experiments/media-hotkey-player" className="border border-black/5 p-8 bg-white hover:border-[#FF4400]/30 transition-colors group cursor-pointer">
                        <div className="mb-6 text-black/30 group-hover:text-[#FF4400] transition-colors">
                            <Video className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">MediaHotkeyPlayer</h3>
                        <p className="text-sm text-black/60 leading-relaxed mb-4">
                            A media player for museums interactive installations.
                        </p>
                        <span className="text-xs font-mono uppercase bg-black/5 px-2 py-1 rounded text-black/50">Installation / AV</span>
                    </a>

                    {/* Prototype Item 3 */}
                    <a href="/experiments/sonic-arch" target="_blank" rel="noopener noreferrer" className="border border-black/5 p-8 bg-white hover:border-[#FF4400]/30 transition-colors group cursor-pointer">
                        <div className="mb-6 text-black/30 group-hover:text-[#FF4400] transition-colors">
                            <Music className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Sonic Architecture</h3>
                        <p className="text-sm text-black/60 leading-relaxed mb-4">
                            An attempt to convert 2D floorplans into musical scores based on room volume and light entry.
                        </p>
                        <span className="text-xs font-mono uppercase bg-black/5 px-2 py-1 rounded text-black/50">Audio / Spatial</span>
                    </a>

                </div>
            </div>
            {/* ======================================================================= */}
        </div>
    </div>
  );
};

export default Experiments;
