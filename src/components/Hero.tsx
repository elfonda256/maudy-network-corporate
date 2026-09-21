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
  Battery,
  Signal,
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
  const [activeDevice, setActiveDevice] = useState<'both' | 'bot' | 'molinar' | 'aegis' | 'xtur'>('bot');
  const [simulatorPumpState, setSimulatorPumpState] = useState<boolean>(true);
  return (
    <section className="hero-section relative pt-36 sm:pt-40 pb-16 lg:pb-24 overflow-hidden bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Left Copy & Right Interactive Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Clean Corporate Typography & Brand CTA) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-white/90 shadow-sm backdrop-blur-md mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-white">NOC 24/7 ONLINE</span>
                <span className="text-white/40">•</span>
                <span className="text-[#2997FF] font-semibold">SLA 99.98%</span>
                <span className="text-white/40 hidden sm:inline">•</span>
                <span className="text-white/70 hidden sm:inline">MISSION-CRITICAL INFRASTRUCTURE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.08]">
                {lang === 'en' ? "Empowering Critical" : 'Maudy Network'}
                <br />
                <span className="text-gradient-brand">
                  {lang === 'en' ? 'Infrastructure Across Land & Sea' : 'Komunikasi Indonesia'}
                </span>
              </h1>
              <div className="mt-3 text-base sm:text-lg font-medium text-[#6E6E73] dark:text-[#A1A1A6] tracking-tight">
                #BeyondInfrastructure • Solusi Jaringan, Keamanan Siber &amp; IoT Terpadu
              </div>
            </div>

            <p className="text-[#6E6E73] dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              {lang === 'en'
                ? "Enterprise-grade IT Infrastructure, Fortinet NSE 7 Cybersecurity, Marine VSAT Networks, Industrial IoT Telemetry, AI Surveillance & Mission-Critical Software for Pertamina, Ministries, and Global Enterprises."
                : "Solusi Teknologi Terpadu: Arsitektur Jaringan Enterprise, Internet Satelit Kapal (VSAT), Keamanan Siber Fortinet NSE 7, Telemetri IoT Industri, CCTV AI, dan Rekayasa Perangkat Lunak Strategis."}
            </p>

            {/* Apple Pill Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="apple-pill-btn px-7 py-3 text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                {lang === 'en' ? 'Get Technical Consultation' : 'Konsultasi Teknis'}
              </button>

              <button
                onClick={onExploreProjects}
                className="apple-pill-btn px-6 py-3 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/[0.06] dark:hover:bg-white/[0.1] border border-black/[0.08] dark:border-white/[0.12] active:scale-95 transition-all cursor-pointer"
              >
                {lang === 'en' ? 'Explore Projects →' : 'Jelajahi Portofolio →'}
              </button>

              <a
                href="/downloads/MNK-Company-Profile-Official.pdf"
                download="PT-Maudy-Network-Komunikasi-Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title={lang === 'en' ? 'Download Official MNK Company Profile (PDF 2.9MB)' : 'Unduh Profil Perusahaan Resmi PT. MNK (PDF 2.9MB)'}
                className="apple-pill-btn px-5 py-3 text-xs font-medium text-[#0071E3] dark:text-[#2997FF] bg-[#0071E3]/10 dark:bg-white/[0.06] border border-[#0071E3]/25 dark:border-white/[0.1] hover:bg-[#0071E3]/15 active:scale-95 transition-all flex items-center space-x-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Company Profile (PDF)' : 'Unduh Profil (PDF)'}</span>
              </a>
            </div>

            {/* Apple Bento Partner Micro-Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5">
              <div className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 transition-all flex items-center space-x-2.5 text-xs text-[#1D1D1F] dark:text-[#F5F5F7] shadow-xs cursor-default">
                <div className="w-6 h-6 rounded-xl bg-slate-50 dark:bg-white p-1 flex items-center justify-center border border-black/[0.06] shrink-0">
                  <img src="/logos/cisco.png" alt="Cisco" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono font-medium text-[#86868B] block -mb-0.5">CERTIFIED</span>
                  <span className="font-semibold text-xs">Cisco CCNP</span>
                </div>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 transition-all flex items-center space-x-2.5 text-xs text-[#1D1D1F] dark:text-[#F5F5F7] shadow-xs cursor-default">
                <div className="w-6 h-6 rounded-xl bg-slate-50 dark:bg-white p-1 flex items-center justify-center border border-black/[0.06] shrink-0">
                  <img src="/logos/fortinet.png" alt="Fortinet" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono font-medium text-[#86868B] block -mb-0.5">SECURITY</span>
                  <span className="font-semibold text-xs">Fortinet NSE 7</span>
                </div>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#161617] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 transition-all flex items-center space-x-2.5 text-xs text-[#1D1D1F] dark:text-[#F5F5F7] shadow-xs cursor-default">
                <div className="w-6 h-6 rounded-xl bg-slate-50 dark:bg-white p-1 flex items-center justify-center border border-black/[0.06] shrink-0">
                  <img src="/logos/bnsp.png" alt="BNSP" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono font-medium text-[#86868B] block -mb-0.5">NATIONAL</span>
                  <span className="font-semibold text-xs">BNSP Standard</span>
                </div>
              </div>
            </div>

            {/* Fine Print Footnote */}
            <div className="text-[11px] text-[#86868B] pt-2 space-y-1">
              <div>
                {lang === 'en'
                  ? '*Operated by certified network architects with 99.9% uptime SLA guarantee'
                  : '*Dikelola langsung oleh arsitek jaringan bersertifikasi dengan jaminan SLA 99.9%'}
              </div>
              <div>
                <a
                  href="#certifications"
                  className="text-[#0071E3] dark:text-[#2997FF] hover:underline transition-colors"
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
            <div className="relative w-full rounded-[36px] bg-white dark:bg-[#161617] p-4 sm:p-6 overflow-hidden shadow-2xl border border-black/[0.08] dark:border-white/[0.08] transition-all">
              {/* Subtle Ambient Light Corner Glow */}
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-blue-600/5 dark:bg-[#0071E3]/15 blur-3xl pointer-events-none"></div>

              {/* Top Navigation Bar of the Simulator */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-mono font-semibold text-[#1D1D1F] dark:text-white tracking-wider flex items-center space-x-1.5">
                    <span>MNK LIVE SIMULATOR</span>
                    <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-black/[0.04] text-[#1D1D1F] dark:bg-white/[0.08] dark:text-white font-medium border border-black/[0.06] dark:border-white/[0.08]">
                      iPhone 17 Pro
                    </span>
                  </span>
                </div>

                {/* Apple Style Segmented 4-Engine Selector */}
                <div className="inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-xs font-medium">
                  <button
                    onClick={() => setActiveDevice('bot')}
                    className={`px-3 py-1 rounded-full transition-all flex items-center space-x-1.5 cursor-pointer ${
                      activeDevice === 'bot' || activeDevice === 'both'
                        ? 'bg-[#0071E3] text-white shadow-xs'
                        : 'text-[#6E6E73] dark:text-slate-400 hover:text-[#1D1D1F] dark:hover:text-white'
                    }`}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>PIS_BOT</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('molinar')}
                    className={`px-3 py-1 rounded-full transition-all flex items-center space-x-1.5 cursor-pointer ${
                      activeDevice === 'molinar'
                        ? 'bg-[#0071E3] text-white shadow-xs'
                        : 'text-[#6E6E73] dark:text-slate-400 hover:text-[#1D1D1F] dark:hover:text-white'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>Molinar</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('aegis')}
                    className={`px-3 py-1 rounded-full transition-all flex items-center space-x-1.5 cursor-pointer ${
                      activeDevice === 'aegis'
                        ? 'bg-[#0071E3] text-white shadow-xs'
                        : 'text-[#6E6E73] dark:text-slate-400 hover:text-[#1D1D1F] dark:hover:text-white'
                    }`}
                  >
                    <Anchor className="w-3.5 h-3.5" />
                    <span>Aegis</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('xtur')}
                    className={`px-3 py-1 rounded-full transition-all flex items-center space-x-1.5 cursor-pointer ${
                      activeDevice === 'xtur'
                        ? 'bg-[#0071E3] text-white shadow-xs'
                        : 'text-[#6E6E73] dark:text-slate-400 hover:text-[#1D1D1F] dark:hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Xtur</span>
                  </button>
                </div>
              </div>

              {/* Central Phone Mockup - Authentic iPhone 17 Pro UI */}
              <div className="relative z-10 flex items-center justify-center py-1">
                {/* Physical Hardware Buttons on Chassis Sides */}
                <div className="relative">
                  {/* Left Side: Action Button + Volume Buttons */}
                  <div className="absolute -left-[5px] top-[95px] w-[3.5px] h-[18px] bg-amber-500 rounded-l-sm shadow-xs"></div>
                  <div className="absolute -left-[5px] top-[130px] w-[3.5px] h-[36px] bg-slate-400 dark:bg-slate-600 rounded-l-sm"></div>
                  <div className="absolute -left-[5px] top-[175px] w-[3.5px] h-[36px] bg-slate-400 dark:bg-slate-600 rounded-l-sm"></div>

                  {/* Right Side: Power / Siri Button */}
                  <div className="absolute -right-[5px] top-[140px] w-[3.5px] h-[50px] bg-slate-400 dark:bg-slate-600 rounded-r-sm"></div>

                  {/* iPhone 17 Aerospace Titanium Chassis */}
                  <div className="relative w-[300px] sm:w-[330px] h-[535px] sm:h-[565px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-[52px] p-[3.5px] shadow-2xl dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] select-none">
                    {/* Inner Chamfer Bezel Ring */}
                    <div className="w-full h-full bg-black rounded-[49px] p-[2.5px] relative overflow-hidden">
                      {/* Top Speaker Earpiece Mesh Slit */}
                      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-800 rounded-full z-50"></div>

                      {/* Screen Specular Corner Glare (Glass Reflection) */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/15 via-white/5 to-transparent pointer-events-none z-40 rounded-tr-[46px]"></div>

                      {/* Active OLED Display Screen (Consistent High-Contrast Dark NOC Display) */}
                      <div className="relative w-full h-full rounded-[46px] overflow-hidden flex flex-col justify-between shadow-inner bg-[#060E1A] text-slate-100">
                        {/* iOS 18/19 Status Bar with Dynamic Island 2.0 */}
                        <div className="pt-2.5 px-3 pb-1 flex items-center justify-between relative z-40 bg-transparent">
                          {/* Left: iOS Time */}
                          <div className="flex items-center space-x-1 pl-1">
                            <span className="text-[11px] font-bold font-sans tracking-tight text-white">
                              9:41
                            </span>
                            <Navigation className="w-2.5 h-2.5 text-blue-400 fill-blue-400 -rotate-45" />
                          </div>

                          {/* Center: iPhone 17 Dynamic Island with Live Activity */}
                          <div className="w-[126px] h-[26px] bg-black rounded-full flex items-center justify-between px-2 shadow-lg border border-white/15 group cursor-pointer transition-all hover:scale-102">
                            {/* Camera Punch Hole with Optical Lens Reflection */}
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                              <span className="w-1 h-1 rounded-full bg-blue-500 shadow-xs"></span>
                            </div>

                            {/* Live Island Activity Telemetry */}
                            {activeDevice === 'molinar' ? (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="text-[9px] font-mono text-emerald-400 font-bold tracking-tight">
                                  26.4°C • 68%
                                </span>
                              </div>
                            ) : activeDevice === 'aegis' ? (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                <span className="text-[9px] font-mono text-cyan-300 font-bold tracking-tight">
                                  AIS 12.4kts
                                </span>
                              </div>
                            ) : activeDevice === 'xtur' ? (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-[9px] font-mono text-red-400 font-bold tracking-tight">
                                  AI LOCKED
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                <span className="text-[9px] font-mono text-cyan-300 font-bold tracking-tight">
                                  VSAT 48ms
                                </span>
                              </div>
                            )}

                            {/* TrueDepth Audio Wave / Activity Dot */}
                            <div className="flex items-center space-x-0.5">
                              <span className="w-0.5 h-1.5 bg-white/70 rounded-full animate-pulse"></span>
                              <span className="w-0.5 h-2.5 bg-white/90 rounded-full animate-pulse"></span>
                              <span className="w-0.5 h-1.5 bg-white/70 rounded-full animate-pulse"></span>
                            </div>
                          </div>

                          {/* Right: iOS Status Icons (5G, Signal, Wifi, Battery) */}
                          <div className="flex items-center space-x-1 text-slate-200 pr-1 text-[10px]">
                            <span className="text-[8.5px] font-bold font-sans tracking-tighter">5G</span>
                            <Signal className="w-3 h-3" />
                            <Wifi className="w-3 h-3" />
                            <div className="flex items-center space-x-0.5">
                              <Battery className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-[8.5px] font-mono font-bold text-slate-200">
                                98%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* SCREEN BODY: Highly Intricate, Dynamic Telemetry for Selected Engine */}
                        <div className="flex-1 px-3 py-1.5 overflow-hidden flex flex-col justify-between">
                          {activeDevice === 'molinar' ? (
                            /* ================= MOLINAR.ID IOT SCREEN ================= */
                            <div className="space-y-2">
                              {/* Header Card */}
                              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                                <div>
                                  <div className="text-[8.5px] font-tech font-bold text-cyan-400 tracking-wider">
                                    HYDRO METRICS // STATION #04
                                  </div>
                                  <div className="text-xs font-bold text-white leading-tight">
                                    BBWS Cimanuk Irrigation Grid
                                  </div>
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[8.5px] font-bold border border-emerald-500/30 flex items-center space-x-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  <span>ONLINE</span>
                                </span>
                              </div>

                              {/* Multi-Telemetry iOS Widget Grid */}
                              <div className="grid grid-cols-2 gap-2">
                                {/* Temperature */}
                                <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xs">
                                  <div className="text-[8.5px] text-slate-400 font-medium">SHELTER TEMP</div>
                                  <div className="text-base font-bold text-cyan-300">26.4 °C</div>
                                  <div className="text-[8px] text-emerald-400 font-semibold">Nominal 24-28°</div>
                                </div>
                                {/* Humidity & Moisture */}
                                <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xs">
                                  <div className="text-[8.5px] text-slate-400 font-medium">SOIL MOISTURE</div>
                                  <div className="text-base font-bold text-emerald-400">42.5 %</div>
                                  <div className="text-[8px] text-blue-400 font-semibold">68% RH Air Humid</div>
                                </div>
                              </div>

                              {/* AC Line Voltage Stabilizer with Animated Waveform */}
                              <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xs">
                                <div className="flex items-center justify-between text-[9px]">
                                  <span className="text-slate-400 font-medium">LINE VOLTAGE AC</span>
                                  <span className="font-tech font-bold text-cyan-300">223.8 V • 50.0 Hz</span>
                                </div>
                                <div className="mt-1 h-5 w-full">
                                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path
                                      d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"
                                      fill="none"
                                      stroke="#00C6FF"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <div className="flex justify-between text-[8px] text-slate-400 mt-0.5">
                                  <span>Solar Battery: 48.6V (Float)</span>
                                  <span className="text-emerald-400 font-bold">Stable (0.2% Var)</span>
                                </div>
                              </div>

                              {/* Interactive Haptic Valve & Actuator Controls */}
                              <div className="p-2 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 shadow-xs">
                                <div className="text-[8.5px] font-tech font-bold text-slate-400 uppercase tracking-wider">
                                  REMOTE ACTUATOR BUS
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-[9.5px] font-bold text-white">
                                    Irrigation Solenoid #2
                                  </span>
                                  <button
                                    onClick={() => setSimulatorPumpState(!simulatorPumpState)}
                                    className={`px-2.5 py-0.5 rounded-full text-[8.5px] font-bold font-tech transition-all cursor-pointer ${
                                      simulatorPumpState
                                        ? 'bg-emerald-500 text-white shadow-xs'
                                        : 'bg-slate-700 text-slate-300'
                                    }`}
                                  >
                                    {simulatorPumpState ? 'OPEN (2.4 Bar)' : 'CLOSED'}
                                  </button>
                                </div>
                                <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                                  <span className="text-[9.5px] font-bold text-white">
                                    Shelter Exhaust Fan
                                  </span>
                                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[8.5px] font-bold font-tech">
                                    AUTO-ON (1,400 RPM)
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : activeDevice === 'aegis' ? (
                            /* ================= AEGIS MARITIME SCREEN ================= */
                            <div className="space-y-2 text-white">
                              {/* Header */}
                              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                                <div>
                                  <div className="text-[8.5px] font-tech font-bold text-cyan-400 tracking-wider">
                                    AEGIS MARITIME // AI RADAR
                                  </div>
                                  <div className="text-xs font-bold text-white leading-tight">
                                    Collision Avoidance System
                                  </div>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8.5px] font-bold font-tech">
                                  AIS CLASS-A
                                </span>
                              </div>

                              {/* Live Rotating Radar Scope HUD */}
                              <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 relative overflow-hidden flex items-center space-x-3 shadow-xs">
                                <div className="relative w-16 h-16 rounded-full border border-cyan-500/40 bg-slate-950 flex items-center justify-center flex-shrink-0">
                                  {/* Concentric Radar Rings */}
                                  <div className="absolute w-12 h-12 rounded-full border border-cyan-500/20"></div>
                                  <div className="absolute w-7 h-7 rounded-full border border-cyan-500/30"></div>
                                  {/* Sweeping Beam */}
                                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-400/60 animate-spin duration-2000 origin-center pointer-events-none"></div>
                                  {/* Target Blip 1 */}
                                  <div className="absolute top-3 right-3.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                                  {/* Target Blip 2 */}
                                  <div className="absolute bottom-3.5 left-3.5 w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                  <Anchor className="w-4 h-4 text-cyan-300 relative z-10" />
                                </div>
                                <div className="space-y-0.5 text-[9px]">
                                  <div className="text-slate-400 uppercase font-tech font-bold">Vessel: MT PERMINA 101</div>
                                  <div className="font-mono text-white font-bold">CPA: 2.4 NM • TCPA: 18 min</div>
                                  <div className="text-emerald-400 font-semibold font-tech">RISK: 0.02 (CLEAR CORRIDOR)</div>
                                  <div className="text-slate-400 text-[8px]">Bearing: 084° • Speed: 12.4 kts</div>
                                </div>
                              </div>

                              {/* Telemetry Cards */}
                              <div className="grid grid-cols-2 gap-2 text-[9px]">
                                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                                  <div className="text-slate-400">MARINE WEATHER</div>
                                  <div className="font-bold text-cyan-300 mt-0.5">Wave 0.8m • Wind 14kt</div>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                                  <div className="text-slate-400">VSAT SATELLITE</div>
                                  <div className="font-bold text-emerald-400 mt-0.5">Telkomsat Ku 99.9%</div>
                                </div>
                              </div>

                              {/* AIS Target List */}
                              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[8.5px] space-y-1">
                                <div className="flex justify-between font-tech text-slate-400 font-bold">
                                  <span>AIS TARGET</span>
                                  <span>RANGE</span>
                                  <span>BEARING</span>
                                </div>
                                <div className="flex justify-between text-slate-200">
                                  <span className="text-emerald-400 font-semibold">TB SAMUDRA 08</span>
                                  <span>2.8 NM</span>
                                  <span>042° NE</span>
                                </div>
                              </div>
                            </div>
                          ) : activeDevice === 'xtur' ? (
                            /* ================= XTUR AI SURVEILLANCE SCREEN ================= */
                            <div className="space-y-2 text-white">
                              {/* Header */}
                              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                                <div>
                                  <div className="text-[8.5px] font-tech font-bold text-red-500 tracking-wider">
                                    XTUR AI // DEFENSE CAM #01
                                  </div>
                                  <div className="text-xs font-bold text-white leading-tight">
                                    Autonomous Perimeter Guard
                                  </div>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[8.5px] font-bold font-tech animate-pulse">
                                  ARMED
                                </span>
                              </div>

                              {/* Tactical Camera HUD Viewfinder */}
                              <div className="p-2.5 rounded-2xl bg-slate-950 border border-red-500/40 relative overflow-hidden h-28 flex flex-col justify-between shadow-xs">
                                {/* Crosshair & Corner Brackets */}
                                <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
                                <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
                                <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
                                <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>

                                {/* Simulated Bounding Box for Detected Object */}
                                <div className="absolute top-3 left-12 w-28 h-16 border border-emerald-400 rounded bg-emerald-500/15 flex flex-col justify-between p-1">
                                  <span className="text-[8px] font-tech font-bold text-emerald-300 bg-black/80 px-1 rounded w-fit">
                                    PERSON: 98.4%
                                  </span>
                                  <span className="text-[7.5px] font-mono text-emerald-200">
                                    COORD: X:420 Y:180
                                  </span>
                                </div>

                                <div className="relative z-10 flex justify-between text-[8px] font-mono text-slate-400">
                                  <span>FPS: 30.0 • NPU: 82%</span>
                                  <span className="text-red-400 font-bold">OPTICAL 4K UHD</span>
                                </div>

                                <div className="relative z-10 flex justify-between text-[8.5px] font-tech text-white">
                                  <span className="text-emerald-400 font-bold">ZONE-A ALPHA SECURE</span>
                                  <span className="text-cyan-400 font-bold">0 INTRUSION ALERTS</span>
                                </div>
                              </div>

                              {/* Controls */}
                              <div className="grid grid-cols-2 gap-2 text-[9px]">
                                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                  <span className="text-slate-400">VISION:</span>
                                  <span className="font-bold text-cyan-300">THERMAL / FLIR</span>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                  <span className="text-slate-400">UAV TRACK:</span>
                                  <span className="font-bold text-emerald-400">STANDBY</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* ================= PIS_BOT SENTINEL SCREEN ================= */
                            <div className="space-y-2 text-white">
                              {/* Top Header */}
                              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                                <div className="flex items-center space-x-1.5">
                                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                                  <span className="text-cyan-400 font-tech font-bold tracking-wider text-[11px]">
                                    PIS_BOT SENTINEL
                                  </span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8.5px] font-bold font-tech">
                                  VSAT 512K CIR
                                </span>
                              </div>

                              {/* iOS Radar Navigation Sweep Widget */}
                              <div className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 relative overflow-hidden flex items-center space-x-3 shadow-xs">
                                <div className="relative w-9 h-9 rounded-full bg-slate-950 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                                  <Navigation className="w-4 h-4 text-cyan-400 animate-spin duration-3000" />
                                </div>
                                <div>
                                  <div className="text-[8.5px] text-slate-400 uppercase font-tech font-bold">
                                    Vessel Fleet Navigation
                                  </div>
                                  <div className="text-[10.5px] font-bold text-white">
                                    05°14'22"S, 106°48'15"E
                                  </div>
                                  <div className="text-[8.5px] text-emerald-400 font-semibold">
                                    Java Sea • MT Pertamina Gas 2
                                  </div>
                                </div>
                              </div>

                              {/* Satellite Transponder Health Bar */}
                              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[8.5px]">
                                <span className="text-slate-400">Sat-Link: Telkomsat Ku</span>
                                <span className="font-mono text-cyan-300 font-bold">Az: 118° / El: 46°</span>
                                <span className="text-emerald-400 font-bold">SNR 18.2 dB</span>
                              </div>

                              {/* Bot Dialogue Log Card */}
                              <div className="space-y-1.5">
                                <div className="bg-slate-900/90 p-2 rounded-2xl border border-slate-800 shadow-xs">
                                  <div className="text-[8.5px] text-slate-400 font-semibold flex items-center justify-between">
                                    <span className="font-tech text-cyan-400">NOC TELEMETRY BOT</span>
                                    <span className="text-slate-400 font-mono">14:22 WIB</span>
                                  </div>
                                  <p className="text-[9.5px] text-slate-200 mt-0.5 leading-snug">
                                    All 12 Tanker Nodes synced with Ku-Band. Bandwidth QoS shaping active. Zero packet drops.
                                  </p>
                                </div>

                                {/* Bandwidth Equalizer Bars */}
                                <div className="bg-slate-900/80 p-2 rounded-2xl border border-slate-800 flex items-center justify-between">
                                  <span className="text-[8.5px] text-slate-400">QoS Traffic:</span>
                                  <div className="flex items-end space-x-1 h-3.5">
                                    <span className="w-1 bg-red-500 h-2 rounded-full animate-pulse"></span>
                                    <span className="w-1 bg-blue-500 h-3.5 rounded-full"></span>
                                    <span className="w-1 bg-cyan-400 h-2 rounded-full animate-pulse"></span>
                                    <span className="w-1 bg-blue-400 h-3 rounded-full"></span>
                                    <span className="w-1 bg-red-500 h-2.5 rounded-full animate-pulse"></span>
                                  </div>
                                  <span className="text-[8.5px] font-tech font-bold text-cyan-300">512 / 1024 Kbps</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* iOS Bottom Native Navigation Dock */}
                        <div className="pt-2 pb-1.5 px-4 border-t border-slate-800 flex items-center justify-around bg-slate-950/90 backdrop-blur-md">
                          <button
                            onClick={() => setActiveDevice('bot')}
                            className={`flex flex-col items-center space-y-0.5 transition-colors cursor-pointer ${
                              activeDevice === 'bot' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <BarChart3 className="w-4 h-4" />
                            <span className="text-[8px] font-medium">Overview</span>
                          </button>
                          <button
                            onClick={() => setActiveDevice('molinar')}
                            className={`flex flex-col items-center space-y-0.5 transition-colors cursor-pointer ${
                              activeDevice === 'molinar' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <Activity className="w-4 h-4" />
                            <span className="text-[8px] font-medium">Telemetry</span>
                          </button>
                          <button
                            onClick={() => setActiveDevice('aegis')}
                            className={`flex flex-col items-center space-y-0.5 transition-colors cursor-pointer ${
                              activeDevice === 'aegis' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <Radio className="w-4 h-4" />
                            <span className="text-[8px] font-medium">Radar</span>
                          </button>
                          <button
                            onClick={() => setActiveDevice('xtur')}
                            className={`flex flex-col items-center space-y-0.5 transition-colors cursor-pointer ${
                              activeDevice === 'xtur' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-[8px] font-medium">Security</span>
                          </button>
                        </div>

                        {/* iOS Home Indicator Bar */}
                        <div className="pt-0.5 pb-1.5 bg-transparent flex justify-center z-40">
                          <div className="w-28 h-1 bg-slate-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Status Badges */}
              <div className="relative z-20 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] font-mono">
                <div className="flex items-center space-x-1.5 text-[#1D1D1F] dark:text-[#F5F5F7]">
                  <Radio className="w-3.5 h-3.5 text-[#0071E3] dark:text-[#2997FF]" />
                  <span>Integrated Land, Sea & Agro Defense Fleet</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
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
