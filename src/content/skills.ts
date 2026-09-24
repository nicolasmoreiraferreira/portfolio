export type SkillLevel = 'Estudo' | 'Intermediário' | 'Avançado'

export type SkillGroup = {
  title: string
  description: string
  items: { name: string; level: SkillLevel }[]
}

/**
 * Níveis propositalmente conservadores: em entrevista é melhor
 * surpreender positivamente do que não sustentar o que foi declarado.
 * Cada item abaixo tem um projeto real que o comprova.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    description: 'A base sobre a qual todo o resto é construído.',
    items: [
      { name: 'HTML5 semântico', level: 'Avançado' },
      { name: 'CSS3 / Flexbox / Grid', level: 'Avançado' },
      { name: 'Responsividade / mobile-first', level: 'Avançado' },
      { name: 'Acessibilidade (WCAG)', level: 'Intermediário' },
      { name: 'JavaScript (ES2022+)', level: 'Intermediário' },
      { name: 'TypeScript', level: 'Intermediário' },
    ],
  },
  {
    title: 'Frameworks & Interface',
    description: 'Construção de aplicações e componentes reutilizáveis.',
    items: [
      { name: 'React', level: 'Intermediário' },
      { name: 'Vite', level: 'Intermediário' },
      { name: 'Tailwind CSS', level: 'Intermediário' },
      { name: 'Consumo de APIs REST', level: 'Intermediário' },
    ],
  },
  {
    title: 'Back-end & Automação',
    description: 'O que roda nos bastidores: automação, integrações e dados.',
    items: [
      { name: 'Python', level: 'Intermediário' },
      { name: 'Playwright (automação de navegador)', level: 'Intermediário' },
      { name: 'Concorrência com threads', level: 'Intermediário' },
      { name: 'Persistência de estado em JSON', level: 'Intermediário' },
      { name: 'Integração de APIs HTTP', level: 'Intermediário' },
      { name: 'Node.js / npm (build e scripts)', level: 'Intermediário' },
    ],
  },
  {
    title: 'Ferramentas & DevOps',
    description: 'O ambiente de trabalho e a entrega do dia a dia.',
    items: [
      { name: 'Git & GitHub', level: 'Intermediário' },
      { name: 'GitHub Actions (CI/CD)', level: 'Intermediário' },
      { name: 'Extensões de navegador (MV3)', level: 'Intermediário' },
      { name: 'Empacotamento para Windows', level: 'Intermediário' },
      { name: 'ESLint', level: 'Intermediário' },
    ],
  },
]
