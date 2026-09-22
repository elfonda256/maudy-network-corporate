import type { Language } from './translations';

export interface LocalizedProduct {
  name: string;
  tagline: string;
  description: string;
  categoryLabel: string;
  targetIndustries: string[];
  keyFeatures: string[];
  useCases: string[];
  metrics: { label: string; value: string; desc: string }[];
}

export const AEGIS_PRODUCT_TRANSLATIONS: Record<string, Record<Language, LocalizedProduct>> = {
  'ai-doc-intel': {
    id: {
      name: 'AI Document Intelligence',
      tagline: 'Ubah Dokumen Menjadi Pengetahuan.',
      description: 'Platform AI enterprise yang membantu organisasi membaca, mengindeks, mencari, memahami, dan menganalisis ribuan dokumen bisnis secara instan dan akurat.',
      categoryLabel: 'Enterprise Core',
      targetIndustries: ['Enterprise', 'Pemerintahan', 'Konstruksi', 'Engineering', 'Legal', 'Finance', 'Procurement', 'Manufaktur'],
      keyFeatures: [
        'AI Document Semantic Search',
        'High-Precision OCR Multibahasa',
        'Ekstraksi Entitas & Metadata Dokumen',
        'Analisis Risiko Klausul Kontrak',
        'Ringkasan Eksekutif Otomatis',
        'RAG (Retrieval-Augmented Generation)',
        'Role-Based Access Management (RBAC)',
        'Deployment 100% Air-Gapped Tanpa Internet'
      ],
      useCases: [
        'Pencarian klausul spesifik pada ribuan halaman kontrak tender.',
        'Ekstraksi otomatis PO, invoice, dan dokumen legal ke ERP.',
        'Pengecekan kelengkapan berkas administrasi proyek skala besar.'
      ],
      metrics: [
        { label: 'Format Dokumen', value: '50+ Tipe', desc: 'PDF, CAD, Scanned Docs, Office' },
        { label: 'Kecepatan Indeks', value: '< 1.2 Detik', desc: 'Per 1.000 Halaman Kompleks' },
        { label: 'Akurasi Ekstraksi', value: 'Enterprise Grade', desc: 'Validasi OCR Multi-layer' }
      ]
    },
    en: {
      name: 'AI Document Intelligence',
      tagline: 'Transform Documents into Actionable Intelligence.',
      description: 'Enterprise AI platform enabling organizations to index, search, comprehend, and analyze massive volumes of corporate documents with semantic precision.',
      categoryLabel: 'Enterprise Core',
      targetIndustries: ['Enterprise', 'Government', 'Construction', 'Engineering', 'Legal', 'Finance', 'Procurement', 'Manufacturing'],
      keyFeatures: [
        'Semantic Document Vector Search',
        'Multi-Language High-Precision OCR',
        'Entity Extraction & Metadata Tagging',
        'Contract Risk & Clause Analysis',
        'Autonomous Executive Summaries',
        'Retrieval-Augmented Generation (RAG)',
        'Role-Based Access Control (RBAC)',
        '100% Air-Gapped Zero-Egress Deployment'
      ],
      useCases: [
        'Instant clause lookups across thousands of tender contract pages.',
        'Automated extraction of purchase orders, invoices, and legal deeds into ERP.',
        'Automated compliance audit of multi-billion dollar construction archives.'
      ],
      metrics: [
        { label: 'Supported Formats', value: '50+ Types', desc: 'PDF, CAD, Scans, Office' },
        { label: 'Indexing Speed', value: '< 1.2 Seconds', desc: 'Per 1,000 Complex Pages' },
        { label: 'Extraction Precision', value: 'Enterprise Grade', desc: 'Multi-layer Vision OCR' }
      ]
    },
    ja: {
      name: 'AI Document Intelligence',
      tagline: '文書を即座に組織の知性に変革する。',
      description: '数万ページにおよぶ契約書、技術図面、財務諸表を意味論的にインデックス化・解析し、瞬時に回答を抽出するエンタープライズAI。',
      categoryLabel: 'エンタープライズ中核',
      targetIndustries: ['エンタープライズ', '政府機関', '建設', 'エンジニアリング', '法務', '金融', '調達', '製造'],
      keyFeatures: [
        'セマンティック意味論ベクトル検索',
        '高精度多言語OCRエンジン',
        '重要エンティティ＆メタデータ自動抽出',
        '契約リスク条項・特約の自動検出',
        'エグゼクティブ要約の自動生成',
        '自社専用RAG（検索拡張生成）',
        'ロールベース権限管理（RBAC）',
        '100%完全隔離エアギャップ対応'
      ],
      useCases: [
        '数千ページの入札仕様書および契約条項からの瞬時照会。',
        '発注書、請求書、法定文書のERP自動連携。',
        '大規模インフラ案件における提出書類の適合性監査。'
      ],
      metrics: [
        { label: '対応文書形式', value: '50+ 形式', desc: 'PDF、CAD、スキャン、Office' },
        { label: 'インデックス速度', value: '< 1.2 秒', desc: '1,000ページあたり' },
        { label: '抽出精度', value: 'エンタープライズ基準', desc: '多層OCR検証' }
      ]
    },
    ar: {
      name: 'AI Document Intelligence',
      tagline: 'تحويل الوثائق الضخمة إلى معارف تنفيذية فورية.',
      description: 'منصة ذكاء اصطناعي مؤسسية تمكّن الهيئات والشركات من فهرسة والبحث في مئات الآلاف من الوثائق والعقود وفهمها بدقة استدلال فائقة.',
      categoryLabel: 'المنظومة المؤسسية',
      targetIndustries: ['الشركات الكبرى', 'الجهات الحكومية', 'الإنشاءات', 'الهندسة', 'القانون', 'المالية', 'المشتريات', 'التصنيع'],
      keyFeatures: [
        'بحث دلالي ذكي بالمتجهات الدلالية',
        'محرك OCR فائق الدقة متعدد اللغات',
        'استخراج تلقائي للكيانات والبيانات الوصفية',
        'تحليل مخاطر البنود والاشتراطات التعاقدية',
        'تلخيص تنفيذي آلي لصناع القرار',
        'استرجاع معزز بالتوليد (RAG) خاص',
        'إدارة صلاحيات دقيقة بحسب الأدوار (RBAC)',
        'نشر معزول محلياً بنسبة 100% (Air-Gapped)'
      ],
      useCases: [
        'البحث الفوري عن الشروط والبنود الدقيقة في آلاف صفحات عقود المناقصات.',
        'الاستخراج التلقائي لأوامر الشراء والفواتير إلى أنظمة ERP.',
        'التدقيق الإداري والتنظيمي لأرشيف مشاريع البنية التحتية الضخمة.'
      ],
      metrics: [
        { label: 'صيغ الملفات', value: '+50 صيغة', desc: 'PDF، CAD، مستندات ممسوحة، Office' },
        { label: 'سرعة الفهرسة', value: '< 1.2 ثانية', desc: 'لكل 1,000 صفحة معقدة' },
        { label: 'دقة الاستخراج', value: 'معيار مؤسسي', desc: 'تحقق بصري متعدد الطبقات' }
      ]
    }
  },

  'procure-ai': {
    id: {
      name: 'Procure AI',
      tagline: 'Procurement Lebih Cepat. Keputusan Lebih Cerdas.',
      description: 'Platform otomasi pengadaan cerdas dari Request, RFQ, Quotation OCR, Matrix Comparison otomatis, Approval Workflow terdistribusi, hingga Purchase Order.',
      categoryLabel: 'Enterprise Core',
      targetIndustries: ['Enterprise', 'Konstruksi', 'Manufaktur', 'Mining', 'Hospitality', 'Logistik'],
      keyFeatures: [
        'Generator RFQ Otomatis Berbasis AI',
        'Parser & OCR Penawaran Harga Vendor',
        'Matriks Perbandingan Vendor Instan',
        'Benchmarking Harga & Termin Pembayaran',
        'Pencocokan Kepatuhan Spesifikasi Teknis',
        'Sistem Approval Multi-Tier Terintegrasi'
      ],
      useCases: [
        'Perbandingan instan 15 penawaran harga vendor dalam hitungan detik.',
        'Deteksi anomali mark-up harga bahan material dibanding historical data.',
        'Pencocokan spesifikasi teknis peralatan berat terhadap standar proyek.'
      ],
      metrics: [
        { label: 'Efisiensi Siklus', value: '4x Lebih Cepat', desc: 'RFQ ke Purchase Order' },
        { label: 'Penghematan Biaya', value: '8 - 14%', desc: 'Optimasi Seleksi Penawaran' },
        { label: 'Vendor Benchmarking', value: '100% Otomatis', desc: 'Kepatuhan & Spesifikasi' }
      ]
    },
    en: {
      name: 'Procure AI',
      tagline: 'Faster Procurement. Smarter Commercial Decisions.',
      description: 'End-to-end intelligent procurement platform: autonomous RFQ generation, vendor quotation OCR parsing, instant matrix comparisons, and tiered PO approvals.',
      categoryLabel: 'Enterprise Core',
      targetIndustries: ['Enterprise', 'Construction', 'Manufacturing', 'Mining', 'Hospitality', 'Logistics'],
      keyFeatures: [
        'AI Automated RFQ Generator',
        'Vendor Quotation OCR & Table Parser',
        'Autonomous Multi-Vendor Comparison Matrix',
        'Historical Pricing & Payment Term Benchmark',
        'Specification & Compliance Verification',
        'Tiered Multi-Level Approval Engine'
      ],
      useCases: [
        'Instant comparative matrix generation for 15+ supplier bids in seconds.',
        'Material price anomaly detection benchmarking past ERP transactions.',
        'Automated technical specification matching for heavy equipment tenders.'
      ],
      metrics: [
        { label: 'Cycle Velocity', value: '4x Faster', desc: 'RFQ to Purchase Order' },
        { label: 'Cost Savings', value: '8 - 14%', desc: 'Optimized Bid Selection' },
        { label: 'Vendor Scoring', value: '100% Autonomous', desc: 'Compliance & Spec Matching' }
      ]
    },
    ja: {
      name: 'Procure AI',
      tagline: '迅速な調達と、精緻な意思決定の実現。',
      description: '見積依頼書（RFQ）の自動生成からベンダー見積書のOCR解析、比較マトリクス作成、多段階承認フロー、発注書発行までを自動化する調達AI。',
      categoryLabel: 'エンタープライズ中核',
      targetIndustries: ['エンタープライズ', '建設', '製造', '鉱業', 'ホテル・観光', '物流'],
      keyFeatures: [
        'AI 見積依頼書（RFQ）自動生成',
        'ベンダー見積書OCR＆表解析エンジン',
        '瞬時複数社比較マトリクス生成',
        '過去実績価格＆支払条件ベンチマーク',
        '技術仕様書と規格の適合度自動判定',
        '多段階承認ワークフロー自動連携'
      ],
      useCases: [
        '15社以上の相見積もりを数秒で比較分析・評価表を作成。',
        '過去の購買データと照合した資材価格の吊り上げ・異常値検知。',
        '重機・産業用設備の入札仕様とメーカー提示書の自動整合チェック。'
      ],
      metrics: [
        { label: '業務処理速度', value: '4倍高速化', desc: 'RFQ作成から発注書まで' },
        { label: '調達コスト削減', value: '8〜14%', desc: '最適見積選定による効果' },
        { label: 'ベンダー評価', value: '完全自動化', desc: '仕様適合・実績スコアリング' }
      ]
    },
    ar: {
      name: 'Procure AI',
      tagline: 'مشتريات أسرع وقرارات تجارية أكثر ذكاءً.',
      description: 'منصة ذكية متكاملة لأتمتة المشتريات: توليد طلبات عروض الأسعار (RFQ)، وقراءة عروض الموردين بتقنية OCR، ومصفوفة المقارنة الآلية، ومسارات الاعتماد.',
      categoryLabel: 'المنظومة المؤسسية',
      targetIndustries: ['المؤسسات الكبرى', 'الإنشاءات', 'التصنيع', 'التعدين', 'الضيافة', 'الخدمات اللوجستية'],
      keyFeatures: [
        'توليد آلي لطلبات عروض الأسعار (RFQ)',
        'معالجة وقراءة عروض الموردين وجداولها بالـ OCR',
        'مصفوفة مقارنة آلية بين عروض الموردين',
        'مقارنة الأسعار التاريخية وشروط الدفع',
        'مطابقة المواصفات الفنية ومعايير الامتثال',
        'محرك اعتماد إداري متعدد المستويات'
      ],
      useCases: [
        'المقارنة الفورية لأكثر من 15 عرض أسعار مورد في ثوانٍ معدودة.',
        'كشف التلاعب أو الارتفاعات غير المبررة في أسعار المواد مقارنة بسجلات ERP.',
        'المطابقة الآلية للمواصفات الفنية للمعدات الثقيلة والمشاريع الهندسية.'
      ],
      metrics: [
        { label: 'سرعة الدورة', value: 'أسرع بـ 4 أضعاف', desc: 'من الطلب إلى أمر الشراء' },
        { label: 'وفورات التكلفة', value: '8 - 14%', desc: 'عبر الاختيار الأمثل للعطاءات' },
        { label: 'تقييم الموردين', value: '100% مؤتمت', desc: 'مطابقة المواصفات والامتثال' }
      ]
    }
  },

  'construct-ai': {
    id: {
      name: 'Construct AI',
      tagline: 'Pengawasan Lapangan & Progres Proyek Berbasis AI.',
      description: 'Sistem monitoring cerdas lokasi konstruksi menggunakan analitik visual CCTV, pelaporan mandiri harian, audit K3 otomatis, dan integrasi kurva-S.',
      categoryLabel: 'Industri Spesifik',
      targetIndustries: ['Konstruksi', 'Infrastruktur', 'EPC', 'Pengembang Properti', 'BUMN Karya'],
      keyFeatures: [
        'Deteksi Otomatis APD (Helm & Rompi K3)',
        'Analisis Progres Fisik vs Rencana Kurva-S',
        'Deteksi Zona Bahaya & Perimeter Pelanggaran',
        'Pelaporan Harian Mandiri (Daily Log AI)',
        'Pendeteksian Dini Kendala Material di Lapangan'
      ],
      useCases: [
        'Audit K3 24/7 tanpa perlu pengawas manual di setiap lantai proyek.',
        'Validasi klaim progres kontraktor dengan citra kamera berkala.',
        'Peringatan otomatis saat ada pekerja memasuki zona crane aktif.'
      ],
      metrics: [
        { label: 'Pelanggaran K3', value: 'Turun 78%', desc: 'Peringatan Real-Time' },
        { label: 'Verifikasi Progres', value: 'Harian', desc: 'Otomatis vs Kurva-S' },
        { label: 'Waktu Pelaporan', value: 'Pangkas 60%', desc: 'Log Proyek Digital' }
      ]
    },
    en: {
      name: 'Construct AI',
      tagline: 'AI-Powered Construction Site Oversight & Progress Verification.',
      description: 'Intelligent jobsite monitoring platform combining computer vision CCTV telemetry, automated PPE safety audits, daily logs, and physical S-curve tracking.',
      categoryLabel: 'Industry Specific',
      targetIndustries: ['Construction', 'Infrastructure', 'EPC Contractors', 'Property Developers', 'Public Works'],
      keyFeatures: [
        'Autonomous PPE & Helmet Detection',
        'Physical Progress vs S-Curve Analytics',
        'Hazard Zone Breach & Perimeter Alerts',
        'Autonomous Daily Site Log Generation',
        'Material Staging & Congestion Detection'
      ],
      useCases: [
        '24/7 continuous HSE safety compliance without manual floor marshals.',
        'Subcontractor progress claim verification via calibrated time-lapse vision.',
        'Immediate audible alerts when ground personnel breach live crane radiuses.'
      ],
      metrics: [
        { label: 'Safety Violations', value: 'Down 78%', desc: 'Zero-Latency Alerts' },
        { label: 'Progress Tracking', value: 'Daily', desc: 'Automated vs S-Curve' },
        { label: 'Reporting Overhead', value: '-60%', desc: 'Automated Field Logs' }
      ]
    },
    ja: {
      name: 'Construct AI',
      tagline: 'AIによる現場監督と進捗管理の高度化。',
      description: '現場CCTVカメラ映像解析、ヘルメット等安全保護具の自動着用検知、S字カーブ工程表と連動した進捗検証を行う建設特化型AI。',
      categoryLabel: '業界特化型',
      targetIndustries: ['ゼネコン', 'インフラ建設', 'EPC事業者', 'デベロッパー', '公共事業'],
      keyFeatures: [
        '保護具（ヘルメット・安全ベスト）着用自動検知',
        '現場進捗とS字カーブ工程表の自動照合',
        '重機作業域・危険エリア侵入即時アラート',
        '現場日報・施工ログの自動作成',
        '現場資材滞留および搬入遅延の早期検知'
      ],
      useCases: [
        '各工区に監視員を常駐させることなく24時間安全衛生を自動巡視。',
        '定点カメラ画像を用いた下請け業者の出来高請求妥当性検証。',
        'クレーン旋回範囲への作業員立ち入り時の即時退避警告。'
      ],
      metrics: [
        { label: '安全違反件数', value: '78% 削減', desc: 'リアルタイム警報' },
        { label: '進捗確認頻度', value: '毎日自動', desc: '計画工程との比較' },
        { label: '日報作成時間', value: '60% 短縮', desc: 'デジタル自動化' }
      ]
    },
    ar: {
      name: 'Construct AI',
      tagline: 'إشراف ميداني ذكي والتحقق الفوري من تقدم مشاريع الإنشاءات.',
      description: 'منصة ذكية لمراقبة مواقع البناء باستخدام الرؤية الحاسوبية لكاميرات CCTV، والتدقيق التلقائي لمعدات السلامة المهنية، ومطابقة التقدم مع منحنى S.',
      categoryLabel: 'حلول القطاعات',
      targetIndustries: ['شركات الإنشاءات', 'مشاريع البنية التحتية', 'المقاولات العامة EPC', 'التطوير العقاري', 'الأشغال العامة'],
      keyFeatures: [
        'اكتشاف آلي لارتداء خوذات وسترات السلامة المهنية (PPE)',
        'تحليل تقدم الإنجاز الفعلي مقابل المخطط (منحنى S)',
        'إنذار فوري عند اختراق المناطق المحظورة وحرم الرافعات',
        'توليد آلي للتقارير اليومية وسجلات العمل الميدانية',
        'كشف تكدس المواد وتأخير التوريدات بالموقع'
      ],
      useCases: [
        'تدقيق معايير السلامة والصحة المهنية على مدار الساعة دون الحاجة لمشرفين في كل طابق.',
        'التحقق من مطالبات مستخلصات المقاولين عبر تحليل صور الكاميرات الدورية.',
        'إطلاق تحذيرات صوتية فورية عند اقتراب العمال من مناطق عمل الرافعات الثقيلة.'
      ],
      metrics: [
        { label: 'مخالفات السلامة', value: 'انخفاض 78%', desc: 'تنبيهات فورية لحظية' },
        { label: 'التحقق من التقدم', value: 'يومي مؤتمت', desc: 'مقارنة مع منحنى S' },
        { label: 'وقت إعداد التقارير', value: 'وفر 60%', desc: 'سجلات رقمية فورية' }
      ]
    }
  },

  'maintenance-ai': {
    id: {
      name: 'Maintenance AI',
      tagline: 'Prediksi Kerusakan Sebelum Terjadi.',
      description: 'Platform predictive maintenance yang memantau getaran, temperatur, jam operasi mesin industri dan armada kapal untuk mencegah breakdown tak terencana.',
      categoryLabel: 'Industri Spesifik',
      targetIndustries: ['Manufaktur', 'Pembangkit Listrik', 'Armada Kapal', 'Pertambangan', 'Minyak & Gas'],
      keyFeatures: [
        'Analisis Spektrum Getaran Mesin',
        'Deteksi Dini Overheating & Arus Berlebih',
        'Perhitungan RUL (Remaining Useful Life)',
        'Integrasi Sistem CMMS & Work Order Otomatis',
        'Peringatan Anomali Sensor Waktu Nyata'
      ],
      useCases: [
        'Mendeteksi keausan bearing pompa turbin 3 minggu sebelum terjadi kegagalan fatal.',
        'Optimasi interval penggantian oli genset berdasarkan kondisi riil bukan jadwal kalender.',
        'Penerbitan work order otomatis ke tim teknisi lapangan saat anomali terdeteksi.'
      ],
      metrics: [
        { label: 'Unplanned Downtime', value: 'Turun 42%', desc: 'Intervensi Dini Terjadwal' },
        { label: 'Biaya Suku Cadang', value: 'Hemat 25%', desc: 'Hindari Kerusakan Berantai' },
        { label: 'Akurasi Prediksi', value: '94.8%', desc: 'Machine Learning Model' }
      ]
    },
    en: {
      name: 'Maintenance AI',
      tagline: 'Predict Equipment Failure Before It Occurs.',
      description: 'Industrial predictive maintenance platform tracking vibration, acoustics, thermal signatures, and run-hours to eliminate costly unplanned downtime.',
      categoryLabel: 'Industry Specific',
      targetIndustries: ['Manufacturing', 'Power Plants', 'Maritime Fleets', 'Mining', 'Oil & Gas'],
      keyFeatures: [
        'Vibration Spectrum Anomaly Analysis',
        'Thermal Runaway & Overcurrent Early Warning',
        'Remaining Useful Life (RUL) Computation',
        'Automated CMMS Work Order Dispatch',
        'Sub-second Sensor Ingestion & Alerting'
      ],
      useCases: [
        'Detecting turbine bearing micro-wear 3 weeks prior to catastrophic failure.',
        'Condition-based lubrication scheduling replacing arbitrary calendar intervals.',
        'Automated ticket creation in enterprise ERP with root cause diagnostics.'
      ],
      metrics: [
        { label: 'Unplanned Downtime', value: '-42%', desc: 'Proactive Early Intervention' },
        { label: 'Spares Inventory Cost', value: '-25%', desc: 'Prevent Cascade Failures' },
        { label: 'Prediction Accuracy', value: '94.8%', desc: 'Multi-harmonic ML Models' }
      ]
    },
    ja: {
      name: 'Maintenance AI',
      tagline: '故障を未然に予知・保全する。',
      description: '産業機械、船舶エンジン、発電設備の振動、温度、稼働時間をリアルタイム解析し、ダウンタイムを未然に防ぐ予知保全プラットフォーム。',
      categoryLabel: '業界特化型',
      targetIndustries: ['製造業', '発電プラント', '海運船団', '鉱山・重工', '石油・ガス'],
      keyFeatures: [
        '高精度振動スペクトル異常解析',
        '異常発熱・過電流早期警報検知',
        '残存耐用寿命（RUL）精密推計',
        'CMMS・保全管理システム自動連携',
        'ミリ秒単位のセンサーテレメトリ監視'
      ],
      useCases: [
        'タービン軸受の微細な摩耗を致命的故障の3週間前に自動検知。',
        '定周期保全から状態監視基準保全（CBM）への移行による費用削減。',
        '異常検知時に原因診断付き修理作業指示書をERPへ自動起票。'
      ],
      metrics: [
        { label: '突発故障停止時間', value: '42% 削減', desc: '計画保全へのシフト' },
        { label: '予備部品コスト', value: '25% 抑制', desc: '二次被害の防止' },
        { label: '予知検出精度', value: '94.8%', desc: '機械学習モデル検証' }
      ]
    },
    ar: {
      name: 'Maintenance AI',
      tagline: 'التنبؤ بالأعطال الميكانيكية قبل حدوثها.',
      description: 'منصة متقدمة للصيانة التنبؤية تراقب الاهتزازات والحرارة وساعات تشغيل المحركات والمعدات لمنع التوقفات غير المخططة وحماية أصول المصنع.',
      categoryLabel: 'حلول القطاعات',
      targetIndustries: ['التصنيع', 'محطات الطاقة', 'الأساطيل البحرية', 'التعدين', 'النفط والغاز'],
      keyFeatures: [
        'تحليل طيف الاهتزازات وكشف الشذوذ الميكانيكي',
        'إنذار مبكر ضد الارتفاع الحراري والأحمال الزائدة',
        'حساب العمر التشغيلي المتبقي بدقة (RUL)',
        'توليد آلي لأوامر العمل في أنظمة CMMS و ERP',
        'استيعاب لحظي لبيانات الحساسات الصناعية'
      ],
      useCases: [
        'اكتشاف تآكل رولمان بلي التوربينات قبل 3 أسابيع من الانهيار التام.',
        'جدولة الصيانة بحسب الحالة الفعلية للمعدة بدلاً من التقدير الزمني التقليدي.',
        'إصدار تذاكر الإصلاح فورياً للفرق الميدانية مدعومة بتشخيص الأسباب الجذرية.'
      ],
      metrics: [
        { label: 'التوقف غير المخطط', value: 'انخفاض 42%', desc: 'تدخل استباقي مجدول' },
        { label: 'تكاليف قطع الغيار', value: 'توفير 25%', desc: 'منع تلف الأجزاء المجاورة' },
        { label: 'دقة التنبؤ', value: '94.8%', desc: 'نماذج تعلم آلي صناعية' }
      ]
    }
  },

  'aegis-maritime': {
    id: {
      name: 'Aegis Maritime Intelligence',
      tagline: 'Kecerdasan Buatan Tanpa Batas di Laut Lepas.',
      description: 'Sistem edge AI otonom kapal tanker & niaga yang beroperasi 100% offline di tengah samudra, menganalisis sensor mesin, bahan bakar, dan navigasi satelit.',
      categoryLabel: 'Flagship Maritime',
      targetIndustries: ['Pelayaran Tanker', 'Offshore Energy', 'Operator Kargo', 'Galangan Kapal', 'Port Authority'],
      keyFeatures: [
        'Edge AI 100% Offline Tanpa Koneksi Internet',
        'Efisiensi Bahan Bakar & Pemilihan Rute Cuaca',
        'Prediksi Kerusakan Mesin Induk & Aux Engine',
        'Sinkronisasi Hemat Bandwidth VSAT Kompresi Tinggi',
        'Log Elektronik Mandiri Sesuai Standar IMO'
      ],
      useCases: [
        'Diagnostik kerusakan generator saat kapal berada di zona tanpa sinyal satelit.',
        'Optimasi putaran RPM mesin menghemat 12 ton bunker fuel per trip pelayaran.',
        'Otomasi pelaporan kepatuhan emisi karbon CII & EEXI kepada otoritas pelabuhan.'
      ],
      metrics: [
        { label: 'Konsumsi BBM', value: 'Hemat 8 - 14%', desc: 'Optimalisasi RPM & Rute' },
        { label: 'Downtime Kapal', value: 'Turun 55%', desc: 'Pemantauan Mesin Dini' },
        { label: 'Throughput VSAT', value: '95% Lebih Hemat', desc: 'Kompresi Vektor Cerdas' }
      ]
    },
    en: {
      name: 'Aegis Maritime Intelligence',
      tagline: 'Autonomous Maritime AI Operating Beyond the Horizon.',
      description: 'Zero-downtime edge AI ecosystem deployed aboard oceanic tankers and cargo fleets. Runs 100% offline in deep-sea conditions with heavy sensor fusion.',
      categoryLabel: 'Flagship Maritime',
      targetIndustries: ['Tanker Fleets', 'Offshore Energy', 'Container Carriers', 'Shipyards', 'Port Authorities'],
      keyFeatures: [
        '100% Offline Edge Inference at Mid-Ocean',
        'Dynamic Weather Routing & Bunker Fuel Optimization',
        'Main Engine & Auxiliary Predictive Telemetry',
        'Bandwidth-Frugal High-Compression VSAT Sync',
        'IMO Compliance & Electronic Logbook Automation'
      ],
      useCases: [
        'Auxiliary generator fault diagnostics when vessel is 1,200 miles from nearest coast.',
        'Dynamic voyage RPM trimming saving 12 metric tons of fuel per trans-oceanic voyage.',
        'Automated CII and EEXI decarbonization compliance filings for port state authorities.'
      ],
      metrics: [
        { label: 'Bunker Consumption', value: '8 - 14% Saved', desc: 'Voyage Speed Profile Trim' },
        { label: 'Aux Engine Downtime', value: '-55%', desc: 'Acoustic & Vibration Guard' },
        { label: 'Satellite Data Usage', value: '95% Frugal', desc: 'Differential Edge Vector Sync' }
      ]
    },
    ja: {
      name: 'Aegis Maritime Intelligence',
      tagline: '大洋を航行する船舶のための自律型海洋AI。',
      description: '洋上において通信が途絶した環境でも100%自律稼働。主機エンジンセンサー、気象海象、燃費データを瞬時に解析するエッジAIプラットフォーム。',
      categoryLabel: '旗艦・海洋ソリューション',
      targetIndustries: ['外航タンカー', '海洋エネルギー・オフショア', 'コンテナ船団', '造船・修繕', '港湾管理'],
      keyFeatures: [
        '外洋完全オフライン環境対応エッジAI推論',
        '最適航路選定（ウェザールーティング）＆バンカー燃料節減',
        '主機・補機エンジンの予知保全テレメトリ',
        '狭帯域VSATに最適化された極小差分同期技術',
        '国際海事機関（IMO）規格適合の電子航海日誌自動化'
      ],
      useCases: [
        '通信の届かない公海上での発電機異常のオフライン自動診断と復旧手順提示。',
        '海象予測と機関負荷最適化により1航海あたり12トンのC重油を削減。',
        'CII（燃費実績格付け）およびEEXI規制対応レポートの寄港前自動生成。'
      ],
      metrics: [
        { label: '燃料消費量', value: '8〜14% 削減', desc: '最適回転数・航路制御' },
        { label: '船舶機関停止', value: '55% 減少', desc: '洋上での早期予知診断' },
        { label: '衛星通信容量', value: '95% 削減', desc: '超高圧縮ベクトル同期' }
      ]
    },
    ar: {
      name: 'Aegis Maritime Intelligence',
      tagline: 'ذكاء اصطناعي بحري مستقل يعمل في أعالي البحار بلا انقطاع.',
      description: 'نظام حوسبة حافة (Edge AI) مستقل مثبت على متن ناقلات النفط وسفن الشحن، يعمل بكفاءة 100% دون الحاجة لإنترنت في وسط المحيط لتحليل المحركات والوقود.',
      categoryLabel: 'الحل البحري الرائد',
      targetIndustries: ['أساطيل الناقلات', 'منصات الطاقة البحرية', 'سفن الحاويات', 'أحواض بناء السفن', 'سلطات الموانئ'],
      keyFeatures: [
        'استدلال حافة محلي 100% بلا اتصال بالإنترنت في أعالي البحار',
        'توجيه مسارات الملاحة بحسب الطقس وتوفير وقود السفن',
        'مراقبة تنبؤية فورية للمحرك الرئيسي والمولدات المساعدة',
        'مزامنة فائقة الضغط عبر أقمار VSAT لتوفير سعة النطاق',
        'أتمتة سجلات الملاحة الإلكترونية المعتمدة من منظمة IMO'
      ],
      useCases: [
        'تشخيص فوري لأعطال المولدات أثناء الإبحار في مناطق انقطاع تغطية الأقمار الصناعية.',
        'تعديل سرعات دوران المحركات لتوفير 12 طناً من وقود السفن في كل رحلة بحرية.',
        'إصدار تقارير الامتثال لانبعاثات الكربون المنظمة دولياً (CII و EEXI) لسلطات الموانئ.'
      ],
      metrics: [
        { label: 'استهلاك الوقود', value: 'وفر 8 - 14%', desc: 'تحسين المسار وسرعة المحرك' },
        { label: 'أعطال السفن', value: 'انخفاض 55%', desc: 'صيانة تنبؤية مستمرة' },
        { label: 'استهلاك بيانات الأقمار', value: 'توفير 95%', desc: 'مزامنة ضغط المتجهات' }
      ]
    }
  },

  'aegis-cyber-ai': {
    id: {
      name: 'Aegis Cyber AI',
      tagline: 'Pertahanan Siber Otonom Skala Enterprise.',
      description: 'Deteksi ancaman siber real-time, analisis anomali lalu lintas jaringan, dan mitigasi otomatis insiden keamanan dengan arsitektur Zero Trust terintegrasi.',
      categoryLabel: 'Core AI & Keamanan',
      targetIndustries: ['Perbankan & Fintech', 'BUMN & Korporasi', 'Infrastruktur Kritis', 'Pemerintahan', 'Data Center'],
      keyFeatures: [
        'Deteksi Ancaman AI Lintas Protokol (NDR)',
        'Isolasi Endpoint Otonom Saat Serangan Berlangsung',
        'Analisis Forensik & Rekonstruksi Kill-Chain',
        'Kepatuhan Standar ISO 27001 & NIST CSF',
        'Integrasi SIEM/SOAR & Fortinet Egress Control'
      ],
      useCases: [
        'Menghentikan serangan ransomware lateral dalam 400 milidetik sebelum merambah server cadangan.',
        'Mendeteksi eksfiltrasi data tersembunyi via DNS tunneling yang luput dari firewall konvensional.',
        'Otomasi respons tiket insiden tim SOC (Security Operations Center) 24/7.'
      ],
      metrics: [
        { label: 'Waktu Tanggap (MTTR)', value: '< 1 Detik', desc: 'Mitigasi Otonom' },
        { label: 'False Positive', value: 'Turun 92%', desc: 'Korelasi Kontekstual' },
        { label: 'Cakupan Proteksi', value: 'Zero Trust', desc: 'Jaringan & Endpoint' }
      ]
    },
    en: {
      name: 'Aegis Cyber AI',
      tagline: 'Autonomous Enterprise Threat Defense & Zero Trust Telemetry.',
      description: 'Real-time autonomous cyber defense system detecting zero-day anomalies, lateral movements, and executing millisecond containment across enterprise networks.',
      categoryLabel: 'Core AI & Security',
      targetIndustries: ['Banking & Fintech', 'Critical Infrastructure', 'Government Ministries', 'State Enterprises', 'Hyperscale Data Centers'],
      keyFeatures: [
        'AI Network Detection & Response (NDR)',
        'Autonomous Endpoint Containment & Quarantine',
        'Full Attack Kill-Chain Forensic Reconstruction',
        'ISO 27001 & NIST CSF Continuous Alignment',
        'Bi-directional SIEM/SOAR Orchestration'
      ],
      useCases: [
        'Quarantining lateral ransomware movement within 400 milliseconds before snapshot encryption.',
        'Exposing stealthy data exfiltration attempts over encrypted DNS tunnels.',
        '24/7 automated SOC incident triage eliminating tier-1 analyst alert fatigue.'
      ],
      metrics: [
        { label: 'Mean Time to Respond', value: '< 1 Second', desc: 'Autonomous Containment' },
        { label: 'False Positives', value: '-92%', desc: 'Context-Aware Correlation' },
        { label: 'Defense Coverage', value: 'Zero Trust', desc: 'Perimeter & Microsegments' }
      ]
    },
    ja: {
      name: 'Aegis Cyber AI',
      tagline: '自律型エンタープライズ・サイバー防衛。',
      description: 'ゼロデイ攻撃や未知の脅威をミリ秒単位で検知・隔離。組織内ネットワークを自律的に防衛するゼロトラストAIセキュリティプラットフォーム。',
      categoryLabel: 'コアAI・セキュリティ',
      targetIndustries: ['金融・フィンテック', '重要インフラ', '政府省庁', '通信・DC', '大企業グループ'],
      keyFeatures: [
        'AIネットワーク脅威検知・対応（NDR）',
        'インシデント発生時の端末自律隔離',
        '攻撃キルチェーンのフォレンジック自動復元',
        'ISO 27001・NIST CSF基準への適合性維持',
        '既存SIEM/SOAR環境との完全双方向連携'
      ],
      useCases: [
        'ランサムウェアの水平展開（ラテラルムーブメント）を400ミリ秒で自動遮断。',
        '従来型ファイアウォールをすり抜けるDNSトンネリングによる情報流出を即座に特定。',
        '24時間365日のSOCアラートトリアージ自動化による警戒疲労の解消。'
      ],
      metrics: [
        { label: 'インシデント対処時間', value: '1秒未満', desc: '自律的即時封じ込め' },
        { label: '誤検知率（FP）', value: '92% 削減', desc: '文脈相関エンジン' },
        { label: '防衛アーキテクチャ', value: 'ゼロトラスト', desc: '境界＆内部マイクロ分離' }
      ]
    },
    ar: {
      name: 'Aegis Cyber AI',
      tagline: 'الدفاع السيبراني الذاتي للمؤسسات الكبرى وحماية الثقة الصفرية.',
      description: 'نظام دفاع سيبراني ذكي يكتشف التهديدات غير المعروفة (Zero-Day) والشذوذ في حركة الشبكة ويعزل التهديدات في أجزاء من الثانية بتطبيق مبدأ Zero Trust.',
      categoryLabel: 'الذكاء الأساسي والأمن',
      targetIndustries: ['القطاع المصرفي والمالي', 'البنية التحتية الحرجة', 'الوزارات الحكومية', 'الشركات الوطنية الكبرى', 'مراكز البيانات'],
      keyFeatures: [
        'كشف واستجابة شبكية مدعومة بالذكاء الاصطناعي (NDR)',
        'عزل فوري ذاتي للأجهزة المصابة أثناء الهجوم',
        'إعادة بناء جنائية رقمية لمسار الهجوم (Kill-Chain)',
        'امتثال مستمر لمعايير ISO 27001 و NIST CSF',
        'تكامل كامل مع أنظمة إدارة الحوادث SIEM و SOAR'
      ],
      useCases: [
        'إيقاف انتشار برمجيات الفدية الخبيثة جانبياً في 400 جزء من الثانية قبل تشفير النسخ الاحتياطية.',
        'كشف محاولات تسريب البيانات السرية عبر قنوات DNS المشفرة التي تعجز عنها الجدران النارية التقليدية.',
        'أتمتة فرز وتصنيف بلاغات مركز العمليات الأمنية (SOC) على مدار الساعة.'
      ],
      metrics: [
        { label: 'زمن الاستجابة (MTTR)', value: '< ثانية واحدة', desc: 'عزل فوري مؤتمت' },
        { label: 'الإنذارات الخاطئة', value: 'انخفاض 92%', desc: 'تحليل دقيق للسياق' },
        { label: 'نموذج الحماية', value: 'الثقة الصفرية', desc: 'تطويق كامل للشبكة' }
      ]
    }
  },

  'smart-waste-ai': {
    id: {
      name: 'Smart Waste AI',
      tagline: 'Optimalisasi Pengelolaan & Rute Limbah Cerdas.',
      description: 'Monitoring level kapasitas kontainer limbah secara visual, perutean dinamis armada pengangkut, dan pelaporan kepatuhan lingkungan terintegrasi.',
      categoryLabel: 'Armada & Operasional',
      targetIndustries: ['Kawasan Industri', 'Pemerintah Kota / Smart City', 'Pengelola Limbah B3', 'Pusat Logistik', 'Mall & Komersial'],
      keyFeatures: [
        'Deteksi Visual Kapasitas Kontainer Limbah',
        'Perutean Dinamis Pengambilan Sampah',
        'Pelaporan Manifest Limbah B3 Terverifikasi',
        'Analisis Komposisi Sampah Berbasis Kamera',
        'Dashboard Emisi Karbon Armada Pengangkut'
      ],
      useCases: [
        'Menghindari kontainer limbah meluap di area komersial dengan penjemputan berbasis status riil.',
        'Penghematan 30% biaya bahan bakar armada truk sampah melalui rute dinamis terpendek.',
        'Pencatatan digital manifest limbah berbahaya sesuai regulasi Kementerian Lingkungan Hidup.'
      ],
      metrics: [
        { label: 'Efisiensi Rute', value: '30% Hemat BBM', desc: 'Dynamic Dispatching' },
        { label: 'Insiden Overflow', value: 'Turun 95%', desc: 'Sensor Vision Real-Time' },
        { label: 'Kepatuhan Regulasi', value: '100% Digital', desc: 'Manifest B3 Otomatis' }
      ]
    },
    en: {
      name: 'Smart Waste AI',
      tagline: 'Intelligent Waste Logistics & Dynamic Route Optimization.',
      description: 'Vision-based bin capacity telemetry, dynamic collection routing, hazardous material tracking, and automated municipal environmental compliance reporting.',
      categoryLabel: 'Fleet & Operations',
      targetIndustries: ['Industrial Parks', 'Smart Cities & Municipalities', 'Hazardous Waste Handlers', 'Logistics Hubs', 'Commercial Complexes'],
      keyFeatures: [
        'Computer Vision Bin Fill-Level Telemetry',
        'Dynamic Fleet Route Optimization',
        'Hazardous Material Digital Manifest Audit',
        'Waste Classification & Recyclable Sorting',
        'Fleet Carbon Emission Tracking Dashboard'
      ],
      useCases: [
        'Eliminating unsanitary waste overflows in high-traffic hubs through on-demand collection triggers.',
        'Slashing waste truck diesel expenditure by 30% utilizing dynamic shortest-path heuristics.',
        'Automating audited tracking manifests for toxic industrial residues conforming to EPA guidelines.'
      ],
      metrics: [
        { label: 'Route Efficiency', value: '30% Fuel Cut', desc: 'Dynamic Optimization' },
        { label: 'Overflow Incidents', value: '-95%', desc: 'Vision Sensor Alerts' },
        { label: 'Compliance Audit', value: '100% Digital', desc: 'Automated Manifests' }
      ]
    },
    ja: {
      name: 'Smart Waste AI',
      tagline: 'スマート廃棄物管理・回収ルート最適化。',
      description: '画像認識によるゴミ集積容量の自動検知、収集車の動的ルート最適化、産業廃棄物マニフェストのデジタル管理を行うサステナビリティAI。',
      categoryLabel: 'フリート・運用',
      targetIndustries: ['工業団地', '自治体・スマートシティ', '産廃・環境事業者', '物流拠点', '大型商業施設'],
      keyFeatures: [
        '画像AIによるコンテナ蓄積レベル自動判定',
        '収集車両のリアルタイム動的ルート最適化',
        '産業廃棄物・危険物マニフェスト自動生成',
        'リサイクル資材・不適正混入物の自動判別',
        '車両CO2排出量モニタリングダッシュボード'
      ],
      useCases: [
        '商業施設や工業団地におけるゴミのあふれ出しをゼロ化するオンデマンド回収指示。',
        '走行ルートの自動最適化による収集トラック燃料費30%削減。',
        '環境省規制に準拠した産業廃棄物引き渡し記録の電子署名・自動保存。'
      ],
      metrics: [
        { label: '燃料消費削減', value: '30% カット', desc: '動的最適配車' },
        { label: 'あふれ発生率', value: '95% 削減', desc: '画像センシング' },
        { label: '法令遵守率', value: '100% 準拠', desc: 'マニフェスト電子化' }
      ]
    },
    ar: {
      name: 'Smart Waste AI',
      tagline: 'إدارة النفايات الذكية والتحسين الديناميكي لمسارات النقل.',
      description: 'مراقبة بصرية لمستويات امتلاء حاويات النفايات، وتوجيه أسطول الشاحنات بالمسارات المثلى، وإصدار بيانات الامتثال البيئي للنفايات الصناعية والخطرة.',
      categoryLabel: 'الأسطول والعمليات',
      targetIndustries: ['المدن الصناعية', 'البلديات والمدن الذكية', 'معالجة النفايات الخطرة', 'المراكز اللوجستية', 'المجمعات التجارية'],
      keyFeatures: [
        'استشعار بصري لمستوى امتلاء الحاويات عبر الكاميرات',
        'تحسين ديناميكي لمسارات مركبات جمع النفايات',
        'أتمتة بيانات التتبع البيئي للنفايات الخطرة',
        'تصنيف وفرز المواد القابلة لإعادة التدوير آلياً',
        'لوحة معلومات متكاملة لمراقبة الانبعاثات الكربونية'
      ],
      useCases: [
        'منع فيضان الحاويات في المناطق الحيوية عبر توجيه الشاحنات بناءً على الامتلاء الفعلي.',
        'توفير 30% من تكاليف وقود شاحنات النقل بفضل اختيار أقصر وأكفأ المسارات.',
        'إصدار بيانات رسمية رقمية مطابقة للمعايير البيئية الوطنية للنفايات الصناعية.'
      ],
      metrics: [
        { label: 'كفاءة المسارات', value: 'وفر 30% وقود', desc: 'توجيه ديناميكي ذكي' },
        { label: 'حوادث الفيضان', value: 'انخفاض 95%', desc: 'مراقبة بصرية فورية' },
        { label: 'الامتثال البيئي', value: '100% رقمي', desc: 'بيانات تتبع معتمدة' }
      ]
    }
  },

  'fleetos-ai': {
    id: {
      name: 'FleetOS AI',
      tagline: 'Manajemen Armada & Telemetri Pengemudi Terpadu.',
      description: 'Analisis telemetri kendaraan, efisiensi bahan bakar, pemantauan perilaku pengemudi (fatigue detection), dan penjadwalan servis preventif otomatis.',
      categoryLabel: 'Armada & Operasional',
      targetIndustries: ['Logistik & Ekspedisi', 'Transportasi Tambang', 'Bus & Angkutan Umum', 'Distribusi FMCG', 'Rental Alat Berat'],
      keyFeatures: [
        'Deteksi Kelelahan & Distraksi Pengemudi (DMS)',
        'Analisis Konsumsi BBM & Deteksi Pencurian Bahan Bakar',
        'Pemantauan Gaya Mengemudi (Harsh Braking/Cornering)',
        'Jadwal Servis Berkala Berbasis Jam Kerja Mesin',
        'Geofencing Pintar & Integrasi Delivery Order'
      ],
      useCases: [
        'Mengurangi risiko kecelakaan fatal truk hauling tambang melalui peringatan mikro-tidur sopir.',
        'Mendeteksi penyedotan ilegal bahan bakar solar secara real-time melalui sensor tank drop.',
        'Penyusunan jadwal maintenance armada truk distribusi berdasarkan jarak tempuh riil.'
      ],
      metrics: [
        { label: 'Insiden Kecelakaan', value: 'Turun 64%', desc: 'Driver Safety Alert' },
        { label: 'Pencurian Bahan Bakar', value: 'Eliminasi 99%', desc: 'Fuel Drop Sensor' },
        { label: 'Usia Pakai Armada', value: '+3.5 Tahun', desc: 'Perawatan Tepat Waktu' }
      ]
    },
    en: {
      name: 'FleetOS AI',
      tagline: 'Enterprise Fleet Telematics & Driver Safety Intelligence.',
      description: 'Unified commercial fleet telematics platform combining driver fatigue monitoring, fuel anomaly tracking, predictive maintenance, and autonomous dispatch.',
      categoryLabel: 'Fleet & Operations',
      targetIndustries: ['Logistics & Freight', 'Mining Haulage', 'Public Transit', 'FMCG Distribution', 'Heavy Equipment Leasing'],
      keyFeatures: [
        'In-Cabin Driver Monitoring System (DMS Fatigue Detection)',
        'Fuel Consumption Telemetry & Siphon Theft Detection',
        'Driver Behavior Scoring (Speeding, Harsh Braking)',
        'Operating-Hour Engine Service Orchestration',
        'Smart Geo-Fencing & ERP Delivery Manifest Sync'
      ],
      useCases: [
        'Preventing fatal highway collisions via instantaneous audible micro-sleep warnings.',
        'Pinpointing unauthorized fuel-tank siphoning events via differential level alerts.',
        'Synchronizing preventive tire and brake maintenance with actual road mileage.'
      ],
      metrics: [
        { label: 'Accident Rates', value: '-64%', desc: 'Proactive DMS Warnings' },
        { label: 'Fuel Theft Incidents', value: 'Zero (99% Cut)', desc: 'Real-time Drop Triggers' },
        { label: 'Vehicle Lifespan', value: '+3.5 Years', desc: 'Condition-Based Care' }
      ]
    },
    ja: {
      name: 'FleetOS AI',
      tagline: '統合型車両フリート管理＆運転テレメトリ。',
      description: '車両走行データ、燃料消費効率、ドライバーの居眠り・脇見運転検知、および稼働時間に応じた定期整備スケジュールを統合管理するフリートAI。',
      categoryLabel: 'フリート・運用',
      targetIndustries: ['貨物物流・運送', '鉱山運搬トラック', 'バス・交通事業者', '消費財流通', '重機レンタル'],
      keyFeatures: [
        '車内カメラによるドライバー疲労・居眠り検知（DMS）',
        '燃料消費効率の分析および燃料抜き取り盗難検知',
        '安全運転スコアリング（急加減速・急ハンドル解析）',
        '走行距離・実稼働時間連動の整備スケジューラー',
        '高精度ジオフェンシング＆配送伝票システム連携'
      ],
      useCases: [
        '鉱山や長距離高速道路におけるマイクロ・スリープ（瞬間居眠り）検知による事故未然防止。',
        '燃料タンク残量センサーと位置情報を連動させた不正給油・抜き取りの即時摘発。',
        '過酷な現場で運用される大型トラックのブレーキ・タイヤ摩耗に応じた点検自動手配。'
      ],
      metrics: [
        { label: '重大事故発生率', value: '64% 減少', desc: '安全運転支援アラート' },
        { label: '燃料盗難被害', value: '99% 根絶', desc: 'センサー常時監視' },
        { label: '車両資産寿命', value: '+3.5 年延伸', desc: '計画予防整備' }
      ]
    },
    ar: {
      name: 'FleetOS AI',
      tagline: 'إدارة الأساطيل الموحدة والقياس عن بُعد لسلامة السائقين.',
      description: 'منصة قياس ذكية لإدارة أساطيل النقل التجاري: مراقبة إجهاد السائقين، وتتبع استهلاك الوقود وكشف السرقات، والجدولة التلقائية للصيانة الوقائية.',
      categoryLabel: 'الأسطول والعمليات',
      targetIndustries: ['النقل والشحن اللوجستي', 'شاحنات نقل التعدين', 'حافلات النقل العام', 'توزيع السلع الاستهلاكية', 'تأجير المعدات الثقيلة'],
      keyFeatures: [
        'نظام مراقبة السائق داخل المقصورة لكشف النعاس والتشتت (DMS)',
        'تحليل دقيق لاستهلاك الوقود وكشف سحب الوقود غير المصرح به',
        'تقييم سلوك القيادة (الفرملة المفاجئة، المنعطفات الحادة، السرعة)',
        'جدولة مواعيد الصيانة بحسب ساعات التشغيل الفعلية للمحرك',
        'سياج جغرافي ذكي ومزامنة أوامر التسليم مع أنظمة ERP'
      ],
      useCases: [
        'منع الحوادث الخطيرة في شاحنات التعدين والنقل الثقيل عبر التنبيه الصوتي الفوري للنعاس.',
        'كشف السحب غير القانوني للديزل لحظياً عبر مستشعرات هبوط مستوى الوقود.',
        'تنظيم مواعيد فحص الفرامل والإطارات بحسب الكيلومترات المقطوعة على أرض الواقع.'
      ],
      metrics: [
        { label: 'معدل الحوادث', value: 'انخفاض 64%', desc: 'تنبيهات استباقية للسائق' },
        { label: 'سرقات الوقود', value: 'إحباط 99%', desc: 'مراقبة حساسات الخزان' },
        { label: 'العمر الافتراضي للمركبة', value: '+3.5 سنوات', desc: 'صيانة وقائية دورية' }
      ]
    }
  },

  'factory-twin-ai': {
    id: {
      name: 'Factory Twin AI',
      tagline: 'Digital Twin Real-Time untuk Manufaktur Modern.',
      description: 'Visualisasi 3D lini produksi pabrik, simulasi skenario kemacetan mesin (bottlenecks), dan pemantauan throughput terintegrasi dengan sensor SCADA industri.',
      categoryLabel: 'Industri Spesifik',
      targetIndustries: ['Manufaktur Otomotif', 'Elektronik & Semikonduktor', 'Makanan & Minuman', 'Farmasi', 'Pabrik Tekstil'],
      keyFeatures: [
        'Model 3D Digital Twin Lini Pabrik Real-Time',
        'Deteksi Otomatis Bottleneck & Mesin Idling',
        'Prediksi Throughput Harian vs Target Produksi',
        'Konektivitas Industri (OPC-UA, Modbus, MQTT)',
        'Simulasi Skenario "What-If" Lini Perakitan'
      ],
      useCases: [
        'Menemukan titik stasiun perakitan yang menghambat laju produksi dalam hitungan menit.',
        'Simulasi perubahan kecepatan conveyor sebelum diterapkan pada lini fisik nyata.',
        'Monitoring OEE (Overall Equipment Effectiveness) lintas cabang pabrik secara terpusat.'
      ],
      metrics: [
        { label: 'Peningkatan OEE', value: '+14.2%', desc: 'Eliminasi Bottleneck' },
        { label: 'Waktu Setup Lini', value: '50% Lebih Cepat', desc: 'Simulasi Digital 3D' },
        { label: 'Sinkronisasi Data', value: '< 100 ms', desc: 'SCADA Telemetry Stream' }
      ]
    },
    en: {
      name: 'Factory Twin AI',
      tagline: 'Real-Time Digital Twin for Precision Smart Manufacturing.',
      description: 'Interactive 3D factory floor digital twin simulating assembly bottlenecks, computing true OEE, and ingesting high-frequency industrial SCADA telemetry.',
      categoryLabel: 'Industry Specific',
      targetIndustries: ['Automotive Assembly', 'Semiconductor & Electronics', 'Food & Beverage', 'Pharmaceuticals', 'Precision Machining'],
      keyFeatures: [
        'Live 3D Production Floor Digital Twin Simulation',
        'Autonomous Assembly Bottleneck Identification',
        'Shift Throughput Forecasting vs Production Target',
        'Industrial SCADA Ingestion (OPC-UA, Modbus, MQTT)',
        'Virtual "What-If" Scenario Stress Testing'
      ],
      useCases: [
        'Pinpointing the precise robotic station causing sub-cycle micro-stoppages.',
        'Virtually testing conveyor speed adjustments prior to live physical commissioning.',
        'Centralizing multi-facility OEE tracking into a unified corporate executive dashboard.'
      ],
      metrics: [
        { label: 'OEE Uplift', value: '+14.2%', desc: 'Systemic Bottleneck Removal' },
        { label: 'Line Re-Tooling Speed', value: '2x Faster', desc: '3D Simulation Testing' },
        { label: 'Telemetry Latency', value: '< 100 ms', desc: 'Direct Edge SCADA Sync' }
      ]
    },
    ja: {
      name: 'Factory Twin AI',
      tagline: 'スマート製造のためのリアルタイム・デジタルツイン。',
      description: '工場ラインの3Dバーチャルシミュレーション、SCADAデータと連携したボトルネック自動検知、OEE（総合設備効率）最大化を実現する製造特化型AI。',
      categoryLabel: '業界特化型',
      targetIndustries: ['自動車・部品製造', '半導体・電子機器', '食品・飲料', '医薬品製造', '精密機械加工'],
      keyFeatures: [
        'リアルタイム3D工場フロア・デジタルツイン表示',
        '生産ボトルネック＆チョコ停の自動原因特定',
        'シフト別生産数・歩留まり予測シミュレーション',
        '産業用プロトコル（OPC-UA、Modbus、MQTT）対応',
        '仮想空間での「What-If」ライン構成変更検証'
      ],
      useCases: [
        '組み立て工程において微小な停止を引き起こしているステーションを数分で特定。',
        '実際のラインを停止させることなく、搬送コンベア速度の変更効果を事前検証。',
        '複数工場のOEE（設備総合効率）を本社ダッシュボードで一元的にリアルタイム比較。'
      ],
      metrics: [
        { label: '設備総合効率(OEE)', value: '+14.2% 向上', desc: '停滞工程の解消' },
        { label: 'ライン段取り替え', value: '50% 時間短縮', desc: '事前3D検証' },
        { label: 'データ同期遅延', value: '< 100 ms', desc: 'SCADA直結処理' }
      ]
    },
    ar: {
      name: 'Factory Twin AI',
      tagline: 'التوأم الرقمي في الوقت الفعلي للمصانع الذكية الحديثة.',
      description: 'محاكاة ثلاثية الأبعاد تفاعلية لأرضية المصنع وخطوط الإنتاج، مع كشف نقاط الاختناق ومراقبة كفاءة المعدات الإجمالية (OEE) بالربط المباشر مع حساسات SCADA.',
      categoryLabel: 'حلول القطاعات',
      targetIndustries: ['صناعة السيارات', 'الإلكترونيات وأشباه الموصلات', 'الأغذية والمشروبات', 'صناعة الأدوية', 'الصناعات الهندسية الدقيقة'],
      keyFeatures: [
        'محاكاة ثلاثية الأبعاد لخطوط الإنتاج في الوقت الفعلي',
        'كشف آلي لنقاط الاختناق ومحطات العمل المتوقفة',
        'توقع حجم الإنتاج اليومي ومقارنته بالمستهدفات',
        'اتصال مباشر ببروتوكولات الأتمتة الصناعية (OPC-UA, Modbus)',
        'اختبار سيناريوهات التعديل والتشغيل الافتراضي قبل التنفيذ'
      ],
      useCases: [
        'تحديد المحطة الدقيقة المسببة لتباطؤ خط التجميع في دقائق معدودة.',
        'محاكاة تغيير سرعة خطوط النقل في بيئة افتراضية قبل تطبيقها على أرض الواقع.',
        'مراقبة كفاءة المعدات الشاملة (OEE) لعدة مصانع في لوحة تحكم قيادية مركزية.'
      ],
      metrics: [
        { label: 'زيادة كفاءة المعدات OEE', value: '+14.2%', desc: 'معالجة نقاط التباطؤ' },
        { label: 'وقت تجهيز الخطوط', value: 'أسرع بمرتين', desc: 'محاكاة رقمية مسبقة' },
        { label: 'زمن استجابة البيانات', value: '< 100 م.ث', desc: 'مزامنة مباشرة مع الحساسات' }
      ]
    }
  },

  'comply-ai': {
    id: {
      name: 'Comply AI',
      tagline: 'Otomasi Kepatuhan Regulasi & Audit Eksekutif.',
      description: 'Pemetaan otomatis standar regulasi (ISO 27001, ESG, UU PDP, SNI) terhadap SOP internal perusahaan dengan bukti audit (evidence locker) terverifikasi.',
      categoryLabel: 'Dokumen & Pengadaan',
      targetIndustries: ['Perbankan & Asuransi', 'Kesehatan & Rumah Sakit', 'Korporasi Terbuka (Tbk)', 'BUMN', 'Institusi Finansial'],
      keyFeatures: [
        'Gap Analysis Regulasi Otomatis (ISO, PDP, ESG)',
        'Evidence Audit Locker Tak Dapat Diubah (Immutable)',
        'Deteksi Dini Celah Kepatuhan Klausul SOP',
        'Generator Laporan Kesiapan Audit Eksternal',
        'Pelacak Kebijakan & Regulasi Pemerintah Terbaru'
      ],
      useCases: [
        'Persiapan audit ISO 27001 tuntas dalam hitungan hari tanpa kepanikan berkas bukti.',
        'Pengecekan kesesuaian SOP perlindungan data karyawan terhadap UU PDP Indonesia.',
        'Penyusunan laporan kepatuhan ESG tahunan untuk bursa efek secara otomatis.'
      ],
      metrics: [
        { label: 'Persiapan Audit', value: '75% Lebih Cepat', desc: 'Evidence Mapping Otomatis' },
        { label: 'Temuan Audit Mayor', value: '0 Kasus', desc: 'Deteksi Celah Dini' },
        { label: 'Cakupan Regulasi', value: 'Multi-Framework', desc: 'ISO, PDP, ESG, OJK' }
      ]
    },
    en: {
      name: 'Comply AI',
      tagline: 'Autonomous Regulatory Compliance & Audit Readiness.',
      description: 'Continuous gap analysis mapping dynamic regulatory standards (ISO 27001, ESG, GDPR, Privacy Acts) against internal operational policies with immutable evidence lockers.',
      categoryLabel: 'Document & Procurement',
      targetIndustries: ['Banking & Insurance', 'Healthcare Systems', 'Public Listed Firms', 'State Enterprises', 'Fintechs'],
      keyFeatures: [
        'Automated Multi-Framework Regulatory Gap Analysis',
        'Cryptographic Immutable Audit Evidence Locker',
        'Real-Time Policy Drift & Clause Violation Detection',
        'One-Click External Auditor Package Compilation',
        'Continuous National & Global Regulatory Tracking'
      ],
      useCases: [
        'ISO 27001 surveillance audit preparation completed in days instead of months.',
        'Auditing HR and IT employee handling procedures against stringent personal data protection acts.',
        'Autonomous synthesis of annual ESG corporate sustainability disclosures.'
      ],
      metrics: [
        { label: 'Audit Readiness Velocity', value: '4x Faster', desc: 'Automated Proof Locker' },
        { label: 'Major Audit Deficiencies', value: 'Zero', desc: 'Pre-Audit AI Stress Tests' },
        { label: 'Framework Coverage', value: 'Enterprise Multi', desc: 'ISO, ESG, Data Laws, SEC' }
      ]
    },
    ja: {
      name: 'Comply AI',
      tagline: '規制コンプライアンス＆内部監査自動化。',
      description: 'ISO 27001、ESG基準、個人情報保護法等の最新規制と社内規程を常時照合し、証拠保全と監査準備レポートを自動生成するガバナンスAI。',
      categoryLabel: '文書・調達',
      targetIndustries: ['金融・保険', '医療機関・製薬', '上場企業', '公的機関', 'IT・フィンテック'],
      keyFeatures: [
        '複数規制枠組み（ISO、個人情報保護法、ESG）ギャップ自動分析',
        '改ざん不可能な監査エビデンス・ロッカー機能',
        '社内規程・SOPの条項不備や遵守漏れの即時検出',
        '外部監査人向け提出パッケージのワンクリック自動作成',
        '最新の法改正・ガイドライン更新情報の常時自動追跡'
      ],
      useCases: [
        'ISO 27001更新審査の準備作業を数か月から数日へと大幅短縮。',
        '人事・情報システム部門のデータ取り扱い手順が個人情報保護法に合致しているかを監査。',
        '証券取引所向けサステナビリティ開示（ESGレポート）のドラフト自動作成。'
      ],
      metrics: [
        { label: '監査準備時間', value: '75% 削減', desc: '証拠書類の自動照合' },
        { label: '重大指摘事項', value: 'ゼロ件達成', desc: '事前シミュレーション' },
        { label: '対応フレームワーク', value: '網羅的', desc: 'ISO, 個人情報, ESG, 金融基準' }
      ]
    },
    ar: {
      name: 'Comply AI',
      tagline: 'أتمتة الامتثال التنظيمي والجاهزية للتدقيق المؤسسي.',
      description: 'تحليل مستمر للفجوات التنظيمية بين المعايير الدولية (ISO 27001 والبيئة وحماية البيانات) والسياسات الداخلية للمؤسسة مع خزانة أدلة تدقيق غير قابلة للتعديل.',
      categoryLabel: 'المستندات والمشتريات',
      targetIndustries: ['البنوك والتأمين', 'المستشفيات والرعاية الصحية', 'الشركات المساهمة المدرجة', 'المؤسسات الحكومية', 'الشركات المالية'],
      keyFeatures: [
        'تحليل فجوات الامتثال آلياً لعدة أطر تنظيمية (ISO, ESG, حماية البيانات)',
        'خزانة أدلة تدقيق مشفرة وغير قابلة للتعديل (Immutable Locker)',
        'كشف مبكر للانحرافات في تطبيق إجراءات العمل القياسية (SOP)',
        'تجميع حزم تقارير التدقيق الخارجي بنقرة واحدة',
        'متابعة مستمرة لأحدث التحديثات التنظيمية والتشريعات الوطنية'
      ],
      useCases: [
        'إنجاز الاستعداد لتدقيق ISO 27001 في أيام معدودة دون إرباك فرق العمل بالبحث عن الأدلة.',
        'تدقيق سياسات حفظ بيانات العملاء والموظفين للتأكد من مطابقتها لأنظمة حماية البيانات الشخصية.',
        'إعداد تقارير الحوكمة والمسؤولية البيئية (ESG) السنوية للجهات الرقابية تلقائياً.'
      ],
      metrics: [
        { label: 'سرعة التحضير للتدقيق', value: 'أسرع بـ 4 أضعاف', desc: 'ربط آلي للأدلة' },
        { label: 'الملاحظات الرقابية الكبرى', value: 'صفر ملاحظة', desc: 'كشف مسبق للثغرات' },
        { label: 'الأطر المعتمدة', value: 'متعددة المعايير', desc: 'ISO, ESG, أنظمة البيانات' }
      ]
    }
  },

  'business-ai': {
    id: {
      name: 'Business AI',
      tagline: 'Asisten Intelijen Eksekutif & Tanya-Jawab Data.',
      description: 'Konversi data operasional, penjualan, dan keuangan menjadi wawasan strategis melalui dialog bahasa alami tanpa ketergantungan pada query SQL teknis.',
      categoryLabel: 'Core AI & Keamanan',
      targetIndustries: ['Eksekutif & C-Level', 'Manajemen Ritel', 'Perusahaan Distribusi', 'Konglomerasi', 'Finansial'],
      keyFeatures: [
        'Tanya Jawab Data Bahasa Alami (Text-to-Insight)',
        'Visualisasi Grafik & Tren Otomatis',
        'Peringatan Deviasi Target Penjualan & Margin',
        'Integrasi Database SQL, Data Lake, dan Spreadsheet',
        'Penyusunan Ringkasan Rapat Eksekutif Mingguan'
      ],
      useCases: [
        'Direksi menanyakan "Berapa margin bersih wilayah timur bulan ini?" dan langsung mendapatkan tabel beserta grafik tren.',
        'Menganalisis anomali lonjakan biaya operasional gudang logistik tertentu.',
        'Menghasilkan laporan executive summary dalam format presentasi secara instan.'
      ],
      metrics: [
        { label: 'Kecepatan Insight', value: '< 2 Detik', desc: 'Dari Tanya ke Visualisasi' },
        { label: 'Kemandirian Bisnis', value: 'Bebas SQL', desc: 'Bahasa Alami Intuitif' },
        { label: 'Data Governance', value: '100% RBAC', desc: 'Akses Sesuai Level Jabatan' }
      ]
    },
    en: {
      name: 'Business AI',
      tagline: 'Conversational Executive Intelligence & Natural Language Analytics.',
      description: 'Transforms multi-source ERP, financial, and operational silos into executive insights via fluent natural language without complex SQL engineering.',
      categoryLabel: 'Core AI & Security',
      targetIndustries: ['C-Suite Executives', 'Retail Chains', 'Wholesale Distribution', 'Conglomerates', 'Private Equity'],
      keyFeatures: [
        'Natural Language Text-to-Insight Query Engine',
        'Autonomous Interactive Chart & Trend Generation',
        'Sales & Operating Margin Anomaly Flagging',
        'Broad SQL, Lakehouse, and Cloud ERP Connectors',
        'Automated Executive Briefing & KPI Synthesis'
      ],
      useCases: [
        'CEO asking "Which product lines suffered margin compression this quarter?" and receiving instant decomposed waterfall charts.',
        'Detecting uncharacteristic operational cost surges across regional fulfillment centers.',
        'Autonomous drafting of board-ready performance briefing packs.'
      ],
      metrics: [
        { label: 'Time to Insight', value: '< 2 Seconds', desc: 'Natural Language to Graph' },
        { label: 'Technical Dependency', value: 'Zero SQL', desc: 'Democratized Enterprise Data' },
        { label: 'Role Governance', value: '100% Enforced', desc: 'Granular Column/Row Level' }
      ]
    },
    ja: {
      name: 'Business AI',
      tagline: 'エグゼクティブ・インテリジェンス＆自然言語データ分析。',
      description: '財務、販売、在庫などの企業データを自然言語の対話形式で瞬時に集計・可視化。専門的なSQL記述を必要とせず、迅速な経営判断を強力に支援。',
      categoryLabel: 'コアAI・セキュリティ',
      targetIndustries: ['経営陣・役員会', 'リテール・流通', '総合商社', 'グループ持株会社', '投資・金融'],
      keyFeatures: [
        '自然言語によるデータ問い合わせ（Text-to-Insight）',
        'グラフ・トレンドチャートの自動描画生成',
        '売上未達・利益率急減の早期アラート検知',
        '各種SQL、ERP、DWH、スプレッドシート連携',
        '週次エグゼクティブ経営サマリーの自動要約'
      ],
      useCases: [
        '役員が「今期の特定拠点の営業利益率の推移は？」と尋ねるだけで、数秒でグラフと分析要因を表示。',
        '特定の物流拠点における在庫保管費用の異常な高騰を自動特定。',
        '取締役会向けの業績報告資料やKPIサマリーを短時間で自動作成。'
      ],
      metrics: [
        { label: '回答生成速度', value: '2秒未満', desc: '質問からグラフ表示まで' },
        { label: 'SQL不要化', value: '100%', desc: '自然言語による直感操作' },
        { label: '権限統制', value: '完全準拠', desc: '役職に応じた閲覧制限' }
      ]
    },
    ar: {
      name: 'Business AI',
      tagline: 'المساعد الذكي للإدارة التنفيذية وتحليلات البيانات باللغة الطبيعية.',
      description: 'تحويل بيانات المبيعات والمالية والعمليات إلى رؤى استراتيجية تفاعلية عبر الحوار باللغة الطبيعية، دون الحاجة لكتابة استعلامات SQL التقنية المعقدة.',
      categoryLabel: 'الذكاء الأساسي والأمن',
      targetIndustries: ['الإدارة العليا وصناع القرار', 'سلاسل التجزئة', 'شركات التوزيع الكبرى', 'المجموعات القابضة', 'الشركات المالية'],
      keyFeatures: [
        'استعلام فوري عن البيانات باللغة الطبيعية (Text-to-Insight)',
        'توليد آلي للرسوم البيانية والاتجاهات التفاعلية',
        'تنبيهات تلقائية لتباين هوامش الأرباح والمبيعات عن المستهدف',
        'ربط شامل بقواعد بيانات SQL وأنظمة ERP ومستودعات البيانات',
        'إعداد تقارير ملخصة موجزة للاجتماعات التنفيذية'
      ],
      useCases: [
        'سؤال المدير التنفيذي: "ما هو صافي أرباح الفروع الشرقية لهذا الربع؟" لتظهر الإجابة في جدول ورسم بياني فوري.',
        'كشف وتحليل أسباب الارتفاع غير المعتاد في تكاليف تشغيل أحد المستودعات اللوجستية.',
        'تجهيز الملخصات التنفيذية وجداول مؤشرات الأداء الرئيسية لاجتماعات مجالس الإدارة تلقائياً.'
      ],
      metrics: [
        { label: 'سرعة استخراج الرؤى', value: '< ثانيتان', desc: 'من السؤال إلى الرسم البياني' },
        { label: 'سهولة الاستخدام', value: 'بدون SQL', desc: 'لغة طبيعية مبسطة' },
        { label: 'حوكمة الصلاحيات', value: '100% RBAC', desc: 'حسب المستوى الوظيفي' }
      ]
    }
  },

  'aegis-private-ai': {
    id: {
      name: 'Aegis Private AI Engine',
      tagline: 'Kedaulatan Data Penuh Tanpa Kebocoran ke Pihak Ketiga.',
      description: 'Infrastruktur AI lokal (On-Premise) yang berjalan di pusat data fisik organisasi Anda, terisolasi penuh dari internet publik dengan performa komputasi tinggi.',
      categoryLabel: 'Core Platform',
      targetIndustries: ['Perbankan & Finansial', 'Pertahanan & Intelijen', 'Kementerian Strategis', 'Rumah Sakit', 'Infrastruktur Kritis'],
      keyFeatures: [
        'Deployment 100% Air-Gapped Tanpa Internet',
        'Kedaulatan Data Sesuai Regulasi UU PDP',
        'Fine-Tuned Open Source Models (Llama 3, Mistral, DeepSeek)',
        'Enkripsi Data At-Rest & In-Transit Berstandar Militer',
        'Optimasi Inferensi Rendah Latensi via Hardware Akselerator'
      ],
      useCases: [
        'Analisis dokumen intelijen pertahanan tanpa risiko kebocoran ke server luar negeri.',
        'Pemrosesan data transaksi nasabah bank dengan kepatuhan regulasi kerahasiaan ketat.',
        'Diagnosis data rekam medis pasien rumah sakit terlindungi standar privasi tinggi.'
      ],
      metrics: [
        { label: 'Kebocoran Cloud', value: '0% Mutlak', desc: 'Tanpa Akses Keluar' },
        { label: 'Latensi Inferensi', value: '< 25 ms', desc: 'Komputasi On-Premise' },
        { label: 'Kepatuhan Regulasi', value: '100%', desc: 'UU PDP & Standar Audit' }
      ]
    },
    en: {
      name: 'Aegis Private AI Engine',
      tagline: 'Absolute Sovereign Intelligence with Zero External Data Leakage.',
      description: 'Fully isolated on-premise AI foundation running inside your physical datacenters. Zero public cloud dependencies, zero telemetry egress, maximum enterprise control.',
      categoryLabel: 'Core Platform',
      targetIndustries: ['Banking & Finance', 'Defense & Intelligence', 'Critical Ministries', 'Healthcare', 'Strategic Infrastructure'],
      keyFeatures: [
        '100% Air-Gapped Zero-Egress On-Premise Deployment',
        'Full Data Sovereignty Aligned with National Acts',
        'Hardened Local Models (Llama 3, Mistral, DeepSeek Enterprise)',
        'FIPS 140-2 Level 3 Hardware Security Module (HSM) Integration',
        'Ultra-Low Latency Inference with On-Prem GPU Acceleration'
      ],
      useCases: [
        'Analyzing classified intelligence dossiers with mathematical certainty of zero data exfiltration.',
        'Core banking transaction reconciliation within air-gapped sovereign boundaries.',
        'Processing electronic health records strictly within local hospital infrastructure.'
      ],
      metrics: [
        { label: 'Cloud Leakage', value: 'Absolute Zero (0%)', desc: 'Air-Gapped Isolation' },
        { label: 'Inference Latency', value: '< 25 ms', desc: 'Dedicated Local Hardware' },
        { label: 'Regulatory Compliance', value: '100% Sovereign', desc: 'Exceeds Audit Baselines' }
      ]
    },
    ja: {
      name: 'Aegis Private AI Engine',
      tagline: '外部流出を完全遮断する究極のデータ主権AI基盤。',
      description: '自社の物理データセンター内で100%隔離運用されるオンプレミス型AIインフラ。パブリッククラウドに一切依存せず、機密データを強固に保護。',
      categoryLabel: '基盤プラットフォーム',
      targetIndustries: ['銀行・金融', '防衛・情報機関', '重要省庁', '医療機関', '重要インフラ'],
      keyFeatures: [
        '100% 完全隔離エアギャップ導入（インターネット接続不要）',
        'データ主権および厳格な個人情報保護法準拠',
        '自社特化型ファインチューニング（Llama 3, Mistral, DeepSeek）',
        'FIPS 140-2 レベル3 暗号化ハードウェアHSM連携',
        'NVIDIA TensorRT-LLM による極小レイテンシ高速推論'
      ],
      useCases: [
        '国家機密・防衛情報文書を外部への情報漏洩リスク皆無で意味論解析。',
        '機密保持が義務付けられた金融取引や顧客資産データの安全な社内照会。',
        '厳格な個人情報保護規制下における電子カルテおよび医療データの活用。'
      ],
      metrics: [
        { label: '外部流出リスク', value: '絶対ゼロ (0%)', desc: '外部通信完全遮断' },
        { label: '推論レイテンシ', value: '< 25 ms', desc: 'オンプレミスGPU高速化' },
        { label: 'データ主権遵守', value: '100% 適合', desc: '国内外のセキュリティ監査クリア' }
      ]
    },
    ar: {
      name: 'Aegis Private AI Engine',
      tagline: 'سيادة مطلقة على البيانات مع منع كامل لتسريب أي بايت للخارج.',
      description: 'بنية تحتية متطورة للذكاء الاصطناعي ونماذج LLM تعمل محلياً بنسبة 100% (On-Premise) داخل مراكز بيانات مؤسستك معزولة تماماً عن شبكة الإنترنت.',
      categoryLabel: 'المنصة الأساسية',
      targetIndustries: ['القطاع المصرفي والمالي', 'الدفاع والأجهزة الأمنية', 'الوزارات السيادية', 'الرعاية الصحية', 'البنية التحتية الحرجة'],
      keyFeatures: [
        'نشر معزول محلياً بنسبة 100% (Air-Gapped دون أي اتصال بالإنترنت)',
        'سيادة كاملة على البيانات مطابقة للأنظمة الوطنية والخصوصية',
        'نماذج ذكاء اصطناعي مفتوحة المصدر مدربة ومخصصة (Llama 3, DeepSeek)',
        'تشفير عسكري للبيانات أثناء التخزين والنقل بمعيار FIPS 140-2 المستوى 3',
        'معالجة استدلال فائقة السرعة بواسطة شرائح NVIDIA TensorRT-LLM'
      ],
      useCases: [
        'تحليل الوثائق الاستخباراتية والأمنية الحساسة دون أي مخاطرة بتسريبها لخوادم أجنبية.',
        'تدقيق المعاملات المالية والمصرفية المعقدة مع ضمان بقاء البيانات داخل خوادم البنك.',
        'تحليل السجلات الطبية والسريرية المحمية بقوانين سرية المرضى الصارمة.'
      ],
      metrics: [
        { label: 'تسريب السحابة', value: '0% مطلق', desc: 'لا يوجد أي تدفق خارجي' },
        { label: 'زمن الاستجابة', value: '< 25 م.ث', desc: 'معالجة محلية على السيرفر' },
        { label: 'الامتثال السيادي', value: '100%', desc: 'وفق قوانين حماية البيانات والسيادة' }
      ]
    }
  }
};

/**
 * Global helper to get localized product data or fallback
 */
export function getAegisProductLocalized(productId: string, lang: Language): LocalizedProduct | null {
  const p = AEGIS_PRODUCT_TRANSLATIONS[productId];
  if (p && p[lang]) return p[lang];
  if (p && p['en']) return p['en'];
  if (p && p['id']) return p['id'];
  return null;
}

/**
 * Value Chain Translations (5 Stages)
 */
export const AEGIS_VALUE_CHAIN_I18N: Record<Language, { stage: string; label: string; desc: string }[]> = {
  id: [
    { stage: 'DATA', label: 'Data Organisasi', desc: 'Dokumen kontrak, telemetri IoT mesin, histori ERP, nota pengadaan, dan arsip regulasi.' },
    { stage: 'AI ENGINE', label: 'Aegis Private Engine', desc: 'Kombinasi Private LLM, Vector Embeddings, OCR Multimodal, dan Model Prediktif khusus industri.' },
    { stage: 'INTELLIGENCE', label: 'Wawasan Terstruktur', desc: 'Bukan sekadar teks obrolan, melainkan skor risiko, matriks perbandingan, dan deteksi deviasi.' },
    { stage: 'AUTOMATION', label: 'Otomasi Eksekusi', desc: 'Pengisian form otomatis, routing approval berjenjang, jadwal servis preventif, dan peringatan dini.' },
    { stage: 'BUSINESS ACTION', label: 'Dampak Bisnis Nyata', desc: 'Efisiensi waktu berlipat, kepatuhan terjaga, risiko terminimalisir, dan ROI terukur.' }
  ],
  en: [
    { stage: 'DATA', label: 'Enterprise Data', desc: 'Contract archives, machine IoT telemetry, ERP transaction logs, and regulatory documents.' },
    { stage: 'AI ENGINE', label: 'Aegis Private Engine', desc: 'Private LLM reasoning, dense vector embeddings, multimodal OCR, and domain-tuned predictive models.' },
    { stage: 'INTELLIGENCE', label: 'Structured Insights', desc: 'Not generic chat, but objective risk scores, vendor comparison matrices, and anomaly alerts.' },
    { stage: 'AUTOMATION', label: 'Workflow Automation', desc: 'Automated document population, tiered approval escalation, and proactive maintenance dispatch.' },
    { stage: 'BUSINESS ACTION', label: 'Tangible ROI', desc: 'Multiplied operational velocity, strict regulatory compliance, mitigated risks, and measured ROI.' }
  ],
  ja: [
    { stage: 'DATA', label: '社内データ蓄積', desc: '契約書アーカイブ、機械IoTテレメトリ、基幹ERP履歴、法規制文書などの統合資産。' },
    { stage: 'AI ENGINE', label: 'Aegis専用AIエンジン', desc: 'プライベートLLM、ベクトル検索、マルチモーダルOCR、および業界特化型予測モデル。' },
    { stage: 'INTELLIGENCE', label: '構造化インサイト', desc: '単なる対話ではなく、リスクスコア、多社比較マトリクス、異常値の客観的抽出。' },
    { stage: 'AUTOMATION', label: '自律ワークフロー', desc: '書類自動生成、多段階承認ルーティング、予防保全スケジュールの自動通知。' },
    { stage: 'BUSINESS ACTION', label: '測定可能な事業成果', desc: '業務工数の大幅削減、確実な法令遵守、突発停止リスクの根絶、明確な投資回収。' }
  ],
  ar: [
    { stage: 'DATA', label: 'بيانات المؤسسة', desc: 'أرشيف العقود، والقياس عن بعد لإنترنت الأشياء، وسجلات ERP، واللوائح التنظيمية.' },
    { stage: 'AI ENGINE', label: 'محرك إيجيس الخاص', desc: 'نماذج LLM خاصة، وتضمين المتجهات، وقراءة OCR متعددة الوسائط، ونماذج تنبؤ صناعية.' },
    { stage: 'INTELLIGENCE', label: 'رؤى منظمة دقيقة', desc: 'ليست مجرد محادثات نصية، بل درجات تقييم المخاطر ومصفوفات المقارنة والإنذارات الاستباقية.' },
    { stage: 'AUTOMATION', label: 'أتمتة سير العمل', desc: 'تعبئة المستندات آلياً، وتوجيه مسارات الاعتماد، وجدولة الصيانة الوقائية الفورية.' },
    { stage: 'BUSINESS ACTION', label: 'أثر أعمال ملموس', desc: 'مضاعفة سرعة الإنجاز، وامتثال تنظيمي كامل، وتقليل المخاطر مع عائد استثماري مدروس.' }
  ]
};

/**
 * Pipeline Steps (How It Works 6 Steps)
 */
export const AEGIS_PIPELINE_STEPS_I18N: Record<Language, { step: string; name: string; title: string; desc: string }[]> = {
  id: [
    { step: '01', name: 'DATA INGESTION', title: 'Penyerapan Data Multiformat', desc: 'Menghubungkan dokumen (PDF, CAD, Scan), stream IoT/telemetri sensor, database SQL/NoSQL, dan API internal ke dalam wadah terisolasi.' },
    { step: '02', name: 'SECURE INTEGRATION', title: 'Integrasi & Tata Kelola Aman', desc: 'Normalisasi format, enkripsi data in-transit, penegakan hak akses berbasis peran (RBAC), serta pembersihan data otomatis.' },
    { step: '03', name: 'AI CORE PROCESSING', title: 'Pemrosesan Kognitif Cerdas', desc: 'Pemrosesan via Private LLM lokal, ekstraksi OCR multi-layer, embedding vektor RAG, serta model machine learning prediktif.' },
    { step: '04', name: 'ACTIONABLE INTELLIGENCE', title: 'Sintesis Pengetahuan Bisnis', desc: 'Mengubah komputasi mentah menjadi wawasan bisnis: rekomendasi keputusan, matriks komparasi, dan deteksi deviasi.' },
    { step: '05', name: 'WORKFLOW AUTOMATION', title: 'Otomasi Alur Kerja Bertingkat', desc: 'Memicu persetujuan otomatis, pemberitahuan peringatan dini, pembuatan draft dokumen resmi, dan pengingat jadwal servis.' },
    { step: '06', name: 'BUSINESS ACTION', title: 'Eksekusi Nilai Nyata', desc: 'Downtime mesin terhindari, pengadaan barang tuntas lebih cepat, audit terlaksana tanpa kendala, dan keputusan berlandaskan data.' }
  ],
  en: [
    { step: '01', name: 'DATA INGESTION', title: 'Multi-Format Ingestion', desc: 'Connecting complex documents (PDF, CAD, scans), streaming IoT sensor telemetry, enterprise SQL/NoSQL databases, and internal APIs into an isolated sandbox.' },
    { step: '02', name: 'SECURE INTEGRATION', title: 'Secure Integration & Governance', desc: 'Format normalization, in-transit encryption, granular RBAC privilege enforcement, and automated payload sanitization.' },
    { step: '03', name: 'AI CORE PROCESSING', title: 'Cognitive Engine Processing', desc: 'Execution via local Private LLMs, multi-layer vision OCR, domain-tuned vector RAG indexing, and predictive machine learning.' },
    { step: '04', name: 'ACTIONABLE INTELLIGENCE', title: 'Actionable Business Synthesis', desc: 'Transforming raw computations into objective business intelligence: comparative matrices, risk scores, and anomaly alerts.' },
    { step: '05', name: 'WORKFLOW AUTOMATION', title: 'Multi-Tier Workflow Automation', desc: 'Triggering tiered approvals, preemptive audible alarms, automated legal document drafting, and scheduled dispatch.' },
    { step: '06', name: 'BUSINESS ACTION', title: 'Tangible Business Realization', desc: 'Zero unpredicted vessel stoppages, four-fold procurement speed, seamless audit compliance, and data-backed executive choices.' }
  ],
  ja: [
    { step: '01', name: 'DATA INGESTION', title: 'マルチフォーマットデータ収集', desc: 'PDF、CAD図面、スキャン文書、IoTセンサーテレメトリ、基幹データベース、社内APIを隔離環境へセキュアに取り込み。' },
    { step: '02', name: 'SECURE INTEGRATION', title: '安全な統合とガバナンス', desc: 'データ正規化、伝送時暗号化、厳格なロールベースアクセス制御（RBAC）、およびクレンジング処理を自動適用。' },
    { step: '03', name: 'AI CORE PROCESSING', title: 'コグニティブ推論処理', desc: 'オンプレミスPrivate LLM、多層OCRエンジン、ドメイン特化型RAGベクトル検索、予測機械学習モデルによる統合解析。' },
    { step: '04', name: 'ACTIONABLE INTELLIGENCE', title: '構造化インサイトの生成', desc: '生データを経営判断に直結するインテリジェンスへ変換：比較マトリクス、リスクスコア、異常値早期検知。' },
    { step: '05', name: 'WORKFLOW AUTOMATION', title: '多段階業務自動化', desc: '承認ワークフローの自動起票、異常アラート即時発報、公式帳票ドラフト作成、点検スケジュールの自動通知。' },
    { step: '06', name: 'BUSINESS ACTION', title: '実体価値の創出と確定', desc: '突発故障停止ゼロ、調達リードタイム大幅短縮、監査適合の完全保証、客観的データに基づく迅速な経営判断。' }
  ],
  ar: [
    { step: '01', name: 'DATA INGESTION', title: 'استيعاب البيانات المتعددة', desc: 'ربط المستندات المعقدة (PDF، CAD، مسوحات)، وبيانات حساسات إنترنت الأشياء، وقواعد بيانات ERP في بيئة معزولة آمنة.' },
    { step: '02', name: 'SECURE INTEGRATION', title: 'التكامل الآمن والحوكمة', desc: 'توحيد صيغ البيانات، وتشفير النقل، وتطبيق صلاحيات الأدوار الصارمة (RBAC)، والتنقية الآلية للبيانات.' },
    { step: '03', name: 'AI CORE PROCESSING', title: 'المعالجة المعرفية الذكية', desc: 'المعالجة عبر نماذج LLM الخاصة المحلية، وتقنية OCR متعددة الطبقات، واسترجاع المتجهات RAG، والتعلم الآلي التنبؤي.' },
    { step: '04', name: 'ACTIONABLE INTELLIGENCE', title: 'توليد الرؤى القابلة للتنفيذ', desc: 'تحويل الحوسبة إلى معارف تنفيذية: مصفوفات مقارنة العروض، ودرجات تقييم المخاطر، وكشف الانحرافات التشغيلية.' },
    { step: '05', name: 'WORKFLOW AUTOMATION', title: 'أتمتة سير العمل المتدرجة', desc: 'إطلاق مسارات الاعتماد الإداري، والتنبيهات المبكرة، وتوليد مسودات المستندات الرسمية، وجدولة أوامر العمل.' },
    { step: '06', name: 'BUSINESS ACTION', title: 'تحقيق القيمة المؤسسية', desc: 'القضاء على توقف السفن غير المخطط، وتسريع دورات الشراء بأربعة أضعاف، وتدقيق رقابي سلس مدعوم بالبيانات.' }
  ]
};

/**
 * Qualitative Benefits (7 Items)
 */
export const AEGIS_BENEFITS_I18N: Record<Language, { title: string; desc: string }[]> = {
  id: [
    { title: 'Mengurangi Beban Pekerjaan Manual', desc: 'Mengeliminasi pekerjaan klerikal repetitif seperti input data manual, pencarian berkas kontrak fisik, dan pembuatan matriks perbandingan spreadsheet.' },
    { title: 'Mempercepat Akses Pengetahuan Kritis', desc: 'Menghilangkan jeda waktu mencari klausul legal atau riwayat kerusakan mesin dari hitungan hari menjadi hitungan detik dengan sitasi valid.' },
    { title: 'Meningkatkan Visibilitas Operasional', desc: 'Memberikan jajaran manajemen pandangan 360 derajat atas kondisi armada, lini pabrik, dan status proyek tanpa menunggu laporan mingguan.' },
    { title: 'Membantu Kualitas Pengambilan Keputusan', desc: 'Menghadirkan rekomendasi yang berlandaskan data historis dan perbandingan objektif, bukan perkiraan atau intuisi semata.' },
    { title: 'Mengintegrasikan Silo Data Antar Divisi', desc: 'Menjembatani sistem lapangan (SCADA, IoT, Laporan Site) dengan sistem korporat (ERP, Keuangan, Legal) ke dalam satu ekosistem cerdas.' },
    { title: 'Standardisasi Alur Kerja & Kepatuhan', desc: 'Memastikan setiap proses pengadaan, pemeliharaan alat, dan pelaporan keselamatan selalu mengikuti standar baku regulasi dan SOP perusahaan.' },
    { title: 'Kedaulatan & Keamanan Data Strategis', desc: 'Menjamin bahwa rahasia dagang, formula produk, dan data sensitif organisasi tetap berada dalam perimeter infrastruktur milik Anda.' }
  ],
  en: [
    { title: 'Drastic Clerical Workload Reduction', desc: 'Eliminating repetitive administrative manual entry, manual contract archive searches, and laborious spreadsheet bid comparison tables.' },
    { title: 'Instantaneous Critical Knowledge Access', desc: 'Compressing lookup times for intricate legal clauses or equipment breakdown history from days to seconds with precise source citations.' },
    { title: 'Real-Time Operational Visibility', desc: 'Delivering executive leadership an unfiltered 360-degree command view over vessel fleets, factory lines, and project milestones without waiting for weekly reports.' },
    { title: 'Data-Grounded Decision Quality', desc: 'Supplying objective, verified historical benchmarks and machine reasoning rather than subjective assumptions or intuition.' },
    { title: 'Elimination of Cross-Department Silos', desc: 'Seamlessly bridging harsh physical field telemetry (SCADA, marine sensors, daily logs) with corporate ERP, accounting, and legal suites.' },
    { title: 'Strict Workflow & Compliance Standardization', desc: 'Guaranteeing every single procurement step, heavy machinery service, and HSE report adheres uncompromisingly to corporate SOPs and national regulations.' },
    { title: 'Absolute Data Sovereignty & Confidentiality', desc: 'Ensuring your strategic trade secrets, confidential client lists, and operational algorithms never leave your internal data boundaries.' }
  ],
  ja: [
    { title: '反復・定型業務の大幅な削減', desc: '手作業によるデータ入力、キャビネットからの物理契約書の探索、煩雑な相見積もりエクセル作成などの作業をゼロ化します。' },
    { title: '重要知識への即座のアクセス', desc: '複雑な法務条項の照会や過去の機械故障履歴の調査時間を、数日からわずか数秒へと短縮（正確な根拠文書付き）。' },
    { title: 'リアルタイムの現場可視性向上', desc: '週報を待つことなく、海運船団、製造ライン、建設プロジェクトの稼働状況を経営陣が360度リアルタイムで把握可能。' },
    { title: '客観的データに基づく意思決定の高度化', desc: '属人的な勘や経験だけに頼るのではなく、蓄積された実績データと多面的なAI分析に基づく確実な経営判断を支援。' },
    { title: '部門間データサイロの完全統合', desc: '現場の産業センサー（SCADA、IoT、日報）と本社の基幹システム（ERP、財務、法務）を有機的にシームレス統合。' },
    { title: '業務フローとコンプライアンスの標準化', desc: '資材調達、定期メンテナンス、安全衛生管理の全プロセスにおいて、社内規程と法令基準の遵守を自動担保。' },
    { title: '企業データ主権と機密性の絶対防衛', desc: '企業の最重要機密である設計図、取引先リスト、財務情報がパブリッククラウドへ流出することを物理的に遮断します。' }
  ],
  ar: [
    { title: 'تقليص الأعباء الروتينية واليدوية', desc: 'القضاء على مهام إدخال البيانات المكررة، والبحث اليدوي في أرشيف العقود الورقية، وإنشاء جداول مقارنة العروض الشاقة.' },
    { title: 'وصول فوري للمعارف الحرجة للمؤسسة', desc: 'تقليص وقت البحث عن البنود القانونية الدقيقة أو سجلات أعطال المعدات من أيام إلى ثوانٍ معدودة مع تقديم مراجع معتمدة.' },
    { title: 'رؤية تشغيلية شاملة وفورية للقيادة', desc: 'تزويد الإدارة العليا برؤية بانورامية 360 درجة لحالة أساطيل السفن، وخطوط الإنتاج، والمشاريع دون انتظار التقارير الأسبوعية.' },
    { title: 'قرارات تجارية مبنية على بيانات موضوعية', desc: 'تقديم توصيات استدلالية مدعومة بالبيانات التاريخية والمقارنات الدقيقة بدلاً من الاعتماد على التقديرات الشخصية.' },
    { title: 'كسر عزلة البيانات بين الأقسام والأنظمة', desc: 'الربط السلس بين أنظمة الميدان التشغيلية (SCADA، حساسات السفن، سجلات الموقع) وأنظمة الشركة المركزية (ERP، المالية، القانونية).' },
    { title: 'توحيد الإجراءات والامتثال الصارم للمعايير', desc: 'ضمان خضوع كافة عمليات الشراء وصيانة المعدات وإجراءات السلامة لمعايير الشركة واللوائح الحكومية دون أي تهاون.' },
    { title: 'السيادة والسرية المطلقة للبيانات الاستراتيجية', desc: 'ضمان بقاء الأسرار التجارية وقوائم العملاء وبيانات العمليات الحساسة داخل الحدود السيادية الآمنة لمؤسستك.' }
  ]
};

/**
 * Real Use Cases (6 Items)
 */
export const AEGIS_USE_CASES_I18N: Record<Language, { title: string; category: string; scenario: string; solution: string; result: string }[]> = {
  id: [
    {
      title: 'AI Membaca & Mengaudit Ribuan Dokumen',
      category: 'Legal & Procurement',
      scenario: 'Perusahaan EPC menghadapi audit tender bernilai ratusan miliar dengan lebih dari 4.000 halaman kontrak, addendum, dan gambar teknis.',
      solution: 'AI Document Intelligence mengindeks seluruh arsip dalam 15 menit, mengekstrak daftar kewajiban denda, dan memverifikasi kelengkapan izin.',
      result: 'Waktu persiapan dokumen terpangkas dari 3 minggu menjadi 1 hari kerja dengan akurasi kepatuhan klausul terverifikasi.'
    },
    {
      title: 'AI Membandingkan Penawaran Vendor Seketika',
      category: 'Pengadaan Industri',
      scenario: 'Tim procurement menerima 12 proposal penawaran material mekanikal elektrikal dalam format PDF dan scan yang berbeda struktur tabelnya.',
      solution: 'Procure AI melakukan OCR tabel otomatis, menormalkan satuan unit, menyandingkan harga terdiskon, dan menandai deviasi spesifikasi teknis.',
      result: 'Penerbitan matriks komparasi tuntas dalam hitungan detik, memungkinkan negosiasi yang lebih cepat dan transparan.'
    },
    {
      title: 'AI Membantu Teknisi Menemukan Riwayat Kerusakan',
      category: 'Maintenance & Maritim',
      scenario: 'Kapal kargo di tengah laut mengalami lonjakan getaran pada generator cadangan tanpa koneksi internet broadband yang memadai.',
      solution: 'Aegis Maritime yang beroperasi di server lokal kapal menganalisis histori perbaikan 3 tahun lalu dan memberikan panduan langkah servis offline.',
      result: 'Masalah teratasi sebelum generator mati total, menghindari bahaya kapal kehilangan daya di jalur pelayaran padat.'
    },
    {
      title: 'AI Membantu Manajemen Memahami Kondisi Armada',
      category: 'Logistik & Ekspedisi',
      scenario: 'Operator transportasi dengan 200 unit truk kesulitan melacak penyebab tingginya konsumsi bahan bakar dan seringnya keterlambatan pengiriman.',
      solution: 'FleetOS AI memetakan anomali konsumsi BBM, jam idling sopir di titik peristirahatan, serta memprediksi jadwal servis suku cadang kritis.',
      result: 'Pengurangan biaya pemborosan bahan bakar dan peningkatan kedisiplinan rute tanpa perlu pemasangan alat rumit tambahan.'
    },
    {
      title: 'AI Menyiapkan Kesiapan Audit Kepatuhan Regulasi',
      category: 'Compliance & Governance',
      scenario: 'Perusahaan manufaktur harus memperbarui sertifikasi ISO 27001 dan mematuhi regulasi perlindungan data pribadi (UU PDP).',
      solution: 'Comply AI melakukan gap analysis otomatis antara dokumen SOP eksisting dengan pasal-pasal regulasi terbaru, memetakan kekurangan bukti audit.',
      result: 'Audit eksternal terlaksana mulus tanpa temuan mayor karena seluruh bukti telah terpetakan rapi dalam Audit Locker.'
    },
    {
      title: 'AI Menjawab Pertanyaan Bisnis Tanpa Query SQL',
      category: 'Executive Intelligence',
      scenario: 'Direksi membutuhkan insight performa margin produk per wilayah saat rapat koordinasi bulanan tanpa harus menunggu tim data engineer.',
      solution: 'Business AI menerima pertanyaan langsung dalam Bahasa Indonesia dan menyajikan grafik tren, produk terlaris, serta proyeksi kas.',
      result: 'Rapat keputusan berlangsung cepat dan dinamis berlandaskan data real-time yang langsung dapat diverifikasi.'
    }
  ],
  en: [
    {
      title: 'Autonomous Indexing & Auditing of 4,000+ Contract Pages',
      category: 'Legal & Procurement',
      scenario: 'A major EPC infrastructure contractor faced an imminent compliance audit across 4,000+ pages of tender agreements, engineering addendums, and blueprints.',
      solution: 'AI Document Intelligence indexed the entire archival repository in 15 minutes, isolated penalty liability clauses, and flagged missing environmental clearances.',
      result: 'Document audit turnaround collapsed from 3 weeks to 1 business day with 100% verified clause citation auditability.'
    },
    {
      title: 'Instant Multi-Vendor Bid Normalization & Price Benchmarking',
      category: 'Industrial Procurement',
      scenario: 'Procurement department received 12 disparate vendor bids for electrical substation equipment in divergent scanned PDF formats and currencies.',
      solution: 'Procure AI executed autonomous table OCR, normalized metric quantities, computed volume discounts, and highlighted technical deviations.',
      result: 'Completed a comprehensive comparative matrix in seconds, empowering executive commercial negotiation teams.'
    },
    {
      title: 'Edge Vessel Anomaly Diagnostics Without Internet Connectivity',
      category: 'Maritime & Maintenance',
      scenario: 'A trans-oceanic vessel experienced elevated vibration harmonics on an auxiliary generator 1,000 nautical miles from shore with zero broadband uplink.',
      solution: 'Aegis Maritime operating on the vessel’s local edge server matched acoustic signatures against 3-year historical logs and yielded step-by-step repair guides.',
      result: 'Prevented a catastrophic auxiliary generator blackout in a high-traffic navigation channel without requiring satellite bandwidth.'
    },
    {
      title: 'Autonomous Haulage Fleet Telematics & Fuel Theft Eradication',
      category: 'Logistics & Haulage',
      scenario: 'A logistics firm operating 200 heavy freight trucks suffered chronic fuel budget overruns and unexplained transit delivery delays.',
      solution: 'FleetOS AI pinpointed fuel tank siphoning anomalies, correlated excessive idling stops with GPS geo-fences, and optimized route dispatching.',
      result: 'Achieved an immediate 18% reduction in diesel expenditure while improving on-time arrival performance to 98.4%.'
    },
    {
      title: 'Zero-Deficiency ISO 27001 & Data Protection Compliance Audit',
      category: 'Compliance & Governance',
      scenario: 'A multinational manufacturer needed to pass ISO 27001 renewal and newly mandated personal data protection privacy regulations.',
      solution: 'Comply AI mapped thousands of operational SOP clauses directly to regulatory articles and populated a cryptographic audit evidence locker.',
      result: 'External auditor concluded the evaluation with zero major non-conformances within 48 hours of assessment.'
    },
    {
      title: 'Conversational Executive KPI Intelligence Without SQL Engineers',
      category: 'Executive Intelligence',
      scenario: 'Board of Directors needed regional sales margin and inventory turnover comparisons during an urgent strategy meeting without technical data teams present.',
      solution: 'Business AI comprehended plain natural language inquiries and rendered interactive margin trends, cash burn projections, and Pareto breakdowns.',
      result: 'Executive decision-making concluded swiftly with verified, live data figures directly linked to underlying financial ledgers.'
    }
  ],
  ja: [
    {
      title: '4,000ページを超える契約書・技術文書のAI即時監査',
      category: '法務・調達',
      scenario: '大手EPC企業において、4,000ページに及ぶ入札契約書、付属文書、図面の適合性監査を急遽実施する必要が発生。',
      solution: 'AI Document Intelligenceが全アーカイブを15分でインデックス化。賠償責任条項を抽出し、認可書類の不備を自動特定。',
      result: '監査準備期間を3週間からわずか1営業日へと圧縮。全条項の引用元リンク付きで完璧な監査適合を達成。'
    },
    {
      title: '12社相見積もり表の即時自動正規化＆価格比較',
      category: '産業資材調達',
      scenario: '重電設備調達において、異なるフォーマットのPDF・手書きスキャンで見積書が提出され、手作業の比較表作成に数日を要していた。',
      solution: 'Procure AIが表構造をOCR自動解析し、単位換算や値引き率を自動正規化。技術仕様との不適合箇所をハイライト表示。',
      result: '全社比較マトリクスを数秒で自動生成。迅速かつ透明性の高い価格交渉と調達コスト削減を実現。'
    },
    {
      title: '外洋航行中における通信遮断下での機関トラブル自律診断',
      category: '海運・保全',
      scenario: '外洋を航行中の大型貨物船で発電機の異常振動が発生。大容量衛星回線が使用できない状況下で迅速な対応が必要に。',
      solution: '船内ローカルサーバーで稼働するAegis Maritimeが過去3年間の修理ログと照合し、通信なしで修理手順書を提示。',
      result: '発電機の全損と航行不能リスクを洋上で回避。安全な寄港と莫大な曳航費用の発生を未然に防止。'
    },
    {
      title: '200台のトラック輸送船団における燃料盗難根絶と運行最適化',
      category: '物流・運行管理',
      scenario: '長距離輸送トラック200台を保有する運送会社で、原因不明の燃料異常消費と配送遅延が頻発していた。',
      solution: 'FleetOS AIが燃料残量急減アラートと運行GPSを照合し、不正抜き取りを特定。アイドリングの改善と最適ルートを指示。',
      result: '軽油消費量を18%削減し、配送定時運行率を98.4%へと向上。'
    },
    {
      title: 'ISO 27001・個人情報保護法監査の指摘事項ゼロ達成',
      category: 'ガバナンス・監査',
      scenario: '製造業グループにおいて、ISO 27001更新および個人情報保護法（PDP法）への適合性評価が迫っていた。',
      solution: 'Comply AIが社内SOPと規制基準のギャップを自動照合し、暗号化エビデンスロッカーに必要な証拠書類を整理。',
      result: '外部審査機関による監査において重大な不適合指摘ゼロ（無指摘）でスムーズに認証更新を完了。'
    },
    {
      title: 'SQL不要：自然言語による経営KPI・業績データの瞬時照会',
      category: '経営インテリジェンス',
      scenario: '定例取締役会において、エンジニアのサポートなしで地域別利益率や在庫回転率を即座に確認する必要があった。',
      solution: 'Business AIが日本語の自然言語の問いかけを即座に解釈し、リアルタイムの財務データからグラフと要因分析を表示。',
      result: '会議を中断することなく、客観的データに基づく迅速でダイナミックな経営意思決定を実現。'
    }
  ],
  ar: [
    {
      title: 'تدقيق وفهرسة أكثر من 4,000 صفحة من عقود المناقصات المعقدة',
      category: 'الشؤون القانونية والمشتريات',
      scenario: 'واجهت شركة مقاولات كبرى تدقيقاً حرجاً لعقود مناقصات وملاحق ومخططات هندسية تتجاوز 4,000 صفحة قبل موعد نهائي وشيك.',
      solution: 'قامت منصة AI Document Intelligence بفهرسة الأرشيف بالكامل في 15 دقيقة، واستخرجت شروط الغرامات والالتزامات مع كشف النواقص.',
      result: 'تقلص وقت إعداد وتدقيق الملفات من 3 أسابيع إلى يوم عمل واحد مع مراجع موثقة لكل بند تعاقدي.'
    },
    {
      title: 'مقارنة عروض 12 مورداً وتطبيع الأسعار والمواصفات فورياً',
      category: 'المشتريات الصناعية',
      scenario: 'استلم قسم المشتريات 12 عرض أسعار لمعدات محطات تحويل كهربائية بصيغ PDF ممسوحة ضوئياً مختلفة الجداول والعملات.',
      solution: 'أجرت Procure AI معالجة OCR آلية للجداول ووحدت وحدات القياس وقارنت الأسعار المخفضة مع تحديد الفروقات الفنية.',
      result: 'إصدار مصفوفة المقارنة المعتمدة في ثوانٍ معدودة، مما عزز كفاءة وسرعة المفاوضات التجارية.'
    },
    {
      title: 'تشخيص أعطال المحركات البحرية في أعالي البحار بلا اتصال إنترنت',
      category: 'الملاحة البحرية والصيانة',
      scenario: 'واجهت سفينة شحن في وسط المحيط اهتزازات غير معتادة في المولد المساعد دون توفر اتصال إنترنت عريض النطاق.',
      solution: 'قامت منصة Aegis Maritime العاملة محلياً على سيرفر السفينة بمطابقة بصمة الاهتزاز مع سجلات 3 سنوات وقدمت دليل الإصلاح الفوري.',
      result: 'إصلاح العطل بنجاح قبل انهيار المولد الكهربائي وتفادي فقدان طاقة السفينة في ممرات ملاحية مزدحمة.'
    },
    {
      title: 'إدارة أسطول من 200 شاحنة والقضاء التام على سرقات الوقود',
      category: 'الخدمات اللوجستية والنقل',
      scenario: 'عانت شركة نقل بري تدير 200 شاحنة ثقيلة من ارتفاع فواتير الديزل غير المبرر وتكرار تأخر وصول الشحنات.',
      solution: 'حددت FleetOS AI حالات سحب الوقود غير المصرح بها فورياً، وقامت بمراقبة ساعات التوقف وتقديم مسارات بديلة مثالية.',
      result: 'خفض مباشر بنسبة 18% في استهلاك الوقود وتحقيق نسبة التزام بالمواعيد بلغت 98.4%.'
    },
    {
      title: 'الجاهزية التامة لتدقيق شهادة ISO 27001 وحماية البيانات دون ملاحظات',
      category: 'الحوكمة والامتثال',
      scenario: 'احتاجت شركة صناعية كبرى إلى تجديد شهادة ISO 27001 والامتثال لأنظمة حماية البيانات الشخصية الصارمة.',
      solution: 'قامت منصة Comply AI بمطابقة إجراءات الشركة مع معايير اللوائح تلقائياً وتنظيم الأدلة في خزانة إلكترونية مشفرة.',
      result: 'اجتياز التدقيق الخارجي بنجاح تام ودون تسجيل أي ملاحظة رئيسية خلال 48 ساعة.'
    },
    {
      title: 'الإجابة الفورية عن أسئلة الأعمال التنفيذية دون الحاجة لخبراء SQL',
      category: 'الذكاء التنفيذي',
      scenario: 'احتاج مجلس الإدارة أثناء اجتماع استراتيجي طارئ إلى معرفة هوامش أرباح المنتجات وتوقعات التدفقات النقدية دون انتظار فريق البيانات.',
      solution: 'استقبلت منصة Business AI الأسئلة باللغة الطبيعية وقدمت رسوماً بيانية فورية للاتجاهات والمنتجات الأكثر ربحية.',
      result: 'اتخاذ قرارات استراتيجية حاسمة في دقائق استناداً إلى بيانات مالية دقيقة ومحدثة لحظياً.'
    }
  ]
};

/**
 * Global Aegis UI Text Dictionaries (For Sections, Buttons, Tabs, Modals)
 */
export const AEGIS_UI_TEXTS: Record<Language, Record<string, any>> = {
  id: {
    companyValue: {
      badge: 'FILOSOFI REKAYASA SISTEM',
      title: 'AI yang Dibangun untuk Dunia Nyata.',
      subtitle: 'Kami tidak membangun sekadar chatbot percakapan konsumen umum. Kami memadukan AI Canggih, Data Riil, Otomasi Alur Kerja, serta Pengetahuan Khusus Industri.',
      cards: [
        { tag: 'Penalaran Presisi', title: 'AI Kognitif', desc: 'Bukan sekadar mencocokkan kata kunci, melainkan memahami konteks kontrak bisnis dan blueprint teknis.' },
        { tag: 'Multimodal Stream', title: 'Data Terpadu', desc: 'Menghubungkan arsip PDF dokumen, gambar CAD, sensor mesin SCADA, hingga database ERP.' },
        { tag: 'Workflow Governance', title: 'Otomasi Bertingkat', desc: 'Memicu persetujuan berjenjang, pembuatan purchase order otomatis, dan peringatan dini insiden.' },
        { tag: 'Spesifik Industri', title: 'Pemahaman Domain', desc: 'Terlatih khusus untuk maritim, konstruksi, manufaktur, dan kepatuhan regulasi nasional.' }
      ],
      valueChainTitle: 'Alur Transformasi Nilai Bisnis',
      valueChainSubtitle: 'Dari Data Mentah Menjadi Tindakan Nyata',
      valueChainBadge: 'Value Chain Architecture',
      stepSummary: 'Ikhtisar Langkah',
      inputData: 'Masukan Data:',
      outputResult: 'Keluaran Tindakan:'
    },
    portfolio: {
      badge: 'PORTFOLIO PRODUK LENGKAP (12 SOLUSI)',
      title: 'Solusi yang Dirancang untuk Setiap Kebutuhan.',
      subtitle: 'Jelajahi 12 platform solusi kecerdasan buatan, otomasi, dan analitik yang dibangun khusus untuk tantangan skala enterprise.',
      catalogBtn: '📑 Buka E-Katalog Lengkap & Cetak Brosur PDF →',
      filters: {
        all: 'Semua Produk (12)',
        enterprise: 'Dokumen & Pengadaan',
        industry: 'Industri & Maritim',
        operations: 'Armada & Operasional',
        core: 'Core AI & Keamanan'
      },
      targetIndustries: 'Target Industri:',
      keyFeatures: 'Keunggulan Utama:',
      detailBtn: 'Lihat Arsitektur & Kemampuan Penuh →',
      demoBtn: 'Jadwalkan Demo Teknis'
    },
    industry: {
      badge: 'SEKTOR INDUSTRI',
      title: 'AI untuk Berbagai Industri.',
      subtitle: 'Setiap industri memiliki tantangan operasional dan regulasi yang unik. Kami membangun arsitektur AI yang disesuaikan secara presisi dengan alur kerja spesifik bidang usaha Anda.',
      challengesLabel: 'Tantangan Operasional Lapangan:',
      solutionsLabel: 'Solusi Aegis AI:',
      matchingProductsLabel: 'Solusi Terkait:',
      discussBtn: 'Diskusikan Kebutuhan Sektor Ini →'
    },
    technology: {
      badge: 'FONDASI TEKNOLOGI',
      title: 'Technology Behind the Intelligence.',
      subtitle: 'Arsitektur teruji yang mengintegrasikan penalaran kognitif tingkat lanjut, visi komputer, pemrosesan dokumen masif, serta telemetri IoT industri dalam satu tumpukan teknologi modern.',
      benefitLabel: 'Keuntungan Enterprise:'
    },
    privateAi: {
      badge: 'KONTROL & KEDAULATAN DATA',
      title: 'Ketika Data Adalah Aset Strategis.',
      subtitle: 'Dalam era kecerdasan buatan, menyerahkan data rahasia dan strategi bisnis ke cloud publik membawa risiko eksposur yang tidak perlu. Solusi kami dirancang untuk memberikan kontrol lebih besar terhadap data dan infrastruktur organisasi Anda.',
      airGapBadge: '100% AIR-GAPPED AIRPORT & DEFENSE READY',
      zeroCloudDesc: 'Arsitektur on-premise yang sepenuhnya terisolasi dari internet publik. Seluruh pemrosesan inferensi AI berlangsung di dalam server milik Anda.',
      consultBtn: 'Konsultasikan Kedaulatan Data AI →'
    },
    security: {
      badge: 'STANDAR KEAMANAN ENTERPRISE',
      title: 'Arsitektur yang Mengutamakan Privasi.',
      subtitle: 'Keamanan bukan fitur pelengkap, melainkan fondasi perancangan sistem kami. Menerapkan prinsip Zero Trust Architecture untuk melindungi aset intelektual organisasi Anda.'
    },
    howItWorks: {
      badge: 'ALUR KERJA SISTEM',
      title: 'How It Works: Dari Data Menjadi Aksi.',
      subtitle: 'Proses 6 langkah end-to-end yang mengubah kumpulan data mentah organisasi menjadi keputusan strategis dan otomasi operasional berkecepatan tinggi.',
      stagePrefix: 'Tahap'
    },
    benefits: {
      badge: 'DAMPAK OPERASIONAL',
      title: 'Dampak Nyata yang Dapat Dirasakan.',
      subtitle: 'Fokus kami adalah transformasi cara kerja tim Anda: membebaskan para ahli dari pekerjaan repetitif, mempertajam akurasi keputusan, dan menjaga integritas aset intelektual organisasi.',
      testedValue: 'Nilai Kualitatif Teruji'
    },
    useCases: {
      badge: 'SKENARIO LAPANGAN',
      title: 'Skenario Implementasi Riil.',
      subtitle: 'Contoh nyata bagaimana platform Aegis AI diimplementasikan untuk memecahkan tantangan operasional kritis di berbagai bidang bisnis.',
      scenarioLabel: 'Skenario Lapangan:',
      solutionLabel: 'Solusi Aegis AI:',
      resultLabel: 'Hasil Nyata:'
    },
    company: {
      badge: 'TENTANG KAMI',
      title: 'Membangun Kecerdasan untuk Masa Depan.',
      quote: '"Kami membangun solusi teknologi yang menggabungkan Artificial Intelligence, Automation, Data Intelligence dan Private Infrastructure untuk membantu organisasi menghadapi kompleksitas dunia bisnis modern."',
      p1Title: 'Kedaulatan & Kontrol Data',
      p1Desc: 'Kami meyakini bahwa data strategis adalah keunggulan kompetitif terbesar korporasi. Seluruh arsitektur kami dirancang untuk memberi kontrol mutlak kepada pemilik data.',
      p2Title: 'Rekayasa Lapangan Nyata',
      p2Desc: 'Solusi kami tidak hanya bekerja di lingkungan ideal laboratorium, melainkan teruji di laut lepas, lantai pabrik bersuhu tinggi, dan lokasi proyek infrastruktur terpencil.',
      p3Title: 'Transparansi & Akurasi',
      p3Desc: 'Kami memprioritaskan pemodelan yang dapat diaudit secara forensik, menghadirkan sitasi dokumen sumber yang valid, dan menghindari klaim performa tanpa pembuktian data nyata.'
    },
    contact: {
      badge: 'KONSULTASI & JADWALKAN DEMO',
      title: 'Mulai Diskusi Bersama Tim Kami.',
      subtitle: 'Diskusikan kebutuhan otomasi, audit dokumen, kedaulatan data, atau arsitektur Private AI organisasi Anda secara langsung dengan solusi yang dipersonalisasi.',
      channelsTitle: 'Saluran Resmi',
      channelsSubtitle: 'Hubungi perwakilan teknis kami untuk evaluasi arsitektur dan penawaran enterprise.',
      form: {
        name: 'Nama Lengkap',
        company: 'Perusahaan / Institusi',
        jobTitle: 'Jabatan / Divisi',
        email: 'Email Korporasi',
        phone: 'Nomor Telepon / WhatsApp',
        industry: 'Sektor Industri',
        solution: 'Pilihan Solusi / Minat Produk',
        message: 'Deskripsi Kebutuhan / Pertanyaan Teknis',
        submitBtn: 'Kirim Permintaan Demo & Konsultasi',
        submitting: 'Memproses...',
        successTitle: 'Permintaan Berhasil Dikirim',
        successDesc: 'Tim arsitek solusi Aegis Technology akan menghubungi Anda dalam waktu 1x24 jam kerja.'
      }
    },
    footer: {
      desc: 'Solusi Artificial Intelligence, Private AI, Automation, Data Intelligence dan Industry Technology untuk korporasi, maritim, manufaktur, dan instansi pemerintahan.',
      sovereignty: 'Kedaulatan: On-Premise & Air-Gapped Ready',
      architecture: 'Arsitektur: Zero Trust Enterprise Model',
      productsCol: '12 Produk Portfolio',
      industriesCol: 'Solusi Industri',
      companyCol: 'Perusahaan',
      rights: 'Hak cipta dilindungi undang-undang. Seluruh nama produk adalah merek terdaftar.'
    }
  },

  en: {
    companyValue: {
      badge: 'SYSTEM ENGINEERING PHILOSOPHY',
      title: 'AI Engineered for the Real World.',
      subtitle: 'We do not build generic conversational chatbots. We converge Enterprise AI, Real-time Physical Data, Workflow Governance, and Deep Industry Domain Knowledge.',
      cards: [
        { tag: 'Precision Reasoning', title: 'Cognitive AI', desc: 'Beyond keyword lookups: deeply comprehending complex contractual clauses and engineering blueprints.' },
        { tag: 'Multimodal Stream', title: 'Unified Data', desc: 'Connecting PDF archives, CAD schematics, SCADA telemetry, and enterprise ERP records into one fabric.' },
        { tag: 'Workflow Governance', title: 'Tiered Automation', desc: 'Triggering multi-level approvals, autonomous purchase orders, and preemptive incident alerts.' },
        { tag: 'Industry Specific', title: 'Domain Expertise', desc: 'Trained specifically on maritime operations, heavy civil engineering, discrete manufacturing, and compliance.' }
      ],
      valueChainTitle: 'Business Value Transformation Pipeline',
      valueChainSubtitle: 'From Raw Enterprise Data to Autonomous Action',
      valueChainBadge: 'Value Chain Architecture',
      stepSummary: 'Stage Summary',
      inputData: 'Data Ingestion:',
      outputResult: 'Autonomous Outcome:'
    },
    portfolio: {
      badge: 'COMPLETE PRODUCT PORTFOLIO (12 SOLUTIONS)',
      title: 'Tailored Solutions for Every Enterprise Need.',
      subtitle: 'Explore 12 enterprise AI, automation, and predictive analytics platforms engineered for mission-critical operations.',
      catalogBtn: '📑 Open Full E-Catalog & Print PDF Brochure →',
      filters: {
        all: 'All Products (12)',
        enterprise: 'Document & Procurement',
        industry: 'Industry & Maritime',
        operations: 'Fleet & Operations',
        core: 'Core AI & Security'
      },
      targetIndustries: 'Target Sectors:',
      keyFeatures: 'Key Capabilities:',
      detailBtn: 'View Architecture & Specifications →',
      demoBtn: 'Request Live Technical Demo'
    },
    industry: {
      badge: 'INDUSTRY SECTORS',
      title: 'AI Tailored for Specialized Industries.',
      subtitle: 'Every sector has unique operational and compliance boundaries. We engineer AI architectures tailored to your specific workflows.',
      challengesLabel: 'Operational Field Challenges:',
      solutionsLabel: 'Aegis AI Solution:',
      matchingProductsLabel: 'Compatible Platforms:',
      discussBtn: 'Consult for This Sector →'
    },
    technology: {
      badge: 'TECHNOLOGY FOUNDATION',
      title: 'Technology Behind the Intelligence.',
      subtitle: 'A proven enterprise stack combining cognitive reasoning, computer vision, massive document parsing, and industrial telemetry.',
      benefitLabel: 'Enterprise Advantage:'
    },
    privateAi: {
      badge: 'DATA SOVEREIGNTY & CONTROL',
      title: 'When Data is Your Paramount Strategic Asset.',
      subtitle: 'In the era of artificial intelligence, entrusting confidential data to public cloud APIs carries unacceptable security risks. We engineer 100% on-premise, zero-egress intelligence environments.',
      airGapBadge: '100% AIR-GAPPED DEFENSE & CRITICAL INFRASTRUCTURE READY',
      zeroCloudDesc: 'On-premise hardware architecture isolated from public internet. All AI inference and vector searches execute locally.',
      consultBtn: 'Consult on Private AI Architecture →'
    },
    security: {
      badge: 'ENTERPRISE SECURITY STANDARDS',
      title: 'Privacy-First, Zero-Trust Architecture.',
      subtitle: 'Security is not an afterthought; it is our foundation. Applying Zero Trust Architecture principles to protect your corporate intellectual assets.'
    },
    howItWorks: {
      badge: 'SYSTEM WORKFLOW PIPELINE',
      title: 'How It Works: From Data to Executive Action.',
      subtitle: 'A comprehensive 6-step pipeline transforming disparate enterprise data into strategic decisions and high-velocity workflow automation.',
      stagePrefix: 'Stage'
    },
    benefits: {
      badge: 'OPERATIONAL IMPACT',
      title: 'Tangible Business Impact Across Teams.',
      subtitle: 'Transforming how teams operate: liberating subject-matter experts from clerical drudgery, sharpening decision precision, and safeguarding corporate intellect.',
      testedValue: 'Proven Enterprise Metric'
    },
    useCases: {
      badge: 'FIELD DEPLOYMENT SCENARIOS',
      title: 'Real-World Production Deployments.',
      subtitle: 'Actual field implementations resolving mission-critical operational challenges across complex industries.',
      scenarioLabel: 'Field Scenario:',
      solutionLabel: 'Aegis AI Solution:',
      resultLabel: 'Tangible Result:'
    },
    company: {
      badge: 'ABOUT OUR DIVISION',
      title: 'Engineering Mission-Critical Intelligence.',
      quote: '"We build technology solutions converging Artificial Intelligence, Automation, Data Intelligence, and Private Infrastructure to empower enterprises through modern complexities."',
      p1Title: 'Data Sovereignty & Control',
      p1Desc: 'Strategic data is your most precious competitive advantage. All our architectures guarantee absolute ownership and zero cloud leakage.',
      p2Title: 'Field-Tested Engineering',
      p2Desc: 'Our systems thrive outside pristine labs: proven in deep-ocean waters, high-heat factory floors, and isolated construction zones.',
      p3Title: 'Transparency & Accuracy',
      p3Desc: 'We prioritize forensically auditable reasoning, verifiable source citations, and honest metrics grounded in empirical results.'
    },
    contact: {
      badge: 'CONSULTATION & DEMO REQUEST',
      title: 'Begin Your Technical Consultation.',
      subtitle: 'Discuss your document automation, data sovereignty, or Private AI architecture directly with our specialized engineers.',
      channelsTitle: 'Official Channels',
      channelsSubtitle: 'Reach our engineering architects for enterprise scoping and RFP proposals.',
      form: {
        name: 'Full Name',
        company: 'Company / Organization',
        jobTitle: 'Job Title / Department',
        email: 'Corporate Email',
        phone: 'Phone Number / WhatsApp',
        industry: 'Industry Sector',
        solution: 'Solution of Interest',
        message: 'Technical Requirements / Inquiry',
        submitBtn: 'Submit Consultation Request',
        submitting: 'Processing...',
        successTitle: 'Request Successfully Submitted',
        successDesc: 'Our Aegis Technology solution architects will contact you within 24 business hours.'
      }
    },
    footer: {
      desc: 'Enterprise Artificial Intelligence, Private AI, Automation, and Mission-Critical Industry Technology for corporations, maritime, and public institutions.',
      sovereignty: 'Sovereignty: 100% On-Premise & Air-Gapped',
      architecture: 'Architecture: Zero Trust Enterprise Model',
      productsCol: '12 Product Portfolio',
      industriesCol: 'Industry Solutions',
      companyCol: 'Organization',
      rights: 'All rights reserved. All product names are registered trademarks.'
    }
  },

  ja: {
    companyValue: {
      badge: 'システム工学哲学',
      title: '実社会と現実世界のために構築されたAI。',
      subtitle: '私たちは一般的な対話型チャットボットを作りません。最先端AI、物理リアルデータ、業務自動化、そして業界特化ノウハウを融合します。',
      cards: [
        { tag: '高精度推論', title: 'コグニティブAI', desc: '単なるキーワード一致を超え、複雑な契約書の文脈やエンジニアリング図面を深く理解します。' },
        { tag: 'マルチモーダル統合', title: '統合データ基盤', desc: 'PDF文書、CAD図面、SCADAセンサー、基幹ERPデータを一つの知性としてシームレスに結合。' },
        { tag: 'ワークフロー統制', title: '多段階業務自動化', desc: '多層承認フローの自動連携、発注書（PO）の自動起票、異常インシデントの早期警告を発報。' },
        { tag: '業界特化専門性', title: 'ドメイン知見の結集', desc: '海運・海洋、土木建設、製造ライン、および各種法規制・監査基準に特化して訓練。' }
      ],
      valueChainTitle: 'ビジネス価値創出パイプライン',
      valueChainSubtitle: '生データから実行可能なアクションへ',
      valueChainBadge: '価値連鎖アーキテクチャ',
      stepSummary: 'ステージ概要',
      inputData: '入力データ:',
      outputResult: '自律出力・成果:'
    },
    portfolio: {
      badge: '全12ソリューション・製品群',
      title: 'あらゆるニーズに応える最適化されたソリューション。',
      subtitle: 'エンタープライズ規模の過酷な課題を解決するために開発された、12のAI・自動化・分析プラットフォーム。',
      catalogBtn: '📑 総合電子カタログ閲覧・PDF資料印刷 →',
      filters: {
        all: '全製品 (12)',
        enterprise: '文書・調達',
        industry: '産業・海洋',
        operations: 'フリート・運用',
        core: 'コアAI・セキュリティ'
      },
      targetIndustries: '対象産業:',
      keyFeatures: '主な機能・特長:',
      detailBtn: 'アーキテクチャ詳細・仕様を見る →',
      demoBtn: '技術デモを依頼する'
    },
    industry: {
      badge: '業界別ソリューション',
      title: '各業界に特化したインテリジェントAI。',
      subtitle: '各業界固有の業務課題や法規制に対応し、お客様のワークフローに精密に適合するAIアーキテクチャを構築します。',
      challengesLabel: '現場の運用課題:',
      solutionsLabel: 'Aegis AIによる解決策:',
      matchingProductsLabel: '連携可能ソリューション:',
      discussBtn: 'この業界の課題を相談する →'
    },
    technology: {
      badge: '技術基盤',
      title: 'Technology Behind the Intelligence.',
      subtitle: '高度な推論エンジン、画像認識、大量文書処理、および産業IoTテレメトリを統合した実証済みの技術スタック。',
      benefitLabel: '企業導入のメリット:'
    },
    privateAi: {
      badge: 'データ主権と自社管理',
      title: 'データが最も価値ある戦略資産であるとき。',
      subtitle: '機密データや経営戦略をパブリッククラウドに預けるリスクを排除し、完全隔離されたオンプレミス環境で自社専用AIを安全に運用します。',
      airGapBadge: '完全隔離エアギャップ・防衛および重要インフラ対応',
      zeroCloudDesc: '外部インターネットから完全に切り離された自社サーバー環境。すべての推論・ベクトル検索がローカルで完結。',
      consultBtn: '自社専用AI・データ主権の相談 →'
    },
    security: {
      badge: 'エンタープライズ・セキュリティ基準',
      title: 'プライバシーとゼロトラストを最優先した設計。',
      subtitle: 'セキュリティは後付けではなく、システム設計の原点です。ゼロトラスト原則を徹底し、企業の知的財産を守り抜きます。'
    },
    howItWorks: {
      badge: 'システムワークフロー',
      title: 'How It Works: データから実践的なアクションへ。',
      subtitle: '散在する社内データを戦略的意思決定と高速な業務自動化へ変換するエンドツーエンドの6段階プロセス。',
      stagePrefix: 'ステージ'
    },
    benefits: {
      badge: '業務改善と定性的インパクト',
      title: '日々の現場で実感できる確かな変革。',
      subtitle: '専門人材を反復作業から解放し、判断の精度を飛躍的に向上させ、組織の知的資産を守り抜く変革を実現します。',
      testedValue: '実証済みの導入効果'
    },
    useCases: {
      badge: '導入ユースケース',
      title: '実際のビジネス現場における導入実績。',
      subtitle: '過酷な産業環境や複雑な企業課題を解決したAegis AIの実例をご覧ください。',
      scenarioLabel: '背景・課題:',
      solutionLabel: '導入ソリューション:',
      resultLabel: '導入成果:'
    },
    company: {
      badge: '企業情報',
      title: '次世代のための知性を創造する。',
      quote: '「私たちは最先端AI、自動化、データ分析、プライベート基盤を融合し、現代の過酷なビジネス課題を乗り越えるテクノロジーを構築します」',
      p1Title: 'データ主権と自社管理',
      p1Desc: '戦略データは企業の最大の強みです。私たちのアーキテクチャはデータ所有者に完全な主権とセキュリティを保証します。',
      p2Title: '現場主義の実践的エンジニアリング',
      p2Desc: '実験室の中だけでなく、荒海を航行するタンカーや高温の工場現場、人里離れたインフラ建設現場で鍛え抜かれています。',
      p3Title: '透明性とフォレンジック精度',
      p3Desc: '検証可能な根拠文書の引用、監査に耐えうる意思決定プロセス、そして実測データに基づく誠実な性能を重視します。'
    },
    contact: {
      badge: 'お問い合わせ・デモ予約',
      title: '専門チームとの技術相談を開始する。',
      subtitle: '文書自動化、データ主権、または自社専用Private AIの導入について、弊社の専任エンジニアが個別にご提案いたします。',
      channelsTitle: '公式窓口',
      channelsSubtitle: '仕様書の確認、概算見積、PoC（概念実証）のご相談を随時承っております。',
      form: {
        name: '氏名',
        company: '貴社名・機関名',
        jobTitle: '役職・部署',
        email: '法人メールアドレス',
        phone: '電話番号 / WhatsApp',
        industry: '対象業界',
        solution: '関心のあるソリューション',
        message: 'ご相談内容・ご要望',
        submitBtn: 'デモ・相談を送信する',
        submitting: '送信中...',
        successTitle: '送信が完了いたしました',
        successDesc: '弊社のソリューションアーキテクトより、24営業時間内にご連絡を差し上げます。'
      }
    },
    footer: {
      desc: '大企業、海運、製造業、および政府機関向けのエンタープライズAI、プライベートAI、自動化、産業テクノロジー。',
      sovereignty: 'データ主権: 完全オンプレミス・エアギャップ対応',
      architecture: '設計モデル: ゼロトラスト・エンタープライズ',
      productsCol: '12製品ポートフォリオ',
      industriesCol: '対象産業別ソリューション',
      companyCol: '組織情報',
      rights: '無断転載を禁じます。すべての製品名は登録商標です。'
    }
  },

  ar: {
    companyValue: {
      badge: 'فلسفة هندسة النظم المؤسسية',
      title: 'ذكاء اصطناعي مصمم لبيئات العمل الواقعية.',
      subtitle: 'نحن لا نبني مجرد روبوتات محادثة استهلاكية عامة، بل ندمج الذكاء الاصطناعي المتقدم مع البيانات التشغيلية الواقعية وحوكمة أتمتة العمليات والمعرفة الصناعية العميقة.',
      cards: [
        { tag: 'استدلال دقيق', title: 'ذكاء اصطناعي إدراكي', desc: 'تجاوز مجرد مطابقة الكلمات المفتاحية إلى الفهم العميق لسياق العقود التجارية والمخططات الهندسية.' },
        { tag: 'تدفق متعدد الوسائط', title: 'بيانات موحدة', desc: 'ربط أرشيف ملفات PDF، ومخططات CAD، وحساسات SCADA، وسجلات أنظمة ERP كنسيج معرفي واحد.' },
        { tag: 'حوكمة مسارات العمل', title: 'أتمتة متدرجة', desc: 'إطلاق مسارات الاعتماد الإداري، وتوليد أوامر الشراء، وإرسال تنبيهات الحوادث الاستباقية.' },
        { tag: 'معرفة صناعية متخصصة', title: 'خبرة قطاعية عميقة', desc: 'نماذج مدربة خصيصاً على قطاعات الملاحة البحرية، والهندسة المدنية، والتصنيع، والامتثال.' }
      ],
      valueChainTitle: 'مسار تحويل القيمة المؤسسية',
      valueChainSubtitle: 'من البيانات الخام إلى الإجراءات التنفيذية المستقلة',
      valueChainBadge: 'بنية سلسلة القيمة',
      stepSummary: 'ملخص المرحلة',
      inputData: 'بيانات الإدخال:',
      outputResult: 'المخرجات التنفيذية:'
    },
    portfolio: {
      badge: 'محفظة المنتجات الكاملة (12 حلاً)',
      title: 'حلول ذكية مصممة لكافة متطلبات الأعمال.',
      subtitle: 'استكشف 12 منصة للذكاء الاصطناعي والأتمتة والتحليلات التنبؤية المصممة للتحديات المؤسسية الكبرى والمهام الحساسة.',
      catalogBtn: '📑 استعراض الكتالوج الإلكتروني الشامل وطباعة البروشور →',
      filters: {
        all: 'كافة المنتجات (12)',
        enterprise: 'المستندات والمشتريات',
        industry: 'الصناعة والملاحة البحرية',
        operations: 'الأسطول والعمليات',
        core: 'الذكاء الأساسي والأمن'
      },
      targetIndustries: 'القطاعات المستهدفة:',
      keyFeatures: 'أبرز القدرات والمزايا:',
      detailBtn: 'عرض المواصفات والبنية التقنية →',
      demoBtn: 'طلب عرض توضيحي فني'
    },
    industry: {
      badge: 'القطاعات الصناعية',
      title: 'ذكاء اصطناعي مخصص لمختلف الصناعات.',
      subtitle: 'يمتلك كل قطاع تحديات تشغيلية وتنظيمية فريدة. نحن نصمم معماريات ذكاء اصطناعي مخصصة بدقة لتلائم سير العمل في مؤسستك.',
      challengesLabel: 'التحديات التشغيلية الميدانية:',
      solutionsLabel: 'حلول إيجيس للذكاء الاصطناعي:',
      matchingProductsLabel: 'الحلول المتوافقة:',
      discussBtn: 'استشارة فنية لهذا القطاع →'
    },
    technology: {
      badge: 'الأساس التكنولوجي',
      title: 'التكنولوجيا المحركة للذكاء المؤسسي.',
      subtitle: 'بنية تكنولوجية موثوقة تجمع بين الاستدلال المعرفي المتقدم، والرؤية الحاسوبية، ومعالجة الوثائق الضخمة، والقياس عن بُعد لإنترنت الأشياء الصناعي.',
      benefitLabel: 'الميزة المؤسسية:'
    },
    privateAi: {
      badge: 'سيادة البيانات والتحكم الكامل',
      title: 'عندما تكون البيانات هي أصلك الاستراتيجي الأثمن.',
      subtitle: 'في عصر الذكاء الاصطناعي، يحمل إرسال البيانات السرية والاستراتيجية إلى السحابة العامة مخاطر غير مقبولة. نوفر بيئات ذكاء اصطناعي معزولة تماماً داخل مراكز بياناتك.',
      airGapBadge: 'عزل تام 100% (AIR-GAPPED) جاهز لقطاعات الدفاع والمؤسسات الحساسة',
      zeroCloudDesc: 'بنية تحتية محلية معزولة بالكامل عن الإنترنت العام، حيث تتم كافة عمليات الاستدلال وتضمين المتجهات محلياً.',
      consultBtn: 'استشارة حول الذكاء الاصطناعي الخاص وسيادة البيانات →'
    },
    security: {
      badge: 'معايير أمان المؤسسات',
      title: 'بنية معمارية قائمة على الخصوصية ومبدأ الثقة الصفرية.',
      subtitle: 'الأمان ليس مجرد إضافة لاحقة بل هو أساس تصميم كافة أنظمتنا، مع تطبيق مبادئ الثقة الصفرية لحماية الأصول الفكرية لمؤسستك.'
    },
    howItWorks: {
      badge: 'مسار عمل المنظومة',
      title: 'آلية العمل: من البيانات إلى الإجراءات الملموسة.',
      subtitle: 'عملية شاملة من 6 خطوات تحوّل البيانات المتناثرة إلى قرارات استراتيجية وأتمتة تشغيلية فائقة السرعة.',
      stagePrefix: 'المرحلة'
    },
    benefits: {
      badge: 'الأثر التشغيلي',
      title: 'أثر ملموس ينعكس على كفاءة الفرق.',
      subtitle: 'نهدف إلى إحداث تحول حقيقي في طريقة عمل فرقك: تحرير الخبراء من الأعباء الروتينية، وتعزيز دقة القرارات، وحماية الملكية الفكرية.',
      testedValue: 'قيمة نوعية مثبتة'
    },
    useCases: {
      badge: 'سيناريوهات تطبيقية واقعية',
      title: 'سيناريوهات تطبيق عملية واقعية.',
      subtitle: 'أمثلة واقعية توضح كيفية تطبيق منصات إيجيس للذكاء الاصطناعي لحل التحديات التشغيلية الحرجة في مختلف القطاعات.',
      scenarioLabel: 'السيناريو الميداني:',
      solutionLabel: 'حل الذكاء الاصطناعي:',
      resultLabel: 'النتائج المحققة:'
    },
    company: {
      badge: 'عن الشركة',
      title: 'بناء حلول الذكاء لمستقبل الأعمال.',
      quote: '"نحن نبني حلولاً تقنية تدمج بين الذكاء الاصطناعي، والأتمتة، والبيانات الذكية، والبنية التحتية الخاصة لمساعدة المؤسسات على مواجهة تعقيدات عالم الأعمال المعاصر."',
      p1Title: 'سيادة البيانات والتحكم التام',
      p1Desc: 'نؤمن بأن البيانات الاستراتيجية هي الميزة التنافسية الأكبر لأي مؤسسة، لذلك صُممت بنيتنا لمنحك السيطرة الكاملة والمطلقة دون أي تسريب.',
      p2Title: 'هندسة مجربة في الميدان',
      p2Desc: 'حلولنا لا تعمل فقط في بيئات المختبرات المثالية، بل أثبتت جدارتها في أعالي البحار، وخطوط الإنتاج الساخنة، ومواقع المشاريع النائية.',
      p3Title: 'الشفافية والدقة الجنائية',
      p3Desc: 'نمنح الأولوية للاستدلال القابل للتدقيق، وتقديم مراجع المستندات الأصلية، والابتعاد عن التقديرات غير الموثقة بالبيانات الواقعية.'
    },
    contact: {
      badge: 'الاستشارة وحجز العرض التجريبي',
      title: 'ابدأ النقاش الفني مع فريق خبرائنا.',
      subtitle: 'ناقش احتياجات الأتمتة، أو تدقيق المستندات، أو سيادة البيانات، أو بنية الذكاء الاصطناعي الخاص بمؤسستك مع حلول مخصصة بالكامل.',
      channelsTitle: 'القنوات الرسمية',
      channelsSubtitle: 'تواصل مع مهندسينا المعماريين لتقييم الاحتياجات الفنية وتقديم عروض الأسعار.',
      form: {
        name: 'الاسم الكامل',
        company: 'اسم الشركة / المؤسسة',
        jobTitle: 'المسمى الوظيفي / القسم',
        email: 'البريد الإلكتروني للعمل',
        phone: 'رقم الهاتف / واتساب',
        industry: 'القطاع الصناعي',
        solution: 'الحل أو المنتج المطلوب',
        message: 'تفاصيل المتطلبات أو الاستفسارات الفنية',
        submitBtn: 'إرسال طلب العرض والاستشارة',
        submitting: 'جارٍ المعالجة...',
        successTitle: 'تم إرسال طلبكم بنجاح',
        successDesc: 'سيتواصل مهندسو حلول إيجيس معكم خلال 24 ساعة عمل.'
      }
    },
    footer: {
      desc: 'حلول الذكاء الاصطناعي المؤسسي، والذكاء الخاص، والأتمتة، وتقنيات الصناعة الاستراتيجية للشركات الكبرى والقطاعين البحري والحكومي.',
      sovereignty: 'السيادة: تثبيت محلي 100% معزول عن الإنترنت',
      architecture: 'البنية: نموذج الثقة الصفرية للمؤسسات',
      productsCol: '12 منتجاً في المحفظة',
      industriesCol: 'الحلول الصناعية',
      companyCol: 'المؤسسة',
      rights: 'جميع الحقوق محفوظة. كافة أسماء المنتجات هي علامات تجارية مسجلة.'
    }
  }
};
