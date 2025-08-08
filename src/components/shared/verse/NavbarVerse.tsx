'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/shared/ModeToggle';
import { usePathname } from 'next/navigation';

export function VerseNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/verse/blog', label: 'Blog' },
    { href: '/verse/memories', label: 'Memories' },
    { href: '/verse/journal', label: 'Journal' },
    { href: '/verse/timeline', label: 'Timeline' },
    { href: '/verse/about', label: 'About' },
  ];

  // Đóng menu mobile khi nhấn ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + '/');

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 z-50 px-4 py-2 md:px-6 md:py-3
                   backdrop-blur-lg border border-slate-700/50
                   rounded-full bg-slate-900/50 hidden md:block"
        style={{ transform: 'translateX(-50%)', willChange: 'transform' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 1, ease: 'easeOut' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        aria-label="Verse primary navigation"
      >
        <ul className="flex items-center gap-6 md:gap-8 text-sm tracking-wider">
          {/* Logo dạng chữ */}
          <li className="pr-4 md:pr-6 mr-2 md:mr-4 border-r border-slate-700/40">
            <Link
              href="/verse"
              className="relative inline-block select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500 rounded-md
                         text-lg font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              aria-label="Go to Verse home"
            >
              Verse
            </Link>
          </li>

          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={[
                  'px-1 py-1 rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500',
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white dark:text-white',
                ].join(' ')}
                aria-current={isActive(item.href) ? 'page' : undefined}
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
        aria-label="Verse mobile navigation"
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 backdrop-blur-lg border border-slate-700/50 rounded-2xl bg-slate-900/50">
          {/* Logo chữ mobile */}
          <Link
            href="/verse"
            className="text-lg font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500 rounded-md"
            aria-label="Go to Verse home"
            onClick={() => setIsOpen(false)}
          >
            Verse
          </Link>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 text-slate-300 hover:text-white transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="verse-mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="verse-mobile-menu"
          className="mt-2 overflow-hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-6 py-4 backdrop-blur-lg border border-slate-700/50 rounded-2xl bg-slate-900/50">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{
                    delay: isOpen ? index * 0.06 : 0,
                    duration: 0.25,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      'block py-2 text-lg rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500',
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white dark:text-white',
                    ].join(' ')}
                    aria-current={isActive(item.href) ? 'page' : undefined}
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
