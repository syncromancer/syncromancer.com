'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Terminal, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-950 border-t border-studio-800/80 pt-16 pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-cyan-500/50 shadow-md shadow-cyan-500/20 bg-black shrink-0">
                <Image
                  src="/syncromancer-emblem.jpg"
                  alt="Syncromancer Emblem"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-white text-sm block leading-none">Syncromancer</span>
                <span className="text-[9px] font-mono text-cyan-400 tracking-wider">RAISING RHYTHMS FROM THE DEAD</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              DAW as a Service (DaaS) for collaborative music engineering. Non-destructive audio
              layering, Supabase session sync, and SeaweedFS stem storage. Raising dormant rhythms into living masters.
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

          {/* Col 3: Studio Platform */}
          <div>
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-3">
              Studio Platform
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#arcane" className="hover:text-cyan-400 transition-colors text-purple-300 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span>Arcane Rhythm Engine</span>
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">
                  Cloud Audio Architecture
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-cyan-400 transition-colors">
                  Non-Destructive Stems
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-cyan-400 transition-colors">
                  Hardware Re-Amping
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Enterprise SSO & Security
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Open Source & AI */}
          <div>
            <span className="font-bold text-white text-xs uppercase tracking-wider block mb-3">
              Open Source &amp; AI
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://cardinal.kx.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-rose-300 font-semibold"
                >
                  <span>The Mighty Cardinal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/falkTX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>FalkTX (Filipe Coelho)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KXStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>KXStudio Audio Tools</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://distrho.sourceforge.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>DISTRHO (distrho.sf.net)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DISTRHO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span>DISTRHO Plugins &amp; DPF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/magenta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold"
                >
                  <span>Google Magenta AI</span>
                  <ExternalLink className="w-3 h-3" />
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
            <a href="#credits" className="hover:text-cyan-400 transition-colors">
              Open Source Credits &amp; Licenses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
