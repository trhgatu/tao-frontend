'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface QuoteItem {
  id: string;
  text: string;
  author: string;
}

export const QuotesPreview = () => {
  const featuredQuotes: QuoteItem[] = [
    {
      id: '1',
      text: "I tend to forget the things that once made my heart skip a beat — so I write them down, before even I forget why I'm still here.",
      author: 'Personal Reflection',
    },
    {
      id: '2',
      text: 'The best way to find out if you can trust somebody is to trust them.',
      author: 'Ernest Hemingway',
    },
    {
      id: '3',
      text: 'Code is poetry written for machines to understand and humans to admire.',
      author: 'Unknown Developer',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Quote className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              My Quotes
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Words that have touched my soul, wisdom that guides my journey.
          </p>
        </motion.div>

        {/* Simple Quote Cards */}
        <div className="space-y-8 mb-16">
          {featuredQuotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-amber-500/50 rounded-2xl transition-all duration-500 group"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-slate-200 text-xl md:text-2xl leading-relaxed mb-6 italic font-light text-center">
                &quot;{quote.text}&quot;
              </blockquote>

              {/* Author */}
              <cite className="block text-amber-400 font-medium not-italic text-center text-lg">
                — {quote.author}
              </cite>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            View All Quotes
          </button>
        </motion.div>
      </div>
    </section>
  );
};
