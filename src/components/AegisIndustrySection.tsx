import React, { useState } from 'react';
import { 
  Ship, HardHat, Factory, ShoppingCart, Truck, Building2, 
  ShieldCheck, Activity, Zap, Layers, Recycle, Briefcase, 
  ChevronRight, CheckCircle2, AlertCircle
} from 'lucide-react';
import { INDUSTRIES, type IndustryItem } from '../data/aegisData';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
  onSelectProduct: (productId: string) => void;
  onOpenDemo: (prefilled?: string) => void;
}

export const AegisIndustrySection: React.FC<Props> = ({ 
  lang = 'id',
  onSelectProduct, 
  onOpenDemo 
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  const t = AEGIS_UI_TEXTS[lang]?.industry || AEGIS_UI_TEXTS.id.industry;

  const industryIcons: Record<string, React.ElementType> = {
    'maritime': Ship,
    'construction': HardHat,
    'manufacturing': Factory,
    'procurement': ShoppingCart,
    'logistics': Truck,
    'government': Building2,
    'finance': ShieldCheck,
    'healthcare': Activity,
    'energy': Zap,
    'industrial-estate': Layers,
    'waste-management': Recycle,
    'enterprise-corporate': Briefcase,
  };

  const localizedIndustries: Record<string, Record<Language, {
    name: string;
    tagline: string;
    description: string;
    metricDemo: string;
    challenges: string[];
    solutions: string[];
  }>> = {
    'maritime': {
      id: {
        name: 'Maritim & Pelayaran Tanker',
        tagline: 'Operasi Laut Lepas Mandiri',
        description: 'Menghadirkan edge computing AI yang beroperasi mandiri di atas kapal tanker dan kargo tanpa ketergantungan koneksi satelit broadband terus-menerus.',
        metricDemo: 'Edge AI Kapal Offline',
        challenges: [
          'Konektivitas satelit terbatas dan mahal di perairan terpencil.',
          'Biaya bahan bakar (bunker fuel) menyerap hingga 60% biaya operasi.',
          'Kerusakan mesin di laut lepas berisiko bencana operasional tinggi.'
        ],
        solutions: [
          'Edge AI offline untuk diagnostik mesin langsung di kapal.',
          'Optimasi rute navigasi dan kecepatan hemat bahan bakar.',
          'Sinkronisasi data terkompresi hemat bandwidth ke darat.'
        ]
      },
      en: {
        name: 'Maritime & Tanker Shipping',
        tagline: 'Autonomous Deep-Sea Operations',
        description: 'Deploying edge AI engines aboard oceanic tanker and cargo vessels running 100% offline without continuous broadband satellite links.',
        metricDemo: 'Offline Deep-Sea Edge AI',
        challenges: [
          'Prohibitive satellite broadband costs and connectivity dropouts in open oceans.',
          'Bunker fuel consumption accounts for up to 60% of total voyage expenses.',
          'Engine breakdowns in remote waters present extreme financial and safety hazards.'
        ],
        solutions: [
          'Zero-latency onboard edge AI for real-time engine diagnostics.',
          'Dynamic weather routing and predictive speed profile optimization.',
          'Differential compressed telemetry synchronization back to onshore headquarters.'
        ]
      },
      ja: {
        name: '海運・外航タンカー',
        tagline: '外洋自律オペレーション',
        description: '常時大容量衛星回線に依存することなく、タンカーや貨物船内で100%自律動作するエッジAIプラットフォームを提供。',
        metricDemo: '洋上エッジAI自律推論',
        challenges: [
          '外洋における高額かつ不安定な衛星通信環境。',
          '燃料費（バンカー油）が運航コスト全体の60%を占める負担。',
          '通信途絶海域での機関トラブルによる航行不能リスク。'
        ],
        solutions: [
          '船内ローカルサーバーで稼働する主機・補機故障診断エッジAI。',
          '気象海象予測データに基づく省燃費最適航路・機関回転数制御。',
          '極小データサイズに圧縮した陸上本社への運行状況差分同期。'
        ]
      },
      ar: {
        name: 'الملاحة البحرية وناقلات النفط',
        tagline: 'عمليات بحرية مستقلة في أعالي البحار',
        description: 'توفير حوسبة حافة ذكية (Edge AI) تعمل بشكل مستقل ومحلي بنسبة 100% على متن السفن دون الحاجة لاتصال مستمر بالأقمار الصناعية.',
        metricDemo: 'ذكاء الحافة البحري دون إنترنت',
        challenges: [
          'انقطاع وتكلفة اتصال الأقمار الصناعية الباهظة في وسط المحيطات.',
          'استهلاك وقود السفن الذي يستنزف ما يصل إلى 60% من تكاليف الرحلة.',
          'أخطار تعطل المحركات في عرض البحر وصعوبة الصيانة الفورية.'
        ],
        solutions: [
          'تشخيص فوري لأعطال المحركات محلياً على سيرفر السفينة دون انتظار الإنترنت.',
          'توجيه مسارات الملاحة البحرية بحسب أحوال الطقس لتوفير الوقود.',
          'مزامنة بيانات مضغوطة للغاية عبر أقمار VSAT مع غرفة العمليات على اليابسة.'
        ]
      }
    },
    'construction': {
      id: {
        name: 'Konstruksi & Infrastruktur',
        tagline: 'Pengawasan Lapangan Cerdas',
        description: 'Otomasi audit kepatuhan APD (K3), validasi progres fisik lapangan terhadap kurva-S, dan pelaporan harian terintegrasi visi komputer.',
        metricDemo: 'Audit K3 & Progres Visi',
        challenges: [
          'Risiko kecelakaan kerja tinggi pada proyek bertingkat tinggi.',
          'Klaim progres kontraktor sering kali tidak sesuai dengan kondisi fisik riil.',
          'Pembuatan laporan harian manual memakan waktu berjam-jam.'
        ],
        solutions: [
          'Deteksi otomatis helm dan rompi K3 melalui analitik CCTV lapangan.',
          'Korelasikan foto dan time-lapse berkala terhadap kurva-S proyek.',
          'Penerbitan log harian proyek secara mandiri oleh agen AI.'
        ]
      },
      en: {
        name: 'Construction & Infrastructure',
        tagline: 'Intelligent Jobsite Oversight',
        description: 'Automated PPE safety audits, physical construction progress validation against schedule S-curves, and computer vision daily reporting.',
        metricDemo: 'Computer Vision HSE & Progress',
        challenges: [
          'High occupational safety hazard on sprawling high-rise and highway developments.',
          'Discrepancies between subcontractor progress claims and physical site completion.',
          'Tedious manual daily site log documentation consuming valuable engineering hours.'
        ],
        solutions: [
          'Continuous automated PPE compliance monitoring via jobsite CCTV streams.',
          'Automated physical completion verification matched against planned S-curves.',
          'Autonomous synthesis of daily construction activity and weather logs.'
        ]
      },
      ja: {
        name: '建設・社会インフラ',
        tagline: '現場監督と安全管理の知能化',
        description: '現場カメラによる保護具（安全帯・ヘルメット）着用検知、工程表S字カーブと連動した進捗検証、施工日報の自動生成。',
        metricDemo: '画像認識・安全進捗管理',
        challenges: [
          '高所作業や大規模インフラ現場における労働災害リスク。',
          '下請業者の出来高報告と現場の実際の施工状況との乖離。',
          '現場監督員が毎日の施工日報や写真整理に追われる事務負担。'
        ],
        solutions: [
          'CCTVカメラ映像を用いた保護具着用・危険エリア侵入の常時自動検知。',
          '定点タイムラプス映像による計画工程（Sカーブ）と実績の自動照合。',
          'AIエージェントによる現場進捗日報・安全巡回記録の自動起票。'
        ]
      },
      ar: {
        name: 'الإنشاءات والبنية التحتية',
        tagline: 'إشراف ميداني رقمي ذكي',
        description: 'أتمتة تدقيق معدات السلامة المهنية، والتحقق البصري من تقدم الأعمال الإنشائية مقارنة بمنحنى S، وتوليد التقارير اليومية.',
        metricDemo: 'الرؤية الحاسوبية للسلامة والتقدم',
        challenges: [
          'مخاطر حوادث العمل المرتفعة في المشاريع الكبرى والأبراج الشاهقة.',
          'التباين بين مطالبات مستخلصات المقاولين ونسبة الإنجاز الفعلية.',
          'استهلاك ساعات طويلة يومياً في إعداد السجلات والتقارير الميدانية الورقية.'
        ],
        solutions: [
          'اكتشاف تلقائي لارتداء خوذات وسترات السلامة عبر كاميرات المراقبة.',
          'مطابقة دورية للصور واللقطات الزمنية مع منحنى تقدم المشروع S-Curve.',
          'توليد آلي وموثق لتقارير الإنجاز والأحوال الجوية اليومية.'
        ]
      }
    }
  };

  const currentLoc = localizedIndustries[selectedIndustry.id]?.[lang];
  const indName = currentLoc?.name || selectedIndustry.name;
  const indTagline = currentLoc?.tagline || selectedIndustry.tagline;
  const indDesc = currentLoc?.description || selectedIndustry.description;
  const indChallenges = currentLoc?.challenges || selectedIndustry.challenges;
  const indSolutions = currentLoc?.solutions || selectedIndustry.solutions;

  const selectLabel = {
    id: 'Dipilih',
    en: 'Active',
    ja: '選択中',
    ar: 'محدد'
  }[lang] || 'Dipilih';

  const viewLabel = {
    id: 'Detail',
    en: 'View',
    ja: '詳細',
    ar: 'تفاصيل'
  }[lang] || 'Detail';

  const consultSectorBtn = {
    id: 'Konsultasi Sektor Ini',
    en: 'Consult for This Sector',
    ja: 'この業界の課題を相談する',
    ar: 'استشارة فنية لهذا القطاع'
  }[lang] || 'Konsultasi Sektor Ini';

  const recommendedLabel = {
    id: 'Solusi yang Direkomendasikan:',
    en: 'Recommended Solutions:',
    ja: '推奨ソリューション:',
    ar: 'الحلول الموصى بها:'
  }[lang] || 'Solusi yang Direkomendasikan:';

  return (
    <section id="industri" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 12 Industry Bento Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const Icon = industryIcons[ind.id] || Building2;
            const isSelected = selectedIndustry.id === ind.id;
            const loc = localizedIndustries[ind.id]?.[lang];
            const displayName = loc?.name || ind.name;
            const displayMetric = loc?.metricDemo || ind.metricDemo;

            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg scale-[1.01]'
                    : 'bg-[#0A0A0D]/70 border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#86868B] px-1.5 py-0.5 rounded bg-white/[0.04]">
                      {ind.code}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                  </div>
                  <h3 className={`text-sm font-semibold font-sans ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                    {displayName}
                  </h3>
                  <div className="text-[10px] text-[#86868B] mt-0.5 truncate font-sans">
                    {displayMetric}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px]">
                  <span className={isSelected ? 'text-[#2997FF] font-medium' : 'text-[#6E6E73]'}>
                    {isSelected ? selectLabel : viewLabel}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#2997FF]' : 'text-[#6E6E73]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Industry Details Bento */}
        <div className="apple-card p-6 sm:p-10 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-[#2997FF] block">
                {selectedIndustry.code} • {indTagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white font-sans mt-0.5">
                {indName}
              </h3>
            </div>

            <button
              onClick={() => onOpenDemo(`Solusi Industri: ${indName}`)}
              className="apple-pill-btn inline-flex items-center px-5 py-2.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all cursor-pointer shadow-sm self-start sm:self-auto"
            >
              <span>{consultSectorBtn}</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <p className="text-sm text-[#A1A1A6] leading-relaxed mt-4 font-sans">
            {indDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="text-xs font-sans font-semibold text-[#FFBD2E] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> {t.challengesLabel}
              </div>
              <ul className="space-y-2 text-xs text-[#86868B] font-sans">
                {indChallenges.map((c, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#FFBD2E] font-bold">•</span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="text-xs font-sans font-semibold text-[#2997FF] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> {t.solutionsLabel}
              </div>
              <ul className="space-y-2 text-xs text-[#D2D2D7] font-sans">
                {indSolutions.map((s, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#2997FF] font-bold">•</span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[#86868B] font-sans">
              {recommendedLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedIndustry.matchingProducts.map((pId) => (
                <button
                  key={pId}
                  onClick={() => onSelectProduct(pId)}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-[#2997FF] border border-white/[0.08] hover:bg-white/[0.08] transition-colors cursor-pointer"
                >
                  {pId.toUpperCase()} ›
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
