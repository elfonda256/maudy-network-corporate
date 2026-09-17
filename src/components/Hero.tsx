import React from 'react';
import {
  ChevronRight,
  ShieldCheck,
  BarChart3,
  Send,
  Wifi,
  Anchor,
  CheckCircle2,
  Lock,
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

          {/* Right Column: Asymmetric Curved Royal Blue Container (Mandiri Livin Graphic Card) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#0050AE] via-[#004294] to-[#002D62] p-8 sm:p-12 overflow-hidden shadow-2xl">
              {/* Dot Matrix Pattern in Top-Right Corner */}
              <div className="absolute top-0 right-0 w-56 h-56 dot-pattern opacity-40 pointer-events-none"></div>

              {/* Floating Circular Feature Badges */}
              <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white text-[#0050AE] shadow-lg flex items-center justify-center animate-bounce duration-1000">
                <Anchor className="w-5 h-5 text-[#0050AE]" />
              </div>

              <div className="absolute top-10 right-8 w-11 h-11 rounded-full bg-white text-blue-500 shadow-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>

              <div className="absolute top-28 left-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                <Send className="w-4 h-4 text-cyan-500" />
              </div>

              <div className="absolute top-36 right-4 w-11 h-11 rounded-full bg-white text-blue-600 shadow-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-[#0050AE]" />
              </div>

              <div className="absolute bottom-28 left-6 w-11 h-11 rounded-full bg-white text-emerald-600 shadow-md flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>

              {/* Central Smartphone Mockups */}
              <div className="relative z-10 flex items-center justify-center pt-8 pb-4">
                {/* Back Phone: PIS_BOT Network Sentinel */}
                <div className="relative w-44 sm:w-52 h-96 bg-slate-950 rounded-[32px] p-2.5 border-4 border-slate-800 shadow-2xl -rotate-6 transform hover:rotate-0 transition-transform duration-500">
                  <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2"></div>
                  <div className="w-full h-[330px] rounded-[22px] bg-[#0A1626] p-3 text-white font-mono text-[10px] overflow-hidden">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-cyan-400 font-bold">PIS_BOT</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    </div>
                    <div className="mt-3 space-y-2 text-[9px]">
                      <div className="bg-slate-900 p-2 rounded border border-slate-800">
                        <div className="text-slate-400">VESSEL STATUS</div>
                        <div className="text-emerald-400 font-bold">Tanker Prime: ONLINE</div>
                        <div className="text-slate-500">VSAT 512Kbps SLA: 99.9%</div>
                      </div>
                      <div className="bg-slate-900 p-2 rounded border border-slate-800">
                        <div className="text-slate-400">CORE NETWORK</div>
                        <div className="text-cyan-400 font-bold">Master WAN: Active</div>
                        <div className="text-slate-500">Auto-failover: Standby</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Phone: Molinar.id IoT Telemetry App */}
                <div className="relative -ml-16 sm:-ml-20 w-48 sm:w-56 h-[420px] bg-slate-950 rounded-[36px] p-3 border-4 border-slate-700 shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                  <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-2.5"></div>
                  <div className="w-full h-[350px] rounded-[24px] bg-white text-slate-800 p-3.5 text-xs overflow-hidden flex flex-col justify-between shadow-inner">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400">MOLINAR.ID</div>
                          <div className="text-xs font-bold text-[#0050AE]">IoT Telemetry</div>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold">
                          LIVE
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                          <div className="text-[9px] text-slate-500 font-medium">CABINET TEMP</div>
                          <div className="text-sm font-bold text-[#0050AE]">26.4 °C</div>
                          <div className="text-[8px] text-emerald-600 font-medium">Optimal Range</div>
                        </div>

                        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                          <div className="text-[9px] text-slate-500 font-medium">SHELTER VOLTAGE</div>
                          <div className="text-sm font-bold text-slate-800">223.8 V</div>
                          <div className="text-[8px] text-slate-500 font-medium">Nominal 220V</div>
                        </div>

                        <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                          <div className="text-[9px] text-slate-500 font-medium">PERIMETER ACCESS</div>
                          <div className="text-xs font-bold text-emerald-700">DOOR SECURED</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                      <span>4G LTE: -68 dBm</span>
                      <span className="text-[#0050AE] font-bold">MNK Cloud</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-Right Golden Wave Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#FFB800] blur-[2px] opacity-90 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
