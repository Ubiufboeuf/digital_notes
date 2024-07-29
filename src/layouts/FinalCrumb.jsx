export function FinalCrumb({ date, link }) {
  if (date) {
    return (
      <li><a href={link}>{date}</a></li>
    )
  }
}