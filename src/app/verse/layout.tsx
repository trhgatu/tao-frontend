import { VerseFooter, VerseNavbar } from '@/components/shared/verse';
import { VerseAudioToggle } from '@/features/verse/home/components';
export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerseNavbar />
      <main className="min-h-screen w-full">{children}</main>
      <VerseFooter />
      <VerseAudioToggle />
    </>
  );
}
