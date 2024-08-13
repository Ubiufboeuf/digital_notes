export function FinalCrumb({ longDate, link }) {
  if (!longDate) return

  return (
    <li><a href={`${link}`}>{longDate}</a></li>
  )
}