import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Activity,
  Cpu,
  Anchor,
  Radio,
  Wifi,
  ShieldCheck,
  AlertTriangle,
  Play,
  RotateCcw,
  Zap,
  HardDrive,
  Eye,
  Camera,
  Server,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Maximize2
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface LiveSimulatorProps {
  lang: Language;
}

export const LiveSimulator: React.FC<LiveSimulatorProps> = ({ lang }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeEngine, setActiveEngine] = useState<'pisbot' | 'xtur' | 'aegis' | 'molinar'>('pisbot');

  // Universal Ticking Clock & Global System Load
  const [systemCycle, setSystemCycle] = useState<number>(948201);
  const [systemUptimeSec, setSystemUptimeSec] = useState<number>(342890);

  // PIS_BOT Engine State
  const [pisbotNodes, setPisbotNodes] = useState([
    { id: 'gw-core', name: 'MNK Semarang Core Gateway', ip: '10.10.1.1', latency: 0.6, status: 'HEALTHY' },
    { id: 'dc-bumn', name: 'Jakarta BUMN Cloud DataCenter', ip: '172.16.0.1', latency: 4.2, status: 'HEALTHY' },
    { id: 'vlcc-vsat', name: 'Pertamina VLCC Marine VSAT', ip: '192.168.100.1', latency: 48.2, status: 'HEALTHY' },
    { id: 'dam-sensor', name: 'BBWS Cimanuk Dam Gateway', ip: '10.200.4.12', latency: 12.1, status: 'HEALTHY' },
    { id: 'coastal-radio', name: 'Banten Coastal Dispatch AP', ip: '10.88.2.1', latency: 6.4, status: 'HEALTHY' },
  ]);
  const [botLogs, setBotLogs] = useState<string[]>([
    '[INIT] PIS_BOT Sentinel daemon v4.8 active on thread #16',
    '[OK] 5 Strategic nodes online across Jawa-Bali-Sumatera backbone',
    '[TELEMETRY] Starlink LEO Fleet & Telkom-4 C-Band synchronizing',
  ]);
  const [isSimulatingFailover, setIsSimulatingFailover] = useState<boolean>(false);
  const [failoverActive, setFailoverActive] = useState<boolean>(false);

  // XTUR Vision Engine State
  const [xturAlarm, setXturAlarm] = useState<boolean>(false);
  const [xturBlacklist, setXturBlacklist] = useState<boolean>(false);
  const [aiGpuLoad, setAiGpuLoad] = useState<number>(78);
  const [activeCamView, setActiveCamView] = useState<number>(1);

  // Aegis Maritime Engine State
  const [aegisCongested, setAegisCongested] = useState<boolean>(false);
  const [aegisStarlinkActive, setAegisStarlinkActive] = useState<boolean>(false);

  // Molinar.id State
  const [shelterTemp, setShelterTemp] = useState<number>(24.8);
  const [voltage, setVoltage] = useState<number>(224.2);
  const [relay1, setRelay1] = useState<boolean>(true); // Core Router
  const [relay2, setRelay2] = useState<boolean>(false); // Fan
  const [relay3, setRelay3] = useState<boolean>(true); // Solar Inverter

  // IntersectionObserver: Only tick when simulator is visible on screen!
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Clock & Telemetry loop - throttled to 1000ms (1s) instead of 100ms
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setSystemCycle((c) => c + 1);
      setSystemUptimeSec((u) => u + 1);

      // Micro fluctuations
      setShelterTemp((t) => +(t + (Math.random() - 0.5) * 0.1).toFixed(1));
      setVoltage((v) => +(v + (Math.random() - 0.5) * 0.2).toFixed(1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isInView]);

  // Format uptime
  const formatUptime = (sec: number) => {
    const d = Math.floor(sec / 86400);
    const h = Math.floor((sec % 86400) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  // PIS_BOT Action: Simulate Outage & Automated Failover
  const triggerFiberCutFailover = () => {
    setIsSimulatingFailover(true);
    const now = new Date().toLocaleTimeString();

    // Step 1: Simulate drop
    setPisbotNodes((nodes) =>
      nodes.map((n) => (n.id === 'vlcc-vsat' ? { ...n, status: 'DROP', latency: 999 } : n))
    );
    setBotLogs((prev) => [
      `[${now}] ⚠️ CRITICAL ALARM: Carrier signal loss detected on Primary Ku-Band [192.168.100.1]!`,
      `[${now}] ⚡ PIS_BOT Sentinel executing sub-second autonomous traceroute diagnostics...`,
      ...prev.slice(0, 6),
    ]);

    // Step 2: Autonomous Failover execution
    setTimeout(() => {
      const now2 = new Date().toLocaleTimeString();
      setPisbotNodes((nodes) =>
        nodes.map((n) => (n.id === 'vlcc-vsat' ? { ...n, status: 'FAILOVER_LEO', latency: 42.1 } : n))
      );
      setFailoverActive(true);
      setIsSimulatingFailover(false);
      setBotLogs((prev) => [
        `[${now2}] ✅ AUTONOMOUS FAILOVER COMPLETE: Link re-routed to Starlink LEO Fleet Orbit in 420ms!`,
        `[${now2}] 📡 Packet loss eliminated. Latency stabilized at 42.1 ms. Webhook alert logged.`,
        ...prev.slice(0, 6),
      ]);
    }, 800);
  };

  const resetPisbot = () => {
    setPisbotNodes((nodes) =>
      nodes.map((n) => (n.id === 'vlcc-vsat' ? { ...n, status: 'HEALTHY', latency: 48.2 } : n))
    );
    setFailoverActive(false);
    const now = new Date().toLocaleTimeString();
    setBotLogs((prev) => [
      `[${now}] 🔄 Topology normalized. Primary carrier re-synchronized. All 5 nodes nominal.`,
      ...prev.slice(0, 5),
    ]);
  };

  // XTUR Actions
  const triggerIntrusionAlarm = () => {
    setXturAlarm(true);
    setAiGpuLoad(94);
    setTimeout(() => {
      setXturAlarm(false);
      setAiGpuLoad(78);
    }, 4500);
  };

  const triggerBlacklistPlate = () => {
    setXturBlacklist(true);
    setTimeout(() => setXturBlacklist(false), 4500);
  };

  // Aegis Actions
  const toggleAegisCongestion = () => {
    setAegisCongested(!aegisCongested);
  };

  const toggleAegisStarlink = () => {
    setAegisStarlinkActive(!aegisStarlinkActive);
  };

  return (
    <div ref={sectionRef} className="bg-white dark:bg-[#161617] text-[#1D1D1F] dark:text-white rounded-3xl border border-black/[0.08] dark:border-white/[0.12] p-5 sm:p-8 shadow-xs relative overflow-hidden transition-all">
      {/* Telemetry HUD Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-black/[0.08] dark:border-white/[0.08] relative z-10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-blue-500/10 text-[#0071E3] dark:text-[#2997FF] border border-blue-500/20">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
                MNK MISSION-CONTROL MULTI-ENGINE SIMULATOR
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[#34C759] text-[10px] font-mono font-bold border border-emerald-500/20 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] mr-1.5 animate-pulse"></span>
                ACTIVE DAEMON
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6] mt-0.5">
              CYCLE: #{systemCycle} • UPTIME: {formatUptime(systemUptimeSec)} • LATENCY BUFFER: 0.8ms • IOPS: 14,800
            </div>
          </div>
        </div>

        {/* Engine Switcher Tabs (Apple Pill Style) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-xs">
          <button
            onClick={() => setActiveEngine('pisbot')}
            className={`px-4 py-1.5 rounded-full font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeEngine === 'pisbot'
                ? 'bg-[#0071E3] text-white shadow-xs'
                : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>PIS_BOT Sentinel</span>
          </button>
          <button
            onClick={() => setActiveEngine('xtur')}
            className={`px-4 py-1.5 rounded-full font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeEngine === 'xtur'
                ? 'bg-[#0071E3] text-white shadow-xs'
                : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>XTUR AI Vision</span>
          </button>
          <button
            onClick={() => setActiveEngine('aegis')}
            className={`px-4 py-1.5 rounded-full font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeEngine === 'aegis'
                ? 'bg-[#0071E3] text-white shadow-xs'
                : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>Aegis Maritime</span>
          </button>
          <button
            onClick={() => setActiveEngine('molinar')}
            className={`px-4 py-1.5 rounded-full font-medium transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeEngine === 'molinar'
                ? 'bg-[#0071E3] text-white shadow-xs'
                : 'text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Molinar.id IoT</span>
          </button>
        </div>
      </div>

      {/* Simulator Core Display */}
      <div className="pt-6">
        {/* ENGINE 1: PIS_BOT Autonomous NOC Sentinel */}
        {activeEngine === 'pisbot' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Node Matrix & Latency Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: 5 Node Status Table */}
              <div className="lg:col-span-7 bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] space-y-3 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#0071E3] dark:text-[#2997FF] border-b border-black/[0.06] dark:border-white/[0.08] pb-2">
                  <span>ENTERPRISE DISTRIBUTED ICMP MONITOR (SUB-SECOND)</span>
                  <span className="font-semibold">5/5 NODES TRACKED</span>
                </div>
                <div className="space-y-2">
                  {pisbotNodes.map((node) => {
                    const isDropped = node.status === 'DROP';
                    const isFailover = node.status === 'FAILOVER_LEO';

                    return (
                      <div
                        key={node.id}
                        className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                          isDropped
                            ? 'bg-red-500/10 border-red-500 text-red-700 dark:text-red-300 animate-pulse'
                            : isFailover
                            ? 'bg-blue-500/10 border-[#0071E3] text-[#0071E3] dark:text-[#2997FF]'
                            : 'bg-white dark:bg-black/40 border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-white shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isDropped ? 'bg-red-500' : isFailover ? 'bg-[#0071E3]' : 'bg-[#34C759]'
                            }`}
                          ></span>
                          <div>
                            <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs">{node.name}</div>
                            <div className="text-[10px] font-mono text-[#6E6E73] dark:text-[#A1A1A6]">{node.ip}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`font-semibold ${isDropped ? 'text-red-600 dark:text-red-400' : 'text-[#34C759]'}`}>
                            {isDropped ? 'TIMEOUT (DROP)' : `${node.latency} ms`}
                          </div>
                          <div className="text-[9px] font-mono text-[#6E6E73] dark:text-[#A1A1A6]">
                            {isFailover ? 'STARLINK LEO BACKUP' : isDropped ? 'ALARM DISPATCHED' : 'PRIMARY CARRIER'}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Interactive Diagnostics & Failover Trigger */}
              <div className="lg:col-span-5 bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider mb-2 flex items-center font-medium">
                    <Zap className="w-3.5 h-3.5 mr-1 text-[#0071E3]" />
                    Simulasi Gangguan & Failover Otonom
                  </div>
                  <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal mb-3">
                    Uji keandalan algoritma PIS_BOT dalam mendeteksi putusnya saluran transmisi dan memindahkan rute paket satelit dalam &lt; 500ms tanpa henti.
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08] font-mono text-[11px] space-y-1.5 shadow-2xs">
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Autonomous Traceroute:</span>
                      <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">15 Hops Verified</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Failover SLA:</span>
                      <span className="text-[#34C759] font-semibold">&lt; 800 ms Guarantee</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Alarm Escalation:</span>
                      <span className="text-red-600 dark:text-red-400 font-semibold">Telegram / Webhook Direct</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button
                    onClick={triggerFiberCutFailover}
                    disabled={isSimulatingFailover || failoverActive}
                    className="flex-1 py-2.5 px-4 rounded-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-medium text-xs shadow-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Simulasi Putus Link Satelit</span>
                  </button>
                  {failoverActive && (
                    <button
                      onClick={resetPisbot}
                      className="py-2.5 px-4 rounded-full bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] text-[#1D1D1F] dark:text-white font-medium text-xs border border-black/[0.08] dark:border-white/[0.12] transition-all flex items-center space-x-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Live Terminal Log Stream (Apple Developer Console Style) */}
            <div className="bg-black/[0.03] dark:bg-black/60 rounded-2xl p-4 border border-black/[0.08] dark:border-white/[0.08] font-mono text-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between text-[10px] text-[#6E6E73] dark:text-[#A1A1A6] border-b border-black/[0.06] dark:border-white/[0.08] pb-2 font-medium">
                <span>DAEMON CONSOLE OUTPUT // LIVE STREAM</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">STATUS: STREAMING</span>
              </div>
              <div className="space-y-1.5 max-h-32 overflow-y-auto pt-1 font-mono text-[11px]">
                {botLogs.map((log, lIdx) => (
                  <div
                    key={lIdx}
                    className={`${
                      log.includes('CRITICAL')
                        ? 'text-red-600 dark:text-red-400 font-semibold'
                        : log.includes('AUTONOMOUS')
                        ? 'text-[#0071E3] dark:text-[#2997FF] font-semibold'
                        : 'text-[#1D1D1F] dark:text-[#E5E5EA]'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ENGINE 2: XTUR AI Vision Neural Surveillance */}
        {activeEngine === 'xtur' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left: 4-Feed Camera RTSP Matrix Simulator */}
              <div className="lg:col-span-8 bg-white dark:bg-[#161617] p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3 text-xs">
                  <span className="text-[#1D1D1F] dark:text-white flex items-center font-bold">
                    <Camera className="w-3.5 h-3.5 mr-1.5 text-[#0071E3]" />
                    XTUR EDGE MULTI-STREAM RTSP MATRIX (64 CAMS)
                  </span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4].map((cId) => (
                      <button
                        key={cId}
                        onClick={() => setActiveCamView(cId)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all ${
                          activeCamView === cId
                            ? 'bg-[#0071E3] text-white shadow-xs'
                            : 'bg-black/[0.04] dark:bg-white/[0.08] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white'
                        }`}
                      >
                        CAM 0{cId}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated CCTV Frame with AI Bounding Box HUD */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-black border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center">
                  <img
                    src={
                      activeCamView === 1
                        ? '/xtur/03-cameras-monitor.png'
                        : activeCamView === 2
                        ? '/xtur/02-detection-logs.png'
                        : activeCamView === 3
                        ? '/xtur/01-dashboard-overview.png'
                        : '/xtur/06-engine-health.png'
                    }
                    alt="CCTV Matrix"
                    className="w-full h-full object-cover opacity-85"
                  />

                  {/* Laser Scanline */}
                  <div className="cyber-scanline"></div>

                  {/* Bounding Box Simulation 1: ANPR Vehicle */}
                  <div
                    className={`absolute top-10 left-12 p-2.5 border-2 rounded-xl transition-all font-mono text-[10px] ${
                      xturBlacklist
                        ? 'border-red-500 bg-red-500/20 text-red-300 animate-pulse'
                        : 'border-[#2997FF] bg-blue-500/20 text-white'
                    }`}
                  >
                    <div className="font-bold flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2997FF] mr-1"></span>
                      {xturBlacklist ? '[BLACKLIST FLAGGED]' : '[ANPR DETECTED]'}
                    </div>
                    <div>PLATE: B 1945 XYZ (57 Reg)</div>
                    <div>CONF: 99.4% • SPEED: 38 km/h</div>
                  </div>

                  {/* Bounding Box Simulation 2: K3 Helmet/Vest */}
                  <div className="absolute bottom-8 right-16 p-2.5 border-2 border-emerald-400 bg-emerald-500/20 rounded-xl font-mono text-[10px] text-white">
                    <div className="font-bold flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-400" />
                      [HSE K3 COMPLIANT]
                    </div>
                    <div>HARDHAT: PASS • VEST: PASS</div>
                    <div>PERSON TRACK ID: #2049</div>
                  </div>

                  {/* Simulated Intrusion Warning Box */}
                  {xturAlarm && (
                    <div className="absolute inset-x-8 top-1/3 p-3 bg-red-600/90 border border-white/30 rounded-2xl text-center text-white font-mono font-bold animate-bounce shadow-2xl">
                      <div className="text-sm tracking-wider">⚠️ PERIMETER BREACH DETECTED!</div>
                      <div className="text-xs font-normal opacity-90">Cam_03 Zone B Restricted Line Crossed • Webhook Triggered</div>
                    </div>
                  )}
                </div>

                {/* Quick Simulation Triggers */}
                <div className="flex items-center space-x-3 pt-1">
                  <button
                    onClick={triggerIntrusionAlarm}
                    className="flex-1 py-2.5 px-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-all flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Simulasi Alarm Intrusi Perimeter</span>
                  </button>
                  <button
                    onClick={triggerBlacklistPlate}
                    className="flex-1 py-2.5 px-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-all flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Simulasi Deteksi Plat Blacklist</span>
                  </button>
                </div>
              </div>

              {/* Right: Real-Time GPU TensorRT Telemetry */}
              <div className="lg:col-span-4 bg-white dark:bg-[#161617] p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col justify-between space-y-4 text-xs">
                <div className="space-y-4">
                  <div className="text-[#1D1D1F] dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3 flex items-center justify-between text-[11px] font-bold">
                    <span>TENSORRT ENGINE HEALTH</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono">LATENCY: 4.2ms</span>
                  </div>

                  {/* GPU Load Gauge */}
                  <div>
                    <div className="flex justify-between text-[#6E6E73] dark:text-[#A1A1A6] mb-1 font-mono text-[11px]">
                      <span>GPU TENSOR CORE LOAD</span>
                      <span className="text-[#1D1D1F] dark:text-white font-bold">{aiGpuLoad}%</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          aiGpuLoad > 90 ? 'bg-red-500' : 'bg-[#0071E3] dark:bg-[#2997FF]'
                        }`}
                        style={{ width: `${aiGpuLoad}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* VRAM Allocation */}
                  <div>
                    <div className="flex justify-between text-[#6E6E73] dark:text-[#A1A1A6] mb-1 font-mono text-[11px]">
                      <span>VRAM ALLOCATION (16GB)</span>
                      <span className="text-[#1D1D1F] dark:text-white font-bold">5.4 GB (33%)</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 dark:bg-purple-500 w-[33%]"></div>
                    </div>
                  </div>

                  {/* Inference Metrics */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] space-y-2 text-[11px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Detection Framework:</span>
                      <span className="text-[#0071E3] dark:text-[#2997FF] font-semibold">YOLOv8x + ONNX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Stream FPS:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">59.8 FPS Steady</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6E6E73] dark:text-[#A1A1A6]">Active Camera Matrix:</span>
                      <span className="text-[#1D1D1F] dark:text-white font-semibold">64 RTSP Feeds</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-[#0071E3] dark:text-[#2997FF] text-[11px]">
                  ✓ Algoritma inferensi berjalan 100% lokal on-premise tanpa bergantung pada bandwidth cloud eksternal.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ENGINE 3: Aegis Maritime Fleet Radar & Satellite QoS */}
        {activeEngine === 'aegis' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Interactive Rotating Radar */}
              <div className="lg:col-span-6 bg-white dark:bg-[#161617] p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col items-center justify-center space-y-4">
                <div className="w-full flex items-center justify-between text-xs text-[#1D1D1F] dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3 font-bold">
                  <span>MALACCA STRAIT & JAVA SEA RADAR</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">30+ TANKERS ON-GRID</span>
                </div>

                {/* Radar Scope */}
                <div className="relative w-60 h-60 rounded-full border border-black/[0.1] dark:border-white/[0.15] bg-[#071322] flex items-center justify-center overflow-hidden shadow-inner">
                  {/* Concentric rings */}
                  <div className="absolute w-44 h-44 rounded-full border border-cyan-500/20"></div>
                  <div className="absolute w-28 h-28 rounded-full border border-cyan-500/20"></div>
                  <div className="absolute w-12 h-12 rounded-full border border-cyan-500/20"></div>
                  <div className="absolute inset-0 border-t border-b border-cyan-500/20 top-1/2 -translate-y-1/2"></div>
                  <div className="absolute inset-0 border-l border-r border-cyan-500/20 left-1/2 -translate-x-1/2"></div>

                  {/* Rotating Beam (GPU CSS Accelerated) */}
                  <div className="radar-sweep-beam pointer-events-none"></div>

                  {/* Vessel Blip 1: Pertamina Pride */}
                  <div className="absolute top-16 left-20 flex items-center space-x-1 font-mono text-[9px] text-cyan-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>VLCC Pertamina Pride [ECDIS: OK]</span>
                  </div>

                  {/* Vessel Blip 2: MT Gamsunoro */}
                  <div className="absolute bottom-14 right-16 flex items-center space-x-1 font-mono text-[9px] text-emerald-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>MT Gamsunoro [VSAT 512K]</span>
                  </div>

                  {/* Vessel Blip 3: Gas Walio */}
                  <div className="absolute top-28 right-12 flex items-center space-x-1 font-mono text-[9px] text-purple-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                    <span>Gas Walio [QoS 100%]</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#6E6E73] dark:text-[#A1A1A6]">
                  Koordinat Posisi Terverifikasi: 05°45'20"S • 106°48'35"E (Perairan Karang Jamuang)
                </div>
              </div>

              {/* Right: Dynamic Bandwidth QoS Prioritization Matrix */}
              <div className="lg:col-span-6 bg-white dark:bg-[#161617] p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs space-y-4 text-xs">
                <div className="flex items-center justify-between text-[#1D1D1F] dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3 font-bold">
                  <span>FORTINET NGFW ZERO-TRUST QoS</span>
                  <span className={aegisCongested ? 'text-red-600 dark:text-red-400 font-bold font-mono animate-pulse' : 'text-emerald-600 dark:text-emerald-400 font-mono'}>
                    {aegisCongested ? 'RAIN FADE / CONGESTED' : 'NOMINAL CARRIER'}
                  </span>
                </div>

                {/* 4 QoS Bars */}
                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-[#1D1D1F] dark:text-white mb-1 font-semibold text-[11px]">
                      <span>ECDIS Navigation & AIS Matrix (Priority 1)</span>
                      <span className="text-[#0071E3] dark:text-[#2997FF] font-mono">40% Guaranteed (204 Kbps)</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0071E3] dark:bg-[#2997FF] w-[40%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#1D1D1F] dark:text-white mb-1 font-semibold text-[11px]">
                      <span>Engine Telemetry & Fuel IoT (Priority 2)</span>
                      <span className="text-[#0071E3] dark:text-[#2997FF] font-mono">30% Guaranteed (153 Kbps)</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2997FF] w-[30%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#1D1D1F] dark:text-white mb-1 font-semibold text-[11px]">
                      <span>Master & Official Fleet VoIP (Priority 3)</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono">20% Guaranteed (102 Kbps)</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] h-2.5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[20%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[#6E6E73] dark:text-[#A1A1A6] mb-1 font-semibold text-[11px]">
                      <span>Crew Leisure & General Internet (Priority 4)</span>
                      <span className="font-mono">{aegisCongested ? 'THROTTLED (0%)' : '10% Low Priority'}</span>
                    </div>
                    <div className="w-full bg-black/[0.06] dark:bg-white/[0.08] h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          aegisCongested ? 'bg-red-500 w-0' : 'bg-black/20 dark:bg-white/20 w-[10%]'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Simulation Buttons */}
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    onClick={toggleAegisCongestion}
                    className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-xs transition-all flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer ${
                      aegisCongested ? 'bg-amber-600 text-white' : 'bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] text-[#1D1D1F] dark:text-white'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{aegisCongested ? 'Normalkan Bandwidth' : 'Simulasi Lonjakan / Rain Fade'}</span>
                  </button>

                  <button
                    onClick={toggleAegisStarlink}
                    className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-xs transition-all flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer ${
                      aegisStarlinkActive ? 'bg-[#0071E3] text-white' : 'bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] text-[#1D1D1F] dark:text-white'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{aegisStarlinkActive ? 'Starlink LEO (Active 42ms)' : 'Uji Failover Starlink'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ENGINE 4: Molinar.id Industrial IoT Shelter Telecontrol */}
        {activeEngine === 'molinar' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Sensor Metrics Grid */}
              <div className="lg:col-span-6 bg-white dark:bg-[#161617] p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] space-y-4 text-xs shadow-xs">
                <div className="text-[#1D1D1F] dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3 flex justify-between font-bold">
                  <span>SHELTER TELEMETRY ACQUISITION</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">SENSORS ONLINE</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">AMBIENT TEMPERATURE</div>
                    <div className="text-xl font-bold text-[#0071E3] dark:text-[#2997FF] mt-0.5 font-mono">{shelterTemp} °C</div>
                    <div className="text-[9px] text-emerald-600 dark:text-emerald-400">Optimal (18° - 28°C)</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">LINE VOLTAGE (STABILIZER)</div>
                    <div className="text-xl font-bold text-[#1D1D1F] dark:text-white mt-0.5 font-mono">{voltage} V</div>
                    <div className="text-[9px] text-emerald-600 dark:text-emerald-400">Harmonic Clean (220V ±5%)</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">BATTERY RESERVE (LiFePO4)</div>
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">98.4 %</div>
                    <div className="text-[9px] text-[#6E6E73] dark:text-[#A1A1A6]">Autonomous 48h Runtime</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                    <div className="text-[#6E6E73] dark:text-[#A1A1A6] text-[10px] font-medium uppercase tracking-wider">DOOR MAGNETIC CONTACT</div>
                    <div className="text-xl font-bold text-[#0071E3] dark:text-[#2997FF] mt-0.5 font-mono">CLOSED</div>
                    <div className="text-[9px] text-emerald-600 dark:text-emerald-400">Perimeter Locked</div>
                  </div>
                </div>
              </div>

              {/* Right: Remote Telecontrol Switch Matrix */}
              <div className="lg:col-span-6 bg-white dark:bg-[#161617] p-5 sm:p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] space-y-4 text-xs shadow-xs">
                <div className="text-[#1D1D1F] dark:text-white border-b border-black/[0.08] dark:border-white/[0.08] pb-3 flex justify-between font-bold">
                  <span>REMOTE TELECONTROL RELAY MATRIX</span>
                  <span className="text-[#6E6E73] dark:text-[#A1A1A6] font-mono">CLICK TO TOGGLE</span>
                </div>

                <div className="space-y-3">
                  {/* Relay 1 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs">Relay #1: Edge Core Router Power</div>
                      <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">Remote reboot daemon / power cycle</div>
                    </div>
                    <button
                      onClick={() => setRelay1(!relay1)}
                      className={`px-3.5 py-1.5 rounded-full font-semibold text-xs transition-all cursor-pointer ${
                        relay1 ? 'bg-emerald-600 text-white shadow-xs' : 'bg-red-600 text-white'
                      }`}
                    >
                      {relay1 ? 'ON (ACTIVE)' : 'OFF (CUT)'}
                    </button>
                  </div>

                  {/* Relay 2 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs">Relay #2: Auxiliary Cooling Fan</div>
                      <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">Thermal management automation</div>
                    </div>
                    <button
                      onClick={() => setRelay2(!relay2)}
                      className={`px-3.5 py-1.5 rounded-full font-semibold text-xs transition-all cursor-pointer ${
                        relay2 ? 'bg-[#0071E3] text-white shadow-xs' : 'bg-black/[0.04] dark:bg-white/[0.08] text-[#6E6E73] dark:text-[#A1A1A6]'
                      }`}
                    >
                      {relay2 ? 'RUNNING' : 'STANDBY'}
                    </button>
                  </div>

                  {/* Relay 3 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[#1D1D1F] dark:text-white text-xs">Relay #3: Solar / Generator Transfer</div>
                      <div className="text-[10px] text-[#6E6E73] dark:text-[#A1A1A6]">Dual power source ATS orchestrator</div>
                    </div>
                    <button
                      onClick={() => setRelay3(!relay3)}
                      className={`px-3.5 py-1.5 rounded-full font-semibold text-xs transition-all cursor-pointer ${
                        relay3 ? 'bg-purple-600 text-white shadow-xs' : 'bg-amber-600 text-white'
                      }`}
                    >
                      {relay3 ? 'SOLAR PV (ATS)' : 'GENSET BACKUP'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
