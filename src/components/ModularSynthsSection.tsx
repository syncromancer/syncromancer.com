'use client';

import React from 'react';
import {
  Cpu,
  Music,
  Sliders,
  Sparkles,
  Zap,
  Layers,
  Radio,
  ExternalLink,
  Flame,
} from 'lucide-react';

export const ModularSynthsSection: React.FC = () => {
  return (
    <section id="synths-effects" className="py-24 bg-studio-900/60 border-t border-b border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/80 text-rose-300 text-xs font-mono font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>OPEN-SOURCE AUDIO DSP & SYNTHS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Infinite Modular Racks & Virtual Synths.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Powered by open-source modular synthesizers and boutique studio pedalboard algorithms. No
            proprietary format locks; all patches are transparently serialized in Git.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Cardinal VCV Modular Rack */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-rose-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-800 font-mono text-[10px] font-bold">
                  VCV RACK COMPATIBLE
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Cardinal Modular Studio</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Direct integration with the DISTRHO Cardinal modular synthesizer engine. Connect
                virtual patch cables, VCAs, oscillators, and filters. Patches are parsed into
                declarative Git manifests and rendered deterministically in the cloud or client.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 mb-6">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-rose-400 font-bold block mb-0.5">CV Modulation</span>
                  <span>Infinite modular patch cables</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-rose-400 font-bold block mb-0.5">Git Versioned</span>
                  <span>.vcv / .cardinal JSON patches</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-studio-900/90 border border-studio-800 rounded-xl font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Modules: Fundamental VCF, Plateau Reverb, Bogaudio</span>
              <span className="text-emerald-400 font-bold">WASM Native</span>
            </div>
          </div>

          {/* Card 2: Virtual Synth Fleet */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                  <Music className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-[10px] font-bold">
                  DEXED & ANALOG ENGINES
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Multi-Engine Virtual Synthesizers</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Play and edit expressive MIDI tracks with sample-accurate synthesis. From 6-operator
                Yamaha DX7 FM synthesis to 808 analog drums and lush Juno-style subtractive polysynths.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 mb-6">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">Dexed FM (DX7)</span>
                  <span>Classic 80s crystal electric piano</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">Analog PolySynth</span>
                  <span>Juno-style saw/sub with chorus</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">TR-808 Drums</span>
                  <span>Punchy analog kick & snare voices</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">SoundFont Sampler</span>
                  <span>General MIDI wavetable sampler</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-studio-900/90 border border-studio-800 rounded-xl font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Interactive In-Browser Piano Roll</span>
              <span className="text-cyan-400 font-bold">Sample-Accurate</span>
            </div>
          </div>
        </div>

        {/* Studio Stompbox Pedalboard Suite */}
        <div className="bg-studio-950 border border-studio-800 rounded-3xl p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-studio-800">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                <span>Open-Source Studio Pedalboard Suite</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Zero latency Web Audio stompboxes. Reorder pedals in series, adjust drive and damping curves, or load WAM 2.0 plugins.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-xs font-mono font-bold">
              100% DETERMINISTIC DSP
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
            <div className="p-3 bg-studio-900 rounded-xl border border-studio-800 text-center">
              <span className="text-amber-400 font-bold block mb-1">Dattorro Plate</span>
              <span className="text-[10px] text-slate-400">1997 Tank Reverb</span>
            </div>
            <div className="p-3 bg-studio-900 rounded-xl border border-studio-800 text-center">
              <span className="text-amber-400 font-bold block mb-1">Moog Ladder</span>
              <span className="text-[10px] text-slate-400">24dB 4-Pole Lowpass</span>
            </div>
            <div className="p-3 bg-studio-900 rounded-xl border border-studio-800 text-center">
              <span className="text-amber-400 font-bold block mb-1">Ping-Pong Delay</span>
              <span className="text-[10px] text-slate-400">Stereo BPM Synced</span>
            </div>
            <div className="p-3 bg-studio-900 rounded-xl border border-studio-800 text-center">
              <span className="text-amber-400 font-bold block mb-1">Tube Overdrive</span>
              <span className="text-[10px] text-slate-400">Tuna-Style Saturation</span>
            </div>
            <div className="p-3 bg-studio-900 rounded-xl border border-studio-800 text-center">
              <span className="text-amber-400 font-bold block mb-1">Bitcrusher</span>
              <span className="text-[10px] text-slate-400">Lo-Fi Quantization</span>
            </div>
            <div className="p-3 bg-studio-900 rounded-xl border border-studio-800 text-center">
              <span className="text-amber-400 font-bold block mb-1">Cabinet Sim</span>
              <span className="text-[10px] text-slate-400">4x12 / 8x10 Emulation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
