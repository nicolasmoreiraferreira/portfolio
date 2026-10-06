import { site } from '../content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { projects } from '../content/projects'

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Formação"
          title="Base acadêmica e prática"
          description="Graduação em andamento na área de tecnologia, somada a formação prática com projetos entregues e código em produção."
        />

        <ol className="relative space-y-6 border-l border-slate-400/15 pl-6 md:pl-8">
          {site.education.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <li className="relative">
                <span
                  className={`absolute -left-[1.72rem] top-6 size-3 rounded-full border-2 border-ink-900 md:-left-[2.22rem] ${
                    item.current ? 'bg-emerald-400' : 'bg-accent-400'
                  }`}
                />
                <div className="card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.current && (
                        <span className="chip border-emerald-400/35 bg-emerald-400/12 !text-emerald-300">
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                          Em andamento
                        </span>
                      )}
                      <span className="chip font-mono">{item.period}</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-300">{item.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {site.certifications.length > 0 && (
          <Reveal>
            <div className="mt-12">
              <h3 className="font-mono text-sm tracking-wide text-accent-300">Certificações</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                Credenciais emitidas por instituição de ensino e formação complementar. Cada uma
                traz o código de autenticação para conferência.
              </p>

              <ul className="mt-5 grid gap-4 lg:grid-cols-2">
                {site.certifications.map((item) => (
                  <li key={item.credentialId} className="card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-semibold text-slate-50">{item.title}</h4>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip font-mono">{item.workload}</span>
                        <span className="chip font-mono">{item.period}</span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent-300">{item.issuer}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-slate-400/20 px-2.5 py-0.5 text-[0.7rem] text-slate-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 break-all border-t border-slate-400/10 pt-3 text-[0.7rem] leading-relaxed text-slate-500">
                      Código de autenticação:{' '}
                      <span className="font-mono text-slate-400">{item.credentialId}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {[
              { label: 'Projetos no portfólio', value: String(projects.length) },
              { label: 'Módulos em produção', value: '190+' },
              {
                label: 'Demos publicadas',
                value: String(projects.filter((project) => project.demoUrl).length),
              },
              { label: 'Programando desde', value: '2023' },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <p className="font-mono text-3xl font-bold text-accent-300">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
