'use client';

import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Server, Users } from 'lucide-react';

export const PricingCalculator: React.FC = () => {
  const [seats, setSeats] = useState(5);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const soloBasePrice = 12;
  const proBasePricePerSeat = 29;
  const annualDiscount = 0.2; // 20% off

  const effectiveSoloPrice =
    billingCycle === 'annual'
      ? Math.round(soloBasePrice * (1 - annualDiscount))
      : soloBasePrice;

  const effectiveSeatPrice =
    billingCycle === 'annual'
      ? Math.round(proBasePricePerSeat * (1 - annualDiscount))
      : proBasePricePerSeat;

  const totalPerMonth = seats * effectiveSeatPrice;
  const totalBilledAnnual = totalPerMonth * 12;

  return (
    <section id="pricing" className="py-24 bg-studio-900/40 border-t border-b border-studio-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>TRANSPARENT PER-SEAT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Predictable Pricing for Audio Teams.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Scale seamlessly from independent bedroom producers to multi-room recording studios and
            enterprise post-production houses.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-studio-950 border border-studio-800 rounded-2xl shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-studio-800 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                billingCycle === 'annual'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-950/20 text-[10px] font-black uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Plan 1: Solo Producer (Individual) */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider block mb-2">
                Solo Creators & Artists
              </span>
              <h3 className="text-2xl font-black text-white mb-2">Solo Producer</h3>
              <p className="text-xs text-slate-400 mb-6">
                Full-featured cloud DaaS workstation for individual musicians working without a team.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">${effectiveSoloPrice}</span>
                <span className="text-slate-400 text-xs font-mono">/ month</span>
              </div>

              <ul className="flex flex-col gap-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 User seat (no team management required)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited private solo projects & sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High-speed SeaweedFS stem storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cardinal modular VCV Rack & synth engine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Non-destructive dual-artifact session history</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sample-accurate offline export & A/B audition</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://portal.syncromancer.com/billing?plan=solo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-studio-900 hover:bg-studio-850 text-white border border-studio-700 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Start Solo Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Plan 2: Pro Studio (Featured) */}
          <div className="bg-gradient-to-b from-studio-900 to-studio-950 border-2 border-cyan-500/80 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-cyan-500 text-slate-950 font-mono text-[10px] font-black uppercase tracking-wider shadow">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider block mb-2">
                Professional Studios
              </span>
              <h3 className="text-2xl font-black text-white mb-2">Pro Studio DaaS</h3>
              <p className="text-xs text-slate-300 mb-6">
                Cloud hosted on <code className="text-cyan-300">portal.syncromancer.com</code> with Supabase sync & SeaweedFS stem storage.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">${effectiveSeatPrice}</span>
                <span className="text-slate-400 text-xs font-mono">/ seat / month</span>
              </div>

              <ul className="flex flex-col gap-3 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Unlimited private projects & collaborators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>SeaweedFS high-throughput audio storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Cardinal modular VCV Rack plugin integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Outboard hardware re-amp compensation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Real-time team layer sync & A/B auditioning</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://portal.syncromancer.com/billing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
              >
                <span>Start Pro Studio Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Plan 3: Enterprise Studio */}
          <div className="bg-studio-950 border border-studio-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-wider block mb-2">
                Record Labels & Facilities
              </span>
              <h3 className="text-2xl font-black text-white mb-2">Enterprise Studio</h3>
              <p className="text-xs text-slate-400 mb-6">
                Dedicated cloud infrastructure with custom SSO, priority audio pipelines, and enterprise SLA.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-white">Custom</span>
                <span className="text-slate-400 text-xs font-mono">/ tailored volume</span>
              </div>

              <ul className="flex flex-col gap-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Active Directory / OpenLDAP SSO integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Dedicated high-throughput audio storage pool</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Custom seat allocations & multi-room facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>99.99% uptime SLA & 24/7 dedicated engineering support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>SOC2 & ISO 27001 compliance audit trails</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://portal.syncromancer.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-studio-900 hover:bg-studio-850 text-purple-300 border border-purple-800/80 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Contact Enterprise</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Team Seat Calculator */}
        <div className="max-w-2xl mx-auto bg-studio-950 border border-studio-800 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
          <h4 className="text-lg font-bold text-white mb-2">Estimate Your Studio Team Plan</h4>
          <p className="text-xs text-slate-400 mb-6">
            Working with a multi-person crew? Adjust the slider to calculate your team's Pro Studio investment.
          </p>

          <div className="flex items-center justify-between font-mono text-xs text-slate-300 mb-2">
            <span>Team Seats:</span>
            <span className="text-cyan-400 font-bold text-base">{seats} Seats</span>
          </div>

          <input
            type="range"
            min="1"
            max="50"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full h-2 bg-studio-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 mb-6"
          />

          <div className="p-4 bg-studio-900 border border-studio-800 rounded-2xl flex flex-wrap items-center justify-between gap-4 font-mono">
            <div className="text-left">
              <span className="text-xs text-slate-400 block">Total Monthly Cost:</span>
              <span className="text-2xl font-black text-white">${totalPerMonth}</span>
              <span className="text-[10px] text-slate-500 ml-1">/ mo</span>
            </div>

            {billingCycle === 'annual' && (
              <div className="text-right">
                <span className="text-[10px] text-emerald-400 block font-bold">
                  Billed Annually: ${totalBilledAnnual}/yr
                </span>
                <span className="text-[10px] text-slate-500">Includes 20% discount</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
