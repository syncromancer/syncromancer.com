'use client';

import React from 'react';
import { ExternalLink, Terminal, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-950 border-t border-studio-800/80 pt-16 pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow">
                <span className="font-black text-sm text-white">S</span>
              </div>
              <span className="font-bold text-white text-sm">Syncromancer</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              DAW as a Service (DaaS) for collaborative music engineering. Non-destructive Git audio
              branching, open-source DSP, and analog hardware re-amping.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Immutable Archival Stem Guarantee</span>
            </div>
          </div>

          {/* Col 2: Studio Portal */}
          <div>
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-3">
              Studio Portal
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://portal.syncromancer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Launch Web Studio</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://portal.syncromancer.com/studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Multi-Track Timeline
                </a>
              </li>
              <li>
                <a
                  href="https://portal.syncromancer.com/team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Team & LDAP Roles
                </a>
              </li>
              <li>
                <a
                  href="https://portal.syncromancer.com/billing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Per-Seat Billing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Cloud Native & Helm */}
          <div>
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-3">
              Infrastructure
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>Kubernetes Helm Chart</span>
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">
                  SeaweedFS Audio Storage
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">
                  OpenEBS Mayastor & Ceph
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">
                  Active Directory / LDAP SSO
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Open Source */}
          <div>
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-3">
              Open Source Engines
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://github.com/DISTRHO/Cardinal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Cardinal Modular (VCV)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#synths-effects" className="hover:text-cyan-400 transition-colors">
                  Dexed FM Synthesizer
                </a>
              </li>
              <li>
                <a href="#synths-effects" className="hover:text-cyan-400 transition-colors">
                  Dattorro Plate Reverb & Moog DSP
                </a>
              </li>
              <li>
                <a href="#git-workflow" className="hover:text-cyan-400 transition-colors">
                  Git LFS Audio Schema
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-studio-800/60 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Syncromancer. DAW as a Service. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Public Portal: https://portal.syncromancer.com/</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
