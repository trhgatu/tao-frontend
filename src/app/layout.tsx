// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/shared/Navbar';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
/* import { ReduxProvider } from '@/store/provider'; */

const inter = Inter({ subsets: ['vietnamese'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`min-h-screen font-sans ${inter.variable} bg-white text-gray-900`}
      >
        {/* <ReduxProvider> */}
        <Navbar />
        <main className="px-4 md:px-8 py-6">{children}</main>
        <Toaster position="top-right" />
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
