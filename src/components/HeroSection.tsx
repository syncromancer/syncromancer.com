'use client';

import React from 'react';
import {
  Play,
  GitPullRequest,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  Sliders,
  Terminal,
  Activity,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>DAW AS A SERVICE (DaaS)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-900 border border-studio-800 text-slate-300 text-xs font-mono">
            <GitPullRequest className="w-3.5 h-3.5 text-blue-400" />
            <span>GIT PR-DRIVEN AUDIO WORKFLOW</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-900 border border-studio-800 text-slate-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-rose-400" />
            <span>CARDINAL MODULAR & DEXED FM</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            The Collaborative{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              DAW as a Service
            </span>{' '}
            for Real Musicians.
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Record immutable archival dry stems. Stack open-source DSP pedalboards, Cardinal modular
            racks, and analog outboard re-amps. Collaborate through GitHub Pull Requests with
            sample-accurate latency compensation and zero cloud lock-in.
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://portal.syncromancer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-cyan-500/25 active:scale-95 transition-all"
            >
              <span>Launch Studio Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#architecture"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-studio-900/90 hover:bg-studio-850 text-white border border-studio-700/80 hover:border-studio-600 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Kubernetes Helm Chart & Storage Guide</span>
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Non-Destructive Stems
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Web Audio 44.1kHz / 96kHz
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Self-Hostable on K8s
            </span>
          </div>
        </div>

        {/* Interactive Studio Preview Card */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl border border-studio-700/80 bg-studio-900/90 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Mock Transport Header */}
          <div className="px-5 py-3.5 bg-studio-950 border-b border-studio-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-slate-400 font-mono text-[11px]">
                https://portal.syncromancer.com/session/syncromancer-odyssey
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-studio-900 border border-studio-800 px-2.5 py-1 rounded-lg font-mono text-[11px] text-cyan-400">
                <GitPullRequest className="w-3.5 h-3.5 text-cyan-400" />
                <span>PR #14: ampeg-svt-reamp</span>
                <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded text-[9px] uppercase font-bold">
                  PASS
                </span>
              </div>
              <div className="flex items-center gap-1 bg-studio-900 border border-studio-800 px-2 py-1 rounded-lg font-mono text-[11px] text-slate-300">
                <span>116 BPM</span>
                <span className="text-slate-500">|</span>
                <span>4/4</span>
              </div>
            </div>
          </div>

          {/* Timeline & Track Lanes Mockup */}
          <div className="p-4 sm:p-6 flex flex-col gap-2.5 bg-studio-950/60 font-sans">
            {/* Track 1: Drums */}
            <div className="rounded-xl border border-rose-900/50 bg-studio-900/80 p-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-48 shrink-0">
                <div className="w-2.5 h-10 rounded-full bg-rose-500 shrink-0" />
                <div>
                  <span className="font-bold text-xs text-white block">Drums (Multi-Stem)</span>
                  <span className="text-[10px] text-rose-300/80 font-mono">1176 Punch & Room DSP</span>
                </div>
              </div>
              {/* Waveform bars */}
              <div className="flex-1 h-10 bg-studio-950/80 rounded-lg border border-studio-800/80 px-2 flex items-center gap-1 overflow-hidden">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-rose-500/60 rounded-full"
                    style={{ height: `${20 + ((i * 7) % 65)}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono shrink-0">
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  DRY PRESERVED
                </span>
                <span className="text-slate-400">0.0 dB</span>
              </div>
            </div>

            {/* Track 2: Bass (Outboard Hardware Re-amp) */}
            <div className="rounded-xl border border-blue-900/60 bg-studio-900/90 p-3 flex items-center justify-between gap-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-purple-900/80 border-b border-l border-purple-700/60 text-purple-300 text-[9px] font-mono rounded-bl">
                ⚡ OUTBOARD RE-AMP: AMPEG SVT (4.2ms COMP)
              </div>
              <div className="flex items-center gap-3 w-48 shrink-0">
                <div className="w-2.5 h-10 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <span className="font-bold text-xs text-white block">Bass Line</span>
                  <span className="text-[10px] text-purple-300 font-mono">Radial Re-Amp Box</span>
                </div>
              </div>
              <div className="flex-1 h-10 bg-studio-950/80 rounded-lg border border-studio-800/80 px-2 flex items-center gap-1 overflow-hidden">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-blue-500/70 rounded-full"
                    style={{ height: `${30 + ((i * 11) % 60)}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono shrink-0">
                <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  HARDWARE WET
                </span>
                <span className="text-slate-400">-1.2 dB</span>
              </div>
            </div>

            {/* Track 3: Electric Keys (Dattorro Plate + Tape Delay) */}
            <div className="rounded-xl border border-purple-900/50 bg-studio-900/80 p-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-48 shrink-0">
                <div className="w-2.5 h-10 rounded-full bg-purple-500 shrink-0" />
                <div>
                  <span className="font-bold text-xs text-white block">Electric Keys</span>
                  <span className="text-[10px] text-purple-300/80 font-mono">
                    Dattorro 1997 Plate FX
                  </span>
                </div>
              </div>
              <div className="flex-1 h-10 bg-studio-950/80 rounded-lg border border-studio-800/80 px-2 flex items-center gap-1 overflow-hidden">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-purple-500/60 rounded-full"
                    style={{ height: `${15 + ((i * 5) % 55)}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono shrink-0">
                <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  PEDALBOARD
                </span>
                <span className="text-slate-400">-2.0 dB</span>
              </div>
            </div>

            {/* Track 4: DX7 Keys (Virtual FM Synthesizer) */}
            <div className="rounded-xl border border-cyan-900/50 bg-studio-900/80 p-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 w-48 shrink-0">
                <div className="w-2.5 h-10 rounded-full bg-cyan-500 shrink-0" />
                <div>
                  <span className="font-bold text-xs text-white block">DX7 Crystal Keys</span>
                  <span className="text-[10px] text-cyan-300/80 font-mono">Dexed 6-Operator FM</span>
                </div>
              </div>
              <div className="flex-1 h-10 bg-studio-950/80 rounded-lg border border-studio-800/80 px-2 flex items-center gap-1 overflow-hidden">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-cyan-400/70 rounded-full"
                    style={{ height: `${25 + ((i * 13) % 70)}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono shrink-0">
                <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  MIDI SYNTH
                </span>
                <span className="text-slate-400">0.0 dB</span>
              </div>
            </div>
          </div>

          {/* Footer Bar of Mockup */}
          <div className="px-5 py-3 bg-studio-950 border-t border-studio-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Audio Engine: 44.1kHz Stereo 64-bit Float
              </span>
              <span className="hidden sm:inline text-slate-500">|</span>
              <span className="hidden sm:inline text-slate-400">Master Limiter: -0.5 dB</span>
            </div>
            <div className="text-cyan-400 font-bold">
              Ready for Collaboration &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
