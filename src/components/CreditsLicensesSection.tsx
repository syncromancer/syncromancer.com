'use client';

import React, { useEffect, useState } from 'react';
import {
  Scale,
  ExternalLink,
  ShieldAlert,
  Library,
  Server,
  Sparkles,
  Cpu,
  AlertTriangle,
  Check,
  Copy,
  X,
  ShieldCheck,
} from 'lucide-react';
import { CATALOG, TIER_META, CatalogTier, CatalogEntry } from '@/data/openSourceCatalog';

const STORAGE_KEY = 'syncromancer.engineOptIns.v1';

const TIER_ORDER: CatalogTier[] = ['foundation', 'core', 'server', 'gpl', 'restricted'];

const TIER_STYLE: Record<CatalogTier, { border: string; badge: string; icon: React.ReactNode }> = {
  foundation: { border: 'border-rose-800/60', badge: 'bg-rose-950 text-rose-300 border-rose-800', icon: <Sparkles className="w-4 h-4 text-rose-400" /> },
  core: { border: 'border-emerald-800/60', badge: 'bg-emerald-950 text-emerald-300 border-emerald-800', icon: <Library className="w-4 h-4 text-emerald-400" /> },
  server: { border: 'border-blue-800/60', badge: 'bg-blue-950 text-blue-300 border-blue-800', icon: <Server className="w-4 h-4 text-blue-400" /> },
  gpl: { border: 'border-purple-800/60', badge: 'bg-purple-950 text-purple-300 border-purple-800', icon: <Scale className="w-4 h-4 text-purple-400" /> },
  restricted: { border: 'border-amber-800/60', badge: 'bg-amber-950 text-amber-300 border-amber-800', icon: <ShieldAlert className="w-4 h-4 text-amber-400" /> },
};

const getEnvironmentTag = (e: CatalogEntry) => {
  if (e.tier === 'server' || e.tier === 'gpl' || e.name === 'Cardinal' || e.name === 'Dexed' || e.name === 'KXStudio') {
    return {
      label: 'Headless Carla Cloud',
      badge: 'bg-blue-950/80 text-blue-300 border-blue-800/70',
      icon: <Server className="w-3 h-3 text-blue-400" />,
    };
  }
  if (e.tier === 'foundation' && e.name === 'Google Magenta') {
    return {
      label: 'Client Neural Engine (TF.js)',
      badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/70',
      icon: <Sparkles className="w-3 h-3 text-emerald-400" />,
    };
  }
  if (e.tier === 'core') {
    return {
      label: 'Client Web Audio (WASM / JS)',
      badge: 'bg-teal-950/80 text-teal-300 border-teal-800/70',
      icon: <Cpu className="w-3 h-3 text-teal-400" />,
    };
  }
  return {
    label: 'Experimental / Opt-In',
    badge: 'bg-amber-950/80 text-amber-300 border-amber-800/70',
    icon: <ShieldAlert className="w-3 h-3 text-amber-400" />,
  };
};

export const CreditsLicensesSection: React.FC = () => {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});
  const [pendingRestricted, setPendingRestricted] = useState<CatalogEntry | null>(null);
  const [copiedManifest, setCopiedManifest] = useState(false);

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

  const handleToggle = (entry: CatalogEntry) => {
    if (entry.tier === 'restricted' && !enabled[entry.name]) {
      setPendingRestricted(entry);
      return;
    }
    toggle(entry.name);
  };

  const confirmRestricted = () => {
    if (pendingRestricted) {
      setEnabled((prev) => {
        const next = { ...prev, [pendingRestricted.name]: true };
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* storage unavailable */
        }
        return next;
      });
      setPendingRestricted(null);
    }
  };

  const copyManifest = () => {
    const manifest = {
      manifestVersion: 'syncromancer.engineManifest.v1',
      generatedAt: new Date().toISOString(),
      clientPermissiveEngines: CATALOG.filter(
        (e) => e.tier === 'core' || (e.tier === 'foundation' && e.name === 'Google Magenta')
      ).map((e) => ({ name: e.name, license: e.license })),
      carlaCloudRenderEngines: CATALOG.filter(
        (e) => (e.tier === 'gpl' && enabled[e.name]) || e.name === 'Cardinal' || e.name === 'Dexed'
      ).map((e) => ({ name: e.name, license: e.license, host: 'Headless Carla Linux Worker' })),
      restrictedEngines: CATALOG.filter(
        (e) => e.tier === 'restricted' && enabled[e.name]
      ).map((e) => ({ name: e.name, license: e.license })),
      storageContract: {
        sessionManifests: 'Supabase Postgres (JSONB + pgmq)',
        audioStems: 'SeaweedFS SHA-256 Content-Addressed Storage',
      },
    };
    navigator.clipboard.writeText(JSON.stringify(manifest, null, 2));
    setCopiedManifest(true);
    setTimeout(() => setCopiedManifest(false), 2500);
  };

  const gplEntries = CATALOG.filter((e) => e.tier === 'gpl');
  const gplEnabledCount = gplEntries.filter((e) => !!enabled[e.name]).length;
  const restrictedEntries = CATALOG.filter((e) => e.tier === 'restricted');
  const restrictedEnabledCount = restrictedEntries.filter((e) => !!enabled[e.name]).length;

  return (
    <section id="credits" className="py-24 bg-studio-950 border-t border-studio-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>OPEN SOURCE CREDITS &amp; LICENSES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Standing on the shoulders of giants.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Syncromancer is possible because of these open-source projects. Permissive libraries run in-browser
            by default. Copyleft engines render server-side in headless Carla cloud nodes. Experimental AGPL modules
            are strictly your choice.
          </p>
        </div>

        {/* Live Engine Configuration Status Bar */}
        <div className="mb-12 p-5 rounded-2xl bg-studio-900/90 border border-studio-700/80 shadow-xl flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300">Permissive Client:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                13 Active (100% Clean Bundle)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300">Carla Cloud Render:</span>
              <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold">
                {gplEnabledCount} of {gplEntries.length} Enabled
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300">Restricted / AGPL:</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                {restrictedEnabledCount} of {restrictedEntries.length} Enabled
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={copyManifest}
              className="px-3.5 py-1.5 rounded-lg bg-studio-800 hover:bg-studio-750 border border-studio-600 text-slate-200 font-medium flex items-center gap-1.5 transition-all text-xs"
            >
              {copiedManifest ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Studio Manifest</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Export Engine Manifest</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Catalog Tiers */}
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
                  <div className="mb-4 p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 flex gap-2.5">
                    <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <span>
                      These projects are either licensed under AGPL (network execution triggers source-sharing
                      obligations) or are archived upstream. They require an explicit acknowledgement modal
                      before activating in your studio profile.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {entries.map((e) => {
                    const env = getEnvironmentTag(e);
                    return (
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

                          <div className={`mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-medium ${env.badge}`}>
                            {env.icon}
                            <span>{env.label}</span>
                          </div>

                          <p className="text-xs text-slate-400 mt-2">{e.role}</p>
                          {e.note && <p className="text-[11px] text-slate-500 mt-1.5 italic">{e.note}</p>}
                        </div>

                        {meta.optIn && (
                          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none pt-2 border-t border-studio-800/60">
                            <input
                              type="checkbox"
                              checked={!!enabled[e.name]}
                              onChange={() => handleToggle(e)}
                              className="w-4 h-4 accent-cyan-500"
                            />
                            <span>Enable in my studio profile</span>
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-[11px] text-slate-500 text-center max-w-3xl mx-auto">
          All trademarks belong to their respective owners. Each project remains under its own
          license; full texts and source links are available on the linked repositories. Engine
          configurations are stored in your browser and synced with your Supabase studio profile.
        </p>
      </div>

      {/* AGPL / Restricted Confirmation Modal */}
      {pendingRestricted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-md w-full bg-studio-900 border border-amber-800/80 rounded-2xl p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setPendingRestricted(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-studio-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">License Acknowledgement</h4>
                <span className="text-xs font-mono text-amber-400">
                  {pendingRestricted.name} &bull; {pendingRestricted.license}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {pendingRestricted.license.includes('AGPL') ? (
                <>
                  <strong className="text-amber-300">{pendingRestricted.name}</strong> is licensed under the{' '}
                  <span className="font-mono text-amber-200">Affero General Public License (AGPL-3.0)</span>.
                  Network interaction with AGPL software may require providing corresponding source code to network users.
                  Syncromancer isolates this engine to dedicated opt-in worker environments.
                </>
              ) : (
                <>
                  <strong className="text-amber-300">{pendingRestricted.name}</strong> is archived or inactive upstream.
                  It is maintained only for legacy playback compatibility and receives no upstream security or bug fixes.
                </>
              )}
            </p>

            <div className="p-3 rounded-lg bg-studio-950 border border-studio-800 text-[11px] font-mono text-slate-400 mb-6">
              Role: {pendingRestricted.role}
              <br />
              Execution: Isolated Headless Container Worker
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setPendingRestricted(null)}
                className="px-4 py-2 rounded-xl bg-studio-800 hover:bg-studio-700 text-slate-300 text-xs font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmRestricted}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs font-black transition-colors"
              >
                I Understand &amp; Enable
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
