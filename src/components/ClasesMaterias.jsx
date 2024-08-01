import mes from "@/lib/mes"

function ClasesMaterias({ lista, listaName }) {
  return lista.map((item) => {
    console.log(item.fecha)
    return (
      <li id="dia" className="w-full"><a href={`/${listaName}/${item.link}`} className="h-full w-full max-w-[700px] mx-auto flex items-center text-info link underline-offset-4">Clase {item.fecha.dia}/{item.fecha.mes} - {item.fecha.dia} de {mes[item.fecha.mes - 1]} de {item.fecha.año}</a></li>
    )
  })
}

export default ClasesMaterias