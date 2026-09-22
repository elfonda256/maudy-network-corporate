import React, { useState } from 'react';
import { Cpu, FileText, Activity, Database, Shield, Layers } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface Props {
  lang?: Language;
}

export const AegisProductEcosystem: React.FC<Props> = ({ lang = 'id' }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const texts = {
    id: {
      badge: 'ARSITEKTUR TERPADU',
      title: 'Aegis AI Unified Ecosystem.',
      subtitle: 'Satu fondasi Private AI Engine yang mengorkestrasikan kecerdasan dokumen, otomasi workflow, data analitik, dan telemetri IoT lintas seluruh sektor industri.',
      topNode: 'AEGIS AI ECOSYSTEM',
      coreTitle: 'Private AI Engine (Core Orchestrator)',
      coreSub: 'Self-Hosted LLMs • Vector RAG • Air-Gapped GPU Clusters • Multi-Tenant RBAC',
      industriesLabel: 'Penerapan Sektor Industri Nyata:',
      pillars: [
        { id: 'doc', name: 'DOCUMENT AI', sub: 'OCR & Semantic RAG', icon: FileText, desc: 'Pengolahan puluhan ribu lembar kontrak & arsip' },
        { id: 'workflow', name: 'WORKFLOW AI', sub: 'Otomasi & Approval', icon: Activity, desc: 'Pemicu alur kerja & Purchase Order bertingkat' },
        { id: 'data', name: 'DATA & BI', sub: 'Natural Language BI', icon: Database, desc: 'Tanya jawab analitik penjualan & arus kas' },
        { id: 'industry', name: 'INDUSTRY IOT', sub: 'Digital Twin & Sensors', icon: Layers, desc: 'Telemetri mesin kapal, armada & pabrik' },
        { id: 'security', name: 'CYBER GUARD', sub: 'Deteksi Anomali SOC', icon: Shield, desc: 'Pertahanan identitas & mitigasi siber otonom' },
      ],
      industries: [
        'Maritim & Pelayaran', 'Konstruksi & Proyek', 'Pengadaan & Vendor', 'Manufaktur & Pabrik',
        'Armada & Logistik', 'Compliance & Regulasi', 'Kawasan Industri', 'Enterprise Korporat'
      ]
    },
    en: {
      badge: 'UNIFIED ARCHITECTURE',
      title: 'Aegis AI Unified Ecosystem.',
      subtitle: 'A single sovereign Private AI Engine orchestrating document intelligence, workflow automation, executive analytics, and industrial IoT telemetry across strategic sectors.',
      topNode: 'AEGIS AI ECOSYSTEM',
      coreTitle: 'Private AI Engine (Core Orchestrator)',
      coreSub: 'Self-Hosted LLMs • Vector RAG • Air-Gapped GPU Clusters • Multi-Tenant RBAC',
      industriesLabel: 'Strategic Production Implementations:',
      pillars: [
        { id: 'doc', name: 'DOCUMENT AI', sub: 'OCR & Semantic RAG', icon: FileText, desc: 'Ingestion and reasoning across thousands of contracts & blueprints' },
        { id: 'workflow', name: 'WORKFLOW AI', sub: 'Autonomous Approval', icon: Activity, desc: 'Tiered purchase order triggers & automated escalation engines' },
        { id: 'data', name: 'DATA & BI', sub: 'Natural Language BI', icon: Database, desc: 'Conversational executive cash flow & margin decomposition' },
        { id: 'industry', name: 'INDUSTRY IOT', sub: 'Digital Twin & Telemetry', icon: Layers, desc: 'Deep-sea vessel, haulage fleet & smart factory sensor fusion' },
        { id: 'security', name: 'CYBER GUARD', sub: 'Autonomous Threat SOC', icon: Shield, desc: 'Zero Trust microsegmentation & autonomous lateral kill containment' },
      ],
      industries: [
        'Maritime & Shipping', 'Construction & EPC', 'Procurement & Supply Chain', 'Smart Manufacturing',
        'Fleet & Logistics', 'Compliance & Governance', 'Industrial Parks', 'Corporate Conglomerates'
      ]
    },
    ja: {
      badge: '統合アーキテクチャ',
      title: 'Aegis AI 統合エコシステム。',
      subtitle: '単一の専用Private AIエンジンが、文書知性、業務自動化、データ分析、および産業IoTテレメトリを全産業分野で有機的に統括。',
      topNode: 'AEGIS AI エコシステム',
      coreTitle: 'Private AI エンジン (中核オーケストレーター)',
      coreSub: '独自運用LLM • ベクトルRAG • エアギャップGPUクラスタ • 権限分離RBAC',
      industriesLabel: '実産業への適用分野:',
      pillars: [
        { id: 'doc', name: '文書知性 AI', sub: 'OCR＆意味論RAG', icon: FileText, desc: '数万ページの契約書・設計図・仕様書の意味論的解析' },
        { id: 'workflow', name: 'ワークフロー AI', sub: '自律承認フロー', icon: Activity, desc: '多段階発注書（PO）起票と承認ルートの自動統制' },
        { id: 'data', name: 'データ＆BI', sub: '自然言語データ分析', icon: Database, desc: 'SQL不要：対話形式による売上・原価・キャッシュフロー分析' },
        { id: 'industry', name: '産業 IoT', sub: 'デジタルツイン・遠隔監視', icon: Layers, desc: '外航船・トラックフリート・スマート工場のセンサー統合' },
        { id: 'security', name: 'サイバー防衛', sub: '自律脅威封じ込め', icon: Shield, desc: 'ゼロトラスト・ID保護と侵入インシデントのミリ秒自動遮断' },
      ],
      industries: [
        '海運・外航タンカー', '建設・ゼネコン', '調達・購買サプライチェーン', 'スマート製造工場',
        '物流・車両フリート', 'コンプライアンス・内部統制', '工業団地・インフラ', '大手企業グループ'
      ]
    },
    ar: {
      badge: 'البنية المعمارية الموحدة',
      title: 'منظومة إيجيس للذكاء الاصطناعي الموحد.',
      subtitle: 'محرك ذكاء اصطناعي خاص ومستقل يوجه وينسق معالجة الوثائق، وأتمتة العمليات، والتحليلات التنفيذية، والقياس عن بُعد لإنترنت الأشياء عبر كافة القطاعات.',
      topNode: 'منظومة إيجيس للذكاء الاصطناعي',
      coreTitle: 'محرك الذكاء الاصطناعي الخاص (الموجه المركزي)',
      coreSub: 'نماذج LLM محلية • تضمين المتجهات RAG • معالجات GPU معزولة • أذونات RBAC',
      industriesLabel: 'تطبيقات القطاعات الحيوية الواقعية:',
      pillars: [
        { id: 'doc', name: 'ذكاء الوثائق AI', sub: 'OCR واسترجاع RAG', icon: FileText, desc: 'معالجة وفهم مئات الآلاف من صفحات العقود والأرشيف الهندسي' },
        { id: 'workflow', name: 'أتمتة العمليات AI', sub: 'مسارات الاعتماد المستقلة', icon: Activity, desc: 'توليد أوامر الشراء آلياً وإدارة الموافقات الإدارية المتدرجة' },
        { id: 'data', name: 'البيانات والذكاء BI', sub: 'استعلام باللغة الطبيعية', icon: Database, desc: 'تحليل فوري للمبيعات والتدفقات النقدية دون الحاجة لـ SQL' },
        { id: 'industry', name: 'إنترنت الأشياء الصناعي', sub: 'التوأم الرقمي والحساسات', icon: Layers, desc: 'دمج قياسات المحركات البحرية وأساطيل النقل وخطوط المصانع' },
        { id: 'security', name: 'الحارس السيبراني', sub: 'كشف الشذوذ الأمني SOC', icon: Shield, desc: 'تطبيق الثقة الصفرية واحتواء التهديدات السيبرانية ذاتياً' },
      ],
      industries: [
        'الملاحة البحرية والشحن', 'الإنشاءات والمقاولات الكبرى', 'المشتريات وسلاسل الإمداد', 'المصانع الذكية',
        'الأساطيل والخدمات اللوجستية', 'الحوكمة والامتثال الرقابي', 'المدن الصناعية', 'المجموعات والشركات الكبرى'
      ]
    }
  }[lang] || {
    badge: 'ARSITEKTUR TERPADU',
    title: 'Aegis AI Unified Ecosystem.',
    subtitle: 'Satu fondasi Private AI Engine yang mengorkestrasikan kecerdasan dokumen, otomasi workflow, data analitik, dan telemetri IoT.',
    topNode: 'AEGIS AI ECOSYSTEM',
    coreTitle: 'Private AI Engine (Core Orchestrator)',
    coreSub: 'Self-Hosted LLMs • Vector RAG • Air-Gapped GPU Clusters • Multi-Tenant RBAC',
    industriesLabel: 'Penerapan Sektor Industri Nyata:',
    pillars: [
      { id: 'doc', name: 'DOCUMENT AI', sub: 'OCR & Semantic RAG', icon: FileText, desc: 'Pengolahan puluhan ribu lembar kontrak & arsip' },
      { id: 'workflow', name: 'WORKFLOW AI', sub: 'Otomasi & Approval', icon: Activity, desc: 'Pemicu alur kerja & Purchase Order bertingkat' },
      { id: 'data', name: 'DATA & BI', sub: 'Natural Language BI', icon: Database, desc: 'Tanya jawab analitik penjualan & arus kas' },
      { id: 'industry', name: 'INDUSTRY IOT', sub: 'Digital Twin & Sensors', icon: Layers, desc: 'Telemetri mesin kapal, armada & pabrik' },
      { id: 'security', name: 'CYBER GUARD', sub: 'Deteksi Anomali SOC', icon: Shield, desc: 'Pertahanan identitas & mitigasi siber otonom' },
    ],
    industries: [
      'Maritim & Pelayaran', 'Konstruksi & Proyek', 'Pengadaan & Vendor', 'Manufaktur & Pabrik',
      'Armada & Logistik', 'Compliance & Regulasi', 'Kawasan Industri', 'Enterprise Korporat'
    ]
  };

  return (
    <section className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <span>{texts.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {texts.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            {texts.subtitle}
          </p>
        </div>

        {/* Apple Style Hierarchy Frame */}
        <div className="apple-card max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] shadow-2xl">
          
          {/* Top Level: AEGIS AI ECOSYSTEM */}
          <div className="inline-block relative z-10">
            <div className="apple-pill-btn px-8 py-3 bg-white text-black font-semibold tracking-wider text-xs shadow-lg">
              {texts.topNode}
            </div>
          </div>

          {/* Line Down */}
          <div className="w-px h-8 bg-white/[0.15] mx-auto"></div>

          {/* Level 2: PRIVATE AI ENGINE */}
          <div className="inline-block relative z-10">
            <div className="p-5 px-8 rounded-3xl bg-white/[0.04] border border-white/[0.1] text-white">
              <div className="flex items-center space-x-2.5 justify-center">
                <Cpu className="w-5 h-5 text-[#2997FF]" />
                <span className="font-semibold text-base font-sans text-white">
                  {texts.coreTitle}
                </span>
              </div>
              <div className="text-[11px] font-sans text-[#86868B] mt-1 font-light">
                {texts.coreSub}
              </div>
            </div>
          </div>

          {/* Lines to Pillars */}
          <div className="w-px h-8 bg-white/[0.15] mx-auto"></div>
          <div className="hidden md:block w-4/5 h-px bg-white/[0.12] mx-auto"></div>

          {/* Level 3: 5 Capability Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4 text-left">
            {texts.pillars.map((p) => {
              const Icon = p.icon;
              const isHovered = hoveredNode === p.id;
              return (
                <div
                  key={p.id}
                  onMouseEnter={() => setHoveredNode(p.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-4 rounded-2xl border transition-all ${
                    isHovered
                      ? 'bg-white/[0.08] border-[#2997FF]/60 shadow-lg'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="p-1.5 rounded-xl bg-white/[0.06] text-[#2997FF]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-white font-sans">{p.name}</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#2997FF]">{p.sub}</div>
                  <div className="text-[11px] text-[#86868B] mt-1 font-sans leading-snug">{p.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Line to Industries */}
          <div className="w-px h-8 bg-white/[0.15] mx-auto mt-4"></div>
          <div className="hidden md:block w-11/12 h-px bg-white/[0.12] mx-auto"></div>

          {/* Level 4: Industry Applications */}
          <div className="mt-5 pt-2">
            <div className="text-[11px] font-mono text-[#86868B] uppercase tracking-wider mb-3">
              {texts.industriesLabel}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {texts.industries.map((ind, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-xs font-sans text-[#D2D2D7]"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
