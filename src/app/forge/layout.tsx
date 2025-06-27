import { RealmTransitionButton } from '@/components/shared';

export default function ForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-mono relative">
      <nav className="px-6 py-4 border-b border-gray-700 flex justify-between">
        <RealmTransitionButton to="/" label="Back to Verse" align="left" />
        <h1 className="text-xl font-bold text-red-500">Forge Realm</h1>
      </nav>
      <main className="px-6 py-8">{children}</main>
    </div>
  );
}
