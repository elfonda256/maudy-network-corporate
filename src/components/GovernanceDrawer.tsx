import React from 'react';
import { X, FileCheck, ShieldCheck, CheckCircle, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { CONTRACT_EVIDENCE } from '../data/companyData';

interface GovernanceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const GovernanceDrawer: React.FC<GovernanceDrawerProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#081522]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal / Drawer Container */}
      <div className="relative z-10 w-full max-w-4xl glass-card rounded-2xl border border-cyan-500/40 shadow-2xl bg-[#0B1F3A]/98 my-8 animate-fadeIn overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#081522]/80">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white">
                  {lang === 'en' ? 'Verified Enterprise Contracts & BAST' : 'Bukti Legalitas Kontrak & BAST Resmi'}
                </h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  VERIFIED AUDIT
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {lang === 'en'
                  ? 'Authentic public works, state-owned enterprise, and Pertamina Group signed procurement documents'
                  : 'Dokumen asli penugasan resmi, SPK, dan Berita Acara Serah Terima (BAST) Pertamina & BUMN'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Documents Showcase */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTRACT_EVIDENCE.map((doc) => (
              <div
                key={doc.id}
                className="bg-slate-900/80 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
              >
                {/* Document Preview Thumbnail */}
                <div className="relative h-44 bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={doc.image}
                    alt={doc.title[lang]}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                      {doc.code}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {doc.title[lang]}
                    </h4>
                    <div className="flex items-center text-xs text-cyan-400 font-mono mb-2">
                      <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      <span>{doc.client}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mb-3">
                      {doc.description[lang]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 text-slate-500" />
                      {doc.date}
                    </span>
                    <span className="text-emerald-400 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Sign-Off Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#081522] border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Full confidential contract attachments available upon NDA</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
          >
            {lang === 'en' ? 'Close Documents' : 'Tutup Dokumen'}
          </button>
        </div>
      </div>
    </div>
  );
};
