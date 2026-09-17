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
            <div className="relative w-full rounded-[38px] bg-white/95 dark:bg-[#071322] p-4 sm:p-6 overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/80 gradient-border-top transition-colors">
              {/* Subtle Ambient Red, Blue, and Pure White Ambient Glows */}
              <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-red-600/12 dark:bg-red-600/18 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-blue-600/12 dark:bg-[#0050AE]/22 blur-3xl pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/20 dark:bg-white/10 blur-2xl pointer-events-none"></div>

              {/* Top Navigation Bar of the Simulator */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-tech font-bold text-[#002D62] dark:text-white tracking-wider flex items-center space-x-1.5">
                    <span>MNK MISSION SIMULATOR</span>
                    <span className="text-[9px] font-sans px-1.5 py-0.2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                      iOS 18 // iPhone 17 Pro
                    </span>
                  </span>
                </div>

                {/* Segmented 4-Engine Selector */}
                <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-[11px] font-bold">
                  <button
                    onClick={() => setActiveDevice('bot')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center space-x-1 ${
                      activeDevice === 'bot' || activeDevice === 'both'
                        ? 'bg-gradient-brand text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#002D62] dark:hover:text-white'
                    }`}
                  >
                    <Navigation className="w-3 h-3" />
                    <span>PIS_BOT</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('molinar')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center space-x-1 ${
                      activeDevice === 'molinar'
                        ? 'bg-gradient-brand text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#002D62] dark:hover:text-white'
                    }`}
                  >
                    <Activity className="w-3 h-3" />
                    <span>Molinar</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('aegis')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center space-x-1 ${
                      activeDevice === 'aegis'
                        ? 'bg-gradient-brand text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#002D62] dark:hover:text-white'
                    }`}
                  >
                    <Anchor className="w-3 h-3" />
                    <span>Aegis</span>
                  </button>
                  <button
                    onClick={() => setActiveDevice('xtur')}
                    className={`px-2.5 py-1 rounded-lg transition-all flex items-center space-x-1 ${
                      activeDevice === 'xtur'
                        ? 'bg-gradient-brand text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-[#002D62] dark:hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>Xtur</span>
                  </button>
                </div>
              </div>

              {/* Central Phone Mockup - Authentic iPhone 17 Pro UI */}
              <div className="relative z-10 flex items-center justify-center py-1">
                {/* Physical Hardware Buttons on Chassis Sides */}
                <div className="relative">
                  {/* Left Side: Action Button + Volume Buttons */}
                  <div className="absolute -left-[5px] top-[90px] w-[3px] h-[18px] bg-amber-500 rounded-l-sm shadow-xs"></div>
                  <div className="absolute -left-[5px] top-[125px] w-[3px] h-[34px] bg-slate-400 dark:bg-slate-600 rounded-l-sm"></div>
                  <div className="absolute -left-[5px] top-[170px] w-[3px] h-[34px] bg-slate-400 dark:bg-slate-600 rounded-l-sm"></div>

                  {/* Right Side: Power / Siri Button */}
                  <div className="absolute -right-[5px] top-[135px] w-[3px] h-[48px] bg-slate-400 dark:bg-slate-600 rounded-r-sm"></div>

                  {/* iPhone 17 Aerospace Titanium Chassis */}
                  <div className="relative w-[295px] sm:w-[325px] h-[525px] sm:h-[555px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-300 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 rounded-[50px] p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_35px_rgba(0,80,174,0.18)] select-none">
                    {/* Inner Chamfer Bezel Ring */}
                    <div className="w-full h-full bg-slate-900 rounded-[47px] p-[2.5px] relative overflow-hidden">
                      {/* Top Speaker Earpiece Mesh Slit */}
                      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-800 rounded-full z-50"></div>

                      {/* Screen Specular Corner Glare (Glass Reflection) */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-white/20 via-white/5 to-transparent pointer-events-none z-40 rounded-tr-[44px]"></div>

                      {/* Active OLED Display Screen */}
                      <div className="relative w-full h-full rounded-[44px] overflow-hidden flex flex-col justify-between shadow-inner transition-colors bg-white dark:bg-[#060F1D]">
                        {/* iOS 18/19 Status Bar with Dynamic Island 2.0 */}
                        <div className="pt-2 px-3 pb-1 flex items-center justify-between relative z-40 bg-transparent">
                          {/* Left: iOS Time */}
                          <div className="flex items-center space-x-1 pl-1">
                            <span className="text-[11px] font-bold font-sans tracking-tight text-slate-800 dark:text-white">
                              9:41
                            </span>
                            <Navigation className="w-2.5 h-2.5 text-blue-500 fill-blue-500 -rotate-45" />
                          </div>

                          {/* Center: iPhone 17 Dynamic Island with Live Activity */}
                          <div className="w-[124px] h-[26px] bg-black rounded-full flex items-center justify-between px-2 shadow-lg border border-white/10 group cursor-pointer transition-all hover:scale-102">
                            {/* Camera Punch Hole with Optical Lens Reflection */}
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
                              <span className="w-1 h-1 rounded-full bg-blue-600/90 shadow-xs"></span>
                            </div>

                            {/* Live Island Activity Telemetry */}
                            {activeDevice === 'molinar' ? (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="text-[8.5px] font-mono text-emerald-400 font-bold tracking-tight">
                                  26.4°C • 68%
                                </span>
                              </div>
                            ) : activeDevice === 'aegis' ? (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                <span className="text-[8.5px] font-mono text-cyan-300 font-bold tracking-tight">
                                  AIS 12.4kts
                                </span>
                              </div>
                            ) : activeDevice === 'xtur' ? (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-[8.5px] font-mono text-red-400 font-bold tracking-tight">
                                  AI LOCKED
                                </span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                <span className="text-[8.5px] font-mono text-cyan-300 font-bold tracking-tight">
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
                          <div className="flex items-center space-x-1 text-slate-700 dark:text-slate-300 pr-1 text-[10px]">
                            <span className="text-[8px] font-bold font-sans tracking-tighter">5G</span>
                            <Signal className="w-3 h-3" />
                            <Wifi className="w-3 h-3" />
                            <div className="flex items-center space-x-0.5">
                              <Battery className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-[8px] font-mono font-bold text-slate-700 dark:text-slate-300">
                                98%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* SCREEN BODY: Highly Intricate, Dynamic Telemetry for Selected Engine */}
                        <div className="flex-1 px-3 py-1.5 overflow-hidden flex flex-col justify-between">
                          {activeDevice === 'molinar' ? (
                            /* ================= MOLINAR.ID IOT SCREEN ================= */
                            <div className="space-y-1.5">
                              {/* Header Card */}
                              <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-slate-800">
                                <div>
                                  <div className="text-[8px] font-tech font-bold text-slate-400 tracking-wider">
                                    HYDRO METRICS // STATION #04
                                  </div>
                                  <div className="text-[11px] font-bold text-[#0050AE] dark:text-cyan-400 leading-tight">
                                    BBWS Cimanuk Irrigation Grid
                                  </div>
                                </div>
                                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[8px] font-bold border border-emerald-500/20 flex items-center space-x-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                  <span>ONLINE</span>
                                </span>
                              </div>

                              {/* Multi-Telemetry iOS Widget Grid */}
                              <div className="grid grid-cols-2 gap-1.5">
                                {/* Temperature */}
                                <div className="p-2 rounded-xl bg-blue-50/80 dark:bg-slate-900/90 border border-blue-100 dark:border-slate-800 shadow-xs">
                                  <div className="text-[7.5px] text-slate-500 dark:text-slate-400 font-medium">SHELTER TEMP</div>
                                  <div className="text-sm font-bold text-[#0050AE] dark:text-cyan-300">26.4 °C</div>
                                  <div className="text-[7.5px] text-emerald-600 dark:text-emerald-400 font-semibold">Nominal 24-28°</div>
                                </div>
                                {/* Humidity & Moisture */}
                                <div className="p-2 rounded-xl bg-blue-50/80 dark:bg-slate-900/90 border border-blue-100 dark:border-slate-800 shadow-xs">
                                  <div className="text-[7.5px] text-slate-500 dark:text-slate-400 font-medium">SOIL MOISTURE</div>
                                  <div className="text-sm font-bold text-[#0050AE] dark:text-cyan-300">42.5 %</div>
                                  <div className="text-[7.5px] text-blue-600 dark:text-blue-400 font-semibold">68% RH Air Humid</div>
                                </div>
                              </div>

                              {/* AC Line Voltage Stabilizer with Animated Waveform */}
                              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                                <div className="flex items-center justify-between text-[8px]">
                                  <span className="text-slate-500 dark:text-slate-400 font-medium">LINE VOLTAGE AC</span>
                                  <span className="font-tech font-bold text-slate-800 dark:text-white">223.8 V • 50.0 Hz</span>
                                </div>
                                <div className="mt-1 h-4 w-full">
                                  <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path
                                      d="M0,10 Q12.5,0 25,10 T50,10 T75,10 T100,10"
                                      fill="none"
                                      stroke="#0050AE"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <div className="flex justify-between text-[7.5px] text-slate-400 mt-0.5">
                                  <span>Solar Batt: 48.6V (Float)</span>
                                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Stable (0.2% Var)</span>
                                </div>
                              </div>

                              {/* Interactive Haptic Valve & Actuator Controls */}
                              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 space-y-1.5 shadow-xs">
                                <div className="text-[8px] font-tech font-bold text-slate-400 uppercase tracking-wider">
                                  REMOTE ACTUATOR BUS
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-[8.5px] font-bold text-slate-700 dark:text-slate-200">
                                    Irrigation Solenoid #2
                                  </span>
                                  <button
                                    onClick={() => setSimulatorPumpState(!simulatorPumpState)}
                                    className={`px-2 py-0.5 rounded-full text-[8px] font-bold font-tech transition-all ${
                                      simulatorPumpState
                                        ? 'bg-emerald-500 text-white shadow-xs'
                                        : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                    }`}
                                  >
                                    {simulatorPumpState ? 'OPEN (2.4 Bar)' : 'CLOSED'}
                                  </button>
                                </div>
                                <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 dark:border-slate-800">
                                  <span className="text-[8.5px] font-bold text-slate-700 dark:text-slate-200">
                                    Shelter Exhaust Fan
                                  </span>
                                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[8px] font-bold font-tech">
                                    AUTO-ON (1,400 RPM)
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : activeDevice === 'aegis' ? (
                            /* ================= AEGIS MARITIME SCREEN ================= */
                            <div className="space-y-1.5 text-white">
                              {/* Header */}
                              <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                                <div>
                                  <div className="text-[8px] font-tech font-bold text-cyan-400 tracking-wider">
                                    AEGIS MARITIME // AI RADAR
                                  </div>
                                  <div className="text-[11px] font-bold text-white leading-tight">
                                    Collision Avoidance System
                                  </div>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8px] font-bold font-tech">
                                  AIS CLASS-A
                                </span>
                              </div>

                              {/* Live Rotating Radar Scope HUD */}
                              <div className="p-2 rounded-xl bg-slate-950 border border-cyan-500/30 relative overflow-hidden flex items-center space-x-3 shadow-xs">
                                <div className="relative w-14 h-14 rounded-full border border-cyan-500/40 bg-slate-900/90 flex items-center justify-center flex-shrink-0">
                                  {/* Concentric Radar Rings */}
                                  <div className="absolute w-10 h-10 rounded-full border border-cyan-500/20"></div>
                                  <div className="absolute w-6 h-6 rounded-full border border-cyan-500/30"></div>
                                  {/* Sweeping Beam */}
                                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-500/30 to-cyan-400/60 animate-spin duration-2000 origin-center pointer-events-none"></div>
                                  {/* Target Blip 1 */}
                                  <div className="absolute top-2.5 right-3 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                                  {/* Target Blip 2 */}
                                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                  <Anchor className="w-3.5 h-3.5 text-cyan-300 relative z-10" />
                                </div>
                                <div className="space-y-0.5 text-[8.5px]">
                                  <div className="text-slate-400 uppercase font-tech font-bold">Vessel: MT PERMINA 101</div>
                                  <div className="font-mono text-white font-bold">CPA: 2.4 NM • TCPA: 18 min</div>
                                  <div className="text-emerald-400 font-semibold font-tech">RISK: 0.02 (CLEAR CORRIDOR)</div>
                                  <div className="text-slate-400 text-[7.5px]">Bearing: 084° • Speed: 12.4 kts</div>
                                </div>
                              </div>

                              {/* Telemetry Cards */}
                              <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                                  <div className="text-slate-400">MARINE WEATHER</div>
                                  <div className="font-bold text-cyan-300">Wave 0.8m • Wind 14kt</div>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                                  <div className="text-slate-400">VSAT SATELLITE</div>
                                  <div className="font-bold text-emerald-400">Telkomsat Ku 99.9%</div>
                                </div>
                              </div>

                              {/* AIS Target List */}
                              <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[7.5px] space-y-1">
                                <div className="flex justify-between font-tech text-slate-400 font-bold">
                                  <span>AIS TARGET</span>
                                  <span>RANGE</span>
                                  <span>BEARING</span>
                                </div>
                                <div className="flex justify-between text-slate-200">
                                  <span className="text-emerald-400">TB SAMUDRA 08</span>
                                  <span>2.8 NM</span>
                                  <span>042° NE</span>
                                </div>
                              </div>
                            </div>
                          ) : activeDevice === 'xtur' ? (
                            /* ================= XTUR AI SURVEILLANCE SCREEN ================= */
                            <div className="space-y-1.5 text-white">
                              {/* Header */}
                              <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                                <div>
                                  <div className="text-[8px] font-tech font-bold text-red-500 tracking-wider">
                                    XTUR AI // DEFENSE CAM #01
                                  </div>
                                  <div className="text-[11px] font-bold text-white leading-tight">
                                    Autonomous Perimeter Guard
                                  </div>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[8px] font-bold font-tech animate-pulse">
                                  ARMED
                                </span>
                              </div>

                              {/* Tactical Camera HUD Viewfinder */}
                              <div className="p-2 rounded-xl bg-slate-950 border border-red-500/40 relative overflow-hidden h-24 flex flex-col justify-between shadow-xs">
                                {/* Crosshair & Corner Brackets */}
                                <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-red-500"></div>
                                <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-red-500"></div>
                                <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-red-500"></div>
                                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-red-500"></div>

                                {/* Simulated Bounding Box for Detected Object */}
                                <div className="absolute top-3 left-12 w-24 h-14 border border-emerald-400/90 rounded bg-emerald-500/10 flex flex-col justify-between p-1">
                                  <span className="text-[7px] font-tech font-bold text-emerald-300 bg-black/70 px-1 rounded w-fit">
                                    PERSON: 98.4%
                                  </span>
                                  <span className="text-[6.5px] font-mono text-emerald-200">
                                    COORD: X:420 Y:180
                                  </span>
                                </div>

                                <div className="relative z-10 flex justify-between text-[7px] font-mono text-slate-400">
                                  <span>FPS: 30.0 • NPU: 82%</span>
                                  <span className="text-red-400">OPTICAL 4K UHD</span>
                                </div>

                                <div className="relative z-10 flex justify-between text-[7.5px] font-tech text-white">
                                  <span className="text-emerald-400 font-bold">ZONE-A ALPHA SECURE</span>
                                  <span className="text-cyan-400">0 INTRUSION ALERTS</span>
                                </div>
                              </div>

                              {/* Controls */}
                              <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                                <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                  <span className="text-slate-400">VISION:</span>
                                  <span className="font-bold text-cyan-300">THERMAL / FLIR</span>
                                </div>
                                <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                  <span className="text-slate-400">UAV TRACKER:</span>
                                  <span className="font-bold text-emerald-400">STANDBY</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* ================= PIS_BOT SENTINEL SCREEN ================= */
                            <div className="space-y-1.5 text-white">
                              {/* Top Header */}
                              <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                                <div className="flex items-center space-x-1.5">
                                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                                  <span className="text-cyan-400 font-tech font-bold tracking-wider text-[10px]">
                                    PIS_BOT SENTINEL
                                  </span>
                                </div>
                                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[8px] font-bold font-tech">
                                  VSAT 512K CIR
                                </span>
                              </div>

                              {/* iOS Radar Navigation Sweep Widget */}
                              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden flex items-center space-x-2.5 shadow-xs">
                                <div className="relative w-8 h-8 rounded-full bg-slate-950 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                                  <Navigation className="w-4 h-4 text-cyan-400 animate-spin duration-3000" />
                                </div>
                                <div>
                                  <div className="text-[7.5px] text-slate-400 uppercase font-tech font-bold">
                                    Vessel Fleet Navigation
                                  </div>
                                  <div className="text-[9.5px] font-bold text-white">
                                    05°14'22"S, 106°48'15"E
                                  </div>
                                  <div className="text-[7.5px] text-emerald-400 font-semibold">
                                    Java Sea • MT Pertamina Gas 2
                                  </div>
                                </div>
                              </div>

                              {/* Satellite Transponder Health Bar */}
                              <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-[7.5px]">
                                <span className="text-slate-400">Sat-Link: Telkomsat Ku</span>
                                <span className="font-mono text-cyan-300 font-bold">Az: 118.4° / El: 46.2°</span>
                                <span className="text-emerald-400 font-bold">C/N 18.2 dB</span>
                              </div>

                              {/* Bot Dialogue Log Card */}
                              <div className="space-y-1">
                                <div className="bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shadow-xs">
                                  <div className="text-[7.5px] text-slate-400 font-semibold flex items-center justify-between">
                                    <span className="font-tech text-cyan-400">NOC TELEMETRY BOT</span>
                                    <span className="text-slate-400 font-mono">14:22 WIB</span>
                                  </div>
                                  <p className="text-[8.5px] text-slate-200 mt-0.5 leading-snug">
                                    All 12 Tanker Nodes synced with Ku-Band. Bandwidth QoS shaping active. Zero packet drops.
                                  </p>
                                </div>

                                {/* Bandwidth Equalizer Bars */}
                                <div className="bg-slate-900/70 p-1.5 rounded-xl border border-slate-800 flex items-center justify-between">
                                  <span className="text-[7.5px] text-slate-400">QoS Traffic:</span>
                                  <div className="flex items-end space-x-1 h-3">
                                    <span className="w-1 bg-red-500 h-2 rounded-full animate-pulse"></span>
                                    <span className="w-1 bg-blue-500 h-3 rounded-full"></span>
                                    <span className="w-1 bg-cyan-400 h-1.5 rounded-full animate-pulse"></span>
                                    <span className="w-1 bg-white h-2.5 rounded-full"></span>
                                    <span className="w-1 bg-blue-500 h-3 rounded-full"></span>
                                    <span className="w-1 bg-red-500 h-2.5 rounded-full animate-pulse"></span>
                                  </div>
                                  <span className="text-[7.5px] font-tech font-bold text-cyan-300">512 / 1024 Kbps</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* iOS Bottom Native Navigation Dock */}
                        <div className="pt-1.5 pb-1 px-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-around bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md">
                          <button
                            onClick={() => setActiveDevice('bot')}
                            className={`flex flex-col items-center space-y-0.5 ${
                              activeDevice === 'bot' ? 'text-[#0050AE] dark:text-cyan-400' : 'text-slate-400'
                            }`}
                          >
                            <BarChart3 className="w-3.5 h-3.5" />
                            <span className="text-[7.5px] font-medium">Overview</span>
                          </button>
                          <button
                            onClick={() => setActiveDevice('molinar')}
                            className={`flex flex-col items-center space-y-0.5 ${
                              activeDevice === 'molinar' ? 'text-[#0050AE] dark:text-cyan-400' : 'text-slate-400'
                            }`}
                          >
                            <Activity className="w-3.5 h-3.5" />
                            <span className="text-[7.5px] font-medium">Telemetry</span>
                          </button>
                          <button
                            onClick={() => setActiveDevice('aegis')}
                            className={`flex flex-col items-center space-y-0.5 ${
                              activeDevice === 'aegis' ? 'text-[#0050AE] dark:text-cyan-400' : 'text-slate-400'
                            }`}
                          >
                            <Radio className="w-3.5 h-3.5" />
                            <span className="text-[7.5px] font-medium">Radar</span>
                          </button>
                          <button
                            onClick={() => setActiveDevice('xtur')}
                            className={`flex flex-col items-center space-y-0.5 ${
                              activeDevice === 'xtur' ? 'text-[#0050AE] dark:text-cyan-400' : 'text-slate-400'
                            }`}
                          >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="text-[7.5px] font-medium">Security</span>
                          </button>
                        </div>

                        {/* iOS Home Indicator Bar */}
                        <div className="pt-0.5 pb-1.5 bg-transparent flex justify-center z-40">
                          <div className="w-28 h-1 bg-slate-400/80 dark:bg-slate-500/80 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Status Badges */}
              <div className="relative z-20 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-tech">
                <div className="flex items-center space-x-1 text-slate-600 dark:text-slate-300">
                  <Radio className="w-3.5 h-3.5 text-[#0050AE] dark:text-blue-400" />
                  <span>Integrated Land, Sea & Agro Defense Fleet</span>
                </div>
                <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-bold">
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
