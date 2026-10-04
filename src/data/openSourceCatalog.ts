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
    blurb: 'The projects Syncromancer is built on. Always present.',
    optIn: false,
  },
  core: {
    title: 'Core Libraries (Permissive)',
    blurb:
      'MIT / Apache / BSD licensed. Bundled in the studio by default with no usage restrictions.',
    optIn: false,
  },
  server: {
    title: 'Cloud Processing Services',
    blurb:
      'Run on Syncromancer servers only. Nothing from these projects is shipped to your browser.',
    optIn: false,
  },
  gpl: {
    title: 'Optional Engines (GPL / LGPL)',
    blurb:
      'Powerful copyleft instruments and effects. Off by default; you choose which to enable. Source is available under each project\u2019s license.',
    optIn: true,
  },
  restricted: {
    title: 'Optional Experimental (AGPL / Unmaintained)',
    blurb:
      'Stricter licenses or projects that are archived or no longer maintained. Off by default and enabled only at your explicit request.',
    optIn: true,
  },
};

export const CATALOG: CatalogEntry[] = [
  // Foundation
  { name: 'Cardinal', url: 'https://cardinal.kx.studio', license: 'GPL-3.0', tier: 'foundation', role: 'Modular synthesizer (VCV Rack based)' },
  { name: 'DISTRHO / DPF', url: 'https://distrho.sourceforge.io', license: 'ISC / GPL (per plugin)', tier: 'foundation', role: 'Plugin framework and classic plugins', note: 'Licenses vary by individual plugin.' },
  { name: 'KXStudio', url: 'https://github.com/KXStudio', license: 'GPL (per project)', tier: 'foundation', role: 'Audio tooling and routing' },
  { name: 'Dexed', url: 'https://github.com/asb2m10/dexed', license: 'GPL-3.0', tier: 'foundation', role: 'DX7 FM synthesizer' },
  { name: 'Google Magenta', url: 'https://github.com/magenta/', license: 'Apache-2.0', tier: 'foundation', role: 'AI rhythm and melody assistance' },

  // Core (permissive)
  { name: 'Tone.js', url: 'https://github.com/Tonejs/Tone.js', license: 'MIT', tier: 'core', role: 'Transport, scheduling, synths and effects' },
  { name: 'Tonal', url: 'https://github.com/tonaljs/tonal', license: 'MIT', tier: 'core', role: 'Music theory: chords, scales, keys' },
  { name: '@tonejs/midi', url: 'https://github.com/Tonejs/Midi', license: 'MIT', tier: 'core', role: 'MIDI file import / export' },
  { name: 'WebMidi.js', url: 'https://github.com/djipco/webmidi', license: 'Apache-2.0', tier: 'core', role: 'Web MIDI hardware access' },
  { name: 'Web Audio Modules (WAM)', url: 'https://github.com/webaudiomodules', license: 'MIT', tier: 'core', role: 'Browser plugin standard' },
  { name: 'CLAP', url: 'https://github.com/free-audio/clap', license: 'MIT', tier: 'core', role: 'Modern open plugin ABI' },
  { name: 'Airwindows', url: 'https://github.com/airwindows/airwindows', license: 'MIT', tier: 'core', role: 'Boutique effects collection' },
  { name: 'Yjs', url: 'https://github.com/yjs/yjs', license: 'MIT', tier: 'core', role: 'Real-time conflict-free collaboration' },
  { name: 'Automerge', url: 'https://github.com/automerge/automerge', license: 'MIT', tier: 'core', role: 'Offline-first session merging' },
  { name: 'ffmpeg.wasm', url: 'https://github.com/ffmpegwasm/ffmpeg.wasm', license: 'MIT', tier: 'core', role: 'In-browser transcoding and export' },
  { name: 'Magenta.js', url: 'https://github.com/magenta/magenta-js', license: 'Apache-2.0', tier: 'core', role: 'In-browser neural music models' },
  { name: 'Basic Pitch', url: 'https://github.com/spotify/basic-pitch', license: 'Apache-2.0', tier: 'core', role: 'Audio to MIDI transcription' },
  { name: 'OpenSheetMusicDisplay', url: 'https://github.com/opensheetmusicdisplay/opensheetmusicdisplay', license: 'BSD-3-Clause', tier: 'core', role: 'Notation rendering' },

  // Server-side only
  { name: 'Demucs', url: 'https://github.com/facebookresearch/demucs', license: 'MIT', tier: 'server', role: 'AI stem separation', note: 'Repository is archived; pinned to a vetted release.' },
  { name: 'Spleeter', url: 'https://github.com/deezer/spleeter', license: 'MIT', tier: 'server', role: 'Stem separation' },
  { name: 'Carla', url: 'https://github.com/falkTX/Carla', license: 'GPL-2.0+', tier: 'server', role: 'Server-side plugin host for cloud rendering' },
  { name: 'Rubber Band', url: 'https://github.com/breakfastquay/rubberband', license: 'GPL-2.0 (commercial available)', tier: 'server', role: 'Time-stretch and pitch-shift' },

  // Optional GPL / LGPL
  { name: 'Surge XT', url: 'https://github.com/surge-synthesizer/surge', license: 'GPL-3.0', tier: 'gpl', role: 'Hybrid synthesizer' },
  { name: 'Vital', url: 'https://github.com/mtytel/vital', license: 'GPL-3.0', tier: 'gpl', role: 'Wavetable synthesizer', note: 'Upstream quiet since 2023.' },
  { name: 'ZynAddSubFX', url: 'https://github.com/zynaddsubfx/zynaddsubfx', license: 'GPL-2.0', tier: 'gpl', role: 'Additive / subtractive / pad synth' },
  { name: 'Hydrogen', url: 'https://github.com/hydrogen-music/hydrogen', license: 'GPL-2.0', tier: 'gpl', role: 'Drum machine and patterns' },
  { name: 'aubio', url: 'https://github.com/aubio/aubio', license: 'GPL-3.0', tier: 'gpl', role: 'Pitch and beat detection' },
  { name: 'Faust', url: 'https://github.com/grame-cncm/faust', license: 'GPL (compiler exception)', tier: 'gpl', role: 'DSP language for custom effects', note: 'Generated code is not GPL-bound under the compiler exception.' },
  { name: 'Calf Studio Gear', url: 'https://github.com/calf-studio-gear/calf', license: 'LGPL-2.1', tier: 'gpl', role: 'Compressor, EQ and reverb suite' },
  { name: 'FluidSynth', url: 'https://github.com/FluidSynth/fluidsynth', license: 'LGPL-2.1', tier: 'gpl', role: 'High-quality SoundFont playback' },

  // Optional restricted
  { name: 'Essentia.js', url: 'https://github.com/MTG/essentia.js', license: 'AGPL-3.0', tier: 'restricted', role: 'BPM, key and onset analysis', note: 'AGPL: network use triggers source obligations.' },
  { name: 'Helm', url: 'https://github.com/mtytel/helm', license: 'GPL-3.0', tier: 'restricted', role: 'Subtractive synthesizer', note: 'Archived upstream; no further updates.' },
  { name: 'sfizz', url: 'https://github.com/sfztools/sfizz', license: 'BSD-2-Clause', tier: 'restricted', role: 'SFZ sampler', note: 'Archived upstream; no further updates.' },
];
