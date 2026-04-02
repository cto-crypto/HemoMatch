import type {Metadata, Viewport} from 'next';
import { Inter, Noto_Sans_Arabic, Noto_Nastaliq_Urdu } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { NavigationProvider } from '@/context/NavigationContext';
import { ThemeProvider } from '@/context/ThemeContext';
import AppShell from '@/components/layout/AppShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const urduSans = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-urdu-sans',
  display: 'swap',
  weight: ['400', '700', '900'],
});

const urduNastaliq = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  variable: '--font-urdu-nastaliq',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'HemoMatch App',
  description: 'Premium mobile-first blood compatibility tool.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'HemoMatch',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${urduSans.variable} ${urduNastaliq.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-slate-50 dark:bg-slate-950">
        <ThemeProvider>
          <LanguageProvider>
            <NavigationProvider>
              <AppShell>
                {children}
              </AppShell>
            </NavigationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
