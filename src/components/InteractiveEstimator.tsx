import React, { useState } from 'react';
import { 
  Calculator, 
  Cpu, 
  Anchor, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  HardDrive, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Sparkles 
} from 'lucide-react';

interface InteractiveEstimatorProps {
  lang: 'en' | 'id';
  onOpenConsultation: () => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'xtur' | 'aegis'>('xtur');

  // XTUR State
  const [cameraCount, setCameraCount] = useState<number>(32);
  const [resolution, setResolution] = useState<'1080p' | '2k' | '4k'>('1080p');
  const [modules, setModules] = useState<{
    anpr: boolean;
    ppe: boolean;
    intrusion: boolean;
    fireSmoke: boolean;
  }>({
    anpr: true,
    ppe: true,
    intrusion: true,
    fireSmoke: false,
  });

  // Aegis State
  const [vesselCount, setVesselCount] = useState<number>(10);
  const [satType, setSatType] = useState<'vsat512' | 'vsat1024' | 'hybridStarlink'>('vsat512');

  const toggleModule = (key: keyof typeof modules) => {
    setModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // XTUR Computations
  const activeModuleCount = Object.values(modules).filter(Boolean).length || 1;
  const estimatedVramGB = Math.max(6, Math.min(48, Math.round((cameraCount * 0.22 * activeModuleCount * (resolution === '4k' ? 1.8 : resolution === '2k' ? 1.3 : 1)))));
  const estimatedBandwidthMbps = Math.round(cameraCount * (resolution === '4k' ? 4.5 : resolution === '2k' ? 2.5 : 1.5));
  const estimatedStorageTB = (cameraCount * 0.08 * (resolution === '4k' ? 2.5 : 1)).toFixed(1);
  const recommendedHardware = 
    cameraCount <= 16 
      ? '1x NVIDIA RTX 4060 Ti Edge Box (16GB VRAM)' 
      : cameraCount <= 48 
      ? '1x Industrial Rackmount Server (NVIDIA RTX 4080 16GB + TensorRT)' 
      : '2x Dual-GPU Server High-Availability Cluster (RTX 4090 / L40S)';

  // Aegis Computations
  const totalProtectedBandwidth = 
    satType === 'vsat512' 
      ? `${vesselCount * 512} Kbps` 
      : satType === 'vsat1024' 
      ? `${vesselCount * 1} Mbps` 
      : `${vesselCount * 50} Mbps Hybrid`;
  const guaranteedEcdis = satType === 'vsat512' ? '204 Kbps / Vessel' : satType === 'vsat1024' ? '410 Kbps / Vessel' : '15 Mbps / Vessel';
  const dataSavedPercent = satType === 'hybridStarlink' ? '45%' : '35%';

  return (
    <section id="estimator" className="py-24 bg-transparent relative overflow-hidden transition-colors">
      {/* Top Animated Beam Sweep Divider */}
      <div className="beam-divider opacity-60 mb-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 mr-1" />
            <span>{lang === 'en' ? 'INTERACTIVE CLIENT ESTIMATOR' : 'KALKULATOR ESTIMASI KEBUTUHAN TEKNIS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'en' ? (
              <>
                Calculate Your Enterprise <span className="text-gradient-brand">Architecture & Capacity</span>
              </>
            ) : (
              <>
                Simulasikan Kebutuhan <span className="text-gradient-brand">Hardware & Bandwidth</span> Anda
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'Evaluate hardware requirements, GPU inferencing capacity, and QoS bandwidth efficiency tailored to your operations in real-time.'
              : 'Dapatkan gambaran instan spesifikasi GPU, latensi inferensi, dan efisiensi bandwidth satelit sebelum mengajukan implementasi resmi.'}
          </p>

          {/* Mode Switcher Tabs (Apple Pill Style) */}
          <div className="mt-8 inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={() => setActiveTab('xtur')}
              className={`px-6 py-2 rounded-full text-xs font-medium transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'xtur'
                  ? 'bg-[#0071E3] text-white shadow-xs'
                  : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{lang === 'en' ? 'XTUR AI Vision Edge Estimator' : 'Estimator Kamera AI XTUR'}</span>
            </button>
            <button
              onClick={() => setActiveTab('aegis')}
              className={`px-6 py-2 rounded-full text-xs font-medium transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === 'aegis'
                  ? 'bg-[#0071E3] text-white shadow-xs'
                  : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
              }`}
            >
              <Anchor className="w-4 h-4" />
              <span>{lang === 'en' ? 'Aegis Maritime Satellite QoS' : 'Estimator Bandwidth Kapal Aegis'}</span>
            </button>
          </div>
        </div>

        {/* Estimator Content */}
        {activeTab === 'xtur' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Interactive Input Controls */}
            <div className="lg:col-span-7 bg-white dark:bg-[#161617] p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white font-mono">
                    1. {lang === 'en' ? 'Total RTSP Camera Streams' : 'Jumlah Kamera CCTV Terpasang'}
                  </label>
                  <span className="text-base font-bold font-mono text-[#0071E3] dark:text-[#2997FF]">
                    {cameraCount} Streams
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="128"
                  step="4"
                  value={cameraCount}
                  onChange={(e) => setCameraCount(Number(e.target.value))}
                  className="w-full accent-[#0071E3] cursor-pointer h-2 bg-black/[0.06] dark:bg-white/[0.1] rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] mt-1">
                  <span>4 Cams (Min)</span>
                  <span>32 Cams</span>
                  <span>64 Cams</span>
                  <span>128 Cams (Max)</span>
                </div>
              </div>

              {/* Stream Resolution */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white font-mono mb-2">
                  2. {lang === 'en' ? 'Video Stream Resolution' : 'Resolusi Video Kamera'}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '1080p', label: '1080p (Full HD)', desc: 'Standard Enterprise' },
                    { id: '2k', label: '2K (QHD)', desc: 'High Definition' },
                    { id: '4k', label: '4K (Ultra HD)', desc: 'Ultra Precision' },
                  ].map((res) => (
                    <button
                      key={res.id}
                      onClick={() => setResolution(res.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        resolution === res.id
                          ? 'border-[#0071E3] bg-[#0071E3]/10 text-[#0071E3] dark:text-[#2997FF] font-semibold'
                          : 'border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.04] text-[#1D1D1F] dark:text-white hover:border-black/20'
                      }`}
                    >
                      <div className="text-xs font-semibold">{res.label}</div>
                      <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] mt-0.5">{res.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active AI Modules */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white font-mono mb-2">
                  3. {lang === 'en' ? 'Active AI Vision Modules' : 'Modul Deteksi Kecerdasan Buatan (AI)'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { key: 'anpr', label: 'ANPR (57 Kode Wilayah Plat)', desc: 'Pengenalan plat & log kendaraan otonom' },
                    { key: 'ppe', label: 'Audit K3 (Helm & Rompi APD)', desc: 'Inspeksi keselamatan kerja konstruksi/pabrik' },
                    { key: 'intrusion', label: 'Intrusi Perimeter & Garis Virtual', desc: 'Pendeteksian penyusup di zona terlarang' },
                    { key: 'fireSmoke', label: 'Deteksi Dini Asap & Api (Thermal)', desc: 'Peringatan dini insiden kebakaran' },
                  ].map((mod) => {
                    const isChecked = modules[mod.key as keyof typeof modules];
                    return (
                      <div
                        key={mod.key}
                        onClick={() => toggleModule(mod.key as keyof typeof modules)}
                        className={`p-3 rounded-2xl border cursor-pointer select-none transition-all flex items-start space-x-2.5 ${
                          isChecked
                            ? 'border-[#0071E3] bg-[#0071E3]/5 dark:bg-[#0071E3]/15'
                            : 'border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] hover:border-black/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-0.5 rounded accent-[#0071E3] cursor-pointer"
                        />
                        <div>
                          <div className="text-xs font-semibold text-[#1D1D1F] dark:text-white leading-tight">
                            {mod.label}
                          </div>
                          <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] mt-0.5">
                            {mod.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Calculated Architecture & Capacity Blueprint */}
            <div className="lg:col-span-5 bg-white dark:bg-[#161617] text-[#1D1D1F] dark:text-white p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-xs flex flex-col justify-between relative overflow-hidden transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                  <span className="text-[11px] font-mono text-[#0071E3] dark:text-[#2997FF] flex items-center font-semibold">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-[#0071E3]" />
                    ESTIMATED BLUEPRINT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[#34C759] text-[10px] font-mono font-bold border border-emerald-500/20">
                    OPTIMIZED // TENSORRT
                  </span>
                </div>

                {/* Metric Summary Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">GPU VRAM DEMAND</div>
                    <div className="text-lg font-semibold text-[#0071E3] dark:text-[#2997FF] mt-0.5">{estimatedVramGB} GB VRAM</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Dedicated Tensor Core</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">INFERENCE LATENCY</div>
                    <div className="text-lg font-semibold text-[#0071E3] dark:text-[#2997FF] mt-0.5">4.2 ms / frame</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Zero Cloud Lag</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">LOCAL LAN TRAFFIC</div>
                    <div className="text-lg font-semibold text-[#34C759] mt-0.5">~{estimatedBandwidthMbps} Mbps</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">H.265 Efficient Codec</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">STORAGE (30 DAYS)</div>
                    <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 mt-0.5">~{estimatedStorageTB} TB</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Event & Log Archival</div>
                  </div>
                </div>

                {/* Recommended Hardware */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5">
                  <div className="text-[10px] font-mono text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider flex items-center font-medium">
                    <HardDrive className="w-3.5 h-3.5 mr-1" />
                    Rekomendasi Spesifikasi Hardware Server
                  </div>
                  <div className="text-xs font-semibold text-[#1D1D1F] dark:text-white font-mono leading-relaxed">
                    {recommendedHardware}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.08] dark:border-white/[0.08] mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Deploy XTUR With This Configuration' : 'Ajukan Implementasi Berdasarkan Estimasi Ini'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Aegis Input Controls */}
            <div className="lg:col-span-7 bg-white dark:bg-[#161617] p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-xs space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white font-mono">
                    1. {lang === 'en' ? 'Vessel Fleet Size' : 'Jumlah Armada Kapal Tanker / Kargo'}
                  </label>
                  <span className="text-base font-bold font-mono text-[#0071E3] dark:text-[#2997FF]">
                    {vesselCount} Kapal
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={vesselCount}
                  onChange={(e) => setVesselCount(Number(e.target.value))}
                  className="w-full accent-[#0071E3] cursor-pointer h-2 bg-black/[0.06] dark:bg-white/[0.1] rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] mt-1">
                  <span>1 Kapal</span>
                  <span>15 Kapal</span>
                  <span>30 Kapal (Pertamina Scale)</span>
                  <span>50 Kapal</span>
                </div>
              </div>

              {/* Satellite Telemetry Link */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] dark:text-white font-mono mb-2">
                  2. {lang === 'en' ? 'Satellite Communication Topology' : 'Tipe Saluran Satelit Kapal'}
                </label>
                <div className="space-y-2.5">
                  {[
                    { id: 'vsat512', label: 'Maritime VSAT Ku-Band 512 Kbps', desc: 'Standar pelayaran internasional dengan bandwidth ketat (Prioritas ECDIS 40%)' },
                    { id: 'vsat1024', label: 'Maritime VSAT Ku-Band 1 Mbps', desc: 'Peningkatan kapasitas telemetri mesin kapal dan transmisi data fuel oil real-time' },
                    { id: 'hybridStarlink', label: 'Starlink Maritime LEO + 4G Coastal Hybrid', desc: 'Kecepatan tinggi multi-orbit dengan failover sub-detik < 800ms saat di laut lepas' },
                  ].map((st) => (
                    <div
                      key={st.id}
                      onClick={() => setSatType(st.id as any)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        satType === st.id
                          ? 'border-[#0071E3] bg-blue-500/5 dark:bg-blue-500/10 text-[#1D1D1F] dark:text-white font-semibold'
                          : 'border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-[#6E6E73] dark:text-[#A1A1A6]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#1D1D1F] dark:text-white">{st.label}</div>
                        <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] mt-0.5">{st.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${satType === st.id ? 'border-[#0071E3] bg-[#0071E3]' : 'border-black/20 dark:border-white/20'}`}>
                        {satType === st.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Aegis Result Blueprint */}
            <div className="lg:col-span-5 bg-white dark:bg-[#161617] text-[#1D1D1F] dark:text-white p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-xs flex flex-col justify-between relative overflow-hidden transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
                  <span className="text-[11px] font-mono text-[#0071E3] dark:text-[#2997FF] flex items-center font-semibold">
                    <Anchor className="w-3.5 h-3.5 mr-1 text-[#0071E3] dark:text-[#2997FF]" />
                    AEGIS FLEET TELEMETRY
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-[#0071E3] dark:text-[#2997FF] text-[10px] font-mono font-bold border border-blue-500/20">
                    FORTINET NSE 7 // IMO 2021
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">TOTAL FLEET BANDWIDTH</div>
                    <div className="text-base font-bold text-[#0071E3] dark:text-[#2997FF] mt-0.5 truncate">{totalProtectedBandwidth}</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">{vesselCount} Tanker Ships</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">GUARANTEED ECDIS</div>
                    <div className="text-base font-bold text-[#34C759] mt-0.5 truncate">{guaranteedEcdis}</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Zero-Drop Navigation</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">QoS TRAFFIC SAVING</div>
                    <div className="text-lg font-bold text-[#34C759] mt-0.5">{dataSavedPercent} Efisiensi</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Kompresi Paket Cerdas</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">FAILOVER TIME</div>
                    <div className="text-lg font-bold text-[#0071E3] dark:text-[#2997FF] mt-0.5">&lt; 800 ms</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Multi-Orbit Handover</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] space-y-1">
                  <div className="text-[10px] font-mono text-[#34C759] uppercase tracking-wider flex items-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                    Perlindungan Perimeter Sesuai Standar Maritim
                  </div>
                  <div className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                    Zero-Trust VLAN Isolasi, Pemisahan Jaringan Kru Kapal vs OT Mesin, serta Firewall Karantina Malware Lepas Pantai.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.08] dark:border-white/[0.08] mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Consult Aegis Maritime For Fleet' : 'Konsultasikan Implementasi Armada Kapal'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
