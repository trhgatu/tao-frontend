import { NavbarForge } from '@/components/shared/forge';

export default function ForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full bg-background overflow-hidden">
      <NavbarForge />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
    </div>
  );
}
