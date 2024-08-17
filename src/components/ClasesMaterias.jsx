import { mes as nombreMes } from "@/lib/mes"

function ClasesMaterias({ lista, materiaName, isLong = false }) {
  let resultado
  try {
    resultado = lista.map((item, idx) => {
      const {dia, mes, año} = item
      const classLink = `${materiaName}_day${dia}_${mes}_${año}`
      const nombreClase = (isLong) ? `Clase ${dia}/${mes}/${año} - ${dia} de ${nombreMes[mes - 1]} de ${año}` : `Clase ${dia}/${mes}/${año}`
      if (isLong) {
        return <li key={idx} id="dia" className="w-full"><a href={`/${materiaName}/${classLink}`} className="h-full w-full max-w-[700px] mx-auto flex items-center text-info link underline-offset-4">{nombreClase}</a></li>
      } else if (!isLong) {
        return <li key={idx}><a href={`/${materiaName}/${classLink}`}>{nombreClase}</a></li>
      }
      return <li key={idx}>No entró en la comparación</li>
    })
  } catch(e) {}

  return (
    resultado ||
    <p className="text-lg text-error w-full flex justify-center">No se pudieron cargar los elementos de la lista</p>
  )
}

export default ClasesMaterias