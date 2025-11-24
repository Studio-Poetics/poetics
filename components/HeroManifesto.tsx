import React from 'react';
import SEO from './SEO';

const HeroManifesto: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 border-b border-black/5">
      <SEO 
        title="Poetics Studio"
        description="A sense-making studio practice exploring the intersection of technology, design, and art. Operating from Prayagraj and Goa."
        keywords={['Design Studio India', 'Strategic UX', 'Generative Art', 'Poetic Technology', 'Interaction Design', 'Prayagraj Design', 'Goa Design Studio']}
        schema={{
          "@type": "DesignAgency",
          "name": "Poetics Studio",
          "slogan": "The soul of making is found in the silence between.",
          "knowsAbout": ["Strategic UX", "Game Design", "Generative Art", "Blockchain Branding"]
        }}
      />
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Metadata */}
        <div className="md:col-span-2 hidden md:block font-mono text-xs text-black/40 leading-relaxed sticky top-32 h-fit">
          <p>EST. 2024</p>
          <p>PRAYAGRAJ / GOA / CLOUD</p>
          <br/>
          <p>PRINCIPLES:</p>
          <p>01. EMPTINESS</p>
          <p>02. RIGOR</p>
          <p>03. PLAY</p>
        </div>

        {/* Main Content: Manifesto */}
        <div className="md:col-span-10 flex flex-col gap-12">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] text-[#111]">
              The soul of making <br/>
              is found in the <br/>
              <span className="font-serif italic text-black/60">silence</span> between.
            </h1>

            <div className="max-w-2xl mt-8">
              <p className="text-lg md:text-xl font-light leading-relaxed text-black/80">
                We are a sense-making practice. We believe technology is a material—like wood, clay, or light. It has grain. It resists. It yields. 
                Our work creates conditions for "Kuu" (Emptiness)—spaces where information isn't just transmitted, but <span className="underline decoration-[#FF4400] decoration-1 underline-offset-4">felt</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t border-black/10 pt-8">
               <div className="border-l border-black/10 pl-4">
                  <span className="block text-xs font-mono uppercase text-black/40 mb-2">Methodology</span>
                  <span className="text-sm">Subtractive</span>
               </div>
               <div className="border-l border-black/10 pl-4">
                  <span className="block text-xs font-mono uppercase text-black/40 mb-2">Medium</span>
                  <span className="text-sm">Digital/Haptic/Framework</span>
               </div>
               <div className="border-l border-black/10 pl-4">
                  <span className="block text-xs font-mono uppercase text-black/40 mb-2">Output</span>
                  <span className="text-sm">Systems</span>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroManifesto;