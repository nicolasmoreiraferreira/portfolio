import { site } from '../content/site'

const stack = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Git']

export function Hero() {
  return (
    <section id="topo" className="relative pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          {site.availableForWork && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Disponível para oportunidades
            </p>
          )}

          <p className="section-eyebrow mb-3">
            {site.role} · {site.location}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.4rem]">
            <span className="gradient-text">{site.name}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {site.hero.headline}
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{site.hero.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projetos" className="btn btn-primary">
              Ver meus projetos
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              Falar comigo
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2" aria-label="Tecnologias principais">
            {stack.map((item) => (
              <li key={item} className="chip font-mono">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

/** Mockup de editor de código — reforça a área de atuação sem usar imagem externa. */
function HeroVisual() {
  const lines = [
    { indent: 0, tokens: [['const ', 'text-iris-400'], ['perfil', 'text-accent-300'], [' = {', 'text-slate-400']] },
    { indent: 1, tokens: [['nome', 'text-slate-300'], [": '", 'text-slate-500'], ['Nicolas Moreira Ferreira', 'text-emerald-300'], ["',", 'text-slate-500']] },
    { indent: 1, tokens: [['cargo', 'text-slate-300'], [": '", 'text-slate-500'], ['Desenvolvedor Front-end', 'text-emerald-300'], ["',", 'text-slate-500']] },
    { indent: 1, tokens: [['foco', 'text-slate-300'], [': [', 'text-slate-400']] },
    { indent: 2, tokens: [["'", 'text-slate-500'], ['acessibilidade', 'text-emerald-300'], ["',", 'text-slate-500']] },
    { indent: 2, tokens: [["'", 'text-slate-500'], ['performance', 'text-emerald-300'], ["',", 'text-slate-500']] },
    { indent: 2, tokens: [["'", 'text-slate-500'], ['código legível', 'text-emerald-300'], ["',", 'text-slate-500']] },
    { indent: 1, tokens: [['],', 'text-slate-400']] },
    { indent: 1, tokens: [['aberto', 'text-slate-300'], [': ', 'text-slate-400'], ['true', 'text-accent-300'], [',', 'text-slate-500']] },
    { indent: 0, tokens: [['}', 'text-slate-400']] },
  ]

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(60% 60% at 60% 40%, rgba(34,211,238,0.25), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="card overflow-hidden !rounded-2xl">
        <div className="flex items-center gap-2 border-b border-slate-400/10 bg-white/[0.03] px-4 py-3">
          <span className="size-3 rounded-full bg-rose-400/70" />
          <span className="size-3 rounded-full bg-amber-400/70" />
          <span className="size-3 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-xs text-slate-500">perfil.ts</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-7">
          <code>
            {lines.map((line, index) => (
              <span key={index} className="flex">
                <span className="mr-4 w-5 shrink-0 select-none text-right text-slate-600">{index + 1}</span>
                <span style={{ paddingLeft: `${line.indent * 1.1}rem` }}>
                  {line.tokens.map(([text, className], tokenIndex) => (
                    <span key={tokenIndex} className={className}>
                      {text}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
