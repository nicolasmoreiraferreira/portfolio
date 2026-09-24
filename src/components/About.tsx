import { site } from '../content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Sobre"
          title="Quem está por trás do código"
          description="Um resumo direto do meu percurso, do que eu sei fazer hoje e do que estou buscando."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="space-y-5 text-[1.02rem] leading-relaxed text-slate-300">
              {site.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}

              <div className="card mt-8 p-6">
                <h3 className="mb-3 font-mono text-sm tracking-wide text-accent-300">
                  Como eu trabalho
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {site.principles.map((principle) => (
                    <li key={principle} className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12.5l5 5L20 6.5" />
                      </svg>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {site.highlights.map((item) => (
                <li key={item.title} className="card p-5">
                  <h3 className="text-sm font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
