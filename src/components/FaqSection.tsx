'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'How does Git handle large, multi-gigabyte audio files?',
    a: 'Syncromancer separates the session manifest from the binary audio payload. The session schema, track metadata, plugin parameters, and MIDI notes are stored directly in Git as declarative JSON. Large 24-bit/96kHz WAV stems are stored in high-performance SeaweedFS or Git LFS with content-addressable SHA-256 hashes, keeping your Git repo lightweight and fast.',
  },
  {
    q: 'Can our studio self-host Syncromancer on Kubernetes?',
    a: 'Yes! Syncromancer is fully cloud-native. We provide a complete production Helm chart that deploys the Portal web application, SeaweedFS distributed audio storage, Supabase/PostgreSQL metadata store, OpenLDAP authentication, and Ingress with automated TLS certificates.',
  },
  {
    q: 'Which Kubernetes storage engine should we choose (OpenEBS vs Rook/Ceph vs Longhorn)?',
    a: 'For maximum throughput and microsecond seek latencies on dedicated NVMe drives, we recommend OpenEBS Mayastor. For distributed multi-rack enterprise reliability with self-healing, choose Rook/Ceph. For lightweight Kubernetes setups or smaller edge studio clusters with automated S3 snapshots, choose Longhorn.',
  },
  {
    q: 'How does analog hardware re-amping work in Syncromancer?',
    a: 'When an engineer routes an archival dry stem out through their physical audio interface into hardware gear (e.g. an Ampeg tube amp or Roland Space Echo tape loop), they record the return back into Syncromancer. The engineer records the round-trip latency compensation (e.g. 4.2ms) into the layer metadata, ensuring the re-amp sits in phase with the rest of the mix.',
  },
  {
    q: 'Are the virtual synthesizers and studio effects truly open source?',
    a: 'Yes! Syncromancer features Cardinal (DISTRHO virtual modular synthesizer based on VCV Rack), Dexed FM (Yamaha DX7 emulation), TR-808 analog drums, and an open-source pedalboard suite (Dattorro Plate Reverb, Moog 24dB Ladder Lowpass, Ping-Pong Delay, Bitcrusher, Tube Overdrive) and WAM 2.0 Web Audio Modules.',
  },
  {
    q: 'Where is the active studio app located?',
    a: 'The live DAW portal is hosted at https://portal.syncromancer.com/. You can sign in with your enterprise credentials, SSO / OAuth provider, or launch a sandbox session immediately in your browser.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-studio-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Everything you need to know about DAW as a Service, Git audio collaboration, and self-hosting.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-studio-900 border border-studio-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-studio-850/50 transition-colors"
                >
                  <span className="font-bold text-sm text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-studio-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
