import React, { useState } from 'react';
import {
  MessageSquare,
  Search,
  PenTool,
  Wrench,
  CheckCircle,
  Rocket,
  Activity,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react';

interface ProcessProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const ProcessWorkflow: React.FC<ProcessProps> = ({ lang, onOpenConsultation }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: { en: 'Technical Consultation', id: 'Konsultasi Teknis' },
      shortDesc: { en: 'Executive requirement gathering & SLA definition', id: 'Pemetaan kebutuhan bisnis & penetapan target SLA' },
      deliverables: {
        en: ['Scope of Work (SOW)', 'Technical constraint assessment', 'Budget & compliance estimation'],
        id: ['Kerangka Acuan Kerja (KAK/TOR)', 'Pemetaan batasan teknis', 'Estimasi anggaran & regulasi'],
      },
    },
    {
      num: '02',
      icon: Search,
      title: { en: 'Comprehensive Site Survey', id: 'Survei Lapangan Komprehensif' },
      shortDesc: { en: 'Physical terrain tracing & environmental audit', id: 'Pemeriksaan fisik medan darat, laut, atau pusat data' },
      deliverables: {
        en: ['Cable run & conduit pathfinding', 'Soil grounding resistivity test', 'RF / Satellite line-of-sight validation'],
        id: ['Penelusuran jalur kabel & ducting', 'Uji resistansi grounding tanah', 'Validasi line-of-sight antena satelit'],
      },
    },
    {
      num: '03',
      icon: PenTool,
      title: { en: 'Architectural Blueprint', id: 'Desain Arsitektur Jaringan' },
      shortDesc: { en: 'Certified topology design & Bill of Materials', id: 'Penyusunan peta topologi logis & spesifikasi hardware' },
      deliverables: {
        en: ['Cisco/Fortinet topology diagram', 'Dual-WAN failover simulation', 'Complete Bill of Quantities (BOQ)'],
        id: ['Peta topologi resmi Cisco & Fortinet', 'Simulasi failover multi-ISP', 'Daftar rincian BOQ perangkat'],
      },
    },
    {
      num: '04',
      icon: Wrench,
      title: { en: 'Civil & Hardware Execution', id: 'Implementasi Fisik & Penarikan' },
      shortDesc: { en: 'Structured cabling, trenching & rack dressing', id: 'Penggelaran kabel fiber optic, cor pondasi & terminasi' },
      deliverables: {
        en: ['Single-mode fiber termination', 'Certified lightning rod grounding', 'Server rack patch-panel labeling'],
        id: ['Terminasi kabel fiber optik', 'Instalasi grounding rod penangkal petir', 'Perapihan & pelabelan patch panel'],
      },
    },
    {
      num: '05',
      icon: CheckCircle,
      title: { en: 'Commissioning & Stress Testing', id: 'Uji Beban & Kalibrasi' },
      shortDesc: { en: 'Throughput stress, latency & failover drill', id: 'Simulasi pemutusan jalur, uji latensi & keamanan' },
      deliverables: {
        en: ['Fluke OTDR cable certification', 'Automated sub-second failover test', 'Firewall penetration & IPS audit'],
        id: ['Sertifikasi kabel Fluke / OTDR', 'Uji coba putus koneksi sub-detik', 'Audit penetrasi firewall & filter IPS'],
      },
    },
    {
      num: '06',
      icon: Rocket,
      title: { en: 'Official Commissioning (Go-Live)', id: 'Operasional Penuh & Serah Terima' },
      shortDesc: { en: 'Formal handover, training & administrative sign-off', id: 'Serah terima operasional resmi, pelatihan staf & penandatanganan penugasan' },
      deliverables: {
        en: ['Formal project handover document', 'As-Built Documentation & schematics', 'Administrator handover workshop'],
        id: ['Dokumen resmi Berita Acara Serah Terima Pekerjaan', 'Dokumentasi As-Built Drawing & Skema', 'Pelatihan teknis bagi tim klien'],
      },
    },
    {
      num: '07',
      icon: Activity,
      title: { en: '24/7 Proactive Monitoring (NOC)', id: 'Pemantauan Proaktif 24/7 (NOC)' },
      shortDesc: { en: 'Sub-minute daemon polling & PIS_BOT alerts', id: 'Pemantauan nonstop oleh tim NOC & bot notifikasi instan' },
      deliverables: {
        en: ['Real-time ICMP telemetry dashboard', 'Instant automated traceroute alerts', 'Root-cause incident tracking'],
        id: ['Dashboard telemetri real-time', 'Notifikasi Telegram saat ada kendala', 'Pelacakan akar penyebab gangguan'],
      },
    },
    {
      num: '08',
      icon: LifeBuoy,
      title: { en: 'Continuous SLA Maintenance', id: 'Pemeliharaan & Optimasi SLA' },
      shortDesc: { en: 'Quarterly preventative audits & rapid on-site dispatch', id: 'Pembersihan berkala, audit NVR & laporan bulanan' },
      deliverables: {
        en: ['Monthly uptime compliance reports', 'Preventative hardware servicing', '24/7 senior engineer escalation'],
        id: ['Laporan resmi kepatuhan uptime bulanan', 'Servis preventif berkala lensa & hardware', 'Eskalasi darurat teknisi bersertifikasi'],
      },
    },
  ];

  const currentStep = steps[selectedStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="process" className="py-24 bg-slate-50/60 dark:bg-[#06101B]/60 backdrop-blur-md border-t border-slate-200/70 dark:border-slate-800/70 transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute top-12 right-8 text-[11px] font-tech text-slate-400/30 dark:text-cyan-500/10 select-none pointer-events-none tracking-widest hidden md:block">
        [FRAMEWORK: 8_STAGE_METHODOLOGY_PIPELINE // AUDITED]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{lang === 'en' ? 'ENGINEERING METHODOLOGY' : 'METODOLOGI PEKERJAAN MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'en' ? (
              <>
                The 8-Stage <span className="text-gradient-brand">Infrastructure Delivery</span> Lifecycle
              </>
            ) : (
              <>
                8 Tahapan <span className="text-gradient-brand">Eksekusi Proyek</span> Berstandar Industri
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'A disciplined engineering process from initial conceptualization to formal project handover and 24/7 proactive surveillance.'
              : 'Alur kerja terstruktur dan disiplin tinggi dari tahap asesmen awal hingga serah terima resmi operasional dan pemantauan 24/7.'}
          </p>
        </div>

        {/* 8-Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0071E3] text-white border-transparent shadow-md scale-105'
                    : 'bg-white dark:bg-[#161617] border-black/[0.08] dark:border-white/[0.08] text-[#1D1D1F] dark:text-white hover:border-[#0071E3]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-white' : 'text-[#0071E3] dark:text-[#2997FF]'}`}>
                    {step.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-white' : 'text-[#86868B]'
                    }`}
                  />
                </div>
                <div className="text-xs font-semibold truncate">
                  {step.title[lang]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Card */}
        <div className="bg-white dark:bg-[#161617] rounded-3xl border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-10 max-w-4xl mx-auto shadow-sm relative overflow-hidden animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] shadow-2xs">
                <StepIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF] font-semibold uppercase tracking-wider">
                  {lang === 'en' ? `Stage ${currentStep.num} Execution` : `Tahap ${currentStep.num}`}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] dark:text-white mt-0.5">
                  {currentStep.title[lang]}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white text-xs font-mono font-medium border border-black/[0.06] dark:border-white/[0.08]">
              {lang === 'en' ? 'Verified Protocol' : 'Standar Baku MNK'}
            </span>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-sm text-[#1D1D1F] dark:text-slate-200 leading-relaxed font-normal">
              {currentStep.shortDesc[lang]}
            </p>

            <div className="bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-xs font-mono text-[#1D1D1F] dark:text-white uppercase tracking-wider mb-3 font-semibold">
                {lang === 'en' ? 'Standard Deliverables at this Stage:' : 'Dokumen & Output Tahapan Ini:'}
              </div>
              <ul className="space-y-2.5">
                {currentStep.deliverables[lang].map((d, dIdx) => (
                  <li key={dIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#1D1D1F] dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] font-mono">
              {lang === 'en' ? 'Transparent tracking through each milestone' : 'Pelaporan berkala di setiap tahap pelaksanaan'}
            </span>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium shadow-none hover:shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>{lang === 'en' ? 'Initiate Stage 01 Consultation' : 'Mulai Tahap 01 Konsultasi'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
