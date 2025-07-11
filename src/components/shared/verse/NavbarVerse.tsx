'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/shared/ModeToggle';

export function VerseNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/verse/blog', label: 'Blog' },
    { href: '/verse/memories', label: 'Memories' },
    { href: '/verse/journal', label: 'Journal' },
    { href: '/verse/timeline', label: 'Timeline' },
    { href: '/verse/about', label: 'About' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 z-50 px-8 py-3
                   backdrop-blur-lg border border-slate-700/50
                   rounded-full bg-slate-900/50 hidden md:block"
        style={{
          transform: 'translateX(-50%)',
          willChange: 'transform',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, -4, 0],
        }}
        transition={{
          opacity: { duration: 1, ease: 'easeOut' },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <ul className="flex gap-8 text-sm tracking-wider items-center">
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="text-slate-300 hover:text-white dark:text-white transition-colors duration-300"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ModeToggle />
          </motion.li>
        </ul>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 backdrop-blur-lg border border-slate-700/50 rounded-2xl bg-slate-900/50">
          <Link
            href="/verse"
            className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Verse
          </Link>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="mt-2 overflow-hidden"
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-6 py-4 backdrop-blur-lg border border-slate-700/50 rounded-2xl bg-slate-900/50">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : -20,
                  }}
                  transition={{
                    delay: isOpen ? index * 0.1 : 0,
                    duration: 0.3,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-slate-300 hover:text-white dark:text-white transition-colors duration-300 text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
