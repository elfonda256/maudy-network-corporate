import React, { useState, useEffect } from 'react';
import {
  Activity,
  Cpu,
  Power,
  Wifi,
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  Play,
  RotateCw,
  Terminal,
  CheckCircle,
} from 'lucide-react';

interface LiveSimulatorProps {
  lang: 'en' | 'id';
}

export const LiveSimulator: React.FC<LiveSimulatorProps> = ({ lang }) => {
  const [activeEngine, setActiveEngine] = useState<'molinar' | 'pisbot'>('molinar');

  // Molinar State
  const [temperature, setTemperature] = useState(26.4);
  const [voltage, setVoltage] = useState(223.8);
  const [relayState, setRelayState] = useState<'ON' | 'OFF'>('ON');
  const [doorSensor, setDoorSensor] = useState<'SECURE (CLOSED)' | 'ALERT (OPEN)'>('SECURE (CLOSED)');
  const [isSimulatingReboot, setIsSimulatingReboot] = useState(false);

  // PIS_BOT State
  const [botLogs, setBotLogs] = useState<string[]>([
    '[21:16:02] PIS_BOT Sentinel started on daemon thread #4',
    '[21:16:04] Host [172.16.1.206] PTM-TPR17 latency: 4.2ms (OK)',
    '[21:16:05] Host [172.16.1.207] PJS-LT03-AP02-PIS latency: 3.8ms (OK)',
  ]);
  const [hostStatus, setHostStatus] = useState<'HEALTHY' | 'ANOMALY_TRIGGERED'>('HEALTHY');
  const [isPinging, setIsPinging] = useState(false);

  // Subtle live fluctuating telemetry for Molinar
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prev) => +(prev + (Math.random() - 0.5) * 0.3).toFixed(1));
      setVoltage((prev) => +(prev + (Math.random() - 0.5) * 0.4).toFixed(1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const triggerRelayToggle = () => {
    setIsSimulatingReboot(true);
    setTimeout(() => {
      setRelayState((prev) => (prev === 'ON' ? 'OFF' : 'ON'));
      setIsSimulatingReboot(false);
    }, 800);
  };

  const triggerPingTest = () => {
    setIsPinging(true);
    setTimeout(() => {
      const now = new Date().toLocaleTimeString();
      setBotLogs((prev) => [
        `[${now}] Manual ICMP ping 64 bytes -> 172.16.1.207: rtt min/avg/max = 3.6/4.1/4.8 ms`,
        ...prev.slice(0, 5),
      ]);
      setIsPinging(false);
    }, 700);
  };

  const triggerSimulatedAlert = () => {
    setHostStatus('ANOMALY_TRIGGERED');
    const now = new Date().toLocaleTimeString();
    setBotLogs((prev) => [
      `[${now}] ⚠️ CRITICAL ALERT: Host [PJS-LT03-AP02-PIS] packet loss detected!`,
      `[${now}] ⚡ Executing autonomous 15-hop traceroute to 172.16.1.207...`,
      `[${now}] 📌 Hop 4 timeout at gateway 10.24.8.1 -> Telegram alert dispatched to On-Duty Engineer Bagus R.`,
      ...prev,
    ]);
  };

  const resetBotStatus = () => {
    setHostStatus('HEALTHY');
    const now = new Date().toLocaleTimeString();
    setBotLogs((prev) => [
      `[${now}] ✅ RESTORED: Host [PJS-LT03-AP02-PIS] operational. Link state normal.`,
      ...prev,
    ]);
  };

  return (
    <div className="glass-card rounded-2xl border border-cyan-500/40 p-6 shadow-2xl bg-[#081522]/95 overflow-hidden">
      {/* Engine Switcher */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold text-white font-mono">
                {lang === 'en' ? 'LIVE INTERACTIVE SIMULATOR' : 'SIMULATOR TELEMETRI INTERAKTIF'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono animate-pulse">
                ONLINE
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {lang === 'en'
                ? 'Test MNK proprietary IoT & NOC telemetry algorithms in real time'
                : 'Uji langsung respon telemetri IoT dan bot alarm cerdas MNK'}
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center bg-[#0B1F3A] p-1 rounded-xl border border-slate-700/80 text-xs font-mono">
          <button
            onClick={() => setActiveEngine('molinar')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeEngine === 'molinar'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Molinar.id (IoT)
          </button>
          <button
            onClick={() => setActiveEngine('pisbot')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeEngine === 'pisbot'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            PIS_BOT (NOC)
          </button>
        </div>
      </div>

      {/* Engine 1: Molinar.id IoT Telemetry Simulator */}
      {activeEngine === 'molinar' && (
        <div className="pt-6 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Sensor 1: Temperature */}
            <div className="bg-[#0B1F3A]/80 p-4 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span className="font-mono">RACK_TEMP</span>
                <Thermometer className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                {temperature}°C
              </div>
              <div className="text-[10px] text-emerald-400 font-mono mt-1">
                Threshold: &lt; 32°C (Optimal)
              </div>
            </div>

            {/* Sensor 2: AC Voltage */}
            <div className="bg-[#0B1F3A]/80 p-4 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span className="font-mono">MAIN_VOLTAGE</span>
                <Power className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white">
                {voltage} V
              </div>
              <div className="text-[10px] text-emerald-400 font-mono mt-1">
                Nominal 220V ±5%
              </div>
            </div>

            {/* Sensor 3: Door Contact */}
            <div className="bg-[#0B1F3A]/80 p-4 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span className="font-mono">DOOR_MAGNETIC</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-sm font-mono font-bold text-emerald-400">
                {doorSensor}
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-1">
                Perimeter Hall Sensor
              </div>
            </div>

            {/* Sensor 4: Uplink */}
            <div className="bg-[#0B1F3A]/80 p-4 rounded-xl border border-slate-700/80">
              <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                <span className="font-mono">LTE_CARRIER</span>
                <Wifi className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-sm font-mono font-bold text-white">
                4G LTE / Wi-Fi
              </div>
              <div className="text-[10px] text-cyan-400 font-mono mt-1">
                Signal: -68 dBm (Strong)
              </div>
            </div>
          </div>

          {/* Interactive Telecontrol Buttons */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${relayState === 'ON' ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
              <span className="text-xs font-mono text-slate-300">
                Relay Contactor #1 Status:{' '}
                <strong className={relayState === 'ON' ? 'text-emerald-400' : 'text-rose-400'}>
                  {relayState}
                </strong>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                disabled={isSimulatingReboot}
                onClick={triggerRelayToggle}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold flex items-center space-x-2 transition-all disabled:opacity-50"
              >
                <Power className="w-3.5 h-3.5" />
                <span>
                  {isSimulatingReboot
                    ? 'Executing Command...'
                    : `Toggle Remote Telecontrol (${relayState === 'ON' ? 'Turn OFF' : 'Turn ON'})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Engine 2: PIS_BOT Network Sentinel Simulator */}
      {activeEngine === 'pisbot' && (
        <div className="pt-6 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-300">Host Monitored:</span>
              <span className="text-xs font-mono text-cyan-400 font-bold bg-[#0B1F3A] px-2 py-0.5 rounded border border-slate-700">
                PTM-TPR17 (172.16.1.206)
              </span>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                hostStatus === 'HEALTHY'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse'
              }`}>
                {hostStatus}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                disabled={isPinging}
                onClick={triggerPingTest}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-mono flex items-center space-x-1.5 border border-slate-700"
              >
                <Play className="w-3 h-3" />
                <span>{isPinging ? 'Pinging...' : 'Send Test Ping'}</span>
              </button>

              {hostStatus === 'HEALTHY' ? (
                <button
                  onClick={triggerSimulatedAlert}
                  className="px-3 py-1.5 rounded-lg bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-mono flex items-center space-x-1.5"
                >
                  <AlertTriangle className="w-3 h-3" />
                  <span>Simulate Outage</span>
                </button>
              ) : (
                <button
                  onClick={resetBotStatus}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-mono flex items-center space-x-1.5"
                >
                  <CheckCircle className="w-3 h-3" />
                  <span>Restore Host</span>
                </button>
              )}
            </div>
          </div>

          {/* Terminal Console View */}
          <div className="bg-[#050B14] p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 max-h-48 overflow-y-auto">
            {botLogs.map((log, idx) => (
              <div
                key={idx}
                className={`${
                  log.includes('CRITICAL')
                    ? 'text-rose-400 font-bold'
                    : log.includes('RESTORED')
                    ? 'text-emerald-400 font-bold'
                    : log.includes('Executing')
                    ? 'text-amber-300'
                    : 'text-slate-400'
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
