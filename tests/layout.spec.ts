import { test, expect } from './fixtures';

/**
 * Testes de LAYOUT da tela de Cadastro/Edição de veículo.
 *
 *
 * App SEM backend: parte de page.goto('/novo'), independente dos demais.
 */
test.describe('Layout — Formulário de veículo', () => {

  /**
   * Bug 8 (Baixa/P3) — Ícone do calendário no meio do campo de data.
   *
   * Os campos "Última/Próxima Manutenção" são <input type="date"> nativos; o
   * ícone é o pseudo-elemento ::-webkit-calendar-picker-indicator (Chromium/
   * WebKit — por isso pulamos o Firefox).
   *
   * Esperado: o ícone é um indicador estreito (~16px) ancorado à direita.
   * Observado: o indicador tem a largura TOTAL do campo, jogando o ícone para o
   * meio, logo após o texto "dd/mm/aaaa".
   *
   * Sinal mensurável: largura do indicador deve ser pequena vs. a do campo.
   * No app com bug, indicatorWidth ≈ fieldWidth (≈327px).
   */
  for (const field of ['ultima', 'proxima'] as const) {
    test(`Bug 8: ícone do calendário deve ficar à direita no campo "${field}"`, async ({ formPage, page }, testInfo) => {
      test.skip(
        testInfo.project.name === 'firefox',
        'Firefox não expõe ::-webkit-calendar-picker-indicator',
      );

      await page.goto('/novo');
      const { fieldWidth, indicatorWidth } = await formPage.calendarIndicator(field);

      // O ícone é um indicador compacto, não algo que ocupe o campo inteiro.
      // Margem folgada: até 20% da largura do campo (um ícone real ~16px num
      // campo de ~327px ≈ 5%). No bug, a razão é ~1.0.
      expect(indicatorWidth).toBeGreaterThan(0);
      expect(indicatorWidth).toBeLessThan(fieldWidth * 0.2);
    });
  }
});
