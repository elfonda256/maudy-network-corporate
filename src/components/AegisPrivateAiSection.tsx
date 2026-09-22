import React, { useState } from 'react';
import { Shield, Lock } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
  onOpenDemo: (prefilled?: string) => void;
}

export const AegisPrivateAiSection: React.FC<Props> = ({ lang = 'id', onOpenDemo }) => {
  const [activeDeployment, setActiveDeployment] = useState<'onprem' | 'privatecloud' | 'hybrid'>('onprem');

  const t = AEGIS_UI_TEXTS[lang]?.privateAi || AEGIS_UI_TEXTS.id.privateAi;

  const floatingTags = {
    id: { perimeter: 'Perimeter Sistem', status: 'Terisolasi Mandiri', enc: 'Enkripsi', egress: 'Outbound Publik', zero: '0 Byte Keluar' },
    en: { perimeter: 'Security Perimeter', status: 'Air-Gapped Isolated', enc: 'Encryption', egress: 'Public Egress', zero: '0 Bytes Outbound' },
    ja: { perimeter: '防衛境界', status: '完全物理隔離', enc: '暗号化基準', egress: '外部送信', zero: '完全ゼロ (0 Byte)' },
    ar: { perimeter: 'النطاق الأمني', status: 'معزول ذاتياً', enc: 'التشفير', egress: 'التدفق الخارجي', zero: 'صفر بايت صادر' }
  }[lang] || { perimeter: 'Perimeter Sistem', status: 'Terisolasi Mandiri', enc: 'Enkripsi', egress: 'Outbound Publik', zero: '0 Byte Keluar' };

  const architectureFlowTitle = {
    id: { title: 'Alur Pemrosesan Terisolasi', badge: 'Strict Boundary' },
    en: { title: 'Isolated Processing Architecture', badge: 'Strict Boundary' },
    ja: { title: '完全隔離推論パイプライン', badge: '厳格な境界分離' },
    ar: { title: 'مسار المعالجة المعزول', badge: 'حدود سيادية صارمة' }
  }[lang] || { title: 'Alur Pemrosesan Terisolasi', badge: 'Strict Boundary' };

  const architectureSteps = {
    id: [
      { step: '01', title: 'Data Organisasi', desc: 'Arsip internal, dokumen tender, database SQL, telemetri sensor' },
      { step: '02', title: 'Infrastruktur Privat', desc: 'Server on-premise atau private VPC khusus organisasi Anda' },
      { step: '03', title: 'Self-Hosted LLM', desc: 'Model bahasa terkuantisasi yang berjalan mandiri tanpa API publik' },
      { step: '04', title: 'Enterprise RAG', desc: 'Pencarian semantik berdensitas tinggi dengan sitasi dokumen valid' },
      { step: '05', title: 'Aksi & Keputusan', desc: 'Otomasi workflow, antarmuka keputusan, dan peringatan dini' },
    ],
    en: [
      { step: '01', title: 'Enterprise Data', desc: 'Internal archives, tender files, SQL databases, sensor telemetry' },
      { step: '02', title: 'Private Infrastructure', desc: 'Dedicated on-premise servers or isolated single-tenant VPC' },
      { step: '03', title: 'Self-Hosted LLM', desc: 'Quantized language models running locally without external APIs' },
      { step: '04', title: 'Enterprise RAG', desc: 'Dense vector retrieval with verifiable citation links' },
      { step: '05', title: 'Action & Execution', desc: 'Workflow automation, executive dashboards, preemptive alerts' },
    ],
    ja: [
      { step: '01', title: '企業内部データ', desc: '社内規程、入札書類、基幹データベース、IoTセンサーデータ' },
      { step: '02', title: '専用プライベート基盤', desc: '自社所有オンプレミスサーバーまたは完全隔離プライベートVPC' },
      { step: '03', title: 'セルフホストLLM', desc: 'パブリックAPIを一切介さずローカルGPUで推論完結する独自モデル' },
      { step: '04', title: '自社専用RAG', desc: '根拠文書の引用リンクを保証する高精度ベクトル検索照合' },
      { step: '05', title: '意思決定・自動実行', desc: '業務フロー自動化、経営判断ダッシュボード、予防アラート発報' },
    ],
    ar: [
      { step: '01', title: 'بيانات المؤسسة', desc: 'الأرشيف الداخلي، وثائق المناقصات، قواعد البيانات، حساسات IoT' },
      { step: '02', title: 'البنية التحتية الخاصة', desc: 'خوادم محلية On-Premise أو سحابة خاصة معزولة كلياً' },
      { step: '03', title: 'نماذج LLM محلية', desc: 'نماذج لغوية تعمل ذاتياً دون أي اتصال بواجهات سحابية خارجية' },
      { step: '04', title: 'استرجاع معزز RAG', desc: 'بحث دلالي متقدم بالمتجهات مع تقديم مراجع موثقة للمستندات' },
      { step: '05', title: 'الإجراءات والقرارات', desc: 'أتمتة مسارات العمل، ولوحات القيادة، والإنذارات المبكرة' },
    ]
  }[lang] || [];

  const localizedDeployments = {
    id: [
      {
        id: 'onprem',
        title: 'On-Premise',
        badge: 'Air-Gapped Ready',
        desc: 'Model AI dan infrastruktur komputasi dipasang langsung di pusat data fisik organisasi Anda. Dirancang untuk memberikan kontrol penuh terhadap data tanpa ketergantungan pada koneksi internet publik.',
        idealFor: 'Pemerintahan, Pertahanan, Fasilitas Migas & Energi, Perbankan'
      },
      {
        id: 'privatecloud',
        title: 'Private Cloud',
        badge: 'Virtual Private VPC',
        desc: 'Infrastruktur cloud privat terisolasi (single-tenant) dengan enkripsi menyeluruh at-rest dan in-transit. Memberikan fleksibilitas komputasi dengan perimeter keamanan jaringan yang terpisah secara mutlak.',
        idealFor: 'Konglomerasi, BUMN Korporat, Finansial Modern'
      },
      {
        id: 'hybrid',
        title: 'Hybrid Edge',
        badge: 'Edge Synchronization',
        desc: 'Model ringan berjalan pada perangkat edge lokal (seperti kapal laut atau site proyek) untuk respon instan tanpa internet, dengan sinkronisasi terkompresi secara berkala ke pusat data.',
        idealFor: 'Armada Maritim Lepas Pantai, Pabrik Terdistribusi, Konstruksi Jauh'
      }
    ],
    en: [
      {
        id: 'onprem',
        title: 'On-Premise',
        badge: 'Air-Gapped Ready',
        desc: 'AI models and compute infrastructure deployed directly inside your physical on-premise datacenter. Full mathematical data control with zero dependence on public internet.',
        idealFor: 'Defense, Intelligence, Public Sector Ministries, Oil & Gas, Tier-1 Banking'
      },
      {
        id: 'privatecloud',
        title: 'Private Cloud',
        badge: 'Virtual Private VPC',
        desc: 'Isolated single-tenant private cloud VPC with strict cryptographic encryption at-rest and in-transit. Compute elasticity within an impenetrable security perimeter.',
        idealFor: 'Conglomerates, State Owned Enterprises, Modern Financial Institutions'
      },
      {
        id: 'hybrid',
        title: 'Hybrid Edge',
        badge: 'Edge Synchronization',
        desc: 'Lightweight models execute on local field edge servers (oceanic tankers, remote sites) for zero-latency offline response with periodic compressed synchronization.',
        idealFor: 'Oceanic Tanker Fleets, Distributed Factories, Remote Construction Sites'
      }
    ],
    ja: [
      {
        id: 'onprem',
        title: 'オンプレミス',
        badge: '完全エアギャップ対応',
        desc: 'AIモデルと計算機資源をお客様の物理データセンター内に直接配備。インターネット接続を完全に遮断した状態で最高水準のデータ主権を確立します。',
        idealFor: '防衛・情報機関、中央省庁、エネルギー・重要インフラ、都市銀行'
      },
      {
        id: 'privatecloud',
        title: 'プライベートクラウド',
        badge: '完全専用VPC環境',
        desc: '他社と共用しないシングルテナント専用VPC環境。保存時・伝送時の完全暗号化により、クラウドの柔軟性と厳格な境界セキュリティを両立。',
        idealFor: '大手複合企業（コングロマリット）、上場企業、フィンテック'
      },
      {
        id: 'hybrid',
        title: 'ハイブリッド・エッジ',
        badge: 'エッジ分散同期型',
        desc: '船舶や遠隔現場のローカルエッジ端末でAIが完全オフライン動作し、通信確立時に超高圧縮データのみを安全に本社へ差分同期。',
        idealFor: '外航船団、多拠点分散型工場、遠隔プラント・インフラ施工現場'
      }
    ],
    ar: [
      {
        id: 'onprem',
        title: 'محلي (On-Premise)',
        badge: 'معزول تماماً Air-Gapped',
        desc: 'تثبيت نماذج الذكاء الاصطناعي والبنية الحاسوبية داخل مراكز البيانات المادية الخاصة بمؤسستك، للتحكم المطلق دون أي حاجة للإنترنت العام.',
        idealFor: 'الدفاع والأمن، الوزارات الحساسة، قطاع النفط والغاز، البنوك المركزية'
      },
      {
        id: 'privatecloud',
        title: 'سحابة خاصة',
        badge: 'سحابة افتراضية VPC',
        desc: 'بنية سحابية خاصة أحادية المستأجر (Single-Tenant) مع تشفير شامل أثناء التخزين والنقل، توفر مرونة حوسبة ضمن نطاق أمني صارم.',
        idealFor: 'المجموعات القابضة، كبرى الشركات الوطنية، المؤسسات المالية الحديثة'
      },
      {
        id: 'hybrid',
        title: 'حوسبة الحافة الهجينة',
        badge: 'مزامنة الحافة الذكية',
        desc: 'تشغيل نماذج ذكاء اصطناعي خفيفة على خوادم الحافة الميدانية (مثل السفن والمواقع النائية) مع مزامنة دورية فائقة الضغط للمركز الرئيسي.',
        idealFor: 'أساطيل الناقلات البحرية، المصانع الموزعة، مواقع المشاريع النائية'
      }
    ]
  }[lang] || [];

  const idealForLabel = {
    id: 'Sesuai untuk:',
    en: 'Ideal for:',
    ja: '最適な導入先:',
    ar: 'القطاعات المناسبة:'
  }[lang] || 'Sesuai untuk:';

  const consultBtnText = {
    id: 'Konsultasikan Arsitektur Private AI',
    en: 'Consult on Private AI Architecture',
    ja: '自社専用Private AIの導入相談',
    ar: 'طلب استشارة لبنية الذكاء الاصطناعي الخاص'
  }[lang] || 'Konsultasikan Arsitektur Private AI';

  return (
    <section id="private-ai" className="relative py-24 bg-transparent border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <Lock className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Apple Keynote Showcase Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Photorealistic Datacenter in Apple Frame */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
              <img 
                src="/assets/generated/private_ai.jpg" 
                alt="Aegis Private AI Datacenter Infrastructure" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Floating Reassurance Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 border border-white/[0.12] backdrop-blur-2xl flex items-center justify-between text-xs font-sans text-white">
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">{floatingTags.perimeter}</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" /> {floatingTags.status}
                  </span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">{floatingTags.enc}</span>
                  <span className="font-semibold text-[#2997FF]">AES-256 / TLS 1.3</span>
                </div>
                <div>
                  <span className="text-[#86868B] text-[10px] uppercase font-mono block">{floatingTags.egress}</span>
                  <span className="font-semibold text-white">{floatingTags.zero}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architecture Flow & Deployment Options */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 5-Step Linear Clean Architecture */}
            <div className="apple-card p-6 rounded-3xl bg-[#0F0F12]/80 border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#86868B] pb-2 border-b border-white/[0.06] flex justify-between">
                <span>{architectureFlowTitle.title}</span>
                <span className="text-[#2997FF]">{architectureFlowTitle.badge}</span>
              </div>

              <div className="space-y-2 font-sans text-xs">
                {architectureSteps.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center space-x-3">
                    <span className="w-5 h-5 rounded-full bg-white/[0.06] text-[#86868B] flex items-center justify-center text-[10px] font-mono shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-semibold text-white block">{item.title}</span>
                      <span className="text-[11px] text-[#86868B] font-light">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Deployment Option Selector */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {localizedDeployments.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDeployment(d.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      activeDeployment === d.id
                        ? 'bg-white text-black font-semibold shadow-md'
                        : 'bg-[#0F0F12] border-white/[0.06] text-[#86868B] hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-sans truncate">{d.title}</div>
                    <div className={`text-[9px] font-mono mt-0.5 ${activeDeployment === d.id ? 'text-blue-600' : 'text-[#6E6E73]'}`}>
                      {d.badge}
                    </div>
                  </button>
                ))}
              </div>

              {(() => {
                const current = localizedDeployments.find(d => d.id === activeDeployment)!;
                if (!current) return null;
                return (
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs space-y-2 animate-fadeIn">
                    <p className="text-[#D2D2D7] leading-relaxed font-sans">
                      {current.desc}
                    </p>
                    <div className="text-[11px] text-[#86868B] pt-2 border-t border-white/[0.04]">
                      {idealForLabel} <span className="text-white">{current.idealFor}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            <button
              onClick={() => onOpenDemo('Arsitektur Private AI')}
              className="apple-pill-btn w-full py-3 px-5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all cursor-pointer shadow-sm text-center"
            >
              {consultBtnText}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
