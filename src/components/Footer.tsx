import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { ArrowUp, FileCheck } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
  onOpenCredentials: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenCredentials,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#050B14] border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Col 1: Corporate Brand */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/logo-mnk.svg"
                alt="Maudy Network Komunikasi"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'PT. Maudy Network Komunikasi (MNK) is a strategic enterprise IT, maritime VSAT, and industrial IoT solutions provider delivering mission-critical resilience across Indonesia.'
                : 'PT. Maudy Network Komunikasi (MNK) adalah penyedia solusi IT infrastruktur, jaringan satelit kapal, dan IoT telemetri industri berkeandalan tinggi di seluruh Indonesia.'}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[#0050AE] dark:text-cyan-400 font-mono text-[11px] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>24/7/365 NOC CENTER ACTIVE</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCredentials}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#0050AE] dark:text-cyan-300 transition-colors text-[11px] font-mono font-bold shadow-xs"
              >
                <FileCheck className="w-3.5 h-3.5 text-[#0050AE] dark:text-cyan-400" />
                <span>{lang === 'en' ? 'Verified Contracts & BAST' : 'Lihat Berita Acara & Kontrak'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <div className="font-bold text-[#002D62] dark:text-white font-mono uppercase tracking-wider mb-3 text-[11px]">
              {lang === 'en' ? 'Core Services' : 'Layanan Utama'}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  Enterprise Network & Routing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  Marine VSAT & Vessel QoS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  Fortinet NSE 7 Cyber Security
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  AI CCTV & Honeywell Surveillance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  DIgSILENT PowerFactory Grid Studies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  24/7 Managed NOC Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <div className="font-bold text-[#002D62] dark:text-white font-mono uppercase tracking-wider mb-3 text-[11px]">
              {lang === 'en' ? 'Proprietary Platforms' : 'Platform Mandiri'}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  Molinar.id (IoT Telemetry)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  AP Portal (ERP WebApps)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  GIS DSS Irigasi (PUPR)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  PIS_BOT Sentinel Daemon
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0050AE] dark:hover:text-cyan-400 transition-colors">
                  POCStars Hytera Radio Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <div className="font-bold text-[#002D62] dark:text-white font-mono uppercase tracking-wider mb-3 text-[11px]">
              {lang === 'en' ? 'Headquarters' : 'Kantor Pusat'}
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-3 leading-relaxed">
              {COMPANY_DETAILS.address}
            </p>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div>
                <a href="tel:+6285727487507" className="hover:text-[#0050AE] font-bold">
                  +62 857-2748-7507
                </a>
              </div>
              <div>
                <a href="tel:+622476469031" className="hover:text-[#0050AE]">
                  +62 24 76469031
                </a>
              </div>
              <div>
                <a href="mailto:support@maudynetwork.id" className="hover:underline text-[#0050AE] dark:text-cyan-300 font-semibold">
                  support@maudynetwork.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-400 text-[11px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} PT. Maudy Network Komunikasi. All rights reserved.
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-slate-700 dark:text-slate-300 font-bold">Cisco CCNP</span>
            <span>•</span>
            <span className="text-slate-700 dark:text-slate-300 font-bold">Fortinet NSE 7</span>
            <span>•</span>
            <span className="text-slate-700 dark:text-slate-300 font-bold">MikroTik MTCINE</span>
            <span>•</span>
            <span className="text-slate-700 dark:text-slate-300 font-bold">BNSP Standard</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-xs"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
