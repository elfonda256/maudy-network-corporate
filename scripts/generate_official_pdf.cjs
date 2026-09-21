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
const imgPpe = toBase64('public/xtur/det-ppe.jpg');

console.log('Encoded images successfully. Preparing 100% maximized solid HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Aegis Enterprise AI Suite - Official Catalog 2026</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap');

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
    font-size: 8.8px;
    line-height: 1.35;
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
    height: 15mm;
    background: linear-gradient(135deg, #070A14 0%, #0F172A 100%);
    border-bottom: 2.5px solid #0071E3;
    padding: 0 14mm;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
  }
  .header-brand {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .header-logo-img {
    height: 19px;
    width: auto;
    background: #FFFFFF;
    padding: 2px 5px;
    border-radius: 4px;
  }
  .header-title-text {
    font-size: 9.8px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #F8FAFC;
  }
  .header-subtitle-text {
    font-size: 7.2px;
    color: #38BDF8;
    font-family: 'Space Grotesk', monospace;
    letter-spacing: 0.5px;
  }
  .header-page-tag {
    font-size: 8px;
    font-family: 'Space Grotesk', monospace;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    padding: 2.5px 8px;
    border-radius: 12px;
    color: #E2E8F0;
    font-weight: 600;
  }

  .footer-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 9.5mm;
    border-top: 1px solid #E2E8F0;
    background: #F8FAFC;
    padding: 0 14mm;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 7.2px;
    color: #64748B;
  }
  .footer-bar strong {
    color: #0F172A;
  }

  /* Solid Content Area */
  .content-area-solid {
    padding: 4.5mm 14mm 9.5mm 14mm;
    height: 272.5mm;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6.5px;
  }

  /* Typography Utilities */
  h1 { font-size: 21px; font-weight: 800; color: #0F172A; letter-spacing: -0.5px; line-height: 1.15; }
  h2 { font-size: 11px; font-weight: 800; color: #0F172A; letter-spacing: -0.3px; display: flex; align-items: center; gap: 5px; }
  h3 { font-size: 9.2px; font-weight: 700; color: #0F172A; }
  p { color: #475569; }

  .badge {
    display: inline-block;
    font-size: 6.8px;
    font-weight: 700;
    font-family: 'Space Grotesk', monospace;
    text-transform: uppercase;
    padding: 2px 5px;
    border-radius: 3px;
    letter-spacing: 0.3px;
  }
  .badge-blue { background: #EFF6FF; color: #0284C7; border: 1px solid #BAE6FD; }
  .badge-dark { background: #0F172A; color: #38BDF8; border: 1px solid #1E293B; }
  .badge-green { background: #F0FDF4; color: #16A34A; border: 1px solid #BBF7D0; }
  .badge-purple { background: #FAF5FF; color: #9333EA; border: 1px solid #E9D5FF; }
  .badge-amber { background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; }

  .section-title-strip {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2px;
  }

  /* Page 1 Specific Styles */
  .hero-box {
    background: linear-gradient(145deg, #070B19 0%, #0F172A 100%);
    border-radius: 8px;
    padding: 11px 15px;
    color: #FFFFFF;
    position: relative;
    border: 1px solid #1E293B;
  }
  .hero-box h1 { color: #FFFFFF; margin: 2px 0; font-size: 21px; }
  .hero-box p { color: #94A3B8; font-size: 8.8px; line-height: 1.35; max-width: 98%; }

  .cover-illustrations-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px;
  }
  .cover-img-card {
    position: relative;
    border-radius: 7px;
    overflow: hidden;
    height: 115px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.06);
  }
  .cover-img-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cover-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 55%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 7px 9px;
  }
  .cover-img-tag {
    font-size: 6.8px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 700;
    color: #38BDF8;
    text-transform: uppercase;
  }
  .cover-img-title {
    font-size: 9.8px;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1.2;
    margin-top: 1px;
  }
  .cover-img-desc {
    font-size: 6.8px;
    color: #CBD5E1;
    line-height: 1.25;
    margin-top: 1px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6.5px;
  }
  .stat-card {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 6px;
    padding: 6.5px 8px;
  }
  .stat-num {
    font-size: 15px;
    font-weight: 800;
    color: #0071E3;
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1.1;
  }
  .stat-label {
    font-size: 8px;
    font-weight: 700;
    color: #0F172A;
    margin-top: 1px;
  }
  .stat-desc {
    font-size: 6.8px;
    color: #64748B;
    margin-top: 1px;
    line-height: 1.2;
  }

  /* Topology Architecture Pipeline (Page 1) */
  .topology-container {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 7px;
    padding: 6px 8px;
  }
  .topology-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    font-size: 8.2px;
    font-weight: 800;
    color: #0F172A;
  }
  .topology-grid {
    display: grid;
    grid-template-columns: 1fr 16px 1fr 16px 1fr 16px 1fr;
    align-items: center;
    gap: 0;
  }
  .top-node {
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 5px;
    padding: 4.5px 6px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top-node-num {
    font-size: 6px;
    font-family: 'Space Grotesk', monospace;
    color: #0284C7;
    font-weight: 700;
  }
  .top-node-title {
    font-size: 7.2px;
    font-weight: 800;
    color: #0F172A;
    line-height: 1.15;
  }
  .top-node-desc {
    font-size: 6px;
    color: #64748B;
    line-height: 1.15;
  }
  .top-arrow {
    text-align: center;
    color: #94A3B8;
    font-weight: 800;
    font-size: 10px;
  }

  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6.5px;
  }
  .pillar-card {
    border: 1px solid #E2E8F0;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 6.5px 9px;
    border-left: 3.5px solid #0071E3;
  }
  .pillar-title {
    font-size: 9px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 2px;
  }
  .pillar-desc {
    font-size: 7.2px;
    color: #475569;
    line-height: 1.3;
  }
  .pillar-bullets {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    margin-top: 3px;
  }
  .pillar-pill {
    background: #F1F5F9;
    color: #334155;
    font-size: 6.4px;
    font-weight: 600;
    padding: 1.5px 4px;
    border-radius: 3px;
  }

  /* Industry Sector Impact Matrix (Page 1 Fill) */
  .industry-coverage-box {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 7px;
    padding: 6px 8px;
  }
  .industry-coverage-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    margin-top: 3px;
  }
  .industry-col {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 5px;
    padding: 4px 5px;
  }
  .industry-col-title {
    font-size: 7px;
    font-weight: 800;
    color: #0F172A;
    line-height: 1.15;
  }
  .industry-col-desc {
    font-size: 6.2px;
    color: #64748B;
    margin-top: 2px;
    line-height: 1.2;
  }

  .legal-callout {
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 6px;
    padding: 5.5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Page 2: Flexible Full-Height Category Sections */
  .category-section-illustrated-flex {
    flex: 1;
    border: 1px solid #E2E8F0;
    border-radius: 7px;
    overflow: hidden;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
  }
  .cat-bar {
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    padding: 3.5px 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cat-bar-title {
    font-size: 9.2px;
    font-weight: 800;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .cat-body-grid-flex {
    flex: 1;
    display: grid;
    grid-template-columns: 125px 1fr;
    gap: 7px;
    padding: 6px 8px;
  }
  .cat-illustration-flex {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    min-height: 115px;
    border: 1px solid #E2E8F0;
  }
  .cat-illustration-flex img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cat-illustration-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.92) 0%, transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5px 7px;
  }
  .cat-illustration-tag {
    font-size: 7px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 700;
    color: #38BDF8;
  }
  .cat-illustration-sub {
    font-size: 6.5px;
    color: #E2E8F0;
    line-height: 1.15;
  }
  .cat-products-row-flex {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    height: 100%;
  }
  .mini-product-card-flex {
    border: 1px solid #E2E8F0;
    background: #FAFAFA;
    border-radius: 5px;
    padding: 6px 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .mini-code {
    font-size: 6.8px;
    font-family: 'Space Grotesk', monospace;
    color: #0284C7;
    font-weight: 700;
  }
  .mini-name {
    font-size: 8.8px;
    font-weight: 800;
    color: #0F172A;
    line-height: 1.15;
    margin: 1px 0;
  }
  .mini-desc {
    font-size: 6.8px;
    color: #475569;
    line-height: 1.25;
  }
  .mini-specs {
    font-size: 6.5px;
    color: #1E293B;
    background: #F1F5F9;
    padding: 2px 4px;
    border-radius: 3px;
    margin-top: 2px;
    line-height: 1.2;
    font-family: 'Space Grotesk', monospace;
    font-weight: 600;
  }
  .mini-tag {
    font-size: 6.5px;
    font-weight: 600;
    color: #0369A1;
    background: #E0F2FE;
    padding: 1.5px 5px;
    border-radius: 3px;
    display: inline-block;
    width: fit-content;
    margin-top: 2px;
  }

  .trl-banner {
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
    border-radius: 7px;
    padding: 7px 11px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #334155;
  }

  /* Tables & Integration (Page 3) */
  .tech-visual-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7px;
  }
  .tech-visual-card {
    height: 98px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    border: 1px solid #CBD5E1;
  }
  .tech-visual-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tech-visual-badge {
    position: absolute;
    bottom: 5px;
    left: 6px;
    background: rgba(15,23,42,0.92);
    color: #38BDF8;
    padding: 2.5px 6px;
    border-radius: 3px;
    font-size: 7px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 700;
    border: 1px solid rgba(255,255,255,0.15);
  }

  .spec-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.8px;
  }
  .spec-table th {
    background: #0F172A;
    color: #FFFFFF;
    font-weight: 700;
    padding: 4px 7px;
    text-align: left;
    font-size: 7.2px;
    letter-spacing: 0.3px;
  }
  .spec-table td {
    padding: 4.2px 7px;
    border-bottom: 1px solid #E2E8F0;
    color: #334155;
    line-height: 1.25;
  }
  .spec-table tr:nth-child(even) td {
    background: #F8FAFC;
  }
  .spec-table td strong {
    color: #0F172A;
  }

  .interop-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  .interop-card {
    background: #F8FAFC;
    border: 1px solid #CBD5E1;
    border-radius: 6px;
    padding: 7px 8px;
  }
  .interop-title {
    font-size: 7.5px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 2px;
  }
  .interop-desc {
    font-size: 6.6px;
    color: #475569;
    line-height: 1.2;
  }

  /* Procurement Box & Timeline (Page 4) */
  .scheme-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }
  .scheme-box {
    border: 1.5px solid #E2E8F0;
    background: #FFFFFF;
    border-radius: 7px;
    padding: 10px 11px;
    text-align: left;
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .scheme-box.highlight {
    border-color: #0071E3;
    background: #F8FAFC;
  }
  .scheme-name {
    font-size: 10px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 2px;
  }
  .scheme-badge {
    font-size: 6.8px;
    font-family: 'Space Grotesk', monospace;
    padding: 1.5px 4px;
    border-radius: 3px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 3px;
  }

  /* Deployment Timeline Steps */
  .timeline-container {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 7px;
    padding: 7px 9px;
  }
  .timeline-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
  .timeline-step {
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 5px;
    padding: 6px 7px;
    border-top: 2.5px solid #0071E3;
    height: 76px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .timeline-week {
    font-size: 6.8px;
    font-weight: 800;
    font-family: 'Space Grotesk', monospace;
    color: #0071E3;
  }
  .timeline-title {
    font-size: 7.8px;
    font-weight: 800;
    color: #0F172A;
    line-height: 1.15;
  }
  .timeline-desc {
    font-size: 6.6px;
    color: #64748B;
    line-height: 1.2;
  }

  .contact-banner {
    background: linear-gradient(135deg, #070A14 0%, #1E293B 100%);
    border-radius: 8px;
    padding: 10px 13px;
    color: #FFFFFF;
    border: 1px solid #334155;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;
    margin-top: 4px;
    font-size: 7.5px;
  }
  .contact-item-title {
    color: #38BDF8;
    font-weight: 700;
    font-size: 6.8px;
    font-family: 'Space Grotesk', monospace;
    text-transform: uppercase;
  }
  .contact-item-val {
    color: #F8FAFC;
    font-weight: 600;
    margin-top: 2px;
    line-height: 1.2;
  }

  .seal-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F1F5F9;
    border: 1px solid #CBD5E1;
    border-radius: 6px;
    padding: 6px 10px;
  }
</style>
</head>
<body>

<!-- ============================================================== -->
<!-- PAGE 1: COVER & EXECUTIVE ARCHITECTURE TOPOLOGY                -->
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

  <div class="content-area-solid">
    <!-- Hero Box -->
    <div class="hero-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2px;">
        <span class="badge badge-dark">DOKUMEN RESMI TENDER & PENGADAAN B2B</span>
        <span style="font-size:7.5px; font-family:'Space Grotesk', monospace; color:#38BDF8;">REF: MNK-AEGIS-CAT-2026/V4.2</span>
      </div>
      <h1>Aegis Enterprise AI Suite</h1>
      <p>
        Katalog Komprehensif Solusi Kecerdasan Buatan Terintegrasi, Komunikasi Satelit Maritim Lepas Pantai, Edge Vision CCTV XTUR, & Sovereign On-Premise LLM untuk Korporasi Strategis dan Pemerintahan Republik Indonesia.
      </p>
      <div style="display:flex; gap:5px; margin-top:5px;">
        <span class="badge badge-blue">ISO 9001:2015</span>
        <span class="badge badge-blue">ISO 27001:2022</span>
        <span class="badge badge-blue">IZIN JASTEL KOMINFO RI</span>
        <span class="badge badge-blue">FORTINET NSE 7</span>
        <span class="badge badge-blue">FIPS 140-2 LEVEL 3</span>
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
          <div class="cover-img-desc">Integrasi VSAT laut lepas, pemantauan konsumsi bahan bakar, AIS & keselamatan armada kapal.</div>
        </div>
      </div>
      <div class="cover-img-card">
        <img src="${imgDocIntel}" alt="AI Document Intelligence" />
        <div class="cover-img-overlay">
          <div class="cover-img-tag">SOVEREIGN AI & DOKUMEN INTELIJEN</div>
          <div class="cover-img-title">Semantic Vector RAG & Analisis Kontrak B2B</div>
          <div class="cover-img-desc">Ekstraksi OCR akurasi 99.4%, audit kepatuhan tender BUMN & sinkronisasi otomatis ke ERP.</div>
        </div>
      </div>
    </div>

    <!-- 4 Stats Highlight -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">12 Solusi</div>
        <div class="stat-label">Enterprise Ready</div>
        <div class="stat-desc">Didesain khusus untuk alur kerja riil BUMN & korporasi strategis.</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">&lt; 4.2ms</div>
        <div class="stat-label">Edge Inference</div>
        <div class="stat-desc">Inferensi ultra-cepat deteksi plat nomor & intrusi kamera XTUR real-time.</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">Zero Egress</div>
        <div class="stat-label">Sovereign Data</div>
        <div class="stat-desc">Air-Gapped Private GPU, data dokumen & video tidak pernah keluar server.</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">99.98%</div>
        <div class="stat-label">SLA NOC 24/7</div>
        <div class="stat-desc">Dukungan teknis nonstop tim engineer bersertifikasi Cisco/Fortinet/NVIDIA.</div>
      </div>
    </div>

    <!-- Topology Architecture Pipeline Flow -->
    <div class="topology-container">
      <div class="topology-header">
        <span>TOPOLOGI INTEGRASI EKOSISTEM ARSITEKTUR HYBRID & AIR-GAPPED AEGIS AI</span>
        <span class="badge badge-blue">END-TO-END PIPELINE</span>
      </div>
      <div class="topology-grid">
        <div class="top-node">
          <div class="top-node-num">TAHAP 01 &bull; SENSOR EDGE</div>
          <div class="top-node-title">Ingesti Perangkat Lapangan</div>
          <div class="top-node-desc">Kamera XTUR 4K, sensor termal, gyro VSAT kapal & dokumen scanner.</div>
        </div>
        <div class="top-arrow">&rarr;</div>
        <div class="top-node">
          <div class="top-node-num">TAHAP 02 &bull; TRANSMISI</div>
          <div class="top-node-title">Secure Encrypted Transport</div>
          <div class="top-node-desc">SD-WAN IPsec AES-256, satelit Ku/Ka-band CIR tinggi, no open ports.</div>
        </div>
        <div class="top-arrow">&rarr;</div>
        <div class="top-node">
          <div class="top-node-num">TAHAP 03 &bull; INFERENSI</div>
          <div class="top-node-title">On-Premise AI Core Engine</div>
          <div class="top-node-desc">Kluster GPU Air-Gapped, Milvus vector DB & model LLM/VLM 70B lokal.</div>
        </div>
        <div class="top-arrow">&rarr;</div>
        <div class="top-node">
          <div class="top-node-num">TAHAP 04 &bull; KORPORASI</div>
          <div class="top-node-title">Executive Action & ERP</div>
          <div class="top-node-desc">Dashboard C-Level, integrasi SAP/Oracle & alert WhatsApp NOC &lt;15 detik.</div>
        </div>
      </div>
    </div>

    <!-- Executive Pillars -->
    <div>
      <div class="section-title-strip">
        <h2><span>🏛️</span> 4 Pilar Arsitektur Rekayasa Sistem Aegis</h2>
        <span style="font-size:7px; color:#64748B;">STANDAR TATA KELOLA TIK NASIONAL</span>
      </div>
      <div class="pillar-grid">
        <div class="pillar-card">
          <div class="pillar-title">1. Sovereign & Air-Gapped Private AI</div>
          <div class="pillar-desc">
            Model AI dan database dokumen berjalan 100% on-premise pada hardware internal organisasi Anda tanpa koneksi internet luar.
          </div>
          <div class="pillar-bullets">
            <span class="pillar-pill">UU PDP No. 27/2022</span>
            <span class="pillar-pill">FIPS 140-2 Level 3</span>
            <span class="pillar-pill">Zero Data Egress</span>
          </div>
        </div>

        <div class="pillar-card">
          <div class="pillar-title">2. Edge Computing & CCTV Cerdas XTUR</div>
          <div class="pillar-desc">
            Komputasi AI langsung di lokasi kamera dengan inferensi ultra cepat &lt; 4.2ms untuk ANPR Plat Nomor & sensor keselamatan kerja.
          </div>
          <div class="pillar-bullets">
            <span class="pillar-pill">ANPR 57 Wilayah RI</span>
            <span class="pillar-pill">Sensor Termal</span>
            <span class="pillar-pill">Alarm &lt; 150ms</span>
          </div>
        </div>

        <div class="pillar-card">
          <div class="pillar-title">3. Satelit Maritim & Jaringan Lepas Pantai</div>
          <div class="pillar-desc">
            Integrasi telemetri kapal laut, VSAT maritim pita Ku/Ka-Band, dan pemantauan armada kapal di perairan ALKI I/II/III.
          </div>
          <div class="pillar-bullets">
            <span class="pillar-pill">Auto-Switching Ku/Ka</span>
            <span class="pillar-pill">Throughput 25 Mbps CIR</span>
            <span class="pillar-pill">NMEA Telemetri</span>
          </div>
        </div>

        <div class="pillar-card">
          <div class="pillar-title">4. Otomasi Dokumen & Semantic RAG</div>
          <div class="pillar-desc">
            OCR cerdas multi-bahasa akurasi 99.4% yang mengekstraksi ratusan ribu lembar kontrak tender & faktur pajak otomatis ke ERP.
          </div>
          <div class="pillar-bullets">
            <span class="pillar-pill">1.200 hal/menit</span>
            <span class="pillar-pill">Preservasi Tabel Finansial</span>
            <span class="pillar-pill">Sinkronisasi SAP</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Industry Coverage Impact Matrix (Full Fill Section) -->
    <div class="industry-coverage-box">
      <div class="section-title-strip">
        <h2><span>🎯</span> Matriks Cakupan Solusi pada 5 Sektor Industri Strategis</h2>
        <span style="font-size:7px; color:#64748B;">SEKTOR PRIORITAS BUMN & PEMERINTAHAN</span>
      </div>
      <div class="industry-coverage-grid">
        <div class="industry-col">
          <div class="industry-col-title">🚢 Maritim & Pelayaran</div>
          <div class="industry-col-desc">Telemetri rute ALKI, efisiensi konsumsi solar kapal, audit AIS & MARPOL.</div>
        </div>
        <div class="industry-col">
          <div class="industry-col-title">🏭 Manufaktur & Pabrik</div>
          <div class="industry-col-desc">3D Digital Twin SCADA, pencegahan downtime mesin & getaran anomali.</div>
        </div>
        <div class="industry-col">
          <div class="industry-col-title">🏗️ Konstruksi & Proyek</div>
          <div class="industry-col-desc">Audit K3 APD otomatis, pagar virtual alat berat, pemantauan zonasi bahaya.</div>
        </div>
        <div class="industry-col">
          <div class="industry-col-title">🏛️ Perbankan & Finansial</div>
          <div class="industry-col-desc">OCR multi-tabel kontrak kredit, analisis fraud tender, audit UU PDP.</div>
        </div>
        <div class="industry-col">
          <div class="industry-col-title">🛡️ Pertahanan & Keamanan</div>
          <div class="industry-col-desc">Server GPU Air-Gapped isolasi fisik penuh, CCTV ANPR plat nomor 57 Samsat.</div>
        </div>
      </div>
    </div>

    <!-- Official Legal Callout -->
    <div class="legal-callout">
      <div>
        <div style="font-weight:800; font-size:8.8px; color:#166534;">Jaminan Legalitas & Kredibilitas Badan Usaha PT. Maudy Network Komunikasi</div>
        <div style="font-size:7.4px; color:#15803D; margin-top:1px;">
          NIB: 0220205831962 &bull; NPWP: 94.786.321.4-503.000 &bull; Izin Jastel Kominfo RI No: 129/TEL.04.02/2021 &bull; PKP Terdaftar Resmi
        </div>
      </div>
      <span class="badge badge-green" style="padding:3.5px 8px; font-size:7.2px;">100% COMPLIANT</span>
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

  <div class="content-area-solid">
    
    <!-- SECTOR 1: MARITIME & SATELLITE -->
    <div class="category-section-illustrated-flex">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>🚢</span>
          <span>SEKTOR 1: MARITIM, VSAT SATELIT & LOGISTIK KELAUTAN</span>
        </div>
        <div style="display:flex; gap:5px; align-items:center;">
          <span style="font-size:7px; color:#64748B;">Throughput 25 Mbps CIR &bull; Rute ALKI I/II/III</span>
          <span class="badge badge-blue">OFFSHORE & MARINE</span>
        </div>
      </div>
      <div class="cat-body-grid-flex">
        <div class="cat-illustration-flex">
          <img src="${imgMaritime}" alt="Maritim AI" />
          <div class="cat-illustration-overlay">
            <div class="cat-illustration-tag">VSAT & TELEMETRI</div>
            <div class="cat-illustration-sub">Auto-Switching Ku/Ka-Band</div>
          </div>
        </div>
        <div class="cat-products-row-flex">
          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-MARITIME-01</div>
              <div class="mini-name">Aegis Maritime Sat-AI</div>
              <div class="mini-desc">Sistem navigasi cerdas kapal laut terintegrasi VSAT ku-band, pantau bahan bakar real-time, cuaca & RPM mesin kapal.</div>
              <div class="mini-specs">NMEA 0183/2000 &bull; 99.8% Link</div>
            </div>
            <span class="mini-tag">Armada Pelayaran</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-FLEET-02</div>
              <div class="mini-name">FleetOS Intelligence</div>
              <div class="mini-desc">Optimasi rute pelayaran ALKI I/II/III, audit histori AIS armada kapal, deteksi blind spot kapal, prediksi ETA akurat.</div>
              <div class="mini-specs">ETA Akurasi &plusmn;12 Menit &bull; ALKI</div>
            </div>
            <span class="mini-tag">Rute Armada ALKI</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-WASTE-03</div>
              <div class="mini-name">Smart Port & Waste AI</div>
              <div class="mini-desc">Monitoring pembuangan limbah pelabuhan, sensor air pintar, kepatuhan regulasi MARPOL Annex I-VI, audit emisi dermaga.</div>
              <div class="mini-specs">MARPOL Compliant &bull; Pelindo</div>
            </div>
            <span class="mini-tag">Kepatuhan Lingkungan</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTOR 2: SURVEILLANCE & INDUSTRIAL EDGE AI -->
    <div class="category-section-illustrated-flex">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>👁️</span>
          <span>SEKTOR 2: CCTV CERDAS XTUR, MANUFAKTUR & KONSTRUKSI</span>
        </div>
        <div style="display:flex; gap:5px; align-items:center;">
          <span style="font-size:7px; color:#64748B;">Inferensi &lt; 4.2ms &bull; 64 RTSP Stream</span>
          <span class="badge badge-dark">INDUSTRIAL EDGE VISION</span>
        </div>
      </div>
      <div class="cat-body-grid-flex">
        <div class="cat-illustration-flex">
          <img src="${imgFactory}" alt="Factory Twin AI" />
          <div class="cat-illustration-overlay">
            <div class="cat-illustration-tag">EDGE VISION & TWIN</div>
            <div class="cat-illustration-sub">SCADA & ANPR Indonesia</div>
          </div>
        </div>
        <div class="cat-products-row-flex">
          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">XTUR-VISION-04</div>
              <div class="mini-name">XTUR AI Edge CCTV</div>
              <div class="mini-desc">ANPR Plat Nomor 99.2% di 57 wilayah RI, pagar virtual perimeter, alarm seketika &lt;150ms tanpa koneksi internet.</div>
              <div class="mini-specs">ANPR 57 Samsat RI &bull; &lt;4.2ms</div>
            </div>
            <span class="mini-tag">ANPR & Perimeter</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-TWIN-05</div>
              <div class="mini-name">Factory Twin AI</div>
              <div class="mini-desc">Digital twin lini produksi manufaktur, visualisasi 3D SCADA, deteksi anomali getaran mesin & prediksi kerusakan komponen.</div>
              <div class="mini-specs">OPC-UA/Modbus &bull; MTBF +45%</div>
            </div>
            <span class="mini-tag">3D Digital Twin</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-BUILD-06</div>
              <div class="mini-name">Construct AI Monitor</div>
              <div class="mini-desc">Deteksi otomatis kelengkapan APD (helm/rompi/sepatu) pekerja konstruksi, audit zonasi bahaya alat berat K3 proyek.</div>
              <div class="mini-specs">K3 ISO 45001 &bull; BUMN Karya</div>
            </div>
            <span class="mini-tag">Keselamatan K3</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTOR 3: DOCUMENT INTELLIGENCE & ENTERPRISE LLM -->
    <div class="category-section-illustrated-flex">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>🏢</span>
          <span>SEKTOR 3: DOKUMEN INTELIJEN, PENGADAAN & ENTERPRISE LLM</span>
        </div>
        <div style="display:flex; gap:5px; align-items:center;">
          <span style="font-size:7px; color:#64748B;">1.200 hal/menit &bull; Multimodal VLM 70B</span>
          <span class="badge badge-purple">ENTERPRISE AUTOMATION</span>
        </div>
      </div>
      <div class="cat-body-grid-flex">
        <div class="cat-illustration-flex">
          <img src="${imgDocIntel}" alt="Doc Intelligence" />
          <div class="cat-illustration-overlay">
            <div class="cat-illustration-tag">SEMANTIC VECTOR RAG</div>
            <div class="cat-illustration-sub">100% On-Premise GPU</div>
          </div>
        </div>
        <div class="cat-products-row-flex">
          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-DOC-07</div>
              <div class="mini-name">AI Document Intel</div>
              <div class="mini-desc">OCR multi-bahasa akurasi 99.4%, preservasi tabel keuangan kompleks, ekstraksi klausul kontrak & sinkronisasi SAP.</div>
              <div class="mini-specs">OCR Akurasi 99.4% &bull; SAP/Oracle</div>
            </div>
            <span class="mini-tag">OCR Kontrak & ERP</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-PROC-08</div>
              <div class="mini-name">Procure AI Suite</div>
              <div class="mini-desc">Analisis penawaran vendor tender, perbandingan harga material otomatis, scoring risiko rekanan & audit kewajaran HPS.</div>
              <div class="mini-specs">Audit HPS &bull; Fraud Prevention</div>
            </div>
            <span class="mini-tag">Scoring Rekanan</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-BIZ-09</div>
              <div class="mini-name">Business Copilot AI</div>
              <div class="mini-desc">Asisten penalaran bisnis internal berbasis RAG dokumen perusahaan, draf laporan analitik resmi, sitasi sumber terverifikasi.</div>
              <div class="mini-specs">Zero Hallucination &bull; RAG 70B</div>
            </div>
            <span class="mini-tag">Internal Knowledge</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTOR 4: CYBERSECURITY & SOVEREIGN PRIVATE AI -->
    <div class="category-section-illustrated-flex">
      <div class="cat-bar">
        <div class="cat-bar-title">
          <span>🛡️</span>
          <span>SEKTOR 4: KEAMANAN SIBER SOVEREIGN & ISOLASI AIR-GAPPED</span>
        </div>
        <div style="display:flex; gap:5px; align-items:center;">
          <span style="font-size:7px; color:#64748B;">Isolasi Fisik Penuh &bull; FIPS 140-2 Level 3</span>
          <span class="badge badge-green">MISSION-CRITICAL DEFENSE</span>
        </div>
      </div>
      <div class="cat-body-grid-flex">
        <div class="cat-illustration-flex">
          <img src="${imgPrivateAi}" alt="Private AI" />
          <div class="cat-illustration-overlay">
            <div class="cat-illustration-tag">AIR-GAPPED CLUSTER</div>
            <div class="cat-illustration-sub">Zero External Egress</div>
          </div>
        </div>
        <div class="cat-products-row-flex">
          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-SHIELD-10</div>
              <div class="mini-name">Aegis Cyber Shield AI</div>
              <div class="mini-desc">Deteksi intrusi jaringan AI, micro-segmentation isolasi ransomware &lt; 200ms, korelasi log SIEM Fortinet/Splunk.</div>
              <div class="mini-specs">SIEM Fortinet &bull; &lt;200ms Mitigasi</div>
            </div>
            <span class="mini-tag">Zero-Trust SOC</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-PRIV-11</div>
              <div class="mini-name">Aegis Private AI</div>
              <div class="mini-desc">Server GPU lokal tanpa sambungan internet, enkripsi hardware HSM FIPS 140-2 Level 3, kedaulatan data penuh.</div>
              <div class="mini-specs">HSM Level 3 &bull; Air-Gapped GPU</div>
            </div>
            <span class="mini-tag">GPU On-Premise</span>
          </div>

          <div class="mini-product-card-flex">
            <div>
              <div class="mini-code">AEGIS-COMPLY-12</div>
              <div class="mini-name">Comply AI Governance</div>
              <div class="mini-desc">Audit otomatis kepatuhan UU PDP No 27/2022, ISO 27001, deteksi kebocoran data NIK/finansial & pembuatan laporan auditor.</div>
              <div class="mini-specs">UU PDP No. 27/2022 &bull; ISO 27001</div>
            </div>
            <span class="mini-tag">Audit UU PDP</span>
          </div>
        </div>
      </div>
    </div>

    <!-- TRL 9 Banner -->
    <div class="trl-banner">
      <div>
        <div style="font-size:9px; font-weight:800; color:#38BDF8;">STANDAR KESIAPAN TEKNOLOGI TERUJI &bull; TECHNOLOGY READINESS LEVEL (TRL 9)</div>
        <div style="font-size:7.4px; color:#CBD5E1; margin-top:2px;">
          Seluruh 12 produk Aegis Enterprise AI telah lulus uji operasional industri skala penuh, siap diimplementasikan dalam 7–14 hari kerja dengan jaminan SLA suku cadang resmi.
        </div>
      </div>
      <span class="badge badge-green" style="font-size:7.5px; padding:3.5px 8px;">FIELD PROVEN &bull; TRL 9</span>
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

  <div class="content-area-solid">
    
    <!-- Visual Hardware Showcase Row (3 images!) -->
    <div class="tech-visual-row">
      <div class="tech-visual-card">
        <img src="${imgVehicle}" alt="XTUR ANPR Detection" />
        <div class="tech-visual-badge">XTUR ANPR 99.2% &bull; INFERENCE &lt; 4.2ms</div>
      </div>
      <div class="tech-visual-card">
        <img src="${imgPpe}" alt="Construct AI K3" />
        <div class="tech-visual-badge">CONSTRUCT AI &bull; K3 PPE DETECTION</div>
      </div>
      <div class="tech-visual-card">
        <img src="${imgDashboard}" alt="XTUR AI Dashboard" />
        <div class="tech-visual-badge">64 RTSP MULTI-STREAM NOC MONITORING</div>
      </div>
    </div>

    <div>
      <div class="section-title-strip">
        <h2><span>⚡</span> Matriks Spesifikasi Teknis Hardware & Performa</h2>
        <span style="font-size:7px; color:#64748B;">BENCHMARK LAB & PENGUJIAN OPERASIONAL LAPANGAN</span>
      </div>

      <!-- TABLE 1: HARDWARE & INFERENCE -->
      <table class="spec-table">
        <thead>
          <tr>
            <th style="width:23%;">Komponen Arsitektur</th>
            <th style="width:37%;">Spesifikasi Rekayasa Sistem</th>
            <th style="width:40%;">Standar Kinerja / SLA Teruji</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Edge AI Processing Unit</strong></td>
            <td>NVIDIA Jetson AGX Orin 64GB Industrial / Custom Edge Server</td>
            <td>275 TOPS AI Performance, suhu operasi -40&deg;C s/d 85&deg;C, IP67 enclosure</td>
          </tr>
          <tr>
            <td><strong>Kamera XTUR Dual-Sensor</strong></td>
            <td>Sony Starvis 2 4K + Sensor Termal Dual-Spectrum Uncooled 640x512</td>
            <td>Deteksi plat nomor hingga kecepatan 120 km/jam, akurasi ANPR 99.2% siang & malam</td>
          </tr>
          <tr>
            <td><strong>Kapasitas Kamera Real-Time</strong></td>
            <td>Dukungan hingga 64 Stream RTSP/ONVIF Profile S/G/T per Edge node</td>
            <td>Inferensi video concurrent &lt; 4.2ms per frame, 0% frame drop pada 30 FPS</td>
          </tr>
          <tr>
            <td><strong>Konektivitas Satelit Kapal</strong></td>
            <td>Intellian v100NX / Sailor 900 Ku-to-Ka Band Auto-Tracking Gyro</td>
            <td>Throughput stabil hingga 25 Mbps CIR di laut lepas perairan ALKI & Pasifik</td>
          </tr>
          <tr>
            <td><strong>Server Ingestion On-Premise</strong></td>
            <td>Dual Intel Xeon Gold 6430 + 4x NVIDIA L40S 48GB GPU NVLink</td>
            <td>Throughput pemrosesan data vektor 10.000 QPS, Milvus Vector DB terintegrasi</td>
          </tr>
          <tr>
            <td><strong>Cluster Storage & Backup</strong></td>
            <td>TrueNAS Enterprise ZFS Dual Controller 120TB NVMe Array</td>
            <td>Throughput 10 GB/s, enkripsi hardware SED AES-256, WORM compliance anti-ransomware</td>
          </tr>
          <tr>
            <td><strong>Mesin OCR & Dokumen RAG</strong></td>
            <td>Aegis Sovereign Multimodal Vision-Language Model 70B Quantized</td>
            <td>99.4% akurasi teks & tabel keuangan, kapasitas olah 1.200 hal/menit per node</td>
          </tr>
          <tr>
            <td><strong>Latency Jaringan Edge-to-Core</strong></td>
            <td>SD-WAN terintegrasi enkripsi hardware IPsec AES-256-GCM</td>
            <td>Rata-rata &lt; 15ms LAN lokal pabrik, &lt; 80ms over Marine VSAT, auto-failover</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <div class="section-title-strip">
        <h2><span>🔒</span> Kepatuhan Regulasi & Standar Tata Kelola Keamanan Informasi</h2>
        <span style="font-size:7px; color:#64748B;">MEMENUHI PERSYARATAN AUDIT TEKNIS BUMN, OJK & KOMINFO</span>
      </div>

      <!-- TABLE 2: SECURITY & COMPLIANCE -->
      <table class="spec-table">
        <thead>
          <tr>
            <th style="width:23%;">Aspek Kepatuhan</th>
            <th style="width:45%;">Implementasi & Mekanisme Pengamanan</th>
            <th style="width:32%;">Sertifikasi / Regulasi Rujukan</th>
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
            <td><strong>Isolasi Jaringan (Air-Gapped)</strong></td>
            <td>Segmentasi fisik jaringan tertutup, opsi unidirectional data diode militer, zero external outbound telemetry egress.</td>
            <td>ISO/IEC 27001:2022 Klausul A.13.1 &bull; BSSN Standard</td>
          </tr>
          <tr>
            <td><strong>Audit Trail & Immutability</strong></td>
            <td>Log aktivitas kriptografis anti-manipulasi (WORM) merekam setiap kueri LLM, akses kamera, dan ekspor data secara kronologis.</td>
            <td>ISO/IEC 27001:2022 Klausul A.12.4 &bull; Audit Trail BUMN</td>
          </tr>
          <tr>
            <td><strong>Disaster Recovery & Uptime SLA</strong></td>
            <td>Failover otomatis dual-homed link optik & satelit maritim dengan monitoring proaktif 24/7 oleh Network Operation Center (NOC).</td>
            <td>Garansi Uptime 99.98% &bull; RPO &lt; 5m, RTO &lt; 15m</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Interoperability Matrix -->
    <div>
      <div class="section-title-strip">
        <h2><span>🔌</span> Matriks Integrasi Protokol Terbuka (Open Standards)</h2>
        <span style="font-size:7px; color:#64748B;">KOMPATIBILITAS SEAMLESS DENGAN SISTEM EKSISTING</span>
      </div>
      <div class="interop-grid">
        <div class="interop-card">
          <div class="interop-title">ERP & DATABASE INTI</div>
          <div class="interop-desc">SAP ECC/S4HANA, Oracle NetSuite, Microsoft Dynamics via REST API & Webhook.</div>
        </div>
        <div class="interop-card">
          <div class="interop-title">PLATFORM VMS & NVR</div>
          <div class="interop-desc">Milestone XProtect, Genetec Security Center, Hikcentral via ONVIF Profile S/G/T.</div>
        </div>
        <div class="interop-card">
          <div class="interop-title">SCADA & IOT PABRIK</div>
          <div class="interop-desc">Siemens S7, Schneider, Modbus TCP, OPC-UA, dan MQTT Broker Industrial.</div>
        </div>
        <div class="interop-card">
          <div class="interop-title">IDENTITY & SSO</div>
          <div class="interop-desc">Active Directory, LDAP, Keycloak, SAML 2.0 & Kerberos Role-Based Access.</div>
        </div>
      </div>
    </div>

    <!-- Warranty & Support Callout (Page 3 Solid Bottom) -->
    <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:6px; padding:6px 10px;">
      <div style="font-size:8px; font-weight:800; color:#0F172A; display:flex; justify-content:space-between;">
        <span>GARANSI PERANGKAT KERAS 3 TAHUN & DISPATCH ENGINEER ON-SITE &lt; 2 JAM</span>
        <span style="color:#0071E3; font-family:'Space Grotesk', monospace;">SLA TINGKAT 1 BUMN</span>
      </div>
      <div style="font-size:7.2px; color:#64748B; margin-top:1px; line-height:1.25;">
        Penggantian unit cadangan (buffer stock) tersedia di pool logistik Semarang, Surabaya, dan Jakarta. Seluruh komponen hardware dijamin ketersediaan suku cadangnya hingga 5 tahun siklus hidup operasional.
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

  <div class="content-area-solid">
    <div>
      <div class="section-title-strip">
        <h2><span>💼</span> Pilihan Fleksibel Skema Pengadaan B2B & Korporasi</h2>
        <span style="font-size:7px; color:#64748B;">SESUAI STANDAR ANGGARAN APBN, BUMN & PRIVATE SECTOR</span>
      </div>

      <!-- 3 Scheme Cards -->
      <div class="scheme-grid">
        <div class="scheme-box highlight">
          <div>
            <span class="scheme-badge badge-blue">SKEMA 1: EVALUASI PROYEK</span>
            <div class="scheme-name">Proof of Concept (PoC)</div>
            <p style="font-size:7.4px; color:#475569; line-height:1.3; margin-bottom:5px;">
              Uji coba langsung perangkat keras XTUR / Model AI di lokasi kerja client selama 14 s/d 30 hari kalender dengan pendampingan langsung engineer ahli.
            </p>
            <ul style="font-size:7px; color:#334155; padding-left:11px; line-height:1.45;">
              <li>Perangkat unit demo disediakan tanpa biaya</li>
              <li>Akses penuh seluruh fitur software & model AI</li>
              <li>Laporan komparasi hasil uji akurasi resmi</li>
              <li>Pendampingan dedicated solution architect di lokasi</li>
            </ul>
          </div>
          <div style="font-size:6.8px; background:#E0F2FE; color:#0369A1; padding:3px 6px; border-radius:3px; font-weight:700;">
            Target: Evaluasi teknis sebelum penerbitan tender resmi
          </div>
        </div>

        <div class="scheme-box">
          <div>
            <span class="scheme-badge badge-dark">SKEMA 2: BELANJA MODAL</span>
            <div class="scheme-name">CAPEX (Perpetual License)</div>
            <p style="font-size:7.4px; color:#475569; line-height:1.3; margin-bottom:5px;">
              Pembelian putus seluruh hardware dan lisensi software permanen. Aset perangkat keras menjadi hak milik penuh organisasi client.
            </p>
            <ul style="font-size:7px; color:#334155; padding-left:11px; line-height:1.45;">
              <li>Hardware hak milik 100% instansi pembeli</li>
              <li>Lisensi software selamanya (perpetual license)</li>
              <li>Garansi suku cadang 1-3 tahun & SLA respon lokal</li>
              <li>Pelatihan sertifikasi internal administrator & BAST resmi</li>
            </ul>
          </div>
          <div style="font-size:6.8px; background:#F1F5F9; color:#334155; padding:3px 6px; border-radius:3px; font-weight:700;">
            Target: BUMN & Tender Proyek Anggaran APBN/APBD
          </div>
        </div>

        <div class="scheme-box">
          <div>
            <span class="scheme-badge badge-green">SKEMA 3: BIAYA OPERASIONAL</span>
            <div class="scheme-name">OPEX (Managed Service)</div>
            <p style="font-size:7.4px; color:#475569; line-height:1.3; margin-bottom:5px;">
              Layanan menyeluruh terpadu bulanan atau tahunan. Termasuk penyediaan hardware, pemeliharaan berkala, bandwidth VSAT, dan suku cadang.
            </p>
            <ul style="font-size:7px; color:#334155; padding-left:11px; line-height:1.45;">
              <li>Tanpa investasi belanja modal awal yang besar</li>
              <li>SLA 99.98% garansi penggantian unit rusak 24/7</li>
              <li>Pembaruan bobot model AI offline berkala</li>
              <li>Monitoring proaktif nonstop oleh tim NOC Pusat</li>
            </ul>
          </div>
          <div style="font-size:6.8px; background:#DCFCE7; color:#15803D; padding:3px 6px; border-radius:3px; font-weight:700;">
            Target: Kapal Laut, Pelabuhan, Manufaktur & Swasta
          </div>
        </div>
      </div>
    </div>

    <!-- 4-Week Deployment Methodology Roadmap -->
    <div class="timeline-container">
      <div class="section-title-strip" style="margin-bottom:4px;">
        <h2><span>🚀</span> Roadmap Tahapan Implementasi Proyek (4-Week Standard Deployment)</h2>
        <span class="badge badge-purple">FAST TIME-TO-VALUE</span>
      </div>
      <div class="timeline-grid">
        <div class="timeline-step">
          <div>
            <div class="timeline-week">MINGGU 01</div>
            <div class="timeline-title">Site Survey & Asesmen</div>
          </div>
          <div class="timeline-desc">Audit topologi jaringan, penentuan titik tiang CCTV XTUR, verifikasi suplai daya & frekuensi gyro VSAT kapal laut.</div>
        </div>
        <div class="timeline-step">
          <div>
            <div class="timeline-week">MINGGU 02</div>
            <div class="timeline-title">Instalasi Fisik Hardware</div>
          </div>
          <div class="timeline-desc">Pengiriman unit edge server, penarikan kabel FO/UTP outdoor, pemasangan kamera & mounting antenna satelit.</div>
        </div>
        <div class="timeline-step">
          <div>
            <div class="timeline-week">MINGGU 03</div>
            <div class="timeline-title">Kalibrasi Model & Integrasi</div>
          </div>
          <div class="timeline-desc">Finetuning model AI plat nomor / APD, ingest dokumen basis data RAG, dan pengujian integrasi API ERP SAP/Oracle.</div>
        </div>
        <div class="timeline-step">
          <div>
            <div class="timeline-week">MINGGU 04</div>
            <div class="timeline-title">UAT & Go-Live Operasional</div>
          </div>
          <div class="timeline-desc">User Acceptance Test bersama direksi teknis, pelatihan personel operator, serah terima BAST & standby NOC 24/7.</div>
        </div>
      </div>
    </div>

    <!-- Official B2B Request Checklist -->
    <div>
      <div class="section-title-strip">
        <h2><span>📋</span> Formulir & Persyaratan Permintaan Penawaran Resmi (RFP)</h2>
        <span style="font-size:7px; color:#64748B;">KELENGKAPAN PENERBITAN SURAT PENAWARAN HARGA (SPH)</span>
      </div>

      <table class="spec-table">
        <thead>
          <tr>
            <th style="width:24%;">Informasi / Parameter</th>
            <th style="width:54%;">Keterangan Teknis yang Dibutuhkan</th>
            <th style="width:22%;">Status Dokumen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Nama Badan Usaha & PIC</strong></td>
            <td>Nama instansi, nama penanggung jawab, email resmi korporat, nomor WhatsApp</td>
            <td><span class="badge badge-blue">MANDATORY</span></td>
          </tr>
          <tr>
            <td><strong>Solusi AI Target</strong></td>
            <td>Pilihan modul (misal: CCTV XTUR AI, VSAT Maritim, atau OCR Document Intelligence)</td>
            <td><span class="badge badge-blue">MANDATORY</span></td>
          </tr>
          <tr>
            <td><strong>Kapasitas / Volume</strong></td>
            <td>Jumlah titik kamera, jumlah armada kapal yang diinstal, atau estimasi volume lembar dokumen/bulan</td>
            <td><span class="badge badge-blue">MANDATORY</span></td>
          </tr>
          <tr>
            <td><strong>Topologi & Infrastruktur</strong></td>
            <td>Format VMS/NVR eksisting, jenis ERP internal, ketersediaan daya listrik & koneksi internet on-site</td>
            <td><span class="badge badge-amber">DIREKOMENDASIKAN</span></td>
          </tr>
          <tr>
            <td><strong>Kebutuhan Integrasi Sistem</strong></td>
            <td>Format ERP (SAP/Oracle), platform VMS eksisting (Milestone/Genetec), atau REST API khusus</td>
            <td><span class="badge badge-amber">DIREKOMENDASIKAN</span></td>
          </tr>
          <tr>
            <td><strong>Skema Pengadaan & Target</strong></td>
            <td>Pilihan skema (PoC 14-30 hari / CAPEX Beli Putus / OPEX Managed Service), estimasi jadwal tender</td>
            <td><span class="badge badge-purple">OPSIONAL</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Contact & Verification Banner -->
    <div class="contact-banner">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:4px;">
        <div>
          <div style="font-size:9.5px; font-weight:800; color:#FFFFFF;">Hubungi Technical Sales Desk & Network Operations Center (NOC)</div>
          <div style="font-size:7px; color:#94A3B8;">PT Maudy Network Komunikasi (Maudy Network Nusantara) &bull; Terdaftar Resmi di Kemenkumham RI</div>
        </div>
        <span class="badge badge-green">NOC 24/7 SIAGA</span>
      </div>

      <div class="contact-grid">
        <div>
          <div class="contact-item-title">KANTOR PUSAT & LAB</div>
          <div class="contact-item-val">Semarang, Jawa Tengah</div>
          <div style="font-size:6.8px; color:#94A3B8; margin-top:1px;">Pusat Rekayasa & Server NOC</div>
        </div>
        <div>
          <div class="contact-item-title">DEPO LAYANAN MARITIM</div>
          <div class="contact-item-val">Surabaya & Jakarta</div>
          <div style="font-size:6.8px; color:#94A3B8; margin-top:1px;">Dermaga Perak & Tanjung Priok</div>
        </div>
        <div>
          <div class="contact-item-title">HOTLINE NOC & WHATSAPP</div>
          <div class="contact-item-val">+62 857-2748-7507</div>
          <div style="font-size:6.8px; color:#94A3B8; margin-top:1px;">admin@maudy.net.id</div>
        </div>
        <div>
          <div class="contact-item-title">PORTAL RESMI & VERIFIKASI</div>
          <div class="contact-item-val">https://maudy.net.id</div>
          <div style="font-size:6.8px; color:#94A3B8; margin-top:1px;">NIB: 0220205831962 &bull; PKP</div>
        </div>
      </div>
    </div>

    <!-- Official Seal & Sign-Off -->
    <div class="seal-box">
      <div style="font-size:7px; color:#475569; line-height:1.3;">
        <strong>VERIFIKASI RESMI DOKUMEN TENDER DENGAN INTEGRITAS TINGGI</strong><br>
        Hak Cipta &copy; 2026 PT Maudy Network Komunikasi. Seluruh hak cipta dilindungi undang-undang.<br>
        Dokumen ini diterbitkan secara sah dan dilindungi oleh Perjanjian Kerahasiaan (Non-Disclosure Agreement).
      </div>
      <div style="text-align:right;">
        <div style="font-size:7.2px; font-weight:800; color:#0F172A;">TIM KOMERSIAL & DIREKTORAT TEKNOLOGI</div>
        <div style="font-size:6.8px; color:#0071E3; font-family:'Space Grotesk', monospace; font-weight:700;">PT MAUDY NETWORK KOMUNIKASI</div>
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
