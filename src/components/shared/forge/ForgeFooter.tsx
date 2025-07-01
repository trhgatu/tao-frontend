'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandTwitter,
} from '@tabler/icons-react';

export const ForgeFooter = () => (
  <footer className="relative w-full bg-gradient-to-t from-black/90 via-[#21160f]/80 to-transparent backdrop-blur-md border-t border-yellow-900/40 font-serif">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-900 via-orange-700 to-red-700 flex items-center justify-center shadow-lg border-2 border-yellow-800 ring-2 ring-orange-400/40">
          <span className="text-3xl font-black text-yellow-200 drop-shadow-[0_0_8px_rgba(255,140,0,0.7)]">
            F
          </span>
        </div>
        <span className="font-black text-xl md:text-2xl text-yellow-100 tracking-widest drop-shadow-[0_0_6px_rgba(255,140,0,0.5)] select-none">
          The Eternal Forge
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-5 md:gap-8 text-yellow-200/80 font-medium text-sm md:text-base tracking-wider">
        <Link href="/">
          <span className="hover:text-orange-300 transition">Home</span>
        </Link>
        <Link href="/about">
          <span className="hover:text-orange-300 transition">Lore</span>
        </Link>
        <Link href="/projects">
          <span className="hover:text-orange-300 transition">Creations</span>
        </Link>
        <Link href="/contact">
          <span className="hover:text-orange-300 transition">Summon</span>
        </Link>
      </nav>

      {/* Socials */}
      <div className="flex gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-yellow-300 hover:text-white transition"
        >
          <IconBrandGithub size={26} />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="text-yellow-300 hover:text-indigo-400 transition"
        >
          <IconBrandDiscord size={26} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-yellow-300 hover:text-sky-400 transition"
        >
          <IconBrandTwitter size={26} />
        </a>
      </div>
    </div>

    {/* Bottom line, copyright */}
    <div className="border-t border-yellow-900/40 py-4 px-4 text-center text-xs text-yellow-200/60 bg-black/40 backdrop-blur-sm font-mono tracking-wide">
      <span className="inline-flex items-center justify-center gap-1">
        &copy; {new Date().getFullYear()} The Eternal Forge. Forged in code and
        fire.
        <span className="text-orange-400 animate-pulse">🔥</span>
        <span className="text-yellow-300">
          May your code be ever unbreakable.
        </span>
      </span>
    </div>
  </footer>
);
