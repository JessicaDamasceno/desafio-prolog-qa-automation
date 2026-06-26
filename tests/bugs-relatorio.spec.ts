import { test, expect } from './fixtures';
import { VeiculoData } from '../pages/FormPage';

/**
 * Cenários do "Relatório de Bugs — Gestão de Frota" (Bugs 4, 5 e 11).
 *
 * Todos validam o comportamento CORRETO/esperado. Como os defeitos ainda
 * existem na aplicação, estes testes FALHAM de propósito — servem de
 * evidência automatizada dos bugs (mesmo padrão de crud.spec.ts).
 *
 * App SEM backend: cada teste parte de um page.goto('/') que reseta ao
 * estado inicial (35 veículos), então os testes são independentes.
 */
test.describe('Relatório de Bugs — Gestão de Frota', () => {

  /**
   * Bug 4 (Crítico/P1) — Exclusão em massa confirma sucesso, mas remove
   * apenas um registro.
   * Esperado: ao deletar 4 selecionados, os 4 saem da grid e o Total cai 4.
   * Observado: toast diz "4 veículos deletados", mas só 1 é removido
   * (Total cai de 35 para 34) e 3 permanecem na grid.
   */
  test('Bug 4: exclusão em massa deve remover TODOS os selecionados', async ({ listPage }) => {
    const selecionadas = ['ABC1D23', 'CDE3F45', 'DEF4G56', 'EFG5H67'];

    await listPage.goto();
    const totalAntes = await listPage.totalCount(); // 35

    for (const placa of selecionadas) {
      await listPage.selecionar(placa);
    }
    await expect(listPage.selecionados).toContainText('4 veículos selecionados');

    await listPage.deletarSelecionados.click();

    // O sistema confirma a remoção dos 4...
    await expect(listPage.toast).toContainText('4 veículos deletados com sucesso');

    // ...então o Total deve cair em 4 e nenhum dos selecionados deve permanecer.
    expect(await listPage.totalCount()).toBe(totalAntes - 4);
    for (const placa of selecionadas) {
      await listPage.buscar(placa);
      await expect(listPage.rows).toHaveCount(0);
      await listPage.buscar('');
    }
  });

  /**
   * Bug — Exclusão em massa não tem diálogo de confirmação.
   * Esperado: por ser uma ação destrutiva (igual à exclusão individual, que
   * abre o alertdialog "Confirmar exclusão"), "Deletar selecionados" deve
   * pedir confirmação antes de remover.
   * Observado: o clique remove os registros imediatamente, sem qualquer
   * confirmação, expondo o usuário a exclusões acidentais.
   */
  // TODO: essa validação deve fazer parte do cenário de exclusão acima (Bug 4).
  test('Bug: exclusão em massa deve pedir confirmação antes de remover', async ({ listPage }) => {
    await listPage.goto();

    await listPage.selecionar('ABC1D23');
    await listPage.selecionar('CDE3F45');
    await expect(listPage.selecionados).toContainText('2 veículos selecionados');

    await listPage.deletarSelecionados.click();

    // Deve surgir um diálogo de confirmação (como na exclusão individual)
    // ANTES de qualquer remoção / toast de sucesso.
    await expect(listPage.page.getByRole('alertdialog')).toBeVisible();
    await expect(listPage.toast).not.toContainText(/deletad/i);
  });

  /**
   * Bug 5 (Alto/P2) — Edição em massa confirma sucesso, mas atualiza apenas
   * o primeiro registro.
   * Esperado: alterar status de 2 veículos em "Manutenção" para "Ativo"
   * atualiza ambos.
   * Observado: toast diz "2 veículos atualizados", mas só BRA2E34 (primeiro
   * da seleção) vira "Ativo"; HIJ8K90 permanece em "Manutenção".
   */
  test('Bug 5: edição em massa deve atualizar TODOS os selecionados', async ({ listPage }) => {
    await listPage.goto();

    // Ambos estão em "Manutenção" no estado inicial.
    expect(await listPage.statusDe('BRA2E34')).toBe('Manutenção');
    expect(await listPage.statusDe('HIJ8K90')).toBe('Manutenção');

    await listPage.selecionar('BRA2E34');
    await listPage.selecionar('HIJ8K90');
    await expect(listPage.selecionados).toContainText('2 veículos selecionados');

    await listPage.editarEmMassaStatus('Ativo');

    await expect(listPage.toast).toContainText('2 veículos atualizados com sucesso');

    // Os DOIS veículos selecionados devem passar a "Ativo".
    expect(await listPage.statusDe('BRA2E34')).toBe('Ativo');
    expect(await listPage.statusDe('HIJ8K90')).toBe('Ativo');
  });

  /**
   * Bug 11 (Alto/P2) — Sistema permite "Próxima Manutenção" anterior à
   * "Última Manutenção".
   * Esperado: o cadastro com Próxima (09/06/2026) anterior à Última
   * (17/06/2026) é bloqueado com validação; o veículo NÃO é salvo.
   * Observado: o sistema aceita, salva e volta para a listagem com toast
   * "Veículo cadastrado com sucesso.".
   */
  test('Bug 11: não deve salvar com Próxima Manutenção anterior à Última', async ({ page, listPage, formPage }) => {
    const veiculoDatasInvalidas: VeiculoData = {
      placa: 'QA1111T',
      marca: 'Fiat',
      modelo: 'Uno',
      ano: 2020,
      tipo: 'Carro',
      status: 'Ativo',
      kmAtual: 100,
      motorista: 'Jéssica QA',
      ultima: '2026-06-17',  // Última Manutenção
      proxima: '2026-06-09', // Próxima ANTERIOR à Última -> inválido
    };

    await listPage.goto();
    await listPage.abrirNovo();
    await formPage.fill(veiculoDatasInvalidas);
    await formPage.salvarForm();

    // O cadastro deve ser bloqueado: permanece em /novo e NÃO há toast de sucesso.
    await expect(page).toHaveURL(/\/novo$/);
    await expect(listPage.toast).not.toContainText(/cadastrado com sucesso/i);
  });
});