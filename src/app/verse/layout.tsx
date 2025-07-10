import { VerseFooter, VerseNavbar } from '@/components/shared/verse';
import { SparklesCore } from '@/components/ui/sparkles';
import { VerseAudioToggle } from '@/features/verse/home/components';

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Content Layer */}
      <div className="relative z-10">
        <VerseNavbar />
        <main className="min-h-screen w-full">{children}</main>
        <VerseFooter />
      </div>

      {/* Sparkles Overlay - Above everything */}
      <div className="fixed inset-0 w-full h-full z-50 pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <VerseAudioToggle />
    </>
  );
}
