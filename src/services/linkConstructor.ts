export function linkConstructor({ date, materiaLinkName }: { date: ClassDate, materiaLinkName: MateriaLinkName }): Link {
  if (!date) return;
  const { dia, mes, año } = date
  return `/${materiaLinkName}/${materiaLinkName}_day${dia}_${mes}_${año}`
}