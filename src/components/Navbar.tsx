'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Music,
  Cpu,
  Layers,
  Server,
  CreditCard,
  ExternalLink,
  Menu,
  X,
  Terminal,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-studio-950/85 backdrop-blur-md border-b border-studio-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-cyan-500/50 shadow-lg shadow-cyan-500/30 group-hover:scale-105 group-hover:ring-cyan-300 transition-all bg-black shrink-0">
                <Image
                  src="/syncromancer-emblem.jpg"
                  alt="Syncromancer Emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wide text-white block leading-tight">
                  Syncromancer
                </span>
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider block">
                  RAISING RHYTHMS FROM THE DEAD
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#arcane" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-purple-300 font-semibold">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>Arcane Engine</span>
            </a>
            <a href="#workflow" className="hover:text-cyan-400 transition-colors">
              Workflow
            </a>
            <a href="#synths-effects" className="hover:text-cyan-400 transition-colors">
              Cardinal &amp; AI
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
            <a href="#credits" className="hover:text-cyan-400 transition-colors text-slate-300">
              Credits &amp; Licenses
            </a>
          </div>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
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
            href="#arcane"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-purple-300 hover:text-cyan-400 font-semibold flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Arcane Engine</span>
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Workflow
          </a>
          <a
            href="#synths-effects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Cardinal &amp; AI
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
            Architecture
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Pricing
          </a>
          <a
            href="#credits"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 text-slate-300 hover:text-cyan-400"
          >
            Credits &amp; Licenses
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
