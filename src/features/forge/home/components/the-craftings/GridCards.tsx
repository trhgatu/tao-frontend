import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Project } from '@/types';

interface GridCardsProps {
  items: Project[];
  className?: string;
}

export const GridCards = ({ items, className }: GridCardsProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4',
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item._id}
          className="relative w-full shrink-0 rounded-2xl border border-zinc-200 hover:border-orange-500 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 px-6 py-5 dark:border-zinc-700 shadow-lg hover:scale-105 transition"
        >
          <div className="flex flex-col gap-3">
            <Link href={`/forge/craftings/${item.slug}`}>
              <Image
                src={item.image ?? 'https://placehold.co/600x400.png'}
                alt={item.name}
                className="rounded-lg w-full h-36 object-cover mb-2 border border-zinc-700"
                width={200}
                height={200}
              />
              <h3 className="text-lg font-bold text-orange-400">{item.name}</h3>
              <p className="text-sm text-zinc-300">{item.description}</p>
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
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
