/**
 * Projetos exibidos no portfólio.
 * `cover` aponta para uma imagem em `public/covers/`.
 * `demoUrl` só existe quando o projeto está publicado e funcionando.
 * `private: true` indica projeto de código fechado, apresentado na conversa.
 */

export type ProjectCategory = 'Full Stack' | 'Front-end' | 'Responsivo' | 'JavaScript' | 'Back-end'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  problem: string
  solution: string
  highlights: string[]
  stack: string[]
  repoUrl?: string
  demoUrl?: string
  cover: string
  accent: string
  year: string
  private?: boolean
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'controle-financeiro',
    title: 'Controle Financeiro — Painel Web',
    category: 'Full Stack',
    summary:
      'Painel financeiro em produção que começou como controle pessoal e hoje atende clientes convidados, com dados isolados por conta.',
    problem:
      'Manter a vida financeira sob controle — contas fixas, cartões de crédito, orçamentos, metas e patrimônio — sem lançar tudo à mão, e ainda permitir que outras pessoas usem o mesmo sistema sem enxergar os dados de ninguém.',
    solution:
      'Aplicação web com front-end em React 19 e TypeScript e API tipada ponta a ponta com tRPC sobre Express, persistindo em MySQL via Drizzle ORM. O lançamento do dia a dia acontece por mensagem de WhatsApp: um webhook recebe o texto, interpreta valor, categoria e cartão, e grava a transação. A gravação é idempotente por identificador de mensagem, então reenvio ou resposta automática do próprio bot não gera lançamento duplicado, e um detector de duplicidades cruza manual, WhatsApp e planilha em modo somente leitura. Cada conta tem seus próprios dados: o convite é nominal, o primeiro acesso começa com painel vazio e credenciais de sincronização próprias.',
    highlights: [
      'API tipada ponta a ponta com tRPC, Zod e TypeScript estrito',
      'Lançamento por WhatsApp: parser de mensagem com idempotência por identificador único',
      'Isolamento de dados por conta, com convite nominal e onboarding próprio do convidado',
      'Central de cartões com ciclo de fatura, parcelas e contas fixas vinculadas',
      'Detector de possíveis duplicidades entre manual, WhatsApp e planilha, sem ação automática',
      'Patrimônio e backup com restauração validada e confirmação explícita',
      'Mais de 130 testes automatizados, checagem de tipos e build a cada entrega',
    ],
    stack: ['React', 'TypeScript', 'tRPC', 'Drizzle ORM', 'MySQL', 'Node.js', 'Evolution API', 'Vitest'],
    demoUrl: 'https://controlefinanceirosnay.com',
    cover: 'covers/financeiro.png',
    accent: '#22d3ee',
    year: '2026',
    private: true,
    featured: true,
  },
  {
    slug: 'botsnay',
    title: 'BOTSNAY — Plataforma de Automação',
    category: 'Back-end',
    summary:
      'Sistema desktop de automação de processos web com 190+ módulos Python, sessões de navegador isoladas e pipeline de releases versionadas.',
    problem:
      'Automatizar fluxos longos em páginas web com sessões isoladas, onde uma falha parcial não pode corromper o estado já conquistado nem repetir operações sensíveis como pagamentos.',
    solution:
      'Arquitetura modular em Python com interface Tkinter/ttkbootstrap e Playwright síncrono. Cada sessão de navegador pertence à thread que a criou, e a comunicação com a interface acontece por filas. O estado é persistido de forma atômica em JSON, com idempotência garantida nas operações críticas. As releases seguem versionamento, hash SHA-256, manifesto de atualização e validação automatizada em CI antes da publicação.',
    highlights: [
      '190+ módulos Python com separação clara de responsabilidades',
      'Sessões de navegador isoladas e concorrência com threads e filas',
      'Operações críticas idempotentes, com confirmação positiva obrigatória',
      'Escrita atômica de estado, resistente a bloqueios de arquivo no Windows',
      'Pipeline de release: versionamento, hash, manifesto e validação em CI',
      'Extensão de navegador (Manifest V3) em JavaScript para injeção de conteúdo',
    ],
    stack: ['Python', 'Playwright', 'Tkinter / ttkbootstrap', 'Threading', 'JSON', 'REST APIs', 'CI/CD'],
    cover: 'covers/botsnay.svg',
    accent: '#3776ab',
    year: '2026',
    private: true,
    featured: true,
  },
  {
    slug: 'convite-ravi',
    title: 'Convite Digital com RSVP',
    category: 'Full Stack',
    summary:
      'Site de evento com contagem regressiva, detalhes, confirmação de presença online e painel do dono para acompanhar a lista.',
    problem:
      'Convidar dezenas de famílias para uma festa e ainda saber, sem planilha paralela e sem contar mensagem por mensagem, quem confirmou e quantos adultos e crianças vêm.',
    solution:
      'Aplicação web com front-end em React e TypeScript e back-end com procedimentos tipados sobre banco de dados. O convidado vê a contagem regressiva para o evento, horário, local e o formulário de confirmação; o registro separa adultos de crianças e é validado no servidor. O painel do dono consolida as confirmações em totais, permite incluir convidados manualmente e controla o prazo — quando o prazo fecha, o site passa a orientar o convidado a falar com o responsável em vez de aceitar novos registros.',
    highlights: [
      'Contagem regressiva em tempo real para a data do evento',
      'RSVP com separação entre adultos e crianças e validação no servidor',
      'Painel do dono com totais consolidados e inclusão manual de convidados',
      'Controle de prazo: encerra a confirmação automática e orienta o convidado',
      'Responsivo do celular ao desktop, seguindo a identidade visual do convite',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Banco de dados', 'RSVP'],
    cover: 'covers/ravi.png',
    accent: '#fb923c',
    year: '2026',
    private: true,
    featured: true,
  },
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
    demoUrl: 'https://nicolasmoreiraferreira.github.io/projeto-cordel/',
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
