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
# 1) Instala as dependências do projeto (@playwright/test, @types/node,
#    dotenv e o reporter allure-playwright)
npm install

# 2) Baixa os navegadores usados pelo Playwright (Chromium, Firefox, WebKit)
npx playwright install
```

> Em alguns ambientes Linux pode ser necessário instalar também as bibliotecas de sistema:
> `npx playwright install --with-deps`

## Variáveis de ambiente (.env)

A URL da aplicação e eventuais credenciais de login ficam num arquivo `.env`
(carregado via [dotenv](https://github.com/motdotla/dotenv) no `playwright.config.ts`).
O `.env` é **ignorado pelo git** — use o [`.env.example`](.env.example) como modelo:

```bash
cp .env.example .env   # no Windows: copy .env.example .env
```

Depois preencha os valores no `.env`:

| Variável | Descrição |
|---|---|
| `BASE_URL` | URL base da aplicação sob teste (usada no `baseURL` do Playwright). |
| `APP_USERNAME` | Usuário de login, caso a aplicação exija autenticação. |
| `APP_PASSWORD` | Senha de login, caso a aplicação exija autenticação. |

> ⚠️ Sem o `.env` (ou sem `BASE_URL` definida), o `baseURL` fica indefinido e os
> testes que usam caminhos relativos falham. Garanta que o `.env` exista antes de rodar.

### Versões usadas

- `@playwright/test`: **1.61.1** (Playwright core 1.61.1)
- `@types/node`: **26.0.1**
- `dotenv`: **17.4.2** (carrega o `.env`)
- `allure-playwright`: **3.10.2** (reporter que gera os resultados do Allure)
- `allure-commandline`: **2.43.0** (CLI que monta o HTML do Allure — usada no CI)

## Como rodar os testes

```bash
npm test                 # roda todos os testes (Chromium, Firefox, WebKit)
npm run test:ui          # modo UI interativo
npm run test:headed      # com o navegador visível
npm run test:chromium    # apenas no Chromium
npm run test:debug       # modo debug (passo a passo)
npm run report           # abre o último relatório HTML
npm run codegen          # gravador de testes (gera código clicando)
npm run typecheck        # checagem de tipos do TypeScript (tsc --noEmit), sem rodar testes
```

## Relatórios (Allure)

Além do relatório HTML nativo do Playwright (`npm run report`), o projeto usa o
[Allure](https://allurereport.org/) para um relatório mais rico (gráfico de
tendência, histórico, anexos de screenshot/trace por teste).

Durante a execução, o reporter `allure-playwright` grava os resultados brutos em
`allure-results/` (ignorado pelo git). A montagem do HTML navegável (`allure generate`)
**roda apenas no CI** — por isso você **não precisa de Java instalado localmente**.

A cada execução, o CI (GitHub Actions) gera o relatório e o publica no GitHub Pages,
mantendo o histórico para o gráfico de tendência. O relatório fica disponível em:

### 👉 https://jessicadamasceno.github.io/desafio-prolog-qa-automation/

> O mesmo relatório também é salvo como **artifact** (`allure-report`) em cada
> execução, caso prefira baixar o `.zip`. Para abri-lo localmente sirva a pasta por
> HTTP (ex.: `npx serve allure-report`) — abrir o `index.html` direto pelo
> navegador (`file://`) mostra a página em branco.

## Estrutura

```
.
├── playwright.config.ts        # configuração (browsers, paralelismo, retries, reporters, trace)
├── tsconfig.json               # configuração do TypeScript (usada pelo script typecheck)
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
├── utils/
│   └── dates.ts                # helpers de data (evita datas "chumbadas" nos testes)
├── BUGS.md                     # bugs encontrados na aplicação
├── .env.example                # modelo de variáveis de ambiente (BASE_URL, login)
├── .github/workflows/
│   └── playwright.yml          # CI no GitHub Actions (roda os testes e publica o Allure)
└── package.json
```

## Aplicação sob teste

Demo **Gestão de Frota**: https://gestao-frota-teste-qa.lovable.app
É uma SPA **sem backend** — atualizar a página (F5) reseta tudo ao estado inicial
(35 veículos), por isso cada teste parte de um estado limpo e é independente.

### Bugs encontrados

Os testes validam o comportamento correto da aplicação. Os bugs encontrados estão
documentados em [BUGS.md](BUGS.md).
