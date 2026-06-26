# Bugs encontrados — Gestão de Frota (QA)

App alvo: https://gestao-frota-teste-qa.lovable.app
Ambiente: demo sem backend (F5 reseta para o estado inicial de 35 veículos).
Data da análise: 2026-06-25

---

## BUG #1 — Contador "Total" não decrementa após exclusão

- **Severidade:** Média
- **Onde:** Listagem (`/`), cabeçalho "Total: N veículos".
- **Passos para reproduzir:**
  1. Abrir a listagem (Total: 35 veículos).
  2. Clicar em "Deletar" na linha de um veículo (ex.: ABC1D23).
  3. Confirmar a exclusão no diálogo.
- **Resultado esperado:** A linha é removida **e** o contador passa a "Total: 34 veículos".
- **Resultado atual:** A linha é removida e o toast "deletado com sucesso" aparece,
  porém o contador **permanece "Total: 35 veículos"**.
- **Evidência automatizada:** o teste `DELETE: exclui um veículo após confirmar`
  (em `tests/crud.spec.ts`) **falha** exatamente na asserção do total
  (`expect(total).toBe(antes - 1)`).
- **Observação:** no fluxo de **cadastro** o contador incrementa corretamente
  (35 → 36), então a inconsistência é específica da exclusão.

---

## BUG #2 — Campo "Modelo" não é salvo na edição

- **Severidade:** Alta
- **Onde:** Formulário de edição (`/editar/:id`), campo "Modelo".
- **Passos para reproduzir:**
  1. Abrir a edição de um veículo (ex.: ABC1D23 — Honda Civic).
  2. Alterar o campo "Modelo" (ex.: de `Civic` para `Civic Si`).
  3. Clicar em "Salvar".
- **Resultado esperado:** O modelo é atualizado e a página de detalhes mostra `Civic Si`.
- **Resultado atual:** Toast "atualizado com sucesso" aparece, mas o modelo
  **permanece `Civic`** (a alteração é descartada).
- **Escopo confirmado:** os demais campos do mesmo formulário **salvam normalmente**
  (Marca, Motorista, Placa, Status, KM Atual, Ano). O defeito é **específico do
  campo Modelo**.
- **Evidência automatizada:** o teste `UPDATE: edita um veículo existente`
  (em `tests/crud.spec.ts`) **falha** na asserção do modelo (`Civic Si`),
  enquanto Status e KM passam.

---

## Notas de comportamento (não são bugs, mas exigem atenção na automação)

- **Hidratação:** o formulário (`/novo`, `/editar/:id`) e a tabela só respondem a
  interações após a hidratação do React. Preencher/clicar cedo demais faz os
  primeiros valores se perderem ou o clique não disparar. Os Page Objects aguardam
  esse estado antes de interagir.
- **Máscara da Placa:** o campo "Placa" limita a **7 caracteres** (padrão Mercosul).
  Valores maiores são truncados silenciosamente (`QA1234T1` → `QA1234T`).
- **Navegação pós-ação:**
  - Cadastrar (`Salvar` em `/novo`) → volta para a listagem `/`.
  - Editar (`Salvar` em `/editar/:id`) → vai para a página de detalhes `/veiculo/:id`.
