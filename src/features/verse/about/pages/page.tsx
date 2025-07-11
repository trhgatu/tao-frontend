'use client';

import { motion } from 'framer-motion';
import {
  Coffee,
  Heart,
  MapPin,
  Calendar,
  Github,
  Mail,
  Linkedin,
  BookOpen,
  Camera,
  Music,
} from 'lucide-react';

export default function AboutPage() {
  const interests = [
    { icon: BookOpen, label: 'Reading', description: 'Collecting wisdom' },
    {
      icon: Coffee,
      label: 'Coffee Culture',
      description: 'Fuel for creativity',
    },
    { icon: Camera, label: 'Photography', description: 'Capturing moments' },
    { icon: Music, label: 'Music', description: 'Soundtrack of life' },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">A</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I&lsquo;m a storyteller at heart, someone who believes in capturing
            the essence of human experience through words and moments.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-400" />
              My Story
            </h2>
            <div className="prose prose-slate prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                I tend to forget the things that once made my heart skip a beat
                — so I write them down, before even I forget why I&lsquo;m still
                here. This simple realization became the foundation of
                everything I create and cherish.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                From Ho Chi Minh City, Vietnam, I find myself constantly
                fascinated by the intersection of human emotion and digital
                expression. I believe that behind every piece of technology,
                every line of code, there&lsquo;s a human story waiting to be
                told.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                This archive isn&lsquo;t just a collection of my work or
                thoughts — it&lsquo;s a reflection of who I am. The quotes that
                move me, the memories that shape me, the moments of clarity that
                come with a perfect cup of coffee at 2 AM, and the journal
                entries that help me make sense of it all.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I&lsquo;m not lost in thought or writing, you&lsquo;ll find
                me exploring the city with my camera, hunting for the perfect
                coffee shop, or simply sitting in comfortable silence, letting
                life happen around me while I observe and absorb.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Passions & What Drives Me */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Coffee className="w-6 h-6 text-amber-400" />
            What Moves My Soul
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {interest.label}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Life Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              My Philosophy
            </h2>
            <blockquote className="text-xl md:text-2xl text-slate-200 italic text-center leading-relaxed mb-6">
              &quot;I build not for show, but for soul. Every creation is not
              just my work – it&lsquo;s my way to think, express, and connect
              with the world around me.&quot;
            </blockquote>
            <p className="text-slate-400 text-center">
              Life is a collection of moments, and I&lsquo;m here to make sure
              the beautiful ones don&lsquo;t get lost in the noise.
            </p>
          </div>
        </motion.section>

        {/* Personal Details */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            A Little More About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">Home</span>
              </div>
              <p className="text-white font-medium">
                Ho Chi Minh City, Vietnam 🇻🇳
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Journey</span>
              </div>
              <p className="text-white font-medium">
                Collecting stories since always
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-5 h-5 text-amber-400" />
                <span className="text-slate-300">Daily Ritual</span>
              </div>
              <p className="text-white font-medium">
                Coffee, contemplation & creation
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300">Belief</span>
              </div>
              <p className="text-white font-medium">
                Every moment has a story worth telling
              </p>
            </div>
          </div>
        </motion.section>

        {/* Connect */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Let&lsquo;s Share Stories
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              I&lsquo;m always excited to connect with fellow dreamers,
              thinkers, and storytellers. Whether you want to share a meaningful
              quote, discuss life over coffee, or simply say hello.
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <a
                href="mailto:trananhtu1112003@gmail.com"
                className="p-3 bg-slate-800/50 border border-slate-600 rounded-full text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/trhgatu"
                className="p-3 bg-slate-800/50 border border-slate-600 rounded-full text-slate-300 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/trhgatu1103"
                className="p-3 bg-slate-800/50 border border-slate-600 rounded-full text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="text-slate-400 text-sm">
              <p>
                Thank you for taking the time to know the person behind the
                archive.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
