import { skillGroups } from '../content/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const levelStyle: Record<string, string> = {
  Estudo: 'border-slate-400/25 bg-slate-400/10 text-slate-400',
  Intermediário: 'border-accent-400/35 bg-accent-400/12 text-accent-300',
  Avançado: 'border-emerald-400/35 bg-emerald-400/12 text-emerald-300',
}

export function Skills() {
  return (
    <section id="habilidades" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Habilidades"
          title="Ferramentas que eu uso com segurança"
          description="Os níveis abaixo são honestos: em entrevista técnica eu consigo defender cada um deles com exemplos de projeto."
        />

        <ul className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 110}>
              <li className="card h-full p-6">
                <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{group.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 border-b border-slate-400/10 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-slate-200">{skill.name}</span>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[0.68rem] font-medium ${levelStyle[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
