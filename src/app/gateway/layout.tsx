import { SparklesCore } from '@/components/ui/sparkles';

export default function GatewayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={40}
        className="absolute inset-0 w-full h-full"
        particleColor="#ffffff"
      />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
    </div>
  );
}
