# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bugs-relatorio.spec.ts >> Relatório de Bugs — Gestão de Frota >> Bug 4: exclusão em massa deve remover TODOS os selecionados
- Location: tests/bugs-relatorio.spec.ts:24:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 31
Received: 34
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link "Gestão de Frota Painel administrativo" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e12]:
          - heading "Gestão de Frota" [level=1] [ref=e13]
          - paragraph [ref=e14]: Painel administrativo
    - main [ref=e15]:
      - generic [ref=e16]:
        - generic [ref=e17]:
          - heading "Veículos" [level=2] [ref=e18]
          - paragraph [ref=e19]: "Total: 34 veículos"
        - button "Novo veículo" [ref=e20] [cursor=pointer]:
          - img
          - text: Novo veículo
      - generic [ref=e21]:
        - generic [ref=e22]:
          - img
          - textbox "Buscar por placa, marca ou modelo" [ref=e23]
        - combobox [ref=e24] [cursor=pointer]:
          - generic: Todos os status
          - img [ref=e25]
        - combobox [ref=e27] [cursor=pointer]:
          - generic: Todos os tipos
          - img [ref=e28]
      - table [ref=e32]:
        - rowgroup [ref=e33]:
          - row "Selecionar todos Placa Marca Modelo Ano Tipo Status KM Atual Motorista Ações" [ref=e34]:
            - columnheader "Selecionar todos" [ref=e35]:
              - checkbox "Selecionar todos" [ref=e36] [cursor=pointer]
            - columnheader "Placa" [ref=e37]:
              - button "Placa" [ref=e38]:
                - text: Placa
                - img [ref=e39]
            - columnheader "Marca" [ref=e42]
            - columnheader "Modelo" [ref=e43]
            - columnheader "Ano" [ref=e44]:
              - button "Ano" [ref=e45]:
                - text: Ano
                - img [ref=e46]
            - columnheader "Tipo" [ref=e49]
            - columnheader "Status" [ref=e50]
            - columnheader "KM Atual" [ref=e51]:
              - button "KM Atual" [ref=e52]:
                - text: KM Atual
                - img [ref=e53]
            - columnheader "Motorista" [ref=e56]
            - columnheader "Ações" [ref=e57]
        - rowgroup [ref=e58]:
          - row "Selecionar BRA2E34 BRA2E34 Volkswagen Gol 2018 Carro Manutenção 128.450 km Ricardo Souza" [ref=e59]:
            - cell "Selecionar BRA2E34" [ref=e60]:
              - checkbox "Selecionar BRA2E34" [ref=e61] [cursor=pointer]
            - cell "BRA2E34" [ref=e62]
            - cell "Volkswagen" [ref=e63]
            - cell "Gol" [ref=e64]
            - cell "2018" [ref=e65]
            - cell "Carro" [ref=e66]
            - cell "Manutenção" [ref=e67]:
              - generic [ref=e68]: Manutenção
            - cell "128.450 km" [ref=e69]
            - cell "Ricardo Souza" [ref=e70]
            - cell [ref=e71]:
              - generic [ref=e72]:
                - button "Ver detalhes" [ref=e73] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e74] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e75] [cursor=pointer]:
                  - img
          - row "Selecionar CDE3F45 CDE3F45 Mercedes-Benz Actros 2651 2019 Carreta Ativo 215.780 km Marcos Oliveira" [ref=e76]:
            - cell "Selecionar CDE3F45" [ref=e77]:
              - checkbox "Selecionar CDE3F45" [ref=e78] [cursor=pointer]
            - cell "CDE3F45" [ref=e79]
            - cell "Mercedes-Benz" [ref=e80]
            - cell "Actros 2651" [ref=e81]
            - cell "2019" [ref=e82]
            - cell "Carreta" [ref=e83]
            - cell "Ativo" [ref=e84]:
              - generic [ref=e85]: Ativo
            - cell "215.780 km" [ref=e86]
            - cell "Marcos Oliveira" [ref=e87]
            - cell [ref=e88]:
              - generic [ref=e89]:
                - button "Ver detalhes" [ref=e90] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e91] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e92] [cursor=pointer]:
                  - img
          - row "Selecionar DEF4G56 DEF4G56 Scania R450 2020 Caminhão Ativo 178.900 km João Pereira" [ref=e93]:
            - cell "Selecionar DEF4G56" [ref=e94]:
              - checkbox "Selecionar DEF4G56" [ref=e95] [cursor=pointer]
            - cell "DEF4G56" [ref=e96]
            - cell "Scania" [ref=e97]
            - cell "R450" [ref=e98]
            - cell "2020" [ref=e99]
            - cell "Caminhão" [ref=e100]
            - cell "Ativo" [ref=e101]:
              - generic [ref=e102]: Ativo
            - cell "178.900 km" [ref=e103]
            - cell "João Pereira" [ref=e104]
            - cell [ref=e105]:
              - generic [ref=e106]:
                - button "Ver detalhes" [ref=e107] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e108] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e109] [cursor=pointer]:
                  - img
          - row "Selecionar EFG5H67 EFG5H67 Fiat Strada 2022 Carro Ativo 28.340 km Antonio Lima" [ref=e110]:
            - cell "Selecionar EFG5H67" [ref=e111]:
              - checkbox "Selecionar EFG5H67" [ref=e112] [cursor=pointer]
            - cell "EFG5H67" [ref=e113]
            - cell "Fiat" [ref=e114]
            - cell "Strada" [ref=e115]
            - cell "2022" [ref=e116]
            - cell "Carro" [ref=e117]
            - cell "Ativo" [ref=e118]:
              - generic [ref=e119]: Ativo
            - cell "28.340 km" [ref=e120]
            - cell "Antonio Lima" [ref=e121]
            - cell [ref=e122]:
              - generic [ref=e123]:
                - button "Ver detalhes" [ref=e124] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e125] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e126] [cursor=pointer]:
                  - img
          - row "Selecionar FGH6I78 FGH6I78 Honda CG 160 Titan 2023 Moto Ativo 9.500 km Paulo Cardoso" [ref=e127]:
            - cell "Selecionar FGH6I78" [ref=e128]:
              - checkbox "Selecionar FGH6I78" [ref=e129] [cursor=pointer]
            - cell "FGH6I78" [ref=e130]
            - cell "Honda" [ref=e131]
            - cell "CG 160 Titan" [ref=e132]
            - cell "2023" [ref=e133]
            - cell "Moto" [ref=e134]
            - cell "Ativo" [ref=e135]:
              - generic [ref=e136]: Ativo
            - cell "9.500 km" [ref=e137]
            - cell "Paulo Cardoso" [ref=e138]
            - cell [ref=e139]:
              - generic [ref=e140]:
                - button "Ver detalhes" [ref=e141] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e142] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e143] [cursor=pointer]:
                  - img
          - row "Selecionar GHI7J89 GHI7J89 Renault Master 2019 Van Inativo 156.200 km Luiz Fernandes" [ref=e144]:
            - cell "Selecionar GHI7J89" [ref=e145]:
              - checkbox "Selecionar GHI7J89" [ref=e146] [cursor=pointer]
            - cell "GHI7J89" [ref=e147]
            - cell "Renault" [ref=e148]
            - cell "Master" [ref=e149]
            - cell "2019" [ref=e150]
            - cell "Van" [ref=e151]
            - cell "Inativo" [ref=e152]:
              - generic [ref=e153]: Inativo
            - cell "156.200 km" [ref=e154]
            - cell "Luiz Fernandes" [ref=e155]
            - cell [ref=e156]:
              - generic [ref=e157]:
                - button "Ver detalhes" [ref=e158] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e159] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e160] [cursor=pointer]:
                  - img
          - row "Selecionar HIJ8K90 HIJ8K90 Volvo FH 540 2021 Carreta Manutenção 187.650 km José Almeida" [ref=e161]:
            - cell "Selecionar HIJ8K90" [ref=e162]:
              - checkbox "Selecionar HIJ8K90" [ref=e163] [cursor=pointer]
            - cell "HIJ8K90" [ref=e164]
            - cell "Volvo" [ref=e165]
            - cell "FH 540" [ref=e166]
            - cell "2021" [ref=e167]
            - cell "Carreta" [ref=e168]
            - cell "Manutenção" [ref=e169]:
              - generic [ref=e170]: Manutenção
            - cell "187.650 km" [ref=e171]
            - cell "José Almeida" [ref=e172]
            - cell [ref=e173]:
              - generic [ref=e174]:
                - button "Ver detalhes" [ref=e175] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e176] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e177] [cursor=pointer]:
                  - img
          - row "Selecionar IJK9L01 IJK9L01 Iveco Daily 70C17 2018 Caminhão Ativo 132.480 km Roberto Nunes" [ref=e178]:
            - cell "Selecionar IJK9L01" [ref=e179]:
              - checkbox "Selecionar IJK9L01" [ref=e180] [cursor=pointer]
            - cell "IJK9L01" [ref=e181]
            - cell "Iveco" [ref=e182]
            - cell "Daily 70C17" [ref=e183]
            - cell "2018" [ref=e184]
            - cell "Caminhão" [ref=e185]
            - cell "Ativo" [ref=e186]:
              - generic [ref=e187]: Ativo
            - cell "132.480 km" [ref=e188]
            - cell "Roberto Nunes" [ref=e189]
            - cell [ref=e190]:
              - generic [ref=e191]:
                - button "Ver detalhes" [ref=e192] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e193] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e194] [cursor=pointer]:
                  - img
          - row "Selecionar JKL0M12 JKL0M12 Ford Transit 2020 Van Ativo 76.540 km Fernando Castro" [ref=e195]:
            - cell "Selecionar JKL0M12" [ref=e196]:
              - checkbox "Selecionar JKL0M12" [ref=e197] [cursor=pointer]
            - cell "JKL0M12" [ref=e198]
            - cell "Ford" [ref=e199]
            - cell "Transit" [ref=e200]
            - cell "2020" [ref=e201]
            - cell "Van" [ref=e202]
            - cell "Ativo" [ref=e203]:
              - generic [ref=e204]: Ativo
            - cell "76.540 km" [ref=e205]
            - cell "Fernando Castro" [ref=e206]
            - cell [ref=e207]:
              - generic [ref=e208]:
                - button "Ver detalhes" [ref=e209] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e210] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e211] [cursor=pointer]:
                  - img
          - row "Selecionar KLM1N23 KLM1N23 Honda HR-V 2022 Carro Ativo 31.200 km Eduardo Ramos" [ref=e212]:
            - cell "Selecionar KLM1N23" [ref=e213]:
              - checkbox "Selecionar KLM1N23" [ref=e214] [cursor=pointer]
            - cell "KLM1N23" [ref=e215]
            - cell "Honda" [ref=e216]
            - cell "HR-V" [ref=e217]
            - cell "2022" [ref=e218]
            - cell "Carro" [ref=e219]
            - cell "Ativo" [ref=e220]:
              - generic [ref=e221]: Ativo
            - cell "31.200 km" [ref=e222]
            - cell "Eduardo Ramos" [ref=e223]
            - cell [ref=e224]:
              - generic [ref=e225]:
                - button "Ver detalhes" [ref=e226] [cursor=pointer]:
                  - img
                - button "Editar" [ref=e227] [cursor=pointer]:
                  - img
                - button "Deletar" [ref=e228] [cursor=pointer]:
                  - img
      - generic [ref=e229]:
        - paragraph [ref=e230]: Mostrando 1–10 de 34
        - generic [ref=e231]:
          - button "Anterior" [disabled]:
            - img
            - text: Anterior
          - generic [ref=e232]: Página 1 de 4
          - button "Próxima" [ref=e233] [cursor=pointer]:
            - text: Próxima
            - img
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e234]:
        - img [ref=e236]
        - generic [ref=e239]: 4 veículos deletados com sucesso.
```

# Test source

```ts
  1   | import { test, expect } from './fixtures';
  2   | import { VeiculoData } from '../pages/FormPage';
  3   | import { diasAPartirDeHoje } from '../utils/dates';
  4   | 
  5   | /**
  6   |  * Cenários do "Relatório de Bugs — Gestão de Frota" (Bugs 4, 5 e 11).
  7   |  *
  8   |  * Todos validam o comportamento CORRETO/esperado. Como os defeitos ainda
  9   |  * existem na aplicação, estes testes FALHAM de propósito — servem de
  10  |  * evidência automatizada dos bugs (mesmo padrão de crud.spec.ts).
  11  |  *
  12  |  * App SEM backend: cada teste parte de um page.goto('/') que reseta ao
  13  |  * estado inicial (35 veículos), então os testes são independentes.
  14  |  */
  15  | test.describe('Relatório de Bugs — Gestão de Frota', () => {
  16  | 
  17  |   /**
  18  |    * Bug 4 (Crítico/P1) — Exclusão em massa confirma sucesso, mas remove
  19  |    * apenas um registro.
  20  |    * Esperado: ao deletar 4 selecionados, os 4 saem da grid e o Total cai 4.
  21  |    * Observado: toast diz "4 veículos deletados", mas só 1 é removido
  22  |    * (Total cai de 35 para 34) e 3 permanecem na grid.
  23  |    */
  24  |   test('Bug 4: exclusão em massa deve remover TODOS os selecionados', async ({ listPage }) => {
  25  |     const selecionadas = ['ABC1D23', 'CDE3F45', 'DEF4G56', 'EFG5H67'];
  26  | 
  27  |     await listPage.goto();
  28  |     const totalAntes = await listPage.totalCount(); // 35
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
> 41  |     expect(await listPage.totalCount()).toBe(totalAntes - 4);
      |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
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
  129 |     await expect(page).toHaveURL(/\/novo$/);
  130 |     await expect(listPage.toast).not.toContainText(/cadastrado com sucesso/i);
  131 |   });
  132 | });
```