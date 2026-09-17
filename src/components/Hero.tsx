import React, { useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  BarChart3,
  Send,
  Wifi,
  Anchor,
  CheckCircle2,
  Lock,
  Radio,
  Activity,
  Cpu,
  Smartphone,
  Navigation,
  Sparkles,
  Zap,
} from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenConsultation,
  onExploreProjects,
}) => {
  const [activeDevice, setActiveDevice] = useState<'both' | 'bot' | 'molinar'>('both');
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white dark:bg-[#081522] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail (Mandiri Style) */}
        <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-slate-500 mb-8 font-medium">
          <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href="#services" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
            {lang === 'en' ? 'Enterprise IT' : 'Infrastruktur IT'}
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-700 dark:text-slate-300 font-semibold">
            {lang === 'en' ? 'Critical Infrastructure Solutions' : 'Solusi Infrastruktur Strategis'}
          </span>
        </div>

        {/* Main Grid: Left Copy & Right Asymmetric Blue Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Clean Mandiri Corporate Typography & CTA) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002D62] dark:text-white tracking-tight leading-[1.15]">
                {lang === 'en' ? "Empowering Critical" : 'Maudy Network'}
                <br />
                <span className="text-gradient-creative">
                  {lang === 'en' ? 'Infrastructure' : 'Komunikasi'}
                </span>
              </h1>
              <div className="mt-2 text-lg sm:text-xl font-bold text-gradient-ocean dark:text-gradient-creative tracking-tight">
                #BeyondInfrastructure
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              {lang === 'en'
                ? "Enterprise-grade IT Infrastructure, Fortinet NSE 7 Cybersecurity, Marine VSAT Networks, Industrial IoT Telemetry, AI Surveillance & Mission-Critical Software for Pertamina, Ministries, and Global Enterprises."
                : "Solusi Teknologi Terpadu: Arsitektur Jaringan Enterprise, Internet Satelit Kapal (VSAT), Keamanan Siber Fortinet NSE 7, Telemetri IoT Industri, CCTV AI, dan Rekayasa Perangkat Lunak Strategis."}
            </p>

            {/* Pill-shaped Action Buttons with Soft Shadows & Gradients */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3 rounded-full bg-gradient-brand hover:opacity-95 text-white font-bold text-sm shadow-md hover:shadow-cyan-500/20 transition-all duration-200"
              >
                {lang === 'en' ? 'Get Consultation' : 'Konsultasi Teknis'}
              </button>

              <button
                onClick={onExploreProjects}
                className="px-6 py-3 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#0050AE] dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700 hover:border-[#0050AE] transition-colors"
              >
                {lang === 'en' ? 'Explore Flagship Projects →' : 'Jelajahi Portofolio →'}
              </button>
            </div>

            {/* Soft, Harmonious Badges (No harsh pure-black boxes) */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5">
              <div className="px-3.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0050AE] dark:text-cyan-400" />
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block -mb-0.5">CERTIFIED</span>
                  <span className="font-bold text-xs">Cisco CCNP</span>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 shadow-xs">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block -mb-0.5">SECURITY</span>
                  <span className="font-bold text-xs">Fortinet NSE 7</span>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                <div>
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block -mb-0.5">NATIONAL</span>
                  <span className="font-bold text-xs">BNSP Standard</span>
                </div>
              </div>
            </div>

            {/* Fine Print Footnote */}
            <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 space-y-1">
              <div>
                {lang === 'en'
                  ? '*Operated by certified network architects with 99.9% uptime SLA guarantee'
                  : '*Dikelola langsung oleh arsitek jaringan bersertifikasi dengan jaminan SLA 99.9%'}
              </div>
              <div>
                <a
                  href="#certifications"
                  className="text-[#0050AE] dark:text-cyan-400 underline hover:text-blue-700 transition-colors"
                >
                  {lang === 'en'
                    ? 'MNK Service Level Agreement & Operational Guidelines'
                    : 'Pedoman Kepatuhan Layanan & Standar Kelaikan MNK'}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Ultra-Creative Red-Blue-Red Showcase (Signature MNK PDF Gradient) */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative w-full rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 overflow-hidden shadow-2xl border border-white/20 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 14%, #0050AE 46%, #081522 60%, #991B1B 84%, #DC2626 100%)',
              }}
            >
              {/* Organic Signature Red-Blue-Red Flowing Wave Overlay (from PDF Brand Identity) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-35 mix-blend-overlay"
                viewBox="0 0 700 700"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="mnkBrandWave" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
                    <stop offset="48%" stopColor="#0050AE" stopOpacity="0.8" />
                    <stop offset="80%" stopColor="#1E3A8A" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,180 C200,60 350,320 700,160 L700,700 L0,700 Z"
                  fill="url(#mnkBrandWave)"
                />
              </svg>

              {/* High-Tech Dot Matrix Pattern */}
              <div className="absolute top-0 right-0 w-72 h-72 dot-pattern opacity-30 pointer-events-none"></div>

              {/* Glowing Ambient Light Orbs */}
              <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-rose-600/40 blur-3xl pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-600/30 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-amber-500/30 blur-2xl pointer-events-none"></div>

              {/* Top Interactive Mode Switcher (Glass Pill) */}
              <div className="relative z-20 flex items-center justify-between mb-6 pb-3 border-b border-white/15">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-white">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Live Tech Simulator
                  </span>
                </div>

                {/* Interactive Toggles */}
                <div className="inline-flex p-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-[10px] font-bold">
                  <button
                    onClick={() => setActiveDevice('bot')}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      activeDevice === 'bot'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    PIS_BOT
                  </button>
                  <button
                    onClick={() => setActiveDevice('molinar')}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      activeDevice === 'molinar'
                        ? 'bg-[#0050AE] text-white shadow-sm'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Molinar.id
                  </button>
                  <button
                    onClick={() => setActiveDevice('both')}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      activeDevice === 'both'
                        ? 'bg-gradient-to-r from-rose-600 to-blue-600 text-white shadow-sm'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Dual Sync
                  </button>
                </div>
              </div>

              {/* Floating Holographic 3D Glass Badges */}
              {/* Top-Left: VSAT Maritime Satellite Badge */}
              <div className="absolute top-16 left-3 sm:left-6 z-20 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 shadow-xl hover:scale-105 transition-transform hidden sm:flex items-center space-x-2 text-white">
                <div className="p-1.5 rounded-xl bg-blue-500/30 text-cyan-300 border border-cyan-400/30">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-tight">VSAT Oceanic Satellite</div>
                  <div className="text-[9px] text-emerald-300 font-semibold flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>SLA 99.98% Locked</span>
                  </div>
                </div>
              </div>

              {/* Top-Right: Fortinet Cybersecurity Badge */}
              <div className="absolute top-16 right-3 sm:right-6 z-20 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 shadow-xl hover:scale-105 transition-transform hidden sm:flex items-center space-x-2 text-white">
                <div className="p-1.5 rounded-xl bg-rose-500/30 text-rose-300 border border-rose-400/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-tight">Fortinet NSE 7</div>
                  <div className="text-[9px] text-cyan-300 font-semibold">Zero-Trust Active</div>
                </div>
              </div>

              {/* Central Smartphones Container */}
              <div className="relative z-10 flex items-center justify-center pt-4 pb-6 sm:pb-8">
                {/* Back / Left Phone: PIS_BOT Maritime Network Sentinel */}
                <div
                  className={`relative w-48 sm:w-56 h-[390px] sm:h-[430px] bg-slate-950 rounded-[36px] p-3 border-4 border-slate-700 shadow-2xl transition-all duration-500 ${
                    activeDevice === 'bot'
                      ? 'scale-105 z-30 rotate-0 shadow-cyan-500/20'
                      : activeDevice === 'molinar'
                      ? 'scale-90 opacity-60 -rotate-12 translate-x-4'
                      : '-rotate-6 hover:rotate-0 z-10'
                  }`}
                >
                  {/* Dynamic Island Speaker Bar */}
                  <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                    <span className="w-2 h-1 rounded-full bg-slate-900"></span>
                  </div>

                  {/* Phone Screen: PIS_BOT Dark Maritime Command */}
                  <div className="w-full h-[330px] sm:h-[370px] rounded-[24px] bg-[#071322] p-3 text-white text-[10px] overflow-hidden flex flex-col justify-between border border-cyan-500/20">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <div className="flex items-center space-x-1.5">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                          <span className="text-cyan-400 font-bold tracking-wider">PIS_BOT SENTINEL</span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8px] font-bold">
                          VSAT 512K
                        </span>
                      </div>

                      {/* Radar Simulation Sweep */}
                      <div className="my-2.5 p-2 rounded-xl bg-slate-900/80 border border-slate-800 relative overflow-hidden flex items-center space-x-2.5">
                        <div className="relative w-9 h-9 rounded-full bg-slate-950 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                          <div className="absolute inset-0 rounded-full border border-cyan-500/20"></div>
                          <Navigation className="w-4 h-4 text-cyan-400 animate-spin duration-3000" />
                        </div>
                        <div>
                          <div className="text-[8px] text-slate-400 uppercase font-bold">Vessel Navigation</div>
                          <div className="text-[10px] font-bold text-white">05°14'S, 106°48'E</div>
                          <div className="text-[8px] text-emerald-400 font-semibold">Java Sea • Route Active</div>
                        </div>
                      </div>

                      {/* Bot Dialogue Log */}
                      <div className="space-y-1.5">
                        <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                          <div className="text-[8px] text-slate-400 font-semibold flex items-center justify-between">
                            <span>TELEMETRY BOT</span>
                            <span className="text-cyan-400">14:22 WIB</span>
                          </div>
                          <p className="text-[9px] text-slate-200 mt-0.5 leading-snug">
                            All 12 Tanker Nodes synced with Telkomsat Ku-Band. Bandwidth QoS shaping active.
                          </p>
                        </div>

                        {/* Bandwidth Equalizer Bars */}
                        <div className="bg-slate-900/70 p-2 rounded-xl border border-slate-800 flex items-center justify-between">
                          <span className="text-[8px] text-slate-400">QoS Traffic:</span>
                          <div className="flex items-end space-x-1 h-3.5">
                            <span className="w-1 bg-cyan-400 h-2 rounded-full animate-pulse"></span>
                            <span className="w-1 bg-cyan-400 h-3.5 rounded-full"></span>
                            <span className="w-1 bg-cyan-400 h-1.5 rounded-full animate-pulse"></span>
                            <span className="w-1 bg-cyan-400 h-3 rounded-full"></span>
                            <span className="w-1 bg-cyan-400 h-2.5 rounded-full animate-pulse"></span>
                          </div>
                          <span className="text-[8px] font-bold text-cyan-300">512 Kbps</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[8px] text-slate-400">
                      <span className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Failover: Standby</span>
                      </span>
                      <span className="text-cyan-400 font-bold">MNK NOC 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Front / Right Phone: Molinar.id IoT Telemetry App */}
                <div
                  className={`relative -ml-16 sm:-ml-20 w-52 sm:w-60 h-[420px] sm:h-[460px] bg-slate-950 rounded-[38px] p-3.5 border-4 border-slate-600 shadow-2xl transition-all duration-500 ${
                    activeDevice === 'molinar'
                      ? 'scale-105 z-30 rotate-0 shadow-blue-500/30'
                      : activeDevice === 'bot'
                      ? 'scale-90 opacity-60 rotate-12 -translate-x-4'
                      : 'rotate-3 hover:rotate-0 z-20'
                  }`}
                >
                  {/* Dynamic Island with Camera */}
                  <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-between px-2.5">
                    <span className="w-2 h-2 rounded-full bg-slate-950"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>

                  {/* Phone Screen: Molinar.id Clean Modern Telemetry */}
                  <div className="w-full h-[360px] sm:h-[395px] rounded-[24px] bg-white text-slate-800 p-3.5 text-xs overflow-hidden flex flex-col justify-between shadow-inner">
                    <div>
                      {/* App Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div>
                          <div className="text-[9px] font-bold text-slate-400 tracking-wider">MOLINAR.ID</div>
                          <div className="text-xs font-bold text-[#0050AE] leading-tight">Industrial Telemetry</div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>ONLINE</span>
                        </span>
                      </div>

                      {/* Sensor Cards */}
                      <div className="mt-2.5 space-y-2">
                        {/* Cabinet Temp with dial */}
                        <div className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-100/80 flex items-center justify-between">
                          <div>
                            <div className="text-[9px] text-slate-500 font-medium">SHELTER TEMPERATURE</div>
                            <div className="text-sm font-bold text-[#0050AE]">26.4 °C</div>
                            <div className="text-[8px] text-emerald-600 font-semibold">Optimal Range • Fan Normal</div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0050AE] font-bold text-[10px]">
                            26°
                          </div>
                        </div>

                        {/* Shelter Voltage with Real Sparkline Graph */}
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                          <div className="flex items-center justify-between">
                            <div className="text-[9px] text-slate-500 font-medium">LINE VOLTAGE STABILIZER</div>
                            <span className="text-[9px] font-bold text-slate-800">223.8 V</span>
                          </div>
                          {/* Live SVG Sparkline Wave */}
                          <div className="mt-1.5 h-5 w-full">
                            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                              <path
                                d="M0,10 L15,10 L25,4 L35,16 L45,10 L60,10 L70,3 L80,17 L90,10 L100,10"
                                fill="none"
                                stroke="#0050AE"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <div className="flex justify-between text-[8px] text-slate-400 mt-0.5">
                            <span>Nominal 220V</span>
                            <span className="text-emerald-600 font-bold">Stable (0.2% Var)</span>
                          </div>
                        </div>

                        {/* Perimeter Access Security */}
                        <div className="bg-emerald-50/80 p-2 rounded-xl border border-emerald-200/80 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="p-1 rounded-lg bg-emerald-200/70 text-emerald-800">
                              <Lock className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-[9px] text-emerald-900 font-bold leading-tight">PERIMETER ACCESS</div>
                              <div className="text-[8px] text-emerald-700">Magnetic Door Sensor Locked</div>
                            </div>
                          </div>
                          <span className="text-[9px] font-bold text-emerald-700">SECURE</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Signal Status */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-500">
                      <span className="flex items-center space-x-1">
                        <Wifi className="w-3 h-3 text-[#0050AE]" />
                        <span>LTE: -68 dBm</span>
                      </span>
                      <span className="text-[#0050AE] font-bold">MNK Cloud IoT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Holographic Badges */}
              {/* Bottom-Left: Maritime Fleet Sync */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-1.5 shadow-lg hidden sm:flex items-center space-x-2 text-white text-[10px]">
                <Anchor className="w-3.5 h-3.5 text-cyan-300" />
                <span className="font-bold">Pertamina Maritime Fleet Sentinel</span>
              </div>

              {/* Bottom-Right: Molinar.id IoT Sync */}
              <div className="absolute bottom-4 right-4 z-20 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-1.5 shadow-lg hidden sm:flex items-center space-x-2 text-white text-[10px]">
                <Activity className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-bold">Molinar.id Smart Telemetry Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
