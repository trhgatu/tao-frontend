// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { ReduxProvider } from '@/store/provider';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { AudioProvider } from '@/components/shared/forge/components/AudioContextProvider';
import { ReactQueryProvider } from '@/app/providers/react-query-provider';

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
      <body className={`min-h-screen font-sans ${inter.variable}`}>
        <ReduxProvider>
          <ReactQueryProvider>
            <AudioProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <main>{children}</main>
              </ThemeProvider>
            </AudioProvider>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
