/* eslint-disable */

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    description: string;
    image: string;
    tech: string[];
    link?: string;
    repo?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
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
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-zinc-200 hover:border-orange-500 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 px-4 py-4 md:w-[320px] dark:border-zinc-700 shadow-lg hover:scale-105 transition"
            key={item.name}
          >
            <div className="flex flex-col gap-3">
              <Image
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full h-36 object-cover mb-2 border border-zinc-700"
                width={200}
                height={200}
              />
              <h3 className="text-lg font-bold text-orange-400">{item.name}</h3>
              <p className="text-sm text-zinc-300">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-orange-800/80 text-yellow-200 rounded px-2 py-0.5 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-3">
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
