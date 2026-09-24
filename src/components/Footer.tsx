import { site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-400/10 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm text-slate-400">
            © {year} {site.name}. Construído com React, TypeScript, Vite e Tailwind CSS.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Código-fonte deste site:{' '}
            <a
              href={site.githubUrl + '/portfolio'}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline"
            >
              github.com/{site.githubUser}/portfolio
            </a>
          </p>
        </div>

        <a
          href="#topo"
          className="text-xs font-medium text-slate-400 transition-colors hover:text-accent-300"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
