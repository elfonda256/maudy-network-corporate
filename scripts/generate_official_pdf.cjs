const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function toBase64(relPath) {
  const absPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(absPath)) {
    console.warn('File not found for base64 encoding:', absPath);
    return '';
  }
  const ext = path.extname(absPath).slice(1).toLowerCase();
  const mime = ext === 'png' ? 'image/png' : ext === 'svg' ? 'image/svg+xml' : 'image/jpeg';
  return `data:${mime};base64,${fs.readFileSync(absPath).toString('base64')}`;
}

const logoMnk = toBase64('public/logo-mnk.png');
const imgMaritime = toBase64('public/assets/generated/maritime_hero.jpg');
const imgFactory = toBase64('public/assets/generated/factory_twin.jpg');
const imgDocIntel = toBase64('public/assets/generated/doc_intelligence.jpg');
const imgPrivateAi = toBase64('public/assets/generated/private_ai.jpg');
const imgVehicle = toBase64('public/xtur/det-vehicle.jpg');
const imgDashboard = toBase64('public/xtur/01-dashboard-overview.png');

console.log('Encoded images successfully. Preparing HTML...');

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
    font-size: 10.5px;
    line-height: 1.45;
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
    gap: 10px;
  }
  .header-logo-img {
    height: 22px;
    width: auto;
    background: #FFFFFF;
    padding: 2px 6px;
    border-radius: 4px;
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
    padding: 8mm 16mm 14mm 16mm;
    height: 266mm;
    position: relative;
  }

  /* Typography Utilities */
  h1 { font-size: 23px; font-weight: 800; color: #0F172A; letter-spacing: -0.5px; line-height: 1.15; }
  h2 { font-size: 14px; font-weight: 700; color: #0F172A; letter-spacing: -0.3px; }
  h3 { font-size: 11.5px; font-weight: 700; color: #0F172A; }
  p { color: #475569; }

  .badge {
    display: inline-block;
    font-size: 7.5px;
    font-weight: 700;
    font-family: 'Space Grotesk', monospace;
    text-transform: uppercase;
    padding: 2.5px 6.5px;
    border-radius: 4px;
    letter-spacing: 0.4px;
  }
  .badge-blue { background: #EFF6FF; color: #0284C7; border: 1px solid #BAE6FD; }
  .badge-dark { background: #0F172A; color: #38BDF8; border: 1px solid #1E293B; }
  .badge-green { background: #F0FDF4; color: #16A34A; border: 1px solid #BBF7D0; }
  .badge-purple { background: #FAF5FF; color: #9333EA; border: 1px solid #E9D5FF; }

  /* Page 1 Hero & Visual Banner */
  .hero-box {
    background: linear-gradient(145deg, #070B19 0%, #0F172A 100%);
    border-radius: 12px;
    padding: 16px 20px;
    color: #FFFFFF;
    position: relative;
    border: 1px solid #1E293B;
    margin-bottom: 10px;
  }
  .hero-box h1 { color: #FFFFFF; font-size: 24px; margin: 5px 0; }
  .hero-box p { color: #94A3B8; font-size: 10.5px; max-width: 95%; }

  .cover-illustrations-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 12px;
  }
  .cover-img-card {
    position: relative;
    border-radius: 9px;
    overflow: hidden;
    height: 98px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  }
  .cover-img-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cover-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.15) 60%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 8px 10px;
  }
  .cover-img-tag {
    font-size: 7.5px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 700;
    color: #38BDF8;
    text-transform: uppercase;
  }
  .cover-img-title {
    font-size: 10.5px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.2;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 12px;
  }
  .stat-card {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 8px 10px;
  }
  .stat-num {
    font-size: 16px;
    font-weight: 800;
    color: #0071E3;
    font-family: 'Space Grotesk', sans-serif;
  }
  .stat-label {
    font-size: 8.5px;
    font-weight: 600;
    color: #334155;
    margin-top: 1px;
  }
  .stat-desc {
    font-size: 7.5px;
    color: #64748B;
    margin-top: 1px;
    line-height: 1.25;
  }

  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 10px;
  }
  .pillar-card {
    border: 1px solid #E2E8F0;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 9px 12px;
    border-left: 3.5px solid #0071E3;
  }
  .pillar-title {
    font-size: 10.5px;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 2px;
  }
  .pillar-desc {
    font-size: 8.5px;
    color: #475569;
    line-height: 1.35;
  }

  .legal-callout {
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 8px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Catalog Grid Styles with Product Illustrations (Page 2) */
  .category-section-illustrated {
    margin-bottom: 10px;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    overflow: hidden;
    background: #FFFFFF;
  }
  .cat-bar {
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cat-bar-title {
    font-size: 10.5px;
    font-weight: 800;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .cat-body-grid {
    display: grid;
    grid-template-columns: 105px 1fr;
    gap: 8px;
    padding: 7px;
  }
  .cat-illustration {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    height: 100%;
    min-height: 82px;
    border: 1px solid #E2E8F0;
  }
  .cat-illustration img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cat-illustration-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 65%);
    display: flex;
    align-items: flex-end;
    padding: 4px 6px;
    font-size: 7px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 700;
    color: #38BDF8;
  }
  .cat-products-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .mini-product-card {
    border: 1px solid #E2E8F0;
    background: #FAFAFA;
    border-radius: 5px;
    padding: 5px 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 82px;
  }
  .mini-code {
    font-size: 7px;
    font-family: 'Space Grotesk', monospace;
    color: #0284C7;
    font-weight: 700;
  }
  .mini-name {
    font-size: 9px;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.15;
    margin: 1px 0;
  }
  .mini-desc {
    font-size: 7.2px;
    color: #64748B;
    line-height: 1.25;
  }
  .mini-tag {
    font-size: 6.8px;
    font-weight: 600;
    color: #0369A1;
    background: #E0F2FE;
    padding: 1.5px 4px;
    border-radius: 3px;
    display: inline-block;
    width: fit-content;
  }

  /* Tables (Page 3) */
  .spec-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
    font-size: 8.5px;
  }
  .spec-table th {
    background: #0F172A;
    color: #FFFFFF;
    font-weight: 700;
    padding: 5px 8px;
    text-align: left;
    font-size: 8px;
    letter-spacing: 0.3px;
  }
  .spec-table td {
    padding: 4.5px 8px;
    border-bottom: 1px solid #E2E8F0;
    color: #334155;
  }
  .spec-table tr:nth-child(even) td {
    background: #F8FAFC;
  }
  .spec-table td strong {
    color: #0F172A;
  }

  .tech-visual-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 10px;
  }
  .tech-visual-card {
    height: 72px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    border: 1px solid #E2E8F0;
  }
  .tech-visual-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tech-visual-badge {
    position: absolute;
    bottom: 5px;
    left: 7px;
    background: rgba(15,23,42,0.85);
    color: #38BDF8;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 7.5px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 700;
    border: 1px solid rgba(255,255,255,0.15);
  }

  /* Procurement Box (Page 4) */
  .scheme-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 12px;
  }
  .scheme-box {
    border: 1.5px solid #E2E8F0;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 10px 10px;
    text-align: left;
  }
  .scheme-box.highlight {
    border-color: #0071E3;
    background: #F8FAFC;
  }
  .scheme-name {
    font-size: 10.5px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 3px;
  }
  .scheme-badge {
    font-size: 7px;
    font-family: 'Space Grotesk', monospace;
    padding: 1.5px 5px;
    border-radius: 3px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 4px;
  }

  .contact-banner {
    background: linear-gradient(135deg, #070A14 0%, #1E293B 100%);
    border-radius: 9px;
    padding: 12px 16px;
    color: #FFFFFF;
    margin-top: 8px;
    border: 1px solid #334155;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 6px;
    font-size: 8.5px;
  }
  .contact-item-title {
    color: #38BDF8;
    font-weight: 700;
    font-size: 7.5px;
    font-family: 'Space Grotesk', monospace;
    text-transform: uppercase;
  }
  .contact-item-val {
    color: #F8FAFC;
    font-weight: 600;
    margin-top: 1px;
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
      <img src="${logoMnk}" alt="Maudy Network" class="header-logo-img" />
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
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
        <span class="badge badge-dark">DOKUMEN RESMI TENDER & PENGADAAN B2B</span>
        <span style="font-size:7.5px; font-family:'Space Grotesk', monospace; color:#38BDF8;">REF: MNK-AEGIS-CAT-2026/V4.2</span>
      </div>
      <h1>Aegis Enterprise AI Suite</h1>
      <p style="margin-bottom:6px;">
        Katalog Komprehensif Solusi Kecerdasan Buatan Terintegrasi, Komunikasi Satelit Maritim, Edge Vision CCTV XTUR, & Sovereign On-Premise LLM untuk Korporasi Strategis dan Pemerintahan.
      </p>
      <div style="display:flex; gap:5px; margin-top:6px;">
        <span class="badge badge-blue">ISO 9001:2015</span>
        <span class="badge badge-blue">ISO 27001:2022</span>
        <span class="badge badge-blue">IZIN JASTEL KOMINFO</span>
        <span class="badge badge-blue">FORTINET NSE 7</span>
        <span class="badge badge-blue">AIR-GAPPED COMPLIANT</span>
      </div>
    </div>

    <!-- Product Visual Hero Showcase -->
    <div class="cover-illustrations-grid">
      <div class="cover-img-card">
        <img src="${imgMaritime}" alt="Aegis Maritime Sat-AI" />
        <div class="cover-img-overlay">
          <div class="cover-img-tag">INFRASTRUKTUR MARITIM LEPAS PANTAI</div>
          <div class="cover-img-title">Aegis Maritime Sat-AI & Telemetri Rute ALKI</div>
        </div>
      </div>
      <div class="cover-img-card">
        <img src="${imgDocIntel}" alt="AI Document Intelligence" />
        <div class="cover-img-overlay">
          <div class="cover-img-tag">SOVEREIGN AI & DOKUMEN INTELIJEN</div>
          <div class="cover-img-title">Semantic Vector RAG & Analisis Kontrak B2B</div>
        </div>
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
    <div style="margin-bottom:6px;">
      <h2>Pilar Arsitektur Rekayasa Sistem Aegis</h2>
    </div>

    <div class="pillar-grid">
      <div class="pillar-card">
        <div class="pillar-title">1. Sovereign & Air-Gapped Private AI</div>
        <div class="pillar-desc">
          Model AI dan database dokumen berjalan 100% on-premise pada hardware internal organisasi Anda. Tanpa ketergantungan cloud publik, menjamin kepatuhan UU PDP No. 27/2022.
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-title">2. Edge Computing & CCTV Cerdas XTUR</div>
        <div class="pillar-desc">
          Komputasi AI langsung di lokasi kamera dengan inferensi ultra cepat 4.2ms. Menghadirkan ANPR Plat Nomor 57 wilayah Indonesia & sensor termal proteksi dini titik api.
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-title">3. Satelit Maritim & Jaringan Lepas Pantai</div>
        <div class="pillar-desc">
          Integrasi telemetri kapal laut, VSAT maritim pita frekuensi Ku/Ka-Band, dan monitoring armada navigasi rute ALKI I/II/III hingga radius perairan Samudera Pasifik.
        </div>
      </div>

      <div class="pillar-card">
        <div class="pillar-title">4. Otomasi Dokumen & Semantic RAG</div>
        <div class="pillar-desc">
          OCR cerdas multi-bahasa akurasi 99.4% yang mampu mengekstraksi ratusan ribu lembar kontrak tender, faktur pajak, dan blueprint teknis secara otomatis ke ERP.
        </div>
      </div>
    </div>

    <!-- Official Legal Callout -->
    <div class="legal-callout">
      <div>
        <div style="font-weight:700; font-size:9.5px; color:#166534;">Jaminan Legalitas & Kredibilitas Badan Usaha PT. Maudy Network Komunikasi</div>
        <div style="font-size:8px; color:#15803D; margin-top:1px;">
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
      <img src="${logoMnk}" alt="Maudy Network" class="header-logo-img" />
      <div>
        <div class="header-title-text">PORTOFOLIO LENGKAP 12 SOLUSI ENTERPRISE AI</div>
        <div class="header-subtitle-text">INTEGRATED INDUSTRIAL ARTIFICIAL INTELLIGENCE MATRIX</div>
      </div>
    </div>
    <div class="header-page-tag">HALAMAN 2 / 4</div>
  </div>

  <div class="content-area">
    
    <!-- SECTOR 1: MARITIME & SATELLITE -->
    <div class="category-section-illustrated">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>🚢</span>
          <span>SEKTOR 1: MARITIM, VSAT SATELIT & LOGISTIK KELAUTAN</span>
        </div>
        <span class="badge badge-blue">OFFSHORE & MARINE</span>
      </div>
      <div class="cat-body-grid">
        <div class="cat-illustration">
          <img src="${imgMaritime}" alt="Maritim AI" />
          <div class="cat-illustration-overlay">VSAT & TELEMETRI</div>
        </div>
        <div class="cat-products-row">
          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-MARITIME-01</div>
              <div class="mini-name">Aegis Maritime Sat-AI</div>
              <div class="mini-desc">Sistem navigasi cerdas kapal terintegrasi VSAT ku-band, pantau bahan bakar real-time & cuaca.</div>
            </div>
            <span class="mini-tag">VSAT Telemetri</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-FLEET-02</div>
              <div class="mini-name">FleetOS Intelligence</div>
              <div class="mini-desc">Optimasi rute pelayaran ALKI I/II/III, audit histori AIS armada kapal, prediksi ETA akurat.</div>
            </div>
            <span class="mini-tag">Rute Armada ALKI</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-WASTE-03</div>
              <div class="mini-name">Smart Port & Waste AI</div>
              <div class="mini-desc">Monitoring pembuangan limbah pelabuhan, sensor air pintar, kepatuhan regulasi MARPOL.</div>
            </div>
            <span class="mini-tag">Kepatuhan Lingkungan</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTOR 2: SURVEILLANCE & INDUSTRIAL EDGE AI -->
    <div class="category-section-illustrated">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>👁️</span>
          <span>SEKTOR 2: CCTV CERDAS XTUR, MANUFAKTUR & KONSTRUKSI</span>
        </div>
        <span class="badge badge-dark">INDUSTRIAL EDGE VISION</span>
      </div>
      <div class="cat-body-grid">
        <div class="cat-illustration">
          <img src="${imgFactory}" alt="Factory Twin AI" />
          <div class="cat-illustration-overlay">EDGE VISION & TWIN</div>
        </div>
        <div class="cat-products-row">
          <div class="mini-product-card">
            <div>
              <div class="mini-code">XTUR-VISION-04</div>
              <div class="mini-name">XTUR AI Edge CCTV</div>
              <div class="mini-desc">ANPR Plat Nomor 99.2% di 57 wilayah RI, pagar virtual perimeter, alarm seketika &lt;150ms.</div>
            </div>
            <span class="mini-tag">ANPR & Perimeter</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-TWIN-05</div>
              <div class="mini-name">Factory Twin AI</div>
              <div class="mini-desc">Digital twin lini produksi manufaktur, visualisasi 3D SCADA, deteksi anomali getaran mesin.</div>
            </div>
            <span class="mini-tag">3D Digital Twin</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-BUILD-06</div>
              <div class="mini-name">Construct AI Monitor</div>
              <div class="mini-desc">Deteksi otomatis kelengkapan APD (helm/rompi) pekerja konstruksi, audit zonasi bahaya proyek.</div>
            </div>
            <span class="mini-tag">Keselamatan K3</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTOR 3: DOCUMENT INTELLIGENCE & ENTERPRISE LLM -->
    <div class="category-section-illustrated">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>🏢</span>
          <span>SEKTOR 3: DOKUMEN INTELIJEN, PENGADAAN & ENTERPRISE LLM</span>
        </div>
        <span class="badge badge-purple">ENTERPRISE AUTOMATION</span>
      </div>
      <div class="cat-body-grid">
        <div class="cat-illustration">
          <img src="${imgDocIntel}" alt="Doc Intelligence" />
          <div class="cat-illustration-overlay">SEMANTIC VECTOR RAG</div>
        </div>
        <div class="cat-products-row">
          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-DOC-07</div>
              <div class="mini-name">AI Document Intel</div>
              <div class="mini-desc">OCR multi-bahasa akurasi 99.4%, preservasi tabel keuangan kompleks, ekstraksi klausul kontrak.</div>
            </div>
            <span class="mini-tag">OCR Kontrak & ERP</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-PROC-08</div>
              <div class="mini-name">Procure AI Suite</div>
              <div class="mini-desc">Analisis penawaran vendor tender, perbandingan harga material otomatis, scoring risiko rekanan.</div>
            </div>
            <span class="mini-tag">Scoring Rekanan</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-BIZ-09</div>
              <div class="mini-name">Business Copilot AI</div>
              <div class="mini-desc">Asisten penalaran bisnis internal berbasis RAG dokumen perusahaan, draf laporan analitik resmi.</div>
            </div>
            <span class="mini-tag">Internal Knowledge</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTOR 4: CYBERSECURITY & SOVEREIGN PRIVATE AI -->
    <div class="category-section-illustrated">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>🛡️</span>
          <span>SEKTOR 4: KEAMANAN SIBER SOVEREIGN & ISOLASI AIR-GAPPED</span>
        </div>
        <span class="badge badge-green">MISSION-CRITICAL DEFENSE</span>
      </div>
      <div class="cat-body-grid">
        <div class="cat-illustration">
          <img src="${imgPrivateAi}" alt="Private AI" />
          <div class="cat-illustration-overlay">AIR-GAPPED CLUSTER</div>
        </div>
        <div class="cat-products-row">
          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-SHIELD-10</div>
              <div class="mini-name">Aegis Cyber Shield AI</div>
              <div class="mini-desc">Deteksi intrusi jaringan AI, micro-segmentation isolasi ransomware &lt; 200ms, korelasi log SIEM.</div>
            </div>
            <span class="mini-tag">Zero-Trust SOC</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-PRIV-11</div>
              <div class="mini-name">Aegis Private AI</div>
              <div class="mini-desc">Server GPU lokal tanpa sambungan internet, enkripsi hardware HSM FIPS 140-2 Level 3 berdaulat.</div>
            </div>
            <span class="mini-tag">GPU On-Premise</span>
          </div>

          <div class="mini-product-card">
            <div>
              <div class="mini-code">AEGIS-COMPLY-12</div>
              <div class="mini-name">Comply AI Governance</div>
              <div class="mini-desc">Audit otomatis kepatuhan UU PDP No 27/2022, ISO 27001, deteksi kebocoran data NIK/finansial.</div>
            </div>
            <span class="mini-tag">Audit UU PDP</span>
          </div>
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
      <img src="${logoMnk}" alt="Maudy Network" class="header-logo-img" />
      <div>
        <div class="header-title-text">SPESIFIKASI TEKNIS & ARSITEKTUR INFRASTRUKTUR</div>
        <div class="header-subtitle-text">ENGINEERING BENCHMARK & HARDWARE INTEGRATION MATRIX</div>
      </div>
    </div>
    <div class="header-page-tag">HALAMAN 3 / 4</div>
  </div>

  <div class="content-area">
    
    <!-- Visual Hardware Showcase Row -->
    <div class="tech-visual-row">
      <div class="tech-visual-card">
        <img src="${imgVehicle}" alt="XTUR ANPR Detection" />
        <div class="tech-visual-badge">XTUR ANPR 99.2% &bull; INFERENCE &lt; 4.2ms</div>
      </div>
      <div class="tech-visual-card">
        <img src="${imgDashboard}" alt="XTUR AI Dashboard" />
        <div class="tech-visual-badge">64 RTSP MULTI-STREAM NOC MONITORING</div>
      </div>
    </div>

    <div style="margin-bottom:6px;">
      <h2>Matriks Spesifikasi Teknis Hardware & Performa</h2>
      <p style="font-size:8.5px;">Benchmark resmi hasil uji laboratorium dan operasional lapangan PT Maudy Network Komunikasi:</p>
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

    <div style="margin-top:6px; margin-bottom:5px;">
      <h2>Kepatuhan Regulasi & Standar Tata Kelola Keamanan Informasi</h2>
      <p style="font-size:8.5px;">Memenuhi seluruh persyaratan audit teknis BUMN, OJK, Kominfo, dan standar industri pertahanan:</p>
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
    <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:7px; padding:7px 12px; margin-top:5px;">
      <div style="font-weight:700; font-size:9px; color:#0F172A; margin-bottom:1px;">
        Arsitektur Modular Terintegrasi dengan Sistem ERP / VMS Eksisting
      </div>
      <div style="font-size:8px; color:#475569; line-height:1.35;">
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
      <img src="${logoMnk}" alt="Maudy Network" class="header-logo-img" />
      <div>
        <div class="header-title-text">SKEMA PENGADAAN B2B, TENDER & KONTAK RESMI</div>
        <div class="header-subtitle-text">COMMERCIAL PROCUREMENT FRAMEWORK & OFFICIAL VERIFICATION</div>
      </div>
    </div>
    <div class="header-page-tag">HALAMAN 4 / 4</div>
  </div>

  <div class="content-area">
    <div style="margin-bottom:8px;">
      <h2>Pilihan Fleksibel Skema Pengadaan B2B & Korporasi</h2>
      <p style="font-size:8.5px;">PT Maudy Network Komunikasi menyediakan 3 skema pengadaan resmi yang sesuai dengan kebijakan anggaran institusi Anda:</p>
    </div>

    <!-- 3 Scheme Cards -->
    <div class="scheme-grid">
      <div class="scheme-box highlight">
        <span class="scheme-badge badge-blue">SKEMA 1: EVALUASI PROYEK</span>
        <div class="scheme-name">Proof of Concept (PoC)</div>
        <p style="font-size:8px; color:#475569; line-height:1.35; margin-bottom:6px;">
          Uji coba langsung perangkat keras XTUR / Model AI di lokasi kerja client selama 14 s/d 30 hari kalender dengan pendampingan langsung engineer.
        </p>
        <ul style="font-size:7.5px; color:#334155; padding-left:12px; line-height:1.45;">
          <li>Perangkat unit demo disediakan</li>
          <li>Akses penuh seluruh fitur software</li>
          <li>Laporan hasil uji akurasi resmi</li>
          <li><strong>Cocok untuk:</strong> Evaluasi sebelum tender</li>
        </ul>
      </div>

      <div class="scheme-box">
        <span class="scheme-badge badge-dark">SKEMA 2: BELANJA MODAL</span>
        <div class="scheme-name">CAPEX (Perpetual License)</div>
        <p style="font-size:8px; color:#475569; line-height:1.35; margin-bottom:6px;">
          Pembelian putus seluruh hardware dan lisensi software permanen. Aset perangkat keras menjadi hak milik penuh organisasi client.
        </p>
        <ul style="font-size:7.5px; color:#334155; padding-left:12px; line-height:1.45;">
          <li>Hardware hak milik 100% instansi</li>
          <li>Lisensi software selamanya (perpetual)</li>
          <li>Garansi 1-3 tahun & SLA lokal</li>
          <li><strong>Cocok untuk:</strong> BUMN & Tender APBN</li>
        </ul>
      </div>

      <div class="scheme-box">
        <span class="scheme-badge badge-green">SKEMA 3: BIAYA OPERASIONAL</span>
        <div class="scheme-name">OPEX (Managed Service)</div>
        <p style="font-size:8px; color:#475569; line-height:1.35; margin-bottom:6px;">
          Layanan menyeluruh terpadu bulanan atau tahunan. Termasuk penyediaan hardware, pemeliharaan berkala, bandwidth VSAT, dan penggantian unit rusak.
        </p>
        <ul style="font-size:7.5px; color:#334155; padding-left:12px; line-height:1.45;">
          <li>Tanpa investasi modal awal besar</li>
          <li>SLA 99.98% garansi spare-part 24/7</li>
          <li>Pembaruan model AI berkelanjutan</li>
          <li><strong>Cocok untuk:</strong> Kapal Laut & Swasta</li>
        </ul>
      </div>
    </div>

    <!-- Official B2B Request Checklist -->
    <div style="margin-bottom:6px;">
      <h2>Formulir & Persyaratan Permintaan Penawaran Resmi (RFP)</h2>
      <p style="font-size:8.5px; margin-bottom:5px;">Untuk mempercepat penerbitan Surat Penawaran Harga (SPH) resmi dan penjadwalan PoC, mohon lampirkan data berikut:</p>
    </div>

    <table class="spec-table" style="margin-bottom:8px;">
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
          <td><span class="badge badge-purple">OPTIONAL</span></td>
        </tr>
      </tbody>
    </table>

    <!-- Contact & Verification Banner -->
    <div class="contact-banner">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:6px;">
        <div>
          <div style="font-size:11px; font-weight:800; color:#FFFFFF;">Hubungi Technical Sales Desk & Network Operations Center (NOC)</div>
          <div style="font-size:8px; color:#94A3B8; margin-top:1px;">PT Maudy Network Komunikasi (Maudy Network Nusantara) &bull; Terdaftar Resmi di Kemenkumham RI</div>
        </div>
        <span class="badge badge-green">NOC 24/7 SIAGA</span>
      </div>

      <div class="contact-grid">
        <div>
          <div class="contact-item-title">KANTOR PUSAT & WORKSHOP</div>
          <div class="contact-item-val">Semarang, Jawa Tengah, Indonesia</div>
          <div style="font-size:7.5px; color:#94A3B8; margin-top:1px;">Area Layanan: Seluruh Indonesia & Perairan Maritim</div>
        </div>
        <div>
          <div class="contact-item-title">HOTLINE NOC & WHATSAPP</div>
          <div class="contact-item-val">+62 857-2748-7507</div>
          <div style="font-size:7.5px; color:#94A3B8; margin-top:1px;">Email: admin@maudy.net.id / support@maudy.net.id</div>
        </div>
        <div>
          <div class="contact-item-title">PORTAL RESMI & VERIFIKASI</div>
          <div class="contact-item-val">https://maudy.net.id</div>
          <div style="font-size:7.5px; color:#94A3B8; margin-top:1px;">NIB: 0220205831962 &bull; PKP Terdaftar</div>
        </div>
      </div>
    </div>

    <!-- Official Sign-Off Footer Note -->
    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:8px; padding-top:5px; border-top:1px solid #E2E8F0;">
      <div style="font-size:7.5px; color:#64748B;">
        Hak Cipta &copy; 2026 PT Maudy Network Komunikasi. Seluruh hak cipta dilindungi undang-undang.<br>
        Dokumen ini diterbitkan secara sah dan dilindungi oleh Perjanjian Kerahasiaan (Non-Disclosure Agreement).
      </div>
      <div style="text-align:right;">
        <div style="font-size:7.5px; font-weight:700; color:#0F172A;">TIM KOMERSIAL & DIREKTORAT TEKNOLOGI</div>
        <div style="font-size:7px; color:#0071E3; font-family:'Space Grotesk', monospace;">PT MAUDY NETWORK KOMUNIKASI</div>
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

console.log('Executing Chrome headless print-to-pdf with embedded illustrations...');
try {
  execSync(cmd, { stdio: 'inherit' });
  const stats = fs.statSync(outPdfPath);
  console.log(`Success! High-resolution illustrated official PDF generated: ${outPdfPath} (${stats.size} bytes)`);
  fs.unlinkSync(tmpHtmlPath);
} catch (err) {
  console.error('Error generating PDF via Chrome:', err);
  process.exit(1);
}
