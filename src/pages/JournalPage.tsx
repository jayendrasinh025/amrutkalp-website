import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { JournalArticle } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, ChevronLeft, ShieldCheck } from 'lucide-react';

interface JournalPageProps {
  onSelectProduct: (slug: string) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectProduct }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="uppercase tracking-wider font-semibold text-[#b3832f]">
              {selectedArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{selectedArticle.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedArticle.publishDate}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight leading-tight">
            {selectedArticle.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed italic">
            "{selectedArticle.excerpt}"
          </p>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base">
          {selectedArticle.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                {sec.sectionHeading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Recommendation Box */}
        <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Ready to verify authentic Ayurvedic formulations?
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Explore Sanjivani Pure Shilajit with our open ₹5,51,000 guarantee.
            </p>
          </div>
          <button
            onClick={() => onSelectProduct('sanjivani-shilajit')}
            className="py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs whitespace-nowrap cursor-pointer shadow-xs"
          >
            Explore Sanjivani Shilajit →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Knowledge Base & Clinical Wisdom
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight">
          The Amrutkalp Wellness Journal
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Grounded, science-backed guides on Ayurvedic Rasayanas, testing purity, dosage protocols, and chronic joint care without marketing fluff.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map(article => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 p-6 hover:border-stone-400 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                <span className="uppercase tracking-wider font-semibold text-[#b3832f]">
                  {article.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-900 group-hover:text-amber-900">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
