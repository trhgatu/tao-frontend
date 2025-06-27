'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { RealmTransitionLayer } from './RealmTransitionLayer';

export function RealmSwitcherButton({
  to,
  from,
  align = 'right',
}: {
  to: string;
  from: 'verse' | 'forge';
  align?: 'left' | 'right';
}) {
  const router = useRouter();
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = () => {
    setShowTransition(true);
  };

  const getMessage = () => {
    return from === 'verse'
      ? 'System is initialize...'
      : 'Jumping into my verse...';
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`text-sm px-3 py-1 rounded-md border ${
          align === 'left' ? 'ml-4' : 'mr-4'
        }`}
      >
        {from === 'verse' ? 'Enter Forge' : 'Back to Verse'}
      </button>

      <AnimatePresence>
        {showTransition && (
          <RealmTransitionLayer
            message={getMessage()}
            onComplete={() => router.push(to)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
