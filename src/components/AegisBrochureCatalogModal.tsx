import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Ship, 
  Cpu, 
  Shield, 
  CheckCircle2, 
  Send, 
  Search, 
  ExternalLink,
  Layers,
  Activity,
  Award,
  BookOpen,
  Lock,
  ChevronRight,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { PRODUCTS, type ProductItem } from '../data/aegisData';

interface AegisBrochureCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo?: (productName?: string) => void;
}

export const AegisBrochureCatalogModal: React.FC<AegisBrochureCatalogModalProps> = ({
  isOpen,
  onClose,
  onOpenDemo
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
    const text = encodeURIComponent(
      `Halo PT Maudy Network Nusantara, saya tertarik dengan Katalog Spesifikasi: "${catalogTitle}". Mohon kirimkan dokumen RFP dan penawaran teknis resmi.`
    );
    window.open(`https://wa.me/6285727487507?text=${text}`, '_blank');
  };

  // Filtered products for catalog
  const catalogSections = [
    {
      id: 'maritime',
      code: 'CAT-MARITIME-01',
      title: 'Katalog Solusi Jaringan Maritim & Satelit Kapal',
      subtitle: 'Aegis Maritime Intelligence, Hybrid VSAT / Starlink & IMO Compliance',
      badge: 'FLAGSHIP SECTOR',
      color: '#0071E3',
      products: PRODUCTS.filter(p => p.id === 'aegis-maritime' || p.id === 'fleet-telematics' || p.category === 'industry'),
      specs: [
        { label: 'Konektivitas Satelit', value: 'Hybrid Ku/Ka-Band GEO + LEO Starlink Maritime with sub-second failover' },
        { label: 'Kepatuhan Regulasi', value: 'IMO Resolution MSC.428(98), IACS UR E26/E27, SOLAS & MARPOL Ready' },
        { label: 'Offline Autonomy', value: '100% Private Onboard Server (tetap beroperasi penuh saat kapal hilang sinyal)' },
        { label: 'Jangkauan Operasi', value: 'Perairan Selat Malaka, ALKI I/II/III, Laut Natuna Utara, dan Samudera Pasifik' }
      ]
    },
    {
      id: 'vision',
      code: 'CAT-VISION-02',
      title: 'Katalog CCTV Cerdas & Pengawasan Industri XTUR',
      subtitle: 'Edge AI Vision, ANPR Plat Nomor 99.2% & Dual Thermal Sensing',
      badge: 'INDUSTRIAL SURVEILLANCE',
      color: '#2997FF',
      products: PRODUCTS.filter(p => p.id === 'industrial-vision' || p.id === 'predictive-maintenance' || p.id === 'construction-twin'),
      specs: [
        { label: 'Akurasi ANPR/E-TLE', value: '99.2% pada kecepatan kendaraan hingga 120 km/jam siang dan malam' },
        { label: 'Deteksi Intrusi', value: 'Perimeter Virtual Fence < 150ms real-time audio/visual alert trigger' },
        { label: 'Sensor Termal', value: 'Dual-Spectrum thermal camera (-20°C s/d 550°C) deteksi dini titik panas api' },
        { label: 'Protokol Integrasi', value: 'ONVIF Profile S/G/T, RTSP, MQTT, Webhook REST API ke VMS/ERP eksisting' }
      ]
    },
    {
      id: 'enterprise',
      code: 'CAT-DOC-03',
      title: 'Katalog Dokumen Cerdas, Procurement & Enterprise LLM',
      subtitle: 'AI Document Intelligence, Smart Vendor Analytics & RAG Semantic Search',
      badge: 'ENTERPRISE AUTOMATION',
      color: '#6366F1',
      products: PRODUCTS.filter(p => p.id === 'ai-doc-intel' || p.id === 'smart-procurement' || p.id === 'bi-analytics' || p.id === 'compliance-guard'),
      specs: [
        { label: 'Pemrosesan Dokumen', value: 'OCR Multi-bahasa (ID/EN/Mandarin/Arabic) dengan preservasi tabel kompleks' },
        { label: 'Pencarian Semantik', value: 'Vector Embedding RAG (Retrieval-Augmented Generation) berbasis dokumen lokal' },
        { label: 'Analisis Kontrak', value: 'Deteksi klausul penalti, masa retensi, resiko wanprestasi tender otomatis' },
        { label: 'Audit Trail', value: 'Immutable cryptographic access log memenuhi ISO 27001 & UU Perlindungan Data Pribadi' }
      ]
    },
    {
      id: 'cyber',
      code: 'CAT-CYBER-04',
      title: 'Katalog Keamanan Siber Sovereign & Zero-Trust Architecture',
      subtitle: 'Aegis Cyber Shield, Private Air-Gapped AI & Incident Response',
      badge: 'MISSION-CRITICAL SECURITY',
      color: '#10B981',
      products: PRODUCTS.filter(p => p.id === 'cyber-shield' || p.id === 'private-ai'),
      specs: [
        { label: 'Arsitektur Isolasi', value: 'Air-Gapped Private On-Premise GPU Cluster (Zero Data Egress / Outbound)' },
        { label: 'Proteksi Ransomware', value: 'Micro-segmentation otomatis isolasi endpoint terinfeksi dalam waktu < 200ms' },
        { label: 'Standar Enkripsi', value: 'FIPS 140-2 Level 3, AES-256-GCM, TLS 1.3 dengan HSM Hardware Key Storage' },
        { label: 'SLA NOC 24/7', value: '99.98% High Availability Uptime dengan garansi respon insiden < 15 menit' }
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
        c.products.some(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
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
                <span className="text-xs font-bold text-white">E-Katalog & Brosur Resmi Spesifikasi Teknis</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0071E3]/20 text-[#2997FF] border border-[#2997FF]/30 font-mono">
                  Edisi 2026/Q4
                </span>
              </div>
              <p className="text-[10px] text-white/60">PT Maudy Network Nusantara • Aegis Enterprise AI Suite</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              title="Cetak atau Simpan sebagai PDF"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium transition-all cursor-pointer border border-white/[0.1]"
            >
              <Printer className="w-3.5 h-3.5 text-[#2997FF]" />
              <span>Cetak / PDF</span>
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
              { id: 'all', label: 'Semua Katalog (12 Solusi)' },
              { id: 'maritime', label: '🚢 Maritim & VSAT' },
              { id: 'vision', label: '👁️ XTUR CCTV AI' },
              { id: 'enterprise', label: '🏢 Dokumen & Procurement' },
              { id: 'cyber', label: '🛡️ Sovereign Cyber AI' },
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
              placeholder="Cari spesifikasi produk..."
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
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 flex-1 print:overflow-visible print:p-0 print:space-y-6">
          
          {/* OFFICIAL COVER / HEADER SHEET */}
          <div className="border-b border-white/[0.1] pb-8 print:border-black print:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono tracking-widest text-[#2997FF] uppercase font-bold print:text-blue-700">
                    DOKUMEN SPESIFIKASI TEKNIK RESMI
                  </span>
                  <span className="text-white/40 print:text-gray-400">•</span>
                  <span className="text-[11px] font-mono text-white/60 print:text-gray-600">
                    REF: MNK-AEGIS-SPEC-2026/V4
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                  Katalog Portofolio &amp; Brosur Solusi Aegis AI Suite
                </h1>
                <p className="text-sm text-white/70 print:text-gray-700 max-w-2xl font-light">
                  PT Maudy Network Nusantara — Penyedia Resmi Infrastruktur Telekomunikasi Kritis, Satelit Maritim, CCTV Edge AI XTUR, dan Sovereign Artificial Intelligence.
                </p>
              </div>

              {/* Legal Badges */}
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-right space-y-1 print:border-gray-300 print:bg-gray-50">
                <div className="text-[10px] font-mono text-emerald-400 font-bold print:text-emerald-700">
                  ISO 9001:2015 &bull; ISO 27001:2022
                </div>
                <div className="text-[10px] text-white/60 print:text-gray-600">
                  Izin Jastel Kominfo RI
                </div>
                <div className="text-[10px] text-white/60 print:text-gray-600">
                  Hotline NOC 24/7: +62 857-2748-7507
                </div>
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
                  <span>Minta Penawaran B2B</span>
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
                {catalog.products.map((prod) => (
                  <div 
                    key={prod.id}
                    className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all print:border-gray-300 print:bg-white space-y-3.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-white print:text-black">
                          {prod.name}
                        </h3>
                        <p className="text-[11px] text-[#2997FF] print:text-blue-700 font-medium">
                          {prod.tagline}
                        </p>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-white/70 print:text-gray-600 uppercase">
                        {prod.category}
                      </span>
                    </div>

                    <p className="text-xs text-white/70 print:text-gray-700 leading-relaxed font-light">
                      {prod.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] font-mono text-white/50 print:text-gray-500 uppercase">
                        Spesifikasi Utama:
                      </div>
                      <div className="grid grid-cols-1 gap-1 text-[11px]">
                        {prod.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-1.5 text-white/80 print:text-gray-800">
                            <CheckCircle2 className="w-3 h-3 text-[#2997FF] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics / Impact Bar */}
                    {prod.metrics && prod.metrics.length > 0 && (
                      <div className="pt-2 border-t border-white/[0.06] print:border-gray-200 flex items-center justify-between text-xs">
                        {prod.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="text-[10px] text-white/50 print:text-gray-500">{m.label}</div>
                            <div className="font-bold text-[#2997FF] print:text-blue-800">{m.value}</div>
                          </div>
                        ))}
                        {onOpenDemo && (
                          <button
                            onClick={() => {
                              onClose();
                              onOpenDemo(prod.name);
                            }}
                            className="text-[11px] font-medium text-white hover:text-[#2997FF] print:hidden cursor-pointer flex items-center space-x-1"
                          >
                            <span>Demo</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* TABLE OF COMPARISON & IMPLEMENTATION SCHEMES */}
          <div className="space-y-4 pt-4 border-b border-white/[0.08] pb-10 print:border-gray-300 print:pb-8">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white print:text-black">
                Matriks Skema Implementasi &amp; Pengadaan B2B
              </h2>
              <p className="text-xs text-white/60 print:text-gray-600">
                Pilihan fleksibel skema pengadaan untuk korporasi, BUMN, perkapalan maritim, dan instansi kementerian:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-white/80 print:text-black border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.12] bg-white/[0.04] print:bg-gray-100 print:border-gray-400">
                    <th className="p-3 font-semibold">Skema Pengadaan</th>
                    <th className="p-3 font-semibold">Infrastruktur Hardware</th>
                    <th className="p-3 font-semibold">Lisensi Software</th>
                    <th className="p-3 font-semibold">Dukungan SLA &amp; NOC</th>
                    <th className="p-3 font-semibold">Cocok Untuk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] print:divide-gray-200">
                  <tr>
                    <td className="p-3 font-bold text-white print:text-black">1. Proof of Concept (PoC)</td>
                    <td className="p-3">Perangkat Uji Coba Disediakan</td>
                    <td className="p-3">Full Feature 14-30 Hari</td>
                    <td className="p-3">Dedicated Technical Engineer</td>
                    <td className="p-3">Evaluasi awal kelayakan proyek</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white print:text-black">2. CAPEX (Perpetual License)</td>
                    <td className="p-3">Hak Milik Penuh Client</td>
                    <td className="p-3">One-time Perpetual License</td>
                    <td className="p-3">Garansi 1-3 Tahun + Onsite Care</td>
                    <td className="p-3">BUMN, Militer &amp; Tender APBN</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-white print:text-black">3. OPEX / Managed Service</td>
                    <td className="p-3">Sewa Perangkat Terpadu</td>
                    <td className="p-3">Subscription Bulanan/Tahunan</td>
                    <td className="p-3">SLA 99.98% 24/7 Replacement</td>
                    <td className="p-3">Armada Kapal Laut &amp; Swasta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* OFFICIAL FOOTER & CONTACT CONFIRMATION */}
          <div className="pt-2 space-y-4 text-xs text-white/70 print:text-black">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0071E3]/20 via-[#101422] to-[#2997FF]/10 border border-white/[0.08] print:border-gray-400 print:bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white print:text-black text-sm">
                  Ingin Mendapatkan Proposal Penawaran atau Menjadwalkan PoC?
                </h3>
                <p className="text-[11px] text-white/60 print:text-gray-600 mt-0.5">
                  Hubungi langsung Technical Director &amp; Commercial Desk PT Maudy Network Nusantara.
                </p>
              </div>

              <div className="flex items-center space-x-2.5 print:hidden">
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
                  <span>Chat WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="text-[10px] text-white/40 print:text-gray-500 text-center pt-2">
              Hak Cipta &copy; 2026 PT. Maudy Network Komunikasi (Maudy Network Nusantara). Seluruh Hak Dilindungi. Dokumen ini disiapkan untuk presentasi komersial resmi.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
