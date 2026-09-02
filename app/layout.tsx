import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'SL Coaching — Accompagnement Premium & Physiologie Appliquée',
  description:
    'Construisez votre physique avec un coaching sur-mesure de haute précision. Protocoles personnalisés, calibrage des macros et analyse biomécanique.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
