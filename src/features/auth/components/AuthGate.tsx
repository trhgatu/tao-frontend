'use client';
// src/features/auth/components/AuthGate.tsx
import { useEffect } from 'react';
import { useAuth } from '../hooks/use-auth';

export const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { restoreAuth, isInitialized } = useAuth();

  useEffect(() => {
    restoreAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isInitialized) return <p>Loading...</p>;

  return <>{children}</>;
};
