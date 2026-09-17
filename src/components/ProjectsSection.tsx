import { useState } from 'react';
import type { Project } from '../data/companyData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, MapPin, FileCheck } from 'lucide-react';
import { useCms } from '../context/CmsContext';

interface ProjectsSectionProps {
  lang: 'en' | 'id';
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
    { id: 'all', label: { en: 'All Engagements', id: 'Semua Portofolio' } },
    { id: 'maritime', label: { en: 'Maritime & Tankers', id: 'Maritim & Armada Kapal' } },
    { id: 'government', label: { en: 'Government & Ministries', id: 'Kementerian & BUMN' } },
    { id: 'energy', label: { en: 'Power & Energy', id: 'Kelistrikan & Energi' } },
    { id: 'enterprise', label: { en: 'Enterprise & Higher Ed', id: 'Korporasi & Kampus' } },
    { id: 'infrastructure', label: { en: 'Outdoor & Command Centers', id: 'Infrastruktur & Ruang Kontrol' } },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#081522] border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-[#0050AE] dark:text-cyan-300 text-xs font-mono font-bold mb-3">
            <span>{lang === 'en' ? 'PROVEN FIELD EXECUTION' : 'PORTOFOLIO PEKERJAAN STRATEGIS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002D62] dark:text-white tracking-tight">
            {lang === 'en' ? (
              <>
                Mission-Critical <span className="text-gradient-ocean dark:text-gradient-creative">Project Showcase</span>
              </>
            ) : (
              <>
                Studi Kasus & <span className="text-gradient-ocean dark:text-gradient-creative">Rekam Jejak Eksekusi</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {lang === 'en'
              ? 'Real-world deployments across Pertamina oceanic tankers, 22-floor ministerial complexes, national irrigation dams, and enterprise command centers.'
              : 'Implementasi nyata di kapal tanker Pertamina, menara 22 lantai kementerian, bendungan irigasi nasional, hingga ruang kendali eksekutif.'}
          </p>
        </div>

        {/* Category Filters (Mandiri Pill Style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0050AE] text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-[#0050AE] dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="bg-white dark:bg-[#0B1F3A]/70 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-[#0050AE] dark:hover:border-cyan-500/50 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Client Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white/95 dark:bg-slate-950/85 text-[#0050AE] dark:text-cyan-300 shadow">
                      {project.client}
                    </span>
                  </div>

                  {/* Verified ref tag */}
                  {project.documentRef && (
                    <div className="absolute top-3 right-3">
                      <span className="p-1.5 rounded-md bg-emerald-600 text-white flex items-center text-[10px] font-mono shadow">
                        <FileCheck className="w-3 h-3" />
                      </span>
                    </div>
                  )}

                  {/* Location badge */}
                  <div className="absolute bottom-2.5 left-3 flex items-center text-[11px] font-mono text-white">
                    <MapPin className="w-3 h-3 mr-1 text-[#FFB800] dark:text-cyan-400" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#002D62] dark:text-white mb-2 group-hover:text-[#0050AE] dark:group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-4 line-clamp-3">
                    {project.summary[lang]}
                  </p>

                  {/* Key Tech tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#0050AE] dark:text-cyan-400 font-bold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#081522]/40 flex items-center justify-between text-xs font-bold text-[#0050AE] dark:text-cyan-400 group-hover:text-blue-700 transition-colors">
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
