'use client';

import { motion } from 'framer-motion';
import {
  IconFlame,
  IconHammer,
  IconCode,
  IconRocket,
  IconCoffee,
  IconMusic,
  IconBook,
  IconSword,
  IconTarget,
  IconBolt,
  IconMail,
  IconBrandGithub,
} from '@tabler/icons-react';
import Image from 'next/image';

export default function TheArchemistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-red-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20" />
      <div className="absolute inset-0 -z-10 opacity-40">
        <Image
          src="/assets/images/frame.svg"
          alt="Forge Background Frame"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="xl:sticky xl:top-8 xl:h-fit"
            >
              <div className="bg-zinc-800/50 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-red-900/20">
                {/* Avatar */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur-xl opacity-40 animate-pulse" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-lg shadow-red-900/50">
                    <Image
                      src="/assets/images/trhgatu.jpg"
                      alt="The Archemist"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Tran Hoang Anh Tu
                  </h1>
                  <p className="bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 bg-clip-text text-transparent font-bold text-lg animate-forge-glow">
                    The Archemist
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Fullstack Developer & Digital Blacksmith
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                    <span className="text-gray-300 flex items-center gap-2">
                      <IconFlame className="w-4 h-4 text-red-400" />
                      Experience
                    </span>
                    <span className="text-red-400 font-semibold">1+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-900/20 rounded-lg border border-orange-500/20">
                    <span className="text-gray-300 flex items-center gap-2">
                      <IconHammer className="w-4 h-4 text-orange-400" />
                      Projects Forged
                    </span>
                    <span className="text-orange-400 font-semibold">20+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/20">
                    <span className="text-gray-300 flex items-center gap-2">
                      <IconCoffee className="w-4 h-4 text-yellow-400" />
                      Coffee Consumed
                    </span>
                    <span className="text-yellow-400 font-semibold">∞</span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <a
                    href="mailto:contact@trhgatu.dev"
                    className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg font-semibold text-center block flex items-center justify-center gap-2"
                  >
                    <IconMail className="w-4 h-4" />
                    Hire The Archemist
                  </a>
                  <a
                    href="https://github.com/trhgatu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 border border-red-500 text-red-300 rounded-lg hover:bg-red-500/10 transition-colors font-semibold text-center block flex items-center justify-center gap-2"
                  >
                    <IconBrandGithub className="w-4 h-4" />
                    View Arsenal
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="xl:col-span-2 space-y-12">
              {/* Philosophy Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <IconFlame className="w-8 h-8 text-red-500" />
                  The Forge Philosophy
                </h2>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm shadow-lg shadow-red-900/20">
                  <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4">
                    {`Code is not just written—it's forged. Every line tempered by challenge,
                    every function sharpened by purpose. In the digital forge, I don't just
                    build applications; I craft experiences that endure.`}
                  </blockquote>
                  <p className="text-red-400 font-semibold">{`— The Archemist's Creed`}</p>
                </div>
              </motion.section>

              {/* Battle History Timeline */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <IconSword className="w-8 h-8 text-orange-500" />
                  Battle History
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      year: '2024',
                      title: 'Master Craftsman Era',
                      description:
                        'Forged TAO - The ultimate portfolio forge. Mastered Next.js 14, advanced TypeScript patterns, and modern deployment strategies.',
                      icon: <IconTarget className="w-5 h-5" />,
                      color: 'red',
                    },
                    {
                      year: '2023',
                      title: 'The Great Scaling',
                      description:
                        'Led multiple high-traffic applications to victory. Conquered microservices architecture and cloud infrastructure battles.',
                      icon: <IconRocket className="w-5 h-5" />,
                      color: 'orange',
                    },
                    {
                      year: '2022',
                      title: 'Full-Stack Ascension',
                      description:
                        'Achieved mastery over both frontend and backend realms. Unified design and development under one banner.',
                      icon: <IconBolt className="w-5 h-5" />,
                      color: 'yellow',
                    },
                  ].map((battle, index) => (
                    <motion.div
                      key={battle.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-zinc-800/50 border-l-4 border-l-red-500 rounded-xl p-6 backdrop-blur-sm hover:bg-zinc-800/70 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 bg-${battle.color}-600/20 rounded-lg text-${battle.color}-400`}
                        >
                          {battle.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm font-semibold">
                              {battle.year}
                            </span>
                            <h3 className="text-xl font-bold text-white">
                              {battle.title}
                            </h3>
                          </div>
                          <p className="text-gray-300">{battle.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Arsenal Grid */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <IconHammer className="w-8 h-8 text-yellow-500" />
                  Weapons of Choice
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      category: 'Frontend Arsenal',
                      items: [
                        'React',
                        'Next.js',
                        'TypeScript',
                        'Tailwind CSS',
                        'Framer Motion',
                      ],
                      icon: <IconCode className="w-6 h-6" />,
                      color: 'red',
                    },
                    {
                      category: 'Backend Forge',
                      items: [
                        'Node.js',
                        'NestJS',
                        'PostgreSQL',
                        'MongoDB',
                        'Redis',
                      ],
                      icon: <IconRocket className="w-6 h-6" />,
                      color: 'orange',
                    },
                    {
                      category: 'DevOps Artillery',
                      items: [
                        'Docker',
                        'Render',
                        'Vercel',
                        'GitHub Actions',
                        'Nginx',
                      ],
                      icon: <IconBolt className="w-6 h-6" />,
                      color: 'yellow',
                    },
                    {
                      category: 'Design Weapons',
                      items: ['Figma'],
                      icon: <IconTarget className="w-6 h-6" />,
                      color: 'red',
                    },
                  ].map((arsenal, index) => (
                    <motion.div
                      key={arsenal.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-all shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-red-400">{arsenal.icon}</div>
                        <h3 className="text-lg font-bold text-white">
                          {arsenal.category}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {arsenal.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-red-800/30 text-red-200 rounded-full text-sm border border-red-600/30 hover:bg-red-700/30 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Beyond Code */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Beyond the Forge
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <IconBook className="w-5 h-5" />,
                      title: 'Knowledge Seeker',
                      desc: 'Always learning new technologies and methodologies',
                      color: 'red',
                    },
                    {
                      icon: <IconMusic className="w-5 h-5" />,
                      title: 'Rhythm Coder',
                      desc: 'Lo-fi beats and epic soundtracks fuel my coding sessions',
                      color: 'orange',
                    },
                    {
                      icon: <IconCoffee className="w-5 h-5" />,
                      title: 'Caffeine Alchemist',
                      desc: 'Transforming coffee into code since 2019',
                      color: 'yellow',
                    },
                    {
                      icon: <IconRocket className="w-5 h-5" />,
                      title: 'Future Builder',
                      desc: 'Passionate about emerging tech and innovation',
                      color: 'red',
                    },
                  ].map((passion, index) => (
                    <motion.div
                      key={passion.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 hover:border-orange-500/50 transition-all shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-orange-400">{passion.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {passion.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {passion.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-red-900/20">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Ready to Forge Something Epic?
                  </h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    {`Every great application starts with a spark of an idea. Let's turn your vision
                    into a battle-tested, scalable reality that stands the test of time.`}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:contact@trhgatu.dev"
                      className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:from-red-700 hover:to-orange-700 transition-all shadow-lg font-semibold flex items-center justify-center gap-2"
                    >
                      <IconMail className="w-4 h-4" />
                      Start a Project
                    </a>
                    <a
                      href="/craftings"
                      className="px-8 py-3 border border-red-500 text-red-300 rounded-lg hover:bg-red-500/10 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <IconHammer className="w-4 h-4" />
                      View My Work
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
