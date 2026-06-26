/** Helpers de data para os testes — evitam datas "chumbadas" no código. */

/** Formata uma Date no padrão yyyy-mm-dd esperado pelos <input type="date">. */
export function toInputDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Retorna a data de hoje (+/- offset em dias) já no formato yyyy-mm-dd. */
export function diasAPartirDeHoje(offsetDias = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDias);
  return toInputDate(d);
}
