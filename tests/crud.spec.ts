import { test, expect } from './fixtures';
import { VeiculoData } from '../pages/FormPage';

/**
 * Testes CRUD da demo "Gestão de Frota".
 * App SEM backend: cada teste começa de um page.goto('/') que reseta ao estado
 * inicial (35 veículos), então os testes são independentes entre si.
 */

// Gera uma placa única de 7 caracteres (o input tem máscara de 7 chars).
function placaUnica(): string {
  const n = Math.floor(Math.random() * 9000) + 1000; // 4 dígitos
  return `QA${n}T`; // ex: QA1234T (7 chars)
}

const novoVeiculo: VeiculoData = {
  placa: '',
  marca: 'Tesla',
  modelo: 'Model 3',
  ano: 2024,
  tipo: 'Carro',
  status: 'Ativo',
  kmAtual: 1500,
  motorista: 'Jéssica QA',
  ultima: '2025-01-10',
  proxima: '2025-07-10',
};

test.describe('CRUD - Gestão de Frota', () => {

  // ---------- READ ----------
  test('READ: listagem carrega com 35 veículos e paginação', async ({ listPage }) => {
    await listPage.goto();
    expect(await listPage.totalCount()).toBe(35);
    await expect(listPage.mostrando).toContainText('Mostrando 1');
    await expect(listPage.rows).toHaveCount(10); // página exibe 10 por vez
  });

  test('READ: busca filtra por placa', async ({ listPage }) => {
    await listPage.goto();
    await listPage.buscar('ABC1D23');
    await expect(listPage.rows).toHaveCount(1);
    await expect(listPage.row('ABC1D23')).toBeVisible();
  });

  test('READ: ver detalhes abre a página do veículo', async ({ listPage, detailsPage }) => {
    await listPage.goto();
    await listPage.verDetalhes('ABC1D23');
    await detailsPage.expectTitulo('Honda Civic');
    await detailsPage.expectField('ABC1D23');
    await detailsPage.expectField('Carlos Andrade');
  });

  // ---------- CREATE ----------
  test('CREATE: cadastra um novo veículo', async ({ page, listPage, formPage }) => {
    const placa = placaUnica();
    await listPage.goto();
    const totalAntes = await listPage.totalCount();

    await listPage.abrirNovo();
    await formPage.fill({ ...novoVeiculo, placa });
    await formPage.salvarForm();

    // Toast de sucesso e volta para a listagem
    await expect(listPage.toast).toContainText(/cadastrado com sucesso/i);
    await expect(page).toHaveURL(/lovable\.app\/$/);
    await expect(listPage.table).toBeVisible();
    expect(await listPage.totalCount()).toBe(totalAntes + 1);

    // O novo veículo é encontrável pela busca
    await listPage.buscar(placa);
    await expect(listPage.row(placa)).toBeVisible();
    await expect(listPage.row(placa)).toContainText('Tesla');
    await expect(listPage.row(placa)).toContainText('Model 3');
  });

  test('CREATE: cancelar não cadastra', async ({ listPage, formPage }) => {
    await listPage.goto();
    const totalAntes = await listPage.totalCount();
    await listPage.abrirNovo();
    await formPage.fill({ placa: 'ZZZ9Z99', marca: 'Fiat', modelo: 'Uno' });
    await formPage.cancelarForm();
    await expect(listPage.table).toBeVisible();
    expect(await listPage.totalCount()).toBe(totalAntes);
  });

  // ---------- UPDATE ----------
  // OBS: valida o comportamento CORRETO. Atualmente FALHA porque o campo "Modelo"
  // não é persistido na edição (ver BUGS.md). Status e KM são salvos normalmente.
  test('UPDATE: edita um veículo existente', async ({ page, listPage, formPage, detailsPage }) => {
    await listPage.goto();
    await listPage.editar('ABC1D23');

    // garante que o form já foi pré-preenchido antes de alterar
    await expect(formPage.placa).toHaveValue('ABC1D23');
    await formPage.fill({ modelo: 'Civic Si', kmAtual: 99999, status: 'Manutenção' });
    await formPage.salvarForm();

    // Editar leva para a página de detalhes do veículo
    await expect(listPage.toast).toContainText(/atualizado com sucesso/i);
    await expect(page).toHaveURL(/\/veiculo\//);

    // Todas as alterações devem persistir
    await detailsPage.expectField('Manutenção');
    await detailsPage.expectField('99.999 km');
    await detailsPage.expectField('Civic Si');
  });

  // ---------- DELETE ----------
  // OBS: este teste valida o comportamento CORRETO. Atualmente ele FALHA porque
  // o sistema não decrementa o contador "Total" após a exclusão (ver BUGS.md).
  test('DELETE: exclui um veículo após confirmar', async ({ listPage }) => {
    await listPage.goto();
    await expect(listPage.row('ABC1D23')).toBeVisible();
    const totalAntes = await listPage.totalCount();

    await listPage.deletar('ABC1D23');

    // O veículo é removido da listagem e o total é atualizado
    await expect(listPage.toast).toContainText(/deletado com sucesso/i);
    expect(await listPage.totalCount()).toBe(totalAntes - 1);
    await listPage.buscar('ABC1D23');
    await expect(listPage.rows).toHaveCount(0);
  });

  test('DELETE: cancelar mantém o veículo', async ({ listPage }) => {
    await listPage.goto();
    const totalAntes = await listPage.totalCount();

    await listPage.cancelarExclusao('ABC1D23');

    expect(await listPage.totalCount()).toBe(totalAntes);
    await expect(listPage.row('ABC1D23')).toBeVisible();
  });
});
