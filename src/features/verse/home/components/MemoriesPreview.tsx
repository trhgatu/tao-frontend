'use client';

import { motion } from 'framer-motion';
import { Camera, Calendar, MapPin, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import { usePublicMemories } from '@/features/verse/memories/hooks';

export const MemoriesPreview = () => {
  const { data, isLoading, isError } = usePublicMemories();
  if (isLoading) return <p>Đang tải memories...</p>;
  if (isError) return <p>Có lỗi xảy ra</p>;

  const moodColors = {
    happy: 'from-yellow-400 to-orange-400',
    nostalgic: 'from-purple-400 to-pink-400',
    peaceful: 'from-blue-400 to-cyan-400',
    excited: 'from-green-400 to-emerald-400',
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
            <Camera className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Memories
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Moments I&lsquo;ve captured, emotions I&lsquo;ve preserved. My
            visual journey through time where every memory tells my story.
          </p>
        </motion.div>

        {/* Featured Memories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {data!.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={memory.imageUrl}
                    alt={memory.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                  {/* Mood Indicator */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${moodColors[memory.mood]} shadow-lg`}
                    />
                  </div>

                  {/* Date */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-slate-900/70 backdrop-blur-sm rounded-full">
                    <Calendar className="w-3 h-3 text-slate-300" />
                    <span className="text-slate-300 text-xs">
                      {new Date(memory.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-400 text-sm">
                      {memory.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {memory.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed italic">
                    &quot;{memory.description}&quot;
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {memory.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Memory Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <Camera className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">342</div>
            <div className="text-slate-400 text-sm">
              Memories I&lsquo;ve Captured
            </div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">28</div>
            <div className="text-slate-400 text-sm">Places I&lsquo;ve Been</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">156</div>
            <div className="text-slate-400 text-sm">My Favorite Moments</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">89</div>
            <div className="text-slate-400 text-sm">My Special Days</div>
          </div>
        </motion.div>

        {/* Personal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Explore My Memory Archive
            </h3>
            <p className="text-slate-400 text-center mb-6">
              Take a journey through the moments that have shaped my story.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
              View My Memories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
