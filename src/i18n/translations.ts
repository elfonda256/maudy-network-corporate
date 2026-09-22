export type Language = 'id' | 'en' | 'ja' | 'ar';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'id', label: 'ID', flag: '🇮🇩', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'en', label: 'EN', flag: '🇬🇧', nativeName: 'English', dir: 'ltr' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', nativeName: '日本語', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', nativeName: 'العربية', dir: 'rtl' },
];

/**
 * Safe accessor helper for multilingual data objects
 */
export function getLangText<T extends Record<string, any>>(
  obj: T | undefined | null,
  lang: Language,
  fallback = ''
): string {
  if (!obj) return fallback;
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj['en'] || obj['id'] || fallback;
}

export const TRANSLATIONS = {
  // Navigation & Micro-bar
  nav: {
    corporate: {
      solutions: { id: 'Solusi Korporasi', en: 'Solutions', ja: 'ソリューション', ar: 'حلول الشركات' },
      maritime: { id: 'Maritim & VSAT', en: 'Maritime & VSAT', ja: '海洋＆VSAT通信', ar: 'الاتصالات البحرية وVSAT' },
      portfolio: { id: 'Portofolio', en: 'Portfolio', ja: '導入実績', ar: 'المشاريع والأعمال' },
      innovation: { id: 'Inovasi & XTUR', en: 'XTUR & Tech', ja: 'XTUR AI技術', ar: 'ابتكار XTUR' },
      about: { id: 'Tentang MNK', en: 'About MNK', ja: 'MNKについて', ar: 'عن الشركة' },
      contact: { id: 'Bantuan & NOC', en: 'Support & NOC', ja: 'NOCサポート', ar: 'الدعم ومركز NOC' },
      searchPlaceholder: {
        id: 'Cari solusi, VSAT maritim, XTUR AI, SPK...',
        en: 'Search solutions, Maritime VSAT, XTUR AI, SPK...',
        ja: 'ソリューション、海上VSAT、XTUR AI、契約を検索...',
        ar: 'ابحث عن الحلول، أقمار VSAT البحرية، كاميرات XTUR AI...'
      },
      searchResults: { id: 'HASIL PENCARIAN SISTEM', en: 'SYSTEM SEARCH RESULTS', ja: 'システム検索結果', ar: 'نتائج البحث في النظام' },
      matchesFound: { id: 'DITEMUKAN', en: 'MATCHES', ja: '件一致', ar: 'تطابق' },
      consultationBtn: { id: 'Konsultasi Teknis', en: 'Technical Consultation', ja: '技術相談・お問い合わせ', ar: 'استشارة فنية متخصصة' },
      credentialsBtn: { id: 'Tata Kelola', en: 'Governance', ja: 'ガバナンス', ar: 'الحوكمة والامتثال' },
      switchToAegis: { id: '⚡ Aegis AI Suite', en: '⚡ Aegis AI Suite', ja: '⚡ Aegis AI スイート', ar: '⚡ جناح إيجيس للذكاء الاصطناعي' }
    },
    aegis: {
      overview: { id: 'Overview', en: 'Overview', ja: '概要', ar: 'نظرة عامة' },
      solutions: { id: 'Solusi AI', en: 'AI Solutions', ja: 'AIソリューション', ar: 'حلول الذكاء الاصطناعي' },
      products: { id: '12 Produk AI', en: '12 AI Products', ja: '12製品群', ar: '12 منتجاً ذكياً' },
      industries: { id: 'Industri', en: 'Industries', ja: '対象産業', ar: 'القطاعات الصناعية' },
      privateAi: { id: 'Private AI', en: 'Private AI', ja: 'プライベートAI', ar: 'الذكاء الاصطناعي الخاص' },
      architecture: { id: 'Arsitektur', en: 'Architecture', ja: 'アーキテクチャ', ar: 'البنية المعمارية' },
      contact: { id: 'Kontak', en: 'Contact', ja: 'お問い合わせ', ar: 'الاتصال والطلب' },
      catalogPdf: { id: '📑 E-Katalog & PDF', en: '📑 E-Catalog & PDF', ja: '📑 カタログ & PDF資料', ar: '📑 كتالوج المنتجات وPDF' },
      scheduleDemo: { id: 'Jadwalkan Demo', en: 'Schedule Demo', ja: 'デモを予約する', ar: 'حجز عرض تجريبي' },
      switchToCorporate: { id: '← Profil Korporat MNK', en: '← MNK Corporate Profile', ja: '← MNK企業プロファイル', ar: '← ملف شركة MNK' },
      privateAiActive: { id: 'Private AI Active', en: 'Private AI Active', ja: '専用AI稼働中', ar: 'الذكاء الاصطناعي الخاص نشط' }
    }
  },

  // Hero Section
  hero: {
    corporate: {
      nocBadge: { id: 'NOC 24/7 ONLINE', en: '24/7 NOC ONLINE', ja: '24時間365日 NOC監視中', ar: 'مركز NOC يعمل 24/7' },
      slaBadge: { id: 'SLA 99.98%', en: 'SLA 99.98%', ja: '稼働率保証 99.98%', ar: 'مستوى الخدمة 99.98%' },
      missionBadge: { id: 'INFRASTRUKTUR MISI KRITIS', en: 'MISSION-CRITICAL INFRASTRUCTURE', ja: 'ミッションクリティカル基盤', ar: 'بنية تحتية للمهام الحرجة' },
      headlinePrefix: { id: 'Maudy Network', en: 'Empowering Critical', ja: '海洋と陸上を結ぶ', ar: 'تمكين البنية التحتية' },
      headlineSuffix: { id: 'Komunikasi Indonesia', en: 'Infrastructure Across Land & Sea', ja: '最先端通信・サイバー基盤', ar: 'الحرجة براً وبحراً' },
      tagline: {
        id: '#BeyondInfrastructure • Solusi Jaringan, Keamanan Siber & IoT Terpadu',
        en: '#BeyondInfrastructure • Integrated Networking, Cybersecurity & IoT Solutions',
        ja: '#BeyondInfrastructure • 統合ネットワーク、サイバーセキュリティ＆IoTソリューション',
        ar: '#BeyondInfrastructure • شبكات متكاملة، أمن سيبراني وحلول إنترنت الأشياء'
      },
      description: {
        id: 'Mitra rekayasa teknologi informasi dan telekomunikasi strategis untuk armada pelayaran, pelabuhan, kementerian, BUMN, perbankan, dan manufaktur berskala nasional.',
        en: 'Strategic IT & telecommunications engineering partner for shipping fleets, ports, ministries, state-owned enterprises, banking, and multinational manufacturing.',
        ja: '海運船団、主要港湾、政府機関、国営企業、金融機関、および製造業向けの戦略的IT・電気通信エンジニアリングパートナー。',
        ar: 'الشريك الهندسي الاستراتيجي للاتصالات وتقنية المعلومات لأساطيل الملاحة والموانئ والوزارات والمؤسسات الحكومية والقطاع المصرفي والصناعي.'
      },
      ctaConsult: { id: 'Mulai Konsultasi Teknis', en: 'Start Technical Consultation', ja: '技術相談を開始する', ar: 'بدء الاستشارة الفنية' },
      ctaPortfolio: { id: 'Lihat Bukti Proyek', en: 'View Project Track Record', ja: '導入実績・プロジェクトを見る', ar: 'سجل المشاريع المنجزة' },
      downloadCatalog: { id: 'Unduh E-Katalog 2026', en: 'Download 2026 Catalog', ja: '2026年度版カタログをダウンロード', ar: 'تحميل كتالوج 2026' }
    },
    aegis: {
      eyebrow: {
        id: 'Aegis Enterprise Intelligence Platform • Bahasa Indonesia',
        en: 'Aegis Enterprise Intelligence Platform • Global Edition',
        ja: 'Aegis エンタープライズ・インテリジェンス・プラットフォーム • 日本語版',
        ar: 'منصة إيجيس للذكاء الاصطناعي المؤسسي • النسخة العربية'
      },
      headline: {
        id: 'Teknologi AI untuk Dunia Bisnis yang Lebih Cerdas.',
        en: 'Enterprise AI Technology for a Smarter Business Future.',
        ja: 'よりスマートなビジネスを実現するエンタープライズAI技術。',
        ar: 'تقنيات الذكاء الاصطناعي لبيئة أعمال أكثر ذكاءً وأماناً.'
      },
      subheadline: {
        id: 'Kami membangun solusi Artificial Intelligence, Automation, Data Intelligence dan Private AI untuk membantu organisasi meningkatkan efisiensi, keamanan dan kualitas pengambilan keputusan.',
        en: 'We build Artificial Intelligence, Intelligent Automation, Data Intelligence, and Sovereign Private AI to help enterprises elevate operational efficiency, security, and strategic decisions.',
        ja: '組織の意思決定品質、業務効率、および最高レベルのデータ主権とセキュリティを向上させるため、人工知能、自動化、プライベートAIソリューションを構築します。',
        ar: 'نبني حلول الذكاء الاصطناعي، والأتمتة الذكية، واستخبارات البيانات، والذكاء الاصطناعي الخاص السيادي (Private AI) لتمكين المؤسسات من رفع الكفاءة وتعزيز الأمن ودقة اتخاذ القرار.'
      },
      scheduleDemo: { id: 'Jadwalkan Demo', en: 'Schedule Demo', ja: 'デモを予約する', ar: 'حجز عرض توضيحي' },
      catalogBtn: { id: '📑 Katalog & Brosur PDF', en: '📑 E-Catalog & PDF Brochure', ja: '📑 カタログ & PDF資料', ar: '📑 كتالوج المنتجات وPDF' },
      exploreSolutions: { id: 'Jelajahi Solusi', en: 'Explore Solutions', ja: 'ソリューションを見る', ar: 'استكشاف الحلول' },
      statTrained: { id: '500jt+ Token Pelatihan', en: '500M+ Training Tokens', ja: '5億+ 学習トークン', ar: '+500 مليون رمز تدريبي' },
      statModels: { id: '12 Solusi AI Siap Pakai', en: '12 Turnkey AI Products', ja: '12の即戦力AIプロダクト', ar: '12 منتج ذكاء اصطناعي جاهز' },
      statDeploy: { id: '100% On-Premise / Hybrid', en: '100% On-Prem / Hybrid', ja: '100% オンプレミス/ハイブリッド', ar: '100% محلي / سحابي هجين' }
    }
  },

  // Stats bar
  stats: {
    sla: { label: { id: 'Garansi SLA Terjamin', en: 'Guaranteed SLA Uptime', ja: '保証SLA稼働率', ar: 'ضمان مستوى الخدمة SLA' }, val: '99.98%' },
    maritime: { label: { id: 'Kapal & Armada Terhubung', en: 'Active Maritime Vessels', ja: '接続船舶・艦隊数', ar: 'السفن البحرية المتصلة' }, val: '120+' },
    projects: { label: { id: 'Proyek Enterprise Selesai', en: 'Enterprise Projects Delivered', ja: '完了プロジェクト数', ar: 'مشاريع مكتملة' }, val: '250+' },
    support: { label: { id: 'Respon NOC & Helpdesk', en: 'NOC Incident Response', ja: 'NOC障害初動対応', ar: 'زمن استجابة مركز الدعم' }, val: '< 15 Menit' }
  },

  // Aegis Suite Sections
  aegisSections: {
    companyValue: {
      eyebrow: { id: 'NILAI STRATEGIS AEGIS', en: 'AEGIS STRATEGIC VALUE', ja: 'AEGISの戦略的価値', ar: 'القيمة الاستراتيجية لإيجيس' },
      title: { id: 'AI yang Dibangun untuk Dunia Nyata.', en: 'AI Built for the Real Enterprise World.', ja: '現実のビジネス課題を解決する実用型AI。', ar: 'ذكاء اصطناعي مبني للواقع المؤسسي الحقيقي.' },
      desc: {
        id: 'Bukan sekadar prototipe eksperimental. Aegis menghadirkan mesin kecerdasan yang beroperasi 24/7 di lini terdepan infrastruktur maritim, manufaktur, dan perbankan.',
        en: 'Not merely experimental prototypes. Aegis delivers battle-tested intelligence engines operating 24/7 at the forefront of maritime infrastructure, industry, and banking.',
        ja: '実験的なプロトタイプではありません。Aegisは、海洋インフラ、重要製造業、金融機関の最前線で24時間365日稼働する実証済みの知能エンジンを提供します。',
        ar: 'ليس مجرد نماذج تجريبية. تقدم إيجيس محركات ذكاء اصطناعي مثبتة تعمل على مدار الساعة في الخطوط الأمامية للبنية التحتية البحرية والصناعية والمصرفية.'
      }
    },
    ecosystem: {
      eyebrow: { id: 'PORTFOLIO ARSITEKTUR', en: 'ECOSYSTEM ARCHITECTURE', ja: '製品エコシステム', ar: 'هندسة المنظومة المتكاملة' },
      title: { id: 'Ekosistem Produk Aegis', en: 'Aegis Product Ecosystem', ja: 'Aegis プロダクト・エコシステム', ar: 'منظومة منتجات إيجيس الذكية' },
      desc: {
        id: '12 Modul kecerdasan buatan terpadu yang dirancang saling terkoneksi dengan protokol zero-trust dan kompatibilitas on-premise.',
        en: '12 integrated artificial intelligence modules designed to interoperate with zero-trust protocols and seamless on-premise compatibility.',
        ja: 'ゼロトラストセキュリティと完全オンプレミス互換性を備え、緊密に連携する12の統合AIモジュール群。',
        ar: '12 وحدة ذكاء اصطناعي متكاملة مصممة للتواصل والعمل ببروتوكولات انعدام الثقة (Zero-Trust) والتوافق المحلي الكامل.'
      }
    },
    flagshipMaritime: {
      badge: { id: 'FLAGSHIP SPOTLIGHT', en: 'FLAGSHIP SPOTLIGHT', ja: 'フラッグシップ・注目ソリューション', ar: 'المنتج الرائد الأبرز' },
      title: { id: 'Aegis Maritime Intelligence System', en: 'Aegis Maritime Intelligence System', ja: 'Aegis 海洋インテリジェンス・システム', ar: 'نظام إيجيس للذكاء البحري المتكامل' },
      desc: {
        id: 'Kombinasi telemetri satelit VSAT/LEO, algoritma navigasi cerdas, deteksi anomali rute otomatis, dan pemantauan efisiensi bahan bakar secara real-time.',
        en: 'Unified VSAT/LEO satellite telemetry, autonomous route navigation, anomaly detection, and real-time fuel efficiency optimization.',
        ja: 'VSAT/LEO衛星通信、自律航行支援アルゴリズム、リアルタイム燃料消費最適化、および船舶動態異常検知の統合基盤。',
        ar: 'دمج الاتصالات الفضائية VSAT/LEO، خوارزميات الملاحة الذكية، كشف شذوذ المسار الآلي، وتحسين كفاءة استهلاك الوقود في الوقت الفعلي.'
      },
      learnMore: { id: 'Pelajari Selengkapnya', en: 'Learn More', ja: '詳細を見る', ar: 'معرفة المزيد' },
      requestDemo: { id: 'Minta Demo Maritim', en: 'Request Maritime Demo', ja: '海洋デモを依頼', ar: 'طلب عرض بحري تجريبي' }
    },
    privateAi: {
      eyebrow: { id: 'KEDAULATAN DATA TOTAL', en: 'SOVEREIGN PRIVATE AI', ja: '完全なデータ主権とプライバシー', ar: 'سيادة البيانات والخصوصية الكاملة' },
      title: { id: 'Ketika Data Anda Adalah Rahasia Strategis Terpenting.', en: 'When Your Data Is Your Most Strategic Asset.', ja: '機密データと戦略資産を外部に出さない専用AI。', ar: 'عندما تكون بياناتك هي أثمن أصولك الاستراتيجية.' },
      desc: {
        id: 'Aegis Private AI dapat dideploy 100% Air-Gapped di dalam data center Anda sendiri tanpa satupun paket data bocor ke cloud pihak ketiga.',
        en: 'Aegis Private AI can be deployed 100% Air-Gapped inside your own datacenter, ensuring zero data packets leak to public cloud providers.',
        ja: '外部クラウドへデータが一切流出しない100%エアギャップ（完全隔離）環境で、貴社専用データセンターに導入可能です。',
        ar: 'يمكن نشر إيجيس Private AI بنسبة 100% داخل مراكز بياناتك الخاصة ومعزولاً تماماً (Air-Gapped) دون تسريب أي بيانات إلى السحابة العامة.'
      }
    },
    catalogModal: {
      title: { id: 'Katalog Resmi Aegis Enterprise AI 2026', en: 'Official Aegis Enterprise AI Catalog 2026', ja: '公式 Aegis エンタープライズAI カタログ 2026', ar: 'الكتالوج الرسمي لذكاء إيجيس الاصطناعي 2026' },
      subtitle: { id: 'Panduan lengkap spesifikasi teknis, arsitektur, dan matriks industri.', en: 'Complete technical specifications, system architecture, and industry matrix.', ja: '技術仕様、システム構成、産業別適用マトリクスの完全ガイド。', ar: 'الدليل الشامل للمواصفات الفنية، البنية التحتية، ومصفوفة القطاعات.' },
      downloadBtn: { id: 'Unduh Dokumen PDF Resmi', en: 'Download Official PDF', ja: '公式PDFをダウンロード', ar: 'تحميل وثيقة PDF الرسمية' },
      closeBtn: { id: 'Tutup', en: 'Close', ja: '閉じる', ar: 'إغلاق' }
    }
  },

  // AI Assistant Chatbot Translations
  chatbot: {
    title: { id: 'Maudy AI Virtual Assistant', en: 'Maudy AI Virtual Assistant', ja: 'Maudy AI バーチャルアシスタント', ar: 'المساعد الافتراضي Maudy AI' },
    statusOnline: { id: 'Siap Melayani 24/7', en: 'Ready 24/7 Online', ja: '24時間365日 対応可能', ar: 'جاهز لخدمتك 24/7' },
    greeting: {
      id: 'Halo! Selamat datang di portal resmi **PT Maudy Network Nusantara** & **Aegis AI Suite**.\n\nSaya adalah **Maudy AI Assistant**. Saya dapat membantu Anda dengan informasi seputar **konektivitas satelit maritim VSAT**, **kamera AI CCTV XTUR**, **arsitektur Private AI on-premise**, atau **estimasi biaya implementasi B2B**.\n\nApa yang ingin Anda konsultasikan hari ini?',
      en: 'Welcome to the official portal of **PT Maudy Network Nusantara** & **Aegis Enterprise AI Suite**.\n\nI am **Maudy AI Assistant**. I can assist you with technical inquiries regarding **Maritime VSAT Satellite Connectivity**, **XTUR AI Surveillance**, **On-Premise Private AI Architecture**, or **Enterprise B2B Cost Estimation**.\n\nHow may I assist your organization today?',
      ja: 'ようこそ、**PT Maudy Network Nusantara** および **Aegis Enterprise AI Suite** の公式ポータルへ。\n\n私は **Maudy AI アシスタント** です。**海上衛星VSAT通信**、**XTUR AI監視システム**、**オンプレミス専用AI基盤**、または**企業向けB2B導入見積もり**に関する技術的なご案内を担当いたします。\n\n本日はどのようなご相談でしょうか？',
      ar: 'أهلاً بكم في البوابة الرسمية لشركة **PT Maudy Network Nusantara** وجناح **Aegis Enterprise AI Suite**.\n\nأنا **المساعد الذكي Maudy AI**. يسعدني مساعدتكم في الاستفسارات الفنية حول **اتصالات الأقمار الصناعية البحرية VSAT**، **كاميرات المراقبة الذكية XTUR AI**، **بنية الذكاء الاصطناعي الخاص محلياً**، أو **تقديرات التكلفة للمشاريع الكبرى**.\n\nكيف يمكنني خدمة مؤسستكم اليوم؟'
    },
    inputPlaceholder: {
      id: 'Ketik pesan teknis Anda...',
      en: 'Type your technical inquiry...',
      ja: 'ご質問・相談内容をご入力ください...',
      ar: 'اكتب استفسارك الفني هنا...'
    },
    estimatorBtn: { id: '📊 Buka Kalkulator Estimasi', en: '📊 Open Cost Estimator', ja: '📊 費用シミュレーターを開く', ar: '📊 فتح حاسبة التقدير الفني' },
    whatsappBtn: { id: '💬 Chat WhatsApp Tim Teknis', en: '💬 Technical Team WhatsApp', ja: '💬 技術担当者とWhatsApp相談', ar: '💬 المحادثة مع الفريق الفني' },
    suggestions: {
      id: [
        'Solusi satelit VSAT untuk armada kapal',
        'Apa keunggulan XTUR AI CCTV?',
        'Arsitektur Aegis Private AI on-premise',
        'Berapa estimasi biaya implementasi?'
      ],
      en: [
        'Maritime VSAT satellite solutions for fleets',
        'What are the core capabilities of XTUR AI CCTV?',
        'On-premise Aegis Private AI architecture',
        'Enterprise implementation cost estimate'
      ],
      ja: [
        '船舶・艦隊向け海上VSAT衛星通信ソリューション',
        'XTUR AI 監視カメラの主な特長と導入効果',
        '完全隔離型 Aegis Private AI のオンプレミス構成',
        'エンタープライズ導入の費用・納期見積もり'
      ],
      ar: [
        'حلول أقمار VSAT للاتصالات البحرية للأساطيل',
        'ما هي أبرز قدرات كاميرات XTUR AI الذكية؟',
        'بنية إيجيس Private AI المعزولة داخل المؤسسة',
        'تقدير تكلفة تنفيذ المشاريع وجداول التسليم'
      ]
    }
  },

  // Common UI labels
  common: {
    backToTop: { id: 'Kembali ke atas', en: 'Back to top', ja: 'トップに戻る', ar: 'العودة للأعلى' },
    close: { id: 'Tutup', en: 'Close', ja: '閉じる', ar: 'إغلاق' },
    submit: { id: 'Kirim', en: 'Submit', ja: '送信する', ar: 'إرسال' },
    loading: { id: 'Memuat...', en: 'Loading...', ja: '読み込み中...', ar: 'جاري التحميل...' },
    moreDetails: { id: 'Lihat Detail', en: 'View Details', ja: '詳細を見る', ar: 'عرض التفاصيل' },
    download: { id: 'Unduh', en: 'Download', ja: 'ダウンロード', ar: 'تحميل' },
    emailUs: { id: 'Email Kami', en: 'Email Us', ja: 'メールで問い合わせ', ar: 'مراسلتنا عبر البريد' }
  }
};
