import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, templates } from '@/features/forge/craftings/data-mock';
import {
  IconArrowLeft,
  IconExternalLink,
  IconStar,
  IconBrandGithub,
} from '@tabler/icons-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CraftingDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const item =
    projects.find((p) => p.slug === slug) ||
    templates.find((t) => t.slug === slug);
  if (!item) notFound();

  const isProject = !!projects.find((p) => p.slug === slug);
  const featured = !!item.featured;
  const status = item.status;
  const hasGithub = !!item.repo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-red-950 py-12">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Link
          href="/forge/craftings"
          className="flex items-center gap-2 text-orange-400 hover:underline mb-8"
        >
          <IconArrowLeft className="w-4 h-4" /> Back to Craftings
        </Link>

        {/* HEADER */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            {featured && (
              <span className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-700 text-white px-4 py-1 rounded-full text-xs font-semibold shadow animate-pulse">
                <IconStar size={16} className="mr-1" />
                Featured
              </span>
            )}
            <span className="px-3 py-1 bg-zinc-800 text-orange-300 rounded-full text-xs">
              {isProject ? 'Project' : 'Foundation'}
            </span>
            {item.category && (
              <span className="px-3 py-1 bg-zinc-800 text-red-300 rounded-full text-xs">
                {item.category}
              </span>
            )}
            {item.year && (
              <span className="px-3 py-1 bg-zinc-900 text-gray-300 rounded-full text-xs">
                {item.year}
              </span>
            )}
            {status && (
              <span className="px-3 py-1 bg-zinc-900 text-blue-400 rounded-full text-xs">
                {status}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {item.name}
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tech?.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-700 text-gray-200 rounded-full text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        {item.image && (
          <div className="mb-8 rounded-xl overflow-hidden aspect-video bg-zinc-900 shadow-lg border-2 border-zinc-800">
            <Image
              src={item.image}
              alt={item.name}
              width={800}
              height={400}
              className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* DESCRIPTION */}
        <div className="prose prose-invert max-w-none text-gray-200 mb-8 text-lg">
          {item.description}
        </div>

        {/* Liên kết & Thao tác */}
        {(item.link || hasGithub) && (
          <div className="flex flex-wrap items-center gap-4 text-sm mt-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg shadow-lg hover:from-orange-700 hover:to-red-700 transition-all"
              >
                <IconExternalLink size={18} /> Demo / Website
              </a>
            )}
            {hasGithub && (
              <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-white rounded-lg shadow hover:bg-zinc-700 transition"
              >
                <IconBrandGithub size={18} /> GitHub
              </a>
            )}
          </div>
        )}

        {/* Tùy chọn: Section tính năng nổi bật, Ảnh phụ, changelog... */}
        {/* ... */}
      </div>
    </div>
  );
}
