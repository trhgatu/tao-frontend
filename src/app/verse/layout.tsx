import RealmSliderTransition from '@/components/shared/RealmSliderTransition';
import { RealmSwitcherButton } from '@/components/shared/RealmSwitcherButton';

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RealmSliderTransition>
      <RealmSwitcherButton />
      <main className="min-h-screen flex items-center justify-center mx-auto px-4">
        {children}
      </main>
    </RealmSliderTransition>
  );
}
