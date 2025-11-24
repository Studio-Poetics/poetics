import React, { useState } from 'react';
import SEO from './SEO';
import { ArrowLeft } from 'lucide-react';

interface Article {
    id: number;
    title: string;
    date: string;
    tag: string;
    image?: string;
    content: React.ReactNode;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Building Technology with Empathy",
        date: "Mar 10, 2024",
        tag: "Philosophy",
        image: "/blog/empathy.png",
        content: (
            <>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80 mb-12">
                    Somewhere along the way, we stopped asking why we build and began asking only how fast. Somewhere along the way, technology slipped out of our hands and became something we chase—endlessly, breathlessly, often without pause.
                </p>

                <p className="mb-8">
                    I've noticed this subtle, painful shift. Technology, once a tool, has become a master. Our screens tell us when to wake, where to go, what to want. And many of the people building these systems—brilliant, ambitious, well-funded—seem to wear a particular badge of honor: make something people can't live without.
                </p>

                <p className="mb-8">
                    It's a strange metric of success: not to improve life, but to make oneself indispensable to it. Not to build for people, but to bind them.
                </p>

                <p className="mb-16">
                    This is where empathy disappears.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Designing With, Not For</h2>
                <p className="mb-8">
                    Empathy begins by stepping outside our own brilliance. It asks us to listen—not only to what people say, but to what they feel, what they avoid, what they need but cannot name.
                </p>

                <p className="mb-8">
                    When we design with empathy, we stop treating users as endpoints. We begin to see them as collaborators. The interface becomes a conversation, not a funnel. The product becomes an invitation, not a prescription.
                </p>

                <p className="mb-4">In our work, we often ask simple questions:</p>
                <ul className="list-none space-y-2 mb-16 pl-6 border-l-2 border-black/10">
                    <li>Does this reduce anxiety?</li>
                    <li>Does it leave room for rest?</li>
                    <li>Does it honour the user's time, body, attention?</li>
                </ul>

                <p className="mb-16">Sometimes the answers are uncomfortable. But they always guide us toward something better.</p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Resisting the Addiction Model</h2>
                <p className="mb-8">
                    A great deal of modern tech design is based on behavior loops: metrics, nudges, habits, clicks. These loops often work too well. They pull people in and don't let go.
                </p>

                <p className="mb-8">
                    This isn't accidental. It's deliberate. The goal is <em>engagement</em>—not meaning, not joy, not usefulness. Just time spent.
                </p>

                <p className="mb-16">
                    But empathy refuses this logic. Empathy respects boundaries. It builds tools that know when to step aside. We try to design systems that respect the off-switch. That don't punish you for logging out. That don't manipulate you into returning. This isn't less ambitious. It's more humane.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Technology as a Guest, Not a Host</h2>
                <p className="mb-8">
                    Imagine technology not as architecture, but as furniture. Not something that dictates the shape of our lives, but something that fits gently into it.
                </p>

                <p className="mb-8">
                    I like this metaphor. It reminds me that tech should adapt to humans—not the other way around. The chair does not demand how we sit. The lamp does not insist on how we see.
                </p>

                <p className="mb-16">
                    Empathetic technology feels like that: quiet, helpful, respectful. It waits until needed. It asks nothing in return. It enhances, but does not overtake.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">A Technology That Can Be Forgotten</h2>
                <p className="mb-8">
                    There's a quiet dignity in creating something that doesn't want attention. A technology that can be forgotten because it works so well, so gently, that it fades into the background of a better life.
                </p>

                <p className="mb-8">We want to build more of that.</p>

                <p className="mb-8">
                    Not technologies that claim your time, but ones that return it. Not platforms that trap, but ones that open. Not inventions that enslave, but ones that liberate.
                </p>

                <p className="mb-12">This is what it means, for us, to build with empathy.</p>

                <p className="text-sm text-black/50 italic mt-16 border-t border-black/10 pt-8">
                    Written from the studio where we believe technology should serve the human spirit—not consume it.
                </p>
            </>
        )
    },
    {
        id: 2,
        title: "The Gentle Future of Digital Interfaces",
        date: "Mar 15, 2024",
        tag: "Design",
        image: "/blog/ethics.png",
        content: (
            <>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80 mb-12">
                    Lately, I've found myself more sensitive to the ways screens speak to us. Some shout. Others whisper. Most just hum along, quietly demanding attention. But every now and then, I come across a digital experience that feels… calm. Thoughtful. Almost tender in its presence. And it makes me wonder—what if our interfaces could feel less like tools and more like companions?
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">A Space to Breathe</h2>
                <p className="mb-8">
                    When I speak of 'gentle interfaces,' I don't mean simply minimal ones. There's a difference. Minimalism often reduces, pares down, simplifies. But gentleness brings with it a kind of care. A softness. It invites rather than instructs.
                </p>

                <p className="mb-16">
                    In my own work—or even when I use apps that feel well-considered—I've noticed how much silence matters. Not just in sound, but in visual quiet. Ample spacing. Muted tones. Type that doesn't rush to be read, but settles on the screen like breath. These choices don't scream 'design.' They simply make space for the user to arrive, to pause, to feel welcomed.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Design That Listens</h2>
                <p className="mb-8">
                    There's something almost musical about a well-paced interface. The rhythm of transitions, the subtle feedback of a button, the way content unfolds gradually—it all creates a sense of being listened to. I don't want to be overwhelmed by features; I want to discover them, gently, at my own pace.
                </p>

                <p className="mb-16">
                    Sometimes, that means resisting the urge to fill every inch with information. Other times, it means adding just the right motion—enough to feel alive, not enough to distract. This is the quiet choreography of thoughtful design. And while it might not win immediate attention, it builds a lasting sense of trust.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Kindness, Embedded</h2>
                <p className="mb-8">
                    To design gently is, in a way, to practice empathy. I think of a user not just as someone trying to do something, but someone who may be tired, distracted, overstimulated. The interface should not be another demand on their attention. It should be a place of ease.
                </p>

                <p className="mb-16">
                    When I build or critique digital tools, I ask: does this interaction feel respectful? Could it be softer? Can I reduce friction without reducing meaning? These aren't aesthetic questions alone—they're ethical ones. I believe good design today must care for our cognitive load as much as our visual taste.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">A Gentle Horizon</h2>
                <p className="mb-8">
                    I don't think gentleness is opposed to innovation. If anything, it's a radical shift—away from noise, toward presence. It challenges us to slow down, to make less but mean more. It values rhythm over reach, clarity over control.
                </p>

                <p className="mb-12">
                    There's still so much to explore. But perhaps the future of digital interfaces isn't about more intelligence or more immediacy—it's about more stillness. More warmth. Interfaces that don't just work, but feel right. That, to me, is a future worth designing for.
                </p>
            </>
        )
    },
    {
        id: 3,
        title: "Blockchain as a Design Material",
        date: "Mar 5, 2024",
        tag: "Technology",
        image: "/blog/blockchain-as-amaterial.png",
        content: (
            <>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80 mb-12">
                    When I first encountered blockchain, I didn't see code or finance. I saw form. Not form as in shape, but as in structure—a set of constraints and affordances that could be shaped into something meaningful.
                </p>

                <p className="mb-16">
                    As a designer, I've learned to feel the grain of materials: how paper folds, how wood responds to humidity, how light bends around curves. Blockchain, too, has a grain. It's not tactile, but it's there—in its logic, its transparency, its resistance to change. And like any material, once you understand how it behaves, you can begin to design with it, not just on top of it.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Immutability Has Weight</h2>
                <p className="mb-8">
                    Working with blockchain feels like working with stone. Once something is etched, it stays. It doesn't forget. Every action, every transaction becomes a block in a chain that cannot be undone. This isn't just about permanence—it's about responsibility.
                </p>

                <p className="mb-16">
                    When I think of blockchain as a design material, this immutability becomes a kind of weight. It slows you down. It makes you consider the consequences of each input. You're not just prototyping anymore; you're making a pact. It's a material that demands care.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Trust Is Designed Differently</h2>
                <p className="mb-8">
                    I've always been fascinated by how we design for trust—whether it's the reassuring click of a closing latch, or the consistency of a visual system. Blockchain challenges this. It doesn't rely on central authority or branding. Instead, it distributes trust, embeds it in protocol, exposes the mechanics.
                </p>

                <p className="mb-16">
                    Designing in this space means moving from interface to infrastructure. You're not just making something look trustworthy—you're showing how it works. You let the user see the gears turning. Transparency isn't just ethical here; it's functional. It's a strange kind of beauty: a system that's honest by design.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Time Isn't Linear Anymore</h2>
                <p className="mb-8">
                    In most materials, time is something you battle—degradation, fading, wear. With blockchain, time becomes something you design. It moves forward in blocks, not seconds. You can set things to unlock in the future, respond to cumulative events, or remain dormant unless triggered by consensus.
                </p>

                <p className="mb-16">
                    This fascinated me. The idea that time could be programmed like clay shaped by gesture. You're no longer just designing interactions—you're designing temporal behaviors. It opens up a poetic space. A contract that ripens. A message that waits. A memory that only reveals itself when it's needed.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Material Honesty Still Applies</h2>
                <p className="mb-8">
                    I believe in designing with honesty. You don't ask bamboo to behave like steel. You don't force clay to keep its corners. Blockchain, too, demands to be treated on its own terms.
                </p>

                <p className="mb-8">
                    It's not fast. It's not lightweight. It doesn't do well with gray areas or reversals. But it is secure. It is public. It is communal.
                </p>

                <p className="mb-16">
                    The temptation is to use blockchain where it's not needed—just because it's novel. But to work with it meaningfully is to ask: what is this material good for? What can only be done in this way? What becomes possible when permanence, transparency, and collective verification are your base layer?
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Toward a Poetics of Infrastructure</h2>
                <p className="mb-8">
                    Reading Kenya Hara taught me that materials aren't just things we use—they are things we see through. They shape not just what we make, but how we think. Blockchain, for me, is one of those materials.
                </p>

                <p className="mb-12">
                    It's not just a tool for finance or control. It's a way to structure memory, participation, and meaning. And maybe, just maybe, it's a new kind of poetic infrastructure—one we're only beginning to understand.
                </p>
            </>
        )
    },
    {
        id: 4,
        title: "Why we moved to Prayagraj",
        date: "Aug 15, 2024",
        tag: "Studio",
        content: (
            <>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-black/80 mb-12">
                    People often ask why we chose Prayagraj. Not Bangalore. Not Mumbai. Not even Goa full-time. The answer isn't simple, but it's honest: we moved here because we needed to remember what stillness feels like.
                </p>

                <p className="mb-16">
                    In the relentless churn of metro cities, there's a kind of amnesia that sets in. You forget that thinking takes time. That ideas need silence to crystallize. That the best work often emerges not from hustle, but from attention—sustained, patient, unhurried attention.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Escaping the Echo Chamber</h2>
                <p className="mb-8">
                    Working in India's tech hubs felt increasingly like being trapped in an echo chamber. Everyone was building the same things, chasing the same metrics, speaking the same language of growth and scale. The conversations at coffee shops, co-working spaces, and networking events all began to blur into one continuous pitch deck.
                </p>

                <p className="mb-8">
                    We found ourselves asking: what would it mean to build from a different vantage point? What ideas might emerge if we stepped outside the gravitational pull of startup culture?
                </p>

                <p className="mb-16">
                    Prayagraj offered that distance. Not just physical distance, but conceptual space. Here, we're not surrounded by people optimizing for the same goals. We're not constantly comparing our trajectory to others'. We have room to think differently.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">The Economics of Attention</h2>
                <p className="mb-8">
                    There's also a pragmatic truth: the cost of living in Bangalore or Mumbai makes certain kinds of work impossible. When your overhead is high, you're forced to chase projects that pay quickly rather than projects that matter deeply.
                </p>

                <p className="mb-8">
                    In Prayagraj, we can afford to be selective. We can take on experimental work. We can spend months refining an idea without the pressure of immediate returns. This isn't romanticizing scarcity—it's recognizing that economic freedom creates creative freedom.
                </p>

                <p className="mb-16">
                    Lower costs mean we control our time. And controlling our time means we can dedicate it to the kind of thoughtful, considered work we believe in.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">A City of Confluences</h2>
                <p className="mb-8">
                    Prayagraj sits at the sangam—the confluence of three rivers. This geography feels symbolic. It's a place where different currents meet, where old and new exist side by side without one erasing the other.
                </p>

                <p className="mb-8">
                    We see this in the city itself: ancient temples near modern infrastructure, traditional crafts alongside digital work, a pace of life that accommodates both urgency and contemplation. It's a reminder that innovation doesn't require abandoning the past. Sometimes, the most interesting work happens at the intersection.
                </p>

                <p className="mb-16">
                    As a design studio, we're drawn to these confluences—technology and craft, digital and material, global perspectives and local contexts. Prayagraj embodies that spirit.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Building Outside the Center</h2>
                <p className="mb-8">
                    There's a quiet power in building from what others consider the periphery. When you're not in the "center," you're forced to be more intentional. You can't rely on network effects or proximity to capital. You have to be genuinely good.
                </p>

                <p className="mb-8">
                    This sharpens the work. It makes us think harder about who we're building for and why. It pushes us to communicate more clearly, to document better, to create work that speaks for itself without the amplification of ecosystem hype.
                </p>

                <p className="mb-16">
                    Prayagraj doesn't offer the convenience of Bangalore or the glamour of Mumbai. But it offers something rarer: the conditions for depth. And depth, we believe, is what the world needs more of.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">Slowness as Strategy</h2>
                <p className="mb-8">
                    In a culture obsessed with speed, slowness feels radical. Moving to Prayagraj was an act of choosing slowness—not as laziness, but as strategy. Slow enough to notice. Slow enough to care. Slow enough to build work that might actually last.
                </p>

                <p className="mb-8">
                    We still move fast when needed. We still ship. We still iterate. But we've reclaimed the right to pause, to reflect, to let ideas mature before forcing them into the world.
                </p>

                <p className="mb-16">
                    This, ultimately, is why we moved: to protect the space where good work happens. To resist the pressure to always be seen, always be scaling, always be optimizing. To remember that some things—like ideas, like craft, like meaning—take time.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">What We've Learned</h2>
                <p className="mb-8">
                    It hasn't been easy. We've dealt with infrastructure challenges, connectivity issues, and the occasional loneliness of being far from peers. But these challenges pale compared to what we've gained.
                </p>

                <p className="mb-8">
                    We've learned that geography matters less than we thought, but environment matters more. That you can build world-class work from anywhere if you protect your attention and stay true to your values.
                </p>

                <p className="mb-8">
                    We've learned that clients care about the quality of your thinking, not the address on your invoice. That the best collaborators will find you if your work speaks clearly enough.
                </p>

                <p className="mb-16">
                    And we've learned that sometimes the most radical act isn't to chase the next big city—it's to step away and build from a place of groundedness.
                </p>

                <h2 className="text-2xl md:text-3xl font-light mb-6 mt-16">An Invitation</h2>
                <p className="mb-8">
                    Prayagraj isn't for everyone, and that's not the point. The point is this: wherever you build from, make it a conscious choice. Ask yourself what kind of environment supports the work you want to make. Ask what you're optimizing for—visibility or substance, velocity or depth.
                </p>

                <p className="mb-8">
                    For us, Prayagraj is where we've chosen to plant roots. It's where we've found the stillness we needed. And from that stillness, we're building the studio we believe the world needs.
                </p>

                <p className="mb-12">
                    Not the loudest studio. Not the biggest. But one that stands for something: thoughtful work, human values, and the belief that good design emerges not from hustle, but from care.
                </p>

                <p className="text-sm text-black/50 italic mt-16 border-t border-black/10 pt-8">
                    Written from our studio in Prayagraj, where the Ganga flows quietly and ideas have room to breathe.
                </p>
            </>
        )
    }
];

const Journal: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    if (selectedArticle) {
        return (
            <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
                <SEO
                    title={selectedArticle.title}
                    description={`An essay on design and technology from Poetics Studio`}
                    type="article"
                    publishedDate={selectedArticle.date}
                />

                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedArticle(null)}
                        className="flex items-center gap-2 text-sm font-mono text-black/60 hover:text-[#FF4400] transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </button>

                    {/* Article Header */}
                    <header className="mb-16 pb-8 border-b border-black/10">
                        <div className="flex gap-4 items-center mb-6">
                            <span className="font-mono text-xs text-black/40">{selectedArticle.date}</span>
                            <span className="font-mono text-xs text-[#FF4400] uppercase tracking-widest">[{selectedArticle.tag}]</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">{selectedArticle.title}</h1>
                    </header>

                    {/* Featured Image */}
                    {selectedArticle.image && (
                        <div className="mb-16 -mx-6 md:mx-0">
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                className="w-full h-auto rounded-none md:rounded-sm"
                            />
                        </div>
                    )}

                    {/* Article Content */}
                    <article className="prose prose-lg max-w-none leading-relaxed text-black/80">
                        {selectedArticle.content}
                    </article>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
            <SEO
                title="Journal - Notes on Design & Technology"
                description="Essays and reflections on design philosophy, technology ethics, and studio practice from Poetics Studio."
                keywords={['Design Theory', 'Technology Ethics', 'Blockchain Design', 'Gentle Interfaces', 'Studio Journal']}
                schema={{
                    "@type": "Blog",
                    "name": "Poetics Studio Journal",
                    "blogPost": articles.map(a => ({
                        "@type": "BlogPosting",
                        "headline": a.title,
                        "datePublished": a.date,
                        "author": { "@type": "Organization", "name": "Poetics Studio" }
                    }))
                }}
            />
            <header className="mb-24">
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">Journal</h1>
                <p className="text-black/50 font-mono text-sm">Thoughts, notes, and incomplete theories.</p>
            </header>

            <div className="space-y-0">
                {articles.map((article) => (
                    <article
                        key={article.id}
                        onClick={() => setSelectedArticle(article)}
                        className="group border-t border-black/10 py-8 md:py-12 flex flex-col md:flex-row justify-between items-baseline cursor-pointer hover:bg-white transition-colors -mx-6 px-6"
                    >
                        <div className="md:w-3/4">
                            <span className="font-mono text-xs text-[#FF4400] uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">Read Article</span>
                            <h2 className="text-2xl md:text-3xl font-light group-hover:text-[#FF4400] transition-colors">{article.title}</h2>
                        </div>
                        <div className="md:w-1/4 text-left md:text-right mt-4 md:mt-0 flex flex-row md:flex-col gap-4 md:gap-1">
                            <span className="font-mono text-xs text-black/40">{article.date}</span>
                            <span className="font-mono text-xs text-black/80 uppercase">[{article.tag}]</span>
                        </div>
                    </article>
                ))}
                <div className="border-t border-black/10" />
            </div>
        </div>
    );
};

export default Journal;