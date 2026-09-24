/**
 * Dados do perfil. Ajuste os campos marcados com TODO com as suas
 * informações reais antes de enviar o portfólio para recrutadores.
 */

export const site = {
  name: 'Nicolas Moreira Ferreira',
  role: 'Desenvolvedor Front-end',
  stackLine: 'HTML · CSS · JavaScript · TypeScript · React',
  location: 'São Paulo, Brasil',
  availableForWork: true,

  githubUser: 'nicolasmoreiraferreira',
  githubUrl: 'https://github.com/nicolasmoreiraferreira',
  portfolioUrl: 'https://nicolasmoreiraferreira.github.io/portfolio/',

  // TODO: substitua pelos seus contatos reais.
  email: 'nicolas.moreira.ferreira@email.com',
  linkedinUrl: 'https://www.linkedin.com/in/seu-usuario/',

  hero: {
    headline: 'Interfaces web que carregam rápido, funcionam em qualquer tela e são acessíveis de verdade.',
    summary:
      'Sou desenvolvedor front-end em São Paulo. Construo aplicações web com HTML semântico, CSS moderno e JavaScript/TypeScript, com foco em código legível, performance e experiência de uso.',
  },

  about: [
    'Comecei na programação pelo caminho clássico: HTML5 e CSS3, depois JavaScript, construindo cada projeto do zero para entender o que acontece por baixo do framework. Essa base é o que me permite hoje debugar layout, acessibilidade e performance com segurança, em vez de apenas aplicar receitas prontas.',
    'Meu foco atual é o ecossistema front-end moderno — componentização com React, tipagem estática com TypeScript, consumo de APIs REST e boas práticas de acessibilidade (WCAG) e responsividade. Estudo e aplico testes, organização de projeto e revisão de código como parte do fluxo normal de trabalho, não como etapa opcional.',
    'Também mantenho projetos próprios em Python, o que me dá repertório para conversar sobre back-end, integrações e consumo de APIs a partir do front. Busco minha primeira oportunidade profissional como desenvolvedor, em um time onde eu possa contribuir com entrega de qualidade e evoluir com feedback técnico.',
  ],

  highlights: [
    {
      title: 'Base sólida em fundamentos',
      description:
        'Seis projetos públicos construídos manualmente em HTML, CSS e JavaScript — sem depender de geradores de layout.',
    },
    {
      title: 'Foco em acessibilidade',
      description:
        'Marcação semântica, navegação por teclado, contraste adequado e respeito a `prefers-reduced-motion`.',
    },
    {
      title: 'TypeScript no dia a dia',
      description:
        'Tipagem estrita, componentes pequenos e reutilizáveis e separação clara entre dados, apresentação e lógica.',
    },
    {
      title: 'Documentação como hábito',
      description:
        'Cada repositório tem README explicando o problema, as decisões técnicas e como executar o projeto.',
    },
  ],

  // Formação e cursos — ajuste conforme a sua realidade.
  education: [
    {
      title: 'Desenvolvimento Front-end — HTML5, CSS3 e JavaScript',
      institution: 'Curso em Vídeo',
      period: '2023',
      description:
        'Formação prática com projetos completos: layout responsivo, variáveis CSS, mobile-first, manipulação de DOM e consumo de dados.',
    },
    {
      title: 'Bacharelado / Curso técnico em andamento',
      institution: 'A preencher',
      period: 'Atual',
      description: 'Substitua por sua formação real ou remova este item.',
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
