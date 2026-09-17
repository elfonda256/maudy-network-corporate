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
  Download,
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
    <section className="relative pt-32 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-transparent transition-colors">
      {/* Floating High-Tech Top Badge */}
      <div className="absolute top-28 right-8 lg:right-16 hidden xl:flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg text-[11px] font-tech text-slate-700 dark:text-slate-200 animate-float-slow z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-bold text-slate-800 dark:text-white">NOC STATUS:</span>
        <span className="text-red-600 dark:text-cyan-400 font-bold">24/7 OPERATIONAL</span>
        <span className="text-slate-400">• SLA 99.98%</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          {/* Left Column (Clean Corporate Typography & Brand CTA) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill mb-4 border border-red-500/20 text-xs font-tech font-bold text-red-600 dark:text-red-400 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>MISSION-CRITICAL ENTERPRISE INFRASTRUCTURE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002D62] dark:text-white tracking-tight leading-[1.15]">
                {lang === 'en' ? "Empowering Critical" : 'Maudy Network'}
                <br />
                <span className="text-gradient-brand">
                  {lang === 'en' ? 'Infrastructure Across Land & Sea' : 'Komunikasi Indonesia'}
                </span>
              </h1>
              <div className="mt-2 text-base sm:text-lg font-bold text-slate-500 dark:text-slate-400 tracking-tight">
                #BeyondInfrastructure • Solusi Jaringan, Keamanan Siber & IoT Terpadu
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              {lang === 'en'
                ? "Enterprise-grade IT Infrastructure, Fortinet NSE 7 Cybersecurity, Marine VSAT Networks, Industrial IoT Telemetry, AI Surveillance & Mission-Critical Software for Pertamina, Ministries, and Global Enterprises."
                : "Solusi Teknologi Terpadu: Arsitektur Jaringan Enterprise, Internet Satelit Kapal (VSAT), Keamanan Siber Fortinet NSE 7, Telemetri IoT Industri, CCTV AI, dan Rekayasa Perangkat Lunak Strategis."}
            </p>

            {/* Pill-shaped Action Buttons with Soft Shadows & Gradients */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3 rounded-full bg-gradient-brand hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {lang === 'en' ? 'Get Technical Consultation' : 'Konsultasi Teknis'}
              </button>

              <button
                onClick={onExploreProjects}
                className="px-6 py-3 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-cyan-300 border border-slate-300 dark:border-slate-700 hover:border-red-500 hover:-translate-y-0.5 active:translate-y-0 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm transition-all"
              >
                {lang === 'en' ? 'Explore Projects →' : 'Jelajahi Portofolio →'}
              </button>

              <a
                href="/downloads/MNK-Company-Profile-Official.pdf"
                download="PT-Maudy-Network-Komunikasi-Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title={lang === 'en' ? 'Download Official MNK Company Profile (PDF 2.9MB)' : 'Unduh Profil Perusahaan Resmi PT. MNK (PDF 2.9MB)'}
                className="px-5 py-3 rounded-full text-xs font-tech font-bold text-red-600 dark:text-cyan-400 border border-red-500/30 dark:border-cyan-500/30 hover:border-red-500 bg-red-500/10 dark:bg-slate-900/60 hover:-translate-y-0.5 transition-all flex items-center space-x-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Company Profile (PDF)' : 'Unduh Profil (PDF)'}</span>
              </a>
            </div>

            {/* Interactive Animated Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5">
              <div className="px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 hover:-translate-y-1 transition-all flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 shadow-xs cursor-default">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <div>
                  <span className="text-[10px] uppercase font-tech font-semibold text-slate-400 block -mb-0.5">CERTIFIED</span>
                  <span className="font-bold text-xs">Cisco CCNP</span>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-red-500/50 hover:-translate-y-1 transition-all flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 shadow-xs cursor-default">
                <Lock className="w-4 h-4 text-red-600 dark:text-red-400" />
                <div>
                  <span className="text-[10px] uppercase font-tech font-semibold text-slate-400 block -mb-0.5">SECURITY</span>
                  <span className="font-bold text-xs">Fortinet NSE 7</span>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 transition-all flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 shadow-xs cursor-default">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="text-[10px] uppercase font-tech font-semibold text-slate-400 block -mb-0.5">NATIONAL</span>
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
                  className="text-red-600 dark:text-cyan-400 underline hover:text-red-700 transition-colors"
                >
                  {lang === 'en'
                    ? 'MNK Service Level Agreement & Operational Guidelines'
                    : 'Pedoman Kepatuhan Layanan & Standar Kelaikan MNK'}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tidied Up, Elegant, Ultra-Crisp Simulator */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full rounded-[36px] bg-[#071322] dark:bg-[#071322] p-5 sm:p-7 overflow-hidden shadow-2xl border border-slate-700/80 gradient-border-top">
              {/* Subtle Ambient Red & Blue Corner Glow */}
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-red-600/15 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>

              {/* Top Navigation Bar of the Simulator */}
              <div className="relative z-20 flex items-center justify-between mb-5 pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-tech font-bold text-white tracking-wide">
                    MNK LIVE SIMULATOR
                  </span>
                </div>

                {/* Segmented Device Selector */}
                <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold">
                  <button
                    onClick={() => setActiveDevice('bot')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                      activeDevice === 'bot' || activeDevice === 'both'
                        ? 'bg-gradient-brand text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>PIS_BOT Sentinel</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('molinar')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                      activeDevice === 'molinar'
                        ? 'bg-gradient-brand text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>Molinar.id IoT</span>
                  </button>
                </div>
              </div>

              {/* Central Phone Mockup - Clean, Crisp, Not Overlapping */}
              <div className="relative z-10 flex items-center justify-center py-2">
                <div className="relative w-64 sm:w-72 h-[440px] sm:h-[470px] bg-slate-950 rounded-[38px] p-3 border-4 border-slate-700 shadow-2xl">
                  {/* Dynamic Island Speaker Bar */}
                  <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-between px-2.5">
                    <span className="w-2 h-2 rounded-full bg-slate-950"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  {/* Dynamic Screen based on selected tab */}
                  {activeDevice === 'molinar' ? (
                    /* Molinar.id Screen */
                    <div className="w-full h-[375px] sm:h-[405px] rounded-[24px] bg-white text-slate-800 p-3.5 text-xs overflow-hidden flex flex-col justify-between shadow-inner">
                      <div>
                        {/* App Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <div>
                            <div className="text-[9px] font-tech font-bold text-slate-400 tracking-wider">MOLINAR.ID</div>
                            <div className="text-xs font-bold text-[#0050AE] leading-tight">Industrial Telemetry</div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>ONLINE</span>
                          </span>
                        </div>

                        {/* Sensor Cards */}
                        <div className="mt-2.5 space-y-2">
                          {/* Shelter Temp */}
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

                          {/* Line Voltage */}
                          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                            <div className="flex items-center justify-between">
                              <div className="text-[9px] text-slate-500 font-medium">LINE VOLTAGE STABILIZER</div>
                              <span className="text-[9px] font-tech font-bold text-slate-800">223.8 V</span>
                            </div>
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

                          {/* Perimeter Access */}
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
                  ) : (
                    /* PIS_BOT Sentinel Screen */
                    <div className="w-full h-[375px] sm:h-[405px] rounded-[24px] bg-[#071322] p-3 text-white text-[10px] overflow-hidden flex flex-col justify-between border border-cyan-500/20">
                      <div>
                        {/* Top Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                          <div className="flex items-center space-x-1.5">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                            <span className="text-cyan-400 font-tech font-bold tracking-wider">PIS_BOT SENTINEL</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8px] font-bold font-tech">
                            VSAT 512K
                          </span>
                        </div>

                        {/* Radar Simulation Sweep */}
                        <div className="my-2.5 p-2 rounded-xl bg-slate-900/80 border border-slate-800 relative overflow-hidden flex items-center space-x-2.5">
                          <div className="relative w-9 h-9 rounded-full bg-slate-950 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                            <Navigation className="w-4 h-4 text-cyan-400 animate-spin duration-3000" />
                          </div>
                          <div>
                            <div className="text-[8px] text-slate-400 uppercase font-tech font-bold">Vessel Navigation</div>
                            <div className="text-[10px] font-bold text-white">05°14'S, 106°48'E</div>
                            <div className="text-[8px] text-emerald-400 font-semibold">Java Sea • Route Active</div>
                          </div>
                        </div>

                        {/* Bot Dialogue Log */}
                        <div className="space-y-1.5">
                          <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                            <div className="text-[8px] text-slate-400 font-semibold flex items-center justify-between">
                              <span className="font-tech">TELEMETRY BOT</span>
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
                              <span className="w-1 bg-red-500 h-2 rounded-full animate-pulse"></span>
                              <span className="w-1 bg-blue-500 h-3.5 rounded-full"></span>
                              <span className="w-1 bg-cyan-400 h-1.5 rounded-full animate-pulse"></span>
                              <span className="w-1 bg-blue-500 h-3 rounded-full"></span>
                              <span className="w-1 bg-red-500 h-2.5 rounded-full animate-pulse"></span>
                            </div>
                            <span className="text-[8px] font-tech font-bold text-cyan-300">512 Kbps</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Status */}
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[8px] text-slate-400">
                        <span className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          <span>Failover: Standby</span>
                        </span>
                        <span className="text-red-400 font-tech font-bold">MNK NOC 24/7</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Subtle Status Badges */}
              <div className="relative z-20 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400 font-tech">
                <div className="flex items-center space-x-1 text-slate-300">
                  <Radio className="w-3.5 h-3.5 text-blue-400" />
                  <span>Pertamina Tanker VSAT Fleet</span>
                </div>
                <div className="flex items-center space-x-1 text-emerald-400 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SLA 99.98% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
