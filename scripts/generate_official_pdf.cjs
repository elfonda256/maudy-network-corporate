const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Aegis Enterprise AI Suite - Official Catalog 2026</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  @page {
    size: A4 portrait;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1E293B;
    background-color: #FFFFFF;
    font-size: 11px;
    line-height: 1.5;
  }

  .page {
    width: 210mm;
    height: 297mm;
    position: relative;
    page-break-after: always;
    break-after: page;
    background: #FFFFFF;
    overflow: hidden;
    padding: 0;
  }

  /* Universal Header & Footer */
  .header-bar {
    height: 18mm;
    background: linear-gradient(135deg, #070A14 0%, #0F172A 100%);
    border-bottom: 2.5px solid #0071E3;
    padding: 0 16mm;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
  }
  .header-brand {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .header-logo-badge {
    width: 26px;
    height: 26px;
    background: #0071E3;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 13px;
    color: #FFF;
    font-family: 'Space Grotesk', sans-serif;
  }
  .header-title-text {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #F8FAFC;
  }
  .header-subtitle-text {
    font-size: 8px;
    color: #38BDF8;
    font-family: 'Space Grotesk', monospace;
    letter-spacing: 0.5px;
  }
  .header-page-tag {
    font-size: 9px;
    font-family: 'Space Grotesk', monospace;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    padding: 3px 8px;
    border-radius: 12px;
    color: #E2E8F0;
  }

  .footer-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 13mm;
    border-top: 1px solid #E2E8F0;
    background: #F8FAFC;
    padding: 0 16mm;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 8px;
    color: #64748B;
  }
  .footer-bar strong {
    color: #0F172A;
  }

  .content-area {
    padding: 10mm 16mm 14mm 16mm;
    height: 266mm;
    position: relative;
  }

  /* Typography Utilities */
  h1 { font-size: 24px; font-weight: 800; color: #0F172A; letter-spacing: -0.5px; line-height: 1.2; }
  h2 { font-size: 15px; font-weight: 700; color: #0F172A; letter-spacing: -0.3px; }
  h3 { font-size: 12px; font-weight: 700; color: #0F172A; }
  p { color: #475569; }

  .badge {
    display: inline-block;
    font-size: 8px;
    font-weight: 700;
    font-family: 'Space Grotesk', monospace;
    text-transform: uppercase;
    padding: 2.5px 7px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }
  .badge-blue { background: #EFF6FF; color: #0284C7; border: 1px solid #BAE6FD; }
  .badge-dark { background: #0F172A; color: #38BDF8; border: 1px solid #1E293B; }
  .badge-green { background: #F0FDF4; color: #16A34A; border: 1px solid #BBF7D0; }
  .badge-purple { background: #FAF5FF; color: #9333EA; border: 1px solid #E9D5FF; }

  /* Page 1 Specifics */
  .hero-box {
    background: linear-gradient(145deg, #070B19 0%, #0F172A 100%);
    border-radius: 12px;
    padding: 18px 22px;
    color: #FFFFFF;
    position: relative;
    border: 1px solid #1E293B;
    margin-bottom: 14px;
  }
  .hero-box h1 { color: #FFFFFF; font-size: 26px; margin: 6px 0; }
  .hero-box p { color: #94A3B8; font-size: 11px; max-width: 90%; }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 14px;
  }
  .stat-card {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 10px 12px;
  }
  .stat-num {
    font-size: 18px;
    font-weight: 800;
    color: #0071E3;
    font-family: 'Space Grotesk', sans-serif;
  }
  .stat-label {
    font-size: 9px;
    font-weight: 600;
    color: #334155;
    margin-top: 2px;
  }
  .stat-desc {
    font-size: 8px;
    color: #64748B;
    margin-top: 2px;
    line-height: 1.3;
  }

  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 14px;
  }
  .pillar-card {
    border: 1px solid #E2E8F0;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 12px 14px;
    border-left: 3.5px solid #0071E3;
  }
  .pillar-title {
    font-size: 11px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 4px;
  }
  .pillar-desc {
    font-size: 9.5px;
    color: #475569;
    line-height: 1.4;
  }

  .legal-callout {
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Catalog Grid Styles (Page 2) */
  .category-section {
    margin-bottom: 13px;
  }
  .category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #E2E8F0;
    padding-bottom: 4px;
    margin-bottom: 7px;
  }
  .category-title {
    font-size: 12px;
    font-weight: 800;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .products-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .product-box {
    border: 1px solid #E2E8F0;
    background: #FAFAFA;
    border-radius: 6px;
    padding: 8px 10px;
    display: flex;
    flex-col;
    justify-content: space-between;
    min-height: 86px;
  }
  .product-code {
    font-size: 7.5px;
    font-family: 'Space Grotesk', monospace;
    color: #0284C7;
    font-weight: 700;
  }
  .product-name {
    font-size: 10px;
    font-weight: 700;
    color: #0F172A;
    margin: 2px 0;
  }
  .product-desc {
    font-size: 8px;
    color: #64748B;
    line-height: 1.35;
    margin-bottom: 6px;
  }
  .product-tag {
    font-size: 7.5px;
    font-weight: 600;
    color: #0369A1;
    background: #E0F2FE;
    padding: 2px 5px;
    border-radius: 3px;
    display: inline-block;
  }

  /* Tables (Page 3) */
  .spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 14px;
    font-size: 9px;
  }
  .spec-table th {
    background: #0F172A;
    color: #FFFFFF;
    font-weight: 700;
    padding: 7px 10px;
    text-align: left;
    font-size: 8.5px;
    letter-spacing: 0.3px;
  }
  .spec-table td {
    padding: 6px 10px;
    border-bottom: 1px solid #E2E8F0;
    color: #334155;
  }
  .spec-table tr:nth-child(even) td {
    background: #F8FAFC;
  }
  .spec-table td strong {
    color: #0F172A;
  }

  /* Procurement Box (Page 4) */
  .scheme-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 16px;
  }
  .scheme-box {
    border: 1.5px solid #E2E8F0;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 12px 12px;
    text-align: left;
  }
  .scheme-box.highlight {
    border-color: #0071E3;
    background: #F8FAFC;
  }
  .scheme-name {
    font-size: 11px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 4px;
  }
  .scheme-badge {
    font-size: 7.5px;
    font-family: 'Space Grotesk', monospace;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 6px;
  }

  .contact-banner {
    background: linear-gradient(135deg, #070A14 0%, #1E293B 100%);
    border-radius: 10px;
    padding: 14px 18px;
    color: #FFFFFF;
    margin-top: 10px;
    border: 1px solid #334155;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 8px;
    font-size: 9px;
  }
  .contact-item-title {
    color: #38BDF8;
    font-weight: 700;
    font-size: 8px;
    font-family: 'Space Grotesk', monospace;
    text-transform: uppercase;
  }
  .contact-item-val {
    color: #F8FAFC;
    font-weight: 600;
    margin-top: 2px;
  }
</style>
</head>
<body>

<!-- ============================================================== -->
<!-- PAGE 1: COVER & EXECUTIVE OVERVIEW                              -->
<!-- ============================================================== -->
<div class="page">
  <div class="header-bar">
    <div class="header-brand">
      <div class="header-logo-badge">M</div>
      <div>
        <div class="header-title-text">PT MAUDY NETWORK KOMUNIKASI (MNK)</div>
        <div class="header-subtitle-text">AEGIS ENTERPRISE ARTIFICIAL INTELLIGENCE DIVISION</div>
      </div>
    </div>
    <div class="header-page-tag">KATALOG RESMI &bull; HALAMAN 1 / 4</div>
  </div>

  <div class="content-area">
    <!-- Hero Box -->
    <div class="hero-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
        <span class="badge badge-dark">DOKUMEN RESMI TENDER & PENGADAAN B2B</span>
        <span style="font-size:8px; font-family:'Space Grotesk', monospace; color:#38BDF8;">REF: MNK-AEGIS-CAT-2026/V4.2</span>
      </div>
      <h1>Aegis Enterprise AI Suite</h1>
      <p style="margin-bottom:8px;">
        Katalog Komprehensif Solusi Kecerdasan Buatan Terintegrasi, Komunikasi Satelit Maritim, Edge Vision CCTV XTUR, & Sovereign On-Premise LLM untuk Korporasi Strategis dan Pemerintahan.
      </p>
      <div style="display:flex; gap:6px; margin-top:8px;">
        <span class="badge badge-blue">ISO 9001:2015</span>
        <span class="badge badge-blue">ISO 27001:2022</span>
        <span class="badge badge-blue">IZIN JASTEL KOMINFO</span>
        <span class="badge badge-blue">FORTINET NSE 7</span>
        <span class="badge badge-blue">AIR-GAPPED COMPLIANT</span>
      </div>
    </div>

    <!-- 4 Stats Highlight -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">12 Solusi</div>
        <div class="stat-label">Enterprise Ready</div>
        <div class="stat-desc">Didesain khusus untuk alur kerja riil korporasi & tender BUMN.</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">&lt; 4.2ms</div>
        <div class="stat-label">Edge Inference</div>
        <div class="stat-desc">Kecepatan deteksi plat nomor & intrusi CCTV XTUR real-time.</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">Zero Egress</div>
        <div class="stat-label">Sovereign Data</div>
        <div class="stat-desc">Air-Gapped Private GPU, data dokumen tidak pernah keluar server.</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">99.98%</div>
        <div class="stat-label">SLA NOC 24/7</div>
        <div class="stat-desc">Dukungan teknis nonstop tim engineer bersertifikasi Cisco/Fortinet.</div>
      </div>
    </div>

    <!-- Executive Pillars -->
    <div style="margin-bottom:8px;">
      <h2>Pilar Arsitektur & Rekayasa Sistem Aegis</h2>
      <p style="font-size:9.5px; margin-bottom:8px;">Mengapa solusi Aegis menjadi standar terdepan pada industri maritim, perbankan, dan manufaktur kritis:</p>
    </div>

    <div class="pillar-grid">
      <div class="pillar-card">
        <div class="pillar-title">1. Sovereign & Air-Gapped Private AI</div>
        <div class="pillar-desc">
          Model AI dan database dokumen berjalan 100% secara on-premise pada hardware GPU internal organisasi Anda. Tanpa ketergantungan API pihak ketiga, menjamin kerahasiaan absolut data sensitif dan kepatuhan terhadap UU Perlindungan Data Pribadi (UU PDP No. 27/2022).
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-title">2. Edge Computing & CCTV Cerdas XTUR</div>
        <div class="pillar-desc">
          Komputasi AI langsung di lokasi kamera dengan inferensi ultra cepat 4.2ms. Menghadirkan ANPR Plat Nomor 57 wilayah Indonesia, pelacakan armada kendaraan, serta deteksi titik panas thermal dual-spectrum untuk mitigasi kebakaran pabrik secara otomatis.
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-title">3. Satelit Maritim & Jaringan Lepas Pantai</div>
        <div class="pillar-desc">
          Integrasi telemetri kapal laut, VSAT maritim pita frekuensi Ku/Ka-Band, dan monitoring armada navigasi rute ALKI I/II/III. Menyediakan konektivitas dan AI telemetri mesin tanpa henti hingga radius perairan Samudera Pasifik.
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-title">4. Otomasi Dokumen & Semantic RAG</div>
        <div class="pillar-desc">
          OCR cerdas multi-bahasa yang mampu mengekstraksi ratusan ribu halaman kontrak tender, faktur pajak, dan blueprint teknis dengan akurasi 99.4%. Mesin pencarian semantik vektor menghasilkan jawaban presisi dan bukti audit yang dapat diverifikasi.
        </div>
      </div>
    </div>

    <!-- Official Legal Callout -->
    <div class="legal-callout">
      <div>
        <div style="font-weight:700; font-size:10px; color:#166534;">Jaminan Legalitas & Kredibilitas Badan Usaha PT. Maudy Network Komunikasi</div>
        <div style="font-size:8.5px; color:#15803D; margin-top:1px;">
          NIB: 0220205831962 &bull; NPWP: 94.786.321.4-503.000 &bull; Izin Jastel Kominfo RI No: 129/TEL.04.02/2021
        </div>
      </div>
      <span class="badge badge-green">100% COMPLIANT</span>
    </div>

  </div>

  <div class="footer-bar">
    <div>PT Maudy Network Komunikasi &bull; <strong>Aegis Enterprise AI Suite</strong> &bull; Edisi 2026/Q4</div>
    <div>Dokumen Resmi Spesifikasi Teknis &bull; Halaman 1 dari 4</div>
  </div>
</div>

<!-- ============================================================== -->
<!-- PAGE 2: COMPLETE 12 ENTERPRISE AI PRODUCTS PORTFOLIO           -->
<!-- ============================================================== -->
<div class="page">
  <div class="header-bar">
    <div class="header-brand">
      <div class="header-logo-badge">M</div>
      <div>
        <div class="header-title-text">PORTOFOLIO LENGKAP 12 SOLUSI ENTERPRISE AI</div>
        <div class="header-subtitle-text">INTEGRATED INDUSTRIAL ARTIFICIAL INTELLIGENCE MATRIX</div>
      </div>
    </div>
    <div class="header-page-tag">HALAMAN 2 / 4</div>
  </div>

  <div class="content-area">
    
    <!-- SECTOR 1: MARITIME & SATELLITE -->
    <div class="category-section">
      <div class="category-header">
        <div class="category-title">
          <span>🚢</span>
          <span>SEKTOR 1: MARITIM, VSAT SATELIT & LOGISTIK KELAUTAN</span>
        </div>
        <span class="badge badge-blue">OFFSHORE & MARINE</span>
      </div>
      <div class="products-row">
        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-MARITIME-01</div>
            <div class="product-name">Aegis Maritime Sat-AI</div>
            <div class="product-desc">Sistem navigasi cerdas kapal terintegrasi VSAT ku-band, pemantauan konsumsi bahan bakar real-time, dan deteksi cuaca ekstrem.</div>
          </div>
          <span class="product-tag">VSAT Telemetri & Mesin</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-FLEET-02</div>
            <div class="product-name">FleetOS Intelligence</div>
            <div class="product-desc">Optimasi rute pelayaran maritim ALKI I/II/III, audit histori AIS armada kapal, dan prediksi waktu tiba pelabuhan (ETA) otomatis.</div>
          </div>
          <span class="product-tag">Optimasi Rute Armada</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-WASTE-03</div>
            <div class="product-name">Smart Port & Waste AI</div>
            <div class="product-desc">Monitoring pembuangan limbah pelabuhan, sensor air pintar, dan kepatuhan regulasi lingkungan maritim internasional MARPOL.</div>
          </div>
          <span class="product-tag">Kepatuhan Lingkungan</span>
        </div>
      </div>
    </div>

    <!-- SECTOR 2: SURVEILLANCE & INDUSTRIAL EDGE AI -->
    <div class="category-section">
      <div class="category-header">
        <div class="category-title">
          <span>👁️</span>
          <span>SEKTOR 2: CCTV CERDAS XTUR, MANUFAKTUR & KONSTRUKSI</span>
        </div>
        <span class="badge badge-dark">INDUSTRIAL EDGE VISION</span>
      </div>
      <div class="products-row">
        <div class="product-box">
          <div>
            <div class="product-code">XTUR-VISION-04</div>
            <div class="product-name">XTUR AI Edge CCTV</div>
            <div class="product-desc">ANPR Plat Nomor akurasi 99.2% di 57 wilayah RI, pagar virtual perimeter, dan alarm intrusi seketika (&lt; 150ms).</div>
          </div>
          <span class="product-tag">ANPR Plat & Perimeter</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-TWIN-05</div>
            <div class="product-name">Factory Twin AI</div>
            <div class="product-desc">Digital twin lini produksi manufaktur, visualisasi 3D SCADA, deteksi anomali getaran mesin, dan pencegahan downtime pabrik.</div>
          </div>
          <span class="product-tag">Digital Twin SCADA</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-BUILD-06</div>
            <div class="product-name">Construct AI Monitor</div>
            <div class="product-desc">Deteksi otomatis kelengkapan APD (helm/rompi) pekerja konstruksi, tracking progres fisik proyek, dan audit zonasi bahaya.</div>
          </div>
          <span class="product-tag">Keselamatan K3 & Progres</span>
        </div>
      </div>
    </div>

    <!-- SECTOR 3: DOCUMENT INTELLIGENCE & ENTERPRISE LLM -->
    <div class="category-section">
      <div class="category-header">
        <div class="category-title">
          <span>🏢</span>
          <span>SEKTOR 3: DOKUMEN INTELIJEN, PENGADAAN & ENTERPRISE LLM</span>
        </div>
        <span class="badge badge-purple">ENTERPRISE AUTOMATION</span>
      </div>
      <div class="products-row">
        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-DOC-07</div>
            <div class="product-name">AI Document Intelligence</div>
            <div class="product-desc">OCR multi-bahasa berakurasi 99.4%, preservasi tabel keuangan kompleks, ekstraksi klausul kontrak, dan arsip digital otomatis.</div>
          </div>
          <span class="product-tag">OCR Kontrak & Faktur</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-PROC-08</div>
            <div class="product-name">Procure AI Suite</div>
            <div class="product-desc">Analisis penawaran vendor tender, perbandingan harga material konstruksi otomatis, dan scoring risiko reputasi rekanan.</div>
          </div>
          <span class="product-tag">Scoring Vendor Tender</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-BIZ-09</div>
            <div class="product-name">Business Copilot AI</div>
            <div class="product-desc">Asisten penalaran bisnis internal berbasis RAG dokumen perusahaan, pembuatan notulen rapat, dan draf laporan resmi.</div>
          </div>
          <span class="product-tag">RAG Internal Knowledge</span>
        </div>
      </div>
    </div>

    <!-- SECTOR 4: CYBERSECURITY & SOVEREIGN PRIVATE AI -->
    <div class="category-section">
      <div class="category-header">
        <div class="category-title">
          <span>🛡️</span>
          <span>SEKTOR 4: KEAMANAN SIBER SOVEREIGN & ISOLASI AIR-GAPPED</span>
        </div>
        <span class="badge badge-green">MISSION-CRITICAL DEFENSE</span>
      </div>
      <div class="products-row">
        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-SHIELD-10</div>
            <div class="product-name">Aegis Cyber Shield AI</div>
            <div class="product-desc">Deteksi intrusi jaringan berbasis AI, micro-segmentation isolasi endpoint ransomware &lt; 200ms, dan korelasi log SIEM terpadu.</div>
          </div>
          <span class="product-tag">Zero-Trust SOC Defense</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-PRIV-11</div>
            <div class="product-name">Aegis Private Air-Gapped</div>
            <div class="product-desc">Server GPU lokal tanpa sambungan internet publik, enkripsi hardware HSM FIPS 140-2 Level 3, kedaulatan data 100%.</div>
          </div>
          <span class="product-tag">Hardware On-Premise</span>
        </div>

        <div class="product-box">
          <div>
            <div class="product-code">AEGIS-COMPLY-12</div>
            <div class="product-name">Comply AI Governance</div>
            <div class="product-desc">Audit otomatis kepatuhan UU PDP No 27/2022, ISO 27001, deteksi data NIK/finansial bocor, dan laporan kepatuhan auditor.</div>
          </div>
          <span class="product-tag">Audit Trail Kepatuhan</span>
        </div>
      </div>
    </div>

  </div>

  <div class="footer-bar">
    <div>PT Maudy Network Komunikasi &bull; <strong>Aegis Enterprise AI Suite</strong> &bull; Edisi 2026/Q4</div>
    <div>Dokumen Resmi Spesifikasi Teknis &bull; Halaman 2 dari 4</div>
  </div>
</div>

<!-- ============================================================== -->
<!-- PAGE 3: TECHNICAL SPECIFICATIONS & ARCHITECTURE               -->
<!-- ============================================================== -->
<div class="page">
  <div class="header-bar">
    <div class="header-brand">
      <div class="header-logo-badge">M</div>
      <div>
        <div class="header-title-text">SPESIFIKASI TEKNIS & ARSITEKTUR INFRASTRUKTUR</div>
        <div class="header-subtitle-text">ENGINEERING BENCHMARK & HARDWARE INTEGRATION MATRIX</div>
      </div>
    </div>
    <div class="header-page-tag">HALAMAN 3 / 4</div>
  </div>

  <div class="content-area">
    <div style="margin-bottom:10px;">
      <h2>Matriks Spesifikasi Teknis Hardware & Performa</h2>
      <p style="font-size:9px;">Benchmark resmi hasil uji laboratorium dan operasional lapangan PT Maudy Network Komunikasi:</p>
    </div>

    <!-- TABLE 1: HARDWARE & INFERENCE -->
    <table class="spec-table">
      <thead>
        <tr>
          <th style="width:25%;">Komponen Arsitektur</th>
          <th style="width:35%;">Spesifikasi Rekayasa Sistem</th>
          <th style="width:40%;">Standar Kinerja / SLA Teruji</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Edge AI Processing Unit</strong></td>
          <td>NVIDIA Jetson AGX Orin Industrial / Custom Edge Server</td>
          <td>275 TOPS AI Performance, suhu operasi -40&deg;C s/d 85&deg;C</td>
        </tr>
        <tr>
          <td><strong>Kamera XTUR Dual-Sensor</strong></td>
          <td>Sony Starvis 2 4K + Sensor Termal Dual-Spectrum Uncooled</td>
          <td>Deteksi plat nomor 120 km/jam, akurasi ANPR 99.2% siang & malam</td>
        </tr>
        <tr>
          <td><strong>Kapasitas Kamera Real-Time</strong></td>
          <td>Dukungan hingga 64 Stream RTSP/ONVIF Profile S/G/T per node</td>
          <td>Inferensi video concurrent &lt; 4.2ms per frame, no dropped frames</td>
        </tr>
        <tr>
          <td><strong>Konektivitas Satelit Kapal</strong></td>
          <td>Intellian v100NX / Sailor 900 Ku-to-Ka Band Auto-Tracking</td>
          <td>Throughput stabil hingga 25 Mbps CIR di laut lepas perairan ALKI</td>
        </tr>
        <tr>
          <td><strong>Mesin OCR & Dokumen RAG</strong></td>
          <td>Aegis Sovereign Multimodal Vision-Language Model 70B</td>
          <td>99.4% akurasi teks & tabel, pemrosesan 1.200 hal/menit per cluster</td>
        </tr>
        <tr>
          <td><strong>Latency Jaringan Edge-to-Core</strong></td>
          <td>SD-WAN terintegrasi enkripsi hardware IPsec AES-256</td>
          <td>Rata-rata &lt; 15ms LAN lokal pabrik, &lt; 80ms over Marine VSAT</td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top:10px; margin-bottom:8px;">
      <h2>Kepatuhan Regulasi & Standar Tata Kelola Keamanan Informasi</h2>
      <p style="font-size:9px;">Memenuhi seluruh persyaratan audit teknis BUMN, OJK, Kominfo, dan standar industri pertahanan:</p>
    </div>

    <!-- TABLE 2: SECURITY & COMPLIANCE -->
    <table class="spec-table">
      <thead>
        <tr>
          <th style="width:25%;">Aspek Kepatuhan</th>
          <th style="width:45%;">Implementasi & Mekanisme Pengamanan</th>
          <th style="width:30%;">Sertifikasi / Regulasi Rujukan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Kedaulatan Data (Data Residency)</strong></td>
          <td>Penyimpanan data lokal di wilayah hukum Republik Indonesia. Opsi instalasi Air-Gapped di server internal client tanpa koneksi internet.</td>
          <td>UU PDP No. 27 Tahun 2022 &bull; PP No. 71/2019 (PSTE)</td>
        </tr>
        <tr>
          <td><strong>Standar Enkripsi Data</strong></td>
          <td>Enkripsi saat transmisi TLS 1.3 (ChaCha20/AES-256-GCM) dan enkripsi rest LUKS2 dengan Hardware Security Module (HSM).</td>
          <td>FIPS 140-2 Level 3 &bull; NIST SP 800-53</td>
        </tr>
        <tr>
          <td><strong>Audit Trail & Immutability</strong></td>
          <td>Log aktivitas kriptografis anti-manipulasi yang merekam setiap kueri LLM, akses kamera, dan ekspor data secara kronologis.</td>
          <td>ISO/IEC 27001:2022 Klausul A.12.4</td>
        </tr>
        <tr>
          <td><strong>Manajemen Mutu Rekayasa</strong></td>
          <td>SOP pengadaan, implementasi instalasi kabel serat optik, perangkat radio frekuensi, serta garansi suku cadang perangkat keras.</td>
          <td>ISO 9001:2015 &bull; Izin Jastel Kominfo RI</td>
        </tr>
        <tr>
          <td><strong>Ketahanan NOC & Uptime SLA</strong></td>
          <td>Monitoring proaktif 24 jam sehari oleh Network Operation Center dengan redundansi dual-homed link dan garansi respon &lt; 15 menit.</td>
          <td>Garansi Uptime 99.98% High Availability</td>
        </tr>
      </tbody>
    </table>

    <!-- Callout Box Architecture -->
    <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:8px; padding:10px 14px; margin-top:8px;">
      <div style="font-weight:700; font-size:9.5px; color:#0F172A; margin-bottom:2px;">
        Arsitektur Modular Terintegrasi dengan Sistem ERP / VMS Eksisting
      </div>
      <div style="font-size:8.5px; color:#475569; line-height:1.4;">
        Seluruh solusi Aegis Enterprise AI dirancang secara agnostik menggunakan protokol standar terbuka (REST API, Webhook, MQTT, Kafka, ONVIF, dan RTSP). Solusi dapat langsung diintegrasikan dengan sistem ERP terkemuka (SAP, Oracle, Microsoft Dynamics) serta platform VMS (Milestone, Genetec, Hikcentral) tanpa perlu membongkar infrastruktur lama.
      </div>
    </div>

  </div>

  <div class="footer-bar">
    <div>PT Maudy Network Komunikasi &bull; <strong>Aegis Enterprise AI Suite</strong> &bull; Edisi 2026/Q4</div>
    <div>Dokumen Resmi Spesifikasi Teknis &bull; Halaman 3 dari 4</div>
  </div>
</div>

<!-- ============================================================== -->
<!-- PAGE 4: COMMERCIAL SCHEMES, PROCUREMENT & CONTACT             -->
<!-- ============================================================== -->
<div class="page">
  <div class="header-bar">
    <div class="header-brand">
      <div class="header-logo-badge">M</div>
      <div>
        <div class="header-title-text">SKEMA PENGADAAN B2B, TENDER & KONTAK RESMI</div>
        <div class="header-subtitle-text">COMMERCIAL PROCUREMENT FRAMEWORK & OFFICIAL VERIFICATION</div>
      </div>
    </div>
    <div class="header-page-tag">HALAMAN 4 / 4</div>
  </div>

  <div class="content-area">
    <div style="margin-bottom:10px;">
      <h2>Pilihan Fleksibel Skema Pengadaan B2B & Korporasi</h2>
      <p style="font-size:9px;">PT Maudy Network Komunikasi menyediakan 3 skema pengadaan resmi yang sesuai dengan kebijakan anggaran institusi Anda:</p>
    </div>

    <!-- 3 Scheme Cards -->
    <div class="scheme-grid">
      <div class="scheme-box highlight">
        <span class="scheme-badge badge-blue">SKEMA 1: EVALUASI PROYEK</span>
        <div class="scheme-name">Proof of Concept (PoC)</div>
        <p style="font-size:8.5px; color:#475569; line-height:1.4; margin-bottom:8px;">
          Uji coba langsung perangkat keras XTUR / Model AI di lokasi kerja client selama 14 s/d 30 hari kalender dengan pendampingan langsung engineer.
        </p>
        <ul style="font-size:8px; color:#334155; padding-left:14px; line-height:1.5;">
          <li>Perangkat unit demo disediakan</li>
          <li>Akses penuh seluruh fitur software</li>
          <li>Laporan hasil uji akurasi resmi</li>
          <li><strong>Cocok untuk:</strong> Evaluasi sebelum tender</li>
        </ul>
      </div>

      <div class="scheme-box">
        <span class="scheme-badge badge-dark">SKEMA 2: BELANJA MODAL</span>
        <div class="scheme-name">CAPEX (Perpetual License)</div>
        <p style="font-size:8.5px; color:#475569; line-height:1.4; margin-bottom:8px;">
          Pembelian putus seluruh hardware dan lisensi software permanen. Aset perangkat keras menjadi hak milik penuh organisasi client.
        </p>
        <ul style="font-size:8px; color:#334155; padding-left:14px; line-height:1.5;">
          <li>Hardware hak milik 100% instansi</li>
          <li>Lisensi software selamanya (perpetual)</li>
          <li>Garansi 1-3 tahun & SLA lokal</li>
          <li><strong>Cocok untuk:</strong> BUMN & Tender APBN</li>
        </ul>
      </div>

      <div class="scheme-box">
        <span class="scheme-badge badge-green">SKEMA 3: BIAYA OPERASIONAL</span>
        <div class="scheme-name">OPEX (Managed Service)</div>
        <p style="font-size:8.5px; color:#475569; line-height:1.4; margin-bottom:8px;">
          Layanan menyeluruh terpadu bulanan atau tahunan. Termasuk penyediaan hardware, pemeliharaan berkala, bandwidth VSAT, dan penggantian unit rusak.
        </p>
        <ul style="font-size:8px; color:#334155; padding-left:14px; line-height:1.5;">
          <li>Tanpa investasi modal awal besar</li>
          <li>SLA 99.98% garansi spare-part 24/7</li>
          <li>Pembaruan model AI berkelanjutan</li>
          <li><strong>Cocok untuk:</strong> Kapal Laut & Swasta</li>
        </ul>
      </div>
    </div>

    <!-- Official B2B Request Checklist -->
    <div style="margin-bottom:8px;">
      <h2>Formulir & Persyaratan Permintaan Penawaran Resmi (RFP)</h2>
      <p style="font-size:9px; margin-bottom:6px;">Untuk mempercepat penerbitan Surat Penawaran Harga (SPH) resmi dan penjadwalan PoC, mohon lampirkan data berikut:</p>
    </div>

    <table class="spec-table" style="margin-bottom:10px;">
      <thead>
        <tr>
          <th style="width:25%;">Dokumen / Informasi</th>
          <th style="width:50%;">Keterangan Teknis yang Dibutuhkan</th>
          <th style="width:25%;">Status Kebutuhan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Nama Perusahaan & PIC</strong></td>
          <td>Nama badan usaha, nama pejabat penanggung jawab, email resmi korporat, nomor WhatsApp</td>
          <td><span class="badge badge-blue">MANDATORY</span></td>
        </tr>
        <tr>
          <td><strong>Jenis Solusi AI Target</strong></td>
          <td>Pilihan solusi (misal: CCTV XTUR AI, VSAT Maritim, atau OCR Document Intelligence)</td>
          <td><span class="badge badge-blue">MANDATORY</span></td>
        </tr>
        <tr>
          <td><strong>Kapasitas / Volume</strong></td>
          <td>Jumlah titik kamera, jumlah armada kapal yang diinstal, atau estimasi volume lembar dokumen/bulan</td>
          <td><span class="badge badge-blue">MANDATORY</span></td>
        </tr>
        <tr>
          <td><strong>Topologi Jaringan Eksisting</strong></td>
          <td>Format VMS/NVR eksisting, jenis ERP internal, atau ketersediaan koneksi internet on-site</td>
          <td><span class="badge badge-purple">OPTIONAL (RECOMMENDED)</span></td>
        </tr>
      </tbody>
    </table>

    <!-- Contact & Verification Banner -->
    <div class="contact-banner">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:8px;">
        <div>
          <div style="font-size:12px; font-weight:800; color:#FFFFFF;">Hubungi Technical Sales Desk & Network Operations Center (NOC)</div>
          <div style="font-size:8.5px; color:#94A3B8; margin-top:2px;">PT Maudy Network Komunikasi (Maudy Network Nusantara) &bull; Terdaftar Resmi di Kemenkumham RI</div>
        </div>
        <span class="badge badge-green">NOC 24/7 SIAGA</span>
      </div>

      <div class="contact-grid">
        <div>
          <div class="contact-item-title">KANTOR PUSAT & WORKSHOP</div>
          <div class="contact-item-val">Semarang, Jawa Tengah, Indonesia</div>
          <div style="font-size:8px; color:#94A3B8; margin-top:2px;">Area Layanan: Seluruh Indonesia & Perairan Maritim</div>
        </div>
        <div>
          <div class="contact-item-title">HOTLINE NOC & WHATSAPP</div>
          <div class="contact-item-val">+62 857-2748-7507</div>
          <div style="font-size:8px; color:#94A3B8; margin-top:2px;">Email: admin@maudy.net.id / support@maudy.net.id</div>
        </div>
        <div>
          <div class="contact-item-title">PORTAL RESMI & VERIFIKASI</div>
          <div class="contact-item-val">https://maudy.net.id</div>
          <div style="font-size:8px; color:#94A3B8; margin-top:2px;">NIB: 0220205831962 &bull; PKP Terdaftar</div>
        </div>
      </div>
    </div>

    <!-- Official Sign-Off Footer Note -->
    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:10px; padding-top:6px; border-top:1px solid #E2E8F0;">
      <div style="font-size:8px; color:#64748B;">
        Hak Cipta &copy; 2026 PT Maudy Network Komunikasi. Seluruh hak cipta dilindungi undang-undang.<br>
        Dokumen ini diterbitkan secara sah dan dilindungi oleh Perjanjian Kerahasiaan (Non-Disclosure Agreement).
      </div>
      <div style="text-align:right;">
        <div style="font-size:8px; font-weight:700; color:#0F172A;">TIM KOMERSIAL & DIREKTORAT TEKNOLOGI</div>
        <div style="font-size:7.5px; color:#0071E3; font-family:'Space Grotesk', monospace;">PT MAUDY NETWORK KOMUNIKASI</div>
      </div>
    </div>

  </div>

  <div class="footer-bar">
    <div>PT Maudy Network Komunikasi &bull; <strong>Aegis Enterprise AI Suite</strong> &bull; Edisi 2026/Q4</div>
    <div>Dokumen Resmi Spesifikasi Teknis &bull; Halaman 4 dari 4</div>
  </div>
</div>

</body>
</html>`;

const tmpHtmlPath = path.join(__dirname, '../public/downloads/temp_aegis_catalog.html');
const outPdfPath = path.join(__dirname, '../public/downloads/Aegis-Enterprise-AI-Catalog-2026.pdf');

fs.writeFileSync(tmpHtmlPath, htmlContent, 'utf8');
console.log('HTML catalog template written to:', tmpHtmlPath);

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const cmd = `"${chromePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdfPath}" "file://${tmpHtmlPath}"`;

console.log('Executing Chrome headless print-to-pdf...');
try {
  execSync(cmd, { stdio: 'inherit' });
  const stats = fs.statSync(outPdfPath);
  console.log(`Success! High-resolution official PDF generated: ${outPdfPath} (${stats.size} bytes)`);
  fs.unlinkSync(tmpHtmlPath);
} catch (err) {
  console.error('Error generating PDF via Chrome:', err);
  process.exit(1);
}
