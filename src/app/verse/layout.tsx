import { VerseFooter, VerseNavbar } from '@/components/shared/verse';
import { SparklesCore } from '@/components/ui/sparkles';
import { VerseAudioToggle } from '@/features/verse/home/components';
import { ReactQueryProvider } from '@/app/providers/react-query-provider';
import { LanguageSelector } from '@/components/shared';

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <div className="relative z-10">
        <VerseNavbar />
        <main className="min-h-screen w-full">{children}</main>
        <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
          <LanguageSelector />
        </div>
        <VerseFooter />
      </div>

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
    </ReactQueryProvider>
  );
}
