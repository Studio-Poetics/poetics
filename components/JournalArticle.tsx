
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from './Journal';
import SEO from './SEO';
import { ArrowLeft } from 'lucide-react';

const JournalArticle: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const article = articles.find(a => a.slug === slug);

    if (!article) {
        navigate('/journal');
        return null;
    }

    return (
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
            <SEO
                title={article.title}
                description="An essay on design and technology from Poetics Studio"
                type="article"
                publishedDate={article.date}
            />

            <div className="max-w-3xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/journal')}
                    className="flex items-center gap-2 text-sm font-mono text-black/60 hover:text-[#FF4400] transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Journal
                </button>

                {/* Article Header */}
                <header className="mb-16 pb-8 border-b border-black/10">
                    <div className="flex gap-4 items-center mb-6">
                        <span className="font-mono text-xs text-black/40">{article.date}</span>
                        <span className="font-mono text-xs text-[#FF4400] uppercase tracking-widest">[{article.tag}]</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">{article.title}</h1>
                </header>

                {/* Featured Image */}
                {article.image && (
                    <div className="mb-16 -mx-6 md:mx-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-auto rounded-none md:rounded-sm"
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="prose prose-lg max-w-none leading-relaxed text-black/80">
                    {article.content}
                </article>
            </div>
        </div>
    );
};

export default JournalArticle;
