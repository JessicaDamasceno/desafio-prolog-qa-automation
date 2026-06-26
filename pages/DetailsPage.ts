import { Page, Locator, expect } from '@playwright/test';

/** Página de detalhes do veículo (rota `/veiculo/:id`). */
export class DetailsPage {
  readonly page: Page;
  readonly voltar: Locator;
  readonly editar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.voltar = page.getByRole('button', { name: 'Voltar' });
    this.editar = page.getByRole('button', { name: 'Editar' });
  }

  /** Verifica se um valor aparece na página de detalhes. */
  async expectField(value: string) {
    await expect(this.page.getByText(value, { exact: true }).first()).toBeVisible();
  }

  async expectTitulo(nome: string) {
    await expect(this.page.getByRole('heading', { name: nome })).toBeVisible();
  }
}
