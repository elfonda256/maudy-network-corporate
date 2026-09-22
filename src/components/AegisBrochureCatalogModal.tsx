import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  CheckCircle2, 
  Send, 
  Search, 
  BookOpen, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { PRODUCTS } from '../data/aegisData';
import type { Language } from '../i18n/translations';
import { getAegisProductLocalized } from '../i18n/aegisTranslations';

interface AegisBrochureCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo?: (productName?: string) => void;
  lang?: Language;
}

export const AegisBrochureCatalogModal: React.FC<AegisBrochureCatalogModalProps> = ({
  isOpen,
  onClose,
  onOpenDemo,
  lang = 'id'
}) => {
  const [activeCatalogTab, setActiveCatalogTab] = useState<'all' | 'maritime' | 'vision' | 'enterprise' | 'cyber'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppInquiry = (catalogTitle: string) => {
    let msg = `Halo PT Maudy Network Nusantara, saya tertarik dengan Katalog Spesifikasi: "${catalogTitle}". Mohon kirimkan dokumen RFP dan penawaran teknis resmi.`;
    if (lang === 'en') {
      msg = `Hello PT Maudy Network Nusantara, I am interested in your Technical Specifications Catalog: "${catalogTitle}". Please send the official RFP document and commercial quotation.`;
    } else if (lang === 'ja') {
      msg = `PT Maudy Network Nusantara 営業窓口様、技術仕様カタログ「${catalogTitle}」に関心がございます。公式RFPドキュメントおよびお見積書をご送付いただけますと幸いです。`;
    } else if (lang === 'ar') {
      msg = `مرحباً PT Maudy Network Nusantara، نحن مهتمون بكتالوج المواصفات الفنية: "${catalogTitle}". يرجى إرسال وثيقة طلب تقديم العروض (RFP) وعرض الأسعار الرسمي.`;
    }
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/6285727487507?text=${text}`, '_blank');
  };

  // Localized Strings
  const t = {
    officialDoc: {
      id: 'E-Katalog & Brosur Resmi Spesifikasi Teknis',
      en: 'Official E-Catalog & Technical Specifications',
      ja: '公式技術仕様書＆Eカタログ',
      ar: 'الكتالوج الإلكتروني والمواصفات الفنية الرسمية'
    }[lang],
    edition: {
      id: 'Edisi 2026/Q4',
      en: 'Edition 2026/Q4',
      ja: '2026年第4四半期版',
      ar: 'إصدار 2026/الربع الرابع'
    }[lang],
    downloadPdf: {
      id: 'Unduh PDF Resmi',
      en: 'Download Official PDF',
      ja: '公式PDFをダウンロード',
      ar: 'تحميل PDF الرسمي'
    }[lang],
    print: {
      id: 'Cetak / Print',
      en: 'Print / Save PDF',
      ja: '印刷 / PDF保存',
      ar: 'طباعة / حفظ PDF'
    }[lang],
    tabs: {
      all: { id: 'Semua Katalog (12 Solusi)', en: 'All Catalogs (12 Solutions)', ja: '全カタログ (12ソリューション)', ar: 'جميع الكتالوجات (12 حلاً)' }[lang],
      maritime: { id: '🚢 Maritim & VSAT', en: '🚢 Maritime & VSAT', ja: '🚢 海事＆VSAT衛星', ar: '🚢 الملاحة البحرية والأقمار الصناعية' }[lang],
      vision: { id: '👁️ XTUR CCTV AI', en: '👁️ XTUR CCTV AI', ja: '👁️ XTUR AIカメラ監視', ar: '👁️ مراقبة XTUR بالكاميرات الذكية' }[lang],
      enterprise: { id: '🏢 Dokumen & Procurement', en: '🏢 Document & Procurement', ja: '🏢 文書解析＆調達AI', ar: '🏢 وثائق ذكية ومشتريات' }[lang],
      cyber: { id: '🛡️ Sovereign Cyber AI', en: '🛡️ Sovereign Cyber AI', ja: '🛡️ ソブリン・サイバーAI', ar: '🛡️ الأمن السيبراني السيادي' }[lang],
    },
    searchPlaceholder: {
      id: 'Cari spesifikasi produk...',
      en: 'Search product specifications...',
      ja: '製品仕様を検索...',
      ar: 'البحث في مواصفات المنتجات...'
    }[lang],
    docDossier: {
      id: 'DOKUMEN SPESIFIKASI TEKNIS RESMI',
      en: 'OFFICIAL TECHNICAL SPECIFICATION DOSSIER',
      ja: '公式技術仕様書・認定文書',
      ar: 'وثيقة المواصفات الفنية الرسمية'
    }[lang],
    mainTitle: {
      id: 'Katalog Portofolio & Brosur Solusi Aegis AI Suite',
      en: 'Aegis AI Suite Portfolio Catalog & Technical Brochure',
      ja: 'Aegis Enterprise AI Suite 製品ポートフォリオ＆技術カタログ',
      ar: 'كتالوج محفظة وبروشور حلول Aegis AI Suite'
    }[lang],
    mainDesc: {
      id: 'PT Maudy Network Nusantara — Penyedia Resmi Infrastruktur Telekomunikasi Kritis, Satelit Maritim, CCTV Edge AI XTUR, dan Sovereign Artificial Intelligence.',
      en: 'PT Maudy Network Nusantara — Official Provider of Critical Telecom Infrastructure, Maritime Satellite, Edge AI XTUR Surveillance, and Sovereign Enterprise AI.',
      ja: 'PT Maudy Network Nusantara — 重要通信インフラ、海洋衛星、エッジAI XTUR監視、ソブリンAIソリューションの公式プロバイダー。',
      ar: 'PT Maudy Network Nusantara — المزود الرسمي للبنية التحتية للاتصالات الحيوية، والأقمار الصناعية البحرية، ومراقبة XTUR بالذكاء الاصطناعي، والذكاء الاصطناعي السيادي.'
    }[lang],
    isoBadge: 'ISO 9001:2015 • ISO 27001:2022',
    kominfoBadge: {
      id: 'Izin Jastel Kominfo RI',
      en: 'Indonesian Ministry of ICT License',
      ja: 'インドネシア通信情報省通信事業認可',
      ar: 'مرخص من وزارة الاتصالات الإندونيسية'
    }[lang],
    hotline: 'Hotline NOC 24/7: +62 857-2748-7507',
    pdfBannerTitle: {
      id: 'Dokumen Master PDF Resmi Tersedia',
      en: 'Official Master PDF Dossier Available',
      ja: '公式マスターPDFドキュメント入手可能',
      ar: 'ملف PDF الرئيسي الرسمي متاح للتحميل'
    }[lang],
    pdfBannerTag: {
      id: '4 HALAMAN A4',
      en: '4 PAGES A4',
      ja: 'A4判 4ページ',
      ar: '4 صفحات A4'
    }[lang],
    pdfBannerDesc: {
      id: 'Spesifikasi 12 produk AI, maritim satelit, CCTV XTUR, tata kelola keamanan ISO & formulir procurement.',
      en: 'Specifications of 12 AI products, maritime satellite, XTUR CCTV, ISO security governance & procurement matrix.',
      ja: '12のAI製品仕様、海洋衛星、XTURカメラ、ISOセキュリティ基準、調達マトリクスを網羅。',
      ar: 'مواصفات 12 منتجاً للذكاء الاصطناعي، الأقمار الصناعية البحرية، كاميرات XTUR، حوكمة ISO ومصفوفة المشتريات.'
    }[lang],
    requestQuote: {
      id: 'Minta Penawaran B2B',
      en: 'Request B2B Quote',
      ja: '法人向け見積を依頼',
      ar: 'طلب تسعير B2B'
    }[lang],
    keySpecs: {
      id: 'Spesifikasi Utama:',
      en: 'Key Technical Specifications:',
      ja: '主要技術仕様:',
      ar: 'المواصفات الفنية الرئيسية:'
    }[lang],
    demoBtn: {
      id: 'Demo',
      en: 'Demo',
      ja: 'デモ',
      ar: 'عرض تجريبي'
    }[lang],
    matrixTitle: {
      id: 'Matriks Skema Implementasi & Pengadaan B2B',
      en: 'B2B Procurement & Deployment Scheme Matrix',
      ja: 'B2B導入・調達スキーム比較マトリクス',
      ar: 'مصفوفة خطط التنفيذ والشراء للشركات (B2B)'
    }[lang],
    matrixDesc: {
      id: 'Pilihan fleksibel skema pengadaan untuk korporasi, BUMN, perkapalan maritim, dan instansi kementerian:',
      en: 'Flexible procurement options tailored for corporations, state enterprises, maritime operators, and ministries:',
      ja: '民間企業、国営企業（BUMN）、海洋海運事業者、官公庁向けの柔軟な調達オプション：',
      ar: 'خيارات شراء مرنة مخصصة للشركات، الهيئات الحكومية، أساطيل الملاحة البحرية، والوزارات:'
    }[lang],
    matrixHeaders: {
      scheme: { id: 'Skema Pengadaan', en: 'Procurement Model', ja: '調達モデル', ar: 'نموذج الشراء' }[lang],
      hw: { id: 'Infrastruktur Hardware', en: 'Hardware Infrastructure', ja: 'ハードウェア機器', ar: 'البنية التحتية للأجهزة' }[lang],
      sw: { id: 'Lisensi Software', en: 'Software License', ja: 'ソフトウェアライセンス', ar: 'ترخيص البرمجيات' }[lang],
      sla: { id: 'Dukungan SLA & NOC', en: 'SLA & 24/7 NOC Support', ja: 'SLA保証・24/7 NOC監視', ar: 'مستوى الخدمة SLA والدعم 24/7' }[lang],
      fit: { id: 'Cocok Untuk', en: 'Target Fit', ja: '主な導入対象', ar: 'مناسب لـ' }[lang],
    },
    matrixRows: [
      {
        scheme: { id: '1. Proof of Concept (PoC)', en: '1. Proof of Concept (PoC)', ja: '1. 実証実験 (PoC)', ar: '1. إثبات المفهوم (PoC)' }[lang],
        hw: { id: 'Perangkat Uji Coba Disediakan', en: 'Trial Hardware Furnished', ja: '検証用機器一式を無償提供', ar: 'توفير أجهزة تجريبية كاملة' }[lang],
        sw: { id: 'Full Feature 14-30 Hari', en: 'Full Feature 14-30 Days', ja: '全機能利用可能（14〜30日間）', ar: 'كامل الميزات لمدة 14-30 يوماً' }[lang],
        sla: { id: 'Dedicated Technical Engineer', en: 'Dedicated Solutions Engineer', ja: '専任ソリューションエンジニア担当', ar: 'مهندس حلول تقني مخصص' }[lang],
        fit: { id: 'Evaluasi awal kelayakan proyek', en: 'Initial feasibility & KPI validation', ja: '事業妥当性・KPIの初期検証フェーズ', ar: 'تقييم الجدوى والتحقق المبدئي من المشروع' }[lang],
      },
      {
        scheme: { id: '2. CAPEX (Perpetual License)', en: '2. CAPEX (Perpetual License)', ja: '2. CAPEX (買い取り永続ライセンス)', ar: '2. نفقات رأسمالية CAPEX (ترخيص دائم)' }[lang],
        hw: { id: 'Hak Milik Penuh Client', en: 'Full Client Asset Ownership', ja: 'クライアント資産として完全保有', ar: 'ملكية كاملة للأجهزة من قبل العميل' }[lang],
        sw: { id: 'One-time Perpetual License', en: 'One-time Perpetual License', ja: '買い取り型永続ライセンス', ar: 'ترخيص دائم لمرة واحدة' }[lang],
        sla: { id: 'Garansi 1-3 Tahun + Onsite Care', en: '1-3 Year Warranty + Onsite Care', ja: '1〜3年間メーカー保証＋オンサイト保守', ar: 'ضمان 1-3 سنوات + صيانة ميدانية' }[lang],
        fit: { id: 'BUMN, Militer & Tender APBN', en: 'State Enterprises, Defense & Government Tenders', ja: '国営企業、防衛関連、官公庁入札案件', ar: 'الشركات الوطنية، الدفاع، والمناقصات الحكومية' }[lang],
      },
      {
        scheme: { id: '3. OPEX / Managed Service', en: '3. OPEX / Managed Service', ja: '3. OPEX / マネージドサービス', ar: '3. نفقات تشغيلية OPEX / خدمة مدارة' }[lang],
        hw: { id: 'Sewa Perangkat Terpadu', en: 'Integrated Hardware Rental', ja: '機器一式の統合サブスクリプションレンタル', ar: 'تأجير متكامل للأجهزة' }[lang],
        sw: { id: 'Subscription Bulanan/Tahunan', en: 'Monthly / Annual Subscription', ja: '月額 / 年額サブスクリプション', ar: 'اشتراك شهري أو سنوي' }[lang],
        sla: { id: 'SLA 99.98% 24/7 Replacement', en: '99.98% SLA + 24/7 Rapid Replacement', ja: '99.98% SLA稼働率保証・24時間交換対応', ar: 'اتفاقية 99.98% SLA واستبدال فوري 24/7' }[lang],
        fit: { id: 'Armada Kapal Laut & Swasta', en: 'Commercial Maritime Fleets & Private Enterprise', ja: '海運フリート、商船、民間企業', ar: 'أساطيل الملاحة التجارية والشركات الخاصة' }[lang],
      }
    ],
    footerCtaTitle: {
      id: 'Ingin Mendapatkan Proposal Penawaran atau Menjadwalkan PoC?',
      en: 'Looking for a Formal Commercial Proposal or PoC Trial?',
      ja: '公式提案書のお取り寄せや実証実験（PoC）をご希望ですか？',
      ar: 'هل ترغب في الحصول على عرض رسمي أو جدولة تجربة إثبات المفهوم (PoC)؟'
    }[lang],
    footerCtaDesc: {
      id: 'Hubungi langsung Technical Director & Commercial Desk PT Maudy Network Nusantara.',
      en: 'Connect directly with the Technical Director & Commercial Desk of PT Maudy Network Nusantara.',
      ja: 'PT Maudy Network Nusantara 技術統轄部および営業窓口へ直接お問い合わせください。',
      ar: 'تواصل مباشرة مع المدير الفني والمكتب التجاري لشركة PT Maudy Network Nusantara.'
    }[lang],
    chatWa: {
      id: 'Chat WhatsApp',
      en: 'WhatsApp Inquire',
      ja: 'WhatsAppで問い合わせ',
      ar: 'مراسلة عبر واتساب'
    }[lang],
    copyright: {
      id: 'Hak Cipta © 2026 PT. Maudy Network Komunikasi (Maudy Network Nusantara). Seluruh Hak Dilindungi. Dokumen ini disiapkan untuk presentasi komersial resmi.',
      en: 'Copyright © 2026 PT. Maudy Network Komunikasi (Maudy Network Nusantara). All Rights Reserved. Prepared for official enterprise review.',
      ja: '著作権 © 2026 PT. Maudy Network Komunikasi (Maudy Network Nusantara). 無断転載を禁じます。公式商談資料として作成されています。',
      ar: 'حقوق النشر © 2026 PT. Maudy Network Komunikasi (Maudy Network Nusantara). جميع الحقوق محفوظة. مُعد للعروض التجارية الرسمية.'
    }[lang]
  };

  // Complete 12-Product Enterprise Catalog Sections with 4-Language support
  const catalogSections = [
    {
      id: 'maritime',
      code: 'CAT-MARITIME-01',
      title: {
        id: 'Katalog Solusi Jaringan Maritim & Satelit Kapal',
        en: 'Maritime Satellite & Shipboard Network Catalog',
        ja: '海洋衛星通信＆船舶ネットワークカタログ',
        ar: 'كتالوج شبكات الأقمار الصناعية البحرية والسفن'
      }[lang],
      subtitle: {
        id: 'Aegis Maritime Intelligence, Hybrid VSAT / Starlink & IMO Compliance',
        en: 'Aegis Maritime Intelligence, Hybrid VSAT / Starlink & IMO Compliance',
        ja: 'Aegis Maritime Intelligence、ハイブリッドVSAT / Starlink ＆ IMO規制準拠',
        ar: 'Aegis Maritime Intelligence، حلول VSAT / Starlink الهجينة والامتثال للـ IMO'
      }[lang],
      badge: {
        id: 'FLAGSHIP SECTOR',
        en: 'FLAGSHIP SECTOR',
        ja: '旗艦セクター (FLAGSHIP)',
        ar: 'القطاع الرائد'
      }[lang],
      color: '#0071E3',
      products: PRODUCTS.filter(p => p.id === 'aegis-maritime' || p.id === 'fleetos-ai' || p.id === 'maintenance-ai'),
      specs: [
        { 
          label: { id: 'Konektivitas Satelit', en: 'Satellite Connectivity', ja: '衛星接続構成', ar: 'الاتصال الفضائي' }[lang],
          value: { id: 'Hybrid Ku/Ka-Band GEO + LEO Starlink Maritime with sub-second failover', en: 'Hybrid Ku/Ka-Band GEO + LEO Starlink Maritime with sub-second failover', ja: 'ハイブリッドKu/Kaバンド静止衛星 ＋ 低軌道Starlink Maritime（秒未満切替）', ar: 'Ku/Ka-Band GEO هجين + Starlink Maritime مع تحويل فوري بأقل من ثانية' }[lang]
        },
        { 
          label: { id: 'Kepatuhan Regulasi', en: 'Regulatory Compliance', ja: '国際海事規制準拠', ar: 'الامتثال التنظيمي' }[lang],
          value: { id: 'IMO Resolution MSC.428(98), IACS UR E26/E27, SOLAS & MARPOL Ready', en: 'IMO Resolution MSC.428(98), IACS UR E26/E27, SOLAS & MARPOL Ready', ja: 'IMO決議MSC.428(98)、船級協会IACS UR E26/E27、SOLAS・MARPOL完全準拠', ar: 'IMO MSC.428(98) و IACS UR E26/E27 ومعايير SOLAS و MARPOL جاهزة' }[lang]
        },
        { 
          label: { id: 'Offline Autonomy', en: 'Offline Autonomy', ja: 'オフライン自律運用', ar: 'الاستقلالية في وضع عدم الاتصال' }[lang],
          value: { id: '100% Private Onboard Server (tetap beroperasi penuh saat kapal hilang sinyal)', en: '100% Private Onboard Server (fully operational during open-sea outages)', ja: '完全船内専用サーバー搭載（外洋で通信途絶時もAI機能が100%継続稼働）', ar: 'خادم مدمج 100% داخل السفينة (يعمل بكامل كفاءته أثناء انقطاع الاتصال)' }[lang]
        },
        { 
          label: { id: 'Jangkauan Operasi', en: 'Operational Coverage', ja: 'サービス運用海域', ar: 'نطاق التغطية والعمليات' }[lang],
          value: { id: 'Perairan Selat Malaka, ALKI I/II/III, Laut Natuna Utara, dan Samudera Pasifik', en: 'Malacca Strait, ALKI I/II/III sea-lanes, North Natuna Sea, and Pacific Ocean', ja: 'マラッカ海峡、インドネシア群島航路（ALKI I/II/III）、北ナトゥナ海、太平洋全域', ar: 'مضيق ملقا، الممرات الإندونيسية ALKI I/II/III، بحر ناتونا الشمالي، والمحيط الهادئ' }[lang]
        }
      ]
    },
    {
      id: 'vision',
      code: 'CAT-VISION-02',
      title: {
        id: 'Katalog CCTV Cerdas & Pengawasan Industri XTUR',
        en: 'Intelligent CCTV & XTUR Industrial Surveillance Catalog',
        ja: '高機能AI監視カメラ＆XTUR産業モニタリングカタログ',
        ar: 'كتالوج كاميرات المراقبة الذكية ونظام XTUR الصناعي'
      }[lang],
      subtitle: {
        id: 'Edge AI Vision, ANPR Plat Nomor 99.2% & Dual Thermal Sensing',
        en: 'Edge AI Vision, ANPR Plate Recognition 99.2% & Dual Thermal Sensing',
        ja: 'エッジAIビジョン、ナンバープレート認識率99.2％ ＆ デュアル熱画像検知',
        ar: 'الرؤية الحاسوبية Edge AI، التعرف على لوحات المركبات 99.2%، والاستشعار الحراري المزدوج'
      }[lang],
      badge: {
        id: 'INDUSTRIAL SURVEILLANCE',
        en: 'INDUSTRIAL SURVEILLANCE',
        ja: '産業向け重要監視',
        ar: 'المراقبة الصناعية المتقدمة'
      }[lang],
      color: '#2997FF',
      products: PRODUCTS.filter(p => p.id === 'factory-twin-ai' || p.id === 'construct-ai' || p.id === 'smart-waste-ai'),
      specs: [
        { 
          label: { id: 'Akurasi ANPR/E-TLE', en: 'ANPR / Plate Accuracy', ja: 'ナンバー認識(ANPR)精度', ar: 'دقة التعرف على اللوحات (ANPR)' }[lang],
          value: { id: '99.2% pada kecepatan kendaraan hingga 120 km/jam siang dan malam', en: '99.2% at vehicle speeds up to 120 km/h under day & night conditions', ja: '昼夜問わず時速120kmの高速走行時でも99.2％の高い検知精度', ar: '99.2% عند سرعة مركبات تصل إلى 120 كم/ساعة ليلاً ونهاراً' }[lang]
        },
        { 
          label: { id: 'Deteksi Intrusi', en: 'Intrusion Detection', ja: '侵入検知レスポンス', ar: 'كشف التسلل والاختراق' }[lang],
          value: { id: 'Perimeter Virtual Fence < 150ms real-time audio/visual alert trigger', en: 'Virtual perimeter fence with < 150ms real-time audio/visual alert trigger', ja: '仮想境界フェンス検知から150ミリ秒未満で警報音・視覚アラートをリアルタイム発令', ar: 'سياج أمني افتراضي مع إطلاق تنبيهات صوتية ومرئية خلال أقل من 150 مللي ثانية' }[lang]
        },
        { 
          label: { id: 'Sensor Termal', en: 'Thermal Sensing', ja: '熱画像センサー', ar: 'المستشعر الحراري' }[lang],
          value: { id: 'Dual-Spectrum thermal camera (-20°C s/d 550°C) deteksi dini titik panas api', en: 'Dual-spectrum thermal optics (-20°C to 550°C) for early hotspot/fire detection', ja: 'デュアルスペクトル熱画像カメラ（-20℃〜550℃）による設備異常発熱の早期火災検知', ar: 'كاميرا حرارية مزدوجة الطيف (-20 إلى 550 مئوية) لكشف الحرارة المبكر' }[lang]
        },
        { 
          label: { id: 'Protokol Integrasi', en: 'Integration Protocols', ja: '通信・統合プロトコル', ar: 'بروتوكولات التكامل' }[lang],
          value: { id: 'ONVIF Profile S/G/T, RTSP, MQTT, Webhook REST API ke VMS/ERP eksisting', en: 'ONVIF Profile S/G/T, RTSP, MQTT, Webhook REST API into existing VMS/ERP', ja: 'ONVIF Profile S/G/T、RTSP、MQTT、Webhook REST APIによる既存VMS/ERPへのシームレス連携', ar: 'ONVIF Profile S/G/T و RTSP و MQTT و REST API لأنظمة VMS و ERP الحالية' }[lang]
        }
      ]
    },
    {
      id: 'enterprise',
      code: 'CAT-DOC-03',
      title: {
        id: 'Katalog Dokumen Cerdas, Procurement & Enterprise LLM',
        en: 'Smart Document Intelligence, Procurement & Enterprise LLM Catalog',
        ja: '高精度文書AI解析・スマート調達・エンタープライズLLMカタログ',
        ar: 'كتالوج معالجة الوثائق الذكية والمشتريات ونماذج LLM للمؤسسات'
      }[lang],
      subtitle: {
        id: 'AI Document Intelligence, Smart Vendor Analytics & RAG Semantic Search',
        en: 'AI Document Intelligence, Smart Vendor Analytics & RAG Semantic Search',
        ja: '文書構造化解析、サプライヤー適正分析、高精度RAGセマンティック検索',
        ar: 'معالجة ذكية للوثائق، تحليلات الموردين والبحث الدلالي المعتمد على RAG'
      }[lang],
      badge: {
        id: 'ENTERPRISE AUTOMATION',
        en: 'ENTERPRISE AUTOMATION',
        ja: '全社業務自動化',
        ar: 'أتمتة الشركات الكبرى'
      }[lang],
      color: '#6366F1',
      products: PRODUCTS.filter(p => p.id === 'ai-doc-intel' || p.id === 'procure-ai' || p.id === 'business-ai' || p.id === 'comply-ai'),
      specs: [
        { 
          label: { id: 'Pemrosesan Dokumen', en: 'Document Processing', ja: '多言語文書OCR処理', ar: 'معالجة المستندات' }[lang],
          value: { id: 'OCR Multi-bahasa (ID/EN/Mandarin/Arabic) dengan preservasi tabel kompleks', en: 'Multilingual OCR (ID/EN/Mandarin/Arabic) with complex table reconstruction', ja: '多言語対応OCR（インドネシア語/英語/中国語/アラビア語）複雑表構造の完全復元', ar: 'OCR متعدد اللغات (إندونيسي/إنجليزي/صيني/عربي) مع الحفاظ على الجداول المعقدة' }[lang]
        },
        { 
          label: { id: 'Pencarian Semantik', en: 'Semantic Search', ja: 'RAGセマンティック検索', ar: 'البحث الدلالي' }[lang],
          value: { id: 'Vector Embedding RAG (Retrieval-Augmented Generation) berbasis dokumen lokal', en: 'Vector Embedding RAG on air-gapped localized document stores', ja: '高密度ベクトル埋め込みとローカル社内文書リポジトリによるセキュアなRAG検索', ar: 'تضمين متجهي RAG قائم على مستودعات البيانات المحلية المحمية' }[lang]
        },
        { 
          label: { id: 'Analisis Kontrak', en: 'Contract Analysis', ja: '契約・入札条項自動精査', ar: 'تحليل العقود' }[lang],
          value: { id: 'Deteksi klausul penalti, masa retensi, resiko wanprestasi tender otomatis', en: 'Automated extraction of penalty clauses, retention periods, and default risk', ja: '違約金条項、契約保証期間、入札不履行リスクのAI自動検知とサマリー提示', ar: 'كشف تلقائي لشروط الجزاءات، فترات الضمان ومخاطر العقود والمناقصات' }[lang]
        },
        { 
          label: { id: 'Audit Trail', en: 'Audit Trail', ja: '不変監査ログ', ar: 'سجل التدقيق والمطابقة' }[lang],
          value: { id: 'Immutable cryptographic access log memenuhi ISO 27001 & UU Perlindungan Data Pribadi', en: 'Immutable cryptographic access audit logs compliant with ISO 27001 & PDP regulations', ja: 'ISO 27001および個人情報保護法に準拠した改ざん不能な暗号化アクセス監査ログ', ar: 'سجلات تدقيق مشفرة غير قابلة للتغيير متوافقة مع ISO 27001 وقوانين حماية البيانات' }[lang]
        }
      ]
    },
    {
      id: 'cyber',
      code: 'CAT-CYBER-04',
      title: {
        id: 'Katalog Keamanan Siber Sovereign & Zero-Trust Architecture',
        en: 'Sovereign Cyber Security & Zero-Trust Architecture Catalog',
        ja: 'ソブリン・サイバーセキュリティ＆ゼロトラスト設計カタログ',
        ar: 'كتالوج الأمن السيبراني السيادي وهندسة الثقة الصفرية Zero-Trust'
      }[lang],
      subtitle: {
        id: 'Aegis Cyber Shield, Private Air-Gapped AI & Incident Response',
        en: 'Aegis Cyber Shield, Private Air-Gapped AI & Incident Response',
        ja: 'Aegis Cyber Shield、完全閉域エアギャップAI基盤 ＆ 自律インシデント遮断',
        ar: 'Aegis Cyber Shield، بيئة ذكاء اصطناعي معزولة كلياً والاستجابة الفورية للحوادث'
      }[lang],
      badge: {
        id: 'MISSION-CRITICAL SECURITY',
        en: 'MISSION-CRITICAL SECURITY',
        ja: '最高機密セキュリティ',
        ar: 'أمن المهام الحيوية'
      }[lang],
      color: '#10B981',
      products: PRODUCTS.filter(p => p.id === 'aegis-cyber-ai' || p.id === 'aegis-private-ai'),
      specs: [
        { 
          label: { id: 'Arsitektur Isolasi', en: 'Isolation Architecture', ja: '完全隔離基盤', ar: 'بنية العزل التام' }[lang],
          value: { id: 'Air-Gapped Private On-Premise GPU Cluster (Zero Data Egress / Outbound)', en: 'Air-Gapped On-Premise GPU Cluster (100% Zero Outbound Data Egress)', ja: '完全エアギャップ型オンプレミスGPUクラスタ（外部通信流出量ゼロ保証）', ar: 'عناقيد GPU معزولة تماماً في الموقع (انعدام خروج البيانات 100%)' }[lang]
        },
        { 
          label: { id: 'Proteksi Ransomware', en: 'Ransomware Shield', ja: 'ランサムウェア防御', ar: 'الحماية من برامج الفدية' }[lang],
          value: { id: 'Micro-segmentation otomatis isolasi endpoint terinfeksi dalam waktu < 200ms', en: 'Autonomous micro-segmentation isolating compromised endpoints in < 200ms', ja: '異常端末を200ミリ秒未満でネットワークから即時自動隔離するマイクロセグメンテーション', ar: 'تجزئة دقيقة ذاتية تعزل الأجهزة المصابة في أقل من 200 مللي ثانية' }[lang]
        },
        { 
          label: { id: 'Standar Enkripsi', en: 'Encryption Standards', ja: '暗号化セキュリティ規格', ar: 'معايير التشفير' }[lang],
          value: { id: 'FIPS 140-2 Level 3, AES-256-GCM, TLS 1.3 dengan HSM Hardware Key Storage', en: 'FIPS 140-2 Level 3, AES-256-GCM, TLS 1.3 backed by dedicated HSM hardware modules', ja: 'FIPS 140-2 Level 3認定、AES-256-GCM、TLS 1.3、専用HSMハードウェア鍵管理', ar: 'FIPS 140-2 Level 3 و AES-256-GCM و TLS 1.3 مع تخزين المفاتيح في وحدات HSM' }[lang]
        },
        { 
          label: { id: 'SLA NOC 24/7', en: 'NOC 24/7 SLA', ja: '24/7 NOC保守SLA', ar: 'اتفاقية مستوى الخدمة 24/7' }[lang],
          value: { id: '99.98% High Availability Uptime dengan garansi respon insiden < 15 menit', en: '99.98% High Availability Uptime with guaranteed < 15 minute incident escalation', ja: '稼働率99.98％保証、15分以内のインシデント初動エスカレーション対応を契約保証', ar: 'توفر بنسبة 99.98% مع استجابة مضمونة للحوادث خلال أقل من 15 دقيقة' }[lang]
        }
      ]
    }
  ];

  const displayedCatalogs = catalogSections.filter(c => {
    if (activeCatalogTab !== 'all' && c.id !== activeCatalogTab) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.products.some(p => {
          const loc = getAegisProductLocalized(p.id, lang);
          const pName = loc?.name || p.name;
          const pDesc = loc?.description || p.description;
          return pName.toLowerCase().includes(q) || pDesc.toLowerCase().includes(q);
        })
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/90 backdrop-blur-3xl animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#090C14] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col text-left print:bg-white print:text-black print:max-w-none print:max-h-none print:border-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Action Bar (Hidden during Print) */}
        <div className="bg-gradient-to-r from-[#0E1322] to-[#12182B] border-b border-white/[0.08] px-5 py-3.5 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/10 p-1 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[#2997FF]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white">{t.officialDoc}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0071E3]/20 text-[#2997FF] border border-[#2997FF]/30 font-mono">
                  {t.edition}
                </span>
              </div>
              <p className="text-[10px] text-white/60">PT Maudy Network Nusantara • Aegis Enterprise AI Suite</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/downloads/Aegis-Enterprise-AI-Catalog-2026.pdf"
              download="Aegis-Enterprise-AI-Catalog-2026.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              title="Unduh Berkas Dokumen PDF Resmi"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.downloadPdf}</span>
              <span className="sm:hidden">PDF</span>
            </a>

            <button
              onClick={handlePrint}
              title="Cetak atau Simpan sebagai PDF dari Browser"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium transition-all cursor-pointer border border-white/[0.1]"
            >
              <Printer className="w-3.5 h-3.5 text-[#2997FF]" />
              <span className="hidden sm:inline">{t.print}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Tutup Brosur"
              className="w-8 h-8 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search Bar (Hidden during Print) */}
        <div className="bg-[#0B0F1A] border-b border-white/[0.06] px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {[
              { id: 'all', label: t.tabs.all },
              { id: 'maritime', label: t.tabs.maritime },
              { id: 'vision', label: t.tabs.vision },
              { id: 'enterprise', label: t.tabs.enterprise },
              { id: 'cyber', label: t.tabs.cyber },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCatalogTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                  activeCatalogTab === tab.id
                    ? 'bg-[#0071E3] text-white shadow-sm'
                    : 'text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search inside Catalog */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-8 pr-3 py-1 text-xs rounded-xl bg-black/40 border border-white/[0.08] text-white placeholder-white/40 focus:outline-none focus:border-[#2997FF]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1 print:overflow-visible print:p-0 print:space-y-6">
          
          {/* OFFICIAL COVER / HEADER SHEET */}
          <div className="border-b border-white/[0.1] pb-6 print:border-black print:pb-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono tracking-widest text-[#2997FF] uppercase font-bold print:text-blue-700">
                    {t.docDossier}
                  </span>
                  <span className="text-white/40 print:text-gray-400">•</span>
                  <span className="text-[11px] font-mono text-white/60 print:text-gray-600">
                    REF: MNK-AEGIS-SPEC-2026/V4
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                  {t.mainTitle}
                </h1>
                <p className="text-sm text-white/70 print:text-gray-700 max-w-2xl font-light">
                  {t.mainDesc}
                </p>
              </div>

              {/* Legal Badges */}
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-right space-y-1 print:border-gray-300 print:bg-gray-50 shrink-0">
                <div className="text-[10px] font-mono text-emerald-400 font-bold print:text-emerald-700">
                  {t.isoBadge}
                </div>
                <div className="text-[10px] text-white/60 print:text-gray-600">
                  {t.kominfoBadge}
                </div>
                <div className="text-[10px] text-white/60 print:text-gray-600">
                  {t.hotline}
                </div>
              </div>
            </div>

            {/* Quick PDF Action Banner */}
            <div className="rounded-2xl p-4 bg-gradient-to-r from-[#0071E3]/20 via-[#2997FF]/10 to-transparent border border-[#2997FF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 print:hidden">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#0071E3]/20 border border-[#2997FF]/40 flex items-center justify-center text-[#2997FF] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center space-x-2">
                    <span>{t.pdfBannerTitle}</span>
                    <span className="px-2 py-0.2 rounded-full text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {t.pdfBannerTag}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70">
                    {t.pdfBannerDesc}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href="/downloads/Aegis-Enterprise-AI-Catalog-2026.pdf"
                  download="Aegis-Enterprise-AI-Catalog-2026.pdf"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadPdf}</span>
                </a>
              </div>
            </div>
          </div>

          {/* CATALOG SECTIONS */}
          {displayedCatalogs.map((catalog) => (
            <div 
              key={catalog.id}
              className="space-y-6 pt-4 border-b border-white/[0.08] pb-10 print:border-gray-300 print:pb-8 page-break-inside-avoid"
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[10px] font-mono text-[#2997FF] mb-2 print:text-blue-700 print:border-blue-300">
                    <span>{catalog.code}</span>
                    <span>&bull;</span>
                    <span>{catalog.badge}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white print:text-black">
                    {catalog.title}
                  </h2>
                  <p className="text-xs text-white/60 print:text-gray-600 mt-0.5">
                    {catalog.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsAppInquiry(catalog.title)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#0071E3]/20 hover:bg-[#0071E3] border border-[#2997FF]/40 text-[#2997FF] hover:text-white text-xs font-semibold transition-all cursor-pointer print:hidden"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.requestQuote}</span>
                </button>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-black/40 print:bg-gray-100 rounded-2xl p-4 border border-white/[0.06] print:border-gray-300 text-xs">
                {catalog.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="text-[10px] font-mono text-white/50 print:text-gray-500 uppercase tracking-wide">
                      {spec.label}
                    </div>
                    <div className="font-medium text-white print:text-gray-900 leading-snug">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Products within this catalog category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catalog.products.map((rawProd) => {
                  const loc = getAegisProductLocalized(rawProd.id, lang);
                  const pName = loc?.name || rawProd.name;
                  const pTagline = loc?.tagline || rawProd.tagline;
                  const pDesc = loc?.description || rawProd.description;
                  const pFeatures: string[] = loc?.keyFeatures || rawProd.keyFeatures;
                  const pMetrics = (loc?.metrics as any) || rawProd.metrics || [];
                  return (
                    <div 
                      key={rawProd.id}
                      className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all print:border-gray-300 print:bg-white space-y-3.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-bold text-white print:text-black">
                            {pName}
                          </h3>
                          <p className="text-[11px] text-[#2997FF] print:text-blue-700 font-medium">
                            {pTagline}
                          </p>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-white/70 print:text-gray-600 uppercase">
                          {rawProd.category}
                        </span>
                      </div>

                      <p className="text-xs text-white/70 print:text-gray-700 leading-relaxed font-light">
                        {pDesc}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-1 pt-1">
                        <div className="text-[10px] font-mono text-white/50 print:text-gray-500 uppercase">
                          {t.keySpecs}
                        </div>
                        <div className="grid grid-cols-1 gap-1 text-[11px]">
                          {pFeatures.slice(0, 4).map((feat: string, fIdx: number) => (
                            <div key={fIdx} className="flex items-center space-x-1.5 text-white/80 print:text-gray-800">
                              <CheckCircle2 className="w-3 h-3 text-[#2997FF] flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics / Impact Bar */}
                      {pMetrics && pMetrics.length > 0 && (
                        <div className="pt-2 border-t border-white/[0.06] print:border-gray-200 flex items-center justify-between text-xs">
                          {pMetrics.slice(0, 2).map((m: { label: string; value: string }, mIdx: number) => (
                            <div key={mIdx}>
                              <div className="text-[10px] text-white/50 print:text-gray-500">{m.label}</div>
                              <div className="font-bold text-[#2997FF] print:text-blue-800">{m.value}</div>
                            </div>
                          ))}
                          {onOpenDemo && (
                            <button
                              onClick={() => {
                                onClose();
                                onOpenDemo(pName);
                              }}
                              className="text-[11px] font-medium text-white hover:text-[#2997FF] print:hidden cursor-pointer flex items-center space-x-1"
                            >
                              <span>{t.demoBtn}</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* TABLE OF COMPARISON & IMPLEMENTATION SCHEMES */}
          <div className="space-y-4 pt-4 border-b border-white/[0.08] pb-10 print:border-gray-300 print:pb-8">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white print:text-black">
                {t.matrixTitle}
              </h2>
              <p className="text-xs text-white/60 print:text-gray-600">
                {t.matrixDesc}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-white/80 print:text-black border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.12] bg-white/[0.04] print:bg-gray-100 print:border-gray-400">
                    <th className="p-3 font-semibold">{t.matrixHeaders.scheme}</th>
                    <th className="p-3 font-semibold">{t.matrixHeaders.hw}</th>
                    <th className="p-3 font-semibold">{t.matrixHeaders.sw}</th>
                    <th className="p-3 font-semibold">{t.matrixHeaders.sla}</th>
                    <th className="p-3 font-semibold">{t.matrixHeaders.fit}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] print:divide-gray-200">
                  {t.matrixRows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="p-3 font-bold text-white print:text-black">{row.scheme}</td>
                      <td className="p-3">{row.hw}</td>
                      <td className="p-3">{row.sw}</td>
                      <td className="p-3">{row.sla}</td>
                      <td className="p-3">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* OFFICIAL FOOTER & CONTACT CONFIRMATION */}
          <div className="pt-2 space-y-4 text-xs text-white/70 print:text-black">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0071E3]/20 via-[#101422] to-[#2997FF]/10 border border-white/[0.08] print:border-gray-400 print:bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white print:text-black text-sm">
                  {t.footerCtaTitle}
                </h3>
                <p className="text-[11px] text-white/60 print:text-gray-600 mt-0.5">
                  {t.footerCtaDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 print:hidden">
                <a
                  href="/downloads/Aegis-Enterprise-AI-Catalog-2026.pdf"
                  download="Aegis-Enterprise-AI-Catalog-2026.pdf"
                  className="px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold flex items-center space-x-1.5 transition-all border border-white/[0.1]"
                  title="Unduh Berkas Dokumen PDF Resmi"
                >
                  <Download className="w-3.5 h-3.5 text-[#2997FF]" />
                  <span>{t.downloadPdf}</span>
                </a>
                <a
                  href="tel:+6285727487507"
                  className="px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold flex items-center space-x-1.5 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#2997FF]" />
                  <span>+62 857-2748-7507</span>
                </a>
                <button
                  onClick={() => handleWhatsAppInquiry('Katalog Lengkap Aegis Enterprise AI Suite')}
                  className="px-4 py-2 rounded-xl bg-[#0071E3] hover:bg-[#2997FF] text-white text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.chatWa}</span>
                </button>
              </div>
            </div>

            <div className="text-[10px] text-white/40 print:text-gray-500 text-center pt-2">
              {t.copyright}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
