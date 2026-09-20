import React, { useState } from 'react';
import { 
  FileText, Search, CheckCircle2, AlertTriangle, Cpu, Activity,
  Server, Shield, Truck, Layers, Building, BarChart3, Database,
  Check, RefreshCw
} from 'lucide-react';
import type { ProductItem } from '../data/aegisData';

interface Props {
  product: ProductItem;
  interactive?: boolean;
}

export const DashboardMockupRenderer: React.FC<Props> = ({ product, interactive = false }) => {
  const [queryInput, setQueryInput] = useState<string>('');
  const [simulatedAnswer, setSimulatedAnswer] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleRunQuery = (questionText: string) => {
    setQueryInput(questionText);
    setIsProcessing(true);
    setSimulatedAnswer(null);

    setTimeout(() => {
      setIsProcessing(false);
      if (product.dashboardType === 'document') {
        setSimulatedAnswer('Ditemukan pada Dokumen Kontrak_Addendum_V2.pdf (Hal. 42, Klausul 7.3): Nilai komitmen kontrak tercatat sebesar Rp 148.500.000.000 dengan jadwal termin akhir pada 15 November 2026.');
      } else if (product.dashboardType === 'procurement') {
        setSimulatedAnswer('Evaluasi 3 Penawaran: Vendor A (PT Mega Daya) menawarkan lead time 14 hari kalender dengan harga Rp 840jt. Lebih cepat 12 hari dibanding Vendor B dengan deviasi spesifikasi 0%.');
      } else if (product.dashboardType === 'maritime') {
        setSimulatedAnswer('MV Samudera 08: Riwayat 6 bulan terakhir mencatat 1x pergantian seal injector pada 12 Mei. Vibrasi silinder 4 saat ini pada 2.1 mm/s (Normal: < 2.5 mm/s). Kondisi siap berlayar.');
      } else if (product.dashboardType === 'business') {
        setSimulatedAnswer('Analisis Penjualan Q3: Wilayah Jawa Timur mencatat pertumbuhan +14.2% MoM. Kontributor utama: Segmen B2B Enterprise dengan produk unggulan Kategori Industri A (Margin Kotor 28.4%).');
      } else {
        setSimulatedAnswer(`[Analisis Sistem Terverifikasi]: Parameter operasi terkonfirmasi optimal. Riwayat audit log terenkripsi dan selaras dengan profil kepatuhan industri.`);
      }
    }, 500);
  };

  return (
    <div className="w-full bg-[#0C0C0F] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl text-xs font-sans text-left">
      {/* macOS Style Window Bar */}
      <div className="bg-[#141418]/90 border-b border-white/[0.06] px-3.5 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></div>
          <span className="ml-2 font-mono text-[11px] text-[#86868B] truncate flex items-center gap-1.5">
            aegis://{product.id}.app
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#86868B] bg-white/[0.06] border border-white/[0.08]">
            Demo Environment
          </span>
        </div>
      </div>

      {/* Main Content Pane */}
      <div className="p-4 sm:p-5 text-[#F5F5F7]">
        {/* Document Intelligence */}
        {product.dashboardType === 'document' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.06]">
              <div className="flex items-center space-x-2 text-xs">
                <Search className="w-3.5 h-3.5 text-[#2997FF]" />
                <span className="text-[#D2D2D7] font-mono">Semantic Doc Index: 24,810 Pages Parsed</span>
              </div>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1 font-mono">
                <Check className="w-3 h-3" /> RAG Grounded
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                <div className="text-[#86868B] text-[10px]">Kontrak Aktif</div>
                <div className="text-sm font-semibold text-white font-mono mt-0.5">1,420</div>
                <div className="text-[9px] text-emerald-400">99.8% Parsed</div>
              </div>
              <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                <div className="text-[#86868B] text-[10px]">Klausul Risiko</div>
                <div className="text-sm font-semibold text-amber-400 font-mono mt-0.5">14 Flag</div>
                <div className="text-[9px] text-[#86868B]">Addendum needed</div>
              </div>
              <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.04]">
                <div className="text-[#86868B] text-[10px]">Akurasi OCR</div>
                <div className="text-sm font-semibold text-[#2997FF] font-mono mt-0.5">99.4%</div>
                <div className="text-[9px] text-[#86868B]">Confidence Score</div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-2.5 space-y-1.5 font-mono text-[10px]">
              <div className="flex justify-between items-center py-0.5">
                <span className="text-[#D2D2D7] flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#2997FF]" /> Kontrak_EPC_BUMN_2026.pdf
                </span>
                <span className="text-emerald-400">Terverifikasi (Klausul 7.2)</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span className="text-[#D2D2D7] flex items-center gap-1">
                  <FileText className="w-3 h-3 text-[#2997FF]" /> Izin_Amdal_Fasilitas_Migas.pdf
                </span>
                <span className="text-amber-400">Perpanjangan 45 Hari</span>
              </div>
            </div>
          </div>
        )}

        {/* Procure AI */}
        {product.dashboardType === 'procurement' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs bg-white/[0.03] p-2 rounded-xl border border-white/[0.06]">
              <span className="font-medium text-white">Quotation Matrix Comparison</span>
              <span className="text-[10px] font-mono text-[#2997FF]">Genset 500 kVA (3 Unit)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-[10px] border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06] text-[#86868B]">
                    <th className="py-1 px-2">Vendor</th>
                    <th className="py-1 px-2">Harga</th>
                    <th className="py-1 px-2">Lead Time</th>
                    <th className="py-1 px-2">Rekomendasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  <tr className="text-[#F5F5F7]">
                    <td className="py-1.5 px-2 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> PT Daya Nusantara
                    </td>
                    <td className="py-1.5 px-2 text-emerald-400 font-semibold">Rp 840jt</td>
                    <td className="py-1.5 px-2">14 Hari</td>
                    <td className="py-1.5 px-2 text-emerald-400">Skor 94/100 (Optimal)</td>
                  </tr>
                  <tr className="text-[#86868B]">
                    <td className="py-1.5 px-2">PT Global Prima Mekanikal</td>
                    <td className="py-1.5 px-2">Rp 895jt</td>
                    <td className="py-1.5 px-2">26 Hari</td>
                    <td className="py-1.5 px-2">Deviasi +6.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Construct AI */}
        {product.dashboardType === 'construction' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/[0.06]">
              <span className="text-white font-medium">Site Intelligence: Tower Office Mall</span>
              <span className="text-emerald-400 font-mono text-[10px]">Curva-S: +1.4% Ahead</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <div className="text-[10px] text-[#86868B]">BOQ Realisasi Beton K-350</div>
                <div className="w-full bg-white/[0.06] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#2997FF] h-1.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <div className="text-[9px] text-[#6E6E73] mt-1">4.100 m³ dari 5.000 m³ master plan</div>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <div className="text-[10px] text-[#86868B]">RFI Menunggu Jawaban</div>
                <div className="text-sm font-bold text-amber-400 font-mono mt-0.5">3 Menunggu</div>
                <div className="text-[9px] text-[#6E6E73]">Struktur Kolom Lt. 18</div>
              </div>
            </div>
          </div>
        )}

        {/* Maintenance AI */}
        {product.dashboardType === 'maintenance' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/[0.06]">
              <span className="text-white font-medium">Turbine Pump 04 - Vibration Telemetry</span>
              <span className="text-emerald-400 font-mono text-[10px]">Health: 98.6%</span>
            </div>
            <div className="bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
              <div className="flex items-end justify-between h-10 gap-1 px-1 border-b border-white/[0.06]">
                {[30, 34, 32, 40, 36, 42, 50, 46, 56, 52, 48, 42, 38, 36].map((val, idx) => (
                  <div key={idx} className="flex-1">
                    <div 
                      className={`w-full rounded-t ${val > 54 ? 'bg-amber-400' : 'bg-[#2997FF]'}`} 
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] font-mono text-[#86868B] mt-1">
                <span>00:00</span>
                <span className="text-[#2997FF]">ISO 10816 Normal (&lt;4.5 mm/s)</span>
                <span>Live</span>
              </div>
            </div>
          </div>
        )}

        {/* Maritime */}
        {product.dashboardType === 'maritime' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/[0.06]">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-white font-medium">MV Samudera 08 • Selat Malaka</span>
              </div>
              <span className="text-[10px] font-mono text-[#2997FF]">Edge Offline Active</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <div className="text-[#86868B] text-[9px]">Speed Over Ground</div>
                <div className="text-xs font-bold text-white font-mono mt-0.5">14.8 Knots</div>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <div className="text-[#86868B] text-[9px]">Bunker FOC</div>
                <div className="text-xs font-bold text-[#2997FF] font-mono mt-0.5">22.4 MT/Day</div>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <div className="text-[#86868B] text-[9px]">SIRE 2.0 Ready</div>
                <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">100% Valid</div>
              </div>
            </div>
          </div>
        )}

        {/* Cyber AI */}
        {product.dashboardType === 'cyber' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/[0.06]">
              <span className="text-white font-medium flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#2997FF]" /> SOC Command Posture
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">Zero Critical Alert</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <span className="text-[#86868B] block text-[9px]">Events/Sec</span>
                <span className="font-mono font-bold text-white text-xs">48,290</span>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <span className="text-[#86868B] block text-[9px]">Anomali Login</span>
                <span className="font-mono font-bold text-[#2997FF] text-xs">312 Blokir</span>
              </div>
              <div className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                <span className="text-[#86868B] block text-[9px]">Respon AI</span>
                <span className="font-mono font-bold text-emerald-400 text-xs">140 ms</span>
              </div>
            </div>
          </div>
        )}

        {/* Default fallback for other 6 dashboards with clean Apple design */}
        {['waste', 'fleet', 'twin', 'comply', 'business', 'private_ai'].includes(product.dashboardType) && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/[0.06]">
              <span className="text-white font-medium">{product.name} Telemetry Node</span>
              <span className="text-emerald-400 font-mono text-[10px]">Operational</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              {product.metrics.map((m, i) => (
                <div key={i} className="bg-white/[0.02] p-2 rounded-xl border border-white/[0.04]">
                  <span className="text-[#86868B] block text-[9px] truncate">{m.label}</span>
                  <span className="font-mono font-semibold text-white text-xs mt-0.5 block truncate">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Query Runner */}
        {interactive && product.sampleQuestions && product.sampleQuestions.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#2997FF] font-medium flex items-center gap-1">
                Uji Pertanyaan ke Model AI:
              </span>
              <span className="text-[10px] text-[#6E6E73] font-mono">Pilih salah satu</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {product.sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRunQuery(q)}
                  className="text-left px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#D2D2D7] hover:text-white border border-white/[0.06] transition-colors text-[10px] font-sans truncate max-w-full cursor-pointer"
                >
                  &quot;{q}&quot;
                </button>
              ))}
            </div>

            {isProcessing && (
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-[#2997FF]/30 text-[#2997FF] flex items-center space-x-2 font-mono text-[10px]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Memproses konteks semantik...</span>
              </div>
            )}

            {simulatedAnswer && (
              <div className="p-3 rounded-xl bg-[#0071E3]/10 border border-[#0071E3]/30 text-[#F5F5F7] space-y-1 font-sans text-[11px] animate-fadeIn">
                <div className="text-[#2997FF] font-semibold text-[10px] font-mono uppercase">
                  Respon Terverifikasi:
                </div>
                <div className="text-[#D2D2D7] leading-relaxed">{simulatedAnswer}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
