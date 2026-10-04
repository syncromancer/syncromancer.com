'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'How does Syncromancer handle large, multi-gigabyte audio files?',
    a: 'Syncromancer separates the session manifest from the binary audio payload. The session schema, track metadata, plugin parameters, and MIDI notes are stored directly in Supabase as declarative JSON. Large 24-bit/96kHz WAV stems are stored in high-throughput SeaweedFS distributed object storage with content-addressable SHA-256 hashes, keeping session sync instantaneous and audio playback stutter-free.',
  },
  {
    q: 'Can I use my existing studio hardware, audio interfaces, and MIDI controllers?',
    a: 'Yes! Syncromancer connects directly with any standard USB or Thunderbolt audio interface, MIDI keyboard, or hardware synthesizer via standard Web Audio and Web MIDI with zero driver installations required.',
  },
  {
    q: 'How does Syncromancer stream multi-gigabyte audio stems without latency?',
    a: 'Syncromancer pairs client-side WebAudio Worklets with high-throughput SeaweedFS distributed audio storage. Audio buffers stream with microsecond seek latencies, delivering smooth, sample-accurate 24-bit/96kHz multi-track playback without dropouts.',
  },
  {
    q: 'How does analog hardware re-amping work in Syncromancer?',
    a: 'When an engineer routes an archival dry stem out through their physical audio interface into hardware gear (e.g. an Ampeg tube amp or Roland Space Echo tape loop), they record the return back into Syncromancer. The engineer records the round-trip latency compensation (e.g. 4.2ms) into the layer metadata, ensuring the re-amp sits in phase with the rest of the mix.',
  },
  {
    q: 'How does Syncromancer host GPL engines like Cardinal and Surge XT without client licensing restrictions?',
    a: 'Copyleft and GPL engines (including Cardinal modular racks, Surge XT, Vitalium, ZynAddSubFX, and Calf studio gear) are routed through server-side headless Carla render nodes in our Linux cloud (currently in private beta). Your browser sends lightweight MIDI and parameter manifests, and the cloud nodes render the audio server-side into lossless SeaweedFS stems. Because zero GPL binaries are distributed to the browser, your client DAW bundle remains permissively licensed under MIT, Apache-2.0, and BSD standards.',
  },
  {
    q: 'How does Google Magenta AI assist with music production?',
    a: 'Syncromancer embeds Google Magenta machine learning models (such as Drums RNN, MusicVAE, and Groove MIDI) directly into the DAW. Magenta serves as an intelligent musical co-pilot: generating neural drum fills, interpolating polyphonic melodies, and humanizing MIDI velocity and micro-timing without cloud round-trip delay.',
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
            Everything you need to know about DAW as a Service, real-time cloud collaboration, and studio workflows.
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
