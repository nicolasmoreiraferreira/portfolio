type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-relaxed text-slate-400">{description}</p>}
    </div>
  )
}
