import React, { useState } from 'react';
import { 
  X, 
  FileCheck, 
  ShieldCheck, 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  Building2, 
  Download, 
  FileText, 
  Award, 
  Landmark, 
  Briefcase, 
  Check
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'contracts' | 'compliance' | 'downloads'>('contracts');

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
                  {lang === 'en' ? 'Enterprise Legal Governance & Credentials' : 'Kredensial, Legalitas & Pusat Unduhan Resmi'}
                </h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  VERIFIED AUDIT
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {lang === 'en'
                  ? 'Authentic public works, state-owned enterprise, and strategic group signed procurement documents & PDF brochures'
                  : 'Dokumen asli penugasan resmi, SPK Kementerian BUMN & Kontrak Resmi, perizinan NIB, serta katalog PDF resmi'}
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

        {/* Tab Navigation */}
        <div className="px-6 pt-3 bg-[#081522]/60 border-b border-slate-800 flex items-center space-x-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('contracts')}
            className={`pb-3 px-3 border-b-2 font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'contracts'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Contracts & SPK' : 'Dokumen Kontrak & SPK'}</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`pb-3 px-3 border-b-2 font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'compliance'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Legal & NIB Compliance' : 'Legalitas, NIB & PKP'}</span>
          </button>

          <button
            onClick={() => setActiveTab('downloads')}
            className={`pb-3 px-3 border-b-2 font-bold transition-all flex items-center space-x-1.5 ${
              activeTab === 'downloads'
                ? 'border-red-500 text-red-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-3.5 h-3.5 text-red-500" />
            <span>{lang === 'en' ? 'Official PDF Downloads' : 'Unduh Dokumen PDF'}</span>
            <span className="ml-1 px-1.5 py-0.2 rounded text-[9px] bg-red-500/20 text-red-400 font-bold">2 FILES</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {activeTab === 'contracts' && (
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
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-6 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Legal Entity Card */}
                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold font-mono">
                    <Landmark className="w-4 h-4" />
                    <span>Identitas Badan Hukum & Perizinan Berusaha</span>
                  </div>
                  <div className="space-y-2 text-slate-300 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-500">Nama Perusahaan:</span>
                      <span className="font-bold text-white">PT. Maudy Network Komunikasi</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-500">Bentuk Usaha:</span>
                      <span className="text-emerald-400">Perseroan Terbatas (PT)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-500">Nomor Induk Berusaha (NIB):</span>
                      <span className="text-cyan-300 font-bold">1242000281944 (Berbasis Risiko)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-500">Status Perpajakan:</span>
                      <span className="text-emerald-400 font-bold">PKP (Pengusaha Kena Pajak) Aktif</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-1.5">
                      <span className="text-slate-500">Domisili Kantor Pusat:</span>
                      <span className="text-slate-300">Semarang, Jawa Tengah</span>
                    </div>
                  </div>
                </div>

                {/* KBLI Classification */}
                <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold font-mono">
                    <Briefcase className="w-4 h-4" />
                    <span>Klasifikasi Baku Lapangan Usaha (KBLI)</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                      <div className="font-mono font-bold text-cyan-300">KBLI 61999</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">
                        Aktivitas Telekomunikasi Lainnya YTDL (Penyelenggaraan Jaringan Komunikasi, Marine VSAT Satelit & Radio)
                      </div>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                      <div className="font-mono font-bold text-cyan-300">KBLI 62019</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">
                        Aktivitas Pemrograman Komputer Lainnya (R&D Software AI Vision XTUR, Molinar.id IoT, AP Portal ERP, DSS GIS)
                      </div>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                      <div className="font-mono font-bold text-cyan-300">KBLI 43211</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">
                        Instalasi Kelistrikan Gedung & Inspeksi Kelaikan Fungsi Elektrikal Bersertifikasi BNSP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Quality Standards Banner */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white">Kepatuhan Keselamatan Kerja (HSE & SMK3)</div>
                    <div className="text-slate-300 text-[11px]">
                      Standar Zero Accident pada seluruh instalasi maritim kapal tanker dan gardu infrastruktur nasional.
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                  100% COMPLIANT
                </span>
              </div>
            </div>
          )}

          {activeTab === 'downloads' && (
            <div className="space-y-6">
              <div className="text-slate-300 text-xs leading-relaxed">
                Silakan unduh dokumen profil perusahaan resmi dan katalog teknis spesifikasi produk dalam format PDF untuk keperluan peninjauan tender, verifikasi vendor, dan rapat pengadaan internal:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Download 1: Company Profile */}
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      OFFICIAL PROFILE (PDF)
                    </span>
                    <h4 className="text-base font-bold text-white mt-2">
                      Company Profile PT. Maudy Network Komunikasi
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Dokumen profil korporat resmi memuat riwayat perusahaan, legalitas resmi, daftar sertifikasi internasional (Fortinet, Cisco, Mikrotik, BNSP), dan portofolio proyek strategis.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">Ukuran: 2.94 MB</span>
                    <a
                      href="/downloads/MNK-Company-Profile-Official.pdf"
                      download="PT-Maudy-Network-Komunikasi-Company-Profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gradient-brand text-white text-xs font-bold hover:scale-105 transition-all flex items-center space-x-1.5 shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh PDF</span>
                    </a>
                  </div>
                </div>

                {/* Download 2: XTUR AI Surveillance Profile */}
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-red-500/40 transition-all flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-500/20 text-red-300 border border-red-500/30">
                      PRODUCT PROFILE (PDF)
                    </span>
                    <h4 className="text-base font-bold text-white mt-2">
                      XTUR AI Vision Surveillance - Technical Catalog
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Brosur spesifikasi teknis lengkap XTUR AI mencakup arsitektur edge GPU, benchmark inferensi 4.2ms, daftar 57 wilayah ANPR Indonesia, integrasi RTSP 64 kamera, dan topologi hardware.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">Ukuran: 6.58 MB</span>
                    <a
                      href="/downloads/XTUR-AI-Surveillance-Product-Profile.pdf"
                      download="XTUR-AI-Vision-Surveillance-Product-Profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold hover:scale-105 transition-all flex items-center space-x-1.5 shadow-md shadow-red-600/30"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#081522] border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Perlindungan kerahasiaan lampiran kontrak teknis & dokumen operasional berlaku di bawah NDA</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
          >
            {lang === 'en' ? 'Close Drawer' : 'Tutup Jendela'}
          </button>
        </div>
      </div>
    </div>
  );
};

