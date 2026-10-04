'use client';

import React, { useEffect, useState } from 'react';
import { Scale, ExternalLink, ShieldAlert, Library, Server, Sparkles } from 'lucide-react';
import { CATALOG, TIER_META, CatalogTier } from '@/data/openSourceCatalog';

const STORAGE_KEY = 'syncromancer.engineOptIns.v1';

const TIER_ORDER: CatalogTier[] = ['foundation', 'core', 'server', 'gpl', 'restricted'];

const TIER_STYLE: Record<CatalogTier, { border: string; badge: string; icon: React.ReactNode }> = {
  foundation: { border: 'border-rose-800/60', badge: 'bg-rose-950 text-rose-300 border-rose-800', icon: <Sparkles className="w-4 h-4 text-rose-400" /> },
  core: { border: 'border-emerald-800/60', badge: 'bg-emerald-950 text-emerald-300 border-emerald-800', icon: <Library className="w-4 h-4 text-emerald-400" /> },
  server: { border: 'border-blue-800/60', badge: 'bg-blue-950 text-blue-300 border-blue-800', icon: <Server className="w-4 h-4 text-blue-400" /> },
  gpl: { border: 'border-purple-800/60', badge: 'bg-purple-950 text-purple-300 border-purple-800', icon: <Scale className="w-4 h-4 text-purple-400" /> },
  restricted: { border: 'border-amber-800/60', badge: 'bg-amber-950 text-amber-300 border-amber-800', icon: <ShieldAlert className="w-4 h-4 text-amber-400" /> },
};

export const CreditsLicensesSection: React.FC = () => {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setEnabled(JSON.parse(raw));
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  const toggle = (name: string) => {
    setEnabled((prev) => {
      const next = { ...prev, [name]: !prev[name] };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  };

  const setAll = (tier: CatalogTier, value: boolean) => {
    setEnabled((prev) => {
      const next = { ...prev };
      CATALOG.filter((e) => e.tier === tier).forEach((e) => {
        next[e.name] = value;
      });
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  };

  return (
    <section id="credits" className="py-24 bg-studio-950 border-t border-studio-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>OPEN SOURCE CREDITS &amp; LICENSES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Standing on the shoulders of giants.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Syncromancer is possible because of these open-source projects. Permissive libraries are
            on by default. Copyleft and experimental engines are strictly your choice.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {TIER_ORDER.map((tier) => {
            const meta = TIER_META[tier];
            const style = TIER_STYLE[tier];
            const entries = CATALOG.filter((e) => e.tier === tier);
            return (
              <div key={tier}>
                <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {style.icon}
                      <span>{meta.title}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-2xl">{meta.blurb}</p>
                  </div>
                  {meta.optIn && (
                    <div className="flex items-center gap-2 text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setAll(tier, true)}
                        className="px-2.5 py-1 rounded-md bg-studio-900 border border-studio-700 text-slate-300 hover:border-cyan-500 transition-colors"
                      >
                        Enable all
                      </button>
                      <button
                        type="button"
                        onClick={() => setAll(tier, false)}
                        className="px-2.5 py-1 rounded-md bg-studio-900 border border-studio-700 text-slate-300 hover:border-cyan-500 transition-colors"
                      >
                        Disable all
                      </button>
                    </div>
                  )}
                </div>

                {tier === 'restricted' && (
                  <div className="mb-4 p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 flex gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <span>
                      These projects are either licensed under AGPL (network use carries source-sharing
                      obligations) or are archived and receive no upstream fixes. Enable only if you
                      accept those terms.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {entries.map((e) => (
                    <div
                      key={e.name}
                      className={`p-4 rounded-xl bg-studio-900/70 border ${style.border} flex flex-col justify-between gap-3`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <a
                            href={e.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-sm text-white hover:text-cyan-300 flex items-center gap-1.5"
                          >
                            <span>{e.name}</span>
                            <ExternalLink className="w-3 h-3 text-slate-500" />
                          </a>
                          <span
                            className={`px-2 py-0.5 rounded-full border font-mono text-[10px] font-bold whitespace-nowrap ${style.badge}`}
                          >
                            {e.license}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1.5">{e.role}</p>
                        {e.note && <p className="text-[11px] text-slate-500 mt-1.5 italic">{e.note}</p>}
                      </div>

                      {meta.optIn && (
                        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={!!enabled[e.name]}
                            onChange={() => toggle(e.name)}
                            className="w-4 h-4 accent-cyan-500"
                          />
                          <span>Enable in my studio</span>
                        </label>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-[11px] text-slate-500 text-center max-w-3xl mx-auto">
          All trademarks belong to their respective owners. Each project remains under its own
          license; full texts and source links are available on the linked repositories. Your
          engine choices are saved in this browser and applied when you open the studio.
        </p>
      </div>
    </section>
  );
};
