import { nombresMaterias } from "@/lib/nombresMaterias"
import ClasesMaterias from "./ClasesMaterias"
import { listaMaterias } from "@/lib/listaDeListas"

function MateriaAside({ materia }) {  
  const { nm_primaryName, nm_linkName } = nombresMaterias(materia.title)
  const lista = listaMaterias[nm_linkName]

  return (
    <>
      <li>
        <details name="materiaAside">
          <summary>{nm_primaryName}</summary>
          <ul>
            <li><a href={`/${nm_linkName}`}>Inicio</a></li>
            <ClasesMaterias lista={lista} materiaName={nm_linkName} short={true} />
          </ul>
        </details>
      </li>
    </>
  )
}

export default MateriaAside