export default function AsideMateriaSummary({ nm_primaryName }) {
  const ruta = document.location.pathname
  return (
    <summary
      className={`${(1) ? "" : ""}`}
    >
      {nm_primaryName}
    </summary>
  )
}