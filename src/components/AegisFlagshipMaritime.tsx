import React, { useState } from 'react';
import { 
  Ship, Shield, Compass, FileText, Wrench, Radio, 
  Terminal
} from 'lucide-react';
import type { Language } from '../i18n/translations';

interface Props {
  onOpenDemo: (prefilledProduct?: string) => void;
  onOpenProductDetail: (productId: string) => void;
  lang?: Language;
}

export const AegisFlagshipMaritime: React.FC<Props> = ({ 
  onOpenDemo, 
  onOpenProductDetail,
  lang = 'id' 
}) => {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const ui = {
    id: {
      badge: 'FLAGSHIP SOLUTION',
      title: 'Aegis Maritime.',
      subtitle: 'Maritime Intelligence. Powered by Private AI.',
      desc: 'Platform Private AI terintegrasi khusus untuk industri maritim, perkapalan, dan armada lepas pantai. Mampu beroperasi secara mandiri di server lokal kapal (100% offline) dan tersinkronisasi via satelit Marine VSAT hemat bandwidth.',
      vesselName: 'MV Samudera 08 • Selat Malaka',
      statusOp: 'Status Operasi',
      statusVal: '100% Edge Offline Ready',
      speedLabel: 'Kecepatan Ideal',
      speedVal: '14.8 Knots (Eco-Speed)',
      vsatLabel: 'Sinkronisasi VSAT',
      vsatVal: 'Micro-Packets (42 KB)',
      modulesTitle: '6 Modul Terintegrasi:',
      demoBtn: 'Jadwalkan Demo Maritim',
      specBtn: 'Spesifikasi Detail',
      simTitle: 'Simulasi Asisten AI Maritim Onboard (100% Offline)',
      simHint: 'Klik pertanyaan untuk menguji respon',
      qPrefix: 'Pertanyaan Nakhoda:',
      aPrefix: 'Respon Aegis Maritime AI:'
    },
    en: {
      badge: 'FLAGSHIP SOLUTION',
      title: 'Aegis Maritime.',
      subtitle: 'Maritime Intelligence. Powered by Private AI.',
      desc: 'Integrated Private AI ecosystem engineered for global shipping, oceanic tankers, and offshore energy assets. Operates 100% offline on local shipboard edge servers with bandwidth-frugal satellite sync.',
      vesselName: 'MV Samudera 08 • Malacca Strait',
      statusOp: 'Operational Status',
      statusVal: '100% Edge Offline Ready',
      speedLabel: 'Optimal Speed',
      speedVal: '14.8 Knots (Eco-Speed)',
      vsatLabel: 'VSAT Satellite Sync',
      vsatVal: 'Micro-Packets (42 KB)',
      modulesTitle: '6 Integrated Modules:',
      demoBtn: 'Schedule Maritime Demo',
      specBtn: 'Full Specifications',
      simTitle: 'Onboard Maritime AI Assistant Simulation (100% Offline)',
      simHint: 'Click a prompt to evaluate response telemetry',
      qPrefix: 'Captain & Chief Engineer Inquiry:',
      aPrefix: 'Aegis Maritime AI Response:'
    },
    ja: {
      badge: '旗艦ソリューション',
      title: 'Aegis Maritime.',
      subtitle: '海洋知性。専用Private AIで実現する自律航行。',
      desc: '外航タンカー、貨物船団、オフショア設備のために設計された統合型海洋AI。船内ローカルサーバーで100%オフライン自律稼働し、狭帯域VSAT回線で陸上本社と極小差分同期。',
      vesselName: 'MV Samudera 08 • マラッカ海峡',
      statusOp: '稼働状態',
      statusVal: '完全オフラインエッジ稼働中',
      speedLabel: '最適巡航速度',
      speedVal: '14.8ノット (省燃費モード)',
      vsatLabel: '衛星通信同期',
      vsatVal: '極小パケット (42 KB)',
      modulesTitle: '統合6大モジュール:',
      demoBtn: '海洋AIデモを予約する',
      specBtn: '詳細仕様書を見る',
      simTitle: '船内AIアシスタント対話シミュレーション (100%オフライン)',
      simHint: '質問をクリックしてAIの応答を検証',
      qPrefix: '船長・機関長からの照会:',
      aPrefix: 'Aegis Maritime AIの回答:'
    },
    ar: {
      badge: 'الحل البحري الرائد',
      title: 'Aegis Maritime.',
      subtitle: 'الذكاء البحري مدعوماً بنماذج الذكاء الاصطناعي الخاص.',
      desc: 'منظومة ذكاء اصطناعي بحري متكاملة مصممة لأساطيل الناقلات ومنصات الطاقة البحرية، تعمل محلياً 100% دون إنترنت مع مزامنة أقمار صناعية فائقة التوفير.',
      vesselName: 'ناقلة ساموديرا 08 • مضيق ملقا',
      statusOp: 'حالة التشغيل',
      statusVal: 'جاهزية محلية كاملة 100% دون إنترنت',
      speedLabel: 'السرعة الاقتصادية',
      speedVal: '14.8 عقدة (Eco-Speed)',
      vsatLabel: 'مزامنة الأقمار الصناعية',
      vsatVal: 'حزم بيانات متناهية الصغر (42 ك.ب)',
      modulesTitle: '6 وحدات تشغيلية متكاملة:',
      demoBtn: 'حجز عرض بحري تجريبي',
      specBtn: 'المواصفات الفنية التفصيلية',
      simTitle: 'محاكاة المساعد الذكي على متن السفينة (محلي 100%)',
      simHint: 'اضغط على أي استفسار لاستعراض إجابة الذكاء الاصطناعي',
      qPrefix: 'استفسار الربان أو كبير المهندسين:',
      aPrefix: 'إجابة نظام Aegis Maritime AI:'
    }
  }[lang] || {
    badge: 'FLAGSHIP SOLUTION',
    title: 'Aegis Maritime.',
    subtitle: 'Maritime Intelligence. Powered by Private AI.',
    desc: 'Platform Private AI terintegrasi khusus untuk industri maritim, perkapalan, dan armada lepas pantai.',
    vesselName: 'MV Samudera 08 • Selat Malaka',
    statusOp: 'Status Operasi',
    statusVal: '100% Edge Offline Ready',
    speedLabel: 'Kecepatan Ideal',
    speedVal: '14.8 Knots (Eco-Speed)',
    vsatLabel: 'Sinkronisasi VSAT',
    vsatVal: 'Micro-Packets (42 KB)',
    modulesTitle: '6 Modul Terintegrasi:',
    demoBtn: 'Jadwalkan Demo Maritim',
    specBtn: 'Spesifikasi Detail',
    simTitle: 'Simulasi Asisten AI Maritim Onboard (100% Offline)',
    simHint: 'Klik pertanyaan untuk menguji respon',
    qPrefix: 'Pertanyaan Nakhoda:',
    aPrefix: 'Respon Aegis Maritime AI:'
  };

  const localizedModules = {
    id: [
      { name: 'Aegis Vessel AI', desc: 'Digital twin telemetri mesin, temperatur silinder, RPM, dan efisiensi konsumsi bahan bakar bunker kapal.', icon: Ship },
      { name: 'Document Intelligence', desc: 'Pengarsipan dan temu balik cerdas sertifikat statutoria (IOPP, ISM Code, Class, Flag State).', icon: FileText },
      { name: 'Maintenance AI', desc: 'Planned Maintenance System (PMS) dengan panduan langkah perbaikan teknis offline di laut lepas.', icon: Wrench },
      { name: 'Fleet Intelligence', desc: 'Pemantauan rute global AIS, kalkulasi cuaca laut, dan estimasi waktu sandar pelabuhan.', icon: Radio },
      { name: 'Compliance Intelligence', desc: 'Validasi otomatis kesiapan audit inspeksi SIRE 2.0, SOLAS, MARPOL, dan MLC 2006.', icon: Shield },
      { name: 'Maritime Assistant', desc: 'Asisten AI onboard yang mampu merespons pertanyaan nakhoda dan chief engineer tanpa koneksi internet.', icon: Compass },
    ],
    en: [
      { name: 'Aegis Vessel AI', desc: 'Real-time telemetry digital twin for cylinder temps, engine load RPM, and fuel consumption curves.', icon: Ship },
      { name: 'Document Intelligence', desc: 'Intelligent semantic indexing of statutory maritime certificates (IOPP, ISM Code, Class, Flag State).', icon: FileText },
      { name: 'Maintenance AI', desc: 'Planned Maintenance System (PMS) with offline technical overhaul guides in deep-sea waters.', icon: Wrench },
      { name: 'Fleet Intelligence', desc: 'Global AIS tracking fusion, dynamic ocean weather calculation, and port ETA optimization.', icon: Radio },
      { name: 'Compliance Intelligence', desc: 'Automated pre-audit gap checks for SIRE 2.0 vetting, SOLAS, MARPOL, and MLC 2006 compliance.', icon: Shield },
      { name: 'Maritime Assistant', desc: 'Onboard conversational AI responding to captains and chief engineers without an active internet connection.', icon: Compass },
    ],
    ja: [
      { name: 'Aegis Vessel AI', desc: '主機シリンダー温度、機関回転数、燃料消費曲線のリアルタイム・デジタルツイン解析。', icon: Ship },
      { name: 'Document Intelligence', desc: '国際法定証書（IOPP、ISMコード、船級証書、旗国文書）のセマンティック即時検索。', icon: FileText },
      { name: 'Maintenance AI', desc: '洋上完全オフラインで動作する計画予防保全（PMS）および機関オーバーホール手順ガイド。', icon: Wrench },
      { name: 'Fleet Intelligence', desc: '全世界AIS航跡、気象海象予測データ、および寄港予定時刻（ETA）の動的最適化。', icon: Radio },
      { name: 'Compliance Intelligence', desc: 'SIRE 2.0石油メジャー検査、SOLAS、MARPOL、MLC 2006条約の事前自動監査。', icon: Shield },
      { name: 'Maritime Assistant', desc: '通信遮断時でも船長や機関長からの技術照会に自然言語で即答する船内常駐AI。', icon: Compass },
    ],
    ar: [
      { name: 'Aegis Vessel AI', desc: 'توأم رقمي للقياس الآني لحرارة أسطوانات المحرك، والسرعة، ومعدلات استهلاك الوقود البحري.', icon: Ship },
      { name: 'Document Intelligence', desc: 'فهرسة ذكية واسترجاع فوري لشهادات السفينة القانونية ومعايير (IOPP و ISM Code وهيئات التصنيف).', icon: FileText },
      { name: 'Maintenance AI', desc: 'نظام الصيانة الوقائية البحرية (PMS) مع أدلة توجيهية للإصلاحات الميكانيكية دون إنترنت.', icon: Wrench },
      { name: 'Fleet Intelligence', desc: 'دمج تتبع أنظمة AIS العالمية، ومحاكاة أحوال الطقس البحري، وحساب وقت الوصول المقدر للموانئ.', icon: Radio },
      { name: 'Compliance Intelligence', desc: 'تدقيق آلي مسبق للتفتيش البحري الصارم SIRE 2.0 ومعايير SOLAS و MARPOL الدولية.', icon: Shield },
      { name: 'Maritime Assistant', desc: 'مساعد ذكاء اصطناعي على متن السفينة يجيب عن استفسارات الربان وكبير المهندسين دون إنترنت.', icon: Compass },
    ]
  }[lang] || [];

  const localizedQuestions = {
    id: [
      {
        q: 'Berapa histori kerusakan auxiliary engine kapal MV Samudera 08?',
        a: 'Catatan 6 bulan terakhir: 1 insiden kebocoran seal injector (12 Mei). Tindakan perbaikan selesai dalam 4 jam kerja. Vibrasi normal 2.1 mm/s.'
      },
      {
        q: 'Dokumen dan sertifikat kapal apa yang akan expired dalam 60 hari?',
        a: 'Ditemukan 2 sertifikat: International Oil Pollution Prevention (IOPP) berakhir 14 November 2026 dan Sertifikat Safety Radio berakhir 28 November 2026.'
      },
      {
        q: 'Maintenance apa yang harus dilakukan sebelum docking terjadwal?',
        a: 'Rekomendasi PMS: Inspeksi ketebalan pelat lambung (Ultrasonic Gauging), servis overhauling sea chest valve, dan kalibrasi sensor gas detektor kargo.'
      }
    ],
    en: [
      {
        q: 'What is the auxiliary engine breakdown history for MV Samudera 08?',
        a: 'Past 6-month log: 1 injector seal leakage event (May 12). Rectified in 4 service hours. Vibration harmonics nominal at 2.1 mm/s.'
      },
      {
        q: 'Which vessel statutory certificates will expire within the next 60 days?',
        a: 'Flagged 2 statutory items: International Oil Pollution Prevention (IOPP) expires Nov 14, 2026, and Cargo Ship Safety Radio expires Nov 28, 2026.'
      },
      {
        q: 'What critical PMS maintenance tasks are scheduled prior to drydocking?',
        a: 'PMS Directives: Hull plate ultrasonic thickness gauging, sea chest valve overhaul, and fixed cargo hydrocarbon gas detector calibration.'
      }
    ],
    ja: [
      {
        q: 'MV Samudera 08号の補機エンジンの修繕履歴を教えてください。',
        a: '過去6か月の記録: 5月12日に燃料噴射弁シールの微小漏れが1件発生。4時間で部品交換完了。現在の振動値は2.1 mm/sと正常範囲です。'
      },
      {
        q: '今後60日以内に有効期限を迎える法定証書・検査証はありますか？',
        a: '2件の証書が該当します: 国際海洋汚染防止証書（IOPP: 2026年11月14日満了）および貨物船安全無線証書（2026年11月28日満了）。'
      },
      {
        q: '次期定期入渠（ドック入り）前に実施すべき重要保全項目は何ですか？',
        a: 'PMS推奨項目: 外板板厚超音波計測（超音波探傷）、シーチェストバルブの分解整備、およびカーゴタンク固定式ガス検知器の校正。'
      }
    ],
    ar: [
      {
        q: 'ما هو سجل أعطال المولد المساعد لسفينة ساموديرا 08 خلال الفترة الماضية؟',
        a: 'سجل آخر 6 أشهر: حالة تسريب واحدة في حلقة حاقن الوقود (12 مايو). تم الإصلاح في 4 ساعات عمل. الاهتزازات ضمن المعدل الطبيعي 2.1 ملم/ث.'
      },
      {
        q: 'ما هي الشهادات والوثائق القانونية للسفينة التي ستنتهي خلال 60 يوماً؟',
        a: 'تم رصد وثيقتين: شهادة منع التلوث النفطي الدولية (IOPP تنتهي في 14 نوفمبر 2026) وشهادة سلامة اللاسلكي (تنتهي في 28 نوفمبر 2026).'
      },
      {
        q: 'ما هي مهام الصيانة الوقائية (PMS) المطلوبة قبل دخول الحوض الجاف؟',
        a: 'توصيات النظام: قياس سماكة صفائح البدن بالموجات فوق الصوتية، وفحص صمامات سحب مياه البحر، ومعايرة حساسات الغاز بخزانات الشحن.'
      }
    ]
  }[lang] || [];

  return (
    <section className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Apple Pro Style Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#2997FF] text-xs font-mono mb-3">
              <span>{ui.badge}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight font-sans">
              {ui.title}
            </h2>
            <p className="text-xl text-[#86868B] font-sans font-light mt-1">
              {ui.subtitle}
            </p>
          </div>
          <div className="max-w-xl text-[#86868B] text-sm leading-relaxed font-sans">
            {ui.desc}
          </div>
        </div>

        {/* Hero Cinematic Frame */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Cinematic Vessel Asset in Apple-style Glass Frame */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
              <img 
                src="/assets/generated/maritime_hero.jpg" 
                alt="Aegis Maritime Vessel Telemetry Fleet" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Apple-style floating frosted pills */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/[0.15] backdrop-blur-xl font-mono text-[11px] text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{ui.vesselName}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 border border-white/[0.12] backdrop-blur-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-white">
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">{ui.statusOp}</span>
                  <span className="font-semibold text-white">{ui.statusVal}</span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">{ui.speedLabel}</span>
                  <span className="font-semibold text-[#2997FF]">{ui.speedVal}</span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">{ui.vsatLabel}</span>
                  <span className="font-semibold text-emerald-400">{ui.vsatVal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 6 Modules Bento List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] mb-2 flex justify-between">
              <span>{ui.modulesTitle}</span>
              <span className="text-[#2997FF]">Aegis Maritime Suite</span>
            </div>

            <div className="space-y-2">
              {localizedModules.map((mod, idx) => {
                const Icon = mod.icon || Ship;
                const isSelected = activeModule === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#0071E3] text-white' : 'bg-white/[0.06] text-[#86868B]'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-semibold font-sans ${isSelected ? 'text-white' : 'text-[#D2D2D7]'}`}>
                          {mod.name}
                        </div>
                        <div className="text-xs text-[#86868B] line-clamp-1 mt-0.5 font-sans">
                          {mod.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Apple Style CTAs */}
            <div className="pt-4 flex items-center space-x-3">
              <button
                onClick={() => onOpenDemo('AEGIS MARITIME')}
                className="apple-pill-btn flex-1 py-3 px-5 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] transition-all text-center cursor-pointer shadow-sm"
              >
                {ui.demoBtn}
              </button>
              <button
                onClick={() => onOpenProductDetail('aegis-maritime')}
                className="apple-pill-btn py-3 px-5 text-xs font-medium text-[#F5F5F7] bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] transition-all cursor-pointer"
              >
                {ui.specBtn}
              </button>
            </div>
          </div>

        </div>

        {/* Offline Assistant Simulation Card */}
        <div className="mt-12 apple-card p-6 sm:p-8 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08]">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-[#2997FF]" />
              <h3 className="text-sm font-semibold text-white font-sans">
                {ui.simTitle}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#86868B]">
              {ui.simHint}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {localizedQuestions.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveQuestion(activeQuestion === item.q ? null : item.q)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                  activeQuestion === item.q
                    ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-md'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}
              >
                <div className="text-[10px] font-mono text-[#86868B] uppercase mb-1">
                  {ui.qPrefix}
                </div>
                <div className="text-xs font-medium text-[#F5F5F7]">
                  &quot;{item.q}&quot;
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.06] text-xs text-[#A1A1A6] leading-relaxed font-sans">
                  <span className="text-[#2997FF] font-semibold block text-[10px] font-mono uppercase mb-0.5">
                    {ui.aPrefix}
                  </span>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
