const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');

async function createAegisPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontMono = await pdfDoc.embedFont(StandardFonts.Courier);

  const primaryBlue = rgb(0 / 255, 113 / 255, 227 / 255);
  const cyanAccent = rgb(41 / 255, 151 / 255, 255 / 255);
  const darkNavy = rgb(11 / 255, 15 / 255, 25 / 255);
  const textDark = rgb(29 / 255, 29 / 255, 31 / 255);
  const textMuted = rgb(110 / 255, 110 / 255, 115 / 255);
  const lightGray = rgb(245 / 255, 245 / 255, 247 / 255);
  const borderGray = rgb(220 / 255, 220 / 255, 225 / 255);

  const pageWidth = 595.28; // A4 portrait width
  const pageHeight = 841.89; // A4 portrait height

  function drawHeader(page, title, pageNum) {
    // Top banner
    page.drawRectangle({
      x: 0,
      y: pageHeight - 45,
      width: pageWidth,
      height: 45,
      color: darkNavy,
    });

    page.drawText('PT. MAUDY NETWORK KOMUNIKASI (MNK)', {
      x: 40,
      y: pageHeight - 28,
      size: 10,
      font: fontBold,
      color: rgb(1, 1, 1),
    });

    page.drawText('AEGIS ENTERPRISE AI SUITE • OFFICIAL SPECIFICATION CATALOG', {
      x: 40,
      y: pageHeight - 39,
      size: 8,
      font: fontRegular,
      color: cyanAccent,
    });

    page.drawText(`HALAMAN ${pageNum}`, {
      x: pageWidth - 100,
      y: pageHeight - 32,
      size: 9,
      font: fontBold,
      color: rgb(1, 1, 1),
    });

    // Top subtle rule
    page.drawLine({
      start: { x: 0, y: pageHeight - 46 },
      end: { x: pageWidth, y: pageHeight - 46 },
      thickness: 2,
      color: primaryBlue,
    });

    // Bottom footer
    page.drawLine({
      start: { x: 40, y: 40 },
      end: { x: pageWidth - 40, y: 40 },
      thickness: 0.8,
      color: borderGray,
    });

    page.drawText('ISO 9001:2015 & ISO 27001:2022 Certified • Izin Jastel Kominfo RI • 24/7 NOC: +62 857-2748-7507', {
      x: 40,
      y: 28,
      size: 7.5,
      font: fontRegular,
      color: textMuted,
    });

    page.drawText('CONFIDENTIAL & PROPRIETARY', {
      x: pageWidth - 165,
      y: 28,
      size: 7.5,
      font: fontBold,
      color: primaryBlue,
    });
  }

  // ==========================================
  // PAGE 1: COVER & EXECUTIVE OVERVIEW
  // ==========================================
  const page1 = pdfDoc.addPage([pageWidth, pageHeight]);
  drawHeader(page1, 'Executive Overview', 1);

  // Large Hero Title Block
  page1.drawRectangle({
    x: 40,
    y: pageHeight - 190,
    width: pageWidth - 80,
    height: 125,
    color: lightGray,
    borderColor: borderGray,
    borderWidth: 1,
  });

  page1.drawText('DOKUMEN RESMI SPESIFIKASI TEKNIK & KATALOG PRODUK', {
    x: 55,
    y: pageHeight - 90,
    size: 9,
    font: fontBold,
    color: primaryBlue,
  });

  page1.drawText('Aegis Enterprise AI Suite', {
    x: 55,
    y: pageHeight - 120,
    size: 24,
    font: fontBold,
    color: darkNavy,
  });

  page1.drawText('Platform Kecerdasan Buatan Terpadu, Satelit Maritim, CCTV AI & Sovereign LLM', {
    x: 55,
    y: pageHeight - 142,
    size: 11,
    font: fontRegular,
    color: textDark,
  });

  page1.drawText('REF: MNK-AEGIS-CATALOG-2026/V4  •  Edisi Q4 2026  •  PT Maudy Network Nusantara', {
    x: 55,
    y: pageHeight - 170,
    size: 8.5,
    font: fontMono,
    color: textMuted,
  });

  // Section 1: Ringkasan Eksekutif
  page1.drawText('1. RINGKASAN EKSEKUTIF (EXECUTIVE SUMMARY)', {
    x: 40,
    y: pageHeight - 220,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  const execSummary = [
    'Aegis Enterprise AI Suite adalah ekosistem platform kecerdasan buatan, otomasi analitik,',
    'dan konektivitas maritim terpadu yang dirancang khusus untuk memenuhi standar keandalan tinggi',
    '(carrier-grade) pada sektor maritim, pertahanan, perbankan, manufaktur, dan pemerintahan.',
    '',
    'Sistem dibangun dengan prinsip kedaulatan data penuh (Data Sovereignty) melalui arsitektur Private',
    'AI On-Premise (Air-Gapped Ready), memastikan bahwa 100% data bisnis, telemetri operasional, dan',
    'dokumen rahasia perusahaan tidak pernah keluar ke jaringan pihak ketiga (Zero Outbound Egress).'
  ];

  let curY = pageHeight - 240;
  for (const line of execSummary) {
    if (line) {
      page1.drawText(line, { x: 40, y: curY, size: 9.5, font: fontRegular, color: textDark });
    }
    curY -= 14;
  }

  // 4 Core Pillars Box
  page1.drawText('2. EMPAT PILAR UTAMA ARSITEKTUR AEGIS', {
    x: 40,
    y: curY - 10,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  curY -= 30;

  const pillars = [
    {
      title: 'A. Private Sovereign AI Engine',
      desc: 'Model LLM & penalaran semantik mandiri berjalan langsung di cluster GPU lokal.',
      metric: 'Zero Data Outbound • Latensi < 80ms'
    },
    {
      title: 'B. Aegis Maritime Hybrid Connectivity',
      desc: 'Integrasi otomatis VSAT Ku/Ka-Band & Starlink LEO dengan cerdas failover zero-loss.',
      metric: 'SLA Uptime 99.98% • Kepatuhan IMO MSC.428(98)'
    },
    {
      title: 'C. XTUR Edge AI Computer Vision',
      desc: 'Pengawasan CCTV cerdas dengan komputasi tepi ANPR plat nomor & sensor termal api.',
      metric: 'Akurasi ANPR 99.2% • Respon Intrusi < 150ms'
    },
    {
      title: 'D. Autonomous Zero-Trust Cyber Shield',
      desc: 'Pertahanan siber otonom dengan mikrosegmentasi jaringan dan mitigasi ransomware.',
      metric: 'FIPS 140-2 Level 3 • Isolasi Threat < 200ms'
    }
  ];

  for (const pil of pillars) {
    page1.drawRectangle({
      x: 40,
      y: curY - 55,
      width: pageWidth - 80,
      height: 52,
      color: lightGray,
      borderColor: borderGray,
      borderWidth: 0.8,
    });

    page1.drawText(pil.title, { x: 52, y: curY - 18, size: 10, font: fontBold, color: darkNavy });
    page1.drawText(pil.desc, { x: 52, y: curY - 32, size: 8.5, font: fontRegular, color: textDark });
    page1.drawText(`Tolok Ukur: ${pil.metric}`, { x: 52, y: curY - 46, size: 8, font: fontBold, color: primaryBlue });

    curY -= 62;
  }

  // Legal & Certification Footnote Box
  page1.drawRectangle({
    x: 40,
    y: 55,
    width: pageWidth - 80,
    height: 70,
    color: rgb(240 / 255, 247 / 255, 255 / 255),
    borderColor: rgb(180 / 255, 215 / 255, 255 / 255),
    borderWidth: 1,
  });

  page1.drawText('LEGALITAS & JAMINAN STANDAR KELAIKAN PT MAUDY NETWORK NUSANTARA', {
    x: 52,
    y: 110,
    size: 8.5,
    font: fontBold,
    color: primaryBlue,
  });
  page1.drawText('• Sertifikasi ISO 9001:2015 (Manajemen Mutu) & ISO 27001:2022 (Keamanan Informasi & Privasi Data)', {
    x: 52,
    y: 95,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  page1.drawText('• Izin Resmi Penyelenggaraan Jasa Telekomunikasi (Jastel) dari Kementerian Kominfo RI', {
    x: 52,
    y: 82,
    size: 8,
    font: fontRegular,
    color: textDark,
  });
  page1.drawText('• Tim Engineering Tersertifikasi MikroTik MTCINE & Cisco CCNP dengan Layanan Siaga NOC 24/7/365', {
    x: 52,
    y: 69,
    size: 8,
    font: fontRegular,
    color: textDark,
  });

  // ==========================================
  // PAGE 2: MARITIME & INDUSTRIAL SURVEILLANCE
  // ==========================================
  const page2 = pdfDoc.addPage([pageWidth, pageHeight]);
  drawHeader(page2, 'Katalog Solusi Maritim & Industri', 2);

  page2.drawText('KATALOG A: SOLUSI MARITIM & SATELIT KAPAL LEPAS PANTAI', {
    x: 40,
    y: pageHeight - 75,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  const maritimeProds = [
    {
      code: 'CAT-MAR-01',
      name: 'Aegis Maritime Intelligent System (Flagship)',
      desc: 'Platform Private AI onboard kapal laut untuk digital twin telemetri mesin (silinder, RPM, bunker fuel), Planned Maintenance System (PMS) offline, temu balik dokumen sertifikat kapal (IOPP, ISM Code), dan asisten nakhoda 100% tanpa internet.',
      specs: 'Spesifikasi: 100% On-Premise Air-Gapped Server, Multi-Engine Sensor Interface, Kepatuhan Regulasi IMO MSC.428(98) & IACS UR E26/E27, Enkripsi AES-256.'
    },
    {
      code: 'CAT-MAR-02',
      name: 'Hybrid Marine VSAT & Starlink QoS Router',
      desc: 'Perangkat router maritim dengan kecerdasan pembagian bandwidth cerdas (Smart Traffic Shaping), memisahkan kanal bisnis kritis navigasi (ECDIS, telemetri, VoIP) dari kuota hiburan kru kapal laut.',
      specs: 'Spesifikasi: Dual-WAN Active-Active, Auto-Failover < 450ms, Kompatibel Starlink Maritime Flat High Performance & Antena Gyro VSAT Ku/Ka-Band.'
    },
    {
      code: 'CAT-MAR-03',
      name: 'FleetOS AI: Telematika & Pelacakan Rute Armada',
      desc: 'Pemantauan posisi global kapal (AIS real-time), estimasi waktu tiba (ETA) akurat berbasis kalkulasi cuaca oseanografi, dan optimasi konsumsi BBM per mil laut.',
      specs: 'Spesifikasi: Integrasi satelit Inmarsat/Iridium, pelaporan otomatis geofencing zona labuh pelabuhan, analitik emisi karbon IMO DCS.'
    }
  ];

  curY = pageHeight - 100;
  for (const item of maritimeProds) {
    page2.drawRectangle({
      x: 40,
      y: curY - 72,
      width: pageWidth - 80,
      height: 68,
      color: lightGray,
      borderColor: borderGray,
      borderWidth: 0.8,
    });

    page2.drawText(`${item.code} • ${item.name}`, { x: 50, y: curY - 18, size: 9.5, font: fontBold, color: primaryBlue });
    page2.drawText(item.desc, { x: 50, y: curY - 34, size: 8, font: fontRegular, color: textDark });
    page2.drawText(item.specs, { x: 50, y: curY - 60, size: 7.5, font: fontMono, color: textMuted });

    curY -= 82;
  }

  // Section 2: Industrial Surveillance
  curY -= 15;
  page2.drawText('KATALOG B: SISTEM CCTV CERDAS XTUR AI VISION SURVEILLANCE', {
    x: 40,
    y: curY,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  const visionProds = [
    {
      code: 'CAT-VIS-01',
      name: 'XTUR AI Edge Computer Vision & ANPR E-TLE',
      desc: 'Kamera pengawas pintar dengan chip edge AI on-board untuk pembacaan otomatis pelat nomor kendaraan bermotor (ANPR) hingga kecepatan 120 km/jam, gerbang pelabuhan, pergudangan logistik, dan kawasan industri manufaktur.',
      specs: 'Spesifikasi: Akurasi ANPR 99.2%, Illuminator IR 80m, WDR 140dB, Protokol ONVIF Profile S/G/T, IP67 Weatherproof IK10 Vandal-Proof.'
    },
    {
      code: 'CAT-VIS-02',
      name: 'Dual-Spectrum Thermal & Fire Early Detection',
      desc: 'Sensor termografik presisi tinggi yang memantau kenaikan suhu abnormal pada tangki bahan bakar kapal, gardu trafo listrik, dan conveyor batubara sebelum timbul percikan api.',
      specs: 'Spesifikasi: Rentang Suhu -20°C s/d 550°C, Resolusi Termal 640x512, Notifikasi Alarm Relai & Webhook < 100ms.'
    },
    {
      code: 'CAT-VIS-03',
      name: 'Factory & Facility Digital Twin AI',
      desc: 'Visualisasi 3D real-time status lini perakitan pabrik, telemetri sensor getaran getar motor industri, dan prediksi kerusakan mesin (Predictive Maintenance).',
      specs: 'Spesifikasi: Protokol MQTT/Modbus TCP/OPC-UA, Pengurangan Down-Time Tak Terencana hingga 40%, Integrasi SAP/Oracle ERP.'
    }
  ];

  curY -= 25;
  for (const item of visionProds) {
    page2.drawRectangle({
      x: 40,
      y: curY - 72,
      width: pageWidth - 80,
      height: 68,
      color: lightGray,
      borderColor: borderGray,
      borderWidth: 0.8,
    });

    page2.drawText(`${item.code} • ${item.name}`, { x: 50, y: curY - 18, size: 9.5, font: fontBold, color: primaryBlue });
    page2.drawText(item.desc, { x: 50, y: curY - 34, size: 8, font: fontRegular, color: textDark });
    page2.drawText(item.specs, { x: 50, y: curY - 60, size: 7.5, font: fontMono, color: textMuted });

    curY -= 82;
  }

  // ==========================================
  // PAGE 3: ENTERPRISE DOCUMENT & SOVEREIGN AI
  // ==========================================
  const page3 = pdfDoc.addPage([pageWidth, pageHeight]);
  drawHeader(page3, 'Katalog Dokumen Cerdas & Sovereign AI', 3);

  page3.drawText('KATALOG C: DOKUMEN INTELIGEN, PROCUREMENT & AUDIT KONTRAK', {
    x: 40,
    y: pageHeight - 75,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  const docProds = [
    {
      code: 'CAT-DOC-01',
      name: 'AI Document Intelligence & Semantic RAG',
      desc: 'Mesin pencari semantik berbasis AI yang membaca puluhan ribu berkas kontrak, laporan keuangan, dan gambar teknik CAD dalam hitungan detik untuk menjawab pertanyaan spesifik tim manajemen.',
      specs: 'Spesifikasi: OCR Multibahasa Presisi 99.4%, Chunking Hirarki Cerdas, Private Vector Database, Dukungan File PDF/DOCX/DWG/TIFF.'
    },
    {
      code: 'CAT-DOC-02',
      name: 'Smart Procurement & Vendor Risk Evaluator',
      desc: 'Otomasi pembacaan invoice, rekonsiliasi Purchase Order (PO) 3-Way Matching otomatis, deteksi anomali mark-up harga vendor, dan penilaian performa rekanan.',
      specs: 'Spesifikasi: Penghematan Jam Kerja Administrasi hingga 75%, Deteksi Duplikasi Tagihan, REST API Integrasi Core ERP.'
    },
    {
      code: 'CAT-DOC-03',
      name: 'C-Level Strategic Business Intelligence & Natural Language Query',
      desc: 'Dashboard eksekutif yang memungkinkan direksi menanyakan performa omset, arus kas proyek, atau rasio margin hanya dengan mengetik pertanyaan bahasa Indonesia santai.',
      specs: 'Spesifikasi: Text-to-SQL Generator Teruji, Visualisasi Grafik Dinamis, Model Keamanan Data Berjenjang (Row-Level Security).'
    }
  ];

  curY = pageHeight - 100;
  for (const item of docProds) {
    page3.drawRectangle({
      x: 40,
      y: curY - 72,
      width: pageWidth - 80,
      height: 68,
      color: lightGray,
      borderColor: borderGray,
      borderWidth: 0.8,
    });

    page3.drawText(`${item.code} • ${item.name}`, { x: 50, y: curY - 18, size: 9.5, font: fontBold, color: primaryBlue });
    page3.drawText(item.desc, { x: 50, y: curY - 34, size: 8, font: fontRegular, color: textDark });
    page3.drawText(item.specs, { x: 50, y: curY - 60, size: 7.5, font: fontMono, color: textMuted });

    curY -= 82;
  }

  curY -= 15;
  page3.drawText('KATALOG D: SOVEREIGN PRIVATE AI & ENTERPRISE CYBER DEFENSE', {
    x: 40,
    y: curY,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  const cyberProds = [
    {
      code: 'CAT-CYB-01',
      name: 'Aegis Sovereign Private AI (On-Premise Air-Gapped LLM)',
      desc: 'Instalasi model bahasa skala besar (7B s/d 70B parameter) di server GPU lokal perusahaan Anda. Tidak ada API ke luar negeri, menjaga rahasia dagang dan mematuhi regulasi UU PDP.',
      specs: 'Spesifikasi: Hardware NVIDIA H100 / L40S / RTX Ada Cluster, Docker & Kubernetes Deployment, Token Throughput > 80 t/s.'
    },
    {
      code: 'CAT-CYB-02',
      name: 'Aegis Zero-Trust Cyber Shield & Ransomware Mitigation',
      desc: 'Arsitektur keamanan siber otonom yang menginspeksi lalu lintas data jaringan internal, mengidentifikasi anomali pergerakan lateral peretas, dan mengisolasi server terinfeksi seketika.',
      specs: 'Spesifikasi: Waktu Isolasi < 200ms, SIEM & SOAR Integration, Kepatuhan Standar CIS Benchmark & ISO 27001 Annex A.'
    },
    {
      code: 'CAT-CYB-03',
      name: '24/7 Managed Security Operations Center (SOC & NOC)',
      desc: 'Layanan monitoring terpusat dari markas komando NOC MNK Semarang dengan teknisi siaga darurat tanggap insiden jaringan telekomunikasi dan link satelit.',
      specs: 'Spesifikasi: Jaminan SLA 99.98%, MTTR (Mean Time to Repair) Prioritas Darurat < 15 Menit, Dispatch Teknisi Lapangan Nasional.'
    }
  ];

  curY -= 25;
  for (const item of cyberProds) {
    page3.drawRectangle({
      x: 40,
      y: curY - 72,
      width: pageWidth - 80,
      height: 68,
      color: lightGray,
      borderColor: borderGray,
      borderWidth: 0.8,
    });

    page3.drawText(`${item.code} • ${item.name}`, { x: 50, y: curY - 18, size: 9.5, font: fontBold, color: primaryBlue });
    page3.drawText(item.desc, { x: 50, y: curY - 34, size: 8, font: fontRegular, color: textDark });
    page3.drawText(item.specs, { x: 50, y: curY - 60, size: 7.5, font: fontMono, color: textMuted });

    curY -= 82;
  }

  // ==========================================
  // PAGE 4: PROCUREMENT MATRIX & CONTACT
  // ==========================================
  const page4 = pdfDoc.addPage([pageWidth, pageHeight]);
  drawHeader(page4, 'Skema Pengadaan & Kontak B2B', 4);

  page4.drawText('4. MATRIKS SKEMA PENGADAAN & INVESTASI B2B', {
    x: 40,
    y: pageHeight - 75,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  page4.drawText('PT Maudy Network Nusantara menyediakan opsi pengadaan fleksibel sesuai standar audit perusahaan Anda:', {
    x: 40,
    y: pageHeight - 93,
    size: 9,
    font: fontRegular,
    color: textDark,
  });

  // Table
  const tableData = [
    {
      scheme: '1. Proof of Concept (PoC)',
      hw: 'Perangkat Uji Coba Dipinjamkan',
      lic: 'Full Enterprise 14-30 Hari',
      sla: 'Dedicated Solutions Engineer',
      suit: 'Validasi kelayakan teknis sebelum lelang / tender'
    },
    {
      scheme: '2. CAPEX (Perpetual)',
      hw: 'Hak Milik Penuh Client',
      lic: 'One-Time Perpetual License',
      sla: 'Garansi 1-3 Tahun + Onsite Care',
      suit: 'BUMN, Lembaga Pertahanan & Proyek APBN'
    },
    {
      scheme: '3. OPEX (Managed Service)',
      hw: 'Sewa Perangkat Terpadu',
      lic: 'Berlangganan Bulanan / Tahunan',
      sla: 'SLA 99.98% + Spare Part Swap',
      suit: 'Armada Kapal Komersial, Perusahaan Pelayaran Swasta'
    },
    {
      scheme: '4. Hybrid Custom Tender',
      hw: 'Disesuaikan dengan Kerangka Acuan',
      lic: 'Volume / Enterprise-Wide Tier',
      sla: 'Custom SLA sesuai Dokumen SPK',
      suit: 'Pengadaan Terpadu Multinasional / Konsorsium'
    }
  ];

  curY = pageHeight - 115;
  for (const row of tableData) {
    page4.drawRectangle({
      x: 40,
      y: curY - 55,
      width: pageWidth - 80,
      height: 50,
      color: lightGray,
      borderColor: borderGray,
      borderWidth: 0.8,
    });

    page4.drawText(row.scheme, { x: 50, y: curY - 17, size: 9.5, font: fontBold, color: primaryBlue });
    page4.drawText(`Hardware: ${row.hw}   |   Lisensi: ${row.lic}`, { x: 50, y: curY - 32, size: 8, font: fontRegular, color: textDark });
    page4.drawText(`Layanan: ${row.sla}   |   Ideal Untuk: ${row.suit}`, { x: 50, y: curY - 45, size: 7.5, font: fontRegular, color: textMuted });

    curY -= 60;
  }

  // Official Ordering & Inquiry Desk
  curY -= 15;
  page4.drawText('5. KONTAK RESMI PENGADAAN & LAYANAN TEKNIS', {
    x: 40,
    y: curY,
    size: 12,
    font: fontBold,
    color: darkNavy,
  });

  curY -= 25;
  page4.drawRectangle({
    x: 40,
    y: curY - 120,
    width: pageWidth - 80,
    height: 120,
    color: rgb(240 / 255, 247 / 255, 255 / 255),
    borderColor: rgb(180 / 255, 215 / 255, 255 / 255),
    borderWidth: 1.2,
  });

  page4.drawText('PT. MAUDY NETWORK KOMUNIKASI (MNK) - COMMERCIAL DESK', {
    x: 55,
    y: curY - 22,
    size: 10,
    font: fontBold,
    color: primaryBlue,
  });

  page4.drawText('Kantor Pusat     : Jl. Prof. Dr. Hamka BPI Blok A-5, Ngaliyan, Semarang, Jawa Tengah, Indonesia 50184', {
    x: 55,
    y: curY - 42,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page4.drawText('Hotline WhatsApp : +62 857-2748-7507 (Direct B2B Solutions & RFP Desk)', {
    x: 55,
    y: curY - 58,
    size: 8.5,
    font: fontBold,
    color: textDark,
  });

  page4.drawText('Email Resmi      : corporate@maudynetwork.com  |  noc@maudynetwork.com', {
    x: 55,
    y: curY - 74,
    size: 8.5,
    font: fontRegular,
    color: textDark,
  });

  page4.drawText('Situs Web Resmi  : https://maudynetwork.com  |  https://maudy-network-corporate.vercel.app', {
    x: 55,
    y: curY - 90,
    size: 8.5,
    font: fontRegular,
    color: primaryBlue,
  });

  page4.drawText('Layanan NOC 24/7 : Siaga 365 Hari - Dispatch Tim Teknisi Lapangan Nasional Seluruh Indonesia', {
    x: 55,
    y: curY - 106,
    size: 8,
    font: fontBold,
    color: rgb(16 / 255, 185 / 255, 129 / 255),
  });

  // Stamp / Signoff Block
  curY -= 150;
  page4.drawText('Disahkan untuk Keperluan Penawaran Resmi & Verifikasi Vendor:', {
    x: 40,
    y: curY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });

  page4.drawText('PT. MAUDY NETWORK KOMUNIKASI', {
    x: 40,
    y: curY - 18,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });

  page4.drawText('Direktorat Rekayasa Teknologi & Infrastruktur Maritim', {
    x: 40,
    y: curY - 32,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });

  page4.drawText('[ DOKUMEN ELEKTRONIK RESMI DITERBITKAN OLEH SISTEM MNK ]', {
    x: 40,
    y: curY - 60,
    size: 8,
    font: fontMono,
    color: primaryBlue,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, '../public/downloads/Aegis-Enterprise-AI-Catalog-2026.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`PDF created successfully at: ${outputPath} (${pdfBytes.length} bytes)`);
}

createAegisPdf().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
