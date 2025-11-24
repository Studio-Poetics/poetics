
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Zap, Brain, Heart, Volume2, Shield, Download } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';

interface CaseStudyProps {
    onNavigate: (page: Page) => void;
}

const CaseStudyWordsprint: React.FC<CaseStudyProps> = ({ onNavigate }) => {
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
    <div className="min-h-screen bg-[#F6F6F4] text-[#111] selection:bg-[#FF4400] selection:text-white">
        <SEO
            title="Wordsprint - Educational Game Design"
            description="Case Study: A fast, engaging English word game designed for meaningful learning. Building vocabulary through calm, distraction-free gameplay."
            keywords={['Word Game Design', 'Educational App Design', 'Neumorphic UI', 'Vocabulary Learning', 'Mobile Game UX', 'Android Game']}
            schema={{
                "@type": "CreativeWork",
                "name": "Wordsprint Game",
                "creator": "Poetics Studio",
                "genre": "Educational Game Design"
            }}
        />

        {/* ======================== FIXED NAVIGATION ======================== */}
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-white pointer-events-none">
            <button
                onClick={() => onNavigate(Page.HOME)}
                className="pointer-events-auto flex items-center gap-3 text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Index</span>
            </button>

            <div className="hidden md:flex flex-col items-end">
                <span className="font-mono text-xs uppercase tracking-widest opacity-50">Educational Game</span>
                <span className="font-mono text-xs uppercase tracking-widest">Wordsprint</span>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 h-1 bg-[#FF4400] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />


        {/* ======================== HERO SECTION ======================== */}
        <header className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-black/10">

            {/* Left: Typography */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/10 relative z-10 bg-[#F6F6F4]">
                <div className="mt-24 md:mt-0">
                    <span className="inline-block px-3 py-1 border border-black/20 rounded-full text-xs font-mono uppercase tracking-widest mb-6 bg-white">
                        Android Game Design
                    </span>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
                        WORD<br/>
                        <span className="text-[#FF4400]">SPRINT</span>
                    </h1>
                    <p className="text-xl font-light leading-relaxed max-w-md text-black/70 mb-8">
                        A fast, engaging English word game that turns everyday moments into meaningful learning.
                    </p>

                    {/* Download Button */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.studiopoetics.wordsprintenglish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#E0E5EC] rounded-full font-mono text-sm uppercase tracking-widest hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] group"
                    >
                        <Download className="w-5 h-5 text-[#FF4400] group-hover:translate-y-0.5 transition-transform" />
                        <span>Download on Play Store</span>
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest text-black/60">
                    <div>
                        <span className="block text-black/30 mb-1">Role</span>
                        Game Design<br/>
                        UI/UX Design<br/>
                        Development
                    </div>
                    <div>
                        <span className="block text-black/30 mb-1">Year</span>
                        2023
                    </div>
                </div>
            </div>

            {/* Right: Neumorphic Demo */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#E0E5EC] to-[#F5F5F5] relative flex items-center justify-center overflow-hidden min-h-[50vh] md:min-h-auto p-12">

                {/* Neumorphic Card Mockup */}
                <div className="relative w-full max-w-sm aspect-[9/16] rounded-3xl bg-[#E0E5EC] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 flex flex-col justify-between">

                    {/* Score Area */}
                    <div className="flex justify-between items-center">
                        <div className="px-4 py-2 rounded-full bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
                            <span className="font-mono text-sm text-black/60">SCORE: 1200</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                            <Clock className="w-5 h-5 text-[#FF4400]" />
                        </div>
                    </div>

                    {/* Word Tiles */}
                    <div className="flex flex-col gap-6 items-center">
                        <div className="flex gap-3">
                            {['L', 'E', 'A', 'R', 'N'].map((letter, i) => (
                                <div
                                    key={i}
                                    className="w-14 h-14 rounded-2xl bg-[#E0E5EC] shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] flex items-center justify-center font-bold text-2xl text-black/80"
                                >
                                    {letter}
                                </div>
                            ))}
                        </div>

                        {/* Input Field Mockup */}
                        <div className="w-full h-16 rounded-2xl bg-[#E0E5EC] shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center">
                            <span className="font-mono text-lg text-black/40">Type here...</span>
                        </div>

                        {/* Submit Button */}
                        <div className="w-full h-14 rounded-2xl bg-[#FF4400] shadow-[5px_5px_15px_rgba(255,68,0,0.3)] flex items-center justify-center cursor-pointer hover:shadow-[8px_8px_20px_rgba(255,68,0,0.4)] transition-all">
                            <span className="font-mono text-sm uppercase tracking-widest text-white">Submit</span>
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex justify-around">
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mx-auto mb-1">
                                <Zap className="w-4 h-4 text-[#FF4400]" />
                            </div>
                            <span className="text-xs font-mono text-black/50">15s</span>
                        </div>
                        <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mx-auto mb-1">
                                <Brain className="w-4 h-4 text-[#FF4400]" />
                            </div>
                            <span className="text-xs font-mono text-black/50">Level 12</span>
                        </div>
                    </div>

                </div>

            </div>

        </header>


        {/* ======================== OVERVIEW ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Overview</span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12 leading-tight">
                    Turning everyday moments into meaningful learning.
                </h2>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl leading-relaxed text-black/70 mb-6">
                        Word Sprint is a fast, engaging English word game that challenges players to quickly unscramble letters and form correct words—building vocabulary, spelling skills, and confidence in English.
                    </p>
                    <p className="text-xl leading-relaxed text-black/70">
                        Whether you're a student, a commuter, a word puzzle enthusiast, or an adult looking for a quick brain boost, Word Sprint delivers a uniquely fun, educational, and calming experience.
                    </p>
                </div>
            </div>
        </section>


        {/* ======================== THE PROBLEM ======================== */}
        <section className="px-6 md:px-12 py-24 bg-[#111] text-white border-b border-white/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">The Problem</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 leading-tight max-w-3xl">
                    Most educational mobile games fall into two traps.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="border border-white/10 p-8 rounded-3xl bg-white/5 backdrop-blur-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.05)]">
                        <h3 className="text-2xl font-light mb-4">Too Academic & Boring</h3>
                        <p className="text-white/60 leading-relaxed">
                            Leading to low engagement, high dropout rates, and a perception that learning must be tedious.
                        </p>
                    </div>
                    <div className="border border-white/10 p-8 rounded-3xl bg-white/5 backdrop-blur-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.05)]">
                        <h3 className="text-2xl font-light mb-4">Overstimulating & Cluttered</h3>
                        <p className="text-white/60 leading-relaxed">
                            Filled with ads, pop-ups, and distractions that interfere with focus and actual learning.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 p-12 rounded-3xl border border-white/10 shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.05)]">
                    <h3 className="text-2xl font-light mb-8">Studio Poetics set out to create something different:</h3>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-[#FF4400] mt-1">✓</span>
                            <span className="text-white/80">Fast gameplay for short sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#FF4400] mt-1">✓</span>
                            <span className="text-white/80">Meaningful vocabulary development</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#FF4400] mt-1">✓</span>
                            <span className="text-white/80">A visually calm, distraction-free interface</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#FF4400] mt-1">✓</span>
                            <span className="text-white/80">No ads, no registrations, no interruptions</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#FF4400] mt-1">✓</span>
                            <span className="text-white/80">Suitable for all ages</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        {/* ======================== DESIGN PHILOSOPHY ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Design Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Neumorphism: Depth without distraction.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-8 rounded-3xl bg-[#E0E5EC] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-[#E0E5EC] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mx-auto mb-6 flex items-center justify-center">
                            <Heart className="w-8 h-8 text-[#FF4400]" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Calming</h3>
                        <p className="text-sm text-black/60">Soft shadows and gentle depth create a soothing environment</p>
                    </div>
                    <div className="text-center p-8 rounded-3xl bg-[#E0E5EC] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-[#E0E5EC] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mx-auto mb-6 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-[#FF4400]" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Safe</h3>
                        <p className="text-sm text-black/60">Premium feel that's comfortable for children and adults</p>
                    </div>
                    <div className="text-center p-8 rounded-3xl bg-[#E0E5EC] shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300">
                        <div className="w-20 h-20 rounded-full bg-[#E0E5EC] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] mx-auto mb-6 flex items-center justify-center">
                            <Brain className="w-8 h-8 text-[#FF4400]" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Intuitive</h3>
                        <p className="text-sm text-black/60">Depth and spacing guide attention naturally</p>
                    </div>
                </div>

                <div className="bg-[#E0E5EC] p-12 rounded-3xl shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]">
                    <h3 className="text-2xl font-light mb-6">The UI features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#E0E5EC] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]"></div>
                            <span className="text-black/70">Rounded cards and buttons</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#E0E5EC] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]"></div>
                            <span className="text-black/70">Gentle shadows and highlights</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#E0E5EC] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]"></div>
                            <span className="text-black/70">Minimalist typography</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#E0E5EC] shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]"></div>
                            <span className="text-black/70">Muted visual cues</span>
                        </div>
                    </div>
                </div>

                <blockquote className="mt-16 text-center">
                    <p className="text-2xl md:text-3xl font-light italic text-black/60 mb-4">
                        "Nothing competes with the core task: thinking about words."
                    </p>
                </blockquote>
            </div>
        </section>


        {/* ======================== WHY NEUMORPHISM WORKS ======================== */}
        <section className="px-6 md:px-12 py-24 bg-gradient-to-br from-[#E0E5EC] to-[#F5F5F5] border-b border-black/10">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Learning Science</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Why neumorphism works for learning.
                </h2>
                <p className="text-xl leading-relaxed text-black/70 mb-12">
                    Educational effectiveness depends heavily on reducing cognitive load. The neumorphic interface supports learning by:
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl shadow-[5px_5px_15px_rgba(190,190,190,0.3),-5px_-5px_15px_rgba(255,255,255,0.7)]">
                        <div className="w-8 h-8 rounded-full bg-[#FF4400] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-mono text-xs">1</span>
                        </div>
                        <p className="text-lg text-black/80">Guiding attention naturally through depth and spacing</p>
                    </div>
                    <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl shadow-[5px_5px_15px_rgba(190,190,190,0.3),-5px_-5px_15px_rgba(255,255,255,0.7)]">
                        <div className="w-8 h-8 rounded-full bg-[#FF4400] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-mono text-xs">2</span>
                        </div>
                        <p className="text-lg text-black/80">Emphasizing key elements like score, timer, and input field</p>
                    </div>
                    <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl shadow-[5px_5px_15px_rgba(190,190,190,0.3),-5px_-5px_15px_rgba(255,255,255,0.7)]">
                        <div className="w-8 h-8 rounded-full bg-[#FF4400] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-mono text-xs">3</span>
                        </div>
                        <p className="text-lg text-black/80">Maintaining visual clarity without overwhelming graphics</p>
                    </div>
                    <div className="flex items-start gap-4 bg-white/50 p-6 rounded-2xl shadow-[5px_5px_15px_rgba(190,190,190,0.3),-5px_-5px_15px_rgba(255,255,255,0.7)]">
                        <div className="w-8 h-8 rounded-full bg-[#FF4400] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-mono text-xs">4</span>
                        </div>
                        <p className="text-lg text-black/80">Providing feedback through subtle cues instead of flashing graphics</p>
                    </div>
                </div>

                <div className="mt-16 bg-white/70 p-10 rounded-3xl border border-black/5">
                    <p className="text-lg text-black/60 italic mb-6">Many users describe the experience as:</p>
                    <div className="flex flex-wrap gap-3">
                        {['clean', 'soothing', 'beautifully simple', 'a pleasure to interact with'].map((word, i) => (
                            <span key={i} className="px-4 py-2 bg-[#E0E5EC] rounded-full text-sm font-mono shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]">
                                "{word}"
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>


        {/* ======================== GAMEPLAY & LEARNING ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Gameplay Mechanics</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Entertainment and education, seamlessly blended.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-light mb-6">How it Works</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-[#FF4400] mt-1 flex-shrink-0" />
                                <span className="text-black/70">15-second challenges build quick thinking and recall</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-[#FF4400] mt-1 flex-shrink-0" />
                                <span className="text-black/70">Unscrambling strengthens spelling and vocabulary</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Brain className="w-5 h-5 text-[#FF4400] mt-1 flex-shrink-0" />
                                <span className="text-black/70">Repeated exposure improves pattern recognition</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Volume2 className="w-5 h-5 text-[#FF4400] mt-1 flex-shrink-0" />
                                <span className="text-black/70">Time pressure develops decision-making skills</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-light mb-6">Learning Outcomes</h3>
                        <div className="space-y-6">
                            <div className="bg-[#F9F9F7] p-6 rounded-2xl border border-black/5">
                                <h4 className="font-medium mb-2">Players notice:</h4>
                                <ul className="text-sm text-black/70 space-y-2">
                                    <li>• Better spelling confidence</li>
                                    <li>• Faster recognition of word forms</li>
                                    <li>• Expanded vocabulary</li>
                                </ul>
                            </div>
                            <div className="bg-[#F9F9F7] p-6 rounded-2xl border border-black/5">
                                <h4 className="font-medium mb-2">Teachers appreciate:</h4>
                                <ul className="text-sm text-black/70 space-y-2">
                                    <li>• Offline functionality</li>
                                    <li>• Privacy-friendly approach</li>
                                    <li>• Safe, ad-free environment</li>
                                    <li>• Organic learning through play</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <blockquote className="text-center bg-[#111] text-white p-12 rounded-3xl">
                    <p className="text-2xl md:text-3xl font-light italic">
                        "Players feel like they are simply having fun—but over time, they notice real improvement."
                    </p>
                </blockquote>
            </div>
        </section>


        {/* ======================== PERFECT FOR MODERN LIFESTYLES ======================== */}
        <section className="px-6 md:px-12 py-24 bg-[#F9F9F7] border-b border-black/10">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Modern Context</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Designed for the rhythm of contemporary life.
                </h2>
                <p className="text-xl leading-relaxed text-black/70 mb-12">
                    A full session can last less than a minute, making it ideal for:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        'Commuting',
                        'Waiting in line',
                        'Coffee breaks',
                        'Between meetings',
                        'Before bed',
                        'Class transitions'
                    ].map((context, i) => (
                        <div key={i} className="bg-[#F9F9F7] p-6 rounded-2xl text-center shadow-[8px_8px_16px_#e0e0e0,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#e0e0e0,-4px_-4px_8px_#ffffff] transition-all duration-300">
                            <span className="text-black/70 font-medium">{context}</span>
                        </div>
                    ))}
                </div>
                <p className="text-lg text-black/60 mt-12 text-center italic">
                    Instead of scrolling mindlessly, users can get a quick mental workout that feels rewarding and productive.
                </p>
            </div>
        </section>


        {/* ======================== KEY FEATURES ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Key Features</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Built with intention.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Hundreds of Words', desc: 'Carefully curated English vocabulary' },
                        { title: 'Clean Interface', desc: 'Minimal, distraction-free design' },
                        { title: 'Fully Offline', desc: 'No internet required to play' },
                        { title: 'No Ads', desc: 'Zero interruptions, ever' },
                        { title: 'No Sign-ups', desc: 'Privacy-first approach' },
                        { title: 'Haptic Feedback', desc: 'Sound and touch responses' },
                        { title: 'Score Tracking', desc: 'Monitor your progress' },
                        { title: 'All Ages', desc: 'From kids to adults' },
                        { title: 'Android Native', desc: 'Optimized for mobile' }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-[#F6F6F4] shadow-[10px_10px_20px_#d1d1d1,-10px_-10px_20px_#ffffff] hover:shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] transition-all duration-300">
                            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                            <p className="text-sm text-black/60">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* ======================== IMPACT ======================== */}
        <section className="px-6 md:px-12 py-24 bg-[#111] text-white">
            <div className="max-w-4xl mx-auto text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-8 block">Impact</span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12 leading-tight">
                    Simplicity and learning can coexist beautifully.
                </h2>
                <p className="text-xl leading-relaxed text-white/70 mb-12">
                    With thoughtful design and focused gameplay, it is possible to create an experience that is fun, effective, accessible, and aesthetically refined.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                    <div>
                        <div className="text-5xl font-light mb-2 text-[#FF4400]">✓</div>
                        <p className="text-sm text-white/60">Calming design</p>
                    </div>
                    <div>
                        <div className="text-5xl font-light mb-2 text-[#FF4400]">✓</div>
                        <p className="text-sm text-white/60">Distraction-free</p>
                    </div>
                    <div>
                        <div className="text-5xl font-light mb-2 text-[#FF4400]">✓</div>
                        <p className="text-sm text-white/60">Educational</p>
                    </div>
                    <div>
                        <div className="text-5xl font-light mb-2 text-[#FF4400]">✓</div>
                        <p className="text-sm text-white/60">Accessible</p>
                    </div>
                </div>
            </div>
        </section>


        {/* ======================== CONCLUSION ======================== */}
        <section className="px-6 md:px-12 py-32 border-t border-black/10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                    A refreshing blend of clarity, challenge, and cognitive growth.
                </h2>
                <p className="text-xl leading-relaxed text-black/60 mb-12">
                    Word Sprint stands as a successful example of educational entertainment designed for focus. Its neumorphic interface, fast gameplay, and privacy-first approach make it a standout in the crowded mobile game space.
                </p>
                <p className="text-lg text-black/50 italic mb-12">
                    Whether played for a few minutes or an hour, Word Sprint offers a meaningful experience—anytime, anywhere.
                </p>

                {/* Download CTA */}
                <div className="mt-16 mb-16">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.studiopoetics.wordsprintenglish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-[#E0E5EC] rounded-full font-mono text-lg uppercase tracking-widest hover:shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] transition-all duration-300 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] group"
                    >
                        <Download className="w-6 h-6 text-[#FF4400] group-hover:translate-y-1 transition-transform" />
                        <span className="font-bold">Download on Play Store</span>
                    </a>
                </div>

                <div className="mt-16 pt-16 border-t border-black/5">
                    <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">
                        Designed & Developed with
                        <span className="inline-block mx-2 px-3 py-1 bg-[#E0E5EC] rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] text-[#FF4400] font-bold text-base">♡</span>
                        by Studio Poetics
                    </p>
                    <p className="text-xs text-black/30">
                        © 2023 Studio Poetics. All rights reserved.
                    </p>
                </div>
            </div>
        </section>

    </div>
  );
};

export default CaseStudyWordsprint;
