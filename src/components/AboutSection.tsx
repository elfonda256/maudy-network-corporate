import React, { useState } from 'react';
import { Target, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface AboutProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ lang, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');

  const milestones = [
    {
      year: '2020',
      title: { 
        id: 'Ekspansi Jaringan Maritim & BUMN', 
        en: 'Maritime & Enterprise Breakthrough',
        ja: '海洋ネットワーク＆主要企業への展開',
        ar: 'التوسع في الشبكات البحرية والمؤسسات الكبرى'
      },
      desc: {
        id: 'Meraih kepercayaan pengadaan Core Network HA kapal tanker dan sistem otomatisasi telemetri monitoring Pertamina.',
        en: 'Awarded core network contracts for Pertamina International Shipping vessels and enterprise telemetry automation.',
        ja: 'プルタミナ・インターナショナル・シッピング船団向け高可用性コアネットワークおよび遠隔監視自動化を受注。',
        ar: 'الفوز بعقود توريد الشبكات عالية التوافر لسفن Pertamina الدولية وأنظمة الأتمتة والمراقبة عن بعد.'
      },
    },
    {
      year: '2022',
      title: { 
        id: 'Modernisasi Kampus & Pemodelan Energi', 
        en: 'National Academic & Energy Expansion',
        ja: '学術機関DX＆エネルギーシミュレーション',
        ar: 'تحديث شبكات الجامعات ومحاكاة الطاقة'
      },
      desc: {
        id: 'Audit kelaikan sistem IT Universitas Pertamina dan penyediaan software simulasi kelistrikan transmisi PowerFactory.',
        en: 'Completed campus-wide network assessment for Universitas Pertamina and DIgSILENT PowerFactory simulation for Pertamina Power Indonesia.',
        ja: 'プルタミナ大学の全学ITネットワーク適合性評価およびPertamina Power向けDIgSILENT PowerFactory電力解析シミュレーションを実施。',
        ar: 'إجراء تقييم شامل لشبكة جامعة بيرتامينا وتوريد برنامج PowerFactory لمحاكاة نقل الطاقة الكهربائية.'
      },
    },
    {
      year: '2023',
      title: { 
        id: 'Transformasi Digital Irigasi PUPR', 
        en: 'Strategic Government & Public Works',
        ja: '公共事業インフラ＆次世代無線通信',
        ar: 'التحول الرقمي للري والمشاريع الحكومية'
      },
      desc: {
        id: 'Rancang bangun DSS Irigasi berbasis geospasial Kementerian PUPR dan penggelaran 30 radio digital Hytera PoC nasional.',
        en: 'Architected the Rentang Irrigation Modernization Web GIS & DSS for Kementerian PUPR and delivered 30 Hytera PoC units across Indonesia.',
        ja: '公共事業・国民住宅省（PUPR）向けWeb GIS＆意思決定支援（DSS）灌漑管理システム構築、全国で30台のHytera PoC実証実験を実施。',
        ar: 'تصميم نظام دعم القرار الجغرافي (Web GIS & DSS) لوزارة الأشغال العامة وتوزيع 30 جهاز لاسلكي Hytera PoC.'
      },
    },
    {
      year: '2024',
      title: { 
        id: 'Pemeliharaan Menara BUMN & Molinar.id', 
        en: 'High-Rise Security & In-House IoT',
        ja: '高層ビル統合監視＆自社IoT Molinar.id',
        ar: 'صيانة أبراج المؤسسات الحكومية وحلول Molinar.id'
      },
      desc: {
        id: 'Pemeliharaan berkala 180 titik CCTV Menara Kementerian BUMN dan komersialisasi ekosistem telekontrol IoT Molinar.id.',
        en: 'Undertook ongoing surveillance maintenance for 180 Honeywell cameras across 22 floors of Kementerian BUMN Tower and expanded Molinar.id.',
        ja: '国営企業省タワー（22階建）全180台のHoneywell監視カメラの定期保守およびIoT遠隔監視エコシステムMolinar.idの展開。',
        ar: 'الصيانة الدورية لـ 180 كاميرا مراقبة في برج وزارة الشركات الحكومية (22 طابقاً) وتوسيع منظومة Molinar.id الذكية.'
      },
    },
  ];

  const t = {
    eyebrow: {
      id: 'TENTANG MAUDY NETWORK',
      en: 'ABOUT MAUDY NETWORK KOMUNIKASI',
      ja: '会社概要 • MAUDY NETWORK KOMUNIKASI',
      ar: 'عن شركة MAUDY NETWORK KOMUNIKASI'
    }[lang],
    headlinePrefix: {
      id: 'Dirancang untuk',
      en: 'Engineered for',
      ja: '確かな',
      ar: 'مصممة لتحقيق'
    }[lang],
    headlineHighlight1: {
      id: 'Keandalan',
      en: 'Reliability',
      ja: '信頼性',
      ar: 'أعلى موثوقية'
    }[lang],
    headlineMid: {
      id: ', Dilindungi oleh',
      en: ', Secured by',
      ja: 'を追求し、世界水準の',
      ar: '، ومحمية بـ'
    }[lang],
    headlineHighlight2: {
      id: 'Keahlian Global',
      en: 'Global Expertise',
      ja: '専門技術',
      ar: 'خبرات عالمية'
    }[lang],
    headlineSuffix: {
      id: '',
      en: '',
      ja: 'で守る',
      ar: ''
    }[lang],
    description: {
      id: 'Berpusat di Semarang, Jawa Tengah, Maudy Network Komunikasi (MNK) tumbuh menjadi penyedia solusi Teknologi Informasi dan Telekomunikasi terintegrasi yang berfokus pada infrastruktur strategis berskala nasional lintas darat dan laut.',
      en: 'Headquartered in Semarang, Central Java, Maudy Network Komunikasi (MNK) has grown into a premier integrated Information & Telecommunications solutions provider focused on nationwide strategic infrastructure across land and sea.',
      ja: '中部ジャワ州スマランに本社を置く Maudy Network Komunikasi（MNK）は、陸上および海洋全域にわたる国家戦略インフラに特化した、統合IT・電気通信ソリューションのリーディングカンパニーです。',
      ar: 'يقع المقر الرئيسي لشركة Maudy Network Komunikasi (MNK) في سيمارانج، جاوة الوسطى، وقد نمت لتصبح المزود الرائد لحلول تقنية المعلومات والاتصالات المتكاملة المكرسة للبنية التحتية الاستراتيجية براً وبحراً.'
    }[lang],
    hqTag: {
      id: 'KANTOR PUSAT OPERASIONAL',
      en: 'OPERATIONAL INTEGRATOR HQ',
      ja: 'オペレーション統合本部',
      ar: 'المقر التشغيلي الرئيسي'
    }[lang],
    hqLabel: { id: 'Kantor Pusat', en: 'Headquarters', ja: '本社拠点', ar: 'المقر الرئيسي' }[lang],
    hqVal: { id: 'Semarang, Jateng', en: 'Semarang, Central Java', ja: 'インドネシア・スマラン', ar: 'سيمارانج، جاوة الوسطى' }[lang],
    legalLabel: { id: 'Legalitas Usaha', en: 'Business License', ja: '事業許可番号', ar: 'الترخيص التجاري' }[lang],
    taxLabel: { id: 'Status Pajak', en: 'Tax Status', ja: '納税企業区分', ar: 'الوضع الضريبي' }[lang],
    taxVal: { id: 'PKP Terdaftar', en: 'Registered Taxpayer', ja: '正規課税登録企業 (PKP)', ar: 'دافع ضرائب مسجل' }[lang],
    beyondIt: {
      id: 'Bukan Sekadar Integrator Konvensional',
      en: 'Beyond Conventional IT Integration',
      ja: '従来のITインテグレーターの枠を超えて',
      ar: 'ما وراء تكامل تقنية المعلومات التقليدي'
    }[lang],
    beyondDesc: {
      id: 'Kami bukan sekadar integrator sistem IT konvensional. MNK memadukan keandalan arsitektur jaringan (Enterprise & Marine Network), ketangguhan keamanan siber, dan inovasi perangkat lunak cerdas (IoT & Big Data Analytics). Memastikan operasional klien kami berjalan tanpa henti di berbagai medan kritis.',
      en: 'We bridge the gap between industrial harsh-environment hardware and executive business decision-making. By combining enterprise network architecture, Fortinet NSE 7 cybersecurity rigor, and proprietary software innovation (Molinar.id & Big Data Analytics), we guarantee our clients uninterrupted operations across demanding terrains.',
      ja: '単なる従来のITインテグレーターではありません。MNKは、過酷な現場で耐えうるネットワーク基盤（陸上・洋上）、Fortinet NSE 7基準のサイバーセキュリティ、そして独自開発ソフトウェア（Molinar.id＆ビッグデータ解析）を融合し、過酷な運用環境下でもお客様の無停止ビジネスを保証します。',
      ar: 'نحن لسنا مجرد مزود تكامل تقليدي لنظم تقنية المعلومات. تجمع MNK بين متانة البنية التحتية للشبكات (الأرضية والبحرية)، وقوة الأمن السيبراني بمعايير Fortinet NSE 7، وابتكارات البرمجيات الذكية (Molinar.id وتحليلات البيانات الضخمة) لضمان استمرارية أعمال عملائنا في أقسى الظروف.'
    }[lang],
    tabs: {
      vision: { id: 'Visi Kami', en: 'Our Vision', ja: '経営ビジョン', ar: 'رؤيتنا' }[lang],
      mission: { id: 'Misi Kami', en: 'Our Mission', ja: '使命・ミッション', ar: 'رسالتنا' }[lang],
      values: { id: 'Nilai Utama', en: 'Core Values', ja: '行動指針・価値観', ar: 'قيمنا الجوهرية' }[lang]
    },
    visionText: {
      id: 'Menjadi mitra strategis terdepan di Indonesia dalam penyediaan infrastruktur jaringan dan solusi teknologi cerdas yang aman, andal, dan inovatif secara berkelanjutan.',
      en: 'To be the foremost strategic partner in Indonesia for providing network infrastructure and intelligent technology solutions that are sustainable, secure, reliable, and innovative.',
      ja: '安全・堅牢・革新的で持続可能なネットワークインフラとインテリジェント技術ソリューションを提供する、インドネシア屈指の戦略的パートナーを目指します。',
      ar: 'أن نكون الشريك الاستراتيجي الأول في إندونيسيا لتوفير البنية التحتية للشبكات والحلول التقنية الذكية الآمنة والموثوقة والمبتكرة والمستدامة.'
    }[lang],
    missionList: [
      {
        id: 'Memberikan solusi arsitektur jaringan end-to-end dengan standar reliabilitas internasional.',
        en: 'Deliver end-to-end network architecture adhering to international reliability standards.',
        ja: '国際的な信頼性基準に準拠したエンドツーエンドのネットワーク基盤を提供。',
        ar: 'تقديم حلول بنية تحتية متكاملة للشبكات وفق أعلى المعايير الدولية.'
      }[lang],
      {
        id: 'Mengintegrasikan hardware, software, dan analitik data untuk efisiensi operasional menyeluruh.',
        en: 'Integrate hardware, software, and predictive data analytics for maximum operational efficiency.',
        ja: 'ハードウェア、ソフトウェア、予兆データ分析を統合し、全社的な業務効率を最大化。',
        ar: 'دمج الأجهزة والبرمجيات وتحليلات البيانات الاستشرافية لتحقيق أعلى كفاءة تشغيلية.'
      }[lang],
      {
        id: 'Memastikan ketersediaan layanan tanpa jeda melalui sistem pemantauan (NOC) yang proaktif.',
        en: 'Ensure uninterrupted service uptime through proactive 24/7 Network Operation Center (NOC) surveillance.',
        ja: 'プロアクティブな24時間365日NOC監視体制により、無停止のサービス稼働率を保証。',
        ar: 'ضمان استمرارية الخدمة دون انقطاع عبر مركز المراقبة والتحكم (NOC) الاستباقي 24/7.'
      }[lang]
    ],
    valuesItems: [
      {
        title: { id: 'Keandalan', en: 'Reliability', ja: '信頼性 (Reliability)', ar: 'الموثوقية' }[lang],
        desc: { id: 'Ketersediaan jaringan 99.9% tanpa henti', en: '99.9% uptime SLA for critical operations', ja: 'ミッションクリティカル運用の99.9%稼働率SLA', ar: 'اتفاقية مستوى الخدمة بنسبة 99.9% للعمليات الحرجة' }[lang],
        colorClass: 'text-[#0071E3] dark:text-[#2997FF]'
      },
      {
        title: { id: 'Keamanan', en: 'Security', ja: 'セキュリティ (Security)', ar: 'الأمان السيبراني' }[lang],
        desc: { id: 'Protokol keamanan siber tingkat tinggi', en: 'Fortinet NSE 7 zero-trust cybersecurity', ja: 'Fortinet NSE 7基準のゼロトラスト高度サイバーセキュリティ', ar: 'أمن سيبراني متقدم بمعايير Fortinet NSE 7 وانعدام الثقة' }[lang],
        colorClass: 'text-emerald-600 dark:text-emerald-400'
      },
      {
        title: { id: 'Ketangkasan', en: 'Agility', ja: '適応力 (Agility)', ar: 'المرونة والتكيف' }[lang],
        desc: { id: 'Adaptif dari darat hingga lepas pantai', en: 'Adaptive from land data centers to offshore', ja: '陸上データセンターから洋上遠隔地まで柔軟に適応', ar: 'مرونة تامة للتكيف من مراكز البيانات الأرضية حتى المنصات البحرية' }[lang],
        colorClass: 'text-amber-600 dark:text-amber-400'
      }
    ],
    consultBtn: {
      id: 'Konsultasikan Kebutuhan Anda',
      en: 'Consult with our Chief Architect',
      ja: 'チーフアーキテクトに相談する',
      ar: 'استشارة كبير المهندسين المعماريين'
    }[lang],
    timelineTitle: {
      id: 'Rekam Jejak Keberhasilan Strategis',
      en: 'Track Record of Proven Execution',
      ja: '確かな実証実績とプロジェクトの軌跡',
      ar: 'سجل حافل بالإنجازات والمشاريع المثبتة'
    }[lang]
  };

  return (
    <section id="about" className="relative py-24 bg-transparent transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {t.headlinePrefix}{' '}
            <span className="text-gradient-brand">{t.headlineHighlight1}</span>
            {t.headlineMid}{' '}
            <span className="text-gradient-brand">{t.headlineHighlight2}</span>
            {t.headlineSuffix}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left: Official Maudy Network Brand Identity Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] p-8 sm:p-10 shadow-sm group flex flex-col justify-between min-h-[400px]">
              {/* Subtle ambient light corner glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Card Header Tag */}
              <div className="flex items-center justify-between z-10 border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-mono font-medium text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-wider">
                    {t.hqTag}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white">
                  EST. 2020
                </span>
              </div>

              {/* Center: High-Res Official Logo with subtle elevation */}
              <div className="my-auto py-8 flex flex-col items-center justify-center text-center z-10">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm transition-transform group-hover:scale-105 duration-300 mb-5 max-w-[280px] sm:max-w-[320px]">
                  <img
                    src="/logo-mnk.png"
                    alt="Maudy Network Komunikasi"
                    className="max-h-16 sm:max-h-20 w-auto object-contain mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-1">
                  PT Maudy Network Komunikasi
                </h3>
                <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] font-mono font-medium">
                  Enterprise ICT • Maritime VSAT • IoT Smart Infrastructure
                </p>
              </div>

              {/* Card Footer: Verified Credentials Pills */}
              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] z-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-center text-[10px] font-mono">
                  <div className="p-2.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <span className="block text-[#86868B]">{t.hqLabel}</span>
                    <span className="font-semibold text-[#1D1D1F] dark:text-white text-xs">{t.hqVal}</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <span className="block text-[#86868B]">{t.legalLabel}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-xs">NIB 1284000320491</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <span className="block text-[#86868B]">{t.taxLabel}</span>
                    <span className="font-semibold text-[#0071E3] dark:text-[#2997FF] text-xs">{t.taxVal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision, Mission & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider">
              {t.beyondIt}
            </div>
            <p className="text-[#1D1D1F] dark:text-slate-200 text-base leading-relaxed font-normal">
              {t.beyondDesc}
            </p>

            {/* Vision / Mission / Values Segmented Tab */}
            <div className="bg-white dark:bg-[#161617] rounded-3xl p-6 border border-black/[0.08] dark:border-white/[0.08] shadow-xs">
              <div className="inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] mb-5 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'vision'
                      ? 'bg-[#0071E3] text-white shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {t.tabs.vision}
                </button>
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'mission'
                      ? 'bg-[#0071E3] text-white shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {t.tabs.mission}
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === 'values'
                      ? 'bg-[#0071E3] text-white shadow-xs'
                      : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                  }`}
                >
                  {t.tabs.values}
                </button>
              </div>

              {activeTab === 'vision' && (
                <div className="animate-fadeIn">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-[#1D1D1F] dark:text-slate-200 leading-relaxed font-normal">
                      "{t.visionText}"
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'mission' && (
                <ul className="space-y-3 text-xs sm:text-sm text-[#1D1D1F] dark:text-slate-300 animate-fadeIn">
                  {t.missionList.map((mText, mIdx) => (
                    <li key={mIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF] mt-0.5 flex-shrink-0" />
                      <span>{mText}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'values' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                  {t.valuesItems.map((val, vIdx) => (
                    <div key={vIdx} className="bg-black/[0.02] dark:bg-white/[0.04] p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
                      <div className={`text-xs font-semibold ${val.colorClass} mb-1`}>{val.title}</div>
                      <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                        {val.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#0071E3] dark:text-[#2997FF] hover:underline cursor-pointer"
            >
              <span>{t.consultBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="pt-12 border-t border-black/[0.06] dark:border-white/[0.08]">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight">
              {t.timelineTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#161617] p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="text-2xl font-bold font-mono text-[#0071E3] dark:text-[#2997FF] mb-2 group-hover:scale-105 transition-transform origin-left">
                  {m.year}
                </div>
                <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-white mb-2 leading-snug">
                  {getLangText(m.title, lang)}
                </h4>
                <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal">
                  {getLangText(m.desc, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
