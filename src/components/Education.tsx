import { site } from '../content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="formacao" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Formação"
          title="Como eu estou me formando"
          description="Formação prática com projetos entregues, complementada por estudo contínuo e código aberto."
        />

        <ol className="relative space-y-6 border-l border-slate-400/15 pl-6 md:pl-8">
          {site.education.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <li className="relative">
                <span className="absolute -left-[1.72rem] top-6 size-3 rounded-full border-2 border-ink-900 bg-accent-400 md:-left-[2.22rem]" />
                <div className="card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
                    <span className="chip font-mono">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-300">{item.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Projetos públicos', value: '6' },
              { label: 'Demos publicadas', value: '5' },
              { label: 'Desde', value: '2023' },
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
