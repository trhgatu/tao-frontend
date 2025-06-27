import { RealmTransitionButton } from '@/components/shared';

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fdf9f5] text-[#2b2b2b] font-serif relative">
      <nav className="px-6 py-4 border-b border-gray-300 flex justify-between">
        <h1 className="text-xl font-bold">Verse Realm</h1>
        <RealmTransitionButton to="/forge" label="Switch to Forge" />
      </nav>
      <main className="px-6 py-8">{children}</main>
    </div>
  );
}
