import { mes } from "@/lib/mes"

function ClasesMaterias({ lista, materiaName, short = false }) {
  return lista.map((item) => {
    const classLink = `${materiaName}_day${item.dia}_${item.mes}`
    const nombreClase = (short) ? `Clase ${item.dia}/${item.mes}` : `Clase ${item.dia}/${item.mes} - ${item.dia} de ${mes[item.mes - 1]} de ${item.año}`
    if (short) {
      return <li><a href={`/${materiaName}/${classLink}`}>{nombreClase}</a></li>
    } else {
      return <li id="dia" className="w-full"><a href={`/${materiaName}/${classLink}`} className="h-full w-full max-w-[700px] mx-auto flex items-center text-info link underline-offset-4">{nombreClase}</a></li>
    }
  })
}

export default ClasesMaterias