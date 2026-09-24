/**
 * Projetos exibidos no portfólio.
 * `cover` aponta para uma imagem em `public/covers/`.
 * `demoUrl` só existe quando o projeto está publicado e funcionando.
 */

export type Project = {
  slug: string
  title: string
  category: 'Front-end' | 'JavaScript' | 'Responsivo'
  summary: string
  problem: string
  solution: string
  highlights: string[]
  stack: string[]
  repoUrl: string
  demoUrl?: string
  cover: string
  accent: string
  year: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'projeto-login',
    title: 'Tela de Login Responsiva',
    category: 'Front-end',
    summary:
      'Formulário de autenticação com layout em duas colunas que colapsa em uma coluna no celular.',
    problem:
      'Construir uma tela de acesso que funcione bem do celular ao desktop sem quebrar o layout e sem depender de framework.',
    solution:
      'Layout com CSS Grid e variáveis CSS para centralizar o formulário, alternar a imagem lateral e ajustar espaçamentos por breakpoint. Campos com label associada e estilos de foco visíveis para uso por teclado.',
    highlights: [
      'Uma coluna no mobile, duas no desktop',
      'Estados de foco e preenchimento estilizados',
      'Formulário utilizável apenas com o teclado',
    ],
    stack: ['HTML', 'CSS', 'Grid', 'Variáveis CSS'],
    repoUrl: 'https://github.com/nicolasmoreiraferreira/projeto-login',
    demoUrl: 'https://nicolasmoreiraferreira.github.io/projeto-login/',
    cover: 'covers/projeto-login.png',
    accent: '#22d3ee',
    year: '2023',
    featured: true,
  },
  {
    slug: 'projeto-social',
    title: 'Painel de Redes Sociais',
    category: 'Front-end',
    summary:
      'Simulação de um celular com telas de redes sociais navegáveis dentro de um iframe, controladas por um menu lateral.',
    problem:
      'Apresentar várias telas de aplicativo em um único site, mantendo a sensação de uso em um dispositivo móvel.',
    solution:
      'Um mockup de smartphone feito só com CSS, telas carregadas em iframe e troca de contexto via links com target direcionado ao frame. O menu lateral dá acesso direto a cada rede.',
    highlights: [
      'Mockup de dispositivo feito só com CSS',
      'Navegação entre telas sem recarregar a página',
      'Estrutura escalável: adicionar uma rede é adicionar um arquivo',
    ],
    stack: ['HTML', 'CSS', 'iframe'],
    repoUrl: 'https://github.com/nicolasmoreiraferreira/projeto-social',
    demoUrl: 'https://nicolasmoreiraferreira.github.io/projeto-social/',
    cover: 'covers/projeto-social.png',
    accent: '#818cf8',
    year: '2023',
    featured: true,
  },
  {
    slug: 'projeto-cordel',
    title: 'Página de Cordel',
    category: 'Responsivo',
    summary:
      'Página editorial que alterna blocos com fundo fixo e blocos claros, com tipografia pensada para leitura longa.',
    problem:
      'Compor uma peça visual de leitura sem sacrificar legibilidade e sem depender de bibliotecas externas.',
    solution:
      'Seções com imagens de fundo em background fixo intercaladas com blocos de fundo claro, contraste controlado e largura de linha limitada para leitura confortável.',
    highlights: [
      'Efeito parallax apenas com CSS',
      'Contraste e entrelinha pensados para leitura',
      'Layout estável em telas estreitas',
    ],
    stack: ['HTML', 'CSS', 'Parallax'],
    repoUrl: 'https://github.com/nicolasmoreiraferreira/projeto-cordel',
    demoUrl: 'https://nicolasmoreiraferreira.github.io/projeto-cordel/index.html.html',
    cover: 'covers/projeto-cordel.png',
    accent: '#f59e0b',
    year: '2023',
  },
  {
    slug: 'projeto-android',
    title: 'Conteúdo Institucional — Android',
    category: 'Responsivo',
    summary:
      'Página longa sobre a história do Android, com navegação por seções e suporte a mídia incorporada.',
    problem:
      'Organizar um conteúdo extenso em uma página agradável de percorrer, com vídeo e imagens, sem quebrar no mobile.',
    solution:
      'Hierarquia clara de títulos, listas estilizadas, imagens responsivas e vídeo incorporado em contêiner de proporção fixa. Tipografia com fontes personalizadas carregadas localmente.',
    highlights: [
      'Tipografia hierárquica para conteúdo extenso',
      'Mídia responsiva com proporção preservada',
      'Layout fluido com largura máxima de leitura',
    ],
    stack: ['HTML', 'CSS', 'Responsivo'],
    repoUrl: 'https://github.com/nicolasmoreiraferreira/projeto-android',
    demoUrl: 'https://nicolasmoreiraferreira.github.io/projeto-android/',
    cover: 'covers/projeto-android.png',
    accent: '#34d399',
    year: '2023',
  },
  {
    slug: 'HTML-CSS',
    title: 'Laboratório de HTML5 e CSS3',
    category: 'Front-end',
    summary:
      'Coleção de mais de 26 exercícios e 10 desafios: grid, media queries, iframes, formulários e variáveis CSS.',
    problem:
      'Manter um grande volume de exercícios organizado e navegável, em vez de acumular arquivos soltos.',
    solution:
      'Estrutura de pastas por módulo, com cada exercício isolado e reutilizável. Os desafios finais aplicam CSS Grid com posicionamento por áreas nomeadas e Media Queries para adaptação a diferentes telas.',
    highlights: [
      'CSS Grid com áreas nomeadas e posicionamento explícito',
      'Media Queries para layouts adaptativos',
      'Iframes, formulários e variáveis CSS aplicados',
    ],
    stack: ['HTML5', 'CSS3', 'Grid', 'Media Queries'],
    repoUrl: 'https://github.com/nicolasmoreiraferreira/HTML-CSS',
    demoUrl: 'https://nicolasmoreiraferreira.github.io/HTML-CSS/exercicios/desafios/d013/d013.html',
    cover: 'covers/html-css.png',
    accent: '#f472b6',
    year: '2023',
  },
  {
    slug: 'JAVASCRIPT',
    title: 'Estudos de JavaScript',
    category: 'JavaScript',
    summary:
      'Exercícios de lógica, manipulação de DOM, eventos, funções e temporizadores construídos ao longo do curso.',
    problem:
      'Consolidar lógica de programação e interação com o navegador praticando em projetos pequenos e executáveis.',
    solution:
      'Cada aula é um pequeno programa independente, com scripts comentados, permitindo reexecutar e comparar abordagens diferentes para o mesmo problema. Inclui contadores, tabuada, análise de números e verificação de idade.',
    highlights: [
      'Manipulação de DOM e eventos',
      'Funções, condicionais e laços aplicados a problemas reais',
      'Interação com o usuário via prompt e formulários',
    ],
    stack: ['JavaScript', 'DOM', 'Lógica'],
    repoUrl: 'https://github.com/nicolasmoreiraferreira/JAVASCRIPT',
    cover: 'covers/javascript.svg',
    accent: '#facc15',
    year: '2023',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
