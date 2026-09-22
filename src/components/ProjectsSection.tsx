import { useState } from 'react';
import type { Project } from '../data/companyData';
import { getClientLogo } from '../data/companyData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, MapPin, FileCheck } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import type { Language } from '../i18n/translations';
import { getLangText } from '../i18n/translations';

interface ProjectsSectionProps {
  lang: Language;
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  onOpenConsultation,
}) => {
  const { projects } = useCms();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: { en: 'All Engagements', id: 'Semua Portofolio', ja: '全導入実績', ar: 'كافة المشاريع' } },
    { id: 'maritime', label: { en: 'Maritime & Tankers', id: 'Maritim & Armada Kapal', ja: '海運・タンカー艦隊', ar: 'الملاحة البحرية وناقلات النفط' } },
    { id: 'government', label: { en: 'Government & Ministries', id: 'Kementerian & BUMN', ja: '政府機関・国営企業', ar: 'الوزارات والمؤسسات الحكومية' } },
    { id: 'energy', label: { en: 'Power & Energy', id: 'Kelistrikan & Energi', ja: '電力・エネルギー', ar: 'الطاقة والكهرباء' } },
    { id: 'enterprise', label: { en: 'Enterprise & Higher Ed', id: 'Korporasi & Kampus', ja: '大企業・高等教育機関', ar: 'الشركات والجامعات' } },
    { id: 'infrastructure', label: { en: 'Outdoor & Command Centers', id: 'Infrastruktur & Ruang Kontrol', ja: '重要インフラ・司令室', ar: 'البنية التحتية ومراكز القيادة' } },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-transparent relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-medium tracking-wider mb-4 shadow-xs">
            <span>{lang === 'en' ? 'VERIFIED TRACK RECORD' : 'REKAM JEJAK PROYEK STRATEGIS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight leading-[1.12]">
            {lang === 'en' ? (
              <>
                Proven Delivery Across <span className="text-gradient-brand">Critical Environments</span>
              </>
            ) : (
              <>
                Daftar Portofolio & <span className="text-gradient-brand">Studi Kasus Proyek</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-[#6E6E73] dark:text-[#A1A1A6] text-base leading-relaxed">
            {lang === 'en'
              ? 'Explore our completed deployments for Indonesia’s most demanding state-owned enterprises, government ministries, and private corporations.'
              : 'Studi kasus implementasi sistem komunikasi satelit maritim, telemetri otomatis, pemeliharaan surveillance, hingga pemodelan transmisi daya energi nasional.'}
          </p>
        </div>

        {/* Category Filters (Apple Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0071E3] text-white shadow-xs scale-105'
                  : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-white border border-black/[0.06] dark:border-white/[0.08]'
              }`}
            >
              {getLangText(cat.label, lang)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="bg-white dark:bg-[#161617] rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between transition-all duration-300 group relative"
            >
              <div>
                {/* Image Container with Fallback to Official Client Logo Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-black/[0.04] dark:bg-black/60 flex items-center justify-center">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-black/[0.02] dark:bg-gradient-to-br dark:from-[#061426] dark:via-[#0B1F3A] dark:to-[#040C18] border-b border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-6 text-center relative">
                      <div className="w-16 h-16 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-xs border border-black/[0.08] dark:border-white/20 mb-2 z-10 group-hover:scale-105 transition-transform">
                        <img
                          src={getClientLogo(project.client)}
                          alt={project.client}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-mono text-[#0071E3] dark:text-[#2997FF] font-semibold z-10 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Client Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/95 dark:bg-black/90 text-[#1D1D1F] dark:text-white shadow-md backdrop-blur-sm">
                      {project.client}
                    </span>
                  </div>

                  {/* Verified ref tag */}
                  {project.documentRef && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="p-1.5 rounded-full bg-emerald-600/95 text-white flex items-center text-[10px] shadow-md backdrop-blur-sm">
                        <FileCheck className="w-3 h-3" />
                      </span>
                    </div>
                  )}

                  {/* Location badge */}
                  <div className={`absolute bottom-2.5 left-3 flex items-center text-[11px] font-medium z-10 ${
                    project.image ? 'text-white' : 'text-[#6E6E73] dark:text-[#A1A1A6]'
                  }`}>
                    <MapPin className="w-3 h-3 mr-1 text-[#0071E3] dark:text-[#2997FF]" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  {/* Index badge */}
                  <div className={`absolute bottom-2.5 right-3 text-[9px] font-mono z-10 ${
                    project.image ? 'text-white/80' : 'text-[#86868B]'
                  }`}>
                    PRJ_0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-white mb-2 group-hover:text-[#0071E3] transition-colors line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed font-normal mb-4 line-clamp-3">
                    {getLangText(project.summary, lang)}
                  </p>

                  {/* Key Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 text-[#0071E3] dark:text-[#2997FF] font-semibold font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 border-t border-black/[0.06] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.02] flex items-center justify-between text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] group-hover:underline transition-colors">
                <span>{lang === 'en' ? 'Deep-Dive Case Study' : 'Detail Studi Kasus'}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
