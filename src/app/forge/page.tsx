// app/forge/page.tsx
import ForgeHome from '@/features/forge/home/pages/page';
import { ForgeAudioToggle } from '@/features/forge/home/components';

export default function Page() {
  return (
    <>
      <ForgeHome />
      <ForgeAudioToggle />
    </>
  );
}
