
import React from 'react';
import { Page } from '../types';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';

interface ConsultancyProps {
    onNavigate?: (page: Page) => void;
}

const Consultancy: React.FC<ConsultancyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#F6F6F4]">
        <SEO 
            title="Strategic UX Consultancy"
            description="We help organizations navigate ambiguity through rigorous product thinking, UX audit, and systemic design. Based in India."
            keywords={['UX Strategy', 'Product Design Consultancy', 'Design Systems', 'UX Audit', 'Fintech Design', 'HMI Design']}
            schema={{
                "@type": "ProfessionalService",
                "name": "Poetics Studio Consultancy",
                "serviceType": ["UX Strategy", "Design Systems", "Product Audits"],
                "areaServed": "Global",
                "description": "Clarity in Complexity. We do not just design interfaces; we architect understanding."
            }}
        />
        <div className="max-w-5xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Strategic UX Consultancy</span>
            
            {/* ======================== EDITABLE HEADLINE ======================== */}
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-16">
                Clarity in <br/>
                Complexity.
            </h1>
            {/* =================================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* ======================== EDITABLE MANIFESTO ======================== */}
                <div className="md:col-span-8 md:col-start-5 text-lg md:text-xl font-light leading-relaxed space-y-8 text-black/80">
                    <p>
                        We do not just design interfaces; we architect understanding. Our consultancy practice operates at the intersection of business strategy and human behavior. We help organizations navigate ambiguity by applying rigor to their product thinking.
                    </p>
                    <p>
                        In a world saturated with noise, we offer the luxury of focus. We strip away the decorative to reveal the essential function of your digital ecosystem.
                    </p>
                </div>
                {/* ==================================================================== */}
            </div>

            {/* ======================== SERVICE CARDS ======================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-t border-black/10 pt-16">
                <div className="p-8 bg-white border border-black/5 hover:border-[#FF4400]/30 transition-colors">
                    <h3 className="font-serif italic text-2xl mb-4 text-black/70">Audit</h3>
                    <p className="text-sm leading-relaxed text-black/60">
                        Rigorous deconstruction of existing systems. We identify friction, cognitive load, and semantic gaps in your current user experience.
                    </p>
                </div>
                <div className="p-8 bg-white border border-black/5 hover:border-[#FF4400]/30 transition-colors">
                    <h3 className="font-serif italic text-2xl mb-4 text-black/70">Strategy</h3>
                    <p className="text-sm leading-relaxed text-black/60">
                        Defining the "North Star". We align product vision with user needs through participatory design workshops and foresight research.
                    </p>
                </div>
                <div className="p-8 bg-white border border-black/5 hover:border-[#FF4400]/30 transition-colors">
                    <h3 className="font-serif italic text-2xl mb-4 text-black/70">System</h3>
                    <p className="text-sm leading-relaxed text-black/60">
                        Creating scalable design languages. We build atomic systems that ensure consistency, accessibility, and poetic interactions.
                    </p>
                </div>
            </div>
            {/* =============================================================== */}

            <div className="mt-32">
                <div className="flex items-end justify-between border-b border-black/10 pb-4 mb-12">
                    <h2 className="text-2xl font-light">Selected Engagements</h2>
                    <span className="font-mono text-xs text-black/40 hidden md:block">Recent Work</span>
                </div>

                <div className="space-y-4">
                    {/* ======================== SELECTED ENGAGEMENTS LIST ======================== */}
                    
                    {/* Item 1: IBW */}
                    <div 
                        onClick={() => onNavigate?.(Page.CASE_STUDY_IBW)}
                        className="group relative block w-full text-left cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-[#FF4400] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -z-10 -mx-6 scale-y-110" />
                        <div className="py-8 md:py-12 border-b border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-1 font-mono text-xs text-[#FF4400]">01</div>
                            <div className="md:col-span-5">
                                <h3 className="text-3xl md:text-4xl font-light group-hover:translate-x-4 transition-transform duration-500">
                                    India Blockchain Week
                                </h3>
                            </div>
                            <div className="md:col-span-4">
                                <p className="text-sm text-black/60 line-clamp-2">
                                    Reimagining web3 identity through the lens of Indian heritage. Mandala systems, solar gradients, and vibrant motion.
                                </p>
                            </div>
                            <div className="md:col-span-2 text-right">
                                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest group-hover:text-[#FF4400] transition-colors">
                                    Read Case Study <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Reclaim */}
                    <div 
                        onClick={() => onNavigate?.(Page.CASE_STUDY_RECLAIM)}
                        className="group relative block w-full text-left cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-[#FF4400] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -z-10 -mx-6 scale-y-110" />
                        <div className="py-8 md:py-12 border-b border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-1 font-mono text-xs text-[#FF4400]">02</div>
                            <div className="md:col-span-5">
                                <h3 className="text-3xl md:text-4xl font-light group-hover:translate-x-4 transition-transform duration-500">
                                    Proving the Invisible
                                </h3>
                            </div>
                            <div className="md:col-span-4">
                                <p className="text-sm text-black/60 line-clamp-2">
                                    Demystifying Zero Knowledge Proofs. A workshop design for Reclaim Protocol using analog role-play as conceptual scaffolding.
                                </p>
                            </div>
                            <div className="md:col-span-2 text-right">
                                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest group-hover:text-[#FF4400] transition-colors">
                                    Read Case Study <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Science City */}
                    <div 
                        onClick={() => onNavigate?.(Page.CASE_STUDY_SPACE)}
                        className="group relative block w-full text-left cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-[#FF4400] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -z-10 -mx-6 scale-y-110" />
                        <div className="py-8 md:py-12 border-b border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-1 font-mono text-xs text-[#FF4400]">03</div>
                            <div className="md:col-span-5">
                                <h3 className="text-3xl md:text-4xl font-light group-hover:translate-x-4 transition-transform duration-500">
                                    India's Journey in Space
                                </h3>
                            </div>
                            <div className="md:col-span-4">
                                <p className="text-sm text-black/60 line-clamp-2">
                                    A 5-minute anamorphic 3D film for Science City Kolkata visualizing ISRO's history. Created in Blender.
                                </p>
                            </div>
                            <div className="md:col-span-2 text-right">
                                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest group-hover:text-[#FF4400] transition-colors">
                                    Read Case Study <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Item 4: NDA Project */}
                    <div className="py-8 border-b border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
                        <div className="md:col-span-1 font-mono text-xs text-black/40">04</div>
                        <div className="md:col-span-5">
                            <h3 className="text-2xl font-light">Custom Hardware Development</h3>
                        </div>
                        <div className="md:col-span-4">
                            <p className="text-sm text-black/60">
                                Custom Game hardware development for an indie-game artist.
                            </p>
                        </div>
                         <div className="md:col-span-2 text-right">
                             <span className="text-xs font-mono uppercase text-black/30">NDA</span>
                         </div>
                    </div>

                    {/* Item 5: Micro-Gold Investment Platform */}
                    <div
                        onClick={() => onNavigate?.(Page.CASE_STUDY_MICRO_GOLD)}
                        className="group relative block w-full text-left cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-[#FF4400] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 -z-10 -mx-6 scale-y-110" />
                        <div className="py-8 md:py-12 border-b border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-1 font-mono text-xs text-[#FF4400]">05</div>
                            <div className="md:col-span-5">
                                <h3 className="text-3xl md:text-4xl font-light group-hover:translate-x-4 transition-transform duration-500">
                                    Micro-Gold Investment Platform
                                </h3>
                            </div>
                            <div className="md:col-span-4">
                                <p className="text-sm text-black/60 line-clamp-2">
                                    Designing culturally-sensitive saving habits for India's everyday investors. Transforming micro-investments into trust and long-term security.
                                </p>
                            </div>
                            <div className="md:col-span-2 text-right">
                                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest group-hover:text-[#FF4400] transition-colors">
                                    Read Case Study <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* =============================================================== */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Consultancy;
