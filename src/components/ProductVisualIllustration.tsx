import React from 'react';
import type { ProductItem } from '../data/aegisData';
import { 
  FileText, Search, Shield, HardHat, Wrench, Ship, 
  Trash2, Truck, Activity, CheckSquare, BarChart2, Cpu, 
  Sparkles, Lock, ArrowUpRight, CheckCircle2, Radar, 
  Radio, Compass, Gauge, AlertTriangle, Layers, Database
} from 'lucide-react';

interface Props {
  product: ProductItem;
  className?: string;
}

export const ProductVisualIllustration: React.FC<Props> = ({ product, className = '' }) => {
  // 1. High-Res Photographic Visuals with Apple-grade HUD Telemetry Overlays
  if (product.visualImage) {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0A0E] group shadow-xl ${className}`}>
        <img 
          src={product.visualImage} 
          alt={product.name} 
          className="w-full h-52 sm:h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

        {/* Dynamic HUD Overlays based on product type */}
        {product.id === 'aegis-maritime' && (
          <>
            {/* Top Bar HUD */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
              <span className="backdrop-blur-md bg-black/60 border border-white/[0.12] px-2.5 py-1 rounded-full text-emerald-400 flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                VSAT EDGE HYBRID • OFFLINE READY
              </span>
              <span className="backdrop-blur-md bg-black/60 border border-white/[0.12] px-2.5 py-1 rounded-full text-[#2997FF] flex items-center gap-1 shadow-lg">
                <Compass className="w-3 h-3 text-[#2997FF]" />
                01°14.32&apos; N, 103°55.18&apos; E (SELAT MALAKA)
              </span>
            </div>

            {/* Bottom Telemetry Glass Dock */}
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-xl bg-black/75 p-2.5 rounded-xl border border-white/[0.14] font-mono text-[10px] shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[8px] block text-[#86868B]">VESSEL SPEED</span>
                  <span className="text-white font-semibold">14.8 KTS</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div>
                  <span className="text-[8px] block text-[#86868B]">MAIN ENGINE LOAD</span>
                  <span className="text-emerald-400 font-semibold">74% RPM</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div>
                  <span className="text-[8px] block text-[#86868B]">BUNKER FOC</span>
                  <span className="text-[#2997FF] font-semibold">-12.4% OPTIMIZED</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-slate-200 text-[9px] bg-white/[0.08] px-2 py-1 rounded-lg">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>SOLAS / MARPOL VERIFIED</span>
              </div>
            </div>
          </>
        )}

        {product.id === 'factory-twin-ai' && (
          <>
            {/* Top Bar HUD */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
              <span className="backdrop-blur-md bg-black/60 border border-white/[0.12] px-2.5 py-1 rounded-full text-[#2997FF] flex items-center gap-1.5 shadow-lg">
                <Activity className="w-3 h-3 text-[#2997FF]" />
                3D ROBOTIC DIGITAL TWIN • SCADA STREAM
              </span>
              <span className="backdrop-blur-md bg-black/60 border border-white/[0.12] px-2.5 py-1 rounded-full text-emerald-400 flex items-center gap-1 shadow-lg">
                LATENSI &lt; 42ms
              </span>
            </div>

            {/* Bottom Telemetry Glass Dock */}
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-xl bg-black/75 p-2.5 rounded-xl border border-white/[0.14] font-mono text-[10px] shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[8px] block text-[#86868B]">OEE SCORE</span>
                  <span className="text-emerald-400 font-semibold">91.4% (WORLD-CLASS)</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div>
                  <span className="text-[8px] block text-[#86868B]">LINE 3 THROUGHPUT</span>
                  <span className="text-white font-semibold">1.420 UNIT/JAM</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div>
                  <span className="text-[8px] block text-[#86868B]">BOTTLENECK RISK</span>
                  <span className="text-[#2997FF] font-semibold">0.0% CLEARED</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-slate-200 text-[9px] bg-white/[0.08] px-2 py-1 rounded-lg">
                <Sparkles className="w-3 h-3 text-[#2997FF]" />
                <span>AI WHAT-IF READY</span>
              </div>
            </div>
          </>
        )}

        {product.id === 'aegis-private-ai' && (
          <>
            {/* Top Bar HUD */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none">
              <span className="backdrop-blur-md bg-black/60 border border-white/[0.12] px-2.5 py-1 rounded-full text-emerald-400 flex items-center gap-1.5 shadow-lg">
                <Lock className="w-3 h-3 text-emerald-400" />
                AIR-GAPPED PERIMETER • ZERO EXTERNAL LEAK
              </span>
              <span className="backdrop-blur-md bg-black/60 border border-white/[0.12] px-2.5 py-1 rounded-full text-[#2997FF] shadow-lg">
                FIPS 140-2 LEVEL 3 HSM
              </span>
            </div>

            {/* Bottom Telemetry Glass Dock */}
            <div className="absolute bottom-3 left-3 right-3 backdrop-blur-xl bg-black/75 p-2.5 rounded-xl border border-white/[0.14] font-mono text-[10px] shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-[8px] block text-[#86868B]">H100 GPU CLUSTER</span>
                  <span className="text-white font-semibold">88% UTILIZATION</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div>
                  <span className="text-[8px] block text-[#86868B]">LOCAL INFERENCE</span>
                  <span className="text-emerald-400 font-semibold">1.450 TOK/DETIK</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div>
                  <span className="text-[8px] block text-[#86868B]">PRIVATE RAG VECTORS</span>
                  <span className="text-[#2997FF] font-semibold">10M EMBEDDINGS</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-slate-200 text-[9px] bg-white/[0.08] px-2 py-1 rounded-lg">
                <Cpu className="w-3 h-3 text-[#2997FF]" />
                <span>SELF-HOSTED LLM</span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // 2. Tailored Apple-Grade High-Fidelity Vector Artworks for the other 9 products
  return (
    <div className={`relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/[0.12] bg-gradient-to-b from-[#121218] via-[#0B0B0F] to-[#050508] p-4 flex flex-col justify-between select-none shadow-2xl ${className}`}>
      
      {/* Background Precision Coordinate Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`pat-${product.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.5" />
            <circle cx="12" cy="12" r="0.75" fill="rgba(41, 151, 255, 0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pat-${product.id})`} />
      </svg>

      {/* Subtle Radial Glow in Center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-36 rounded-full blur-[80px] pointer-events-none opacity-25"
        style={{ background: 'radial-gradient(circle, #0071E3 0%, #2997FF 40%, transparent 80%)' }}
      />

      {/* ----------------------------------------------------------------------------------- */}
      {/* 1. CONSTRUCT AI: 3D Isometric BIM Blueprint & Curva-S Trajectory */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'construction' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <HardHat className="w-3 h-3 text-[#2997FF]" />
              BIM 3D STRUCTURAL BLUEPRINT • CAD MODEL
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Curva-S 82.4% (+2.3% Ahead)
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center gap-4 py-1">
            {/* Isometric Tower Wireframe */}
            <div className="w-36 h-28 border border-[#2997FF]/50 rounded-xl relative transform -rotate-6 shadow-[0_0_30px_rgba(41,151,255,0.2)] bg-blue-950/25 p-2 flex flex-col justify-between font-mono text-[8px] text-[#A1A1A6]">
              <div className="flex justify-between border-b border-[#2997FF]/40 pb-1 text-[9px]">
                <span className="text-[#2997FF] font-semibold">TOWER B - LVL 42</span>
                <span className="text-emerald-400">PASSED QC</span>
              </div>
              
              {/* Floor Layers Wireframe */}
              <div className="space-y-1 py-1">
                {[
                  { lvl: 'LVL 42 (ROOF SLAB)', progress: '100%', color: 'bg-emerald-400' },
                  { lvl: 'LVL 41 (MEP DUCT)', progress: '94%', color: 'bg-[#2997FF]' },
                  { lvl: 'LVL 40 (FACADE GLASS)', progress: '88%', color: 'bg-[#2997FF]' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[7.5px] bg-white/[0.04] px-1.5 py-0.5 rounded">
                    <span>{item.lvl}</span>
                    <span className="text-white font-semibold">{item.progress}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between text-[7px] text-[#86868B] border-t border-white/[0.08] pt-1">
                <span>ELEV: +142.5M</span>
                <span>ZONA 02 CORNER</span>
              </div>
            </div>

            {/* Curva-S Trajectory Visual Graph */}
            <div className="w-40 h-28 rounded-xl border border-white/[0.12] bg-[#14141A]/90 p-2 font-mono flex flex-col justify-between">
              <div className="flex justify-between text-[8px] text-[#86868B] pb-1 border-b border-white/[0.06]">
                <span>CURVA-S MONITORING</span>
                <span className="text-[#2997FF]">REALISASI</span>
              </div>
              {/* SVG Curva-S Path */}
              <svg className="w-full h-14" viewBox="0 0 120 45">
                {/* Master Plan Line (Grey Dashed) */}
                <path d="M 0 40 Q 40 38, 70 20 T 120 5" fill="none" stroke="rgba(255,255,255,0.25)" strokeDasharray="2,2" strokeWidth="1.5" />
                {/* Actual Realization (Glowing Cyan Solid) */}
                <path d="M 0 40 Q 40 34, 70 16 T 105 8" fill="none" stroke="#2997FF" strokeWidth="2.5" />
                {/* Current Marker */}
                <circle cx="105" cy="8" r="3.5" fill="#2997FF" className="animate-ping" />
                <circle cx="105" cy="8" r="2.5" fill="#FFFFFF" />
              </svg>
              <div className="flex justify-between text-[7.5px] text-[#A1A1A6]">
                <span>M-01</span>
                <span className="text-emerald-400 font-semibold">KEMUDAHAN DEV: 0</span>
                <span>M-24</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>BOQ Terpasang: 4.120 m³ Beton K-350</span>
            <span className="text-white font-medium">Akurasi CAD 99.8%</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 2. AI DOCUMENT INTELLIGENCE: Holographic Laser Scan & Entity Extraction */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'document' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <FileText className="w-3 h-3 text-[#2997FF]" />
              MULTIMODAL OCR • RAG SEMANTIC PARSER
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Confidence 99.4%
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center py-1">
            <div className="w-64 h-28 rounded-xl border border-white/[0.14] bg-[#14141C]/95 p-3 shadow-2xl relative overflow-hidden font-mono text-[9px]">
              
              {/* Dynamic Animated Laser Scanline */}
              <div 
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2997FF] to-transparent shadow-[0_0_15px_#2997FF] animate-scanline pointer-events-none"
              />

              {/* Document Mockup Header */}
              <div className="flex justify-between items-center text-[#86868B] pb-1.5 border-b border-white/[0.08] text-[8px]">
                <span className="text-white font-semibold">PERJANJIAN_KONTRAK_EPC_2026.PDF</span>
                <span className="text-[#2997FF] animate-pulse">EXTRACTING...</span>
              </div>

              {/* Extracted Entity Tags */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between bg-white/[0.04] p-1 rounded border border-white/[0.06]">
                  <span className="text-[#86868B] text-[8px]">KLAUSUL 14.2:</span>
                  <span className="text-emerald-400 text-[8.5px] font-semibold">ARBITRASE SIAC (LOW RISK)</span>
                </div>
                <div className="flex items-center justify-between bg-white/[0.04] p-1 rounded border border-white/[0.06]">
                  <span className="text-[#86868B] text-[8px]">NILAI KONTRAK:</span>
                  <span className="text-white text-[8.5px] font-semibold">Rp 45.800.000.000 (NETT)</span>
                </div>
                <div className="flex items-center justify-between bg-white/[0.04] p-1 rounded border border-white/[0.06]">
                  <span className="text-[#86868B] text-[8px]">MASA RETENSI:</span>
                  <span className="text-[#2997FF] text-[8.5px]">365 HARI KALENDER</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>24.810 Halaman Terindeks</span>
            <span className="text-white font-medium">Ekstraksi Klausul &lt; 1.2 Detik</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 3. PROCURE AI: RFQ Radar Sweeper & Matrix Vendor Scoring */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'procurement' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <Radar className="w-3 h-3 text-[#2997FF]" />
              VENDOR QUOTATION OCR • RFQ RADAR
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              12 Penawaran Terbandingkan
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center gap-3 py-1">
            {/* Animated Radar Sweeper Graphic */}
            <div className="relative w-24 h-24 rounded-full border border-[#2997FF]/30 bg-blue-950/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-2 rounded-full border border-[#2997FF]/20"></div>
              <div className="absolute inset-5 rounded-full border border-[#2997FF]/20"></div>
              {/* Radar Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-[#2997FF]/20"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-px bg-[#2997FF]/20"></div>
              </div>
              {/* Rotating Radar Sweep Cone */}
              <div 
                className="absolute inset-0 origin-center animate-radarSweep"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(41, 151, 255, 0.4) 0deg, transparent 60deg)'
                }}
              />
              {/* Target Vendor Blip */}
              <div className="absolute top-6 right-7 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              <div className="absolute top-6 right-7 w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              <span className="relative z-10 text-[8px] font-mono text-[#2997FF] font-bold">RFQ LIVE</span>
            </div>

            {/* Vendor Comparative Matrix Card */}
            <div className="w-48 p-2 rounded-xl border border-white/[0.12] bg-[#14141A]/95 font-mono text-[8.5px] space-y-1.5 shadow-xl">
              <div className="flex justify-between items-center border-b border-white/[0.08] pb-1">
                <span className="text-white font-semibold text-[9px]">PT Mega Logistik</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded text-[8px]">
                  SKOR 94 (TERBAIK)
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[#A1A1A6] text-[8px]">
                <div>
                  <span className="text-[7px] text-[#86868B] block">HARGA</span>
                  <span className="text-white font-semibold">Rp 840jt</span>
                </div>
                <div>
                  <span className="text-[7px] text-[#86868B] block">LEAD TIME</span>
                  <span className="text-emerald-400 font-semibold">14 Hari</span>
                </div>
                <div>
                  <span className="text-[7px] text-[#86868B] block">TERMIN</span>
                  <span className="text-white">TOP 45</span>
                </div>
              </div>
              <div className="text-[7.5px] text-[#86868B] pt-0.5 flex items-center justify-between">
                <span>Deviasi OE: -18.4%</span>
                <span className="text-emerald-400 font-medium">PO Terbit Otomatis</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>Audit Trail Negosiasi 100% Tercatat</span>
            <span className="text-white font-medium">Hemat 85% Jam Evaluasi</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 4. MAINTENANCE AI: Acoustic Waveform & Vibration Telemetry */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'maintenance' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <Wrench className="w-3 h-3 text-[#2997FF]" />
              ISO 10816 VIBRATION SPECTRUM • MTBF AI
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Bearing Health 98.6%
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center gap-3 py-1">
            {/* Frequency Spectrum Visualizer */}
            <div className="w-44 h-24 rounded-xl border border-white/[0.12] bg-[#121218]/95 p-2 flex flex-col justify-between font-mono">
              <div className="flex justify-between text-[8px] text-[#86868B] border-b border-white/[0.06] pb-1">
                <span>FFT SPECTRUM ANALYZER</span>
                <span className="text-emerald-400">1.2 kHz NORMAL</span>
              </div>

              {/* Dynamic Sine Wave SVG */}
              <svg className="w-full h-10" viewBox="0 0 160 30">
                <path 
                  d="M 0 15 Q 20 2, 40 15 T 80 15 T 120 15 T 160 15" 
                  fill="none" 
                  stroke="rgba(41, 151, 255, 0.3)" 
                  strokeWidth="1.5" 
                />
                <path 
                  d="M 0 15 Q 15 5, 30 15 T 60 15 T 75 3 T 90 27 T 110 15 T 160 15" 
                  fill="none" 
                  stroke="#2997FF" 
                  strokeWidth="2" 
                />
              </svg>

              <div className="flex justify-between text-[7.5px] text-[#A1A1A6]">
                <span>VIB: 1.8 mm/s RMS</span>
                <span className="text-white">TEMP: 52°C</span>
                <span className="text-emerald-400">ZONA A</span>
              </div>
            </div>

            {/* Industrial Bearing Diagram */}
            <div className="w-28 h-24 rounded-xl border border-white/[0.12] bg-[#14141C]/95 p-2 font-mono flex flex-col justify-between items-center text-center">
              <span className="text-[7.5px] text-[#86868B]">KOMPRESOR UTAMA</span>
              <div className="w-12 h-12 rounded-full border-2 border-[#2997FF]/60 flex items-center justify-center relative">
                <div className="w-8 h-8 rounded-full border border-dashed border-emerald-400 animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="w-3 h-3 rounded-full bg-[#2997FF]"></div>
              </div>
              <span className="text-[8px] text-emerald-400 font-semibold">MTBF &gt; 180 HARI</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>Suku Cadang Seal #B-204 Siap di Gudang</span>
            <span className="text-white font-medium">Prediksi Dini Sebelum Failure</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 5. AEGIS CYBER AI: SOC Threat Shield Matrix & Packet Stream */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'cyber' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-[#2997FF]" />
              AUTONOMOUS SOC THREAT GUARD • ZERO TRUST
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Zero Critical Breach
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center gap-3 py-1">
            {/* Holographic Security Shield Graphic */}
            <div className="relative w-20 h-24 rounded-xl border border-[#2997FF]/40 bg-blue-950/20 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(41,151,255,0.2)]">
              <Shield className="w-8 h-8 text-[#2997FF] mb-1" />
              <span className="text-[8px] font-mono text-emerald-400 font-bold">DEFCON-1</span>
              <span className="text-[7px] font-mono text-[#86868B]">100% SECURE</span>
            </div>

            {/* Live Packet Defense Stream */}
            <div className="w-52 p-2 rounded-xl border border-white/[0.12] bg-[#14141C]/95 font-mono text-[8px] space-y-1 shadow-xl">
              <div className="flex justify-between items-center text-[#2997FF] border-b border-white/[0.08] pb-1">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  THREAT CONTAINMENT
                </span>
                <span className="text-emerald-400">ACTIVE</span>
              </div>
              <div className="text-rose-400/90 text-[7.5px] bg-rose-950/30 px-1 py-0.5 rounded border border-rose-800/40">
                [BLOCKED] 312 Anomali Brute-Force IP 185.220.x
              </div>
              <div className="text-amber-300/90 text-[7.5px] bg-amber-950/30 px-1 py-0.5 rounded border border-amber-800/40">
                [ISOLATED] Lateral Host 10.24.12.85 Quarantined
              </div>
              <div className="text-[#86868B] text-[7.5px]">
                Endpoint Telemetry Latency: 140ms • SHA-256 Verified
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>48.290 Events/Detik Termonitor</span>
            <span className="text-white font-medium">Audit Log Tersandi Imutabel</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 6. SMART WASTE AI: Urban GIS Map & Dynamic Route */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'waste' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <Trash2 className="w-3 h-3 text-[#2997FF]" />
              DYNAMIC URBAN FLEET GIS • IOT SENSORS
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Rute Teroptimasi (-22% BBM)
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center gap-3 py-1">
            {/* GIS City Grid Graphic */}
            <div className="w-40 h-24 rounded-xl border border-white/[0.12] bg-[#121218]/95 p-2 relative overflow-hidden font-mono flex flex-col justify-between">
              <div className="text-[8px] text-[#86868B] border-b border-white/[0.06] pb-1 flex justify-between">
                <span>GIS ROUTE TRAJECTORY</span>
                <span className="text-[#2997FF]">SEKTOR 04</span>
              </div>
              
              {/* Route Waypoints */}
              <div className="relative h-10 flex items-center justify-between px-2">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span className="text-[7px] text-[#A1A1A6] mt-0.5">DEPOT</span>
                </div>
                <div className="flex-1 h-0.5 bg-dashed border-t border-dashed border-[#2997FF]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping absolute"></div>
                  <div className="w-3 h-3 rounded-full bg-rose-500 relative flex items-center justify-center text-[7px] text-white font-bold">!</div>
                  <span className="text-[7px] text-rose-400 font-semibold mt-0.5">BIN 88%</span>
                </div>
                <div className="flex-1 h-0.5 bg-dashed border-t border-dashed border-[#2997FF]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2997FF]"></div>
                  <span className="text-[7px] text-[#A1A1A6] mt-0.5">TPA</span>
                </div>
              </div>

              <div className="flex justify-between text-[7.5px] text-[#86868B]">
                <span>Truk #12 En Route</span>
                <span className="text-emerald-400 font-semibold">Pickup: 14 Mnt</span>
              </div>
            </div>

            {/* Metric KPI Card */}
            <div className="w-32 h-24 rounded-xl border border-white/[0.12] bg-[#14141C]/95 p-2 font-mono flex flex-col justify-between text-center">
              <div>
                <span className="text-amber-400 font-bold block text-base">48</span>
                <span className="text-[7.5px] text-[#86868B]">BIN &gt;80% PENUH</span>
              </div>
              <div className="border-t border-white/[0.08] pt-1">
                <span className="text-emerald-400 font-bold block text-sm">-4.2 TON</span>
                <span className="text-[7.5px] text-[#86868B]">EMISI CO2/BLN</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>32 Armada Truk Terkoordinasi</span>
            <span className="text-white font-medium">ESG Environmental Reporting</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 7. FLEETOS AI: Heavy Fleet Telemetry & Cockpit Instrument */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'fleet' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <Truck className="w-3 h-3 text-[#2997FF]" />
              CANBUS HEAVY FLEET TELEMETRY • OBD-II
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              140 Truk Aktif Live
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center gap-3 py-1">
            {/* Speed & Gauge Telemetry */}
            <div className="w-40 h-24 rounded-xl border border-white/[0.12] bg-[#14141A]/95 p-2 font-mono flex flex-col justify-between">
              <div className="flex justify-between items-center text-[#86868B] text-[8px] border-b border-white/[0.06] pb-1">
                <span className="text-white font-semibold">TRUK B-9021-XYZ</span>
                <span className="text-emerald-400">ON ROUTE</span>
              </div>
              <div className="flex items-center justify-around py-1">
                <div className="text-center">
                  <span className="text-base font-bold text-white block">84</span>
                  <span className="text-[7.5px] text-[#86868B]">KM/H SPEED</span>
                </div>
                <div className="h-6 w-px bg-white/[0.1]"></div>
                <div className="text-center">
                  <span className="text-base font-bold text-[#2997FF] block">3.1</span>
                  <span className="text-[7.5px] text-[#86868B]">KM/L BBM</span>
                </div>
              </div>
              <div className="text-[7.5px] text-[#86868B] flex justify-between">
                <span>KORIDOR TRANS-JAWA</span>
                <span className="text-emerald-400">ZERO BBM LEAK</span>
              </div>
            </div>

            {/* Driver Behavior & Engine Status Card */}
            <div className="w-36 h-24 rounded-xl border border-white/[0.12] bg-[#14141C]/95 p-2 font-mono flex flex-col justify-between">
              <div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-[#86868B]">DRIVER SCORE</span>
                  <span className="text-emerald-400 font-bold">96/100</span>
                </div>
                <div className="w-full bg-white/[0.08] h-1.5 rounded-full mt-1 overflow-hidden">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              <div className="space-y-1 text-[7.5px] text-[#A1A1A6] border-t border-white/[0.06] pt-1">
                <div className="flex justify-between">
                  <span>TEKANAN OLI:</span>
                  <span className="text-white">42 PSI (NORMAL)</span>
                </div>
                <div className="flex justify-between">
                  <span>SUHU ENGINE:</span>
                  <span className="text-emerald-400">88°C (OPTIMAL)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>Diagnostik OBD-II &amp; Geofencing Real-time</span>
            <span className="text-white font-medium">Jadwal Servis Otomatis</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 8. COMPLY AI: Regulatory Audit Shield Locker */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'comply' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <CheckSquare className="w-3 h-3 text-[#2997FF]" />
              ISO 27001 &amp; UU PDP AUDIT LOCKER
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              100% Klausul Siap
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center py-1">
            <div className="w-64 p-2.5 rounded-xl border border-white/[0.12] bg-[#14141C]/95 font-mono text-[8.5px] space-y-1.5 shadow-xl">
              <div className="flex justify-between items-center text-white border-b border-white/[0.08] pb-1">
                <span className="font-semibold text-[#2997FF] flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#2997FF]" /> TAMPER-PROOF LEDGER
                </span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded text-[8px]">
                  #7F2B-99A1 VERIFIED
                </span>
              </div>
              <div className="space-y-1 text-[#A1A1A6]">
                <div className="flex justify-between items-center bg-white/[0.03] p-1 rounded">
                  <span>[✓] ISO 27001:2022 Klausul 8.1 Data Protection</span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.03] p-1 rounded">
                  <span>[✓] UU PDP Persetujuan Pemrosesan Data</span>
                  <span className="text-emerald-400 font-bold">COMPLIANT</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.03] p-1 rounded">
                  <span>[✓] Sertifikasi SMK3 Kementerian Ketenagakerjaan</span>
                  <span className="text-[#2997FF] font-bold">ACTIVE 2027</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>Audit Trail Terverifikasi BPK / Big-4</span>
            <span className="text-white font-medium">Ekspor 1-Click PDF/Excel</span>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------------------------- */}
      {/* 9. BUSINESS AI: Conversational Natural Language BI Waterfall */}
      {/* ----------------------------------------------------------------------------------- */}
      {product.dashboardType === 'business' && (
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#0071E3]/20 text-[#2997FF] border border-[#0071E3]/35 flex items-center gap-1.5">
              <BarChart2 className="w-3 h-3 text-[#2997FF]" />
              NATURAL LANGUAGE EXECUTIVE BI
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
              Revenue +12.4% MoM
            </span>
          </div>

          <div className="relative my-auto flex items-center justify-center py-1">
            <div className="w-64 p-2.5 rounded-xl border border-white/[0.12] bg-[#14141C]/95 font-mono text-[8.5px] space-y-1.5 shadow-xl">
              <div className="text-[7.5px] text-[#86868B] bg-white/[0.04] p-1 rounded flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#2997FF]" />
                <span>QUERY: &quot;Bagaimana profitabilitas manufaktur Q3?&quot;</span>
              </div>
              <div className="flex justify-between items-center text-white font-bold text-xs pt-0.5">
                <span>Rp 18.4 Miliar</span>
                <span className="text-emerald-400 text-[10px] font-normal">Margin 28.6%</span>
              </div>
              {/* Dynamic Waterfall Bar Chart */}
              <div className="flex items-end gap-1.5 h-8 pt-1">
                {[45, 58, 52, 74, 68, 92, 86].map((v, i) => (
                  <div key={i} className="flex-1 bg-white/[0.06] rounded-t flex items-end">
                    <div 
                      className={`w-full rounded-t ${i === 5 ? 'bg-emerald-400' : 'bg-[#2997FF]'}`} 
                      style={{ height: `${v}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#86868B] border-t border-white/[0.08] pt-2">
            <span>Konektor Database Multi-ERP (SAP, PostgreSQL, BigQuery)</span>
            <span className="text-white font-medium">Insight Sub-Detik</span>
          </div>
        </div>
      )}
    </div>
  );
};
