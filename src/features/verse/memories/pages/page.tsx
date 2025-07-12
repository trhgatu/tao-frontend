'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Calendar, MapPin, X } from 'lucide-react';
import { DraggableCardDemo } from '@/features/verse/memories/components';
import Image from 'next/image';
import { Memory } from '@/features/verse/memories/types';

export default function MemoriesPage() {
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [showAllMemories, setShowAllMemories] = useState(false);

  const allMemories: Memory[] = [
    {
      id: '1',
      title: 'First Snow of Winter',
      description:
        "The world transformed into a quiet, white canvas. Every footstep felt like writing poetry on nature's page. I stood there for what felt like hours, watching the snowflakes dance in the lamplight.",
      imageUrl:
        'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-20',
      location: 'Mountain Trail',
      tags: ['nature', 'winter', 'peaceful', 'solitude'],
      mood: 'peaceful',
    },
    {
      id: '2',
      title: 'Late Night Coding Session',
      description:
        'When the world sleeps, my creativity awakens. Lines of code flowing like verses in the digital darkness. The breakthrough moment when everything finally clicked.',
      imageUrl:
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-18',
      location: 'My Home Office',
      tags: ['coding', 'creativity', 'night', 'breakthrough'],
      mood: 'excited',
    },
    {
      id: '3',
      title: 'Coffee Shop Discovery',
      description:
        "Found this hidden gem tucked away in District 3. The barista knew exactly how I liked my coffee before I even ordered. Sometimes the best discoveries happen when you're not looking.",
      imageUrl:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      location: 'Hidden Café, District 3',
      tags: ['coffee', 'discovery', 'serendipity'],
      mood: 'happy',
    },
    {
      id: '4',
      title: 'Childhood Home Visit',
      description:
        'Walking through the rooms where I grew up, every corner holds a memory. The creaky floorboard in the hallway, the view from my old bedroom window.',
      imageUrl:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-12',
      location: 'Family Home',
      tags: ['family', 'childhood', 'nostalgia'],
      mood: 'nostalgic',
    },
    {
      id: '5',
      title: 'Sunrise Photography',
      description:
        'Waking up at 5 AM to catch the perfect light. The city slowly coming alive as the sun painted the sky in shades of gold and pink.',
      imageUrl:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      location: 'City Rooftop',
      tags: ['photography', 'sunrise', 'city'],
      mood: 'peaceful',
    },
    {
      id: '6',
      title: 'Concert Under Stars',
      description:
        'Live music flowing through the night air, surrounded by thousands of people all feeling the same rhythm. Music has this magical way of connecting souls.',
      imageUrl:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-08',
      location: 'Open Air Venue',
      tags: ['music', 'concert', 'energy'],
      mood: 'excited',
    },
    {
      id: '7',
      title: "Grandmother's Stories",
      description:
        "Spent the afternoon listening to grandma's stories about the old days. Her eyes lit up as she spoke about her youth. These moments are precious beyond measure.",
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-05',
      location: 'Family Home',
      tags: ['family', 'stories', 'wisdom'],
      mood: 'nostalgic',
    },
    {
      id: '8',
      title: 'Morning Meditation',
      description:
        'Started my day with 20 minutes of quiet meditation. The city was just waking up, and I felt completely at peace with the world and myself.',
      imageUrl:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      date: '2024-01-03',
      location: 'Rooftop Garden',
      tags: ['meditation', 'peace', 'morning'],
      mood: 'peaceful',
    },
  ];

  const moodColors = {
    happy: 'from-yellow-400 to-orange-400',
    nostalgic: 'from-purple-400 to-pink-400',
    peaceful: 'from-blue-400 to-cyan-400',
    excited: 'from-green-400 to-emerald-400',
  };

  const filteredMemories = allMemories.filter((memory) => {
    const moodMatch = selectedMood === 'all' || memory.mood === selectedMood;
    const searchMatch =
      searchTerm === '' ||
      memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return moodMatch && searchMatch;
  });

  const displayedMemories = showAllMemories
    ? filteredMemories
    : filteredMemories.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Draggable Cards Section */}
      <div className="relative">
        <DraggableCardDemo />
      </div>

      {/* List Memories Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              All My Memories
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Browse through my complete collection of captured moments and
              stories.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search memories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>

            {/* Mood Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <option value="all">All Moods</option>
                <option value="happy">Happy</option>
                <option value="peaceful">Peaceful</option>
                <option value="excited">Excited</option>
                <option value="nostalgic">Nostalgic</option>
              </select>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-slate-400 text-sm">
              {filteredMemories.length} memor
              {filteredMemories.length !== 1 ? 'ies' : 'y'} found
            </p>
          </motion.div>

          {/* Memory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedMemories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      width={300}
                      height={300}
                      src={memory.imageUrl}
                      alt={memory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

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

                    <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {memory.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {memory.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                      {memory.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          +{memory.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredMemories.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => setShowAllMemories(!showAllMemories)}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                {showAllMemories
                  ? 'Show Less'
                  : `View All ${filteredMemories.length} Memories`}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedMemory.title}
                </h2>
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <Image
                width={300}
                height={300}
                src={selectedMemory.imageUrl}
                alt={selectedMemory.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />

              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>
                      {new Date(selectedMemory.date).toLocaleDateString(
                        'vi-VN'
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{selectedMemory.location}</span>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${moodColors[selectedMemory.mood]}`}
                  />
                </div>

                <p className="leading-relaxed">{selectedMemory.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedMemory.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
