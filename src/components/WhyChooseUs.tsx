import React from 'react';
import {
  Award,
  Globe2,
  Anchor,
  Cpu,
  ShieldCheck,
  Headphones,
  Server,
  Building,
  CheckCircle,
} from 'lucide-react';
import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface WhyChooseProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseProps> = ({ lang }) => {
  const features = [
    {
      icon: Award,
      title: { 
        id: 'Arsitek Bersertifikasi Global', 
        en: 'Certified Global Expertise',
        ja: '世界標準の認定エンジニア陣',
        ar: 'مهندسون معتمدون عالمياً'
      },
      badge: 'Cisco CCNP • Fortinet NSE 7',
      desc: {
        id: 'Dipimpin langsung arsitek jaringan elite dunia: Cisco CCNP, Fortinet NSE 7 Architect, MikroTik MTCINE, dan Ruijie Specialist.',
        en: 'Led by elite certified engineers (CCNP, NSE 7 Architect, MTCINE, Ruijie Specialist). We design enterprise networks with world-class security baselines.',
        ja: 'Cisco CCNP、Fortinet NSE 7、MikroTik MTCINE、Ruijieスペシャリスト等の世界資格を保有する精鋭エンジニアが設計・主導。',
        ar: 'بقيادة نخبة من المهندسين المعتمدين دولياً (Cisco CCNP و Fortinet NSE 7 و MTCINE)، مع الالتزام بأعلى معايير الأمان العالمية.'
      },
      iconColor: 'text-[#0050AE] dark:text-cyan-400',
    },
    {
      icon: Globe2,
      title: { 
        id: 'Teruji pada Medan Berisiko Tinggi', 
        en: 'Proven in High-Stakes Arenas',
        ja: '重要・過酷環境での実証運用実績',
        ar: 'سجل مثبت في البيئات الحرجة'
      },
      badge: 'Zero-Tolerance Downtime',
      desc: {
        id: 'Rekam jejak panjang menangani proyek strategis: instalasi VSAT kapal Pertamina, CCTV Kementerian BUMN, hingga Modernisasi Irigasi PUPR.',
        en: 'Deep track record managing critical operations: Pertamina International Shipping vessels, Kementerian BUMN 22-floor CCTV, to national PUPR irrigation.',
        ja: 'プルタミナ国際タンカー船団の海洋VSAT、国営企業省タワー22階層のCCTV統合、公共事業省（PUPR）の全国灌漑DX等の重要インフラで実証。',
        ar: 'سجل طويل في إدارة العمليات الحيوية: شبكات سفن Pertamina الدولية، كاميرات وزارة BUMN، وتحديث منظومة الري الوطنية.'
      },
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Anchor,
      title: { 
        id: 'Spesialis Jaringan Maritim & Lepas Pantai', 
        en: 'Marine Network Specialist',
        ja: '海洋・オフショアネットワーク専門',
        ar: 'خبراء الشبكات البحرية والمنصات'
      },
      badge: 'Oceanic VSAT & QoS Shaping',
      desc: {
        id: 'Menghadirkan komunikasi satelit yang stabil di tengah laut lepas, mengoptimalkan bandwidth terbatas 512Kbps untuk navigasi dan 30+ awak kapal.',
        en: 'Engineering satellite connectivity that operates reliably in mid-ocean, optimizing restricted 512Kbps bandwidth for 30+ crew and navigation telemetry.',
        ja: '外洋の通信環境を最適化。帯域制限（512Kbps〜）下でも優先制御QoSにより、重要航行テレメトリと船員30名以上の通信を両立。',
        ar: 'تأمين اتصالات فضائية فائقة الموثوقية في عرض البحر، مع تحسين نطاق 512Kbps الترددي لخدمة الملاحة وأكثر من 30 من أفراد الطاقم.'
      },
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      icon: Cpu,
      title: { 
        id: 'Inovasi Teknologi Mandiri', 
        en: 'In-House Proprietary Innovation',
        ja: '自社開発の独自ソフトウェア特許',
        ar: 'ابتكارات برمجية ذاتية الملكية'
      },
      badge: 'Molinar.id • AP Portal ERP',
      desc: {
        id: 'MNK secara mandiri mengembangkan platform buatan sendiri: Molinar.id (Sistem Telemetri & IoT) dan AP Portal ERP berstandar korporasi.',
        en: 'We engineer our own proprietary technologies such as Molinar.id (industrial IoT & telemetry), AP Portal ERP, and automated PIS_BOT alert systems.',
        ja: '産業向けIoT＆遠隔テレメトリシステム「Molinar.id」、基幹「AP Portal ERP」、ボット自動監視システムを自社開発。',
        ar: 'نقوم بتطوير منصاتنا البرمجية الخاصة ذاتياً، مثل Molinar.id لأنظمة IoT والتحكم عن بعد، وبوابة AP Portal ERP المؤسسية.'
      },
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: ShieldCheck,
      title: { 
        id: 'Keamanan Siber Tingkat Lanjut', 
        en: 'Fortinet NSE 7 Cyber Security',
        ja: 'Fortinet NSE 7 高度セキュリティ',
        ar: 'أمن سيبراني بمعايير Fortinet NSE 7'
      },
      badge: 'Zero-Trust Architecture',
      desc: {
        id: 'Pertahanan perimeter komprehensif, konfigurasi firewall generasi baru, pencegahan intrusi mendalam, dan segmentasi aman dari serangan siber.',
        en: 'Comprehensive perimeter defense, next-generation firewall configurations, deep intrusion prevention, and micro-segmentation against persistent threats.',
        ja: '包括的なペリメーター防御、次世代ファイアウォール（NGFW）構成、ディープ侵入検知（IPS）、ゼロトラスト・マイクロセグメンテーション。',
        ar: 'دفاع شامل عن المحيط، جدران حماية من الجيل القادم، كشف الاختراقات العميق، وتجزئة دقيقة للشبكة ضد التهديدات المتطورة.'
      },
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: Headphones,
      title: { 
        id: 'Dukungan Teknis NOC 24/7', 
        en: '24/7 Proactive NOC Support',
        ja: '24時間365日 NOC監視・即応保守',
        ar: 'دعم فني استباقي من مركز NOC 24/7'
      },
      badge: 'Instant Bot Alerting',
      desc: {
        id: 'Layanan terpadu mulai dari assessment, deployment fisik, hingga after-sales berupa pemantauan 24/7 (NOC) dan SLA berkala setiap bulan.',
        en: 'End-to-end management from physical survey and deployment to round-the-clock surveillance, sub-minute anomaly alerts, and SLA monthly audits.',
        ja: '現地サーベイ、機器導入から24時間体制のNOC監視、1分以内の異常検知ボット通報、月次SLA監査までワンストップ提供。',
        ar: 'إدارة متكاملة تبدأ من المعاينة الميدانية والتركيب حتى المراقبة على مدار الساعة (NOC)، والتنبيهات الفورية، وتقارير SLA الدورية.'
      },
      iconColor: 'text-[#FFB800] dark:text-amber-400',
    },
    {
      icon: Server,
      title: { 
        id: 'Infrastruktur Redundan & HA', 
        en: 'Dual-Provider High Availability',
        ja: '二重化冗長構成＆高可用性基盤',
        ar: 'بنية تحتية متكررة وعالية التوافر'
      },
      badge: '99.9% Uptime SLA',
      desc: {
        id: 'Arsitektur failover master & backup aktif untuk mengeliminasi titik kegagalan tunggal pada server kritis, siaran KTT, dan pusat data.',
        en: 'Master and backup failover architecture designed to eliminate single points of failure across critical servers, corporate events, and data centers.',
        ja: 'マスター／バックアップのアクティブフェイルオーバー設計により、重要サーバーやデータセンターの単一障害点（SPOF）を完全排除。',
        ar: 'بنية تحويل احتياطي نشطة تقضي تماماً على نقاط الفشل الفردية في الخوادم الحيوية، البث المباشر للقمم، ومراكز البيانات.'
      },
      iconColor: 'text-[#0071E3] dark:text-[#2997FF]',
    },
    {
      icon: Building,
      title: { 
        id: 'Dipercaya BUMN & Kementerian', 
        en: 'Trusted by Government & SOEs',
        ja: '国営企業・政府機関からの高い信頼',
        ar: 'موثوق من الوزارات والشركات الحكومية'
      },
      badge: 'Audited & Compliant',
      desc: {
        id: 'Kepatuhan tata kelola pengadaan resmi BUMN, kepatuhan K3/HSE, serta pemenuhan kontrak kerja resmi dari institusi pemerintah dan BUMN.',
        en: 'Official procurement compliance with rigorous HSE standards, validated contract deliverables, and sustained relationships with strategic SOEs & Ministries.',
        ja: '国営企業（BUMN）の公式調達基準、厳格な安全衛生（HSE）基準、納入検収実績を満たす信頼のガバナンス体制。',
        ar: 'امتثال تام لمعايير المشتريات الحكومية، متطلبات الصحة والسلامة المهنية (HSE)، والوفاء بالعقود الرسمية مع كبرى الهيئات.'
      },
      iconColor: 'text-teal-600 dark:text-teal-400',
    },
  ];

  const t = {
    eyebrow: {
      id: 'KEUNGGULAN STRATEGIS MNK',
      en: 'OUR COMPETITIVE ADVANTAGE',
      ja: 'MNKの競争優位性・選ばれる理由',
      ar: 'ميزتنا التنافسية الاستراتيجية'
    }[lang],
    titlePrefix: {
      id: 'Mengapa Institusi Pemerintah & Korporasi Memilih',
      en: 'Why Global Enterprises & Government Trust',
      ja: '大手企業や官公庁が選ぶ',
      ar: 'لماذا تثق المؤسسات الحكومية والشركات في'
    }[lang],
    titleHighlight: 'MNK',
    desc: {
      id: 'Memadukan sertifikasi insinyur tingkat dunia, inovasi piranti lunak mandiri, dan ketangguhan di berbagai medan infrastruktur nasional.',
      en: 'We combine elite tier certifications, in-house software patents, and real-world resilience across high-stakes national infrastructure.',
      ja: '世界水準のエンジニア認定資格、自社開発ソフトウェア特許、そして重要国家インフラでの過酷な実証稼働実績を融合。',
      ar: 'نجمع بين شهادات هندسية عالمية، وابتكارات برمجية ذاتية، وسجل تشغيلي مثبت في البنى التحتية الوطنية الحيوية.'
    }[lang],
    slaTag: {
      id: 'STANDAR KORPORASI // TERUJI',
      en: 'ENTERPRISE READY // SLA VERIFIED',
      ja: 'エンタープライズ品質 // SLA検証済',
      ar: 'جاهزية مؤسسية // مستوى خدمة معتمد'
    }[lang]
  };

  return (
    <section className="py-24 bg-transparent transition-colors relative overflow-hidden">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {t.titlePrefix} <span className="text-gradient-brand">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#161617] p-6 rounded-3xl flex flex-col justify-between border border-black/[0.08] dark:border-white/[0.08] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Tech Corner Accent */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-[#86868B] group-hover:text-[#0071E3] transition-colors">
                  0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-[#0071E3] dark:text-[#2997FF] group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#1D1D1F] dark:text-white border border-black/[0.06] dark:border-white/[0.08] mb-2.5">
                      {feat.badge}
                    </span>
                    <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-white mb-2 leading-snug">
                      {getLangText(feat.title, lang)}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal">
                    {getLangText(feat.desc, lang)}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center space-x-1.5 text-[11px] font-mono text-[#86868B]">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[10px] tracking-wide uppercase">
                    {t.slaTag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
