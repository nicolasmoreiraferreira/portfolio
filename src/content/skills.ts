export type SkillGroup = {
  title: string
  description: string
  items: { name: string; level: 'Estudo' | 'Intermediário' | 'Avançado' }[]
}

/**
 * Níveis são propositalmente conservadores: em entrevista é melhor
 * surpreender positivamente do que não sustentar o que foi declarado.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Fundamentos',
    description: 'A base sobre a qual todo o resto é construído.',
    items: [
      { name: 'HTML5 semântico', level: 'Avançado' },
      { name: 'CSS3 / Flexbox / Grid', level: 'Avançado' },
      { name: 'Responsividade / mobile-first', level: 'Avançado' },
      { name: 'Acessibilidade (WCAG)', level: 'Intermediário' },
    ],
  },
  {
    title: 'JavaScript & TypeScript',
    description: 'Lógica, interação com o navegador e tipagem estática.',
    items: [
      { name: 'JavaScript (ES2022+)', level: 'Intermediário' },
      { name: 'Manipulação de DOM', level: 'Intermediário' },
      { name: 'TypeScript', level: 'Intermediário' },
      { name: 'Consumo de APIs REST', level: 'Intermediário' },
    ],
  },
  {
    title: 'Ferramentas & Front-end',
    description: 'O ambiente de trabalho do dia a dia.',
    items: [
      { name: 'Git & GitHub', level: 'Intermediário' },
      { name: 'React', level: 'Intermediário' },
      { name: 'Vite / npm', level: 'Intermediário' },
      { name: 'Python (automação)', level: 'Intermediário' },
    ],
  },
]
