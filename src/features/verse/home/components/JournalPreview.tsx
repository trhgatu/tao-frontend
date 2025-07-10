'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Lock,
  Calendar,
  TrendingUp,
  Moon,
  Sun,
  Coffee,
  Smile,
} from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  mood: 'happy' | 'calm' | 'thoughtful' | 'energetic';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  wordCount: number;
}

export const JournalPreview = () => {
  const recentEntries: JournalEntry[] = [
    {
      id: '1',
      title: 'Morning Clarity',
      excerpt:
        "There's something magical about the first hour of my day. When the world is still quiet and my thoughts flow like...",
      date: '2024-01-20',
      mood: 'calm',
      timeOfDay: 'morning',
      wordCount: 324,
    },
    {
      id: '2',
      title: 'Breakthrough Moment',
      excerpt:
        'Today I finally understood what they meant by "the journey is the destination." It wasn\'t about reaching...',
      date: '2024-01-19',
      mood: 'happy',
      timeOfDay: 'afternoon',
      wordCount: 567,
    },
    {
      id: '3',
      title: 'Late Night Reflections',
      excerpt:
        'The city lights below remind me of stars - each one a story, a life, a dream. Sometimes I wonder if...',
      date: '2024-01-18',
      mood: 'thoughtful',
      timeOfDay: 'night',
      wordCount: 445,
    },
  ];

  const moodColors = {
    happy: 'from-yellow-400 to-orange-400',
    calm: 'from-blue-400 to-cyan-400',
    thoughtful: 'from-purple-400 to-indigo-400',
    energetic: 'from-green-400 to-emerald-400',
  };

  const timeIcons = {
    morning: Sun,
    afternoon: Coffee,
    evening: Smile,
    night: Moon,
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              My Journal
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            My private sanctuary for thoughts, reflections, and daily
            discoveries. A safe space where every word of mine matters.
          </p>
        </motion.div>

        {/* Privacy Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12 p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 max-w-md mx-auto"
        >
          <Lock className="w-5 h-5 text-green-400" />
          <span className="text-slate-300 text-sm font-medium">
            My thoughts, completely private and secure
          </span>
        </motion.div>

        {/* Recent Entries Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {recentEntries.map((entry, index) => {
            const TimeIcon = timeIcons[entry.timeOfDay];
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-green-500/50 transition-all duration-500 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TimeIcon className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400 text-sm capitalize">
                        {entry.timeOfDay}
                      </span>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${moodColors[entry.mood]}`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {entry.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-4 leading-relaxed italic">
                    &quot;{entry.excerpt}&quot;
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(entry.date).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                    <span>{entry.wordCount} words</span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-green-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Journal Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Private & Secure
            </h4>
            <p className="text-slate-400 text-sm">My thoughts stay mine</p>
          </div>

          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Mood Tracking
            </h4>
            <p className="text-slate-400 text-sm">Understanding my patterns</p>
          </div>

          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Daily Prompts
            </h4>
            <p className="text-slate-400 text-sm">I never run out of ideas</p>
          </div>

          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <BookOpen className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Rich Editor
            </h4>
            <p className="text-slate-400 text-sm">I write with style</p>
          </div>
        </motion.div>

        {/* Personal Writing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl border border-green-500/30">
            <div className="text-3xl font-bold text-green-400 mb-1">89</div>
            <div className="text-slate-400 text-sm">
              Days I&lsquo;ve Journaled
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl border border-blue-500/30">
            <div className="text-3xl font-bold text-blue-400 mb-1">12.4K</div>
            <div className="text-slate-400 text-sm">
              Words I&lsquo;ve Written
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400 mb-1">156</div>
            <div className="text-slate-400 text-sm">
              Insights I&lsquo;ve Gained
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl border border-yellow-500/30">
            <div className="text-3xl font-bold text-yellow-400 mb-1">94%</div>
            <div className="text-slate-400 text-sm">My Consistency</div>
          </div>
        </motion.div>

        {/* Personal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl border border-green-500/30 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Explore My Journal
            </h3>
            <p className="text-slate-400 text-center mb-6">
              Take a peek into my journey of self-discovery. One thought at a
              time.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              Read My Entries
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
