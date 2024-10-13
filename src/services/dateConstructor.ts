export function dateConstructor(date: date) {
  if (!date) return;
  const { dia, mes, año } = date
  return `Clase ${dia}/${mes}/${año}`
}