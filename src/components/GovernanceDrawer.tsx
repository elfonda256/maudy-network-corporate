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
  Check,
  Cpu,
  Bot
} from 'lucide-react';
import { CONTRACT_EVIDENCE } from '../data/companyData';

import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface GovernanceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
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
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal / Drawer Container */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl bg-white dark:bg-[#161617] my-8 animate-fadeIn overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-[#34C759] border border-emerald-500/20">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
                  {lang === 'ja'
                    ? '企業ガバナンス・法的証明書・公式資料'
                    : lang === 'ar'
                    ? 'الحوكمة القانونية والاعتمادات الرسمية'
                    : lang === 'en'
                    ? 'Enterprise Legal Governance & Credentials'
                    : 'Kredensial, Legalitas & Pusat Unduhan Resmi'}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[#34C759] text-[10px] font-mono font-bold">
                  VERIFIED AUDIT
                </span>
              </div>
              <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                {lang === 'ja'
                  ? '省庁・国営企業との締結契約書、作業発注書（SPK）、正規事業者番号（NIB）認証、公式PDFカタログ'
                  : lang === 'ar'
                  ? 'وثائق المشاريع الرسمية المعتمدة، عقود BUMN، تراخيص NIB الحكومية، وكتالوجات PDF الرسمية'
                  : lang === 'en'
                  ? 'Authentic public works, state-owned enterprise, and strategic group signed procurement documents & PDF brochures'
                  : 'Dokumen asli penugasan resmi, SPK Kementerian BUMN & Kontrak Resmi, perizinan NIB, serta katalog PDF resmi'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 bg-black/[0.02] dark:bg-white/[0.02] border-b border-black/[0.08] dark:border-white/[0.08] flex items-center space-x-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab('contracts')}
            className={`pb-3 px-4 border-b-2 font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'contracts'
                ? 'border-[#0071E3] text-[#0071E3] dark:text-[#2997FF] font-semibold'
                : 'border-transparent text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>
              {lang === 'ja' ? '契約書・作業発注書 (SPK)' : lang === 'ar' ? 'العقود وأوامر العمل (SPK)' : lang === 'en' ? 'Contracts & SPK' : 'Dokumen Kontrak & SPK'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`pb-3 px-4 border-b-2 font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'compliance'
                ? 'border-[#0071E3] text-[#0071E3] dark:text-[#2997FF] font-semibold'
                : 'border-transparent text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {lang === 'ja' ? '企業登記・NIB許認可' : lang === 'ar' ? 'الامتثال القانوني وترخيص NIB' : lang === 'en' ? 'Legal & NIB Compliance' : 'Legalitas, NIB & PKP'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('downloads')}
            className={`pb-3 px-4 border-b-2 font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'downloads'
                ? 'border-[#0071E3] text-[#0071E3] dark:text-[#2997FF] font-semibold'
                : 'border-transparent text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>
              {lang === 'ja' ? '公式PDFダウンロード' : lang === 'ar' ? 'تحميل ملفات PDF الرسمية' : lang === 'en' ? 'Official PDF Downloads' : 'Unduh Dokumen PDF'}
            </span>
            <span className="ml-1 px-1.5 py-0.2 rounded-full text-[9px] bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] font-bold">
              {lang === 'ja' ? '3点' : lang === 'ar' ? '3 وثائق' : lang === 'en' ? '3 DOCUMENTS' : '3 DOKUMEN'}
            </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {activeTab === 'contracts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONTRACT_EVIDENCE.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-black/[0.02] dark:bg-white/[0.04] rounded-2xl border border-black/[0.06] dark:border-white/[0.08] overflow-hidden flex flex-col justify-between group hover:border-[#0071E3]/40 transition-all"
                >
                  {/* Document Preview Thumbnail */}
                  <div className="relative h-44 bg-black/5 overflow-hidden border-b border-black/[0.06] dark:border-white/[0.08]">
                    <img
                      src={doc.image}
                      alt={getLangText(doc.title, lang)}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-black/80 text-[#1D1D1F] dark:text-white text-[10px] font-mono border border-black/10 dark:border-white/10 shadow-2xs">
                        {doc.code}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mb-1.5 group-hover:text-[#0071E3] transition-colors">
                        {getLangText(doc.title, lang)}
                      </h4>
                      <div className="flex items-center text-xs text-[#0071E3] dark:text-[#2997FF] font-mono mb-2">
                        <Building2 className="w-3.5 h-3.5 mr-1 text-[#6E6E73]" />
                        <span>{doc.client}</span>
                      </div>
                      <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] font-normal leading-relaxed mb-3">
                        {getLangText(doc.description, lang)}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6]">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-[#6E6E73]" />
                        {doc.date}
                      </span>
                      <span className="text-[#34C759] flex items-center font-medium">
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
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] space-y-3">
                  <div className="flex items-center space-x-2 text-[#0071E3] dark:text-[#2997FF] font-semibold font-mono">
                    <Landmark className="w-4 h-4" />
                    <span>Identitas Badan Hukum & Perizinan Berusaha</span>
                  </div>
                  <div className="space-y-2 text-[#1D1D1F] dark:text-white font-mono text-[11px]">
                    <div className="flex justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-1.5">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Nama Perusahaan:</span>
                      <span className="font-semibold">PT. Maudy Network Komunikasi</span>
                    </div>
                    <div className="flex justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-1.5">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Bentuk Usaha:</span>
                      <span className="text-[#34C759] font-medium">Perseroan Terbatas (PT)</span>
                    </div>
                    <div className="flex justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-1.5">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Nomor Induk Berusaha (NIB):</span>
                      <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">1242000281944 (Berbasis Risiko)</span>
                    </div>
                    <div className="flex justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-1.5">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Status Perpajakan:</span>
                      <span className="text-[#34C759] font-semibold">PKP (Pengusaha Kena Pajak) Aktif</span>
                    </div>
                    <div className="flex justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-1.5">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Domisili Kantor Pusat:</span>
                      <span>Semarang, Jawa Tengah</span>
                    </div>
                  </div>
                </div>

                {/* KBLI Classification */}
                <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] space-y-3">
                  <div className="flex items-center space-x-2 text-[#0071E3] dark:text-[#2997FF] font-semibold font-mono">
                    <Briefcase className="w-4 h-4" />
                    <span>Klasifikasi Baku Lapangan Usaha (KBLI)</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">KBLI 61999</div>
                      <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] mt-0.5">
                        Aktivitas Telekomunikasi Lainnya YTDL (Penyelenggaraan Jaringan Komunikasi, Marine VSAT Satelit & Radio)
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">KBLI 62019</div>
                      <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] mt-0.5">
                        Aktivitas Pemrograman Komputer Lainnya (R&D Software AI Vision XTUR, Molinar.id IoT, AP Portal ERP, DSS GIS)
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="font-mono font-semibold text-[#0071E3] dark:text-[#2997FF]">KBLI 43211</div>
                      <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] mt-0.5">
                        Instalasi Kelistrikan Gedung & Inspeksi Kelaikan Fungsi Elektrikal Bersertifikasi BNSP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Quality Standards Banner */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-[#34C759] flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1D1D1F] dark:text-emerald-100">Kepatuhan Keselamatan Kerja (HSE & SMK3)</div>
                    <div className="text-[#6E6E73] dark:text-emerald-200/80 text-[11px]">
                      Standar Zero Accident pada seluruh instalasi maritim kapal tanker dan gardu infrastruktur nasional.
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-[#34C759] font-mono text-[10px] font-bold">
                  100% COMPLIANT
                </span>
              </div>
            </div>
          )}

          {activeTab === 'downloads' && (
            <div className="space-y-6">
              <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-xs leading-relaxed">
                Silakan unduh dokumen profil perusahaan resmi dan katalog teknis spesifikasi produk dalam format PDF untuk keperluan peninjauan tender, verifikasi vendor, dan rapat pengadaan internal:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Download 1: Company Profile */}
                <div className="p-5 rounded-3xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 transition-all flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center mb-3">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] font-medium">
                      OFFICIAL PROFILE (PDF)
                    </span>
                    <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mt-2">
                      Company Profile PT. Maudy Network Komunikasi
                    </h4>
                    <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] mt-1 leading-relaxed">
                      Dokumen profil korporat resmi memuat legalitas PT, NIB, sertifikasi Fortinet NSE 7, Cisco, Mikrotik, dan portofolio proyek strategis.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#6E6E73]">2.94 MB</span>
                    <a
                      href="/downloads/MNK-Company-Profile-Official.pdf"
                      download="PT-Maudy-Network-Komunikasi-Company-Profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all flex items-center space-x-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh</span>
                    </a>
                  </div>
                </div>

                {/* Download 2: XTUR AI Surveillance Profile */}
                <div className="p-5 rounded-3xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 transition-all flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center mb-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] font-medium">
                      PRODUCT PROFILE (PDF)
                    </span>
                    <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mt-2">
                      XTUR AI Vision Surveillance - Technical Catalog
                    </h4>
                    <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] mt-1 leading-relaxed">
                      Brosur spesifikasi teknis lengkap XTUR AI mencakup arsitektur edge GPU, inferensi 4.2ms, ANPR 57 wilayah, dan integrasi 64 kamera RTSP.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#6E6E73]">6.58 MB</span>
                    <a
                      href="/downloads/XTUR-AI-Surveillance-Product-Profile.pdf"
                      download="XTUR-AI-Vision-Surveillance-Product-Profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all flex items-center space-x-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh</span>
                    </a>
                  </div>
                </div>

                {/* Download 3: Aegis Enterprise AI Suite Catalog */}
                <div className="p-5 rounded-3xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 transition-all flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 text-[#6366F1] dark:text-[#818CF8] flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-[#6366F1] dark:text-[#818CF8] font-medium">
                      ENTERPRISE AI (PDF)
                    </span>
                    <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mt-2">
                      Aegis Enterprise AI Suite - Master Technical Catalog
                    </h4>
                    <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] mt-1 leading-relaxed">
                      Katalog resmi 4 halaman A4 mencakup 12 solusi enterprise AI (Maritim VSAT, XTUR Vision, OCR RAG, Sovereign Cyber Shield) dan skema B2B/PoC.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#6E6E73]">4 Halaman (Official)</span>
                    <a
                      href="/downloads/Aegis-Enterprise-AI-Catalog-2026.pdf"
                      download="Aegis-Enterprise-AI-Catalog-2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all flex items-center space-x-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#6E6E73] dark:text-[#A1A1A6]">
          <span>
            {lang === 'ja'
              ? '技術契約書および運用関連文書の機密性はNDA契約に基づき厳格に保護されます'
              : lang === 'ar'
              ? 'سرية مرفقات العقود الفنية والوثائق التشغيلية محمية بموجب اتفاقية عدم الإفصاح (NDA)'
              : lang === 'en'
              ? 'Confidentiality of contract attachments & operational documents protected under NDA'
              : 'Perlindungan kerahasiaan lampiran kontrak teknis & dokumen operasional berlaku di bawah NDA'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white hover:bg-black/[0.08] transition-colors cursor-pointer"
          >
            {lang === 'ja' ? '閉じる' : lang === 'ar' ? 'إغلاق' : lang === 'en' ? 'Close Drawer' : 'Tutup Jendela'}
          </button>
        </div>
      </div>
    </div>
  );
};

