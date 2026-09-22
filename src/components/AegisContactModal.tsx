import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, INDUSTRIES } from '../data/aegisData';
import type { Language } from '../i18n/translations';
import { getAegisProductLocalized } from '../i18n/aegisTranslations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
  lang?: Language;
}

export const AegisContactModal: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  prefilledProduct,
  lang = 'id' 
}) => {
  const [formData, setFormData] = useState({
    nama: '',
    perusahaan: '',
    jabatan: '',
    email: '',
    telepon: '',
    industri: 'Maritim & Pelayaran',
    solusi: prefilledProduct || 'AEGIS MARITIME',
    pesan: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({ ...prev, solusi: prefilledProduct }));
    }
  }, [prefilledProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const modalTexts = {
    id: {
      title: 'Jadwalkan Demo Enterprise',
      sub: 'Aegis Technology • Solusi AI Korporasi',
      successTitle: 'Jadwal Demo Diterima',
      successMsg: 'Tim arsitek solusi Aegis akan menghubungi email Anda dalam waktu singkat.',
      doneBtn: 'Selesai',
      nameLabel: 'Nama Lengkap *',
      namePh: 'Nama Anda',
      compLabel: 'Perusahaan / Institusi *',
      compPh: 'Nama PT / Instansi',
      roleLabel: 'Jabatan / Posisi *',
      rolePh: 'Jabatan Anda',
      emailLabel: 'Email Korporat *',
      emailPh: 'nama@perusahaan.com',
      phoneLabel: 'Nomor Telepon / WhatsApp *',
      phonePh: '0812-xxxx-xxxx',
      indLabel: 'Sektor Industri *',
      solLabel: 'Solusi Yang Diminati *',
      multiSol: 'Konsultasi Arsitektur Menyeluruh (Multi-Solusi)',
      submitting: 'Mengirim...',
      submitBtn: 'Kirim Permintaan Demo'
    },
    en: {
      title: 'Schedule an Enterprise Demo',
      sub: 'Aegis Technology • Enterprise AI Solutions',
      successTitle: 'Demo Request Received',
      successMsg: 'Our solution architects will reach out to your corporate email shortly.',
      doneBtn: 'Done',
      nameLabel: 'Full Name *',
      namePh: 'Your Full Name',
      compLabel: 'Company / Organization *',
      compPh: 'Organization Name',
      roleLabel: 'Job Title / Position *',
      rolePh: 'Your Position',
      emailLabel: 'Corporate Email *',
      emailPh: 'name@enterprise.com',
      phoneLabel: 'Phone / WhatsApp *',
      phonePh: '+1 / +44 / +62 ...',
      indLabel: 'Industry Sector *',
      solLabel: 'Solution of Interest *',
      multiSol: 'Holistic Multi-Solution Architecture',
      submitting: 'Processing...',
      submitBtn: 'Submit Demo Request'
    },
    ja: {
      title: 'エンタープライズ・デモのご予約',
      sub: 'Aegis Technology • 法人向けAIソリューション',
      successTitle: 'お申し込みを承りました',
      successMsg: '担当ソリューションアーキテクトより、ご入力いただいたメールアドレスへ迅速にご連絡いたします。',
      doneBtn: '閉じる',
      nameLabel: '氏名 *',
      namePh: '山田 太郎',
      compLabel: '貴社名・組織名 *',
      compPh: '株式会社〇〇',
      roleLabel: '役職・部署 *',
      rolePh: 'システム推進部長',
      emailLabel: '法人メールアドレス *',
      emailPh: 'name@company.co.jp',
      phoneLabel: '電話番号 / 連絡先 *',
      phonePh: '03-xxxx-xxxx',
      indLabel: '対象業種 *',
      solLabel: '関心のあるソリューション *',
      multiSol: '包括的アーキテクチャ相談 (複数製品統合)',
      submitting: '送信中...',
      submitBtn: 'デモ相談を送信する'
    },
    ar: {
      title: 'حجز عرض تجريبي للمؤسسات',
      sub: 'تقنيات إيجيس • حلول الذكاء الاصطناعي للمؤسسات',
      successTitle: 'تم استلام طلب العرض بنجاح',
      successMsg: 'سيتواصل مهندس الحلول الفنية معكم عبر بريدكم الإلكتروني في أقرب وقت.',
      doneBtn: 'تم',
      nameLabel: 'الاسم الكامل *',
      namePh: 'الاسم الكريم',
      compLabel: 'اسم الشركة / المؤسسة *',
      compPh: 'اسم المؤسسة',
      roleLabel: 'المسمى الوظيفي *',
      rolePh: 'المسمى الوظيفي',
      emailLabel: 'البريد الإلكتروني للعمل *',
      emailPh: 'name@enterprise.com',
      phoneLabel: 'رقم الهاتف / واتساب *',
      phonePh: '+966 / +971 ...',
      indLabel: 'القطاع الصناعي *',
      solLabel: 'الحل المطلوب *',
      multiSol: 'استشارة معمارية شاملة لعدة حلول',
      submitting: 'جارٍ المعالجة...',
      submitBtn: 'إرسال طلب العرض التجريبي'
    }
  }[lang] || {
    title: 'Jadwalkan Demo Enterprise',
    sub: 'Aegis Technology',
    successTitle: 'Jadwal Demo Diterima',
    successMsg: 'Tim arsitek solusi Aegis akan menghubungi email Anda dalam waktu singkat.',
    doneBtn: 'Selesai',
    nameLabel: 'Nama Lengkap *',
    namePh: 'Nama Anda',
    compLabel: 'Perusahaan *',
    compPh: 'Nama PT / Instansi',
    roleLabel: 'Jabatan *',
    rolePh: 'Jabatan',
    emailLabel: 'Email Korporat *',
    emailPh: 'nama@perusahaan.com',
    phoneLabel: 'Nomor Telepon/WA *',
    phonePh: '0812-xxxx-xxxx',
    indLabel: 'Sektor Industri *',
    solLabel: 'Solusi Yang Diminati *',
    multiSol: 'Konsultasi Arsitektur Menyeluruh',
    submitting: 'Mengirim...',
    submitBtn: 'Kirim Permintaan Demo'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-2xl animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0F0F12] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#141418]/90 border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white font-sans">{modalTexts.title}</h3>
            <span className="text-[10px] text-[#86868B] font-mono">{modalTexts.sub}</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-[#86868B] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#0071E3]/20 text-[#2997FF] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white font-sans">{modalTexts.successTitle}</h3>
              <p className="text-xs text-[#86868B] leading-relaxed font-sans max-w-xs mx-auto">
                {modalTexts.successMsg}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="apple-pill-btn mt-3 px-6 py-2 bg-white/[0.08] text-white hover:bg-white/[0.15] text-xs font-mono cursor-pointer"
              >
                {modalTexts.doneBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.nameLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder={modalTexts.namePh}
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.compLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder={modalTexts.compPh}
                    value={formData.perusahaan}
                    onChange={(e) => setFormData({ ...formData, perusahaan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.roleLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder={modalTexts.rolePh}
                    value={formData.jabatan}
                    onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.emailLabel}</label>
                  <input
                    type="email"
                    required
                    placeholder={modalTexts.emailPh}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.phoneLabel}</label>
                  <input
                    type="tel"
                    required
                    placeholder={modalTexts.phonePh}
                    value={formData.telepon}
                    onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.indLabel}</label>
                  <select
                    value={formData.industri}
                    onChange={(e) => setFormData({ ...formData, industri: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name} className="bg-[#0F0F12] text-white">
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans text-[#A1A1A6] block mb-1">{modalTexts.solLabel}</label>
                <select
                  value={formData.solusi}
                  onChange={(e) => setFormData({ ...formData, solusi: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#18181E] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#2997FF]"
                >
                  {PRODUCTS.map((prod) => {
                    const lp = getAegisProductLocalized(prod.id, lang);
                    const pName = lp?.name || prod.name;
                    const pTagline = lp?.tagline || prod.tagline;
                    return (
                      <option key={prod.id} value={pName} className="bg-[#0F0F12] text-white">
                        {pName} — {pTagline}
                      </option>
                    );
                  })}
                  <option value="Konsultasi Arsitektur Menyeluruh" className="bg-[#0F0F12] text-white">
                    {modalTexts.multiSol}
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="apple-pill-btn w-full py-3 px-4 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition-all cursor-pointer shadow-sm"
                >
                  {isSubmitting ? modalTexts.submitting : modalTexts.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
