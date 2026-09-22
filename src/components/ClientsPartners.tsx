import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Image as ImageIcon, 
  X, 
  ExternalLink, 
  FileCheck, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { useCms } from '../context/CmsContext';
import type { ClientItem } from '../context/CmsContext';
import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface ClientsPartnersProps {
  lang: Language;
}

export const ClientsPartners: React.FC<ClientsPartnersProps> = ({ lang }) => {
  const { clients } = useCms();
  const [activeTab, setActiveTab] = useState<'clients' | 'tech'>('clients');
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);

  const clientInstitutions = clients.filter((c) => c.type === 'client');
  const techPartners = clients.filter((c) => c.type === 'partner');
  const currentList = activeTab === 'clients' ? clientInstitutions : techPartners;

  // Duplicate for smooth seamless infinite marquee loop
  const marqueeList = [...clients, ...clients];

  return (
    <section className="relative py-20 bg-[#FBFBFD] dark:bg-[#000000] border-y border-black/[0.06] dark:border-white/[0.08] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#1D1D1F] dark:text-slate-200 text-xs font-mono mb-3 border border-black/[0.08] dark:border-white/[0.1]">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-[#0071E3] dark:text-[#2997FF]" />
            <span>
              {lang === 'ja'
                ? '認定クライアント実績＆主要テクノロジーパートナー'
                : lang === 'ar'
                ? 'الشركاء والعملاء الاستراتيجيون المعتمدون'
                : lang === 'en'
                ? 'VERIFIED CLIENT ENGAGEMENTS & OEM PARTNERS'
                : 'DAFTAR KLIEN STRATEGIS & MITRA PRINSIPAL'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
            {lang === 'ja' ? (
              <>
                Maudy Network を信頼する <span className="text-[#0071E3] dark:text-[#2997FF]">主要企業・官公庁</span>
              </>
            ) : lang === 'ar' ? (
              <>
                كبرى الشركات والهيئات التي <span className="text-[#0071E3] dark:text-[#2997FF]">تثق في Maudy</span>
              </>
            ) : lang === 'en' ? (
              <>
                Companies &amp; Institutions That <span className="text-[#0071E3] dark:text-[#2997FF]">Trust Maudy</span>
              </>
            ) : (
              <>
                Daftar Perusahaan &amp; Instansi Yang <span className="text-[#0071E3] dark:text-[#2997FF]">Mempercayai Maudy</span>
              </>
            )}
          </h2>
          <p className="mt-2 text-sm text-[#6E6E73] dark:text-[#A1A1A6] font-normal">
            {lang === 'ja'
              ? '下記の各組織カードをクリックすると、検証済みの業務範囲、納入成果物、契約詳細を確認できます。'
              : lang === 'ar'
              ? 'انقر على بطاقة أي مؤسسة أدناه للاطلاع على نطاق العمل المعتمد، مخرجات المشروع، وتفاصيل التعاقد.'
              : lang === 'en'
              ? 'Click on any institution card below to inspect verified engagement scopes, project deliverables, and contract details.'
              : 'Klik kartu instansi di bawah untuk melihat detail ruang lingkup pekerjaan, status kemitraan terverifikasi, dan studi kasus proyek.'}
          </p>
        </div>

        {/* 1. Interactive Infinite 3D Animated Logo Marquee Ribbon */}
        <div className="relative mb-12 overflow-hidden py-3">
          {/* Gradient Masks for edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#FBFBFD] dark:from-[#000000] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#FBFBFD] dark:from-[#000000] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee-left flex items-center space-x-4">
            {marqueeList.map((item, mIdx) => (
              <div
                key={mIdx}
                onClick={() => setSelectedClient(item)}
                className="flex-shrink-0 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#161617] border border-black/[0.08] dark:border-white/[0.08] shadow-xs hover:shadow-md hover:border-[#0071E3]/40 cursor-pointer transition-all flex items-center space-x-3 group"
              >
                {item.logoFile && (item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.includes('.')) ? (
                  <div className="w-8 h-8 rounded-xl bg-white p-0.5 flex items-center justify-center overflow-hidden border border-black/[0.06] flex-shrink-0">
                    <img
                      src={item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.startsWith('/') ? item.logoFile : `/logos/${item.logoFile}`}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-semibold font-mono text-[10px] text-white flex-shrink-0"
                    style={{ backgroundColor: item.brandColor }}
                  >
                    {item.initials}
                  </div>
                )}
                <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Apple Style Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-xs font-medium">
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-2 rounded-full transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'clients'
                  ? 'bg-white dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                  : 'text-[#6E6E73] dark:text-slate-400 hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>
                {lang === 'ja'
                  ? '主要クライアント（国営企業・省庁）'
                  : lang === 'ar'
                  ? 'عملاء استراتيجيون (شركات حكومية ووزارات)'
                  : lang === 'en'
                  ? 'Client Institutions (BUMN & Government)'
                  : 'Klien Strategis (BUMN & Kementerian)'}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-full transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'tech'
                  ? 'bg-white dark:bg-[#1C1C1E] text-[#1D1D1F] dark:text-white shadow-sm font-semibold'
                  : 'text-[#6E6E73] dark:text-slate-400 hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>
                {lang === 'ja'
                  ? 'テクノロジー主要パートナー（OEM）'
                  : lang === 'ar'
                  ? 'الشركاء التكنولوجيون (OEM)'
                  : lang === 'en'
                  ? 'Technology OEM Partners'
                  : 'Mitra Prinsipal Teknologi'}
              </span>
            </button>
          </div>
        </div>

        {/* 2. Directory Grid with Apple Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedClient(item)}
              className="bg-white dark:bg-[#161617] p-6 rounded-3xl border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0071E3]/40 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  {/* Standardized Logo / Initials Badge */}
                  <div className="flex items-center space-x-3.5">
                    {item.logoFile && (item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.includes('.')) ? (
                      <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.06] dark:border-white/[0.1] p-2 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <img
                          src={item.logoFile.startsWith('data:image') || item.logoFile.startsWith('http') || item.logoFile.startsWith('/') ? item.logoFile : `/logos/${item.logoFile}`}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-semibold font-mono text-sm text-white shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: item.brandColor }}
                      >
                        {item.initials}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white leading-snug group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-normal text-[#6E6E73] dark:text-[#A1A1A6]">
                        {getLangText(item.category, lang)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <div className="text-[11px] font-medium text-[#6E6E73] dark:text-[#A1A1A6] mb-1 flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1.5 text-emerald-500" />
                    <span>{lang === 'ja' ? '提供スコープ' : lang === 'ar' ? 'نطاق العمل المعتمد' : lang === 'en' ? 'Verified Scope' : 'Ruang Lingkup Terverifikasi'}</span>
                  </div>
                  <p className="text-xs text-[#1D1D1F] dark:text-[#F5F5F7] font-normal leading-relaxed">
                    {getLangText(item.scope, lang)}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Trigger Bar */}
              <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px]">
                <span className="text-[#6E6E73] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors flex items-center font-medium">
                  <span>Lihat Detail Kemitraan</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-[10px]">
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Pop-Up Modal for Client Details */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="animate-pop-up bg-white/95 dark:bg-[#161617]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/[0.05] dark:bg-white/[0.1] text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center space-x-4 mb-6">
              {selectedClient.logoFile && (selectedClient.logoFile.startsWith('data:image') || selectedClient.logoFile.startsWith('http') || selectedClient.logoFile.includes('.')) ? (
                <div className="w-16 h-16 rounded-2xl bg-white border border-black/[0.06] dark:border-white/[0.1] p-2.5 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs">
                  <img
                    src={selectedClient.logoFile.startsWith('data:image') || selectedClient.logoFile.startsWith('http') || selectedClient.logoFile.startsWith('/') ? selectedClient.logoFile : `/logos/${selectedClient.logoFile}`}
                    alt={selectedClient.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-semibold text-base text-white shadow-xs flex-shrink-0"
                  style={{ backgroundColor: selectedClient.brandColor }}
                >
                  {selectedClient.initials}
                </div>
              )}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    VERIFIED ENGAGEMENT
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-white mt-1">
                  {selectedClient.name}
                </h3>
                <span className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                  {getLangText(selectedClient.category, lang)}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
                <div className="text-[11px] font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider">
                  {lang === 'ja' ? '調達スコープ・導入サービス' : lang === 'ar' ? 'نطاق التوريد والخدمات المنفذة' : lang === 'en' ? 'Scope of Work & Deployed Services' : 'Ruang Lingkup Pengadaan & Layanan Terpasang'}
                </div>
                <p className="text-[#1D1D1F] dark:text-[#F5F5F7] leading-relaxed font-normal text-xs">
                  {getLangText(selectedClient.scope, lang)}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-[11px] space-y-1.5 text-[#6E6E73] dark:text-[#A1A1A6]">
                <div className="flex justify-between items-center">
                  <span>
                    {lang === 'ja'
                      ? 'パートナーシップ区分:'
                      : lang === 'ar'
                      ? 'تصنيف الشراكة:'
                      : lang === 'en'
                      ? 'Partnership Classification:'
                      : 'Klasifikasi Kemitraan:'}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    {selectedClient.type === 'client' ? 'End-User Strategic BUMN' : 'Global OEM Technology Partner'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>
                    {lang === 'ja'
                      ? '稼働SLAステータス:'
                      : lang === 'ar'
                      ? 'حالة مستوى الخدمة التشغيلي:'
                      : lang === 'en'
                      ? 'Operational SLA Status:'
                      : 'Status SLA Operasional:'}
                  </span>
                  <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">99.98% High Availability</span>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setSelectedClient(null)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
              >
                {lang === 'ja' ? '閉じる' : lang === 'ar' ? 'إغلاق' : lang === 'en' ? 'Close' : 'Tutup'}
              </button>

              <a
                href="#projects"
                onClick={() => setSelectedClient(null)}
                className="px-5 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold shadow-sm hover:shadow transition-all flex items-center space-x-1.5"
              >
                <span>
                  {lang === 'ja'
                    ? '関連事例・導入実績を見る'
                    : lang === 'ar'
                    ? 'عرض دراسة الحالة ذات الصلة'
                    : lang === 'en'
                    ? 'View Related Case Study'
                    : 'Lihat Studi Kasus Terkait'}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
