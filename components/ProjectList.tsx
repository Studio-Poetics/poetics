
import React from 'react';
import { Project, Page } from '../types';

interface ProjectListProps {
  onNavigate?: (page: Page) => void;
}

// ==================================================================================
// [ DATA SOURCE ]
// MANUALLY EDIT PROJECTS HERE
// ==================================================================================
// instructions:
// 1. 'id': Unique string (e.g., '01', '02').
// 2. 'title': Project Name.
// 3. 'category': Subtitle / Discipline.
// 4. 'year': Year of completion.
// 5. 'description': Short summary appearing on the card.
// 6. 'imageUrl': Link to the project thumbnail. 
// 7. 'targetPage': The internal page enum (e.g., Page.CASE_STUDY_IBW). 
//    If linking externally or nowhere, you can remove this or handle differently.
// ==================================================================================

const projects: Project[] = [
  {
    id: '01',
    title: 'India Blockchain Week',
    category: 'Branding & Identity',
    year: '2025',
    description: 'A vibrant collision of heritage and future. Defining the visual language of India\'s web3 revolution with generative mandalas.',
    imageUrl: '/images/ibw/Hero.webp',
    targetPage: Page.CASE_STUDY_IBW
  },
  {
    id: '02',
    title: 'Proving the Invisible',
    category: 'Workshop Design',
    year: '2024',
    description: 'Designing intuitive learning experiences for Reclaim Protocol. A conceptual scaffolding system for ZK Proofs.',
    imageUrl: '/images/reclaim/hero_reclaim.webp',
    targetPage: Page.CASE_STUDY_RECLAIM
  },
  {
    id: '03',
    title: 'Glasscape Collection',
    category: 'Product Design',
    year: '2024',
    description: 'Holographic displays for the modern sanctuary. Building with the immaterial.',
    imageUrl: '/images/glasscape/Glasscape-1.png',
    targetPage: Page.GLASSCAPE
  },
  {
    id: '04',
    title: 'India\'s Journey in Space',
    category: 'Anamorphic 3D Film',
    year: '2024',
    description: 'A 5-minute 3D anamorphic film for Science City Kolkata showcasing the history of the Indian Space Program.',
    imageUrl: '/images/space/home-space.webp',
    targetPage: Page.CASE_STUDY_SPACE
  },
  {
    id: '05',
    title: 'Wordsprint',
    category: 'Android Game Design',
    year: '2023',
    description: 'An Android vocabulary game where players practice language by unscrambling words and learning their meanings through interactive gameplay.',
    imageUrl: '/images/wordsprint/wordsprint-game.webp',
    targetPage: Page.CASE_STUDY_WORDSPRINT
  },
  {
    id: '06',
    title: 'Micro-Gold Investment Platform',
    category: 'FinTech UX & Behavioral Design',
    year: '2023',
    description: "Designing culturally-sensitive saving habits for India's everyday investors. Transforming micro-investments into trust and long-term security.",
    imageUrl: '/images/micro-savings/MICRO-SAVINGS.png',
    targetPage: Page.CASE_STUDY_MICRO_GOLD
  }
];

const ProjectList: React.FC<ProjectListProps> = ({ onNavigate }) => {
  
  const handleProjectClick = (project: Project) => {
    if (project.targetPage && onNavigate) {
      onNavigate(project.targetPage);
    }
  };

  return (
    <section className="px-6 md:px-12 py-24 border-b border-black/5">
        {/* ================================================================================== */}
        {/* [ GRID LAYOUT ] */}
        {/* ================================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Header Section */}
            <div className="md:col-span-12 mb-12 flex justify-between items-end border-b border-black/10 pb-4">
                <h3 className="text-xl font-light">Selected Works</h3>
                <span className="font-mono text-xs">[ Index: 001 - 006 ]</span>
            </div>

            {/* Projects Loop */}
            {projects.map((project, index) => {
                // More balanced masonry layout
                // Pattern: 5, 4, 3, 5, 4, 3 (creates visual rhythm with variation)
                let colSpan;
                const position = index % 6;

                if (position === 0 || position === 3) {
                    colSpan = 'md:col-span-5'; // Larger
                } else if (position === 1 || position === 4) {
                    colSpan = 'md:col-span-4'; // Medium
                } else {
                    colSpan = 'md:col-span-3'; // Smaller
                }

                return (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${colSpan}`}
                  onClick={() => handleProjectClick(project)}
                >
                    {/* Image Container */}
                    <div className="overflow-hidden bg-[#E5E5E5] aspect-[3/4] mb-4 relative">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#FF4400] mix-blend-multiply opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                        
                        {/* Hover Overlay Hint */}
                        {project.targetPage && (
                           <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <span className="bg-white text-black text-xs font-mono uppercase px-3 py-1 tracking-widest">
                                View Project
                              </span>
                           </div>
                        )}
                    </div>
                    
                    {/* Text Container */}
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-baseline">
                            <h4 className="text-lg font-medium group-hover:text-[#FF4400] transition-colors">{project.title}</h4>
                            <span className="font-mono text-xs text-black/50">{project.year}</span>
                        </div>
                        <span className="font-mono text-xs uppercase tracking-wider text-black/40">{project.category}</span>
                        <p className="text-sm text-black/70 mt-2 max-w-xs leading-relaxed">{project.description}</p>
                    </div>
                </div>
                );
            })}

        </div>
    </section>
  );
};

export default ProjectList;
