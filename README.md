<div align="center">

# Portfólio — Nicolas Moreira Ferreira

**Desenvolvedor Front-end · São Paulo, Brasil**

Site pessoal que reúne meus projetos, habilidades e formas de contato.
Construído do zero com React, TypeScript, Vite e Tailwind CSS, com deploy automático no GitHub Pages.

[![Deploy](https://github.com/nicolasmoreiraferreira/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/nicolasmoreiraferreira/portfolio/actions/workflows/deploy.yml)
[![Site](https://img.shields.io/badge/site-online-22d3ee?style=flat-square)](https://nicolasmoreiraferreira.github.io/portfolio/)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)

[Acessar o site](https://nicolasmoreiraferreira.github.io/portfolio/)

</div>

---

## Sobre o projeto

Este repositório é o meu portfólio profissional. Ele não é apenas uma página de apresentação:
é também uma peça de código que demonstra como eu trabalho. Cada decisão técnica aqui foi tomada
de forma consciente e está documentada abaixo.

**O que o site contém:**

| Seção | Conteúdo |
| --- | --- |
| Início | Apresentação, área de atuação e stack principal |
| Sobre | Trajetória, princípios de trabalho e diferenciais |
| Habilidades | Competências agrupadas por área, com nível declarado |
| Projetos | Seis projetos com filtro por categoria, capturas reais e detalhes técnicos |
| Formação | Cursos, estudos em andamento e números do percurso |
| Contato | E-mail, GitHub e LinkedIn, além do que busco profissionalmente |

## Decisões técnicas

Escolhas que valem ser explicadas em uma entrevista:

- **TypeScript em modo estrito** (`strict`, `noUnusedLocals`, `noUnusedParameters`). O objetivo é
  pegar erro em tempo de compilação, não em produção.
- **Conteúdo separado da apresentação.** Os dados ficam em `src/content/` e os componentes apenas
  os renderizam. Atualizar o portfólio é editar um arquivo de dados, não caçar texto dentro de JSX.
- **Tailwind CSS v4 com tokens próprios** em `@theme`, centralizando cores, fontes e raios em um
  único lugar, em vez de espalhar valores mágicos pelos componentes.
- **Sem bibliotecas de animação.** As animações de entrada usam `IntersectionObserver` nativo,
  com respeito a `prefers-reduced-motion` e degradação para conteúdo sempre visível.
- **Capturas reais dos projetos.** As imagens em `public/covers/` foram geradas por script a partir
  dos sites publicados, em vez de mockups genéricos.
- **Acessibilidade como requisito.** Idioma declarado, landmarks, atributo `alt` descritivo,
  link de "pular para o conteúdo", navegação por teclado com foco visível, `aria-expanded`/
  `aria-pressed`/`aria-current` nos controles e contraste verificado.
- **Deploy automatizado.** Cada push em `main` dispara um workflow que roda checagem de tipos,
  lint, build e publica no GitHub Pages — o pipeline falha antes de publicar código quebrado.

## Tecnologias

| Camada | Ferramenta |
| --- | --- |
| Interface | React 19 |
| Linguagem | TypeScript 5.9 (strict) |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 |
| Qualidade | ESLint 9 + typescript-eslint |
| CI/CD | GitHub Actions + GitHub Pages |

## Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/nicolasmoreiraferreira/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# Verificação de tipos, lint e build de produção
npm run typecheck
npm run lint
npm run build

# Pré-visualizar o build
npm run preview
```

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Checagem de tipos + build otimizado em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm run typecheck` | Checagem de tipos sem gerar arquivos |
| `npm run lint` | Análise estática com ESLint |

## Estrutura do projeto

```
portfolio/
├── .github/workflows/deploy.yml   # Pipeline de CI/CD para o GitHub Pages
├── public/covers/                 # Capturas de tela dos projetos
├── src/
│   ├── components/                # Componentes de interface
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx             # Wrapper de animação por scroll
│   │   ├── SectionHeading.tsx
│   │   └── Skills.tsx
│   ├── content/                   # Dados do site (texto, projetos, habilidades)
│   │   ├── projects.ts
│   │   ├── site.ts
│   │   └── skills.ts
│   ├── hooks/useReveal.ts         # Hook de visibilidade por IntersectionObserver
│   ├── App.tsx
│   ├── index.css                  # Tokens de design e estilos globais
│   └── main.tsx
├── index.html                     # Metadados, SEO e dados estruturados
├── vite.config.ts
└── package.json
```

## Personalização

Todo o conteúdo textual está centralizado em `src/content/`:

- **`site.ts`** — nome, cargo, contatos, textos da seção Sobre, formação e princípios.
- **`projects.ts`** — lista de projetos, com problema, solução e destaques técnicos.
- **`skills.ts`** — grupos de habilidades e níveis declarados.

As cores ficam em `src/index.css`, no bloco `@theme`. Alterar `--color-accent-400` muda a cor de
destaque em todo o site.

### Publicando em um domínio próprio

O `base` do Vite é controlado por variável de ambiente:

```bash
VITE_BASE=/ npm run build
```

O build gerado em `dist/` pode ser servido por qualquer host estático.

## Acessibilidade

- Marcação semântica com `header`, `nav`, `main`, `section` e `footer`.
- Contraste de texto conforme WCAG AA.
- Navegação completa por teclado, com `:focus-visible` visível em todos os elementos interativos.
- Animações desativadas automaticamente quando o sistema pede movimento reduzido.
- Metadados de SEO, Open Graph e dados estruturados (`schema.org/Person`).

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE).

## Contato

- **GitHub:** [@nicolasmoreiraferreira](https://github.com/nicolasmoreiraferreira)
- **LinkedIn:** [Nicolas Moreira Ferreira](https://www.linkedin.com/in/seu-usuario/)
- **E-mail:** nicolas.moreira.ferreira@email.com

> Substitua os dados de LinkedIn e e-mail acima pelos seus contatos reais antes de enviar o
> repositório para um processo seletivo.
