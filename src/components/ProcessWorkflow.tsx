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
import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface ProcessProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const ProcessWorkflow: React.FC<ProcessProps> = ({ lang, onOpenConsultation }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: { 
        id: 'Konsultasi Teknis', 
        en: 'Technical Consultation', 
        ja: '技術要件ヒアリング・協議', 
        ar: 'الاستشارة وتحديد المتطلبات' 
      },
      shortDesc: { 
        id: 'Pemetaan kebutuhan bisnis & penetapan target SLA', 
        en: 'Executive requirement gathering & SLA definition', 
        ja: '業務要件の明確化、SLA目標設定、技術的制約の洗い出し', 
        ar: 'تحديد متطلبات العمل وأهداف مستوى الخدمة SLA والقيود الفنية' 
      },
      deliverables: {
        id: ['Kerangka Acuan Kerja (KAK/TOR)', 'Pemetaan batasan teknis', 'Estimasi anggaran & regulasi'],
        en: ['Scope of Work (SOW)', 'Technical constraint assessment', 'Budget & compliance estimation'],
        ja: ['業務仕様書 (SOW / TOR)', '技術的制約・環境適合性評価書', '概算費用およびコンプライアンス要件定義書'],
        ar: ['نطاق العمل الرسمي (SOW)', 'تقييم المحددات والقيود الفنية', 'تقدير الميزانية والامتثال التنظيمي']
      },
    },
    {
      num: '02',
      icon: Search,
      title: { 
        id: 'Survei Lapangan Komprehensif', 
        en: 'Comprehensive Site Survey', 
        ja: '現地サーベイ・環境実地調査', 
        ar: 'المعاينة الميدانية الشاملة' 
      },
      shortDesc: { 
        id: 'Pemeriksaan fisik medan darat, laut, atau pusat data', 
        en: 'Physical terrain tracing & environmental audit', 
        ja: '陸上・洋上・データセンターの物理的環境および接地抵抗の現地測定', 
        ar: 'المعاينة الفيزيائية للموقع (أرضي، بحري، أو مركز بيانات) وقياسات التأريض' 
      },
      deliverables: {
        id: ['Penelusuran jalur kabel & ducting', 'Uji resistansi grounding tanah', 'Validasi line-of-sight antena satelit'],
        en: ['Cable run & conduit pathfinding', 'Soil grounding resistivity test', 'RF / Satellite line-of-sight validation'],
        ja: ['配線ルートおよび配管経路計画図', '接地抵抗値（アース）実測データ報告書', '衛星アンテナ見通し（Line-of-Sight）電波伝搬検証'],
        ar: ['تخطيط مسارات الكابلات والتمديدات', 'اختبار مقاومة التأريض للأرض', 'التحقق من خط الرؤية للهوائيات الفضائية']
      },
    },
    {
      num: '03',
      icon: PenTool,
      title: { 
        id: 'Desain Arsitektur Jaringan', 
        en: 'Architectural Blueprint', 
        ja: 'ネットワーク基本・詳細設計', 
        ar: 'تصميم البنية المعمارية' 
      },
      shortDesc: { 
        id: 'Penyusunan peta topologi logis & spesifikasi hardware', 
        en: 'Certified topology design & Bill of Materials', 
        ja: '認定エンジニアによる冗長論理トポロジー作成および資材一覧（BOQ）策定', 
        ar: 'رسم المخطط الطوبولوجي واعتماد قائمة المعدات والمواد (BOQ)' 
      },
      deliverables: {
        id: ['Peta topologi resmi Cisco & Fortinet', 'Simulasi failover multi-ISP', 'Daftar rincian BOQ perangkat'],
        en: ['Cisco/Fortinet topology diagram', 'Dual-WAN failover simulation', 'Complete Bill of Quantities (BOQ)'],
        ja: ['Cisco/Fortinet公式トポロジー図面', 'マルチWAN自動フェイルオーバー事前シミュレーション', '完全な機器構成明細（BOQ）'],
        ar: ['مخطط الشبكة المعتمد (Cisco/Fortinet)', 'محاكاة التحويل الاحتياطي للإنترنت المتعدد', 'قائمة الكميات التفصيلية (BOQ)']
      },
    },
    {
      num: '04',
      icon: Wrench,
      title: { 
        id: 'Implementasi Fisik & Penarikan', 
        en: 'Civil & Hardware Execution', 
        ja: '物理敷設工事＆ハードウェア設置', 
        ar: 'التنفيذ الميداني وتمديد الكابلات' 
      },
      shortDesc: { 
        id: 'Penggelaran kabel fiber optic, cor pondasi & terminasi', 
        en: 'Structured cabling, trenching & rack dressing', 
        ja: '光ファイバー敷設、避雷針接地工事、ラックマウントおよび配線成形', 
        ar: 'تمديد كابلات الألياف الضوئية، مانعات الصواعق وتجهيز كبائن الخوادم' 
      },
      deliverables: {
        id: ['Terminasi kabel fiber optik', 'Instalasi grounding rod penangkal petir', 'Perapihan & pelabelan patch panel'],
        en: ['Single-mode fiber termination', 'Certified lightning rod grounding', 'Server rack patch-panel labeling'],
        ja: ['シングルモード光ファイバー融着・成端処理', '規格適合避雷針・サージ保護接地施工', 'パッチパネルおよびサーバーラックのラベリング整理'],
        ar: ['لحام وإنهاء كابلات الألياف الضوئية', 'تركيب نظام الحماية من الصواعق والتأريض', 'ترقيم وتنظيم لوحات التوزيع Patch Panels']
      },
    },
    {
      num: '05',
      icon: CheckCircle,
      title: { 
        id: 'Uji Beban & Kalibrasi', 
        en: 'Commissioning & Stress Testing', 
        ja: '負荷試験・フェイルオーバー検証', 
        ar: 'اختبارات الإجهاد والمعايرة' 
      },
      shortDesc: { 
        id: 'Simulasi pemutusan jalur, uji latensi & keamanan', 
        en: 'Throughput stress, latency & failover drill', 
        ja: 'スループット過負荷試験、ミリ秒単位の回線遮断シミュレーション、侵入テスト', 
        ar: 'اختبارات سعة نقل البيانات، محاكاة انقطاع المسارات واختراق الأمان' 
      },
      deliverables: {
        id: ['Sertifikasi kabel Fluke / OTDR', 'Uji coba putus koneksi sub-detik', 'Audit penetrasi firewall & filter IPS'],
        en: ['Fluke OTDR cable certification', 'Automated sub-second failover test', 'Firewall penetration & IPS audit'],
        ja: ['Fluke / OTDR光ファイバー測定適合証明書', '秒未満リンクダウン切り替え実証テスト', 'ファイアウォール脆弱性診断およびIPS監査'],
        ar: ['شهادة فحص كابلات OTDR من Fluke', 'اختبار التحويل التلقائي بأقل من ثانية', 'تدقيق اختراق جدران الحماية ونظام IPS']
      },
    },
    {
      num: '06',
      icon: Rocket,
      title: { 
        id: 'Operasional Penuh & Serah Terima', 
        en: 'Official Commissioning (Go-Live)', 
        ja: '本番稼働（Go-Live）＆公式検収', 
        ar: 'التشغيل الفعلي والتسليم النهائي' 
      },
      shortDesc: { 
        id: 'Serah terima operasional resmi, pelatihan staf & penandatanganan penugasan', 
        en: 'Formal handover, training & administrative sign-off', 
        ja: '業務引継ぎ完了調印、運用マニュアル納品、管理者技術講習会の実施', 
        ar: 'التسليم الرسمي للمشروع، تدريب الكوادر واعتماد محاضر الاستلام' 
      },
      deliverables: {
        id: ['Dokumen resmi Berita Acara Serah Terima Pekerjaan', 'Dokumentasi As-Built Drawing & Skema', 'Pelatihan teknis bagi tim klien'],
        en: ['Formal project handover document', 'As-Built Documentation & schematics', 'Administrator handover workshop'],
        ja: ['公式工事完了引渡書（BAST相当）', '竣工図面（As-Built Drawing）および結線台帳', '社内運用担当者向け技術移転ハンズオントレーニング'],
        ar: ['محضر الاستلام والتسليم الرسمي (BAST)', 'المخططات النهائية المنفذة (As-Built Drawings)', 'ورشة عمل تدريبية لإدارة النظام']
      },
    },
    {
      num: '07',
      icon: Activity,
      title: { 
        id: 'Pemantauan Proaktif 24/7 (NOC)', 
        en: '24/7 Proactive Monitoring (NOC)', 
        ja: '24時間365日 NOC常時監視', 
        ar: 'المراقبة الاستباقية 24/7 (NOC)' 
      },
      shortDesc: { 
        id: 'Pemantauan nonstop oleh tim NOC & bot notifikasi instan', 
        en: 'Sub-minute daemon polling & PIS_BOT alerts', 
        ja: 'SNMP/ICMPによる秒単位ポーリング監視および自動アラート発報', 
        ar: 'مراقبة مستمرة على مدار الساعة مع تنبيهات تلقائية فورية' 
      },
      deliverables: {
        id: ['Dashboard telemetri real-time', 'Notifikasi Telegram saat ada kendala', 'Pelacakan akar penyebab gangguan'],
        en: ['Real-time ICMP telemetry dashboard', 'Instant automated traceroute alerts', 'Root-cause incident tracking'],
        ja: ['リアルタイム遠隔テレメトリダッシュボード', '異常検知時の即時ボット通知・自動Traceroute採取', 'インシデント根本原因分析（RCA）レポート'],
        ar: ['لوحة تحكم فورية لقياسات الشبكة', 'تنبيهات تلقائية فورية عند حدوث أي عطل', 'تتبع الأسباب الجذرية وتحليل الحوادث']
      },
    },
    {
      num: '08',
      icon: LifeBuoy,
      title: { 
        id: 'Pemeliharaan & Optimasi SLA', 
        en: 'Continuous SLA Maintenance', 
        ja: '継続的SLA保守＆現地オンサイト対応', 
        ar: 'الصيانة المستمرة وضمان SLA' 
      },
      shortDesc: { 
        id: 'Pembersihan berkala, audit NVR & laporan bulanan', 
        en: 'Quarterly preventative audits & rapid on-site dispatch', 
        ja: '定期点検整備、ファームウェア更新、稼働率監査レポートの定期発行', 
        ar: 'صيانة وقائية دورية، فحص الأجهزة وتقارير أداء شهرية' 
      },
      deliverables: {
        id: ['Laporan resmi kepatuhan uptime bulanan', 'Servis preventif berkala lensa & hardware', 'Eskalasi darurat teknisi bersertifikasi'],
        en: ['Monthly uptime compliance reports', 'Preventative hardware servicing', '24/7 senior engineer escalation'],
        ja: ['月次SLA稼働率達成報告書', '定期予防保守（光学レンズ清掃・機器診断）', '上級エンジニアによる24時間緊急オンサイト出動体制'],
        ar: ['تقارير شهرية رسمية للامتثال بنسبة التوفر', 'صيانة وقائية دورية للأجهزة والعدسات', 'تصعيد طوارئ للمهندسين المتخصصين على مدار الساعة']
      },
    },
  ];

  const currentStep = steps[selectedStep];
  const StepIcon = currentStep.icon;

  const t = {
    eyebrow: {
      id: 'METODOLOGI PEKERJAAN MNK',
      en: 'ENGINEERING METHODOLOGY',
      ja: 'MNKエンジニアリング標準プロセス',
      ar: 'منهجية العمل الهندسي المعتمدة'
    }[lang],
    titlePrefix: {
      id: '8 Tahapan',
      en: 'The 8-Stage',
      ja: '確実な完工を導く',
      ar: 'دورة حياة'
    }[lang],
    titleHighlight: {
      id: 'Eksekusi Proyek',
      en: 'Infrastructure Delivery',
      ja: '8段階のデリバリー工程',
      ar: 'تنفيذ المشاريع في 8 مراحل'
    }[lang],
    titleSuffix: {
      id: 'Berstandar Industri',
      en: 'Lifecycle',
      ja: '（業界標準）',
      ar: 'وفق المعايير الصناعية'
    }[lang],
    desc: {
      id: 'Alur kerja terstruktur dan disiplin tinggi dari tahap asesmen awal hingga serah terima resmi operasional dan pemantauan 24/7.',
      en: 'A disciplined engineering process from initial conceptualization to formal project handover and 24/7 proactive surveillance.',
      ja: '初期の要件定義・現地調査から、厳格な品質試験、引き渡し、そして24時間監視保守に至るまで体系化されたプロトコル。',
      ar: 'مسار عمل هندسي دقيق ومنضبط يبدأ من التقييم الميداني الأولي حتى التسليم الرسمي والمراقبة الاستباقية 24/7.'
    }[lang],
    stageLabel: {
      id: `Tahap ${currentStep.num}`,
      en: `Stage ${currentStep.num} Execution`,
      ja: `フェーズ ${currentStep.num} 実行工程`,
      ar: `المرحلة ${currentStep.num} التنفيذية`
    }[lang],
    protocolBadge: {
      id: 'Standar Baku MNK',
      en: 'Verified Protocol',
      ja: '標準プロトコル認定',
      ar: 'معيار معتمد'
    }[lang],
    deliverablesTitle: {
      id: 'Dokumen & Output Tahapan Ini:',
      en: 'Standard Deliverables at this Stage:',
      ja: 'このフェーズでの主要成果物・提出書類:',
      ar: 'المخرجات والوثائق المعتمدة لهذه المرحلة:'
    }[lang],
    trackingNote: {
      id: 'Pelaporan berkala di setiap tahap pelaksanaan',
      en: 'Transparent tracking through each milestone',
      ja: '各マイルストーンで透明性の高い進捗報告と監査を実施',
      ar: 'تقارير متابعة شفافة وموثقة في كل مرحلة'
    }[lang],
    consultBtn: {
      id: 'Mulai Tahap 01 Konsultasi',
      en: 'Initiate Stage 01 Consultation',
      ja: 'フェーズ01の技術相談を開始する',
      ar: 'بدء استشارة المرحلة الأولى'
    }[lang]
  };

  return (
    <section id="process" className="py-24 bg-transparent transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {t.titlePrefix} <span className="text-gradient-brand">{t.titleHighlight}</span> {t.titleSuffix}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {t.desc}
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
                  {getLangText(step.title, lang)}
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
                  {t.stageLabel}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] dark:text-white mt-0.5">
                  {getLangText(currentStep.title, lang)}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white text-xs font-mono font-medium border border-black/[0.06] dark:border-white/[0.08]">
              {t.protocolBadge}
            </span>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-sm text-[#1D1D1F] dark:text-slate-200 leading-relaxed font-normal">
              {getLangText(currentStep.shortDesc, lang)}
            </p>

            <div className="bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-xs font-mono text-[#1D1D1F] dark:text-white uppercase tracking-wider mb-3 font-semibold">
                {t.deliverablesTitle}
              </div>
              <ul className="space-y-2.5">
                {((currentStep.deliverables as any)[lang] || currentStep.deliverables.en || currentStep.deliverables.id || []).map((d: string, dIdx: number) => (
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
              {t.trackingNote}
            </span>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium shadow-none hover:shadow-sm transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>{t.consultBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
