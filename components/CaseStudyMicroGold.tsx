
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Target, Heart, TrendingUp, Shield, Users, Coins, Sparkles } from 'lucide-react';
import { Page } from '../types';
import SEO from './SEO';

interface CaseStudyProps {
    onNavigate: (page: Page) => void;
}

const CaseStudyMicroGold: React.FC<CaseStudyProps> = ({ onNavigate }) => {
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
    <div className="min-h-screen bg-[#F6F6F4] text-[#111] selection:bg-[#FFD700] selection:text-black">
        <SEO
            title="Micro-Gold Investment Platform - Case Study"
            description="Case Study: Strengthening micro-savings habits for India's everyday investors through culturally-sensitive design and behavioral insights."
            keywords={['FinTech Design', 'Micro Investment UX', 'Behavioral Design', 'Financial Inclusion India', 'Gold Investment App']}
            schema={{
                "@type": "CreativeWork",
                "name": "Micro-Gold Investment Platform",
                "creator": "Poetics Studio",
                "genre": "FinTech Product Design"
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
                <span className="font-mono text-xs uppercase tracking-widest opacity-50">FinTech / Behavioral Design</span>
                <span className="font-mono text-xs uppercase tracking-widest">Micro-Gold Platform</span>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 h-1 bg-[#FFD700] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />


        {/* ======================== HERO SECTION ======================== */}
        <header className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-black/10">

            {/* Left: Typography */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/10 relative z-10 bg-[#F6F6F4]">
                <div className="mt-24 md:mt-0">
                    <span className="inline-block px-3 py-1 border border-[#FFD700]/30 rounded-full text-xs font-mono uppercase tracking-widest mb-6 bg-[#FFD700]/10">
                        FinTech / Behavioral Design
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
                        STRENGTHENING<br/>
                        <span className="text-[#FFD700]">MICRO-SAVINGS</span><br/>
                        HABITS
                    </h1>
                    <p className="text-xl font-light leading-relaxed max-w-md text-black/70">
                        Designing culturally-sensitive financial tools for India's everyday investors.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest text-black/60">
                    <div>
                        <span className="block text-black/30 mb-1">Role</span>
                        Product Strategy<br/>
                        UX Research<br/>
                        Behavioral Design
                    </div>
                    <div>
                        <span className="block text-black/30 mb-1">Year</span>
                        2023
                    </div>
                </div>
            </div>

            {/* Right: Visual */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 relative flex items-center justify-center overflow-hidden min-h-[50vh] md:min-h-auto p-12">
                {/* Gold Coin Visualization */}
                <div className="relative w-full max-w-md aspect-square">
                    {/* Central Coin */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] shadow-[0_20px_60px_rgba(255,215,0,0.4)] flex items-center justify-center animate-pulse">
                            <Coins className="w-24 h-24 text-white" />
                        </div>
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <Heart className="w-8 h-8 text-[#FFD700]" />
                        </div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <Shield className="w-8 h-8 text-[#FFD700]" />
                        </div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <TrendingUp className="w-8 h-8 text-[#FFD700]" />
                        </div>
                    </div>
                </div>
            </div>

        </header>


        {/* ======================== OVERVIEW ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Overview</span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12 leading-tight">
                    Transforming micro-investments into trust and long-term security.
                </h2>
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl leading-relaxed text-black/70 mb-6">
                        A fast-growing micro-gold investment platform allows users to invest from as low as ₹10. The platform primarily serves daily wage earners, lower-income households, and young professionals beginning their financial journey.
                    </p>
                    <p className="text-xl leading-relaxed text-black/70">
                        For many of these users, gold is the most trusted form of saving—more reliable than banks, insurance, or digital wallets.
                    </p>
                </div>
            </div>
        </section>


        {/* ======================== THE CHALLENGE ======================== */}
        <section className="px-6 md:px-12 py-24 bg-[#111] text-white border-b border-white/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">The Challenge</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 leading-tight max-w-4xl">
                    How might we increase engagement and encourage users to stay invested longer, while respecting their financial realities?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <Users className="w-12 h-12 text-[#FFD700] mb-4" />
                        <h3 className="text-xl font-medium mb-3">Who We Serve</h3>
                        <ul className="text-white/70 space-y-2 text-sm">
                            <li>• Daily wage earners</li>
                            <li>• Lower-income households</li>
                            <li>• Young professionals</li>
                            <li>• First-time investors</li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <Target className="w-12 h-12 text-[#FFD700] mb-4" />
                        <h3 className="text-xl font-medium mb-3">Business Goal</h3>
                        <ul className="text-white/70 space-y-2 text-sm">
                            <li>• Increase investment frequency</li>
                            <li>• Reduce withdrawal churn</li>
                            <li>• Build long-term retention</li>
                            <li>• Strengthen trust</li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <Sparkles className="w-12 h-12 text-[#FFD700] mb-4" />
                        <h3 className="text-xl font-medium mb-3">Cultural Context</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Gold represents dignity, security, and future protection in Indian culture—especially for lower-income families.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        {/* ======================== THE PROBLEM ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Research Findings</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Understanding why users weren't staying invested.
                </h2>

                <div className="space-y-8 mb-16">
                    <div className="border-l-4 border-[#FFD700] pl-8 py-4">
                        <h3 className="text-2xl font-medium mb-3">Users invested once or twice, then stopped</h3>
                        <p className="text-black/70 leading-relaxed">
                            After initial curiosity, engagement dropped significantly. The platform became a "one-time experiment" rather than a habit.
                        </p>
                    </div>
                    <div className="border-l-4 border-[#FFD700] pl-8 py-4">
                        <h3 className="text-2xl font-medium mb-3">Withdrawals happened frequently for small emergencies</h3>
                        <p className="text-black/70 leading-relaxed">
                            Users saw their investment as the first place to turn during financial stress, not as long-term savings.
                        </p>
                    </div>
                    <div className="border-l-4 border-[#FFD700] pl-8 py-4">
                        <h3 className="text-2xl font-medium mb-3">Communication felt financial and technical</h3>
                        <p className="text-black/70 leading-relaxed">
                            Language around "investment" and "portfolio" alienated users who didn't see themselves as "investors."
                        </p>
                    </div>
                    <div className="border-l-4 border-[#FFD700] pl-8 py-4">
                        <h3 className="text-2xl font-medium mb-3">Long-term value wasn't understood</h3>
                        <p className="text-black/70 leading-relaxed">
                            Users didn't grasp compounding or how small, regular investments could build meaningful savings over time.
                        </p>
                    </div>
                </div>

                <blockquote className="text-center bg-[#FFD700]/10 p-12 rounded-3xl border border-[#FFD700]/20">
                    <p className="text-2xl md:text-3xl font-light italic text-black/70">
                        "I used it as a place to park extra money temporarily, not a platform for building long-term security."
                    </p>
                    <cite className="text-sm text-black/50 mt-4 block">— User Interview Insight</cite>
                </blockquote>
            </div>
        </section>


        {/* ======================== RESEARCH APPROACH ======================== */}
        <section className="px-6 md:px-12 py-24 bg-[#F9F9F7] border-b border-black/10">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Research Methodology</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Multi-layered discovery process.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-medium mb-3">User Research</h3>
                        <ul className="space-y-2 text-black/70">
                            <li>• Analysis of interview recordings</li>
                            <li>• Primary interviews with existing users</li>
                            <li>• User mindset mapping across income groups</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-medium mb-3">Product Analysis</h3>
                        <ul className="space-y-2 text-black/70">
                            <li>• Heuristic evaluation of current app</li>
                            <li>• Interviews with Product Manager</li>
                            <li>• Behavioral pattern analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        {/* ======================== KEY INSIGHTS ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Behavioral Insights</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 leading-tight">
                    Cultural patterns that shaped our design direction.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-[#FFD700]/5 border border-[#FFD700]/20">
                            <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-[#FFD700]" />
                            </div>
                            <h3 className="text-2xl font-medium mb-4">Gold equals safety and emotional security</h3>
                            <p className="text-black/70 leading-relaxed">
                                Users trust gold more than digital accounts or mutual funds. It represents tangible wealth and family security.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-[#FFD700]/5 border border-[#FFD700]/20">
                            <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6">
                                <Coins className="w-8 h-8 text-[#FFD700]" />
                            </div>
                            <h3 className="text-2xl font-medium mb-4">Daily wage users save when money is physically visible</h3>
                            <p className="text-black/70 leading-relaxed">
                                The metaphor of a "jar of gold" resonated more than abstract numbers and percentages.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-[#FFD700]/5 border border-[#FFD700]/20">
                            <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6">
                                <TrendingUp className="w-8 h-8 text-[#FFD700]" />
                            </div>
                            <h3 className="text-2xl font-medium mb-4">Withdrawals driven by emergencies, not loss of interest</h3>
                            <p className="text-black/70 leading-relaxed">
                                Users wanted to save, but life circumstances forced early withdrawals. The problem wasn't motivation—it was flexibility.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-[#FFD700]/5 border border-[#FFD700]/20">
                            <div className="w-16 h-16 rounded-full bg-[#FFD700]/20 flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-[#FFD700]" />
                            </div>
                            <h3 className="text-2xl font-medium mb-4">Financial calculators intimidated users</h3>
                            <p className="text-black/70 leading-relaxed">
                                Complex graphs and financial jargon felt like "bank language"—cold, transactional, and exclusionary.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* ======================== DESIGN OPPORTUNITY ======================== */}
        <section className="px-6 md:px-12 py-24 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/5 border-b border-black/10">
            <div className="max-w-4xl mx-auto text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Design Opportunity</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 leading-tight">
                    Reframing investment as a trusted relationship.
                </h2>
                <p className="text-2xl leading-relaxed text-black/70 mb-12">
                    Instead of treating the platform like a financial dashboard, we reframed the app as:
                </p>
                <div className="inline-block bg-white px-12 py-8 rounded-3xl shadow-lg border-4 border-[#FFD700]">
                    <p className="text-3xl md:text-4xl font-medium text-[#FFD700] mb-2">
                        An Investment Saarthi
                    </p>
                    <p className="text-lg text-black/60">
                        A trusted guide who helps you save, grow, and make better decisions.
                    </p>
                </div>
                <p className="text-lg text-black/60 mt-12 italic">
                    This metaphor is deeply Indian, human, and supportive—unlike a calculator metaphor which feels transactional and cold.
                </p>
            </div>
        </section>


        {/* ======================== SOLUTIONS ======================== */}
        <section className="px-6 md:px-12 py-24 border-b border-black/10">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Solution Directions</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 leading-tight">
                    Four strategic interventions.
                </h2>

                <div className="space-y-16">
                    {/* Solution 1 */}
                    <div className="border-l-4 border-[#FFD700] pl-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-white font-bold text-xl">1</div>
                            <h3 className="text-3xl font-medium">Communicating Micro-Savings on Home Screen</h3>
                        </div>
                        <p className="text-xl text-black/70 mb-6 leading-relaxed">
                            We redesigned the home experience to highlight small, regular investments and celebrate micro progress.
                        </p>
                        <div className="bg-[#F9F9F7] p-8 rounded-2xl">
                            <p className="text-black/60 mb-4">Messaging shifted from:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/50 p-6 rounded-xl border-2 border-black/10">
                                    <p className="text-black/40 text-sm mb-2">Before</p>
                                    <p className="font-medium line-through">"Invest ₹500 today"</p>
                                </div>
                                <div className="bg-[#FFD700]/10 p-6 rounded-xl border-2 border-[#FFD700]">
                                    <p className="text-[#FFD700] text-sm mb-2">After</p>
                                    <p className="font-medium">"You added ₹10 to your gold today. Keep going!"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution 2 */}
                    <div className="border-l-4 border-[#FFD700] pl-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-white font-bold text-xl">2</div>
                            <h3 className="text-3xl font-medium">Investment Saarthi: AI-Guided Planning</h3>
                        </div>
                        <p className="text-xl text-black/70 mb-6 leading-relaxed">
                            An AI conversational guide that talks in simple language, asks 3 short questions, and selects the best investment plan.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#F9F9F7] p-6 rounded-2xl text-center">
                                <p className="font-medium mb-2">Supportive Guidance</p>
                                <p className="text-sm text-black/60">Not calculation</p>
                            </div>
                            <div className="bg-[#F9F9F7] p-6 rounded-2xl text-center">
                                <p className="font-medium mb-2">Conversation</p>
                                <p className="text-sm text-black/60">Not form filling</p>
                            </div>
                            <div className="bg-[#F9F9F7] p-6 rounded-2xl text-center">
                                <p className="font-medium mb-2">Relationship</p>
                                <p className="text-sm text-black/60">Not transaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Solution 3 */}
                    <div className="border-l-4 border-[#FFD700] pl-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-white font-bold text-xl">3</div>
                            <h3 className="text-3xl font-medium">Goal-Based Investment Jars</h3>
                        </div>
                        <p className="text-xl text-black/70 mb-6 leading-relaxed">
                            Each goal becomes a separate jar, mirroring real-life Indian saving patterns like envelopes, gullak, and gold jewellery.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Daughter's Education",
                                "Scooter Purchase",
                                "Festival Savings",
                                "Emergency Fund"
                            ].map((goal, i) => (
                                <div key={i} className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 p-6 rounded-2xl text-center border border-[#FFD700]/30">
                                    <Coins className="w-8 h-8 text-[#FFD700] mx-auto mb-3" />
                                    <p className="text-sm font-medium">{goal}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solution 4 */}
                    <div className="border-l-4 border-[#FFD700] pl-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-white font-bold text-xl">4</div>
                            <h3 className="text-3xl font-medium">Intelligent Withdrawal Flow</h3>
                        </div>
                        <p className="text-xl text-black/70 mb-6 leading-relaxed">
                            Instead of a simple withdrawal screen, we introduced alternative options that respect users' needs while reducing immediate withdrawals.
                        </p>
                        <div className="bg-[#F9F9F7] p-8 rounded-2xl">
                            <p className="text-black/60 mb-4">Alternative options:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FFD700]">→</span>
                                    <span>Pawn gold temporarily instead of withdrawing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FFD700]">→</span>
                                    <span>Take a gold loan against savings</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FFD700]">→</span>
                                    <span>Partial withdrawal from secondary jars first</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#FFD700]">→</span>
                                    <span>Short-term credit options</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* ======================== IMPACT ======================== */}
        <section className="px-6 md:px-12 py-24 bg-[#111] text-white">
            <div className="max-w-4xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD700] mb-8 block">Impact Potential</span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12 leading-tight">
                    Designing for dignity and long-term security.
                </h2>
                <p className="text-xl text-white/70 mb-16 leading-relaxed">
                    Our proposals aimed to strengthen user trust, increase investment frequency, reduce withdrawal churn, and align with Indian cultural saving behaviours.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                    {[
                        'Increase investment frequency',
                        'Reduce withdrawal churn',
                        'Build emotional connection',
                        'Improve retention',
                        'Cultural alignment',
                        'Trust building'
                    ].map((impact, i) => (
                        <div key={i} className="text-center">
                            <div className="text-5xl mb-2">✓</div>
                            <p className="text-sm text-white/60">{impact}</p>
                        </div>
                    ))}
                </div>

                <blockquote className="border-l-4 border-[#FFD700] pl-8 py-4">
                    <p className="text-2xl font-light italic mb-4">
                        "For many lower-income users, gold is not just investment—it is dignity, security, and future protection."
                    </p>
                    <p className="text-white/60">
                        Designing for this context requires cultural sensitivity, behavioral understanding, trust-building, and non-judgmental guidance.
                    </p>
                </blockquote>
            </div>
        </section>


        {/* ======================== CONCLUSION ======================== */}
        <section className="px-6 md:px-12 py-32 border-t border-black/10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
                    From transactional to transformational.
                </h2>
                <p className="text-xl leading-relaxed text-black/60 mb-12">
                    By reframing micro-gold investment as a trusted, culturally-sensitive relationship rather than a cold financial tool, we created pathways for India's everyday investors to build meaningful, long-term security.
                </p>

                <div className="mt-16 pt-16 border-t border-black/5">
                    <p className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">
                        Designed with <span className="text-[#FFD700] font-bold">♡</span> by Studio Poetics
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

export default CaseStudyMicroGold;
