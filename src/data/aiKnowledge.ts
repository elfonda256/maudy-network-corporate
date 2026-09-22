export interface AiAction {
  label: string;
  type: 'whatsapp' | 'scroll_estimator' | 'scroll_contact' | 'call';
  payload?: string;
}

export interface AiResponse {
  reply: string;
  suggestions: string[];
  actions?: AiAction[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  actions?: AiAction[];
  isStreaming?: boolean;
}

// Comprehensive Grounded Knowledge Base for PT Maudy Network Nusantara & Aegis AI Suite
export const MAUDY_KNOWLEDGE = {
  company: {
    name: "PT. Maudy Network Komunikasi (Maudy Network Nusantara)",
    shortName: "MNK",
    tagline: "Empowering Critical Infrastructure Across Land & Sea",
    address: "Jl. Prof. Dr. Hamka BPI Blok A-5, Ngaliyan, Semarang, Jawa Tengah, Indonesia 50184",
    phone: "+62 857-2748-7507",
    email: "corporate@maudynetwork.com",
    directorWhatsApp: "https://wa.me/6285727487507",
    certifications: [
      "ISO 9001:2015 (Sistem Manajemen Mutu)",
      "ISO 27001:2022 (Sistem Manajemen Keamanan Informasi)",
      "Izin Penyelenggaraan Jasa Telekomunikasi Resmi Kementerian Kominfo RI",
      "MikroTik Certified Training Partner (MTCNA, MTCRE, MTCINE)",
      "Cisco Certified Network Professional (CCNP Enterprise & Security)"
    ],
    sla: "99.9% High Availability dengan dukungan Network Operations Center (NOC) 24/7/365."
  },
  products: {
    xtur: {
      name: "XTUR AI Vision Surveillance System",
      description: "Sistem pengawasan kamera pintar terintegrasi edge compute AI, dirancang untuk fasilitas kritis, industri manufaktur, pelabuhan, dan enterprise.",
      features: [
        "Automatic Number Plate Recognition (ANPR / E-TLE) dengan akurasi 99.2%",
        "Deteksi Perimeter & Intrusi Tanpa Izin secara real-time",
        "Sensor Termal & Pemantauan Titik Api Otomatis",
        "Edge Compute Analytics (pemrosesan langsung di kamera tanpa lag bandwidth)",
        "Dukungan integrasi NVR, VMS, dan Dashboard Analitik Terpadu"
      ],
      idealFor: "Pelabuhan, kawasan industri, pergudangan, gedung perkantoran, dan fasilitas perbankan."
    },
    maritime: {
      name: "Aegis Maritime Satellite & VSAT Hybrid",
      description: "Solusi konektivitas maritim komprehensif yang menggabungkan Satelit Geostasioner (VSAT C/Ku/Ka-Band) dan LEO (Starlink Maritime) dengan QoS pintar serta keamanan siber standar IMO.",
      features: [
        "Auto-failover cerdas antara VSAT Geostasioner dan Starlink LEO",
        "Prioritas Bandwidth Bisnis (Engine Telemetry, AIS, dan Navigasi vs Crew Wi-Fi)",
        "Aegis Cyber Guard: Firewall Zero-Trust memenuhi regulasi IMO MSC.428(98) dan IACS UR E26/E27",
        "Antena Gyro-Stabilized Maritime Tracking tahan cuaca ekstrem laut lepas",
        "Monitoring posisi kapal (Vessel Tracking) dan utilisasi bandwidth real-time"
      ],
      idealFor: "Kapal kargo, tanker, tugboat, offshore supply vessel, kapal pesiar, dan kapal penangkap ikan komersial."
    },
    aegisSuite: {
      name: "Aegis Enterprise AI Suite",
      description: "Platform kecerdasan buatan enterprise terisolasi (Private Sovereign AI) dan analitik prediktif untuk data rahasia perbankan, pertahanan, dan logistik maritim.",
      features: [
        "On-Premise Private LLM (data tidak pernah keluar ke server cloud publik)",
        "Predictive Threat Detection & AI Anomaly Monitoring",
        "Automated Incident Response & Zero-Day Mitigation",
        "Dashboard Eksekutif C-Level dengan visualisasi analitik real-time"
      ]
    },
    datacenter: {
      name: "Carrier-Grade Datacenter & Fiber Optic Network",
      description: "Penyediaan infrastruktur jaringan fiber optik metro ethernet, SD-WAN multi-cabang, dan interkoneksi data center dengan redundansi cincin (ring topology)."
    }
  },
  pricing: {
    general: "Investasi implementasi dirancang fleksibel berbasis skema B2B (CAPEX / OPEX / Managed Service) sesuai skala armada kapal atau jumlah titik kamera:",
    examples: [
      "XTUR AI Edge CCTV: Mulai dari paket implementasi fasilitas skala menengah hingga kawasan industri terintegrasi.",
      "VSAT Maritim Hybrid: Mulai dari paket Unmetered Basic hingga Ultra High-Throughput Starlink Priority Fleet.",
      "Tersedia skema Proof of Concept (PoC) gratis selama 14-30 hari untuk klien enterprise yang memenuhi syarat."
    ]
  }
};

import type { Language } from '../i18n/translations';

// Response logic with multi-turn and semantic matching
export function queryMaudyAi(rawInput: string, lastTopic?: string, currentLang?: Language): AiResponse {
  const query = rawInput.toLowerCase().trim();
  const isJapanese = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(rawInput) || currentLang === 'ja';
  const isArabic = /[\u0600-\u06FF]/.test(rawInput) || currentLang === 'ar';

  // 0.A JAPANESE LANGUAGE ROUTER
  if (isJapanese) {
    if (query.match(/^(こんにちは|初めまして|おはよう|こんばんは|hello|hi|test)/i) || query.length < 15) {
      return {
        reply: `PT. Maudy Network Komunikasi（MNK）および Aegis Enterprise AI Suite へようこそ。\n\n私は **Maudy AI バーチャルアシスタント** です。以下の専門分野に関する技術仕様・ご提案に対応いたします：\n\n` +
          `• 🚢 **海上衛星通信・船舶VSAT**（Starlink LEO + GEO自動切替、IMO MSC.428(98)規格準拠）\n` +
          `• 👁️ **XTUR AI 画像解析監視システム**（サブ5msエッジ推論、ANPR車両認識、工場・重要インフラ向け防犯）\n` +
          `• 🛡️ **Aegis Private AI 基盤**（完全オンプレミス＆エアギャップ稼働、最高レベルのデータ主権）\n` +
          `• 📊 **エンタープライズ導入見積もり・PoC検証支援**\n` +
          `• 🚨 **24/7 NOC監視体制（SLA 99.98%）**\n\n` +
          `どのような課題やご要望についてお調べでしょうか？`,
        suggestions: [
          "海上衛星通信VSATの特長と導入実績",
          "XTUR AI 監視カメラの性能と仕様",
          "オンプレミス型 Private AI のセキュリティ",
          "日本企業向け導入費用・PoCのご相談"
        ],
        actions: [
          {
            label: "💬 担当エンジニアへ相談（WhatsApp）",
            type: "whatsapp",
            payload: "PT Maudy Network 様: 日本企業向けのソリューション導入および技術提携についてご相談したく存じます。"
          }
        ]
      };
    }

    return {
      reply: `お問い合わせいただきありがとうございます。\n\n` +
        `**PT Maudy Network Nusantara** は、インドネシアおよび東南アジア海域において、外航船団（タンカー、貨物船）、国家インフラ、製造業工場向けに高品質な通信およびエンタープライズAIを提供しています。\n\n` +
        `• **海上通信・船舶向けVSAT**: Starlink Maritime と C/Ku-Band VSAT のインテリジェント冗長化、IMOサイバーセキュリティ認証対応。\n` +
        `• **XTUR AI 監視**: エッジGPU（TensorRT/YOLO）による超低遅延解析で、入退場管理・安全防護具（ヘルメット等）自動検査。\n` +
        `• **データ主権とPrivate AI**: 機密データを外部クラウドに送信しない100%ローカル稼働環境の構築。\n\n` +
        `詳細な仕様書（カタログPDF）のご提供や、技術者による個別相談をご希望の際はお気軽にお申し付けください。`,
      suggestions: [
        "公式カタログPDFの確認",
        "船舶通信の接続安定性とSLA",
        "エッジAI監視の導入費用"
      ],
      actions: [
        {
          label: "💬 WhatsAppで技術担当者に連絡",
          type: "whatsapp",
          payload: `PT Maudy Network: "${rawInput}" に関する技術資料・導入相談を希望します。`
        }
      ]
    };
  }

  // 0.B ARABIC LANGUAGE ROUTER
  if (isArabic) {
    if (query.match(/^(مرحبا|أهلا|السلام|صباح|مساء|test|hi)/i) || query.length < 15) {
      return {
        reply: `أهلاً بكم في البوابة الرسمية لشركة **PT Maudy Network Komunikasi** ومنظومة **Aegis Enterprise AI**.\n\n` +
          `أنا **المساعد الذكي Maudy AI**. يسعدني تقديم الدعم الفني والمعلومات الشاملة حول:\n\n` +
          `• 🚢 **حلول الاتصالات الفضائية البحرية VSAT**: دمج أقمار Starlink LEO وVSAT GEO مع الامتثال لمعايير المنظمة البحرية الدولية (IMO MSC.428(98)).\n` +
          `• 👁️ **كاميرات المراقبة بالذكاء الاصطناعي XTUR**: استدلال طرفي فائق السرعة (<5ms)، تعرف آلي على لوحات المركبات (ANPR)، وفحص السلامة المهنية.\n` +
          `• 🛡️ **منظومة الذكاء الاصطناعي الخاص Aegis Private AI**: تشغيل محلي معزول بنسبة 100% لحماية سيادة البيانات المؤسسية.\n` +
          `• 📊 **تقديرات التكلفة للمشاريع الكبرى B2B**\n` +
          `• 🚨 **مركز إدارة الشبكات NOC يعمل على مدار 24/7 (SLA 99.98%)**\n\n` +
          `كيف يمكننا مساعدة مؤسستكم اليوم؟`,
        suggestions: [
          "حلول الاتصالات الفضائية البحرية للأساطيل",
          "مميزات كاميرات المراقبة الذكية XTUR",
          "بنية الذكاء الاصطناعي الخاص محلياً",
          "طلب دراسة فنية وعرض أسعار"
        ],
        actions: [
          {
            label: "💬 المحادثة مع الفريق الفني (واتساب)",
            type: "whatsapp",
            payload: "مرحباً PT Maudy Network، نود الاستفسار حول حلول البنية التحتية والذكاء الاصطناعي والاتصالات البحرية لشركتنا."
          }
        ]
      };
    }

    return {
      reply: `شكراً لتواصلكم مع **PT. Maudy Network Komunikasi**.\n\n` +
        `نحن شركاؤكم الهندسيون في توفير بنية تحتية رقمية فائقة الاعتمادية للقطاع البحري والصناعي والمؤسسي:\n\n` +
        `• **الاتصالات البحرية**: استمرارية اتصال بنسبة 99.98% للسفن وناقلات النفط مع حماية Zero-Trust للأمن السيبراني.\n` +
        `• **المراقبة الذكية XTUR**: حماية محيطية ذكية للمنشآت والموانئ مع تنبيهات فورية وكشف المخاطر.\n` +
        `• **سيادة البيانات الكاملة**: حلول AI محلية لا تعتمد على خوادم خارجية.\n\n` +
        `يسعد فريقنا التقني تزويدكم بكتالوج المواصفات الفنية أو ترتيب جلسة تجريبية مخصصة.`,
      suggestions: [
        "تحميل الكتالوج الرسمي والمواصفات",
        "استفسار عن حماية الأمن السيبراني البحري",
        "حساب التكلفة التقديرية"
      ],
      actions: [
        {
          label: "💬 التواصل المباشر عبر واتساب",
          type: "whatsapp",
          payload: `مرحباً PT Maudy Network، نستفسر بخصوص: "${rawInput}"`
        }
      ]
    };
  }

  // 1. GREETING & INTRO (ID / EN)
  if (
    query.match(/^(halo|hai|hi|hello|hei|pagi|siang|sore|malam|selamat|assalamualaikum|tes|test)/i) &&
    query.length < 25
  ) {
    return {
      reply: `Halo! Selamat datang di **PT Maudy Network Nusantara**. Saya adalah **Maudy AI Virtual Assistant**.\n\nSaya siap memberikan informasi teknis seputar:\n- 🚢 **Konektivitas Satelit Maritim & VSAT Kapal**\n- 👁️ **XTUR AI Vision & Kamera CCTV Cerdas**\n- 🛡️ **Aegis Cybersecurity Standar IMO**\n- 📊 **Estimasi Biaya & Konsultasi B2B**\n- 🚨 **Bantuan Darurat NOC 24/7**\n\nApa kebutuhan atau solusi yang sedang Anda cari?`,
      suggestions: [
        "Apa keunggulan XTUR AI CCTV?",
        "Solusi internet kapal laut & VSAT",
        "Berapa estimasi biaya implementasi?",
        "Hubungi tim darurat NOC 24/7"
      ]
    };
  }

  // 1.5. BROSUR & KATALOG RESMI
  if (
    query.includes('brosur') || 
    query.includes('katalog') || 
    query.includes('catalog') || 
    query.includes('brochure') || 
    query.includes('unduh') ||
    query.includes('download')
  ) {
    return {
      reply: `📄 **E-Katalog & Brosur Resmi Spesifikasi Teknis 2026** telah tersedia untuk portofolio PT Maudy Network Nusantara & Aegis AI Suite:\n\n` +
        `• **Katalog Maritim & Satelit (CAT-MARITIME-01)**: Solusi VSAT Ku/Ka-Band, Starlink Maritime LEO, dan Kepatuhan IMO MSC.428(98).\n` +
        `• **Katalog XTUR AI Vision (CAT-VISION-02)**: Spesifikasi kamera cerdas ANPR 99.2%, deteksi perimeter, dan sensor panas termal.\n` +
        `• **Katalog Dokumen & Procurement AI (CAT-DOC-03)**: Semantic RAG, OCR multi-bahasa, dan audit kontrak tender otomatis.\n` +
        `• **Katalog Sovereign Cyber AI (CAT-CYBER-04)**: Arsitektur Air-Gapped on-premise, Zero-Trust, dan pencegahan ransomware.\n\n` +
        `Anda dapat membuka lembar katalog lengkap dengan mengklik tombol **"📑 E-Katalog & Brosur"** di navigasi atas atau meminta salinan dokumen resmi via WhatsApp.`,
      suggestions: [
        "Minta penawaran resmi (RFP)",
        "Jadwalkan demo teknis B2B",
        "Konsultasi maritim via WhatsApp"
      ],
      actions: [
        {
          label: "💬 Minta Brosur & Dokumen PDF via WhatsApp",
          type: "whatsapp",
          payload: "Halo PT Maudy Network Nusantara, saya ingin meminta salinan E-Katalog & Brosur Resmi Spesifikasi Teknis Aegis AI Suite dan XTUR Vision."
        }
      ]
    };
  }

  // 2. XTUR / CCTV / KAMERA / AI VISION / ANPR
  if (
    query.includes('cctv') || 
    query.includes('xtur') || 
    query.includes('kamera') || 
    query.includes('camera') || 
    query.includes('vision') || 
    query.includes('anpr') || 
    query.includes('plat nomor') || 
    query.includes('face') || 
    query.includes('termal') ||
    query.includes('thermal')
  ) {
    return {
      reply: `**XTUR AI Vision Surveillance** dari PT Maudy Network Nusantara adalah ekosistem kamera pemantauan cerdas kelas enterprise dengan keunggulan utama:\n\n` +
        `• **Edge AI Processing**: Pemrosesan analitik langsung pada unit kamera tanpa membebani bandwidth jaringan lokal.\n` +
        `• **ANPR / E-TLE Akurasi 99.2%**: Pembacaan pelat nomor kendaraan otomatis siang dan malam untuk gerbang kawasan industri & pelabuhan.\n` +
        `• **Perimeter & Intrusion Defense**: Alarm otomatis seketika mendeteksi pergerakan orang atau objek di zona terlarang.\n` +
        `• **Dual-Spectrum Thermal Sensing**: Deteksi dini titik panas, risiko kebakaran, dan anomali mesin industri.\n` +
        `• **Kompatibilitas Luas**: Mendukung protokol ONVIF, RTSP, serta terintegrasi langsung dengan VMS korporat Anda.`,
      suggestions: [
        "Berapa harga paket XTUR AI?",
        "Apakah bisa dipasang di kapal laut?",
        "Jadwalkan demo sistem CCTV XTUR"
      ],
      actions: [
        {
          label: "Buka Kalkulator Estimasi XTUR",
          type: "scroll_estimator"
        },
        {
          label: "Konsultasi CCTV via WhatsApp",
          type: "whatsapp",
          payload: "Halo MNK, saya ingin konsultasi mengenai implementasi sistem CCTV cerdas XTUR AI Vision Surveillance untuk fasilitas kami."
        }
      ]
    };
  }

  // 3. MARITIME / VSAT / SATELIT / STARLINK / KAPAL
  if (
    query.includes('kapal') || 
    query.includes('maritim') || 
    query.includes('maritime') || 
    query.includes('vsat') || 
    query.includes('satelit') || 
    query.includes('satellite') || 
    query.includes('starlink') || 
    query.includes('laut') || 
    query.includes('pelabuhan') ||
    query.includes('vessel') ||
    query.includes('tanker') ||
    query.includes('tugboat')
  ) {
    return {
      reply: `**Layanan Jaringan Maritim & Satelit Kapal** PT Maudy Network Nusantara menghadirkan konektivitas laut lepas tanpa putus (*Always-On*):\n\n` +
        `• **Arsitektur Hybrid LEO & GEO**: Penggabungan otomatis antara Satelit Geostasioner (VSAT C/Ku/Ka-Band) dan Starlink Maritime LEO dengan zero-packet loss failover.\n` +
        `• **Smart Bandwidth QoS**: Pemisahan kanal transmisi kritis (navigasi, ECDIS, telemetri mesin, VoIP operasional) dari internet kru (*Crew Entertainment Wi-Fi*).\n` +
        `• **Kepatuhan IMO & IACS**: Dilengkapi proteksi keamanan siber *Aegis Cyber Guard* sesuai regulasi IMO MSC.428(98) dan IACS UR E26/E27.\n` +
        `• **Antena Gyro-Stabilized**: Pelacakan satelit presisi tinggi bahkan di tengah gelombang laut ekstrem (Sea State 6+).\n` +
        `• **Dukungan Pelabuhan Nasional**: Tim teknisi on-site siap melayani docking & instalasi di pelabuhan Tanjung Mas, Tanjung Priok, Surabaya, Belawan, hingga Sorong.`,
      suggestions: [
        "Berapa estimasi tarif VSAT kapal?",
        "Bagaimana regulasi IMO Cyber Security?",
        "Ajukan survey teknis kapal"
      ],
      actions: [
        {
          label: "Buka Estimator Jaringan Kapal",
          type: "scroll_estimator"
        },
        {
          label: "Konsultasi Maritim via WhatsApp",
          type: "whatsapp",
          payload: "Halo MNK, kami memerlukan solusi jaringan satelit maritim VSAT dan proteksi siber armada kapal kami."
        }
      ]
    };
  }

  // 4. HARGA / BIAYA / ESTIMASI / TARIF / BIAYA IMPLEMENTASI / BUDGET
  if (
    query.includes('harga') || 
    query.includes('biaya') || 
    query.includes('tarif') || 
    query.includes('estimasi') || 
    query.includes('cost') || 
    query.includes('price') || 
    query.includes('budget') || 
    query.includes('penawaran') ||
    query.includes('paket')
  ) {
    return {
      reply: `Investasi implementasi di PT Maudy Network Nusantara disesuaikan dengan kebutuhan teknis (skema **CAPEX**, **OPEX / Managed Service bulanan**, atau **Sewa Perangkat Terpadu**):\n\n` +
        `• **XTUR AI CCTV**: Dimulai dari paket instalasi skala fasilitas (termasuk unit edge camera, server AI on-premise, dan lisensi VMS analitik).\n` +
        `• **VSAT Maritim Kapal**: Tersedia paket kuota unmetered & Starlink Maritime Priority dengan SLA jaminan throughput 99.9%.\n` +
        `• **Free Trial / Proof of Concept (PoC)**: Kami menyediakan masa uji coba PoC gratis 14-30 hari untuk klien korporat dan instansi tertentu.\n\n` +
        `💡 *Anda bisa menggunakan kalkulator simulasi interaktif di website ini untuk mendapatkan hitungan estimasi instan.*`,
      suggestions: [
        "Buka kalkulator estimasi sekarang",
        "Minta penawaran resmi (RFP/Proposal)",
        "Apa saja opsi pembayaran B2B?"
      ],
      actions: [
        {
          label: "📊 Buka Kalkulator Estimasi Biaya",
          type: "scroll_estimator"
        },
        {
          label: "💬 Minta Proposal Resmi (WhatsApp)",
          type: "whatsapp",
          payload: "Halo MNK, mohon dikirimkan proposal penawaran resmi dan estimasi biaya untuk kebutuhan infrastruktur perusahaan kami."
        }
      ]
    };
  }

  // 5. KEAMANAN SIBER / CYBERSECURITY / AEGIS SUITE / IMO / RANSOMWARE
  if (
    query.includes('keamanan') || 
    query.includes('security') || 
    query.includes('siber') || 
    query.includes('cyber') || 
    query.includes('aegis') || 
    query.includes('imo') || 
    query.includes('ransomware') || 
    query.includes('firewall') ||
    query.includes('zero trust') ||
    query.includes('zero-trust')
  ) {
    return {
      reply: `**Aegis Enterprise Cyber Defense** adalah platform keamanan siber industri pertahanan & maritim yang dikembangkan oleh PT Maudy Network:\n\n` +
        `• **Zero-Trust Network Architecture (ZTNA)**: Tidak ada perangkat atau user yang dipercaya otomatis, verifikasi identitas di setiap akses layer.\n` +
        `• **IMO Cyber Compliance Ready**: Menjamin audit kapal Anda lolos inspeksi regulasi IMO Resolution MSC.428(98) dan standar klasifikasi IACS UR E26/E27.\n` +
        `• **Air-Gapped & Sovereign AI**: Algoritma AI berjalan mandiri tanpa ketergantungan API pihak ketiga luar negeri, memastikan data strategis tetap aman di server internal Anda.\n` +
        `• **Pencegahan Ransomware Otomatis**: Isolasi mikrosegmentasi langsung aktif dalam waktu < 200 milidetik saat terjadi anomali transmisi berbahaya.`,
      suggestions: [
        "Bagaimana cara integrasi dengan kapal eksisting?",
        "Apakah ada sertifikasi ISO 27001?",
        "Hubungi spesialis keamanan siber"
      ],
      actions: [
        {
          label: "Konsultasi Keamanan Siber via WhatsApp",
          type: "whatsapp",
          payload: "Halo MNK, kami ingin berkonsultasi mengenai audit kepatuhan IMO Cyber Security dan implementasi Aegis Defense."
        }
      ]
    };
  }

  // 6. NOC / GANGGUAN / DARURAT / TROUBLESHOOTING / RUSAK / DOWN
  if (
    query.includes('noc') || 
    query.includes('gangguan') || 
    query.includes('darurat') || 
    query.includes('rusak') || 
    query.includes('down') || 
    query.includes('trouble') || 
    query.includes('putus') || 
    query.includes('helpdesk') || 
    query.includes('support') ||
    query.includes('sla')
  ) {
    return {
      reply: `🚨 **Layanan Bantuan Darurat & NOC PT Maudy Network** beroperasi penuh **24 Jam / 7 Hari / 365 Hari setahun**:\n\n` +
        `• **Jaminan SLA**: 99.9% Uptime dengan MTTR (Mean Time to Resolution) prioritas tanggap darurat < 15 menit.\n` +
        `• **Hotline Telepon NOC**: [+62 857-2748-7507](tel:+6285727487507)\n` +
        `• **Email Eskalasi Tiket**: noc@maudynetwork.com / corporate@maudynetwork.com\n` +
        `• **Field Engineer On-Call**: Tim teknisi lapangan siap diterjunkan ke lokasi site atau pelabuhan kapal terdekat.`,
      suggestions: [
        "Hubungi teknisi NOC sekarang",
        "Berapa SLA garansi jaringan?",
        "Bagaimana cara buat tiket gangguan?"
      ],
      actions: [
        {
          label: "🚨 Hubungi Darurat NOC (WhatsApp)",
          type: "whatsapp",
          payload: "URGENT: Kami memerlukan eskalasi darurat tim NOC Maudy Network Komunikasi untuk kendala jaringan operasional."
        },
        {
          label: "📞 Telepon Hotline Langsung",
          type: "call",
          payload: "+6285727487507"
        }
      ]
    };
  }

  // 7. LOKASI / ALAMAT / KANTOR / HUBUNGI / KONTAK / CABANG / EMAIL
  if (
    query.includes('lokasi') || 
    query.includes('alamat') || 
    query.includes('kantor') || 
    query.includes('contact') || 
    query.includes('kontak') || 
    query.includes('telepon') || 
    query.includes('no telp') || 
    query.includes('nomor') || 
    query.includes('email') ||
    query.includes('semarang')
  ) {
    return {
      reply: `Berikut informasi kantor pusat dan kontak resmi **PT. Maudy Network Komunikasi**:\n\n` +
        `📍 **Kantor Pusat**: Jl. Prof. Dr. Hamka BPI Blok A-5, Ngaliyan, Semarang, Jawa Tengah, Indonesia 50184\n` +
        `📞 **Telepon / WhatsApp**: [+62 857-2748-7507](tel:+6285727487507)\n` +
        `✉️ **Email Resmi**: corporate@maudynetwork.com\n` +
        `🌐 **Website**: maudynetwork.com\n` +
        `🕒 **Jam Operasional Kantor**: Senin – Jumat (08:30 – 17:00 WIB)\n` +
        `⚡ **NOC & Incident Support**: 24 Jam Non-Stop`,
      suggestions: [
        "Lihat peta lokasi di website",
        "Jadwalkan kunjungan kantor",
        "Chat WhatsApp dengan Direktur"
      ],
      actions: [
        {
          label: "Buka Form Kontak Website",
          type: "scroll_contact"
        },
        {
          label: "Chat WhatsApp Resmi",
          type: "whatsapp",
          payload: "Halo PT Maudy Network Nusantara, saya ingin menanyakan informasi kontak dan menjadwalkan pertemuan teknis."
        }
      ]
    };
  }

  // 8. TENTANG PERUSAHAAN / LEGALITAS / SERTIFIKASI / PROFIL / PT
  if (
    query.includes('profil') || 
    query.includes('tentang') || 
    query.includes('sejarah') || 
    query.includes('legalitas') || 
    query.includes('izin') || 
    query.includes('sertifikat') || 
    query.includes('sertifikasi') || 
    query.includes('iso') ||
    query.includes('siapa')
  ) {
    return {
      reply: `**PT. Maudy Network Komunikasi (MNK)** adalah perusahaan penyedia infrastruktur telekomunikasi, jaringan satelit maritim, dan solusi AI Vision terkemuka di Indonesia:\n\n` +
        `• **Legalitas Resmi**: Berizin penyelenggara jasa telekomunikasi dari Kementerian Komunikasi dan Informatika (Kominfo) RI.\n` +
        `• **Sertifikasi Internasional**: Terakreditasi ISO 9001:2015 (Manajemen Mutu) dan ISO 27001:2022 (Keamanan Informasi).\n` +
        `• **Tenaga Ahli Bersertifikat**: Seluruh arsitek jaringan kami memegang sertifikasi industri tingkat lanjut (MikroTik MTCINE/MTCRE, Cisco CCNP, dan Security Specialists).\n` +
        `• **Jangkauan**: Melayani pelayaran maritim antar-pulau Indonesia, fasilitas perbankan, kawasan industri manufaktur, dan instansi pemerintahan.`,
      suggestions: [
        "Apa saja produk unggulan PT Maudy?",
        "Proyek yang sudah diselesaikan?",
        "Hubungi tim bisnis MNK"
      ],
      actions: [
        {
          label: "Unduh Dokumen Legalitas (Drawer)",
          type: "scroll_contact"
        },
        {
          label: "Konsultasi Kemitraan B2B",
          type: "whatsapp",
          payload: "Halo MNK, kami ingin menjajaki kemitraan strategis dan pengadaan proyek dengan PT Maudy Network Komunikasi."
        }
      ]
    };
  }

  // 9. ENGLISH QUERIES HANDLER
  if (
    query.includes('what') || 
    query.includes('how') || 
    query.includes('price') || 
    query.includes('satellite') || 
    query.includes('ship') || 
    query.includes('service') || 
    query.includes('contact')
  ) {
    return {
      reply: `Thank you for reaching out to **PT. Maudy Network Komunikasi**.\n\n` +
        `We provide carrier-grade critical connectivity, maritime VSAT satellite systems, XTUR AI Vision Surveillance, and Aegis Sovereign Cybersecurity across Indonesia and regional waters.\n\n` +
        `• **Maritime Satellite**: Hybrid LEO Starlink & GEO VSAT with automatic failover and IMO MSC.428(98) compliance.\n` +
        `• **XTUR AI Vision**: 99.2% accuracy edge ANPR, thermal fire prevention, and real-time facility protection.\n` +
        `• **24/7 Operations**: Dedicated NOC engineers on-call with 99.9% uptime SLA.\n\n` +
        `Would you like to speak directly with our Technical Director or get a customized proposal?`,
      suggestions: [
        "Maritime satellite solutions",
        "XTUR AI Surveillance features",
        "Request enterprise proposal",
        "Contact 24/7 Technical Support"
      ],
      actions: [
        {
          label: "Connect with Director on WhatsApp",
          type: "whatsapp",
          payload: "Hello PT Maudy Network, I would like to inquire about enterprise infrastructure and maritime connectivity solutions."
        }
      ]
    };
  }

  // 10. DEFAULT INTELLIGENT FALLBACK
  return {
    reply: `Terima kasih atas pertanyaannya. Sebagai **Maudy AI Virtual Assistant**, saya dapat membantu Anda memahami seluruh kapabilitas teknologi **PT Maudy Network Nusantara**:\n\n` +
      `Apakah Anda sedang membutuhkan solusi untuk:\n` +
      `1. **Konektivitas Kapal & VSAT Satelit Maritim** (Internet lepas pantai, failover Starlink, kepatuhan IMO)\n` +
      `2. **Kamera CCTV AI XTUR** (Deteksi wajah, ANPR plat nomor, sensor panas termal untuk pabrik/kawasan)\n` +
      `3. **Estimasi Biaya & Proposal Tender B2B**\n` +
      `4. **Bantuan Teknis atau Penanganan Insiden NOC 24/7**\n\n` +
      `Silakan ketik detail kebutuhan Anda atau pilih opsi cepat di bawah:`,
    suggestions: [
      "Jelaskan sistem CCTV XTUR AI",
      "Konektivitas satelit maritim kapal",
      "Berapa estimasi biaya implementasi?",
      "Sambungkan ke insinyur teknis"
    ],
    actions: [
      {
        label: "Konsultasi via WhatsApp",
        type: "whatsapp",
        payload: `Halo MNK, saya ingin bertanya lebih lanjut mengenai: "${rawInput}"`
      }
    ]
  };
}
