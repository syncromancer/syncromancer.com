'use client';

import React from 'react';
import {
  Radio,
  Sliders,
  Clock,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const HardwareInTheLoopSection: React.FC = () => {
  return (
    <section id="hardware" className="py-24 bg-studio-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-xs font-mono font-semibold mb-3">
            <Radio className="w-3.5 h-3.5 text-purple-400" />
            <span>OUTBOARD GEAR INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Analog Hardware In-The-Loop.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Cloud DAWs usually isolate you from your studio rack. Syncromancer embraces analog outboard
            gear with first-class re-amp tracking and sample-accurate latency compensation.
          </p>
        </div>

        {/* Outboard Workflow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Outboard Routing */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Re-Amp Routing Out</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Route an immutable dry DI vocal or guitar track out from your audio interface (Radial
                ProRmp, Apollo Out) straight into your guitar cabinets, tube preamps, or tape echo units.
              </p>
            </div>
            <div className="p-3 bg-studio-950 border border-studio-800 rounded-xl font-mono text-[11px] text-purple-300">
              Session Master &rarr; Line Out 3 &rarr; Radial Re-Amp &rarr; Tube Head
            </div>
          </div>

          {/* Card 2: Latency Compensation */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sample-Accurate Alignment</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                D/A & A/D round-trip latency is automatically calculated or manually adjusted down to
                0.1ms. The returned wet stem snaps directly into phase with your master rhythm section.
              </p>
            </div>
            <div className="p-3 bg-studio-950 border border-studio-800 rounded-xl font-mono text-[11px] text-cyan-300">
              Round-trip offset: +4.2ms delay phase-locked to master 116 BPM grid
            </div>
          </div>

          {/* Card 3: Outboard Metadata */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Studio Gear Documentation</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Document mic placement (e.g. Shure SM7B + AKG D112), preamp gain staging, and knob
                positions directly into the Supabase session manifest and layer JSON metadata.
              </p>
            </div>
            <div className="p-3 bg-studio-950 border border-studio-800 rounded-xl font-mono text-[11px] text-rose-300">
              hardwareNotes: "1978 Roland RE-201 Space Echo tape flutter & spring"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
