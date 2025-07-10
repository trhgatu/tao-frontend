import {
  FeaturedBlog,
  HeroVerseEntry,
  JournalPreview,
  MemoriesPreview,
  QuotesPreview,
} from '@/features/verse/home/components';

// src/app/verse/page.tsx
export default function VerseHome() {
  return (
    <section>
      <HeroVerseEntry />
      <FeaturedBlog />
      <QuotesPreview />
      <MemoriesPreview />
      <JournalPreview />
    </section>
  );
}
