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
        className={`fixed top-1/2 transform -translate-y-1/2 z-30 px-4 py-2 rounded-md
         border  transition-all duration-300
        ${align === 'left' ? 'left-6' : 'right-6'}
        hover:scale-105`}
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
