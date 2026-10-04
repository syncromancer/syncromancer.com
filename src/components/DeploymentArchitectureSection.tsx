'use client';

import React from 'react';
import {
  Server,
  HardDrive,
  Lock,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
} from 'lucide-react';

export const DeploymentArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-studio-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-semibold mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>CLOUD-SCALE STUDIO PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered for Flawless Audio Performance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Powered by high-throughput distributed storage, client-side WebAssembly DSP engines,
            and enterprise-grade session encryption.
          </p>
        </div>

        {/* 4-Tier Architecture Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Tier 1: Client Edge */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider block mb-1">
                Tier 1: Client Edge (Permissive)
              </span>
              <h3 className="text-base font-bold text-white mb-2">Web Audio &amp; Yjs CRDT</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                64-bit float multi-track mixing, Tone.js transport, WAM 2.0 / CLAP plugin hosts,
                WebCodecs / libflac.js export, and Google Magenta neural models. Permissive client
                stack (MIT / Apache / BSD)—zero copyleft binaries in the browser.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-cyan-400">
              Permissive client bundle &bull; 0% Copyleft
            </div>
          </div>

          {/* Tier 2: Server-Side Carla Render Cluster */}
          <div className="bg-studio-900 border border-rose-900/40 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-rose-950 text-rose-300 border-b border-l border-rose-800/60 font-mono text-[9px] uppercase font-bold rounded-bl">
              Carla Cloud DSP (Beta)
            </div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-rose-400 uppercase font-bold tracking-wider block mb-1">
                Tier 2: Cloud Render Nodes
              </span>
              <h3 className="text-base font-bold text-white mb-2">Headless Carla Host (Beta)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Containerized headless Carla (by FalkTX) audio nodes running copyleft engines
                (Cardinal modular, Surge XT, Vitalium, ZynAddSubFX). Renders lossless audio layers server-side directly to SeaweedFS.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-rose-400">
              Isolated Linux render workers &bull; In active development
            </div>
          </div>

          {/* Tier 3: Storage */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider block mb-1">
                Tier 3: Distributed Storage
              </span>
              <h3 className="text-base font-bold text-white mb-2">SeaweedFS Cluster</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-throughput distributed object store with master, filer, and volume nodes.
                Delivers blazingly fast seek times and sequential reads for multi-gigabyte 24-bit/96kHz stems and Carla bounce takes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-purple-400">
              O(1) disk lookups &amp; POSIX filer
            </div>
          </div>

          {/* Tier 4: Metadata & Auth */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                Tier 4: Enterprise State
              </span>
              <h3 className="text-base font-bold text-white mb-2">Supabase &amp; LDAP</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                PostgreSQL session manifests, layer parameter JSON, Yjs live awareness sync, and enterprise
                LDAP/OAuth group mapping to DAW roles with immutable SHA-256 audit guarantees.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-emerald-400">
              Enterprise RBAC &amp; Realtime sync
            </div>
          </div>
        </div>

        {/* 3 Pillars of Studio Audio Reliability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-studio-900 border border-studio-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Sub-Millisecond Buffering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Web Audio Worklets operate on a separate high-priority rendering thread, eliminating UI stutter
                and jitter even during heavy automation passes.
              </p>
            </div>
          </div>

          <div className="p-6 bg-studio-900 border border-studio-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-3">
                <Activity className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Lossless Stem Streaming</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fast sequential streaming built for uncompressed 24-bit/96kHz WAV files ensures immediate
                playback response across 64+ simultaneous channels.
              </p>
            </div>
          </div>

          <div className="p-6 bg-studio-900 border border-studio-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Cryptographic Stem Integrity</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every dry recording and bounce is anchored by SHA-256 content verification, guaranteeing that
                collaborative edits never overwrite or corrupt your master recordings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
