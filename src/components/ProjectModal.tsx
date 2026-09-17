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
        className="fixed inset-0 bg-[#081522]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl glass-card rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden bg-[#0B1F3A]/95 my-8 animate-fadeIn">
        {/* Modal Header with Image or Branded Client Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/60 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#061426] via-[#0B1F3A] to-[#040C18] flex flex-col items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-[radial-gradient(#00C6FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
              <div className="w-20 h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-2xl border border-white/20 mb-3 z-10">
                <img
                  src={getClientLogo(project.client)}
                  alt={project.client}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-xs font-tech text-cyan-400 font-bold z-10 uppercase tracking-widest">
                {project.category} ENGAGEMENT
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent"></div>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/30 text-cyan-300 border border-blue-400/40 uppercase">
                {project.client}
              </span>
              <span className="flex items-center text-[11px] font-mono text-slate-300">
                <MapPin className="w-3 h-3 mr-1 text-cyan-400" />
                {project.location}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Executive Summary */}
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
              {lang === 'en' ? 'Project Overview' : 'Ringkasan Proyek'}
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-light">
              {project.summary[lang]}
            </p>
          </div>

          {/* Challenges & Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/70 p-4 rounded-xl border border-rose-500/20">
              <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold font-mono mb-2 uppercase">
                <ShieldAlert className="w-4 h-4" />
                <span>{lang === 'en' ? 'Core Operational Challenge' : 'Tantangan Teknis & Medan'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenge[lang]}
              </p>
            </div>

            <div className="bg-slate-900/70 p-4 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold font-mono mb-2 uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>{lang === 'en' ? 'MNK Engineered Solution' : 'Solusi Arsitektur MNK'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* Business Impact */}
          <div className="bg-emerald-950/20 p-4 rounded-xl border border-emerald-500/30">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono mb-1.5 uppercase">
              <TrendingUp className="w-4 h-4" />
              <span>{lang === 'en' ? 'Demonstrated Business Impact' : 'Dampak & Manfaat Operasional'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.businessImpact[lang]}
            </p>
          </div>

          {/* Technologies & Key Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                <span>{lang === 'en' ? 'Technologies & Equipment' : 'Teknologi & Perangkat'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#081522] text-cyan-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.specs && (
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  {lang === 'en' ? 'Key Deliverable Specs' : 'Parameter Kunci'}
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Official Document Reference Badge */}
          {project.documentRef && (
            <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-cyan-300 font-mono">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'en' ? 'Official Documentation Reference: ' : 'Legalitas & Bukti Pekerjaan: '}</span>
                <span className="font-semibold text-white">{project.documentRef}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                {lang === 'en' ? 'VERIFIED' : 'TERVERIFIKASI'}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#081522] border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            {lang === 'en' ? 'Close Case Study' : 'Tutup'}
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-glow-sm transition-all"
          >
            {lang === 'en' ? 'Inquire Similar Infrastructure Scope' : 'Ajukan Solusi Serupa'}
          </button>
        </div>
      </div>
    </div>
  );
};
