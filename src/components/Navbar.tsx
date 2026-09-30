'use client';

import React, { useState } from 'react';
import {
  Music,
  GitPullRequest,
  Cpu,
  Layers,
  Server,
  CreditCard,
  ExternalLink,
  Menu,
  X,
  Terminal,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-studio-950/85 backdrop-blur-md border-b border-studio-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-all">
                <span className="font-black text-xl text-white tracking-tighter">S</span>
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wide text-white block leading-tight">
                  Syncromancer
                </span>
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider block">
                  DAW AS A SERVICE
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#git-workflow" className="hover:text-cyan-400 transition-colors">
              Git PR Workflow
            </a>
            <a href="#synths-effects" className="hover:text-cyan-400 transition-colors">
              Synths & Pedals
            </a>
            <a href="#hardware" className="hover:text-cyan-400 transition-colors">
              Hardware Re-Amp
            </a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">
              Architecture
            </a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#architecture"
              className="px-3 py-1.5 rounded-lg border border-studio-700 hover:border-studio-600 bg-studio-900/80 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Helm Chart</span>
            </a>
            <a
              href="https://portal.syncromancer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
            >
              <span>Launch Studio Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-studio-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-studio-900 border-b border-studio-800 px-4 pt-3 pb-6 flex flex-col gap-3 text-sm">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Features
          </a>
          <a
            href="#git-workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Git PR Workflow
          </a>
          <a
            href="#synths-effects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Synths & Pedals
          </a>
          <a
            href="#hardware"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Hardware Re-Amp
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Kubernetes Helm & Storage
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Pricing
          </a>
          <div className="pt-2 border-t border-studio-800 flex flex-col gap-2">
            <a
              href="https://portal.syncromancer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-center text-xs flex items-center justify-center gap-2"
            >
              <span>Launch Studio Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
