import React, { useState } from 'react';
import SEO from './SEO';
import { ArrowRight, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnnvzkdp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-[#111] text-[#F6F6F4]">
        <SEO
            title="Contact - Prayagraj & Goa"
            description="Contact Poetics Studio. Located in Prayagraj (Civil Lines) and Goa (Assagao). Start a conversation about sense-making projects."
            keywords={['Contact Poetics Studio', 'Design Studio Prayagraj Address', 'Design Studio Goa Address', 'Civil Lines Prayagraj', 'Assagao Goa']}
            schema={{
                "@type": "ContactPage",
                "mainEntity": {
                    "@type": "Organization",
                    "location": [
                         { "@type": "Place", "name": "Prayagraj HQ", "address": "12 Civil Lines, Prayagraj, UP 211001" },
                         { "@type": "Place", "name": "Goa Studio", "address": "Villa 404, Assagao, Goa 403507" }
                    ]
                }
            }}
        />

        <div className="max-w-6xl mx-auto">
            {/* Header Section with More Space */}
            <header className="mb-32 text-center">
                <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8">
                    Start a conversation.
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
                    We are currently accepting new projects for 2025.
                    Briefs regarding "sense-making" are prioritized.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">

                {/* Contact Form - Left Side */}
                <div className="space-y-8">
                    <div className="mb-12">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-4 block">Send us a message</span>
                        <p className="text-white/50 text-sm">
                            Tell us about your project and we'll get back to you within 48 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-light text-white/60 mb-3">
                                Who should we say hello to?
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FF4400] transition-colors placeholder:text-white/20"
                                placeholder="Priya"
                            />
                        </div>

                        {/* Email / Phone Field */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-light text-white/60 mb-3">
                                    Where can we write back?
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FF4400] transition-colors placeholder:text-white/20"
                                    placeholder="priya@studio.in"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-light text-white/60 mb-3">
                                    How about a call? (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#FF4400] transition-colors placeholder:text-white/20"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-mono uppercase tracking-widest text-white/60 mb-3">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-[#FF4400] transition-colors placeholder:text-white/20 resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="group flex items-center gap-3 bg-[#FF4400] text-white px-8 py-4 rounded-full font-mono uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Sent!' : 'Send Message'}
                            {formStatus === 'success' ? (
                                <Check className="w-5 h-5" />
                            ) : (
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            )}
                        </button>

                        {/* Status Messages */}
                        {formStatus === 'success' && (
                            <p className="text-[#FF4400] text-sm animate-in fade-in">
                                Thank you! We'll be in touch soon.
                            </p>
                        )}
                        {formStatus === 'error' && (
                            <p className="text-red-400 text-sm animate-in fade-in">
                                Something went wrong. Please try again or email us directly.
                            </p>
                        )}
                    </form>
                </div>

                {/* Contact Details - Right Side */}
                <div className="space-y-24">
                    {/* Email */}
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-6 block">Direct Email</span>
                        <a
                            href="mailto:hello@poetics.studio"
                            className="inline-block text-3xl md:text-4xl font-light hover:text-[#FF4400] transition-colors border-b border-white/20 hover:border-[#FF4400]"
                        >
                            hello@poetics.studio
                        </a>
                    </div>

                    {/* Locations */}
                    <div className="space-y-16">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-6 block">Prayagraj HQ</span>
                            <p className="text-lg font-light leading-relaxed text-white/70">
                                12 Civil Lines,<br/>
                                Near Coffee House,<br/>
                                Prayagraj, UP 211001<br/>
                                India
                            </p>
                        </div>

                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4400] mb-6 block">Goa Studio</span>
                            <p className="text-lg font-light leading-relaxed text-white/70">
                                Villa 404, Assagao,<br/>
                                Bardez, Goa 403507<br/>
                                India
                            </p>
                        </div>
                    </div>

                    {/* Current Time */}
                    <div className="pt-8 border-t border-white/10">
                        <p className="font-mono text-sm text-white/40">
                            Current Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;