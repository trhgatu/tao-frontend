'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function RealmSliderTransition({ children }: Props) {
  const pathname = usePathname();

  const isVerse = pathname.startsWith('/verse');

  const variants = {
    initial: {
      x: isVerse ? '100%' : '-100%',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: isVerse ? '-100%' : '100%',
      opacity: 0,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] bg-background"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
