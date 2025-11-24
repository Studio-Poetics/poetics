
import React, { useState } from 'react';
import { Page } from '../types';
import { Loader2 } from 'lucide-react';

interface FooterProps {
    onNavigate?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // ---------------------------------------------------------
  // Configured Formspree ID
  // ---------------------------------------------------------
  const FORMSPREE_FORM_ID = 'xgvbwwya'; 

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setStatus('error');
        setMessage('Invalid email address.');
        return;
    }

    setStatus('loading');
    setMessage('');

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                _subject: "New Newsletter Subscriber (Poetics.studio)", // Subject line for your email notification
                source: "Footer Newsletter Form"
            })
        });

        const data = await response.json();

        if (response.ok) {
            setStatus('success');
            setMessage('Thank you. You have been added to the list.');
            setEmail('');
        } else {
            // Handle Formspree specific errors safely
            if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                setStatus('error');
                setMessage(data.errors.map((error: any) => error.message).join(", "));
            } else {
                setStatus('error');
                setMessage('Something went wrong. Please try again.');
            }
        }
    } catch (error) {
        setStatus('error');
        setMessage('Network error. Please try again later.');
    }
  };

  return (
    <footer className="bg-[#111] text-[#F6F6F4] px-6 md:px-12 py-24 border-t border-[#FF4400]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
            
            <div className="md:col-span-2">
                <h2 className="text-2xl md:text-4xl font-light tracking-tighter mb-8">
                    Make meaning.<br/>
                    Not just things.
                </h2>
                <div className="max-w-xs">
                     <p className="text-white/40 text-sm leading-relaxed">
                        Poetics Studio is a registered practice in the Cloud, operating physically from Prayagraj and Goa. We do not use cookies because we prefer fruit.
                    </p>
                </div>
            </div>

            <div className="md:col-span-1">
                <h5 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Coordinates</h5>
                <ul className="space-y-4 text-sm font-light">
                    <li><a href="https://www.instagram.com/studio.poetics/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4400] transition-colors">Instagram</a></li>
                    <li><a href="https://www.are.na/share/lvhFvDM" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4400] transition-colors">Are.na</a></li>
                    <li><a href="https://www.linkedin.com/in/pranshu101/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4400] transition-colors">LinkedIn</a></li>
                    <li><a href="mailto:hello@poetics.studio" className="hover:text-[#FF4400] transition-colors">hello@poetics.studio</a></li>
                </ul>
            </div>

            <div className="md:col-span-1">
                 <h5 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Newsletter</h5>
                 <form onSubmit={handleSubscribe} className="flex flex-col gap-2 relative">
                    <div className={`flex border-b ${status === 'error' ? 'border-red-500/50' : 'border-white/20'} pb-2 transition-colors`}>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (status !== 'idle') setStatus('idle');
                                if (message) setMessage('');
                            }}
                            disabled={status === 'loading' || status === 'success'}
                            placeholder={status === 'success' ? "Subscribed" : "Enter email address"} 
                            className="bg-transparent border-none text-white focus:outline-none w-full placeholder:text-white/20 text-sm pr-8 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button 
                            type="submit" 
                            disabled={status === 'loading' || status === 'success'}
                            className="text-xs uppercase hover:text-[#FF4400] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[20px]"
                        >
                            {status === 'loading' ? <Loader2 className="w-3 h-3 animate-spin" /> : '→'}
                        </button>
                    </div>
                    {message && (
                        <span className={`absolute -bottom-6 left-0 text-xs font-mono tracking-wide animate-in fade-in slide-in-from-top-1 ${status === 'error' ? 'text-red-400' : 'text-[#FF4400]'}`}>
                            {message}
                        </span>
                    )}
                 </form>
            </div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-xs text-white/30 uppercase tracking-widest">
            <span>© 2024 Poetics.studio</span>
            <div className="flex gap-4 mt-4 md:mt-0">
                <span>Impressum</span>
                <span>Privacy</span>
                <span>Less but better</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
