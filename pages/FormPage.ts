import { Page, Locator, expect } from '@playwright/test';

export type VeiculoType = 'Carro' | 'Caminhão' | 'Van' | 'Moto';
export type VeiculoStatus = 'Ativo' | 'Manutenção' | 'Inativo';

export interface VeiculoData {
  placa?: string;
  marca?: string;
  modelo?: string;
  ano?: string | number;
  tipo?: VeiculoType;
  status?: VeiculoStatus;
  kmAtual?: string | number;
  motorista?: string;
  ultima?: string;  // yyyy-mm-dd
  proxima?: string; // yyyy-mm-dd
}

/**
 * Formulário de veículo — compartilhado pelas rotas /novo e /editar/:id.
 * Campos são <input> com id real; Tipo/Status são combobox (Radix Select).
 */
export class FormPage {
  readonly page: Page;
  readonly placa: Locator;
  readonly marca: Locator;
  readonly modelo: Locator;
  readonly ano: Locator;
  readonly kmAtual: Locator;
  readonly motorista: Locator;
  readonly ultima: Locator;
  readonly proxima: Locator;
  readonly tipo: Locator;
  readonly status: Locator;
  readonly salvar: Locator;
  readonly cancelar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placa = page.locator('#placa');
    this.marca = page.locator('#marca');
    this.modelo = page.locator('#modelo');
    this.ano = page.locator('#ano');
    this.kmAtual = page.locator('#kmAtual');
    this.motorista = page.locator('#motorista');
    this.ultima = page.locator('#ultima');
    this.proxima = page.locator('#proxima');
    // Os dois combobox aparecem na ordem Tipo, Status.
    this.tipo = page.getByRole('combobox').nth(0);
    this.status = page.getByRole('combobox').nth(1);
    this.salvar = page.getByRole('button', { name: /salvar/i });
    this.cancelar = page.getByRole('button', { name: /cancelar/i });
  }

  /** Aguarda a hidratação do React antes de preencher (senão os primeiros fills se perdem). */
  private async waitReady() {
    await expect(this.tipo).toBeVisible();
    await this.page.waitForTimeout(500);
  }

  async gotoNovo() {
    await this.page.goto('/novo');
    await expect(this.page.getByRole('heading', { name: 'Novo veículo' })).toBeVisible();
    await this.waitReady();
  }

  async gotoEditar(id: string) {
    await this.page.goto(`/editar/${id}`);
    await expect(this.page.getByRole('heading', { name: 'Editar veículo' })).toBeVisible();
    await this.waitReady();
  }

  private async selectCombo(combo: Locator, value: string) {
    await combo.click();
    await this.page.getByRole('option', { name: value, exact: true }).click();
  }

  /** Preenche apenas os campos informados (útil tanto p/ criar quanto editar). */
  async fill(data: VeiculoData) {
    if (data.placa !== undefined) await this.placa.fill(data.placa);
    if (data.marca !== undefined) await this.marca.fill(data.marca);
    if (data.modelo !== undefined) await this.modelo.fill(data.modelo);
    if (data.ano !== undefined) await this.ano.fill(String(data.ano));
    if (data.kmAtual !== undefined) await this.kmAtual.fill(String(data.kmAtual));
    if (data.motorista !== undefined) await this.motorista.fill(data.motorista);
    if (data.ultima !== undefined) await this.ultima.fill(data.ultima);
    if (data.proxima !== undefined) await this.proxima.fill(data.proxima);
    if (data.tipo !== undefined) await this.selectCombo(this.tipo, data.tipo);
    if (data.status !== undefined) await this.selectCombo(this.status, data.status);
  }

  /**
   * Geometria do ícone de calendário de um campo <input type="date">.
   * O ícone é o pseudo-elemento ::-webkit-calendar-picker-indicator (não é um
   * elemento do DOM), então medimos sua largura computada e a largura do campo.
   * Só faz sentido em Chromium/WebKit (Firefox não expõe esse pseudo-elemento).
   * Esperado: indicador estreito (~16px) ancorado à direita.
   * Bug 8: o indicador vem com width = largura total do campo, jogando o ícone
   * para o meio (logo após "dd/mm/aaaa").
   */
  async calendarIndicator(field: 'ultima' | 'proxima') {
    const input = field === 'ultima' ? this.ultima : this.proxima;
    await expect(input).toBeVisible();
    return input.evaluate((el) => {
      const fieldWidth = el.getBoundingClientRect().width;
      const ind = getComputedStyle(el, '::-webkit-calendar-picker-indicator');
      return { fieldWidth, indicatorWidth: parseFloat(ind.width) || 0 };
    });
  }

  async salvarForm() {
    await this.salvar.click();
  }

  async cancelarForm() {
    await this.cancelar.click();
  }
}
