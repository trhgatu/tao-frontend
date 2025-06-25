// src/app/loading.tsx
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className={cn('h-6 w-6 animate-spin text-muted-foreground')} />
      <span className="sr-only">Đang tải...</span>
    </div>
  );
}
