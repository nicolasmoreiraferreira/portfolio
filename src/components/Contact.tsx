import { site } from '../content/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre a sua vaga"
          description="Estou disponível para posições de desenvolvedor front-end, estágio ou júnior, em São Paulo ou remoto."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-400/12 text-accent-300">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-100">E-mail</span>
                    <span className="block truncate text-sm text-slate-400">{site.email}</span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-400/12 text-accent-300">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-100">GitHub</span>
                    <span className="block truncate font-mono text-sm text-slate-400">
                      @{site.githubUser}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-iris-400/12 text-iris-300">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
                      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.75h3.5V21h-3.5V8.75Zm5.75 0h3.35v1.68h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.24 4.18 5.15V21h-3.5v-5.9c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.53-2.3 3.1V21H9V8.75Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-100">LinkedIn</span>
                    <span className="block truncate text-sm text-slate-400">
                      Perfil profissional
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full p-7">
              <h3 className="text-lg font-semibold text-slate-50">O que eu procuro</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                {[
                  'Posição de desenvolvedor front-end (estágio ou júnior).',
                  'Time com revisão de código e feedback técnico estruturado.',
                  'Projetos em que eu possa evoluir de HTML/CSS/JS para React e TypeScript.',
                  'Modelo presencial em São Paulo, híbrido ou remoto.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-accent-400" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href={`mailto:${site.email}`} className="btn btn-primary mt-6 w-full">
                Enviar e-mail
              </a>

              <p className="mt-3 text-center text-xs text-slate-500">
                Resposta em até 24 horas em dias úteis.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
