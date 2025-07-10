'use client';

import { motion } from 'framer-motion';
import { PenTool, Clock, Heart, User } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishDate: string;
  likes: number;
}

export const FeaturedBlog = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Art of Digital Storytelling',
      excerpt:
        'How I discovered that technology can actually help preserve the moments that matter most to me...',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      category: 'Technology',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      likes: 42,
    },
    {
      id: '2',
      title: 'Finding Beauty in Ordinary Moments',
      excerpt:
        'Why I started paying attention to the small things that used to slip by unnoticed...',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
      category: 'Life',
      readTime: '5 min read',
      publishDate: '2024-01-12',
      likes: 38,
    },
    {
      id: '3',
      title: 'The Weight of Words Unspoken',
      excerpt:
        'My journey through understanding the power of silence and the stories I never told...',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
      category: 'Poetry',
      readTime: '6 min read',
      publishDate: '2024-01-10',
      likes: 56,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <PenTool className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Blog
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            My thoughts, stories, and reflections captured in words. This is
            where I write down the things that make my heart skip a beat.
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Likes */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 bg-slate-900/70 backdrop-blur-sm rounded-full">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-white text-sm">{post.likes}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>
                      {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Personal Stats & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">127</div>
              <div className="text-slate-400 text-sm">
                Stories I&lsquo;ve Written
              </div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                2.4K
              </div>
              <div className="text-slate-400 text-sm">People Reading</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">365</div>
              <div className="text-slate-400 text-sm">Days Writing</div>
            </div>
          </div>

          {/* Personal CTA */}
          <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-blue-500/30">
            <User className="w-8 h-8 text-blue-400 mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">
              Read My Stories
            </h4>
            <p className="text-slate-400 text-sm text-center mb-4">
              Dive deeper into my thoughts
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:scale-105 transition-transform duration-300">
              Explore More
            </button>
          </div>
        </motion.div>

        {/* Recent Posts Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            What I&lsquo;ve Been Writing Lately
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                title: 'Morning Reflections on Coffee and Code',
                time: '2 hours ago',
              },
              { title: 'The Silence Between Raindrops', time: '1 day ago' },
              {
                title: 'Digital Minimalism in a Noisy World',
                time: '3 days ago',
              },
              { title: 'Letters to My Future Self', time: '1 week ago' },
            ].map((post, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </span>
                <span className="text-xs text-slate-500">{post.time}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 px-8 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
            Read All My Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
};
