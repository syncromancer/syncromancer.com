import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: 'Syncromancer | Collaborative DAW as a Service (DaaS)',
    description:
      'The modern cloud DAW for collaborative music production with Supabase session sync, SeaweedFS lossless storage, and Cardinal modular synths.',
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
