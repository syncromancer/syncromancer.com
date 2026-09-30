'use client';

import React from 'react';
import {
  GitPullRequest,
  GitBranch,
  GitMerge,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sliders,
  Check,
  Radio,
  FileCode,
} from 'lucide-react';

export const GitWorkflowSection: React.FC = () => {
  return (
    <section id="git-workflow" className="py-24 bg-studio-900/50 border-t border-b border-studio-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-300 text-xs font-mono font-semibold mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>NON-DESTRUCTIVE DUAL-ARTIFACT MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Music Production Meets Modern Version Control.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Never argue over destructive mixer overwrites again. Syncromancer cleanly decouples your
            master archival dry recordings from collaborative effect layers.
          </p>
        </div>

        {/* 3-Step Dual Artifact Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-studio-950/80 border border-studio-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4 font-mono font-black text-base">
              01
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Immutable Dry Archival</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Raw vocals, acoustic drums, direct-in bass, and MIDI note streams are sealed in the
              manifest with cryptographic checksums. They can never be destructively overwritten.
            </p>
            <div className="p-3 bg-studio-900 border border-studio-800 rounded-xl font-mono text-[11px] text-slate-300 flex flex-col gap-1">
              <span className="text-emerald-400 font-bold">tracks/bass/dry.wav</span>
              <span className="text-slate-500">SHA-256: 7f3a9b1...</span>
              <span className="text-slate-400 text-[10px]">44.1kHz • 24-bit PCM • Immutable Master</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-studio-950/80 border border-studio-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4 font-mono font-black text-base">
              02
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>Layered Wet Processing</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Collaborators stack non-destructive layers on top: deterministic DSP pedalboards,
              Cardinal VCV modular racks, or hardware analog re-amps routed through studio gear.
            </p>
            <div className="p-3 bg-studio-900 border border-studio-800 rounded-xl font-mono text-[11px] text-slate-300 flex flex-col gap-1">
              <span className="text-blue-400 font-bold">+ Deterministic Moog 24dB Filter</span>
              <span className="text-purple-400 font-bold">+ Hardware Re-Amp (Tube SVT)</span>
              <span className="text-rose-400 font-bold">+ Cardinal Modular VCF Patch</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-studio-950/80 border border-studio-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4 font-mono font-black text-base">
              03
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <GitPullRequest className="w-5 h-5 text-purple-400" />
              <span>PR Review & A/B Merging</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Submit changes via Git Pull Request. Team members audition the PR directly in the browser,
              toggling instant A/B Dry comparison before merging into the main session.
            </p>
            <div className="p-3 bg-studio-900 border border-studio-800 rounded-xl font-mono text-[11px] text-slate-300 flex flex-col gap-1">
              <div className="flex items-center justify-between text-cyan-300 font-bold">
                <span>PR #42: Add Plate Reverb</span>
                <span className="text-emerald-400">Merged</span>
              </div>
              <span className="text-slate-400 text-[10px]">Automated Manifest & Stem Verification</span>
            </div>
          </div>
        </div>

        {/* Real-time PR Diff Preview Panel */}
        <div className="rounded-2xl border border-studio-800 bg-studio-950 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-studio-800">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">
                  Pull Request #42: Outboard Hardware Re-Amp & Moog Ladder Filter
                </h4>
                <p className="text-xs text-slate-400">
                  Branch: <span className="font-mono text-purple-300">collaborator/alice/analog-wet-layers</span> &rarr; <span className="font-mono text-cyan-300">main</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 text-xs font-mono font-semibold">
                CI Stem Check: 0 Audio Collisions
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs font-mono">
            {/* Diff Left: Parameters Added */}
            <div className="bg-studio-900 border border-studio-800 rounded-xl p-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Deterministic DSP & Outboard Metadata Diff
              </span>
              <div className="flex flex-col gap-2">
                <div className="text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-900/50">
                  + Layer: "Dattorro 1997 Plate Reverb" (preDelay: 25ms, decay: 0.85, mix: 0.35)
                </div>
                <div className="text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-900/50">
                  + Outboard: "Ampeg SVT + 8x10 Cab" (latencyCompensation: 4.2ms)
                </div>
                <div className="text-slate-400 bg-studio-950 p-2 rounded border border-studio-800">
                  = Dry Master: "Bass DI (Avalon U5)" (preserved, sha256 checksum match)
                </div>
              </div>
            </div>

            {/* Diff Right: Instant A/B Listening */}
            <div className="bg-studio-900 border border-studio-800 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Sample-Accurate In-Browser A/B Audition
                </span>
                <p className="text-slate-300 text-xs mb-4 font-sans">
                  The Syncromancer Web Engine routes both the original dry take and the proposed wet PR layer simultaneously with zero phase jitter. Click to A/B toggle seamlessly.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-studio-800 font-sans">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-studio-950 border border-studio-800 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Dry Only</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Active PR Wet Layer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
