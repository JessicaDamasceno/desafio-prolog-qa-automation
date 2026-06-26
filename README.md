# Automação E2E — Playwright + TypeScript

Projeto de testes end-to-end usando [Playwright](https://playwright.dev/) com TypeScript.

## Pré-requisitos

| Ferramenta | Versão mínima | Recomendada | Observação |
|---|---|---|---|
| **Node.js** | 18+ | 22.x LTS (22.21.0 testada) | Inclui o `npm`. Baixe em [nodejs.org](https://nodejs.org/) |

> ⚠️ **Importante:** o Node.js precisa estar instalado **diretamente pelo instalador oficial** (nodejs.org), e **não** via pacote npm chamado `node`. O Playwright depende do Node para rodar.

Verifique se o Node está instalado corretamente:

```bash
node -v   # deve mostrar v18 ou superior, ex: v22.21.0
npm -v
```

## Instalação

Na raiz do projeto, instale as dependências e os navegadores:

```bash
# 1) Instala as dependências do projeto (@playwright/test, @types/node)
npm install

# 2) Baixa os navegadores usados pelo Playwright (Chromium, Firefox, WebKit)
npx playwright install
```

> Em alguns ambientes Linux pode ser necessário instalar também as bibliotecas de sistema:
> `npx playwright install --with-deps`

### Versões usadas

- `@playwright/test`: **1.61.1** (Playwright core 1.61.1)
- `@types/node`: **26.0.1**

## Como rodar os testes

```bash
npm test                 # roda todos os testes (Chromium, Firefox, WebKit)
npm run test:ui          # modo UI interativo
npm run test:headed      # com o navegador visível
npm run test:chromium    # apenas no Chromium
npm run test:debug       # modo debug (passo a passo)
npm run report           # abre o último relatório HTML
npm run codegen          # gravador de testes (gera código clicando)
```

## Estrutura

```
.
├── playwright.config.ts        # configuração (browsers, paralelismo, retries, reporter, trace)
├── pages/                      # Page Object Model
│   ├── HomePage.ts             # listagem (/) — busca, filtros, ações de linha, exclusão
│   ├── FormPage.ts             # formulário (/novo e /editar/:id)
│   └── DetailsPage.ts          # detalhes (/veiculo/:id)
├── tests/
│   ├── fixtures.ts             # fixtures que injetam os Page Objects
│   ├── crud.spec.ts            # cenários CRUD da demo "Gestão de Frota"
│   ├── bugs-relatorio.spec.ts  # testes que reproduzem os bugs encontrados
│   ├── layout.spec.ts          # validações de layout (ex.: ícone do calendário)
│   └── layout-visual.spec.ts   # guards visuais (screenshots) do layout
├── BUGS.md                     # bugs encontrados na aplicação
├── .github/workflows/
│   └── playwright.yml          # CI no GitHub Actions
└── package.json
```

## Aplicação sob teste

Demo **Gestão de Frota**: https://gestao-frota-teste-qa.lovable.app
É uma SPA **sem backend** — atualizar a página (F5) reseta tudo ao estado inicial
(35 veículos), por isso cada teste parte de um estado limpo e é independente.

### Bugs encontrados

Os testes validam o comportamento correto da aplicação. Os bugs encontrados estão
documentados em [BUGS.md](BUGS.md).
