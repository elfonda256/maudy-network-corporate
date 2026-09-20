import React from 'react';
import { X, CheckCircle2, ShieldAlert, Lightbulb, TrendingUp, Cpu, FileCheck, MapPin } from 'lucide-react';
import type { Project } from '../data/companyData';
import { getClientLogo } from '../data/companyData';

interface ProjectModalProps {
  project: Project | null;
  lang: 'en' | 'id';
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onOpenConsultation,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl overflow-hidden bg-white dark:bg-[#161617] my-8 animate-fadeIn">
        {/* Modal Header with Image or Branded Client Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/[0.04] dark:bg-black/60 flex items-center justify-center">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#F5F5F7] via-[#E5E5EA] to-[#D1D1D6] dark:from-[#061426] dark:via-[#0B1F3A] dark:to-[#040C18] flex flex-col items-center justify-center p-8 relative">
              <div className="w-20 h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-md border border-black/[0.08] dark:border-white/20 mb-3 z-10">
                <img
                  src={getClientLogo(project.client)}
                  alt={project.client}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF] font-semibold z-10 uppercase tracking-widest">
                {project.category} ENGAGEMENT
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 dark:from-black/85 via-black/20 to-transparent"></div>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#0071E3] text-white uppercase">
                {project.client}
              </span>
              <span className="flex items-center text-[11px] font-mono text-white/90">
                <MapPin className="w-3 h-3 mr-1 text-[#2997FF]" />
                {project.location}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Executive Summary */}
          <div>
            <div className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF] uppercase tracking-wider mb-1.5 font-semibold">
              {lang === 'en' ? 'Project Overview' : 'Ringkasan Proyek'}
            </div>
            <p className="text-sm text-[#1D1D1F] dark:text-[#F5F5F7] leading-relaxed font-normal">
              {project.summary[lang]}
            </p>
          </div>

          {/* Challenges & Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 text-xs font-semibold font-mono mb-2 uppercase">
                <ShieldAlert className="w-4 h-4" />
                <span>{lang === 'en' ? 'Core Operational Challenge' : 'Tantangan Teknis & Medan'}</span>
              </div>
              <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                {project.challenge[lang]}
              </p>
            </div>

            <div className="bg-black/[0.02] dark:bg-white/[0.04] p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center space-x-2 text-[#0071E3] dark:text-[#2997FF] text-xs font-semibold font-mono mb-2 uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>{lang === 'en' ? 'MNK Engineered Solution' : 'Solusi Arsitektur MNK'}</span>
              </div>
              <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* Business Impact */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/40">
            <div className="flex items-center space-x-2 text-[#34C759] text-xs font-semibold font-mono mb-1.5 uppercase">
              <TrendingUp className="w-4 h-4" />
              <span>{lang === 'en' ? 'Demonstrated Business Impact' : 'Dampak & Manfaat Operasional'}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#1D1D1F] dark:text-emerald-100 leading-relaxed">
              {project.businessImpact[lang]}
            </p>
          </div>

          {/* Technologies & Key Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-xs font-mono text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-wider mb-2 font-medium flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-[#0071E3] dark:text-[#2997FF]" />
                <span>{lang === 'en' ? 'Technologies & Equipment' : 'Teknologi & Perangkat'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-white border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.specs && (
              <div>
                <div className="text-xs font-mono text-[#6E6E73] dark:text-[#A1A1A6] uppercase tracking-wider mb-2 font-medium">
                  {lang === 'en' ? 'Key Deliverable Specs' : 'Parameter Kunci'}
                </div>
                <ul className="space-y-1.5 text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
                  {project.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34C759] flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Official Document Reference Badge */}
          {project.documentRef && (
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-[#1D1D1F] dark:text-white font-mono">
                <FileCheck className="w-4 h-4 text-[#0071E3] dark:text-[#2997FF]" />
                <span>{lang === 'en' ? 'Official Documentation Reference: ' : 'Legalitas & Bukti Pekerjaan: '}</span>
                <span className="font-semibold">{project.documentRef}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-[#34C759] text-[10px] font-mono font-bold">
                {lang === 'en' ? 'VERIFIED' : 'TERVERIFIKASI'}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] dark:hover:text-white transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close Case Study' : 'Tutup'}
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium shadow-xs transition-all cursor-pointer"
          >
            {lang === 'en' ? 'Inquire Similar Infrastructure Scope' : 'Ajukan Solusi Serupa'}
          </button>
        </div>
      </div>
    </div>
  );
};
