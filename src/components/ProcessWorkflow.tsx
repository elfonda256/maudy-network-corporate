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
  ChevronRight,
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
      title: { en: 'Official Commissioning (Go-Live)', id: 'Operasional Penuh & BAST' },
      shortDesc: { en: 'Formal handover, training & administrative sign-off', id: 'Serah terima resmi, pelatihan staf & penandatanganan BAST' },
      deliverables: {
        en: ['Formal BAST handover document', 'As-Built Documentation & schematics', 'Administrator handover workshop'],
        id: ['Dokumen resmi Berita Acara Serah Terima (BAST)', 'Dokumentasi As-Built Drawing', 'Pelatihan teknis bagi tim klien'],
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
    <section id="process" className="py-24 relative bg-[#081522] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <span>{lang === 'en' ? 'ENGINEERING METHODOLOGY' : 'METODOLOGI PEKERJAAN MNK'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'en' ? (
              <>
                The 8-Stage <span className="text-gradient">Infrastructure Delivery</span> Lifecycle
              </>
            ) : (
              <>
                8 Tahapan <span className="text-gradient">Eksekusi Proyek</span> Berstandar Industri
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'A disciplined engineering process from initial conceptualization to formal ministerial BAST sign-off and 24/7 proactive surveillance.'
              : 'Alur kerja terstruktur dan disiplin tinggi dari tahap asesmen awal hingga serah terima resmi BAST dan pemantauan 24/7.'}
          </p>
        </div>

        {/* 8-Step Timeline Horizontal Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedStep(idx)}
                className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-600/30 to-cyan-500/20 border-cyan-400 shadow-glow-sm'
                    : 'bg-[#0B1F3A]/50 border-slate-800 hover:bg-[#0B1F3A]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {step.num}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-cyan-300' : 'text-slate-500'
                    }`}
                  />
                </div>
                <div
                  className={`text-xs font-bold truncate ${
                    isSelected ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {step.title[lang]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="glass-card rounded-2xl border border-cyan-500/30 p-6 sm:p-8 max-w-4xl mx-auto shadow-card-elevated animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                <StepIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  {lang === 'en' ? `Stage ${currentStep.num} Execution` : `Tahap ${currentStep.num}`}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {currentStep.title[lang]}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-mono border border-slate-700">
              {lang === 'en' ? 'Verified Protocol' : 'Standar Baku MNK'}
            </span>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-sm text-slate-200 leading-relaxed font-light">
              {currentStep.shortDesc[lang]}
            </p>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
                {lang === 'en' ? 'Standard Deliverables at this Stage:' : 'Dokumen & Output Tahapan Ini:'}
              </div>
              <ul className="space-y-2">
                {currentStep.deliverables[lang].map((d, dIdx) => (
                  <li key={dIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-mono">
              {lang === 'en' ? 'Transparent tracking through each milestone' : 'Pelaporan berkala di setiap tahap pelaksanaan'}
            </span>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold shadow-glow-sm hover:shadow-glow-md transition-all flex items-center space-x-2"
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
