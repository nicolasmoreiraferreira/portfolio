import { useMemo, useState } from 'react'
import { projects, type Project } from '../content/projects'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const filters = ['Todos', 'Front-end', 'Responsivo', 'JavaScript'] as const
type Filter = (typeof filters)[number]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [expanded, setExpanded] = useState<string | null>(null)

  const visible = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <section id="projetos" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projetos"
          title="O que eu construí e o que aprendi construindo"
          description="Seis projetos com código aberto. Cinco deles estão publicados e podem ser abertos agora no navegador — clique em 'Ver ao vivo'."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={[
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                filter === item
                  ? 'border-accent-400/50 bg-accent-400/12 text-accent-300'
                  : 'border-slate-400/20 bg-white/[0.03] text-slate-300 hover:border-slate-400/40 hover:text-slate-100',
              ].join(' ')}
            >
              {item}
              <span className="ml-2 font-mono text-xs text-slate-500">
                {item === 'Todos'
                  ? projects.length
                  : projects.filter((project) => project.category === item).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 90}>
              <ProjectCard
                project={project}
                open={expanded === project.slug}
                onToggle={() => setExpanded(expanded === project.slug ? null : project.slug)}
              />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-400/15 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-semibold text-slate-100">Quer ver o código?</h3>
              <p className="mt-1 text-sm text-slate-400">
                Todos os repositórios estão públicos, com histórico de commits e README.
              </p>
            </div>
            <a
              href="https://github.com/nicolasmoreiraferreira?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost shrink-0"
            >
              Ver todos os repositórios
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  open,
  onToggle,
}: {
  project: Project
  open: boolean
  onToggle: () => void
}) {
  return (
    <li className="card group flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-400/10">
        <img
          src={project.cover}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 45%, rgba(5,7,15,0.92) 100%)`,
          }}
        />
        <span className="absolute left-3 top-3 chip chip-accent backdrop-blur">{project.category}</span>
        <span className="absolute right-3 top-3 chip font-mono backdrop-blur">{project.year}</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-slate-50">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech} className="chip font-mono !text-[0.7rem]">
              {tech}
            </li>
          ))}
        </ul>

        {open && (
          <div className="mt-5 space-y-4 border-t border-slate-400/10 pt-5 text-sm">
            <div>
              <h4 className="mb-1 font-mono text-xs uppercase tracking-wider text-accent-400">
                O problema
              </h4>
              <p className="leading-relaxed text-slate-300">{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-1 font-mono text-xs uppercase tracking-wider text-accent-400">
                Como resolvi
              </h4>
              <p className="leading-relaxed text-slate-300">{project.solution}</p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent-400">
                Destaques técnicos
              </h4>
              <ul className="space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-slate-300">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-400/10 pt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary !px-3.5 !py-2 !text-[0.8rem]"
            >
              Ver ao vivo
              <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost !px-3.5 !py-2 !text-[0.8rem]"
          >
            Código
          </a>
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="ml-auto text-xs font-medium text-slate-400 transition-colors hover:text-accent-300"
          >
            {open ? 'Ver menos' : 'Detalhes técnicos'}
          </button>
        </div>
      </div>
    </li>
  )
}
