import { Page, Locator, expect } from '@playwright/test';

/**
 * Listagem de veículos (rota `/`) — tabela shadcn/ui + toasts sonner.
 * App sem backend: F5 reseta tudo ao estado inicial (35 veículos).
 */
export class HomePage {
  readonly page: Page;
  readonly table: Locator;
  readonly rows: Locator;
  readonly search: Locator;
  readonly novoVeiculo: Locator;
  readonly total: Locator;
  readonly mostrando: Locator;
  readonly anterior: Locator;
  readonly proxima: Locator;
  readonly filtroStatus: Locator;
  readonly filtroTipo: Locator;
  readonly toast: Locator;
  readonly selecionarTodos: Locator;
  readonly deletarSelecionados: Locator;
  readonly editarEmMassa: Locator;
  readonly selecionados: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table = page.getByRole('table');
    this.rows = page.locator('tbody tr');
    this.search = page.getByPlaceholder('Buscar por placa, marca ou modelo');
    this.novoVeiculo = page.getByRole('button', { name: /novo ve[ií]culo/i });
    this.total = page.getByText(/total:/i);
    this.mostrando = page.getByText(/mostrando/i);
    this.anterior = page.getByRole('button', { name: 'Anterior' });
    this.proxima = page.getByRole('button', { name: 'Próxima' });
    this.filtroStatus = page.getByRole('combobox').nth(0);
    this.filtroTipo = page.getByRole('combobox').nth(1);
    this.toast = page.locator('[data-sonner-toast]');
    // Checkbox no cabeçalho da tabela (selecionar todos da página).
    this.selecionarTodos = page.getByRole('row').first().getByRole('checkbox');
    // Botões de ação em massa: só aparecem após selecionar ao menos 1 linha.
    this.deletarSelecionados = page.getByRole('button', { name: 'Deletar selecionados' });
    this.editarEmMassa = page.getByRole('button', { name: 'Editar em massa' });
    // Texto "N veículos selecionados" (evita casar com o botão "Deletar selecionados").
    this.selecionados = page.getByText(/ve[ií]culos? selecionados?/i);
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.table).toBeVisible();
    await expect(this.rows.first()).toBeVisible();
    // App Vite/React: aguarda a hidratação para os handlers (deletar, etc.) anexarem.
    await this.page.waitForTimeout(500);
  }

  /** Linha (tr) que contém a placa informada. */
  row(placa: string): Locator {
    return this.page.getByRole('row').filter({ hasText: placa });
  }

  async buscar(termo: string) {
    await this.search.fill(termo);
  }

  /** Total de veículos extraído de "Total: N veículos". */
  async totalCount(): Promise<number> {
    const txt = await this.total.innerText();
    return Number(txt.replace(/\D/g, ''));
  }

  async abrirNovo() {
    await this.novoVeiculo.click();
    await expect(this.page).toHaveURL(/\/novo$/);
  }

  async verDetalhes(placa: string) {
    await this.row(placa).getByRole('button', { name: 'Ver detalhes' }).click();
    await expect(this.page).toHaveURL(/\/veiculo\//);
  }

  async editar(placa: string) {
    await this.row(placa).getByRole('button', { name: 'Editar' }).click();
    await expect(this.page).toHaveURL(/\/editar\//);
  }

  /** Abre o dialog de exclusão da linha e confirma. */
  async deletar(placa: string) {
    await this.row(placa).getByRole('button', { name: 'Deletar' }).click();
    const dialog = this.page.getByRole('alertdialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Deletar' }).click();
  }

  /** Abre o dialog de exclusão e cancela. */
  async cancelarExclusao(placa: string) {
    await this.row(placa).getByRole('button', { name: 'Deletar' }).click();
    const dialog = this.page.getByRole('alertdialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Cancelar' }).click();
  }

  async ordenarPor(coluna: 'Placa' | 'Ano' | 'KM Atual') {
    await this.page.getByRole('button', { name: coluna, exact: true }).click();
  }

  // ---------- Seleção / ações em massa ----------

  /** Marca o checkbox da linha de uma placa. */
  async selecionar(placa: string) {
    await this.row(placa).getByRole('checkbox').click();
  }

  /** Status exibido na linha de uma placa (coluna "Status"). */
  async statusDe(placa: string): Promise<string> {
    return (await this.row(placa).locator('td').nth(6).innerText()).trim();
  }

  /** Aplica um valor ao filtro "Status" da listagem. */
  async filtrarStatus(value: 'Todos os status' | 'Ativo' | 'Manutenção' | 'Inativo') {
    await this.filtroStatus.click();
    await this.page.getByRole('option', { name: value, exact: true }).click();
  }

  /**
   * Edição em massa: abre o diálogo "Editar em massa", escolhe o novo status
   * e confirma. Pré-requisito: ter ao menos uma linha selecionada.
   */
  async editarEmMassaStatus(status: 'Ativo' | 'Manutenção' | 'Inativo') {
    await this.editarEmMassa.click();
    const dialog = this.page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('combobox').click();
    await this.page.getByRole('option', { name: status, exact: true }).click();
    await dialog.getByRole('button', { name: 'Confirmar' }).click();
  }
}
