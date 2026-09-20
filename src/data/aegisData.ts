export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'enterprise' | 'industry' | 'core' | 'operations';
  targetIndustries: string[];
  keyFeatures: string[];
  useCases: string[];
  sampleQuestions?: string[];
  dashboardType: 'document' | 'procurement' | 'construction' | 'maintenance' | 'maritime' | 'cyber' | 'waste' | 'fleet' | 'twin' | 'comply' | 'business' | 'private_ai';
  flagship?: boolean;
  corePlatform?: boolean;
  visualImage?: string;
  metrics: { label: string; value: string; desc: string }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  matchingProducts: string[];
  iconName: string;
  metricDemo: string;
}

export interface TechModule {
  name: string;
  acronym: string;
  category: string;
  description: string;
  enterpriseBenefit: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'ai-doc-intel',
    name: 'AI Document Intelligence',
    tagline: 'Ubah Dokumen Menjadi Pengetahuan.',
    description: 'Platform AI enterprise yang membantu organisasi membaca, mengindeks, mencari, memahami, dan menganalisis ribuan dokumen bisnis secara instan dan akurat.',
    category: 'enterprise',
    targetIndustries: ['Enterprise', 'Pemerintahan', 'Konstruksi', 'Engineering', 'Legal', 'Finance', 'Procurement', 'Manufaktur'],
    keyFeatures: [
      'AI Document Semantic Search',
      'High-Precision OCR Multibahasa',
      'Document Intelligence & Entity Extraction',
      'Deep Contract Analysis & Risk Detection',
      'Automated Executive Summarization',
      'Private Knowledge Base Retrieval',
      'RAG (Retrieval-Augmented Generation)',
      'Enterprise AI Assistant',
      'Role-Based Access Management (RBAC)',
      'Immutable Audit Trail & Compliance',
      'Air-Gapped Private Deployment'
    ],
    useCases: [
      'Pencarian klausul spesifik pada ribuan halaman kontrak tender.',
      'Ekstraksi otomatis PO, invoice, dan dokumen legal ke ERP.',
      'Pengecekan kelengkapan berkas administrasi proyek skala besar.'
    ],
    sampleQuestions: [
      'Berapa total nilai komitmen kontrak proyek Tower B?',
      'Kapan kontrak vendor PT Samudera Perkasa berakhir?',
      'Dokumen izin lingkungan mana yang belum diperbarui?'
    ],
    dashboardType: 'document',
    metrics: [
      { label: 'Format Dokumen', value: '50+ Tipe', desc: 'PDF, CAD, Scanned Docs, Office' },
      { label: 'Kecepatan Indeks', value: '< 1.2 Detik', desc: 'Per 1.000 Halaman Kompleks' },
      { label: 'Akurasi Ekstraksi', value: 'Enterprise Grade', desc: 'Validasi OCR Multi-layer' }
    ]
  },
  {
    id: 'procure-ai',
    name: 'Procure AI',
    tagline: 'Procurement Lebih Cepat. Keputusan Lebih Cerdas.',
    description: 'Platform otomasi pengadaan cerdas dari Request, RFQ, Vendor Quotation OCR, Matrix Comparison otomatis, Approval Workflow terdistribusi, hingga Purchase Order.',
    category: 'enterprise',
    targetIndustries: ['Enterprise', 'Konstruksi', 'Manufaktur', 'Mining', 'Hospitality', 'Logistik'],
    keyFeatures: [
      'AI Automated RFQ Generator',
      'Quotation OCR & Table Parser',
      'Matrix Vendor Comparison',
      'Dynamic Price & Terms Benchmarking',
      'Specification & Compliance Matching',
      'Centralized Vendor Scoring Database',
      'Tiered Approval Workflow',
      'Automated Purchase Order Generation',
      'Procurement Spend Analytics',
      'AI Procurement Conversational Assistant'
    ],
    useCases: [
      'Perbandingan instan 15 penawaran harga vendor dalam hitungan detik.',
      'Deteksi anomali mark-up harga bahan material dibanding historical data.',
      'Pencocokan spesifikasi teknis peralatan berat terhadap standar proyek.'
    ],
    sampleQuestions: [
      'Vendor mana yang menawarkan lead time tercepat untuk genset 500kVA?',
      'Bagaimana perbandingan diskon termin pembayaran Vendor A vs B?',
      'Apakah harga penawaran semen masuk dalam budget estimasi awal?'
    ],
    dashboardType: 'procurement',
    metrics: [
      { label: 'Efisiensi Evaluasi', value: '85% Lebih Cepat', desc: 'Perbandingan penawaran otomatis' },
      { label: 'Deteksi Selisih', value: 'Real-time', desc: 'Spesifikasi & deviasi termin' },
      { label: 'Audit Trail', value: '100% Tercatat', desc: 'Riwayat negosiasi & persetujuan' }
    ]
  },
  {
    id: 'construct-ai',
    name: 'Construct AI',
    tagline: 'AI Intelligence untuk Proyek Konstruksi.',
    description: 'Solusi AI terintegrasi untuk kontraktor, developer, dan konsultan manajemen konstruksi guna memantau BOQ, laporan harian, kepatuhan desain, dan mitigasi risiko proyek.',
    category: 'industry',
    targetIndustries: ['Kontraktor Sipil & EPC', 'Property Developer', 'Konsultan Engineering', 'Project Management', 'BUMN Infrastruktur'],
    keyFeatures: [
      'AI Project Assistant & Site Copilot',
      'Document & Blueprint Intelligence',
      'BOQ (Bill of Quantities) Intelligence',
      'Curva-S Progress Real-time Monitoring',
      'Material Approval & Inspection Tracking',
      'Automated RFI (Request for Info) Flow',
      'Contract & Penalty Intelligence',
      'Daily Site Report AI Synthesizer',
      'Project Delay & Cost Overrun Risk Detection',
      'Project BIM & Knowledge Base Integration'
    ],
    useCases: [
      'Sintesis otomatis ratusan laporan pengawas lapangan menjadi ringkasan mingguan direksi.',
      'Pengecekan deviasi volume material BOQ terpasang terhadap master budget.',
      'Identifikasi dini potensi klaim keterlambatan akibat cuaca dan keterlambatan izin.'
    ],
    sampleQuestions: [
      'Berapa sisa volume beton K-350 yang belum terkirim ke Zona 3?',
      'Apakah ada RFI struktur jembatan yang belum dijawab konsultan?',
      'Apa risiko utama deviasi Curva-S pada progress minggu ke-24?'
    ],
    dashboardType: 'construction',
    metrics: [
      { label: 'Sintesis Laporan', value: 'Otomatis Harian', desc: 'Menggabungkan catatan site engineer' },
      { label: 'Deteksi Risiko', value: 'Prediktif 14 Hari', desc: 'Peringatan deviasi Curva-S' },
      { label: 'Sinkronisasi BOQ', value: 'End-to-End', desc: 'Kontrak, gudang, dan realisasi' }
    ]
  },
  {
    id: 'maintenance-ai',
    name: 'Maintenance AI',
    tagline: 'Maintenance Lebih Cerdas. Downtime Lebih Terkendali.',
    description: 'Platform AI predictive maintenance untuk fasilitas manufaktur, pabrik, pertambangan, dan energi yang mengawasi anomali sensor, jadwal suku cadang, dan riwayat teknisi.',
    category: 'industry',
    targetIndustries: ['Manufaktur & Pabrik', 'Fasilitas Minyak & Gas', 'Pembangkit Energi', 'Pertambangan', 'Fasilitas Pergudangan Modern'],
    keyFeatures: [
      'Real-time Equipment Condition Monitoring',
      'Predictive Maintenance & MTBF Modeling',
      'Deep Historical Failure Analysis',
      'Spare Part Inventory Intelligence',
      'Dynamic Maintenance Work-Order Scheduling',
      'Field Technician AI Troubleshooting Copilot',
      'SCADA / Industrial IoT Telemetry Integration',
      'Multi-Threshold Intelligent Alert System',
      'Vibration, Temperature & Acoustic Diagnostic AI',
      'Total Cost of Asset Ownership Analytics'
    ],
    useCases: [
      'Prediksi kerusakan bearing pompa pendingin turbin 10 hari sebelum failure.',
      'Pemberian panduan langkah perbaikan langkah demi langkah kepada teknisi lapangan.',
      'Otomasi pesanan suku cadang kritis saat stok mencapai batas ambang pakai.'
    ],
    sampleQuestions: [
      'Berapa histori getaran gearbox conveyor utama selama 30 hari terakhir?',
      'Kapan jadwal overhaul kompresor pendingin Unit 2?',
      'Suku cadang apa yang wajib disiapkan untuk maintenance minggu depan?'
    ],
    dashboardType: 'maintenance',
    metrics: [
      { label: 'Mitigasi Downtime', value: 'Prediksi Dini', desc: 'Sebelum terjadi kegagalan fatal mesin' },
      { label: 'Efisiensi MTTR', value: 'Terpandu AI', desc: 'Troubleshooting langkah demi langkah' },
      { label: 'Sensor Terhubung', value: 'Protokol MQTT/Modbus', desc: 'SCADA, PLC, dan IoT gateway' }
    ]
  },
  {
    id: 'aegis-maritime',
    name: 'AEGIS MARITIME',
    tagline: 'Maritime Intelligence. Powered by Private AI.',
    description: 'Flagship platform Private AI khusus industri maritim untuk operator kapal, ship management, dan offshore fleets. Beroperasi secara hybrid (Edge Onboard & Cloud HQ) dengan sinkronisasi satelit VSAT hemat bandwidth.',
    category: 'industry',
    flagship: true,
    visualImage: '/assets/generated/maritime_hero.jpg',
    targetIndustries: ['Shipping Company (Bulk, Tanker, Container)', 'Ship Management & Crewing', 'Vessel Operators & Charterers', 'Marine Offshore & Tug Barges', 'Port & Terminal Authorities'],
    keyFeatures: [
      'Aegis Vessel AI: Digital Twin Mesin & Hull Kapal',
      'Aegis Document Intelligence: ISM Code, Class, & Flag Docs',
      'Aegis Maintenance AI: PMS & Engine Telemetry Onboard',
      'Aegis Fleet Intelligence: Live Global AIS & Route Tracking',
      'Aegis Compliance Intelligence: SOLAS, MARPOL & SIRE 2.0',
      'Aegis Maritime Assistant: Offline-Capable Shipboard Copilot',
      'Low-Bandwidth Marine VSAT Micro-Compression Protocol',
      'Bunker Fuel Optimization & Weather Routing',
      'Crew Certification & Expiry Early-Warning Engine',
      'Voyage Analytics & Port Turnaround Optimization'
    ],
    useCases: [
      'Pencarian riwayat troubleshooting engine kapal saat berlayar di laut lepas tanpa internet stabil.',
      'Deteksi otomatis sertifikat statutoria kapal (IOPP, Load Line) yang akan kadaluarsa dalam 60 hari.',
      'Pemantauan konsumsi bahan bakar (FOC) per mil laut terhadap kondisi gelombang laut.'
    ],
    sampleQuestions: [
      'Berapa histori kerusakan auxiliary engine MV Samudera 08 selama 6 bulan terakhir?',
      'Dokumen kelas mana yang harus diperbarui sebelum docking November?',
      'Rekomendasi rute pelayaran paling efisien menghindari badai di Selat Malaka?'
    ],
    dashboardType: 'maritime',
    metrics: [
      { label: 'Kompresi Satelit', value: 'Optimasi VSAT', desc: 'Sync data efisien via satelit' },
      { label: 'Kepatuhan Regulasi', value: 'IMO & Class Ready', desc: 'SIRE 2.0, ISM Code, SOLAS' },
      { label: 'Operasional Onboard', value: '100% Offline Edge', desc: 'AI tetap bekerja di laut lepas' }
    ]
  },
  {
    id: 'aegis-cyber-ai',
    name: 'Aegis Cyber AI',
    tagline: 'AI Security untuk Bisnis Modern.',
    description: 'Platform deteksi ancaman siber otonom dan mitigasi insiden berbasis AI untuk mengamankan infrastruktur enterprise, endpoint jaringan, serta integritas identitas perusahaan.',
    category: 'core',
    targetIndustries: ['Enterprise IT & Korporat Swasta', 'Perbankan & Fintech', 'BUMN & Lembaga Publik', 'Fasilitas Infrastruktur Kritis', 'Kesehatan'],
    keyFeatures: [
      '24/7 Autonomous Security Monitoring',
      'Behavioral Anomaly & Zero-Day Detection',
      'Login Anomaly & Credential Stuffing Guard',
      'Endpoint Telemetry AI Analyzer',
      'AI Security Copilot untuk Tim SOC',
      'Automated Incident Containment & Playbooks',
      'Real-time Threat Posture Dashboard',
      'Automated Compliance & Security Audit Reporting',
      'Forensic Immutable Audit Logs',
      'Full SIEM / SOC Integration Engine'
    ],
    useCases: [
      'Isolasi otomatis host jaringan yang terdeteksi melakukan komunikasi outbound tidak lazim.',
      'Deteksi percobaan brute force atau akses akun VIP dari lokasi geografis mencurigakan.',
      'Pembuatan ringkasan insiden keamanan berkala untuk jajaran CISO dalam format siap saji.'
    ],
    sampleQuestions: [
      'Apakah terdapat anomali login di luar jam kerja dalam 24 jam terakhir?',
      'Endpoint mana yang memiliki kerentanan patch CVE berisiko tinggi?',
      'Apa tindakan mitigasi terkonfirmasi terhadap alert brute force IP 10.24.x.x?'
    ],
    dashboardType: 'cyber',
    metrics: [
      { label: 'Deteksi Anomali', value: '< 200 ms', desc: 'Analisis paket & identitas kontinu' },
      { label: 'Playbook Otomatis', value: 'Level Enterprise', desc: 'Isolasi cepat tanpa intervensi manual' },
      { label: 'Kepatuhan Regulasi', value: 'ISO 27001 & PDP', desc: 'Audit log tersandi sha-256' }
    ]
  },
  {
    id: 'smart-waste-ai',
    name: 'Smart Waste AI',
    tagline: 'Pengelolaan Sampah yang Lebih Cerdas.',
    description: 'Sistem cerdas manajemen logistik dan pengumpulan sampah berbasis AI untuk pemerintah kota, kawasan industri, dan operator waste management.',
    category: 'operations',
    targetIndustries: ['Pemerintah Kota & Dinas Lingkungan Hidup', 'Pengelola Kawasan Industri', 'Perusahaan Pengelola Limbah Swasta', 'Kawasan Komersial & Resort Besar'],
    keyFeatures: [
      'Dynamic Route Optimization untuk Armada Truk',
      'IoT Bin Fill-Level Sensor Telemetry Integration',
      'Computer Vision Trash Classification & Overflow Detection',
      'Driver Telematics & Field Collection Monitoring',
      'Predictive Waste Generation Analytics',
      'Automated On-Demand Pickup Scheduling',
      'Operational Efficiency & Fuel Reduction Engine',
      'Central Dispatching & Command Center Dashboard',
      'ESG & Environmental Reporting Metrics',
      'Citizen / Client Notification Gateway'
    ],
    useCases: [
      'Penyesuaian otomatis rute armada hanya ke tempat penampungan sampah yang telah terisi >80%.',
      'Pemilahan otomatis tipe limbah (anorganik, organik, b3) menggunakan kamera inspeksi AI.',
      'Laporan jejak karbon dan efisiensi bahan bakar bulanan untuk pelaporan ESG.'
    ],
    sampleQuestions: [
      'Rute pengangkutan mana yang memiliki efisiensi konsumsi bahan bakar terendah?',
      'Kawasan mana yang mengalami lonjakan volume sampah di luar jadwal rutin?',
      'Berapa estimasi pengurangan emisi CO2 setelah optimasi rute minggu ini?'
    ],
    dashboardType: 'waste',
    metrics: [
      { label: 'Efisiensi Rute', value: 'Simulasi Terverifikasi', desc: 'Pengurangan jarak tempuh kosong' },
      { label: 'Status Penampungan', value: 'Sensor IoT Live', desc: 'Kapasitas 0-100% termonitor' },
      { label: 'Transparansi Armada', value: 'GPS & Telemetri', desc: 'Waktu pickup & volume terdata' }
    ]
  },
  {
    id: 'fleetos-ai',
    name: 'FleetOS AI',
    tagline: 'Intelligent Fleet. Smarter Operations.',
    description: 'Sistem operasional armada transportasi, ekspedisi logistik, dan alat berat dengan analitik prediktif bahan bakar, pemantauan perilaku pengemudi, dan kesehatan armada.',
    category: 'operations',
    targetIndustries: ['Logistik & Ekspedisi', 'Perusahaan Truk & Kontainer', 'Pertambangan & Alat Berat', 'Distributor FMCG Nasional', 'Rental Armada Komersial'],
    keyFeatures: [
      'Comprehensive Fleet Health & Diagnostics Dashboard',
      'AI Fuel Theft & Idling Waste Analytics',
      'Predictive Maintenance for Tires, Brakes & Engines',
      'Driver Safety & Behavior Scoring (Speeding, Harsh Braking)',
      'Live GPS Tracking & Geofencing Intelligence',
      'Spare Part Inventory & Workshop Management',
      'Automated Periodic Service Scheduling',
      'Operational Cost Per Kilometer (CPK) Analytics',
      'AI Fleet Copilot & Incident Assistant',
      'Multi-device Mobile App for Drivers & Dispatchers'
    ],
    useCases: [
      'Pemberitahuan dini anomali penurunan drastis volume tangki BBM saat kendaraan parkir malam hari.',
      'Peringatan otomatis penggantian rem kampas truk berdasarkan kilometer tempuh dan kontur jalan.',
      'Analisis peringkat keamanan berkendara pengemudi untuk program insentif bulanan.'
    ],
    sampleQuestions: [
      'Kendaraan mana yang mencatatkan jam idling melebihi toleransi normal?',
      'Kapan jadwal servis berkala truk tronton B-9021-XYZ?',
      'Berapa rata-rata biaya operasional per km untuk armada koridor Jawa-Sumatera?'
    ],
    dashboardType: 'fleet',
    metrics: [
      { label: 'Kesehatan Armada', value: 'OBD-II / CANbus', desc: 'Diagnostik mesin real-time' },
      { label: 'Kontrol Konsumsi', value: 'AI Fuel Model', desc: 'Deteksi kebocoran dan idling' },
      { label: 'Skor Pengemudi', value: 'Objektif Telemetri', desc: 'Pengereman, kecepatan, dan rute' }
    ]
  },
  {
    id: 'factory-twin-ai',
    name: 'Factory Twin AI',
    tagline: 'Digital Twin untuk Pabrik yang Lebih Cerdas.',
    description: 'Platform simulasi 3D Digital Twin dan AI prediktif untuk memvisualisasikan seluruh lini produksi manufaktur, konsumsi energi, dan sinkronisasi mesin secara real-time.',
    category: 'industry',
    visualImage: '/assets/generated/factory_twin.jpg',
    targetIndustries: ['Pabrik Otomotif & Komponen', 'Manufaktur Elektronik & Semikonduktor', 'Industri Kimia & Bahan Bangunan', 'FMCG & Food Processing', 'Industri Farmasi'],
    keyFeatures: [
      'Real-time 3D Factory Digital Twin Visualization',
      'Continuous Machine Throughput & Bottleneck Monitoring',
      'Production Line Yield & OEE Optimization Engine',
      'Energy Consumption & Carbon Footprint Telemetry',
      'Root-Cause Downtime Analysis & What-If Simulation',
      'Predictive Quality Control with Computer Vision',
      'Seamless PLC, SCADA, MES & ERP Data Bridging',
      'Automated Production Order Dispatching',
      'Operator Safety & Restricted Zone Alerting',
      'AI Factory Director Decision Support System'
    ],
    useCases: [
      'Simulasi dampak penambahan batch produksi pada Lini 2 sebelum dijalankan di pabrik nyata.',
      'Deteksi titik hambatan (*bottleneck*) konveyor sebelum menyebabkan antrean mesin kemas.',
      'Optimalisasi beban listrik mesin berat pada jam beban puncak tarif PLN.'
    ],
    sampleQuestions: [
      'Di lini mana efisiensi OEE mengalami penurunan signifikan hari ini?',
      'Bagaimana simulasi throughput jika kecepatan mesin stapping dinaikkan 10%?',
      'Berapa konsumsi energi spesifik per unit produk pada shift kedua?'
    ],
    dashboardType: 'twin',
    metrics: [
      { label: 'Pipeline Interaksi', value: 'IoT → Twin → AI', desc: 'Insight prediktif tanpa henti' },
      { label: 'Sinkronisasi Data', value: '< 100 ms Latensi', desc: 'Kondisi fisik ke model virtual' },
      { label: 'OEE Optimization', value: 'Standard Industri', desc: 'Ketersediaan, performa, mutu' }
    ]
  },
  {
    id: 'comply-ai',
    name: 'Comply AI',
    tagline: 'Compliance Lebih Sederhana dengan Intelligence.',
    description: 'Platform otomasi kepatuhan regulasi, persiapan audit, dan verifikasi bukti kepatuhan berbasis AI untuk standar ISO, regulasi industri, dan hukum ketenagakerjaan/lingkungan.',
    category: 'enterprise',
    targetIndustries: ['Perusahaan Terbuka (Tbk)', 'Institusi Keuangan & Asuransi', 'Korporasi Manufaktur & Energi', 'Farmasi & Layanan Kesehatan', 'BUMN & Lembaga Sertifikasi'],
    keyFeatures: [
      'Centralized Enterprise Compliance Dashboard',
      'National & International Regulation Knowledge Base',
      'Automated Document Cross-Checking Against Standards',
      'Real-time Compliance Gap Analysis Engine',
      'Audit Preparation Workflow & Evidence Locker',
      'Regulatory Expiry & Renewal Monitoring Alert',
      'Automated Audit Checklist Generation',
      'AI Compliance Officer Conversational Assistant',
      'Regulatory Change Impact Simulator',
      'One-Click Comprehensive Audit Report Generator'
    ],
    useCases: [
      'Pengecekan otomatis kesiapan dokumen SOP perusahaan terhadap klausul ISO 27001:2022.',
      'Identifikasi klausul kontrak yang belum memenuhi regulasi perlindungan data pribadi (UU PDP).',
      'Pengumpulan otomatis bukti kepatuhan K3 untuk audit tahunan dinas tenaga kerja.'
    ],
    sampleQuestions: [
      'Apakah dokumen SOP data center sudah memenuhi klausul 8.1 ISO 27001?',
      'Sertifikasi atau izin lingkungan apa yang perlu diperpanjang kuartal ini?',
      'Berapa persentase kelengkapan bukti audit untuk standar SMK3?'
    ],
    dashboardType: 'comply',
    metrics: [
      { label: 'Database Standar', value: 'ISO, SMK3, PDP', desc: 'Standar nasional & internasional' },
      { label: 'Gap Analysis', value: 'Otomatis & Terukur', desc: 'Identifikasi klausul belum lengkap' },
      { label: 'Kesiapan Audit', value: 'Audit Locker', desc: 'Bukti terverifikasi dalam satu klik' }
    ]
  },
  {
    id: 'business-ai',
    name: 'Business AI',
    tagline: 'Ubah Data Bisnis Menjadi Insight.',
    description: 'Platform Business Intelligence berbasis percakapan alami (Natural Language BI) yang mengubah data penjualan, keuangan, persediaan, dan operasional menjadi insight strategis.',
    category: 'enterprise',
    targetIndustries: ['Retail & Distributor Nasional', 'Perusahaan Manufaktur', 'E-commerce & Logistik', 'Hospitality & F&B Multi-outlet', 'Jasa Keuangan'],
    keyFeatures: [
      'Conversational AI Executive Dashboard',
      'Natural Language Data Querying (Bahasa Indonesia)',
      'Sales Velocity & Revenue Trend Analytics',
      'Cash-flow & Working Capital Forecasting',
      'Dynamic Inventory Turnover & Dead-stock Alert',
      'Customer Retention & Churn Prediction Model',
      'Automated Weekly Executive Briefing Generator',
      'Role-based Multi-Entity Business Drilldown',
      'Direct ERP/SQL/BigQuery Database Connectors',
      'Automated What-If Margin & Scenario Modeling'
    ],
    useCases: [
      'Direksi mengajukan pertanyaan via teks/suara dan langsung mendapatkan grafik performa wilayah.',
      'Prediksi lonjakan permintaan barang gudang berdasarkan tren musiman 3 tahun terakhir.',
      'Analisis margin profitabilitas per kategori produk secara instan tanpa menunggu antrean tim data.'
    ],
    sampleQuestions: [
      'Bagaimana tren penjualan wilayah Jawa Timur dibandingkan kuartal lalu?',
      'Kategori produk mana yang menyumbang margin laba kotor terbesar bulan ini?',
      'Berapa proyeksi kebutuhan modal kerja kas operasional untuk bulan depan?'
    ],
    dashboardType: 'business',
    metrics: [
      { label: 'Model Pertanyaan', value: 'Bahasa Indonesia Alami', desc: 'Tanya jawab data tanpa SQL' },
      { label: 'Konektor Database', value: 'Multi-database', desc: 'PostgreSQL, SQL Server, BigQuery' },
      { label: 'Waktu Analisis', value: 'Sub-detik', desc: 'Visualisasi langsung siap presentasi' }
    ]
  },
  {
    id: 'aegis-private-ai',
    name: 'Aegis Private AI',
    tagline: 'Your AI. Your Data. Your Infrastructure.',
    description: 'Core Technology Platform: Infrastruktur Private AI berstandar enterprise yang dirancang khusus untuk organisasi yang membutuhkan kedaulatan data penuh, performa tinggi, dan kontrol internal atas model AI.',
    category: 'core',
    corePlatform: true,
    visualImage: '/assets/generated/private_ai.jpg',
    targetIndustries: ['Enterprise Konglomerasi', 'Instansi Pemerintah & Pertahanan', 'Perbankan & Lembaga Keuangan', 'Kesehatan & Rumah Sakit', 'Infrastruktur Kritis & Energi'],
    keyFeatures: [
      'Self-Hosted Private LLM (Llama, DeepSeek, Mistral, Specialized Models)',
      'On-Premise / Air-Gapped Dedicated Infrastructure',
      'Enterprise RAG with High-Density Vector Embeddings',
      'Organizational Knowledge Base Isolation',
      'Autonomous Multi-Agent Orchestration Engine',
      'Enterprise Document & Semantic Intelligence Layer',
      'REST & gRPC Private API Gateway',
      'Strict Granular Role-Based Access Control (RBAC)',
      'AES-256 At-Rest & TLS 1.3 In-Transit Encryption',
      'Hardware-Agnostic GPU Cluster Management',
      'Comprehensive Model Fine-Tuning & Quantization Pipeline'
    ],
    useCases: [
      'Pemrosesan jutaan dokumen perbankan rahasia tanpa sedikit pun data keluar ke internet publik.',
      'Infrastruktur AI independen untuk instansi pemerintah dengan kepatuhan penuh kedaulatan data.',
      'Implementasi AI asisten internal rumah sakit yang menjamin kepatuhan privasi rekam medis pasien.'
    ],
    sampleQuestions: [
      'Berapa utilisasi memori GPU cluster Pod-04 saat ini?',
      'Apakah seluruh proses RAG terisolasi dalam perimeter lokal?',
      'Bagaimana konfigurasi sinkronisasi model LLM terenkripsi ke node cabang?'
    ],
    dashboardType: 'private_ai',
    metrics: [
      { label: 'Kedaulatan Data', value: 'Perimeter Mandiri', desc: 'Data tidak pernah keluar ke pihak ketiga' },
      { label: 'Opsi Deployment', value: 'On-Prem / Private Cloud', desc: 'Sesuai kebijakan kepatuhan internal' },
      { label: 'Orkestrasi AI', value: 'Multi-Model Engine', desc: 'Optimasi komputasi GPU enterprise' }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'maritime',
    name: 'Maritim & Pelayaran',
    code: 'MAR-01',
    tagline: 'Operasional Armada Lepas Pantai & Kepatuhan Pelayaran Global',
    description: 'Solusi AI maritim komprehensif yang dirancang untuk mengatasi tantangan konektivitas satelit terbatas di laut lepas, monitoring performa mesin kapal, serta kepatuhan ketat regulasi IMO dan ISM Code.',
    challenges: [
      'Konektivitas satelit berbiaya tinggi dan bandwidth terbatas di tengah laut.',
      'Kesulitan akses riwayat perawatan mesin saat kapal berlayar.',
      'Risiko denda tinggi akibat keterlambatan perpanjangan sertifikat statutoria kapal.',
      'Tingginya fluktuasi biaya bahan bakar bunker dan kalkulasi rute manual.'
    ],
    solutions: [
      'Deployment Aegis Maritime Edge yang beroperasi 100% offline di atas kapal.',
      'Sinkronisasi mikro terkompresi via marine VSAT saat koneksi tersedia.',
      'Digital twin pemantauan temperatur dan getaran auxiliary/main engine.',
      'Early warning engine kepatuhan SIRE 2.0, SOLAS, MARPOL, dan ISM Code.'
    ],
    matchingProducts: ['aegis-maritime', 'maintenance-ai', 'ai-doc-intel', 'aegis-private-ai'],
    iconName: 'Ship',
    metricDemo: 'Offline Edge Ready'
  },
  {
    id: 'construction',
    name: 'Konstruksi & Infrastruktur',
    code: 'CON-02',
    tagline: 'Akurasi BOQ, Kontrol Lapangan & Manajemen Risiko Kontrak',
    description: 'Transformasi digital proyek EPC dan kontraktor sipil untuk mengeliminasi deviasi budget, mengotomasi sintesis laporan harian pengawas, dan mempercepat respons RFI konsultan.',
    challenges: [
      'Data proyek tersebar di ribuan lembar gambar CAD, BOQ Excel, dan nota lapangan.',
      'Keterlambatan deteksi deviasi Curva-S yang menyebabkan pembengkakan biaya.',
      'Proses pengajuan material approval dan RFI yang memakan waktu berhari-hari.',
      'Sengketa klausul kontrak dan denda keterlambatan dengan subkontraktor.'
    ],
    solutions: [
      'Pencocokan volume BOQ otomatis dengan realisasi material lapangan.',
      'AI Synthesizer yang merangkum catatan lapangan menjadi laporan direksi harian.',
      'Integrasi knowledge base spesifikasi teknis dan gambar kerja blueprint.',
      'Prediksi dini potensi keterlambatan berdasarkan tren cuaca dan logistik.'
    ],
    matchingProducts: ['construct-ai', 'ai-doc-intel', 'procure-ai', 'comply-ai'],
    iconName: 'HardHat',
    metricDemo: 'BOQ & Curva-S Sync'
  },
  {
    id: 'manufacturing',
    name: 'Manufaktur & Pabrik',
    code: 'MFG-03',
    tagline: 'OEE Tinggi, Predictive Maintenance & Digital Twin Terpadu',
    description: 'Modernisasi fasilitas manufaktur dengan AI prediktif untuk memprediksi kegagalan mesin sebelum downtime terjadi dan visualisasi lini produksi 3D.',
    challenges: [
      'Unscheduled downtime mesin kritis yang menghentikan seluruh lini produksi.',
      'Kesulitan mengidentifikasi akar penyebab penurunan kualitas (*scrap rate*).',
      'Manajemen suku cadang yang reaktif menyebabkan modal kerja tertimbun di gudang.',
      'Silo data antara mesin SCADA/PLC dengan sistem ERP korporat.'
    ],
    solutions: [
      'Pemodelan predictive maintenance berbasis anomali vibrasi dan suhu sensor.',
      'Simulasi 3D Digital Twin lini produksi untuk pengujian skenario kapasitas.',
      'Troubleshooting copilot interaktif untuk mempercepat penanganan teknisi lapangan.',
      'Otomasi restock suku cadang berdasar prediksi jam pakai komponen.'
    ],
    matchingProducts: ['maintenance-ai', 'factory-twin-ai', 'aegis-cyber-ai', 'business-ai'],
    iconName: 'Factory',
    metricDemo: 'Real-time OEE Telemetry'
  },
  {
    id: 'procurement',
    name: 'Pengadaan & Vendor Management',
    code: 'PRO-04',
    tagline: 'Matrix Evaluasi Otomatis & Transparansi Pengeluaran',
    description: 'Mempersingkat siklus pengadaan barang dan jasa industri dengan membandingkan puluhan format penawaran vendor secara otomatis dan objektif.',
    challenges: [
      'Format quotation dari vendor berbeda-beda sehingga memakan waktu manual.',
      'Risiko ketidaksesuaian spesifikasi barang yang baru disadari setelah tiba di site.',
      'Proses persetujuan bertingkat yang lambat menghambat kelancaran operasional.',
      'Kurangnya visibilitas komparasi harga historis saat bernegosiasi.'
    ],
    solutions: [
      'OCR tabel penawaran harga dari dokumen PDF/gambar penawaran vendor.',
      'Matrix comparison otomatis membandingkan harga per unit, diskon, dan lead time.',
      'Pengecekan kesesuaian spesifikasi barang terhadap standar teknis pengadaan.',
      'Otomasi penerbitan draft Purchase Order (PO) setelah approval bertingkat.'
    ],
    matchingProducts: ['procure-ai', 'ai-doc-intel', 'business-ai', 'comply-ai'],
    iconName: 'ShoppingCart',
    metricDemo: 'Instant Matrix Parsing'
  },
  {
    id: 'logistics',
    name: 'Logistik & Armada Transportasi',
    code: 'LOG-05',
    tagline: 'Kontrol Bahan Bakar, Keselamatan Driver & Utilisasi Maksimal',
    description: 'Solusi kecerdasan armada yang mengombinasikan data telematika OBD/CANbus, GPS rute cerdas, dan deteksi anomali bahan bakar secara real-time.',
    challenges: [
      'Tingginya pemborosan bahan bakar akibat rute suboptimal dan mesin idle berlebihan.',
      'Pencurian atau manipulasi pengisian BBM di rute antar kota.',
      'Kerusakan kendaraan mendadak saat sedang mengangkut kargo bernilai tinggi.',
      'Sulitnya mengevaluasi gaya mengemudi sopir secara objektif dan berkala.'
    ],
    solutions: [
      'Analisis pola konsumsi bahan bakar AI untuk mendeteksi deviasi dan kebocoran.',
      'Penilaian objektif keselamatan driver (kecepatan, pengereman mendadak, rute).',
      'Prediksi jadwal servis komponen aus (rem, ban, pelumas) berdasar jarak tempuh.',
      'Optimasi dispatching armada dengan pemantauan geofencing real-time.'
    ],
    matchingProducts: ['fleetos-ai', 'smart-waste-ai', 'business-ai', 'maintenance-ai'],
    iconName: 'Truck',
    metricDemo: 'Fleet Telemetry Active'
  },
  {
    id: 'government',
    name: 'Pemerintahan & BUMN',
    code: 'GOV-06',
    tagline: 'Kedaulatan Data Nasional & Efisiensi Layanan Publik',
    description: 'Platform Private AI terisolasi untuk instansi publik yang membutuhkan kerahasiaan arsip negara, kepatuhan perundang-undangan, dan kecepatan analisis dokumen.',
    challenges: [
      'Kewajiban regulasi penempatan data di dalam perimeter kedaulatan nasional.',
      'Ratusan ribu arsip berkas fisik dan dokumen regulasi yang sulit ditelusuri.',
      'Risiko kebocoran data sensitif jika menggunakan layanan cloud AI publik.',
      'Kebutuhan kecepatan validasi kelengkapan berkas layanan administrasi publik.'
    ],
    solutions: [
      'Implementasi Private AI on-premise sepenuhnya terisolasi (*air-gapped*).',
      'Sistem pencarian semantik dokumen kebijakan, perpres, dan arsip daerah.',
      'Audit log tersandi tanpa celah perubahan untuk integritas transparansi.',
      'AI assistant khusus aparatur negara untuk merangkum telaah regulasi.'
    ],
    matchingProducts: ['aegis-private-ai', 'ai-doc-intel', 'comply-ai', 'aegis-cyber-ai'],
    iconName: 'Building2',
    metricDemo: 'Kedaulatan Data Penuh'
  },
  {
    id: 'finance',
    name: 'Finansial & Perbankan',
    code: 'FIN-07',
    tagline: 'Privasi Data Finansial, Audit Kepatuhan & Analitik Risiko',
    description: 'Infrastruktur AI on-premise berstandar keamanan tinggi untuk analisis kredit, pemrosesan dokumen legal/kontrak, dan pelaporan kepatuhan regulator.',
    challenges: [
      'Standar kepatuhan perbankan (BI/OJK) yang sangat ketat mengenai privasi nasabah.',
      'Proses verifikasi dokumen legal dan agunan kredit yang memakan waktu lama.',
      'Deteksi anomali transaksi dan potensi ancaman keamanan siber kontinu.',
      'Kebutuhan penyiapan bukti audit kepatuhan ISO 27001 dan UU PDP.'
    ],
    solutions: [
      'Private LLM terenkripsi tanpa transfer data ke pihak ketiga publik.',
      'Otomasi ekstraksi dan verifikasi silang dokumen legalitas pemohon pinjaman.',
      'Analitik siber AI untuk mitigasi serangan akses tidak sah ke sistem inti.',
      'Gap analysis regulasi dan manajemen bukti kepatuhan otomatis.'
    ],
    matchingProducts: ['aegis-private-ai', 'ai-doc-intel', 'comply-ai', 'aegis-cyber-ai'],
    iconName: 'ShieldCheck',
    metricDemo: 'Sandi Enkripsi AES-256'
  },
  {
    id: 'healthcare',
    name: 'Kesehatan & Rumah Sakit',
    code: 'HLT-08',
    tagline: 'Privasi Rekam Medis & Standardisasi Dokumen Klinis',
    description: 'Penerapan Private AI untuk pengelolaan dokumen akreditasi rumah sakit, pencarian riwayat medis internal, dan efisiensi manajemen fasilitas kesehatan.',
    challenges: [
      'Kerahasiaan data rekam medis pasien yang wajib dijaga ketat sesuai hukum.',
      'Persiapan akreditasi rumah sakit yang membutuhkan ribuan dokumen SOP.',
      'Pemeliharaan preventif peralatan medis mahal (MRI, CT-Scan) yang vital.',
      'Pencarian protokol tindakan klinis dalam tumpukan literatur pedoman.'
    ],
    solutions: [
      'Arsitektur Private AI lokal menjamin data pasien tidak keluar fasilitas.',
      'Otomasi checklist bukti akreditasi dan kesiapan audit fasilitas.',
      'Monitoring preventif kondisi sensor mesin diagnostik penting.',
      'Knowledge retrieval cepat untuk membantu tenaga medis menemukan pedoman.'
    ],
    matchingProducts: ['aegis-private-ai', 'ai-doc-intel', 'maintenance-ai', 'comply-ai'],
    iconName: 'Activity',
    metricDemo: 'Privasi Rekam Medis'
  },
  {
    id: 'energy',
    name: 'Energi & Sumber Daya',
    code: 'NRG-09',
    tagline: 'Integritas Aset Jarak Jauh, Keselamatan K3 & Prediksi Kritis',
    description: 'Kecerdasan buatan untuk pemantauan fasilitas hulu/hilir migas, pembangkit listrik, dan area tambang dengan fokus pada keandalan aset dan mitigasi bahaya.',
    challenges: [
      'Lokasi fasilitas terpencil dengan risiko kecelakaan dan kegagalan fatal.',
      'Volume dokumen perizinan lingkungan (Amdal) dan inspeksi teknik yang masif.',
      'Sulitnya mendeteksi tanda awal keausan turbin atau pipa bertekanan tinggi.',
      'Biaya downtime per jam yang bernilai sangat tinggi pada industri energi.'
    ],
    solutions: [
      'Model AI diagnosa vibrasi dan termal untuk turbin, generator, dan kompresor.',
      'Pengelolaan arsip izin kepatuhan K3 dan dokumen lingkungan otomatis.',
      'Pengawasan integritas aset terdistribusi dengan gateway IoT lokal.',
      'Pemberian peringatan dini indikasi deviasi tekanan dan anomali suhu.'
    ],
    matchingProducts: ['maintenance-ai', 'factory-twin-ai', 'comply-ai', 'aegis-private-ai'],
    iconName: 'Zap',
    metricDemo: 'Mitigasi Insiden Kritis'
  },
  {
    id: 'industrial-estate',
    name: 'Kawasan Industri Terpadu',
    code: 'IND-10',
    tagline: 'Manajemen Utilitas Terpusat, Keamanan & Logistik Lingkungan',
    description: 'Platform AI komando terpadu untuk pengelola kawasan industri modern dalam memonitor utilitas listrik/air, lalu lintas logistik, dan pengelolaan limbah.',
    challenges: [
      'Pengawasan ratusan tenant pabrik dengan kebutuhan utilitas yang beragam.',
      'Pengelolaan lalu lintas truk logistik dan antrean gerbang masuk kawasan.',
      'Pengawasan kepatuhan pengelolaan limbah padat dan cair para penyewa.',
      'Kebutuhan pusat kendali operasional terpadu (*integrated command center*).'
    ],
    solutions: [
      'Sistem telemetri pengawasan utilitas energi dan efisiensi air kawasan.',
      'Optimasi rute armada pengangkut limbah kawasan dengan Smart Waste AI.',
      'Pemantauan telematika armada pengangkut internal kawasan.',
      'Dashboard Business AI terpadu untuk pengambilan keputusan manajemen pengelola.'
    ],
    matchingProducts: ['smart-waste-ai', 'fleetos-ai', 'business-ai', 'aegis-cyber-ai'],
    iconName: 'Layers',
    metricDemo: 'Command Center Ready'
  },
  {
    id: 'waste-management',
    name: 'Pengelolaan Lingkungan & Sampah',
    code: 'WST-11',
    tagline: 'Rute Pengumpulan Efisien, Sensor Telemetri & Audit ESG',
    description: 'Pengoptimalan operasional pengumpulan dan daur ulang limbah kota atau kawasan komersial dengan algoritma rute dinamis dan sensor ketinggian sampah.',
    challenges: [
      'Armada truk sering mendatangi penampungan sampah yang masih kosong.',
      'Biaya bahan bakar tinggi akibat rute pengumpulan yang tidak terencana.',
      'Keterlambatan pengangkutan pada titik-titik padat yang menimbulkan bau.',
      'Sulitnya menyusun laporan jejak karbon dan kepatuhan lingkungan yang valid.'
    ],
    solutions: [
      'Integrasi sensor IoT level tempat sampah dengan algoritma rute harian.',
      'Hanya menjadwalkan penjemputan pada titik penampungan yang membutuhkan.',
      'Pemantauan kepatuhan pengemudi dan waktu penyelesaian tugas di lapangan.',
      'Kalkulasi data metrik emisi karbon untuk pelaporan keberlanjutan ESG.'
    ],
    matchingProducts: ['smart-waste-ai', 'fleetos-ai', 'comply-ai', 'business-ai'],
    iconName: 'Recycle',
    metricDemo: 'Rute Dinamis Terintegrasi'
  },
  {
    id: 'enterprise-corporate',
    name: 'Enterprise & Korporasi',
    code: 'ENT-12',
    tagline: 'Otomasi Workflow, Intelligence Data & Keamanan Terpadu',
    description: 'Ekosistem AI menyeluruh bagi grup konglomerasi dan perusahaan skala besar untuk meningkatkan kecepatan keputusan bisnis dan menjaga aset intelektual.',
    challenges: [
      'Informasi strategis terpecah di puluhan departemen dan sistem yang berbeda.',
      'Pemborosan ribuan jam kerja untuk pencarian dokumen dan rekonsiliasi data.',
      'Ketergantungan tinggi pada analisis manual untuk evaluasi performa bisnis.',
      'Kekhawatiran kebocoran data rahasia korporasi pada platform AI publik.'
    ],
    solutions: [
      'Infrastruktur Aegis Private AI sebagai fondasi kecerdasan terpusat grup.',
      'AI Document Intelligence untuk indexing seluruh arsip kebijakan dan kontrak.',
      'Business AI untuk tanya-jawab data keuangan dan penjualan secara langsung.',
      'Otomasi audit kepatuhan dan pertahanan siber enterprise terkoordinasi.'
    ],
    matchingProducts: ['aegis-private-ai', 'ai-doc-intel', 'business-ai', 'aegis-cyber-ai', 'procure-ai'],
    iconName: 'Briefcase',
    metricDemo: 'Ekosistem Terintegrasi'
  }
];

export const TECH_MODULES: TechModule[] = [
  { name: 'Large Language Models', acronym: 'LLM', category: 'Language & Reasoning', description: 'Model fondasi cerdas untuk penalaran teks, sintesis dokumen, dan pemahaman konteks bisnis bahasa Indonesia.', enterpriseBenefit: 'Penalaran kompleks setara ahli tanpa ketergantungan API pihak ketiga.' },
  { name: 'Retrieval-Augmented Generation', acronym: 'RAG', category: 'Knowledge Grounding', description: 'Arsitektur pencarian semantik berdensitas tinggi yang menghubungkan AI langsung ke dokumen resmi internal organisasi.', enterpriseBenefit: 'Menghilangkan halusinasi dengan sitasi langsung ke dokumen sumber valid.' },
  { name: 'Optical Character Recognition', acronym: 'OCR', category: 'Vision & Document', description: 'Mesin pembaca dokumen multimodal yang mampu membaca teks cetak, tulisan tangan, tabel kompleks, dan stempel.', enterpriseBenefit: 'Digitalisasi instan ribuan faktur, kontrak, dan blueprint teknik.' },
  { name: 'Computer Vision', acronym: 'CV', category: 'Visual Inspection', description: 'Algoritma pengenalan citra untuk inspeksi cacat manufaktur, deteksi overflow limbah, dan pemantauan keselamatan.', enterpriseBenefit: 'Quality control otomatis 24/7 dengan konsistensi standar mutlak.' },
  { name: 'Machine Learning', acronym: 'ML', category: 'Predictive Analytics', description: 'Model pembelajaran mesin terawasi dan tak terawasi untuk segmentasi vendor, peramalan tren, dan deteksi anomali.', enterpriseBenefit: 'Mengenali pola bisnis laten yang tidak terlihat oleh analisis konvensional.' },
  { name: 'Predictive Analytics', acronym: 'PdM', category: 'Asset Reliability', description: 'Algoritma statistik dan deret waktu untuk memprediksi waktu kegagalan komponen industri sebelum kerusakan terjadi.', enterpriseBenefit: 'Mengubah pola maintenance reaktif menjadi preventif terencana.' },
  { name: 'Autonomous AI Agents', acronym: 'Agents', category: 'Orchestration', description: 'Agen cerdas yang mampu mengeksekusi urutan tugas bertingkat: membaca, memvalidasi, meminta persetujuan, dan menerbitkan dokumen.', enterpriseBenefit: 'Otomasi alur kerja lintas sistem tanpa intervensi berulang manusia.' },
  { name: 'Industrial Internet of Things', acronym: 'IoT', category: 'Edge Telemetry', description: 'Protokol penyerapan data sensor berlatensi rendah (MQTT, Modbus, OPC-UA, CANbus) dari mesin fisik ke platform AI.', enterpriseBenefit: 'Telemetri real-time kondisi aktual aset di seluruh lokasi operasi.' },
  { name: 'Digital Twin', acronym: 'Twin', category: 'Simulation & Model', description: 'Representasi virtual 3D dari aset fisik (kapal, lini pabrik, alat berat) yang diperbarui secara langsung oleh data sensor.', enterpriseBenefit: 'Uji skenario operasional secara aman di dunia virtual sebelum eksekusi.' },
  { name: 'Enterprise API & Webhooks', acronym: 'API', category: 'Integration', description: 'Antarmuka RESTful dan gRPC dengan keamanan mTLS untuk integrasi mulus dengan ERP (SAP, Oracle), CRM, dan database internal.', enterpriseBenefit: 'AI beroperasi selaras dengan infrastruktur IT yang sudah ada.' },
  { name: 'Intelligent Process Automation', acronym: 'IPA', category: 'Workflow Automation', description: 'Penggabungan AI kognitif dengan engine workflow untuk menyetujui, meneruskan, dan memicu aksi operasional bisnis.', enterpriseBenefit: 'Mengeliminasi pekerjaan repetitif administratif hingga 80%.' },
  { name: 'Enterprise Data Platform', acronym: 'Data Platform', category: 'Data Governance', description: 'Data lakehouse privat dengan katalog data terkelola, kontrol akses bertingkat, dan kepatuhan tata kelola data.', enterpriseBenefit: 'Fondasi data bersih, terstruktur, dan siap dikonsumsi oleh seluruh modul AI.' }
];

export const PIPELINE_STEPS = [
  { step: '01', name: 'DATA INGESTION', title: 'Penyerapan Data Multiformat', desc: 'Menghubungkan dokumen (PDF, CAD, Scan), stream IoT/telemetri sensor, database SQL/NoSQL, dan API eksternal ke dalam wadah terisolasi.' },
  { step: '02', name: 'SECURE INTEGRATION', title: 'Integrasi & Tata Kelola Aman', desc: 'Normalisasi format, enkripsi data in-transit, penegakan isolasi hak akses (RBAC), serta pembersihan data otomatis.' },
  { step: '03', name: 'AI CORE PROCESSING', title: 'Pemrosesan Kognitif Cerdas', desc: 'Pemrosesan via Private LLM, ekstraksi OCR, embedding vektor RAG, serta model machine learning prediktif.' },
  { step: '04', name: 'ACTIONABLE INTELLIGENCE', title: 'Sintesis Pengetahuan Bisnis', desc: 'Mengubah komputasi mentah menjadi wawasan bisnis: rekomendasi keputusan, matriks komparasi, dan deteksi anomali.' },
  { step: '05', name: 'WORKFLOW AUTOMATION', title: 'Otomasi Alur Kerja Bertingkat', desc: 'Memicu persetujuan otomatis, pemberitahuan peringatan dini, pembuatan draft dokumen resmi, dan pengingat jadwal.' },
  { step: '06', name: 'BUSINESS ACTION', title: 'Eksekusi Nilai Nyata', desc: 'Downtime mesin terhindari, pengadaan barang tuntas lebih cepat, audit terlaksana tanpa kendala, dan keputusan berlandaskan data.' }
];

export const VALUE_CHAIN = [
  { stage: 'DATA', label: 'Data Organisasi', desc: 'Dokumen kontrak, telemetri IoT mesin, histori ERP, nota pengadaan, dan arsip regulasi.' },
  { stage: 'AI ENGINE', label: 'Aegis Private Engine', desc: 'Kombinasi Private LLM, Vector Embeddings, OCR Multimodal, dan Model Prediktif khusus industri.' },
  { stage: 'INTELLIGENCE', label: 'Wawasan Terstruktur', desc: 'Bukan sekadar teks obrolan, melainkan skor risiko, matriks perbandingan, dan deteksi deviasi.' },
  { stage: 'AUTOMATION', label: 'Otomasi Eksekusi', desc: 'Pengisian form otomatis, routing approval berjenjang, jadwal servis preventif, dan peringatan dini.' },
  { stage: 'BUSINESS ACTION', label: 'Dampak Bisnis Nyata', desc: 'Efisiensi waktu berlipat, kepatuhan terjaga, risiko terminimalisir, dan ROI terukur.' }
];

export const QUALITATIVE_BENEFITS = [
  { title: 'Mengurangi Beban Pekerjaan Manual', desc: 'Mengeliminasi pekerjaan klerikal repetitif seperti input data manual, pencarian berkas kontrak fisik, dan pembuatan matriks perbandingan spreadsheet.' },
  { title: 'Mempercepat Akses Pengetahuan Kritis', desc: 'Menghilangkan jeda waktu mencari klausul legal atau riwayat kerusakan mesin dari hitungan hari menjadi hitungan detik dengan sitasi valid.' },
  { title: 'Meningkatkan Visibilitas Operasional', desc: 'Memberikan jajaran manajemen pandangan 360 derajat atas kondisi armada, lini pabrik, dan status proyek tanpa menunggu laporan mingguan.' },
  { title: 'Membantu Kualitas Pengambilan Keputusan', desc: 'Menghadirkan rekomendasi yang berlandaskan data historis dan perbandingan objektif, bukan perkiraan atau intuisi semata.' },
  { title: 'Mengintegrasikan Silo Data Antar Divisi', desc: 'Menjembatani sistem lapangan (SCADA, IoT, Laporan Site) dengan sistem korporat (ERP, Keuangan, Legal) ke dalam satu ekosistem cerdas.' },
  { title: 'Standardisasi Alur Kerja & Kepatuhan', desc: 'Memastikan setiap proses pengadaan, pemeliharaan alat, dan pelaporan keselamatan selalu mengikuti standar baku regulasi dan SOP perusahaan.' },
  { title: 'Kedaulatan & Keamanan Data Strategis', desc: 'Menjamin bahwa rahasia dagang, formula produk, dan data sensitif organisasi tetap berada dalam perimeter infrastruktur milik Anda.' }
];

export const REAL_USE_CASES = [
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
];
