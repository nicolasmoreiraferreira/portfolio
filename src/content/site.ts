/**
 * Dados do perfil. Os contatos abaixo são os reais; trocar qualquer
 * informação pública significa editar apenas este arquivo.
 */

export const site = {
  name: 'Nicolas Moreira Ferreira',
  role: 'Desenvolvedor Full Stack',
  stackLine: 'Front-end · Back-end · Automação',
  location: 'São Vicente, SP',
  availableForWork: true,

  githubUser: 'nicolasmoreiraferreira',
  githubUrl: 'https://github.com/nicolasmoreiraferreira',
  portfolioUrl: 'https://nicolasmoreiraferreira.github.io/portfolio/',

  email: 'nikola.snay@hotmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/nicolasmoreiraferreira/',
  linkedinHandle: 'nicolasmoreiraferreira',

  hero: {
    headline:
      'Interfaces que carregam rápido e sistemas que trabalham sozinhos nos bastidores.',
    summary:
      'Sou desenvolvedor full stack em São Vicente (Baixada Santista, SP). Construo interfaces web com HTML semântico, CSS moderno, JavaScript/TypeScript e React, e desenvolvo o back-end — APIs, banco de dados, automações e integrações em Python e Node.js — que faz o trabalho pesado rodar de forma confiável.',
  },

  about: [
    'Comecei na programação pelo caminho clássico: HTML5 e CSS3, depois JavaScript, construindo cada projeto do zero para entender o que acontece por baixo do framework. Essa base é o que me permite hoje debugar layout, acessibilidade e performance com segurança, em vez de apenas aplicar receitas prontas.',
    'Hoje mantenho em produção um painel financeiro web que começou como controle pessoal e passou a atender clientes convidados: React e TypeScript na interface, API tipada ponta a ponta com tRPC, MySQL via Drizzle ORM, lançamentos por WhatsApp com gravação idempotente e isolamento de dados por conta. Também mantenho um sistema de automação de processos web com mais de 190 módulos em Python, orquestração de sessões de navegador, persistência de estado e pipeline de releases versionadas em GitHub Actions. Trabalhar nesses projetos me ensinou na prática o que é arquitetura concorrente, idempotência de operações, isolamento de dados e tratamento de falha parcial — problemas que não aparecem em exercícios de curso.',
    'Estou cursando o Superior de Tecnologia em Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul (EAD), o que dá base formal para o que já venho aplicando na prática: estruturas de dados, engenharia de software, banco de dados e redes.',
    'Busco minha primeira oportunidade profissional como desenvolvedor — front-end, back-end ou full stack — em um time onde eu possa contribuir com entrega de qualidade e evoluir com feedback técnico.',
  ],

  highlights: [
    {
      title: 'Front-end com fundamentos',
      description:
        'Projetos públicos construídos manualmente em HTML, CSS e JavaScript, além de interfaces em React e TypeScript — sem depender de geradores de layout.',
    },
    {
      title: 'Sistemas em produção',
      description:
        'Painel financeiro web com API tipada, banco de dados e integração com WhatsApp, além de sistema desktop em Python com 190+ módulos.',
    },
    {
      title: 'Entrega com qualidade',
      description:
        'TypeScript estrito, ESLint, mais de 130 testes automatizados e pipelines de CI que barram código quebrado antes da publicação.',
    },
    {
      title: 'Formação e método',
      description:
        'Graduação em Análise e Desenvolvimento de Sistemas em andamento, combinada com estudo prático orientado a projeto.',
    },
  ],

  // Formação acadêmica e cursos.
  education: [
    {
      title: 'Superior de Tecnologia em Análise e Desenvolvimento de Sistemas',
      institution: 'Cruzeiro do Sul — Graduação EAD',
      period: 'Desde 2026',
      description:
        'Graduação com foco em engenharia de software, estruturas de dados, banco de dados, redes e desenvolvimento de sistemas. Cursando em paralelo ao trabalho prático em projetos próprios.',
      current: true,
    },
    {
      title: 'Desenvolvimento Front-end — HTML5, CSS3 e JavaScript',
      institution: 'Curso em Vídeo',
      period: '2023',
      description:
        'Formação prática com projetos completos: layout responsivo, variáveis CSS, mobile-first, manipulação de DOM e consumo de dados.',
      current: false,
    },
  ],

  // Valores usados na seção "Como eu trabalho"
  principles: [
    'Entender o problema antes de escrever a primeira linha de código.',
    'Escrever código que outra pessoa consiga ler em seis meses.',
    'Testar no navegador real, em telas pequenas e com teclado.',
    'Pedir revisão cedo e tratar feedback como parte do processo.',
  ],
} as const

export type Site = typeof site
