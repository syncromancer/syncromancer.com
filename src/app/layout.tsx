import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://syncromancer.com'),
  title: 'Syncromancer | Collaborative DAW as a Service (DaaS)',
  description:
    'Studio-grade DAW as a Service. Collaborate in real-time with immutable dry stems, Supabase session sync, SeaweedFS high-throughput audio storage, Cardinal modular synths, and outboard hardware re-amping.',
  keywords: [
    'DAW as a Service',
    'DaaS',
    'Syncromancer',
    'Cloud DAW',
    'Supabase Audio Sync',
    'SeaweedFS Stem Storage',
    'Open Source Synths',
    'Cardinal Modular',
    'Dexed FM',
    'Hardware Re-Amping',
    'Collaborative Audio',
    'Rhythm Necromancy',
    'Arcane Audio Technology',
  ],
  icons: {
    icon: '/syncromancer-emblem.jpg',
    shortcut: '/syncromancer-emblem.jpg',
    apple: '/syncromancer-emblem.jpg',
  },
  openGraph: {
    title: 'Syncromancer | Raising Rhythms From The Dead',
    description:
      'The modern cloud DAW for collaborative music production — raising rhythms from the dead with Supabase session sync, SeaweedFS lossless storage, and Cardinal modular synths.',
    url: 'https://syncromancer.com',
    siteName: 'Syncromancer',
    images: [
      {
        url: '/rhythm-necromancer-hero.jpg',
        width: 1280,
        height: 720,
        alt: 'Syncromancer - Raising Rhythms From The Dead',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-studio-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
