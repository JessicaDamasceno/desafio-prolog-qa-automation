import { test, expect } from './fixtures';

/**
 * Regressão VISUAL do campo de data (Bug 8) — abordagem complementar ao
 * layout.spec.ts.
 *
 * IMPORTANTE — semântica diferente dos outros specs:
 * toHaveScreenshot() NÃO sabe o que é "correto". Ele compara o render atual
 * com uma BASELINE (imagem de referência) pixel a pixel.
 *   - 1ª execução: a baseline não existe -> o Playwright a CRIA a partir do
 *     estado atual e marca o teste como falho (para você revisar/commitar a
 *     imagem). A partir daí, passa enquanto o visual não mudar.
 *   - Como a baseline é gerada do estado ATUAL (com o bug), este teste NÃO
 *     serve de evidência do Bug 8 hoje. Ele é um GUARDA: depois que o time
 *     corrigir o ícone, você atualiza a baseline (--update-snapshots) e
 *     qualquer regressão futura (ícone voltando ao meio) passa a falhar sozinha.
 *
 * Só roda em Chromium: pixels de fonte/ícone variam entre engines e SO, então
 * baseline é por (projeto + plataforma). Em CI, fixe o ambiente (Docker) para
 * não ter flaky de antialiasing.
 */
test.describe('Layout (visual) — Campo de data', () => {

  for (const field of ['ultima', 'proxima'] as const) {
    // fixme: a baseline atual contém o Bug 8 (ícone no meio). Mantido pulado
    test.fixme(`Bug 8 (guard visual): aparência do campo "${field}"`, async ({ formPage, page }, testInfo) => {
      test.skip(
        testInfo.project.name !== 'chromium',
        'Baseline visual fixada no Chromium para evitar flaky entre engines',
      );

      await page.goto('/novo');
      const input = field === 'ultima' ? formPage.ultima : formPage.proxima;
      await input.scrollIntoViewIfNeeded();
      await expect(input).toBeVisible();

      // Compara só o campo (não a tela toda) contra a baseline.
      await expect(input).toHaveScreenshot(`campo-data-${field}.png`, {
        animations: 'disabled',
        // tolera variação mínima de antialiasing entre execuções
        maxDiffPixelRatio: 0.01,
      });
    });
  }
});
