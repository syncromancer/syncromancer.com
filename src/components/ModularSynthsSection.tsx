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
  Bot,
  Brain,
  Workflow,
  Code2,
  ShieldCheck,
  Activity,
} from 'lucide-react';

export const ModularSynthsSection: React.FC = () => {
  return (
    <section id="synths-effects" className="py-24 bg-studio-900/60 border-t border-b border-studio-800 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[300px] bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800/80 text-rose-300 text-xs font-mono font-semibold shadow-inner">
              <Cpu className="w-3.5 h-3.5 text-rose-400" />
              <span>FALKTX • KXSTUDIO • DISTRHO</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-semibold shadow-inner">
              <Brain className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>GOOGLE MAGENTA AI CO-PILOT</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            FalkTX Open Source DSP, The Mighty Cardinal & Google Magenta AI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Syncromancer is built on the shoulders of open-source titans. We deeply integrate the seminal
            audio engineering of{' '}
            <a
              href="https://github.com/falkTX/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 underline hover:text-rose-300 font-semibold"
            >
              FalkTX
            </a>{' '}
            across{' '}
            <a
              href="https://github.com/KXStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300 font-semibold"
            >
              KXStudio
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/DISTRHO/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline hover:text-purple-300 font-semibold"
            >
              DISTRHO
            </a>{' '}
            (
            <a
              href="https://distrho.sourceforge.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 underline hover:text-white font-mono text-sm"
            >
              distrho.sourceforge.io
            </a>
            ) — headlined by the mighty{' '}
            <a
              href="https://cardinal.kx.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 underline hover:text-rose-200 font-bold"
            >
              Cardinal
            </a>{' '}
            modular rack. For musical intelligence, we integrate{' '}
            <a
              href="https://github.com/magenta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline hover:text-emerald-300 font-bold"
            >
              Google Magenta
            </a>{' '}
            for neural AI rhythm and melody assistance.
          </p>
        </div>

        {/* 3-Column Hero Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: The Mighty Cardinal */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 text-rose-400 border border-rose-500/30 flex items-center justify-center">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://cardinal.kx.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-800 font-mono text-[10px] font-bold hover:bg-rose-900 transition-colors"
                  >
                    <span>cardinal.kx.studio</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">
                  Modular Synthesis
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs font-mono text-slate-400">By FalkTX</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">The Mighty Cardinal</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Direct integration with the mighty{' '}
                <a
                  href="https://cardinal.kx.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-300 font-bold hover:underline"
                >
                  Cardinal
                </a>{' '}
                virtual modular synthesizer, built on VCV Rack. Connect infinite virtual patch cables, CV
                modulators, oscillators, and esoteric filter topologies. All complex modular racks render
                through server-side headless Carla nodes, delivering massive multi-core DSP directly into SeaweedFS stems.
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs text-slate-400 mb-6">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-rose-400 font-bold">VCV Rack Core Compatibility</span>
                  <span className="text-slate-300">1000+ Bundled Modules</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-rose-400 font-bold">Server-Side Carla Render</span>
                  <span className="text-emerald-400 font-bold">0% Client Copyleft</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-rose-400 font-bold">Session Serialization</span>
                  <span className="text-slate-300">.vcv / .cardinal in Supabase</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-studio-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Fundamental VCF &bull; Plateau &bull; Bogaudio</span>
              <a
                href="https://github.com/DISTRHO/Cardinal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-bold"
              >
                <span>Cardinal Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: DISTRHO & KXStudio Ecosystem */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://distrho.sourceforge.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-mono text-[10px] font-bold hover:bg-purple-900 transition-colors"
                  >
                    <span>distrho.sourceforge.io</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold">
                  DPF & Audio Framework
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs font-mono text-slate-400">By FalkTX</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">KXStudio &amp; Carla Cloud Engine</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Syncromancer incorporates the core audio infrastructure pioneered by{' '}
                <a
                  href="https://github.com/falkTX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 font-bold hover:underline"
                >
                  FalkTX
                </a>
                . Headless{' '}
                <a
                  href="https://github.com/falkTX/Carla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 font-bold hover:underline"
                >
                  Carla
                </a>{' '}
                acts as our server-side cloud plugin host, executing copyleft synthesizers (Cardinal, Surge XT, Vital, ZynAddSubFX)
                and rendering lossless audio layers into SeaweedFS without shipping GPL binaries to the browser.
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs text-slate-400 mb-6">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-purple-400 font-bold">Carla Headless Cloud Host</span>
                  <span className="text-slate-300">Server-Side Linux Nodes</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-purple-400 font-bold">GPL / LGPL Isolation</span>
                  <span className="text-emerald-400 font-bold">Clean Browser Client</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-purple-400 font-bold">DISTRHO Sound Engines</span>
                  <span className="text-slate-300">Nekobi, Dexed, Kars, MVerb</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-studio-800 flex items-center justify-between text-xs font-mono">
              <a
                href="https://github.com/KXStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-bold"
              >
                <span>KXStudio GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/DISTRHO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-bold"
              >
                <span>DISTRHO GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Google Magenta AI Assistance */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://github.com/magenta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono text-[10px] font-bold hover:bg-emerald-900 transition-colors"
                  >
                    <span>github.com/magenta</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Machine Learning & Music
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs font-mono text-slate-400">By Google Brain</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Google Magenta AI Co-Pilot</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Infuse your compositions with intelligent neural assistance from{' '}
                <a
                  href="https://github.com/magenta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 font-bold hover:underline"
                >
                  Google Magenta
                </a>
                . Generate infinite drum groove variations, interpolate polyphonic chord progressions, and
                humanize micro-timings right inside the Syncromancer browser piano roll.
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs text-slate-400 mb-6">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">Drums RNN & Continuation</span>
                  <span className="text-slate-300">Neural Drum Fill Generation</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">MusicVAE Latent Space</span>
                  <span className="text-slate-300">Polyphonic Melodic Morphing</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">Groove MIDI Humanizer</span>
                  <span className="text-emerald-400 font-bold">Realistic Micro-Timings</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-studio-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">TensorFlow.js / ONNX In-Browser</span>
              <a
                href="https://github.com/magenta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold"
              >
                <span>Magenta Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Multi-Engine Fleet & Studio Stompbox Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Virtual Synth Fleet (5 cols) */}
          <div className="lg:col-span-5 bg-studio-950 border border-studio-800 rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                  <Music className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-[10px] font-bold">
                  DEXED & ANALOG FLEET
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Native Virtual Synthesizers</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Play and automate expressive multi-voice synthesizers natively inside the web DAW with
                sample-accurate MIDI scheduling.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">Dexed FM (DX7)</span>
                  <span className="text-[10px]">6-Operator FM synth</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">Analog PolySynth</span>
                  <span className="text-[10px]">Juno-style saw & chorus</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">TR-808 Drums</span>
                  <span className="text-[10px]">Punchy analog voices</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800">
                  <span className="text-cyan-400 font-bold block mb-0.5">SoundFont Sampler</span>
                  <span className="text-[10px]">Multi-sampled acoustic</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>MIDI Learn & Web MIDI API</span>
              <span className="text-cyan-400 font-bold">0ms Local Latency</span>
            </div>
          </div>

          {/* Stompbox DSP Suite (7 cols) */}
          <div className="lg:col-span-7 bg-studio-950 border border-studio-800 rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-mono text-[10px] font-bold">
                  DETERMINISTIC DSP PEDALS
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Open-Source Studio Pedalboard Suite</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                High-fidelity zero-latency Web Audio stompboxes. Drag and reorder in series, adjust
                non-linear tube curves, and chain them directly into hardware re-amp outputs.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 text-center">
                  <span className="text-amber-400 font-bold block mb-0.5">Dattorro Plate</span>
                  <span className="text-[10px] text-slate-400">1997 Tank Reverb</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 text-center">
                  <span className="text-amber-400 font-bold block mb-0.5">Moog Ladder</span>
                  <span className="text-[10px] text-slate-400">24dB 4-Pole Lowpass</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 text-center">
                  <span className="text-amber-400 font-bold block mb-0.5">Ping-Pong Delay</span>
                  <span className="text-[10px] text-slate-400">Stereo BPM Synced</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 text-center">
                  <span className="text-amber-400 font-bold block mb-0.5">Tube Overdrive</span>
                  <span className="text-[10px] text-slate-400">Tuna Saturation</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 text-center">
                  <span className="text-amber-400 font-bold block mb-0.5">Bitcrusher</span>
                  <span className="text-[10px] text-slate-400">Lo-Fi Quantization</span>
                </div>
                <div className="p-2.5 bg-studio-900 rounded-xl border border-studio-800 text-center">
                  <span className="text-amber-400 font-bold block mb-0.5">Cabinet Sim</span>
                  <span className="text-[10px] text-slate-400">4x12 / 8x10 Emulation</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Fully compatible with Web Audio Modules (WAM 2.0)</span>
              <span className="text-emerald-400 font-bold">Pure Math DSP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
