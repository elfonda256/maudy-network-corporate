import React from 'react';
import { ShieldCheck, Lock, KeyRound, Database, Activity, FileText } from 'lucide-react';

export const AegisSecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Access Control & Auth',
      icon: KeyRound,
      spec: 'Multi-Factor & SSO',
      desc: 'Integrasi dengan direktori identitas enterprise (Active Directory, SAML 2.0, OAuth2/OIDC) dengan penegakan autentikasi multi-faktor wajib.'
    },
    {
      title: 'Multi-Layer Encryption',
      icon: Lock,
      spec: 'AES-256 & TLS 1.3',
      desc: 'Seluruh berkas dokumen, basis data vektor, dan alur komunikasi jaringan terenkripsi secara kriptografis dengan opsi manajemen kunci mandiri (BYOK).'
    },
    {
      title: 'Immutable Audit Trail',
      icon: FileText,
      spec: 'Tersandi & Forensik',
      desc: 'Setiap akses, query semantik, persetujuan dokumen, dan perubahan parameter tercatat dalam log audit tak dapat diubah untuk investigasi resmi.'
    },
    {
      title: 'Role Management (RBAC)',
      icon: ShieldCheck,
      spec: 'Granular Permissions',
      desc: 'Pembatasan hak akses berbasis peran hingga level klausul dokumen. Personil hanya dapat membaca data yang sesuai dengan tingkat kewenangan mereka.'
    },
    {
      title: 'Data Isolation',
      icon: Database,
      spec: 'Strict Boundary Silo',
      desc: 'Pemisahan logis dan fisik penuh antar departemen atau anak perusahaan untuk mencegah kebocoran informasi antar unit bisnis.'
    },
    {
      title: 'Infrastructure Monitoring',
      icon: Activity,
      spec: '24/7 Telemetry Guard',
      desc: 'Pemantauan berkelanjutan atas beban komputasi cluster GPU, kesehatan node, serta deteksi otomatis terhadap upaya anomali komunikasi jaringan.'
    },
  ];

  return (
    <section id="security" className="relative py-28 bg-[#020204] border-t border-white/[0.06] overflow-hidden text-left">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#86868B] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2997FF]" />
            <span>STANDAR KEAMANAN ENTERPRISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-sans">
            Arsitektur yang Mengutamakan Privasi.
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed font-sans">
            Keamanan bukan fitur pelengkap, melainkan fondasi perancangan sistem kami. Menerapkan prinsip <strong className="text-white font-medium">Zero Trust Architecture</strong> untuk melindungi aset intelektual organisasi Anda.
          </p>
        </div>

        {/* 6 Apple Bento Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
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
                  Kepatuhan Standar ISO 27001 & UU PDP
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
