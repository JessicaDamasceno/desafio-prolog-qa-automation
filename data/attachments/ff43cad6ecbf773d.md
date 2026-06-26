# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bugs-relatorio.spec.ts >> Relatório de Bugs — Gestão de Frota >> Bug 11: não deve salvar com Próxima Manutenção anterior à Última
- Location: tests/bugs-relatorio.spec.ts:109:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/novo$/
Received string:  "https://gestao-frota-teste-qa.lovable.app/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://gestao-frota-teste-qa.lovable.app/"

```

```yaml
- banner:
  - link "Gestão de Frota Painel administrativo":
    - /url: /
    - heading "Gestão de Frota" [level=1]
    - paragraph: Painel administrativo
- main:
  - heading "Veículos" [level=2]
  - paragraph: "Total: 36 veículos"
  - button "Novo veículo"
  - textbox "Buscar por placa, marca ou modelo"
  - combobox: Todos os status
  - combobox: Todos os tipos
  - table:
    - rowgroup:
      - row "Selecionar todos Placa Marca Modelo Ano Tipo Status KM Atual Motorista Ações":
        - columnheader "Selecionar todos":
          - checkbox "Selecionar todos"
        - columnheader "Placa":
          - button "Placa"
        - columnheader "Marca"
        - columnheader "Modelo"
        - columnheader "Ano":
          - button "Ano"
        - columnheader "Tipo"
        - columnheader "Status"
        - columnheader "KM Atual":
          - button "KM Atual"
        - columnheader "Motorista"
        - columnheader "Ações"
    - rowgroup:
      - row "Selecionar QA1111T QA1111T Fiat Uno 2020 Carro Ativo 100 km Jéssica QA":
        - cell "Selecionar QA1111T":
          - checkbox "Selecionar QA1111T"
        - cell "QA1111T"
        - cell "Fiat"
        - cell "Uno"
        - cell "2020"
        - cell "Carro"
        - cell "Ativo"
        - cell "100 km"
        - cell "Jéssica QA"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar ABC1D23 ABC1D23 Honda Civic 2021 Carro Ativo 45.230 km Carlos Andrade":
        - cell "Selecionar ABC1D23":
          - checkbox "Selecionar ABC1D23"
        - cell "ABC1D23"
        - cell "Honda"
        - cell "Civic"
        - cell "2021"
        - cell "Carro"
        - cell "Ativo"
        - cell "45.230 km"
        - cell "Carlos Andrade"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar BRA2E34 BRA2E34 Volkswagen Gol 2018 Carro Manutenção 128.450 km Ricardo Souza":
        - cell "Selecionar BRA2E34":
          - checkbox "Selecionar BRA2E34"
        - cell "BRA2E34"
        - cell "Volkswagen"
        - cell "Gol"
        - cell "2018"
        - cell "Carro"
        - cell "Manutenção"
        - cell "128.450 km"
        - cell "Ricardo Souza"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar CDE3F45 CDE3F45 Mercedes-Benz Actros 2651 2019 Carreta Ativo 215.780 km Marcos Oliveira":
        - cell "Selecionar CDE3F45":
          - checkbox "Selecionar CDE3F45"
        - cell "CDE3F45"
        - cell "Mercedes-Benz"
        - cell "Actros 2651"
        - cell "2019"
        - cell "Carreta"
        - cell "Ativo"
        - cell "215.780 km"
        - cell "Marcos Oliveira"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar DEF4G56 DEF4G56 Scania R450 2020 Caminhão Ativo 178.900 km João Pereira":
        - cell "Selecionar DEF4G56":
          - checkbox "Selecionar DEF4G56"
        - cell "DEF4G56"
        - cell "Scania"
        - cell "R450"
        - cell "2020"
        - cell "Caminhão"
        - cell "Ativo"
        - cell "178.900 km"
        - cell "João Pereira"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar EFG5H67 EFG5H67 Fiat Strada 2022 Carro Ativo 28.340 km Antonio Lima":
        - cell "Selecionar EFG5H67":
          - checkbox "Selecionar EFG5H67"
        - cell "EFG5H67"
        - cell "Fiat"
        - cell "Strada"
        - cell "2022"
        - cell "Carro"
        - cell "Ativo"
        - cell "28.340 km"
        - cell "Antonio Lima"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar FGH6I78 FGH6I78 Honda CG 160 Titan 2023 Moto Ativo 9.500 km Paulo Cardoso":
        - cell "Selecionar FGH6I78":
          - checkbox "Selecionar FGH6I78"
        - cell "FGH6I78"
        - cell "Honda"
        - cell "CG 160 Titan"
        - cell "2023"
        - cell "Moto"
        - cell "Ativo"
        - cell "9.500 km"
        - cell "Paulo Cardoso"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar GHI7J89 GHI7J89 Renault Master 2019 Van Inativo 156.200 km Luiz Fernandes":
        - cell "Selecionar GHI7J89":
          - checkbox "Selecionar GHI7J89"
        - cell "GHI7J89"
        - cell "Renault"
        - cell "Master"
        - cell "2019"
        - cell "Van"
        - cell "Inativo"
        - cell "156.200 km"
        - cell "Luiz Fernandes"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar HIJ8K90 HIJ8K90 Volvo FH 540 2021 Carreta Manutenção 187.650 km José Almeida":
        - cell "Selecionar HIJ8K90":
          - checkbox "Selecionar HIJ8K90"
        - cell "HIJ8K90"
        - cell "Volvo"
        - cell "FH 540"
        - cell "2021"
        - cell "Carreta"
        - cell "Manutenção"
        - cell "187.650 km"
        - cell "José Almeida"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
      - row "Selecionar IJK9L01 IJK9L01 Iveco Daily 70C17 2018 Caminhão Ativo 132.480 km Roberto Nunes":
        - cell "Selecionar IJK9L01":
          - checkbox "Selecionar IJK9L01"
        - cell "IJK9L01"
        - cell "Iveco"
        - cell "Daily 70C17"
        - cell "2018"
        - cell "Caminhão"
        - cell "Ativo"
        - cell "132.480 km"
        - cell "Roberto Nunes"
        - cell:
          - button "Ver detalhes"
          - button "Editar"
          - button "Deletar"
  - paragraph: Mostrando 1–10 de 36
  - button "Anterior" [disabled]
  - text: Página 1 de 4
  - button "Próxima"
- region "Notifications alt+T"
```

# Test source

```ts
  29  | 
  30  |     for (const placa of selecionadas) {
  31  |       await listPage.selecionar(placa);
  32  |     }
  33  |     await expect(listPage.selecionados).toContainText('4 veículos selecionados');
  34  | 
  35  |     await listPage.deletarSelecionados.click();
  36  | 
  37  |     // O sistema confirma a remoção dos 4...
  38  |     await expect(listPage.toast).toContainText('4 veículos deletados com sucesso');
  39  | 
  40  |     // ...então o Total deve cair em 4 e nenhum dos selecionados deve permanecer.
  41  |     expect(await listPage.totalCount()).toBe(totalAntes - 4);
  42  |     for (const placa of selecionadas) {
  43  |       await listPage.buscar(placa);
  44  |       await expect(listPage.rows).toHaveCount(0);
  45  |       await listPage.buscar('');
  46  |     }
  47  |   });
  48  | 
  49  |   /**
  50  |    * Bug — Exclusão em massa não tem diálogo de confirmação.
  51  |    * Esperado: por ser uma ação destrutiva (igual à exclusão individual, que
  52  |    * abre o alertdialog "Confirmar exclusão"), "Deletar selecionados" deve
  53  |    * pedir confirmação antes de remover.
  54  |    * Observado: o clique remove os registros imediatamente, sem qualquer
  55  |    * confirmação, expondo o usuário a exclusões acidentais.
  56  |    */
  57  |   // TODO: essa validação deve fazer parte do cenário de exclusão acima (Bug 4).
  58  |   test('Bug: exclusão em massa deve pedir confirmação antes de remover', async ({ listPage }) => {
  59  |     await listPage.goto();
  60  | 
  61  |     await listPage.selecionar('ABC1D23');
  62  |     await listPage.selecionar('CDE3F45');
  63  |     await expect(listPage.selecionados).toContainText('2 veículos selecionados');
  64  | 
  65  |     await listPage.deletarSelecionados.click();
  66  | 
  67  |     // Deve surgir um diálogo de confirmação (como na exclusão individual)
  68  |     // ANTES de qualquer remoção / toast de sucesso.
  69  |     await expect(listPage.page.getByRole('alertdialog')).toBeVisible();
  70  |     await expect(listPage.toast).not.toContainText(/deletad/i);
  71  |   });
  72  | 
  73  |   /**
  74  |    * Bug 5 (Alto/P2) — Edição em massa confirma sucesso, mas atualiza apenas
  75  |    * o primeiro registro.
  76  |    * Esperado: alterar status de 2 veículos em "Manutenção" para "Ativo"
  77  |    * atualiza ambos.
  78  |    * Observado: toast diz "2 veículos atualizados", mas só BRA2E34 (primeiro
  79  |    * da seleção) vira "Ativo"; HIJ8K90 permanece em "Manutenção".
  80  |    */
  81  |   test('Bug 5: edição em massa deve atualizar TODOS os selecionados', async ({ listPage }) => {
  82  |     await listPage.goto();
  83  | 
  84  |     // Ambos estão em "Manutenção" no estado inicial.
  85  |     expect(await listPage.statusDe('BRA2E34')).toBe('Manutenção');
  86  |     expect(await listPage.statusDe('HIJ8K90')).toBe('Manutenção');
  87  | 
  88  |     await listPage.selecionar('BRA2E34');
  89  |     await listPage.selecionar('HIJ8K90');
  90  |     await expect(listPage.selecionados).toContainText('2 veículos selecionados');
  91  | 
  92  |     await listPage.editarEmMassaStatus('Ativo');
  93  | 
  94  |     await expect(listPage.toast).toContainText('2 veículos atualizados com sucesso');
  95  | 
  96  |     // Os DOIS veículos selecionados devem passar a "Ativo".
  97  |     expect(await listPage.statusDe('BRA2E34')).toBe('Ativo');
  98  |     expect(await listPage.statusDe('HIJ8K90')).toBe('Ativo');
  99  |   });
  100 | 
  101 |   /**
  102 |    * Bug 11 (Alto/P2) — Sistema permite "Próxima Manutenção" anterior à
  103 |    * "Última Manutenção".
  104 |    * Esperado: o cadastro com Próxima (09/06/2026) anterior à Última
  105 |    * (17/06/2026) é bloqueado com validação; o veículo NÃO é salvo.
  106 |    * Observado: o sistema aceita, salva e volta para a listagem com toast
  107 |    * "Veículo cadastrado com sucesso.".
  108 |    */
  109 |   test('Bug 11: não deve salvar com Próxima Manutenção anterior à Última', async ({ page, listPage, formPage }) => {
  110 |     const veiculoDatasInvalidas: VeiculoData = {
  111 |       placa: 'QA1111T',
  112 |       marca: 'Fiat',
  113 |       modelo: 'Uno',
  114 |       ano: 2020,
  115 |       tipo: 'Carro',
  116 |       status: 'Ativo',
  117 |       kmAtual: 100,
  118 |       motorista: 'Jéssica QA',
  119 |       ultima: diasAPartirDeHoje(-10),   // Última Manutenção (10 dias atrás)
  120 |       proxima: diasAPartirDeHoje(-18),  // Próxima ANTERIOR à Última -> inválido
  121 |     };
  122 | 
  123 |     await listPage.goto();
  124 |     await listPage.abrirNovo();
  125 |     await formPage.fill(veiculoDatasInvalidas);
  126 |     await formPage.salvarForm();
  127 | 
  128 |     // O cadastro deve ser bloqueado: permanece em /novo e NÃO há toast de sucesso.
> 129 |     await expect(page).toHaveURL(/\/novo$/);
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  130 |     await expect(listPage.toast).not.toContainText(/cadastrado com sucesso/i);
  131 |   });
  132 | });
```