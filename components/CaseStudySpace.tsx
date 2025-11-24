
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';

interface CaseStudyProps {
    onNavigate: (page: Page) => void;
}

const CaseStudySpace: React.FC<CaseStudyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F6F6F4]">
        <SEO 
            title="India's Journey in Space - Anamorphic 3D"
            description="A 5-minute anamorphic 3D film for Science City Kolkata showcasing the history of the Indian Space Program. Created in Blender."
            keywords={['Anamorphic Illusion', '3D Animation', 'Science City Kolkata', 'Blender 3D', 'Space Visualization', 'ISRO History']}
            schema={{
                "@type": "VisualArtwork",
                "name": "India's Journey in Space",
                "creator": "Poetics Studio",
                "artform": "3D Animation / Anamorphic Projection",
                "commissionedBy": "Science City Kolkata"
            }}
        />
        
        {/* Navigation Back */}
        <div className="fixed top-24 left-6 z-30">
            <button 
                onClick={() => onNavigate(Page.CONSULTANCY)}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-[#FF4400] transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
                <ArrowLeft className="w-3 h-3" /> Back to Consultancy
            </button>
        </div>

        {/* ======================== HERO SECTION ======================== */}
        <div className="relative w-full h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24 border-b border-white/10">
            {/* EDIT HERO IMAGE */}
            <div className="absolute inset-0 z-0">
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                 <img 
                    src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                    alt="Space Anamorphic Render" 
                    className="w-full h-full object-cover opacity-60"
                 />
            </div>

            <div className="relative z-20 max-w-4xl">
                 <div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] px-3 py-1 border border-[#FF4400]/30 rounded-full bg-[#FF4400]/10">
                        Commission
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                        Client: Science City Kolkata
                    </span>
                 </div>
                 {/* EDIT TITLE */}
                 <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-8">
                    India's Journey <br/> in Space
                 </h1>
                 {/* EDIT SUMMARY */}
                 <p className="text-xl font-light text-white/70 max-w-2xl">
                    A 5-minute anamorphic 3D film visualizing the major milestones of the Indian Space Program, from the first sounding rocket to Chandrayaan.
                 </p>
            </div>
        </div>
        {/* ============================================================== */}

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                <div className="md:col-span-4">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8 border-b border-white/10 pb-2">Tech Stack</h3>
                    <ul className="space-y-2 text-sm font-mono text-white/70">
                        {/* EDIT TECH STACK */}
                        <li>Blender 4.0 (Cycles)</li>
                        <li>Geometry Nodes</li>
                        <li>After Effects</li>
                        <li>Anamorphic Projection Mapping</li>
                    </ul>
                </div>
                <div className="md:col-span-8">
                     <h3 className="text-3xl font-light mb-6">The Challenge: Breaking the Screen</h3>
                     {/* EDIT TEXT */}
                     <p className="text-lg font-light leading-relaxed text-white/80 mb-8">
                        Science City Kolkata commissioned us to create a centerpiece experience for their new Space Auditorium. The brief was to showcase the history of ISRO (Indian Space Research Organisation) not as a documentary, but as a visceral, visual spectacle.
                     </p>
                     <p className="text-lg font-light leading-relaxed text-white/80">
                         We utilized <strong>anamorphic illusion techniques</strong> (forced perspective) to create a sense of depth on a curved L-shaped screen. The result is a film where rockets appear to fly out of the frame and satellites float in the physical space of the auditorium.
                     </p>
                </div>
            </div>

            {/* ======================== STILLS GALLERY ======================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {/* Still 1 */}
                <div className="aspect-video bg-[#111] border border-white/10 relative overflow-hidden group">
                     {/* EDIT IMAGE */}
                     <img src="https://picsum.photos/800/450?grayscale" alt="Rocket Launch" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute bottom-4 left-4 font-mono text-xs text-white/50">Seq 01: The First Launch</div>
                </div>
                {/* Still 2 */}
                <div className="aspect-video bg-[#111] border border-white/10 relative overflow-hidden group">
                     {/* EDIT IMAGE */}
                     <img src="https://picsum.photos/800/451?grayscale" alt="Mars Orbiter" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute bottom-4 left-4 font-mono text-xs text-white/50">Seq 03: Mangalyaan (MOM)</div>
                </div>
                {/* Still 3 (Wide) */}
                <div className="aspect-video bg-[#111] border border-white/10 relative overflow-hidden group md:col-span-2">
                     {/* EDIT IMAGE */}
                     <img src="https://picsum.photos/1600/900?grayscale" alt="Chandrayaan Landing" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                     <div className="absolute bottom-4 left-4 font-mono text-xs text-white/50">Seq 05: Chandrayaan Landing</div>
                </div>
            </div>
            {/* ================================================================ */}

            {/* Workflow Section */}
            <div className="border-t border-white/10 pt-24">
                <h2 className="text-3xl font-light mb-12">In-House Production</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="text-xl font-light mb-4">Script & Storyboard</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We condensed 50 years of history into a tight 5-minute narrative, focusing on emotional beats and visual grandeur rather than dense statistics.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-light mb-4">Asset Creation</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Every satellite, rover, and launch vehicle was modeled in-house using Blender, referencing ISRO technical documents for accuracy while stylizing materials for the anamorphic effect.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-light mb-4">Anamorphic Rig</h4>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We built a virtual camera rig that mimicked the exact viewing angle of the auditorium's "sweet spot" to ensure the 3D illusion held perfectly for the audience.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        {/* Footer Navigation */}
        <div className="bg-[#111] py-24 text-center border-t border-white/10">
            <h2 className="text-3xl font-light mb-8 text-white">Visit the Auditorium.</h2>
            <p className="text-white/40 font-mono text-xs mb-8">Science City, JBS Haldane Ave, Kolkata</p>
            <button 
                onClick={() => onNavigate(Page.CONTACT)}
                className="inline-block border-b border-white pb-1 text-xl text-white hover:text-[#FF4400] hover:border-[#FF4400] transition-colors"
            >
                Commission a Film
            </button>
        </div>
    </div>
  );
};

export default CaseStudySpace;
