import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Loader2, ArrowRight, X, ArrowLeft, ArrowUp } from 'lucide-react';

// --- PROTOTYPE 001: THE ICONOCLAST (AI) ---
const TheIconoclast: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleDeconstruct = useCallback(async () => {
      if (!input.trim()) return;
      setLoading(true);

      try {
        const [response] = await Promise.all([
          fetch('/api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: input.trim() }),
          }),
          new Promise(resolve => setTimeout(resolve, 800))
        ]);

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const data = await response.json();
        setOutput(data.text || 'silence returned.');
      } catch (error) {
        console.error('Error generating poetics:', error);
        setOutput('static noise. connection interrupted.');
      }

      setLoading(false);
    }, [input]);
  
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleDeconstruct();
    };

    return (
        <div className="flex flex-col items-center w-full animate-in fade-in duration-700">
            <div className="w-full max-w-lg relative group">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter an archetype (e.g., 'chair', 'clock', 'lamp')"
                    className="w-full bg-white border border-black/10 p-6 pr-16 text-lg font-light focus:outline-none focus:border-[#FF4400] transition-all placeholder:text-black/20 text-center shadow-sm"
                />
                <button 
                    onClick={handleDeconstruct}
                    disabled={loading || !input}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors disabled:opacity-30"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin text-[#FF4400]" /> : <ArrowRight className="w-5 h-5" />}
                </button>
            </div>

            <div className="mt-16 min-h-[120px] flex items-center justify-center text-center max-w-2xl">
                {output ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                         <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80">
                            "{output}"
                        </p>
                    </div>
                ) : (
                    <p className="text-black/30 text-sm font-mono lowercase">
                        awaiting archetype to deconstruct...
                    </p>
                )}
            </div>
        </div>
    );
};

// --- AUDIO ENGINE ---
const playSound = (type: 'jump' | 'collect') => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'jump') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'collect') {
        osc.type = 'triangle';
        // A nice major chord arpeggio effect or high ping
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
};

// --- PROTOTYPE 002: THE GARDEN (GAME) ---
interface TheGardenProps {
    onExit: () => void;
}

const TheGarden: React.FC<TheGardenProps> = ({ onExit }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    // Virtual controls state for mobile
    const controlsRef = useRef({ left: false, right: false, jump: false });

    useEffect(() => {
        if (!isPlaying) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize handling
        const resize = () => {
            if (window.innerWidth >= 768) {
                // Desktop: Fit to container
                const parent = canvas.parentElement;
                if (parent) {
                    canvas.width = parent.clientWidth;
                    canvas.height = parent.clientHeight;
                }
            } else {
                // Mobile: Full screen
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        resize();
        window.addEventListener('resize', resize);

        // Scroll to exit listener
        const handleWheel = (e: WheelEvent) => {
            // Threshold to prevent accidental exits on tiny scrolls
            if (Math.abs(e.deltaY) > 50) {
                setIsPlaying(false);
            }
        };
        window.addEventListener('wheel', handleWheel, { passive: true });

        // Game State
        const ball = { x: canvas.width / 2, y: canvas.height / 2, vx: 0, vy: 0, r: 6, color: '#FF4400' };
        const gravity = 0.6;
        const friction = 0.92; 
        const bounce = 0.5;
        let floorY = canvas.height - 100; // Raised floor for mobile controls space
        let isGrounded = false;
        
        // Double Jump Logic
        let jumpsAvailable = 0;
        const MAX_JUMPS = 2;
        let jumpPressedPreviously = false;

        interface Butterfly { x: number; y: number; vx: number; vy: number; timer: number; }
        // Single butterfly instance
        let butterfly: Butterfly = { x: -50, y: canvas.height / 2, vx: 0, vy: 0, timer: 0 };

        interface Flower { x: number; y: number; age: number; type: number; color: string; scale: number; }
        let flowers: Flower[] = [];

        interface Seed { x: number; y: number; collected: boolean; }
        let seeds: Seed[] = [];
        let seedType = 0;

        // Platforms generator
        const generatePlatforms = () => {
            const width = canvas.width;
            const height = canvas.height;
            // Elegant thin lines (h: 2)
            return [
                { x: width * 0.1, y: height * 0.75, w: width * 0.25, h: 2 },
                { x: width * 0.55, y: height * 0.65, w: width * 0.3, h: 2 },
                { x: width * 0.2, y: height * 0.5, w: width * 0.2, h: 2 },
                { x: width * 0.6, y: height * 0.35, w: width * 0.25, h: 2 },
                { x: width * 0.3, y: height * 0.25, w: width * 0.15, h: 2 },
            ];
        };
        let platforms = generatePlatforms();

        // Input
        const keys: { [key: string]: boolean } = {};
        
        const handleDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsPlaying(false);
                return;
            }
            if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
                e.preventDefault();
            }
            keys[e.code] = true;
        };
        const handleUp = (e: KeyboardEvent) => keys[e.code] = false;
        
        window.addEventListener('keydown', handleDown);
        window.addEventListener('keyup', handleUp);

        // Seed Spawning
        const spawnSeed = () => {
             return { 
                x: Math.random() * (canvas.width - 60) + 30, 
                y: Math.random() * (canvas.height * 0.6) + 50, 
                collected: false 
            };
        };

        for(let i = 0; i < 4; i++) seeds.push(spawnSeed());

        const colors = ['#FF4400', '#9B4DCA', '#0070F3', '#FFD700', '#10B981'];

        let animationFrameId: number;
        let time = 0;

        const loop = () => {
            time++;
            floorY = canvas.height - 100; // Update floor in case of resize

            // Controls (Keyboard + Touch)
            const left = keys['ArrowLeft'] || controlsRef.current.left;
            const right = keys['ArrowRight'] || controlsRef.current.right;
            const jumpInput = keys['ArrowUp'] || keys['Space'] || controlsRef.current.jump;

            // Horizontal Movement
            if (left) ball.vx -= 0.6;
            if (right) ball.vx += 0.6;

            // Jump Logic (Double Jump)
            if (jumpInput && !jumpPressedPreviously) {
                if (jumpsAvailable > 0) {
                    ball.vy = -14;
                    jumpsAvailable--;
                    playSound('jump');
                    
                    // Spawn/Reset butterfly to player location if off screen
                    if (butterfly.x < -100 || butterfly.x > canvas.width + 100) {
                        butterfly.x = ball.x;
                        butterfly.y = ball.y - 100;
                    }
                }
            }
            jumpPressedPreviously = jumpInput;
            
            ball.vy += gravity;
            ball.x += ball.vx;
            ball.y += ball.vy;
            ball.vx *= friction;

            isGrounded = false;
            let impactSurfaceY = floorY;

            // Floor collision
            if (ball.y + ball.r > floorY) {
                ball.y = floorY - ball.r;
                ball.vy *= -bounce;
                isGrounded = true;
                impactSurfaceY = floorY;
                
                if (Math.abs(ball.vy) < gravity * 3) {
                    ball.vy = 0;
                    jumpsAvailable = MAX_JUMPS; // Reset jumps on ground
                }
            }

            // Platform collision
            platforms.forEach(p => {
                // Check if within horizontal bounds
                if (ball.x > p.x - ball.r && ball.x < p.x + p.w + ball.r) {
                    // Check if falling onto the platform (from above)
                    if (ball.y + ball.r >= p.y && ball.y + ball.r <= p.y + p.h + Math.max(15, ball.vy + 5) && ball.vy >= 0) {
                        ball.y = p.y - ball.r;
                        ball.vy *= -bounce;
                        isGrounded = true;
                        impactSurfaceY = p.y;
                        if (Math.abs(ball.vy) < gravity * 3) {
                            ball.vy = 0;
                            jumpsAvailable = MAX_JUMPS; // Reset jumps on platform
                        }
                    }
                }
            });

            // Growth Trigger
            if (isGrounded && Math.abs(ball.vy) > 1 && Math.random() > 0.4) {
                 flowers.push({
                    x: ball.x,
                    y: impactSurfaceY,
                    age: 0,
                    type: Math.floor(Math.random() * 5),
                    color: colors[seedType],
                    scale: 0.5 + Math.random() * 0.5
                });
            }

            // Wall collision
            if (ball.x < ball.r) { ball.x = ball.r; ball.vx *= -0.5; }
            if (ball.x > canvas.width - ball.r) { ball.x = canvas.width - ball.r; ball.vx *= -0.5; }

            // Seed Collection
            seeds.forEach(seed => {
                if (seed.collected) return;
                const dx = ball.x - seed.x;
                const dy = ball.y - seed.y;
                if (Math.sqrt(dx*dx + dy*dy) < ball.r + 20) {
                    playSound('collect');
                    seed.collected = true;
                    seedType = (seedType + 1) % colors.length;
                    ball.color = colors[seedType];
                    setTimeout(() => {
                        seed.collected = false;
                        const newPos = spawnSeed();
                        seed.x = newPos.x;
                        seed.y = newPos.y;
                    }, 1000);
                }
            });

            // Update Single Butterfly
            const b = butterfly;
            b.timer += 0.1;
            // Follow ball loosely
            const dx = ball.x - b.x;
            const dy = (ball.y - 60) - b.y;
            b.vx += dx * 0.002;
            b.vy += dy * 0.002;
            
            // Max speed limit
            const speed = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
            if (speed > 4) { b.vx *= 0.9; b.vy *= 0.9; }

            b.x += b.vx + Math.sin(b.timer) * 0.5; // Flutter
            b.y += b.vy + Math.cos(b.timer * 1.3) * 0.5;


            // DRAWING
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Platforms (Elegant Lines)
            ctx.fillStyle = '#111';
            platforms.forEach(p => {
                ctx.fillRect(p.x, p.y, p.w, p.h);
            });

            // Ground
            ctx.beginPath();
            ctx.moveTo(0, floorY);
            ctx.lineTo(canvas.width, floorY);
            ctx.strokeStyle = 'rgba(0,0,0,1)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Flowers
            flowers = flowers.filter(f => f.age < 400);
            flowers.forEach(f => {
                f.age++;
                const opacity = f.age > 300 ? 1 - ((f.age - 300) / 100) : 1;
                const growth = Math.min(f.age, 30) / 30; 
                
                ctx.save();
                ctx.translate(f.x, f.y);
                ctx.scale(f.scale * growth, f.scale * growth);
                ctx.globalAlpha = opacity;
                ctx.strokeStyle = f.color;
                ctx.fillStyle = f.color;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';

                ctx.beginPath();
                if (f.type === 0) {
                     // Simple Stem
                     ctx.moveTo(0, 0); ctx.lineTo(0, -30);
                     ctx.stroke();
                     ctx.beginPath(); ctx.arc(0, -35, 6, 0, Math.PI * 2); ctx.fill();
                } else if (f.type === 1) {
                     // V-Shape
                     ctx.moveTo(0, 0); ctx.lineTo(-10, -25);
                     ctx.moveTo(0, 0); ctx.lineTo(10, -25);
                     ctx.stroke();
                     ctx.beginPath(); ctx.arc(-10, -25, 3, 0, Math.PI*2); ctx.arc(10, -25, 3, 0, Math.PI*2); ctx.fill();
                } else if (f.type === 2) {
                     // Curve
                     ctx.moveTo(0, 0);
                     ctx.bezierCurveTo(10, -10, -10, -20, 5, -40);
                     ctx.stroke();
                } else if (f.type === 3) {
                     // Fern-like
                     ctx.moveTo(0,0); ctx.lineTo(0, -40); ctx.stroke();
                     for(let j=0; j<5; j++) {
                         ctx.moveTo(0, -10 - j*6); ctx.lineTo(-8, -15 - j*6);
                         ctx.moveTo(0, -10 - j*6); ctx.lineTo(8, -15 - j*6);
                     }
                     ctx.stroke();
                } else if (f.type === 4) {
                     // Triple Petal
                     ctx.moveTo(0,0); ctx.lineTo(0,-20); ctx.stroke();
                     ctx.beginPath();
                     ctx.ellipse(0, -30, 5, 12, 0, 0, Math.PI*2);
                     ctx.ellipse(-8, -26, 5, 10, -0.5, 0, Math.PI*2);
                     ctx.ellipse(8, -26, 5, 10, 0.5, 0, Math.PI*2);
                     ctx.fill();
                }
                ctx.restore();
            });

            // Seeds (With Halo)
            seeds.forEach(seed => {
                if (seed.collected) return;
                const floatY = seed.y + Math.sin(time / 40) * 5;
                ctx.save();
                ctx.translate(seed.x, floatY);
                ctx.rotate(time / 100);
                
                // Outer Halo (Subtle)
                const haloSize = 20 + Math.sin(time / 15) * 5;
                ctx.beginPath();
                ctx.arc(0, 0, haloSize, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.fill();
                
                // Seed Shape
                ctx.beginPath();
                ctx.moveTo(0, -6);
                ctx.bezierCurveTo(4, -4, 4, 4, 0, 6);
                ctx.bezierCurveTo(-4, 4, -4, -4, 0, -6);
                ctx.fillStyle = '#111';
                ctx.fill();

                ctx.restore();
            });

             // Butterfly (Colored with Dot)
             ctx.save();
             ctx.translate(b.x, b.y);
             
             // Simple bobbing and rotating
             ctx.rotate(Math.sin(b.timer * 0.2) * 0.2); 
             
             // Flapping
             const flap = Math.abs(Math.cos(b.timer * 0.5));
             
             // Wings - Amber/Yellow
             ctx.fillStyle = '#FFB300';
             ctx.beginPath();
             // Left Wing
             ctx.ellipse(-6, -4, 8, 12 * flap, -0.3, 0, Math.PI * 2);
             // Right Wing
             ctx.ellipse(6, -4, 8, 12 * flap, 0.3, 0, Math.PI * 2);
             ctx.fill();
             
             // Wing Dot (Signature)
             ctx.fillStyle = '#111';
             ctx.beginPath();
             ctx.arc(-6, -4, 2, 0, Math.PI * 2); // Left
             ctx.arc(6, -4, 2, 0, Math.PI * 2);  // Right
             ctx.fill();

             // Body
             ctx.beginPath();
             ctx.ellipse(0, 0, 1.5, 6, 0, 0, Math.PI * 2);
             ctx.fill();
             
             // Antennae
             ctx.lineWidth = 0.5;
             ctx.strokeStyle = '#111';
             ctx.beginPath();
             ctx.moveTo(0, -4); ctx.lineTo(-3, -8);
             ctx.moveTo(0, -4); ctx.lineTo(3, -8);
             ctx.stroke();
 
             ctx.restore();

            // Ball (Minimal)
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
            ctx.fillStyle = ball.color;
            ctx.fill();
            
            // No highlight, just flat color

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('keydown', handleDown);
            window.removeEventListener('keyup', handleUp);
            window.removeEventListener('wheel', handleWheel);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPlaying]);

    // Touch Handlers
    const handleTouchStart = (key: 'left' | 'right' | 'jump') => {
        controlsRef.current[key] = true;
    };
    const handleTouchEnd = (key: 'left' | 'right' | 'jump') => {
        controlsRef.current[key] = false;
    };

    if (!isPlaying) {
        return (
            <div className="w-full relative h-[400px] border border-black/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-colors">
                {/* Removed white bg, using page default or transparent to blend */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>
                <h3 className="text-2xl font-light mb-2 relative z-10">Prototype 002: The Garden</h3>
                <p className="text-sm text-black/60 max-w-sm mb-8 relative z-10">
                    A generative platformer. Collect seeds, grow procedural flora, and find the butterfly.
                </p>
                <button 
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 bg-[#FF4400] text-white px-8 py-3 rounded-full font-mono uppercase tracking-widest text-xs hover:bg-black transition-colors flex items-center gap-2"
                >
                    Enter Garden <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 md:relative md:w-full md:h-[600px] md:z-0 touch-none md:border md:border-black/10 transition-all bg-[#F6F6F4] md:bg-transparent">
            {/* Exit Button - Enhanced Visibility */}
            <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-6 right-6 z-[60] flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full hover:bg-[#FF4400] hover:text-white transition-colors border border-black/10 shadow-lg group"
            >
                <span className="text-xs font-mono uppercase tracking-widest font-bold hidden md:block">Exit Garden</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>

            {/* Hint for Desktop */}
            <div className="absolute top-6 left-6 z-10 hidden md:block">
                <span className="text-xs font-mono text-black/40 uppercase tracking-widest bg-white/50 px-2 py-1 rounded backdrop-blur-sm">
                    Scroll to Exit • Arrows to Move • Space for Double Jump
                </span>
            </div>

            <canvas ref={canvasRef} className="block w-full h-full" />

            {/* Mobile Controls Overlay */}
            <div className="absolute bottom-8 left-0 w-full px-6 flex justify-between items-end md:hidden">
                {/* Movement */}
                <div className="flex gap-4">
                    <button 
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-black/10 flex items-center justify-center active:bg-black/10 transition-colors"
                        onTouchStart={(e) => { e.preventDefault(); handleTouchStart('left'); }}
                        onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd('left'); }}
                    >
                        <ArrowLeft className="w-6 h-6 text-black/60" />
                    </button>
                    <button 
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-black/10 flex items-center justify-center active:bg-black/10 transition-colors"
                        onTouchStart={(e) => { e.preventDefault(); handleTouchStart('right'); }}
                        onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd('right'); }}
                    >
                        <ArrowRight className="w-6 h-6 text-black/60" />
                    </button>
                </div>
                
                {/* Jump */}
                <button 
                    className="w-20 h-20 bg-[#FF4400]/80 backdrop-blur-md rounded-full border border-black/10 flex items-center justify-center active:scale-95 transition-transform"
                    onTouchStart={(e) => { e.preventDefault(); handleTouchStart('jump'); }}
                    onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd('jump'); }}
                >
                    <ArrowUp className="w-8 h-8 text-white" />
                </button>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const PoeticMachine: React.FC = () => {
    const [activeTab, setActiveTab] = useState<0 | 1>(0);

    return (
    <section className="py-24 px-6 md:px-12 bg-[#F0F0EE] border-b border-black/5 relative overflow-hidden transition-colors duration-1000">
        {/* Background Grid Lines for Rams aesthetic */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ 
                 backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-12 text-center flex flex-col items-center">
                {/* Prototype Switcher */}
                <div className="flex items-center gap-1 p-1 bg-black/5 rounded-full mb-6">
                    <button 
                        onClick={() => setActiveTab(0)}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${activeTab === 0 ? 'bg-white shadow-sm text-black' : 'text-black/40 hover:text-black'}`}
                    >
                        Prototype 001
                    </button>
                    <button 
                        onClick={() => setActiveTab(1)}
                        className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${activeTab === 1 ? 'bg-white shadow-sm text-black' : 'text-black/40 hover:text-black'}`}
                    >
                        Prototype 002
                    </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-light">
                    {activeTab === 0 ? 'The Iconoclast' : 'The Garden'}
                </h2>
                <p className="text-sm text-black/50 mt-2 font-mono">
                    {activeTab === 0 ? 'History of Design Disruption' : 'Ludic Growth System'}
                </p>
            </div>

            {activeTab === 0 ? <TheIconoclast /> : <TheGarden onExit={() => setActiveTab(0)} />}
        </div>
    </section>
  );
};

export default PoeticMachine;