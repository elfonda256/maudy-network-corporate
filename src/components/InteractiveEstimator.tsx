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
    <section id="estimator" className="py-20 bg-white/70 dark:bg-[#071322]/70 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800/80 transition-colors relative overflow-hidden">
      {/* Decorative High-Tech Background Watermark */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/5 dark:bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-pill text-red-600 dark:text-cyan-400 text-xs font-tech font-bold tracking-wider mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 mr-1" />
            <span>{lang === 'en' ? 'INTERACTIVE CLIENT ESTIMATOR' : 'KALKULATOR ESTIMASI KEBUTUHAN TEKNIS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002D62] dark:text-white tracking-tight">
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
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Evaluate hardware requirements, GPU inferencing capacity, and QoS bandwidth efficiency tailored to your operations in real-time.'
              : 'Dapatkan gambaran instan spesifikasi GPU, latensi inferensi, dan efisiensi bandwidth satelit sebelum mengajukan implementasi resmi.'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab('xtur')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'xtur'
                  ? 'bg-gradient-brand text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{lang === 'en' ? 'XTUR AI Vision Edge Estimator' : 'Estimator Kamera AI XTUR'}</span>
            </button>
            <button
              onClick={() => setActiveTab('aegis')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'aegis'
                  ? 'bg-gradient-brand text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
            <div className="lg:col-span-7 bg-white dark:bg-[#0B1F3A]/90 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-tech">
                    1. {lang === 'en' ? 'Total RTSP Camera Streams' : 'Jumlah Kamera CCTV Terpasang'}
                  </label>
                  <span className="text-base font-black font-tech text-red-600 dark:text-cyan-400">
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
                  className="w-full accent-red-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-tech text-slate-400 mt-1">
                  <span>4 Cams (Min)</span>
                  <span>32 Cams</span>
                  <span>64 Cams</span>
                  <span>128 Cams (Max)</span>
                </div>
              </div>

              {/* Stream Resolution */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-tech mb-2">
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
                      className={`p-3 rounded-xl border text-left transition-all ${
                        resolution === res.id
                          ? 'border-red-500 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-cyan-300 font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div className="text-xs font-bold">{res.label}</div>
                      <div className="text-[10px] opacity-75">{res.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active AI Modules */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-tech mb-2">
                  3. {lang === 'en' ? 'Active AI Vision Modules' : 'Modul Deteksi Kecerdasan Buatan (AI)'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { key: 'anpr', label: 'ANPR (57 Kode Wilayah Plat Nomor)', desc: 'Pengenalan plat & log kendaraan otonom' },
                    { key: 'ppe', label: 'Audit K3 (Helm Proyek & Rompi APD)', desc: 'Inspeksi keselamatan kerja konstruksi/pabrik' },
                    { key: 'intrusion', label: 'Intrusi Perimeter & Garis Virtual', desc: 'Pendeteksian penyusup di zona terlarang' },
                    { key: 'fireSmoke', label: 'Deteksi Dini Asap & Api (Thermal/RGB)', desc: 'Peringatan dini insiden kebakaran' },
                  ].map((mod) => {
                    const isChecked = modules[mod.key as keyof typeof modules];
                    return (
                      <div
                        key={mod.key}
                        onClick={() => toggleModule(mod.key as keyof typeof modules)}
                        className={`p-3 rounded-xl border cursor-pointer select-none transition-all flex items-start space-x-2.5 ${
                          isChecked
                            ? 'border-red-500/80 bg-red-500/5 dark:bg-cyan-500/10'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 opacity-70'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-0.5 rounded text-red-600 focus:ring-0 cursor-pointer"
                        />
                        <div>
                          <div className="text-xs font-bold text-[#002D62] dark:text-white leading-tight">
                            {mod.label}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
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
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:to-[#050C16] text-slate-800 dark:text-white p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all">
              <div className="cyber-scanline"></div>

              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-[11px] font-tech text-[#0050AE] dark:text-cyan-400 flex items-center font-bold">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-red-500" />
                    ESTIMATED BLUEPRINT
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-tech font-bold border border-emerald-500/30">
                    OPTIMIZED // TENSORRT
                  </span>
                </div>

                {/* Metric Summary Grid */}
                <div className="grid grid-cols-2 gap-3 font-tech text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">GPU VRAM DEMAND</div>
                    <div className="text-lg font-bold text-red-600 dark:text-red-500 mt-0.5">{estimatedVramGB} GB VRAM</div>
                    <div className="text-[9px] text-slate-500">Dedicated Tensor Core</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">INFERENCE LATENCY</div>
                    <div className="text-lg font-bold text-[#0050AE] dark:text-cyan-400 mt-0.5">4.2 ms / frame</div>
                    <div className="text-[9px] text-slate-500">Zero Cloud Lag</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">LOCAL LAN TRAFFIC</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">~{estimatedBandwidthMbps} Mbps</div>
                    <div className="text-[9px] text-slate-500">H.265 Efficient Codec</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">STORAGE (30 DAYS)</div>
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mt-0.5">~{estimatedStorageTB} TB</div>
                    <div className="text-[9px] text-slate-500">Event & Log Archival</div>
                  </div>
                </div>

                {/* Recommended Hardware */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
                  <div className="text-[10px] font-tech text-[#0050AE] dark:text-cyan-400 uppercase tracking-wider flex items-center font-bold">
                    <HardDrive className="w-3.5 h-3.5 mr-1" />
                    Rekomendasi Spesifikasi Hardware Server
                  </div>
                  <div className="text-xs font-bold text-[#002D62] dark:text-white font-mono leading-relaxed">
                    {recommendedHardware}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-brand text-white font-tech font-bold text-xs hover:scale-102 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-red-500/20"
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
            <div className="lg:col-span-7 bg-white dark:bg-[#0B1F3A]/90 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-tech">
                    1. {lang === 'en' ? 'Vessel Fleet Size' : 'Jumlah Armada Kapal Tanker / Kargo'}
                  </label>
                  <span className="text-base font-black font-tech text-[#0050AE] dark:text-cyan-400">
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
                  className="w-full accent-[#0050AE] cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-tech text-slate-400 mt-1">
                  <span>1 Kapal</span>
                  <span>15 Kapal</span>
                  <span>30 Kapal (Pertamina Scale)</span>
                  <span>50 Kapal</span>
                </div>
              </div>

              {/* Satellite Telemetry Link */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-tech mb-2">
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
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        satType === st.id
                          ? 'border-[#0050AE] bg-blue-500/10 dark:bg-cyan-500/15 text-[#002D62] dark:text-white font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{st.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{st.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${satType === st.id ? 'border-[#0050AE] bg-[#0050AE]' : 'border-slate-400'}`}>
                        {satType === st.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Aegis Result Blueprint */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:to-[#050C16] text-slate-800 dark:text-white p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-[11px] font-tech text-[#0050AE] dark:text-cyan-400 flex items-center font-bold">
                    <Anchor className="w-3.5 h-3.5 mr-1 text-[#0050AE] dark:text-cyan-400" />
                    AEGIS FLEET TELEMETRY
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 dark:bg-blue-500/20 text-[#0050AE] dark:text-cyan-300 text-[10px] font-tech font-bold border border-blue-500/20">
                    FORTINET NSE 7 // IMO 2021
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 font-tech text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">TOTAL FLEET BANDWIDTH</div>
                    <div className="text-base font-bold text-[#0050AE] dark:text-cyan-400 mt-0.5 truncate">{totalProtectedBandwidth}</div>
                    <div className="text-[9px] text-slate-500">{vesselCount} Tanker Ships</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">GUARANTEED ECDIS</div>
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 truncate">{guaranteedEcdis}</div>
                    <div className="text-[9px] text-slate-500">Zero-Drop Navigation</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">QoS TRAFFIC SAVING</div>
                    <div className="text-lg font-bold text-red-600 dark:text-red-500 mt-0.5">{dataSavedPercent} Efisiensi</div>
                    <div className="text-[9px] text-slate-500">Kompresi Paket Cerdas</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] font-semibold">FAILOVER TIME</div>
                    <div className="text-lg font-bold text-[#0050AE] dark:text-cyan-400 mt-0.5">&lt; 800 ms</div>
                    <div className="text-[9px] text-slate-500">Multi-Orbit Handover</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                  <div className="text-[10px] font-tech text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                    Perlindungan Perimeter Sesuai Standar Maritim
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-mono">
                    Zero-Trust VLAN Isolasi, Pemisahan Jaringan Kru Kapal vs OT Mesin, serta Firewall Karantina Malware Lepas Pantai.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-brand text-white font-tech font-bold text-xs hover:scale-102 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20"
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
