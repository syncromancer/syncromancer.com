'use client';

import React from 'react';
import {
  Server,
  HardDrive,
  Database,
  Lock,
  Terminal,
  Layers,
  Cpu,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const DeploymentArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-studio-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono font-semibold mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>CLOUD-NATIVE ARCHITECTURE & KUBERNETES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Deploy on Any Kubernetes Cluster.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Run your private DaaS instance in your private cloud, on-premises studio datacenter, or
            managed Kubernetes. Fully packaged as a production Helm chart.
          </p>
        </div>

        {/* 4-Tier Architecture Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Tier 1: Client Edge */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-wider block mb-1">
                Tier 1: Edge & Client
              </span>
              <h3 className="text-base font-bold text-white mb-2">Web Audio & WASM</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                64-bit float multi-track mixing, offline buffer rendering, WebAssembly Cardinal modular
                engine, and zero-latency audio worklets directly in Chrome, Firefox, or Safari.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-slate-400">
              Zero native plugins required
            </div>
          </div>

          {/* Tier 2: DaaS Portal */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold tracking-wider block mb-1">
                Tier 2: Control Plane
              </span>
              <h3 className="text-base font-bold text-white mb-2">Portal App Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Next.js full-stack studio portal hosted at{' '}
                <code className="text-cyan-300">portal.syncromancer.com</code>. Manages collaborative
                sessions, seat billing, Git webhooks, and team access.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-blue-400">
              Auto-scales with Ingress NGINX
            </div>
          </div>

          {/* Tier 3: Storage */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-purple-400 uppercase font-bold tracking-wider block mb-1">
                Tier 3: Audio Storage
              </span>
              <h3 className="text-base font-bold text-white mb-2">SeaweedFS Cluster</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-throughput distributed object store with master, filer, and volume nodes.
                Delivers blazingly fast seek times and sequential reads for multi-gigabyte 24-bit/96kHz stems.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-purple-400">
              O(1) disk lookups & POSIX filer
            </div>
          </div>

          {/* Tier 4: Metadata & Auth */}
          <div className="bg-studio-900 border border-studio-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                Tier 4: Enterprise Identity
              </span>
              <h3 className="text-base font-bold text-white mb-2">LDAP & Supabase</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise Active Directory / OpenLDAP group mapping to DAW roles (Owner, Engineer,
                Contributor, Guest), paired with Supabase PostgreSQL for session state and PR manifests.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-studio-800 font-mono text-[10px] text-emerald-400">
              Enterprise RBAC & TLS 1.3
            </div>
          </div>
        </div>

        {/* Kubernetes Storage Engine Comparison */}
        <div className="bg-studio-900/90 border border-studio-800 rounded-3xl p-8 mb-12">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-cyan-400" />
              <span>Kubernetes Storage Options for Audio Workloads</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Multi-track audio playback requires deterministic sequential read throughput and microsecond
              random seeks. Our Helm chart supports all major cloud-native storage provisioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* OpenEBS */}
            <div className="p-5 bg-studio-950 rounded-2xl border border-studio-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-cyan-300">OpenEBS Mayastor</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-mono text-[9px] uppercase font-bold">
                    NVMe-oF Speed
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Uses user-space SPDK and NVMe over Fabrics. Delivers raw physical NVMe drive IOPS
                  with sub-millisecond latencies. Ideal for high-density SeaweedFS volume servers.
                </p>
              </div>
              <div className="pt-3 border-t border-studio-800/80 font-mono text-[10px] text-slate-400 flex flex-col gap-1">
                <span>• Throughput: Up to 10 GB/s</span>
                <span>• Best For: On-Premises Studio NVMe</span>
              </div>
            </div>

            {/* Rook/Ceph */}
            <div className="p-5 bg-studio-950 rounded-2xl border border-studio-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-blue-300">Rook / Ceph</span>
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 font-mono text-[9px] uppercase font-bold">
                    Enterprise Resilient
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Industry gold-standard distributed Ceph cluster. Offers block (RBD), POSIX (CephFS),
                  and S3 object storage with multi-node replication and self-healing resilience.
                </p>
              </div>
              <div className="pt-3 border-t border-studio-800/80 font-mono text-[10px] text-slate-400 flex flex-col gap-1">
                <span>• Throughput: High Distributed Scale</span>
                <span>• Best For: Multi-Rack Production DaaS</span>
              </div>
            </div>

            {/* Longhorn */}
            <div className="p-5 bg-studio-950 rounded-2xl border border-studio-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-purple-300">Longhorn</span>
                  <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-400 font-mono text-[9px] uppercase font-bold">
                    Lightweight & Backups
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Simple, 100% open-source distributed block storage by SUSE. Built-in incremental
                  cross-cluster snapshots and automatic backups to S3/NFS. Low resource footprint.
                </p>
              </div>
              <div className="pt-3 border-t border-studio-800/80 font-mono text-[10px] text-slate-400 flex flex-col gap-1">
                <span>• Throughput: Balanced IOPS</span>
                <span>• Best For: Edge Studios & Cloud K8s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Helm Quickstart Terminal */}
        <div className="max-w-4xl mx-auto bg-studio-900 border border-studio-800 rounded-2xl p-6 font-mono text-xs shadow-2xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-studio-800 text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-bold">Quickstart Helm Installation</span>
            </div>
            <span>helm v3.x compatible</span>
          </div>

          <div className="flex flex-col gap-2.5 text-slate-300">
            <div>
              <span className="text-slate-500"># 1. Add and inspect the Syncromancer Helm chart</span>
              <p className="text-cyan-300 font-bold">
                helm repo add syncromancer https://charts.syncromancer.com
              </p>
            </div>
            <div>
              <span className="text-slate-500"># 2. Deploy full DaaS stack with SeaweedFS, LDAP, and Ingress</span>
              <p className="text-emerald-400 font-bold">
                helm install syncromancer ./apps/saas/helm \
                <br />
                &nbsp;&nbsp;--namespace syncromancer --create-namespace \
                <br />
                &nbsp;&nbsp;--set ingress.host=portal.syncromancer.com \
                <br />
                &nbsp;&nbsp;--set storage.className=openebs-kernel-nvme
              </p>
            </div>
            <div>
              <span className="text-slate-500"># 3. Access your private studio instance</span>
              <p className="text-purple-300">
                kubectl get ingress -n syncromancer &rarr; https://portal.syncromancer.com/
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
