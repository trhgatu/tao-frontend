'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: Project[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      );

      const duration =
        speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s';
      containerRef.current.style.setProperty('--animation-duration', duration);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            key={item._id}
            className="relative w-[280px] md:w-[320px] shrink-0 rounded-2xl border border-zinc-700 hover:border-orange-500 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-4 shadow-lg hover:scale-[1.03] transition"
          >
            {/* Wrapper clickable content */}
            <Link
              href={`/forge/craftings/${item.slug}`}
              className="group flex flex-col gap-3"
            >
              <Image
                src={item.image ?? 'https://placehold.co/600x400.png'}
                alt={item.name}
                className="rounded-lg w-full h-36 object-cover mb-2 border border-zinc-700 group-hover:opacity-90 transition"
                width={400}
                height={144}
              />
              <h3 className="text-lg font-bold text-orange-400">{item.name}</h3>
              <p className="text-sm text-zinc-300 line-clamp-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-orange-800/80 text-yellow-200 rounded px-2 py-0.5 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>

            {/* External Links */}
            <div className="flex gap-3 mt-4">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:underline"
                >
                  Demo
                </a>
              )}
              {item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:underline"
                >
                  Code
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
