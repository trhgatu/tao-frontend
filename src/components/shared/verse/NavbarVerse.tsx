'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ModeToggle } from '@/components/shared/ModeToggle';

export function VerseNavbar() {
  return (
    <motion.nav
      className="fixed top-6 left-1/2 z-50 px-8 py-3
                      backdrop-blur-lg border
                     rounded-full"
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
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/verse/blog"
            className=" dark:text-white transition-colors duration-300"
          >
            Blog
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/verse/memories"
            className=" dark:text-white transition-colors duration-300"
          >
            Memories
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/verse/journal"
            className=" dark:text-white transition-colors duration-300"
          >
            Journal
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/verse/timeline"
            className=" dark:text-white transition-colors duration-300"
          >
            Timeline
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ModeToggle />
        </motion.li>
      </ul>
    </motion.nav>
  );
}
