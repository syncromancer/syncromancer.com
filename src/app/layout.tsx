import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syncromancer | DAW as a Service (DaaS) & Git-Native Music Collaboration',
  description:
    'Studio-grade DAW as a Service. Collaborate through Git Pull Requests with immutable dry stems, deterministic open-source DSP, Cardinal modular racks, and outboard hardware re-amping.',
  keywords: [
    'DAW as a Service',
    'DaaS',
    'Syncromancer',
    'Cloud DAW',
    'Git for Audio',
    'Pull Request Music',
    'Open Source Synths',
    'Cardinal Modular',
    'Dexed FM',
    'Hardware Re-Amping',
    'Collaborative Audio',
  ],
  openGraph: {
    title: 'Syncromancer | DAW as a Service (DaaS)',
    description:
      'The modern cloud DAW for collaborative music production with Git-native workflows, Cardinal modular synths, and enterprise infrastructure.',
    url: 'https://syncromancer.com',
    siteName: 'Syncromancer',
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
