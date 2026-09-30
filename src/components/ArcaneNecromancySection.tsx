'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Zap,
  Activity,
  Flame,
  Radio,
  Cpu,
  Layers,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const ArcaneNecromancySection: React.FC = () => {
  return (
    <section id="arcane" className="py-24 bg-studio-950 relative overflow-hidden border-t border-b border-studio-800/80">
      {/* Background Spectral Atmosphere Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-purple-900/20 via-cyan-900/15 to-blue-900/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300 text-xs font-mono font-semibold mb-4 shadow-lg shadow-purple-950/50">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>THE OCCULT AUDIO MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Raising Rhythms{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              From The Dead.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Where ancient sonic conjuration meets cloud-native sound engineering. Syncromancer breathes
            vitality back into buried takes, dormant tape sessions, and forgotten drum transients with
            declarative Supabase manifests and high-throughput SeaweedFS stem streams.
          </p>
        </div>

        {/* Featured Visual Grid: Hero Artwork & Arcane Sigil */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Cinematic Visual: The Rhythm Necromancer (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-purple-500/30 bg-studio-900/80 backdrop-blur-xl p-3 sm:p-5 shadow-2xl shadow-purple-950/40 relative overflow-hidden group">
            {/* Ambient Corner Runes */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-studio-950/90 border border-purple-500/40 px-3 py-1.5 rounded-xl font-mono text-[11px] text-purple-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>RITUAL: TRANSIENT CONJURATION</span>
            </div>
            <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5 bg-studio-950/90 border border-cyan-500/40 px-3 py-1.5 rounded-xl font-mono text-[11px] text-cyan-300 backdrop-blur-md">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>44.1kHz • 96kHz LOSSLESS</span>
            </div>

            {/* Artwork Frame */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-studio-800/80 bg-black group-hover:border-purple-500/50 transition-all duration-500">
              <Image
                src="/rhythm-necromancer-hero.jpg"
                alt="The Rhythm Necromancer raising audio waveforms and beats from the dead in an arcane studio"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-transparent to-transparent opacity-80" />

              {/* Bottom In-Image Telemetry Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-studio-950/85 border border-studio-800/90 backdrop-blur-md text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-cyan-400 font-bold">conjure://rhythm-matrix</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-emerald-400">Google Magenta AI (Neural Drums Synced)</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-300">
                  <Flame className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  <span>Cardinal Modular: 96kHz</span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <p className="italic">
                The Rhythm Necromancer summons spectral drum waveforms, Cardinal modular voltage (FalkTX), and Google Magenta neural grooves from the digital ether.
              </p>
              <span className="font-mono text-[11px] text-cyan-400">Fig 1.1: The Resurrection Sanctum</span>
            </div>
          </div>

          {/* Secondary Visual: Arcane Sigil Logo (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-cyan-500/30 bg-studio-900/80 backdrop-blur-xl p-6 shadow-2xl shadow-cyan-950/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center justify-between pb-3 border-b border-studio-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold">
                  Official Insignia
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">SIGIL-01</span>
            </div>

            {/* Emblem Image Container */}
            <div className="my-6 relative w-full aspect-square max-w-[260px] mx-auto rounded-2xl overflow-hidden border border-cyan-500/40 shadow-xl shadow-cyan-500/10 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-500 bg-black">
              <Image
                src="/syncromancer-logo.jpg"
                alt="Syncromancer Official Arcane Audio Logo"
                fill
                sizes="(max-width: 1024px) 80vw, 33vw"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                <span>The Transmutation Sigil</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Encircled by Fourier frequency spectrums and ancient summoning glyphs, the cyber-skull
                symbolizes the synthesis between biological musicianship and infinite digital resurrection.
              </p>
              <div className="p-3 rounded-xl bg-studio-950 border border-studio-800 font-mono text-[11px] text-slate-300 flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Summoning Protocol:</span>
                  <span className="text-cyan-400 font-bold">WebAudio 2.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Artifact State:</span>
                  <span className="text-emerald-400 font-bold">Immutable Dry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Rhythm Necromancy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl border border-studio-800 bg-studio-900/60 hover:border-purple-500/50 hover:bg-studio-900 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>I. Resurrection of Buried Takes</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              No performance is ever truly dead. Raw vocal runs, acoustic drum transients, and direct-in
              bass lines are locked into Supabase manifests with cryptographic SHA-256 hashes. Recover
              dormant takes from any era without generational loss.
            </p>
            <div className="text-xs font-mono text-purple-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Non-Destructive Stem Guarantee</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl border border-studio-800 bg-studio-900/60 hover:border-cyan-500/50 hover:bg-studio-900 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>II. Occult Modular Alchemy & AI</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Channel the otherworldly modular voltage of the mighty <a href="https://cardinal.kx.studio" target="_blank" rel="noopener noreferrer" className="text-rose-400 underline font-bold hover:text-rose-300">Cardinal</a> (by FalkTX / DISTRHO) paired with <a href="https://github.com/magenta/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline font-bold hover:text-emerald-300">Google Magenta</a> neural AI. Morph latent space drum grooves and resurrect dormant musical ideas into full polyphonic arrangements.
            </p>
            <div className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Cardinal Modular WASM & Magenta RNN</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl border border-studio-800 bg-studio-900/60 hover:border-blue-500/50 hover:bg-studio-900 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>III. Eldritch Zero-Latency Streams</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Summon 40+ track sessions instantaneously from distributed SeaweedFS clusters. With
              dedicated WebAudio Worklets, multi-gigabyte lossless stems stream into your browser tab with
              imperceptible seek latencies and zero audio dropouts.
            </p>
            <div className="text-xs font-mono text-blue-300 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-blue-400" />
              <span>Microsecond SeaweedFS Buffer Caching</span>
            </div>
          </div>
        </div>

        {/* Callout Action Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-950/60 via-studio-900 to-cyan-950/60 border border-studio-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-purple-500/50 shadow-xl shadow-purple-500/20 shrink-0 bg-black">
              <Image
                src="/syncromancer-emblem.jpg"
                alt="Syncromancer Emblem"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-base sm:text-lg">
                Ready to resurrect your dormant audio sessions?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Launch the studio portal immediately with no installation or credit card required.
              </p>
            </div>
          </div>

          <a
            href="https://portal.syncromancer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 transition-all shrink-0"
          >
            <span>Summon Studio Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
