import React from 'react';
import { ShieldCheck, Lock, KeyRound, Database, Activity, FileText } from 'lucide-react';
import type { Language } from '../i18n/translations';
import { AEGIS_UI_TEXTS } from '../i18n/aegisTranslations';

interface Props {
  lang?: Language;
}

export const AegisSecuritySection: React.FC<Props> = ({ lang = 'id' }) => {
  const t = AEGIS_UI_TEXTS[lang]?.security || AEGIS_UI_TEXTS.id.security;

  const localizedPillars: Record<Language, {
    title: string;
    spec: string;
    desc: string;
  }[]> = {
    id: [
      {
        title: 'Access Control & Auth',
        spec: 'Multi-Factor & SSO',
        desc: 'Integrasi dengan direktori identitas enterprise (Active Directory, SAML 2.0, OAuth2/OIDC) dengan penegakan autentikasi multi-faktor wajib.'
      },
      {
        title: 'Multi-Layer Encryption',
        spec: 'AES-256 & TLS 1.3',
        desc: 'Seluruh berkas dokumen, basis data vektor, dan alur komunikasi jaringan terenkripsi secara kriptografis dengan opsi manajemen kunci mandiri (BYOK).'
      },
      {
        title: 'Immutable Audit Trail',
        spec: 'Tersandi & Forensik',
        desc: 'Setiap akses, query semantik, persetujuan dokumen, dan perubahan parameter tercatat dalam log audit tak dapat diubah untuk investigasi resmi.'
      },
      {
        title: 'Role Management (RBAC)',
        spec: 'Granular Permissions',
        desc: 'Pembatasan hak akses berbasis peran hingga level klausul dokumen. Personil hanya dapat membaca data yang sesuai dengan tingkat kewenangan mereka.'
      },
      {
        title: 'Data Isolation',
        spec: 'Strict Boundary Silo',
        desc: 'Pemisahan logis dan fisik penuh antar departemen atau anak perusahaan untuk mencegah kebocoran informasi antar unit bisnis.'
      },
      {
        title: 'Infrastructure Monitoring',
        spec: '24/7 Telemetry Guard',
        desc: 'Pemantauan berkelanjutan atas beban komputasi cluster GPU, kesehatan node, serta deteksi otomatis terhadap upaya anomali komunikasi jaringan.'
      }
    ],
    en: [
      {
        title: 'Access Control & Auth',
        spec: 'MFA & Enterprise SSO',
        desc: 'Tight integration with corporate identity directories (Active Directory, SAML 2.0, OAuth2/OIDC) enforcing hardware-backed multi-factor authentication.'
      },
      {
        title: 'Multi-Layer Encryption',
        spec: 'FIPS AES-256 & TLS 1.3',
        desc: 'All corporate document files, vector stores, and payload streams are encrypted at-rest and in-transit with Bring-Your-Own-Key (BYOK) HSM support.'
      },
      {
        title: 'Immutable Audit Trail',
        spec: 'Forensic Proof Logging',
        desc: 'Every model inference, search query, document approval, and administrative mutation is recorded into tamper-evident cryptographic ledgers.'
      },
      {
        title: 'Role Management (RBAC)',
        spec: 'Granular Clause-Level Permissions',
        desc: 'Granular authorization restricting access down to specific document sections. Personnel only access materials strictly aligned with clearance tiers.'
      },
      {
        title: 'Air-Gapped Data Isolation',
        spec: 'Strict Boundary Silos',
        desc: 'Strict logical and physical boundaries between operating units or subsidiaries, mathematically preventing horizontal cross-contamination.'
      },
      {
        title: 'Infrastructure Telemetry',
        spec: '24/7 Continuous Guard',
        desc: 'Continuous telemetry surveillance over GPU compute clusters, container runtime health, and automated egress anomaly detection.'
      }
    ],
    ja: [
      {
        title: 'アクセス制御・認証統制',
        spec: '多要素認証 (MFA) ＆ 企業SSO',
        desc: 'Active Directory、SAML 2.0、OAuth2/OIDCとシームレスに統合し、全社的な多要素認証（MFA）を強制適用。'
      },
      {
        title: '多層暗号化アーキテクチャ',
        spec: 'FIPS AES-256 ＆ TLS 1.3',
        desc: '全文書データ、ベクトルインデックス、通信パケットを最高水準で暗号化。自社管理暗号鍵（BYOK/HSM）にも対応。'
      },
      {
        title: '改ざん防止監査ログ (Audit Trail)',
        spec: 'フォレンジック証跡保全',
        desc: 'すべての検索クエリ、推論実行、文書承認、パラメータ変更を暗号化監査ログへ記録し、法的な証拠性を担保。'
      },
      {
        title: 'ロールベース権限管理 (RBAC)',
        spec: '条項単位の厳格な閲覧制限',
        desc: '役職や部署に応じた権限設計を文書の特定条項レベルまで適用。認可された担当者のみが必要な情報にアクセス。'
      },
      {
        title: '完全データ隔離 (Data Silo)',
        spec: '厳格な組織境界分離',
        desc: 'グループ各社や部門間でのデータ混同や情報漏洩を防止するため、物理的・論理的な境界隔離を徹底。'
      },
      {
        title: 'インフラ常時監視テレメトリ',
        spec: '24時間365日 自律防衛',
        desc: 'GPUコンピュートクラスタの負荷、ノードヘルス、およびネットワーク通信の異常試行を24時間自動検知・遮断。'
      }
    ],
    ar: [
      {
        title: 'التحكم بالوصول والتحقق المؤسسي',
        spec: 'المصادقة متعددة العوامل و SSO',
        desc: 'تكامل كامل مع أدلة الهوية المؤسسية (Active Directory و SAML 2.0) مع فرض المصادقة الثنائية الصارمة لكافة المستخدمين.'
      },
      {
        title: 'تشفير متعدد الطبقات',
        spec: 'معايير FIPS AES-256 و TLS 1.3',
        desc: 'تشفير كامل لكافة المستندات وقواعد بيانات المتجهات أثناء الحفظ والنقل، مع دعم مفاتيح التشفير الخاصة بالمؤسسة (BYOK).'
      },
      {
        title: 'سجل تدقيق غير قابل للتعديل',
        spec: 'أدلة جنائية رقمية موثقة',
        desc: 'تسجيل غير قابل للمساس لكل استعلام دلالي، واعتماد مستند، وتغيير في الصلاحيات لضمان الامتثال التام للتحقيقات الرسمية.'
      },
      {
        title: 'إدارة الصلاحيات بحسب الأدوار (RBAC)',
        spec: 'أذونات دقيقة حتى مستوى البنود',
        desc: 'تقييد صلاحيات الاطلاع حتى مستوى البنود والفقرات داخل الوثيقة، لضمان وصول كل موظف لما يخص مستوى تفويضه فقط.'
      },
      {
        title: 'عزل البيانات الصارم',
        spec: 'حدود سيادية مستقلة',
        desc: 'فصل مادي ومنطقي كامل بين بيانات الإدارات والشركات التابعة لمنع أي تسريب للمعلومات بين قطاعات الأعمال المختلفة.'
      },
      {
        title: 'المراقبة المستمرة للبنية التحتية',
        spec: 'حراسة القياس عن بُعد 24/7',
        desc: 'مراقبة دائمة لأحمال معالجات GPU وسلامة خوادم الاستدلال مع كشف فوري لأي محاولات اتصال شبكي غير اعتيادية.'
      }
    ]
  };

  const complianceFooter = {
    id: 'Kepatuhan Standar ISO 27001 & UU PDP',
    en: 'ISO 27001 & Personal Data Privacy Standards Compliant',
    ja: 'ISO 27001・個人情報保護法 (PDP) 完全準拠',
    ar: 'مطابق لمعايير ISO 27001 وأنظمة حماية البيانات الشخصية'
  }[lang] || 'Kepatuhan Standar ISO 27001 & UU PDP';

  const pillars = localizedPillars[lang] || localizedPillars.id;
  const icons = [KeyRound, Lock, FileText, ShieldCheck, Database, Activity];

  return (
    <section id="security" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Apple Bento Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="apple-card p-6 sm:p-7 rounded-3xl bg-[#0F0F12]/70 border border-white/[0.08] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[#2997FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#86868B] px-2 py-0.5 rounded-full bg-white/[0.04]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white font-sans">
                      {pillar.title}
                    </h3>
                    <div className="text-xs text-[#2997FF] font-mono mt-0.5">
                      {pillar.spec}
                    </div>
                  </div>

                  <p className="text-xs text-[#86868B] leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-[#6E6E73]">
                  {complianceFooter}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
