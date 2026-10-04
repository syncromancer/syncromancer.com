export type CatalogTier = 'foundation' | 'core' | 'server' | 'gpl' | 'restricted';

export interface CatalogEntry {
  name: string;
  url: string;
  license: string;
  tier: CatalogTier;
  role: string;
  note?: string;
}

export const TIER_META: Record<
  CatalogTier,
  { title: string; blurb: string; optIn: boolean }
> = {
  foundation: {
    title: 'Foundation Engines',
    blurb:
      'The core architectural pillars of Syncromancer. Permissive client modules run in-browser; copyleft engines (Cardinal, Dexed) execute via server-side headless Carla nodes.',
    optIn: false,
  },
  core: {
    title: 'Core Libraries (Permissive Client)',
    blurb:
      'MIT / Apache / BSD licensed. Bundled in the studio client by default with zero usage or copyleft restrictions.',
    optIn: false,
  },
  server: {
    title: 'Cloud Processing & Headless Carla Host (Beta)',
    blurb:
      'Run exclusively on Syncromancer cloud render nodes. Carla hosts plugin graphs and offline bounce jobs; nothing is distributed to your browser.',
    optIn: false,
  },
  gpl: {
    title: 'Server-Side Carla Render Engines (GPL / LGPL) [Beta]',
    blurb:
      'All copyleft instruments and effects run exclusively in isolated headless Carla render containers on our cloud (in active development). Renders directly into SeaweedFS stems—zero GPL code is shipped to your client browser.',
    optIn: true,
  },
  restricted: {
    title: 'Optional Legacy Engines (Archived Upstream)',
    blurb:
      'Engines that are archived upstream or require pinned legacy builds. Off by default and enabled only at your explicit request.',
    optIn: true,
  },
};

export const CATALOG: CatalogEntry[] = [
  // Foundation
  { name: 'Cardinal', url: 'https://cardinal.kx.studio', license: 'GPL-3.0', tier: 'foundation', role: 'Modular synthesizer (VCV Rack based)', note: 'Runs in headless server-side Carla workers; renders lossless stems into SeaweedFS.' },
  { name: 'DISTRHO / DPF', url: 'https://distrho.sourceforge.io', license: 'ISC / GPL (per plugin)', tier: 'foundation', role: 'Plugin framework and classic plugins', note: 'DPF client wrapper with server-side Carla render pipeline.' },
  { name: 'KXStudio', url: 'https://github.com/KXStudio', license: 'GPL (per project)', tier: 'foundation', role: 'Audio tooling and routing', note: 'Powers the server-side Carla cloud routing infrastructure.' },
  { name: 'Dexed', url: 'https://github.com/asb2m10/dexed', license: 'GPL-3.0', tier: 'foundation', role: 'DX7 FM synthesizer', note: 'Server-side Carla render worker with zero client binary distribution.' },
  { name: 'Google Magenta', url: 'https://github.com/magenta/', license: 'Apache-2.0', tier: 'foundation', role: 'AI rhythm and melody assistance', note: 'In-browser TensorFlow.js / ONNX neural inference.' },

  // Core (permissive client)
  { name: 'Tone.js', url: 'https://github.com/Tonejs/Tone.js', license: 'MIT', tier: 'core', role: 'Transport, scheduling, synths and effects' },
  { name: 'Tonal', url: 'https://github.com/tonaljs/tonal', license: 'MIT', tier: 'core', role: 'Music theory: chords, scales, keys' },
  { name: '@tonejs/midi', url: 'https://github.com/Tonejs/Midi', license: 'MIT', tier: 'core', role: 'MIDI file import / export' },
  { name: 'WebMidi.js', url: 'https://github.com/djipco/webmidi', license: 'Apache-2.0', tier: 'core', role: 'Web MIDI hardware access' },
  { name: 'Web Audio Modules (WAM)', url: 'https://github.com/webaudiomodules', license: 'MIT', tier: 'core', role: 'Browser plugin standard' },
  { name: 'CLAP', url: 'https://github.com/free-audio/clap', license: 'MIT', tier: 'core', role: 'Modern open plugin ABI' },
  { name: 'Airwindows', url: 'https://github.com/airwindows/airwindows', license: 'MIT', tier: 'core', role: 'Boutique effects collection' },
  { name: 'Yjs', url: 'https://github.com/yjs/yjs', license: 'MIT', tier: 'core', role: 'Real-time conflict-free collaboration' },
  { name: 'Automerge', url: 'https://github.com/automerge/automerge', license: 'MIT', tier: 'core', role: 'Offline-first session merging' },
  { name: 'WebCodecs API', url: 'https://www.w3.org/TR/webcodecs/', license: 'W3C / Permissive', tier: 'core', role: 'In-browser hardware-accelerated audio encoding (Opus, AAC)', note: 'Native browser acceleration with zero copyleft licensing dependencies.' },
  { name: 'libflac.js', url: 'https://github.com/mmontag/libflac.js', license: 'BSD-3-Clause', tier: 'core', role: 'In-browser lossless FLAC compression' },
  { name: 'Magenta.js', url: 'https://github.com/magenta/magenta-js', license: 'Apache-2.0', tier: 'core', role: 'In-browser neural music models' },
  { name: 'Basic Pitch', url: 'https://github.com/spotify/basic-pitch', license: 'Apache-2.0', tier: 'core', role: 'Audio to MIDI transcription' },
  { name: 'OpenSheetMusicDisplay', url: 'https://github.com/opensheetmusicdisplay/opensheetmusicdisplay', license: 'BSD-3-Clause', tier: 'core', role: 'Notation rendering' },

  // Server-side only
  { name: 'Demucs', url: 'https://github.com/facebookresearch/demucs', license: 'MIT', tier: 'server', role: 'AI stem separation', note: 'Runs in GPU worker queue; renders separated stems into SeaweedFS.' },
  { name: 'Spleeter', url: 'https://github.com/deezer/spleeter', license: 'MIT', tier: 'server', role: 'Fast stem separation fallback', note: 'Runs server-side in containerized worker.' },
  { name: 'Carla', url: 'https://github.com/falkTX/Carla', license: 'GPL-2.0+', tier: 'server', role: 'Headless cloud plugin host & rendering engine for copyleft engines (Beta)', note: 'Executes on Linux cloud nodes; renders audio offline to SeaweedFS.' },
  { name: 'Rubber Band', url: 'https://github.com/breakfastquay/rubberband', license: 'GPL-2.0 (commercial available)', tier: 'server', role: 'Time-stretch and pitch-shift', note: 'Headless CLI worker; processes audio server-side only.' },

  // Optional GPL / LGPL (Server-Side Carla Rendered)
  { name: 'Surge XT', url: 'https://github.com/surge-synthesizer/surge', license: 'GPL-3.0', tier: 'gpl', role: 'Hybrid synthesizer', note: 'Hosted in headless Carla cloud nodes; audio renders into SeaweedFS layers.' },
  { name: 'Vitalium (Vital Port)', url: 'https://github.com/DISTRHO/DISTRHO-Ports', license: 'GPL-3.0', tier: 'gpl', role: 'Spectral wavetable synthesizer', note: 'Open-source build of Vital via DISTRHO-Ports; renders server-side in headless Carla.' },
  { name: 'ZynAddSubFX', url: 'https://github.com/zynaddsubfx/zynaddsubfx', license: 'GPL-2.0', tier: 'gpl', role: 'Additive / subtractive / pad synth', note: 'Headless Carla cloud render worker.' },
  { name: 'Hydrogen', url: 'https://github.com/hydrogen-music/hydrogen', license: 'GPL-2.0', tier: 'gpl', role: 'Drum machine and patterns', note: 'Headless Carla cloud pattern and drum engine.' },
  { name: 'aubio', url: 'https://github.com/aubio/aubio', license: 'GPL-3.0', tier: 'gpl', role: 'Pitch and beat detection', note: 'Server-side analysis job via Carla / worker pipeline.' },
  { name: 'Faust', url: 'https://github.com/grame-cncm/faust', license: 'GPL (compiler exception)', tier: 'gpl', role: 'DSP language for custom effects', note: 'Compiler exception allows clean client WASM; also supports Carla cloud render.' },
  { name: 'Calf Studio Gear', url: 'https://github.com/calf-studio-gear/calf', license: 'LGPL-2.1', tier: 'gpl', role: 'Compressor, EQ and reverb suite', note: 'LV2 rack hosted in headless Carla server nodes.' },
  { name: 'FluidSynth', url: 'https://github.com/FluidSynth/fluidsynth', license: 'LGPL-2.1', tier: 'gpl', role: 'High-quality SoundFont playback', note: 'Server-side Carla SoundFont render worker.' },

  // Optional restricted / legacy
  { name: 'Helm', url: 'https://github.com/mtytel/helm', license: 'GPL-3.0', tier: 'restricted', role: 'Subtractive synthesizer', note: 'Headless Carla render worker (archived upstream; pinned release).' },
  { name: 'sfizz', url: 'https://github.com/sfztools/sfizz', license: 'BSD-2-Clause', tier: 'restricted', role: 'SFZ sampler', note: 'Archived upstream; pinned release in Carla worker.' },
];
