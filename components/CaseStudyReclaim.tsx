import React, { useState } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';
import ImageModal from './ImageModal';

interface CaseStudyProps {
    onNavigate: (page: Page) => void;
}

const CaseStudyReclaim: React.FC<CaseStudyProps> = ({ onNavigate }) => {
    const [modalImageUrl, setModalImageUrl] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setModalImageUrl(imageUrl);
    };

    const closeModal = () => {
        setModalImageUrl(null);
    };

  return (
    <div className="min-h-screen bg-white">
        <SEO 
            title="Reclaim Protocol Workshop Case Study"
            description="Designing Intuitive Learning Experiences for Reclaim Protocol: A case study on simplifying decentralized identity concepts through role-play and structured design thinking."
            keywords={['Reclaim Protocol', 'Web3 Workshop', 'Design Thinking', 'Prover Entity', 'Zero Knowledge Proof Education', 'UX Case Study']}
            schema={{
                "@type": "CreativeWork",
                "name": "Reclaim Protocol Workshop Design",
                "creator": "Poetics Studio",
                "about": "Educational Workshop for Decentralized Identity",
                "genre": "Case Study"
            }}
        />
        
        {/* Navigation Back */}
        <div className="fixed top-24 left-6 z-30">
            <button 
                onClick={() => onNavigate(Page.CONSULTANCY)}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-[#FF4400] transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5 shadow-sm"
            >
                <ArrowLeft className="w-3 h-3" /> Back to Consultancy
            </button>
        </div>

        {/* ======================== HERO SECTION ======================== */}
        <div className="relative w-full min-h-[70vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 border-b border-black/5 bg-[#F6F6F4]">
            <div className="max-w-5xl mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-12">
                     <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Education / Workshop Design</span>
                        <h1 className="text-4xl md:text-7xl font-light tracking-tighter leading-[1.1] mb-6">
                            Proving the <br/> Invisible.
                        </h1>
                     </div>
                     <div className="font-mono text-xs text-black/50 text-right uppercase tracking-widest">
                        Client: Reclaim Protocol<br/>
                        Context: Hackathon 2024
                     </div>
                </div>
                
                <p className="text-xl md:text-2xl font-light text-black/70 max-w-3xl leading-relaxed">
                    Translating the complex cryptography of "Zero Knowledge Proofs" into a tangible, paper-based role-playing game for developers.
                </p>
            </div>
        </div>
        {/* ============================================================== */}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-24">
            
            {/* The Challenge */}
            <div className="mb-24">
                 <h2 className="text-3xl font-light mb-8">The Challenge</h2>
                 {/* EDIT TEXT */}
                 <p className="text-lg font-light leading-relaxed text-black/80 mb-6">
                    For developers new to the space, understanding how selective data disclosure works within a protocol like Reclaim—where a user proves a fact without revealing the underlying sensitive data—can be challenging.
                 </p>
                 <p className="text-lg font-light leading-relaxed text-black/80">
                    Our role as designers and workshop facilitators was critical: to make the learning process engaging, accessible, and creative. We needed to demystify the roles of <strong>The Prover</strong> (Claimant) and <strong>The Entity</strong> (Service Provider).
                 </p>
            </div>

            {/* The Solution */}
            <div className="mb-24">
                <h2 className="text-3xl font-light mb-12">The Design Solution</h2>
                <p className="text-lg font-light leading-relaxed text-black/80 mb-12">
                    We developed a designer-led activity focused on creative scenario construction, utilizing three primary analog materials: Role Cards, Data Cheat Sheets, and Activity Worksheets.
                </p>

                {/* 1. Role Cards */}
                <div className="bg-[#FAFAFA] border border-black/5 p-8 md:p-12 mb-12 rounded-lg">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-6">01. Role Cards</h3>
                    <p className="mb-8 text-black/70">
                        To encourage unconventional thinking, we created cards that spanned from the mundane (Retail Store) to the fantastic (Time Traveler). Participants selected two cards to force imaginative scenarios.
                    </p>
                    
                    {/* Visual representation of cards (CSS Cards) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-center">
                        <div className="aspect-[3/4] border border-black flex items-center justify-center p-4 bg-white shadow-md rotate-[-2deg]">
                            RETAIL STORE
                        </div>
                        <div className="aspect-[3/4] border border-black flex items-center justify-center p-4 bg-white shadow-md rotate-[1deg]">
                            TIME TRAVELER
                        </div>
                        <div className="aspect-[3/4] border border-black flex items-center justify-center p-4 bg-white shadow-md rotate-[-1deg]">
                            UFO ENTHUSIAST
                        </div>
                        <div className="aspect-[3/4] border border-black flex items-center justify-center p-4 bg-white shadow-md rotate-[3deg]">
                            JOB SEEKER
                        </div>
                    </div>
                </div>

                {/* 2. Cheat Sheets */}
                <div className="bg-[#FAFAFA] border border-black/5 p-8 md:p-12 mb-12 rounded-lg">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-6">02. Data Cheat Sheets</h3>
                    <p className="mb-8 text-black/70">
                         We provided "Digital Data Cheat Sheets" listing examples of data—financial, legal, and personal—that could support a claim, helping participants envision the impact of verification.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="border-l-2 border-[#FF4400] pl-4">
                            <h4 className="font-bold mb-2">Individual Data</h4>
                            <p className="text-black/60">Social media profiles, email addresses, DNA profiles, browsing history.</p>
                        </div>
                        <div className="border-l-2 border-[#FF4400] pl-4">
                            <h4 className="font-bold mb-2">Financial Data</h4>
                            <p className="text-black/60">Credit score, Bank balance, Investment Portfolio, Tax returns.</p>
                        </div>
                    </div>
                </div>

                {/* 3. Worksheets */}
                <div className="bg-[#FAFAFA] border border-black/5 p-8 md:p-12 mb-12 rounded-lg">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-6">03. The Worksheet</h3>
                    <p className="mb-8 text-black/70">
                        A structured canvas guiding developers to map: Needs → Value → Claim → Hidden Data.
                    </p>
                    
                    {/* ======================== WORKSHEET IMAGE  ======================== */}
                    <div className="bg-white w-full relative group cursor-pointer border-2 border-dashed border-black/10 p-4" onClick={() => openModal('/images/reclaim/worksheet_blank.png')}>
                        <img 
                            src="/images/reclaim/worksheet_blank.png"
                            alt="Activity Worksheet Blank" 
                            className="w-full h-full object-contain"
                        />
                        <a href="/images/reclaim/worksheet_blank.png" download onClick={(e) => e.stopPropagation()} className="absolute bottom-4 right-4 bg-black text-white font-mono text-xs px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Download className="w-3 h-3" />
                            Download Worksheet
                        </a>
                    </div>
                    {/* ========================================================================= */}
                </div>
            </div>

            {/* Gallery of Artifacts */}
            <div className="mb-24 border-t border-black/10 pt-12">
                <h2 className="text-2xl font-light mb-8">Workshop Artifacts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {/* Artifact 1 */}
                     <div className="space-y-2">
                        <div className="aspect-[4/3] bg-white w-full border border-black/10 relative cursor-pointer" onClick={() => openModal('/images/reclaim/worksheet_filled.webp')}>
                             <img src="/images/reclaim/worksheet_filled.webp" alt="Filled Worksheet Example" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-mono text-xs text-black/50">Scenario: Non-Profit & Donor Relationship</p>
                     </div>
                     {/* Artifact 2 */}
                     <div className="space-y-2">
                        <div className="aspect-[4/3] bg-white w-full border border-black/10 relative cursor-pointer" onClick={() => openModal('/images/reclaim/worksheet_filled_2.jpg')}>
                             <img src="/images/reclaim/worksheet_filled_2.jpg" alt="Filled Worksheet Example" className="w-full h-full object-cover" />
                        </div>
                         <p className="font-mono text-xs text-black/50">Scenario: Investor & Supernatural Research Institute</p>
                     </div>
                </div>
            </div>

            {/* Outcomes */}
            <div className="bg-[#111] text-[#F6F6F4] p-8 md:p-16 rounded-lg">
                <h2 className="text-2xl font-light mb-6">Impact</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                    The activity set an energetic tone for the hackathon. By immediately diving into scenario creation supported by structured materials, we helped participants <strong>quickly grasp how Reclaim works</strong>.
                </p>
                <p className="text-white/80 leading-relaxed">
                    Most importantly, the workshop acted like a <strong>conceptual scaffolding system</strong>. Instead of forcing developers to build complex use-cases from scratch, we provided intuitive building blocks that allowed them to rapidly assemble and test complex ideas in a low-stakes environment.
                </p>
            </div>

        </div>

        {/* Footer Navigation */}
        <div className="bg-[#F6F6F4] py-24 text-center border-t border-black/5">
            <h2 className="text-3xl font-light mb-8">Have a complex concept to explain?</h2>
            <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="inline-block border-b border-black pb-1 text-xl hover:text-[#FF4400] hover:border-[#FF4400] transition-colors"
            >
                Let's simplify it.
            </button>
        </div>

        <ImageModal isOpen={!!modalImageUrl} onClose={closeModal} imageUrl={modalImageUrl || ''} />
    </div>
  );
};

export default CaseStudyReclaim;