'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandInstagram,
} from '@tabler/icons-react';

const year = new Date().getFullYear();

export const ForgeFooter = () => (
  <footer className="relative w-full bg-gradient-to-t from-black/90 via-[#21160f]/80 to-transparent backdrop-blur-md border-t border-yellow-900/40 font-serif">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-900 via-orange-700 to-red-700 flex items-center justify-center shadow-lg border-2 border-yellow-800 ring-2 ring-orange-400/40"
          aria-hidden="true"
        >
          <span className="text-3xl font-black text-yellow-200 drop-shadow-[0_0_8px_rgba(255,140,0,0.7)]">
            F
          </span>
        </div>
        <span className="font-black text-xl md:text-2xl text-yellow-100 tracking-widest drop-shadow-[0_0_6px_rgba(255,140,0,0.5)] select-none">
          The Eternal Forge
        </span>
      </div>

      {/* Navigation */}
      <nav
        className="flex flex-wrap gap-5 md:gap-8 text-yellow-200/80 font-medium text-sm md:text-base tracking-wider"
        aria-label="Footer Navigation"
      >
        <Link href="/" passHref>
          <span className="hover:text-orange-300 hover:underline transition cursor-pointer">
            Home
          </span>
        </Link>
        <Link href="/about" passHref>
          <span className="hover:text-orange-300 hover:underline transition cursor-pointer">
            Lore
          </span>
        </Link>
        <Link href="/projects" passHref>
          <span className="hover:text-orange-300 hover:underline transition cursor-pointer">
            Creations
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span className="hover:text-orange-300 hover:underline transition cursor-pointer">
            Summon
          </span>
        </Link>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/trhgatu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-yellow-300 hover:text-white transition"
        >
          <IconBrandGithub size={26} />
        </a>
        <a
          href="https://instagram.com/th_atu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="text-yellow-300 hover:text-pink-600 transition"
        >
          <IconBrandInstagram size={26} />
        </a>
        <a
          href="https://facebook.com/trhgatu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-yellow-300 hover:text-sky-600 transition"
        >
          <IconBrandFacebook size={26} />
        </a>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="border-t border-yellow-900/40 py-4 px-4 text-center text-xs text-yellow-200/60 bg-black/40 backdrop-blur-sm font-mono tracking-wide">
      <span className="inline-flex items-center justify-center gap-1">
        &copy; {year} The Eternal Forge. Forged in code and fire.
        <span className="text-orange-400 animate-pulse">🔥</span>
        <span className="text-yellow-300">
          May your code be ever unbreakable.
        </span>
      </span>
    </div>
  </footer>
);
