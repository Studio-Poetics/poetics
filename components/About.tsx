import React, { useState } from 'react';
import { Award, TeamMember } from '../types';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from './SEO';

const pranshuAwards: Award[] = [
    { id: '1', title: 'Red Dot Design Award', year: '2020', organization: 'Red Dot' },
    { id: '2', title: 'Good Design Award', year: '2020', organization: 'Good Design' },
    { id: '3', title: 'German Design Award', year: '2021', organization: 'German Design Council' },
    { id: '4', title: 'London International Creative Competition', year: '2020', organization: 'LICC' },
    { id: '5', title: 'IXDA Engaging Project', year: '2021', organization: 'Interaction Design Association' },
    { id: '6', title: 'The Architecture MasterPrize', year: '2020', organization: 'Architecture MasterPrize' },
    { id: '7', title: 'Creative Communications Award', year: '2020', organization: 'Creative Communications' },
    { id: '8', title: 'FICCI-BAF Awards Best in XR', year: '2025', organization: 'FICCI-BAF' },
    { id: '9', title: 'Muse Creative: Augmented Reality', year: '2021', organization: 'Muse Creative Awards' },
    { id: '10', title: 'Muse Creative: Service Apps', year: '2021', organization: 'Muse Creative Awards' },
    { id: '11', title: 'Muse Creative: Business Apps', year: '2021', organization: 'Muse Creative Awards' },
];

const udhayanAwards: Award[] = [
    { id: '1', title: 'Featured in The Hindu & Hindustan Times', year: '2017', organization: 'Digital Preservation with VR & 3D Scan' },
    { id: '2', title: 'SAE India CAD Modelling', year: '2011', organization: 'First Place' },
    { id: '3', title: 'Film Showcase', year: '2017', organization: 'IDSFFK' },
    { id: '4', title: 'Film Showcase', year: '2017', organization: 'Chitrakatha' },
    { id: '5', title: 'Film Showcase', year: '2020', organization: 'Alpavirama' },
    { id: '6', title: 'Film Showcase', year: '2020', organization: 'KIMFF' },
    { id: '7', title: 'BAF Awards: Best use of XR in Museum category', year: '2025', organization: 'BAF Awards' },
];

const monalisaAwards: Award[] = [
    { id: '1', title: 'Workshop: Crafting an alternative association with time', year: '2022', organization: 'Primer Conference' },
    { id: '2', title: 'Workshop: Developing ZKP protocol for QuestBook', year: '2023', organization: 'Reclaim Protocol' },
    { id: '3', title: 'Runner Up in Designathon', year: '2019', organization: 'IXDD Hyderabad' },
    { id: '4', title: 'Invitation for Prototypes for Humanity', year: '2024', organization: 'Entrepreneurship Training, Dubai' },
];

const founders: TeamMember[] = [
    { name: 'Pranshu Chaudhary', role: 'Founding Partner / Design Education & Innovation', awards: pranshuAwards, linkedinUrl: '#' },
    { name: 'Udhayan RM', role: 'Founding Partner / Immersive Technology & Film', awards: udhayanAwards, linkedinUrl: '#' },
    { name: 'Monalisa Thakur', role: 'Founding Partner / UX & Product Design', awards: monalisaAwards, linkedinUrl: '#' },
];

interface ExtendedTeamMember {
    name: string;
    role: string;
    education?: string;
    linkedinUrl?: string;
}

const team: ExtendedTeamMember[] = [
    { name: 'Kirthana', role: 'Intern / Experimental Interfaces & Hardware', education: 'JKLU University - Transdisciplinary Design' },
    { name: 'Komal', role: 'Intern / Storytelling & 3D Animation', education: 'IIT Jodhpur' },
    { name: 'Priyanshi Shah', role: 'Intern / Game Design & 3D Modelling', education: 'United Institute of Design (UID)' },
    { name: 'Karthika P.', role: 'Intern / 2D Animation & Illustrations', education: 'National Institute of Design - Animation Design' },
    { name: 'Nikhil Rai', role: 'Project Collaborator / Logo Design & Branding' },
];

const DesignerSection: React.FC<{ member: TeamMember }> = ({ member }) => {
    const [expanded, setExpanded] = useState(false);
    const visibleAwards = expanded ? member.awards || [] : (member.awards || []).slice(0, 9);

    return (
        <div className="border-b border-black/5 py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
                <h3 className="text-2xl font-medium tracking-tight">{member.name}</h3>
                <p className="text-sm font-mono text-black/50 uppercase tracking-widest mt-1 mb-6">{member.role}</p>
                <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase border border-black/10 px-4 py-2 rounded-full hover:bg-[#FF4400] hover:text-white hover:border-[#FF4400] transition-all"
                >
                    Connect <ArrowUpRight className="w-3 h-3" />
                </a>
            </div>
            
            <div className="md:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    {visibleAwards.map((award) => (
                        <div key={award.id} className="flex flex-col">
                            <span className="text-sm font-light">{award.title}</span>
                            <span className="text-xs text-black/40 font-mono uppercase">{award.organization} — {award.year}</span>
                        </div>
                    ))}
                </div>
                
                {(member.awards?.length || 0) > 9 && (
                    <button 
                        onClick={() => setExpanded(!expanded)}
                        className="mt-8 text-xs font-mono uppercase tracking-widest flex items-center gap-2 hover:text-[#FF4400] transition-colors"
                    >
                        {expanded ? (
                            <>Collapse <ChevronUp className="w-3 h-3" /></>
                        ) : (
                            <>See More ({(member.awards?.length || 0) - 9}) <ChevronDown className="w-3 h-3" /></>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-24 px-6 md:px-12">
            <SEO 
                title="About Us - Team & Awards"
                description="Meet the founders of Poetics Studio: Pranshu Chaudhary, Udhayan RM, and Monalisa Thakur. A collective of designers and technologists."
                keywords={['Design Team India', 'Award Winning Designers', 'Pranshu Chaudhary', 'Udhayan RM', 'Monalisa Thakur', 'Red Dot Winners']}
                schema={{
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Poetics Studio",
                        "employees": [
                            { "@type": "Person", "name": "Pranshu Chaudhary", "jobTitle": "Design Education & Innovation" },
                            { "@type": "Person", "name": "Udhayan RM", "jobTitle": "Immersive Technology & Film" },
                            { "@type": "Person", "name": "Monalisa Thakur", "jobTitle": "UX & Product Design" }
                        ]
                    }
                }}
            />
            <div className="max-w-6xl mx-auto">
                <header className="mb-24">
                    <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-8">
                        The Hoomans.
                    </h1>
                    <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-black/70">
    Poetics is a collective of designers, technologists, and artists operating from the ancient city of 
    <a 
        href="https://poetics.studio/journal/why-we-moved-to-prayagraj" 
        target="_blank" 
        rel="noreferrer" 
        className="underline underline-offset-4 hover:text-[#FF4400] transition-colors"
    >
        Prayagraj
    </a> 
    and the coastal quiet of Goa. We are united by a desire to find the ghost in the machine.
</p>

                </header>

                <div className="mb-8 font-mono text-xs uppercase tracking-widest text-black/40 border-b border-black/10 pb-2">
                    Founding Partners
                </div>

                {founders.map((founder) => (
                    <DesignerSection key={founder.name} member={founder} />
                ))}

                <div className="mt-32 mb-8 font-mono text-xs uppercase tracking-widest text-black/40 border-b border-black/10 pb-2">
                    Studio Team & Collaborators
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((t) => (
                        <div key={t.name} className="flex flex-col group">
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-light">{t.name}</span>
                            </div>
                            <span className="text-xs font-mono text-black/50 uppercase">{t.role}</span>
                            {t.education && (
                                <span className="text-xs text-black/40 mt-1 italic">{t.education}</span>
                            )}
                            {t.linkedinUrl && (
                                <a 
                                    href={t.linkedinUrl} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-xs text-black/40 mt-1 italic hover:text-[#FF4400] transition-colors w-fit flex items-center gap-1"
                                >
                                    Connect ↗
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
