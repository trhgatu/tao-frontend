'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Camera,
  PenTool,
  Mail,
  Github,
  Twitter,
  Instagram,
  Heart,
  ArrowUp,
} from 'lucide-react';
import Link from 'next/link';

export const VerseFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'Blog', href: '/blog', icon: PenTool },
      { name: 'Memories', href: '/memories', icon: Camera },
      { name: 'Journal', href: '/journal', icon: BookOpen },
      { name: 'About', href: '/about', icon: Heart },
    ],
    connect: [
      { name: 'Email', href: 'mailto:hello@archiveofone.com', icon: Mail },
      { name: 'GitHub', href: 'https://github.com/username', icon: Github },
      { name: 'Twitter', href: 'https://twitter.com/username', icon: Twitter },
      {
        name: 'Instagram',
        href: 'https://instagram.com/username',
        icon: Instagram,
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                The Archive Of One
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                A personal sanctuary where thoughts become stories, moments
                become memories, and reflections find their home in the digital
                realm.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-blue-500/30 pl-4 italic text-slate-300 text-sm">
              &quot;I tend to forget the things that once made my heart skip a
              beat — so I write them down, before even I forget why I&apos;m
              still here.&quot;
            </blockquote>
          </motion.div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700 pt-12 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-3">
              Stay Connected
            </h4>
            <p className="text-slate-400 mb-6">
              Get notified when new stories are added to the archive. No spam,
              just meaningful content.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} The Archive Of One.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and lots of</span>
              <span className="text-blue-400">coffee</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
