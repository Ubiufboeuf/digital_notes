import { nombresMaterias } from "@/lib/nombresMaterias"
import ClasesMaterias from "./ClasesMaterias"
import { listaMaterias } from "@/lib/listaDeListas"
import AsideMateriaSummary from "./AsideMateriaSummary"
 
function MateriaAside({ materia }) {  
  // console.log("materia: ", materia)
  const { nm_primaryName, nm_linkName } = nombresMaterias(materia.title)
  const lista = listaMaterias[nm_linkName]

  return (
    <>
      <li>
        <details name="materiaAside">
          {/* <AsideMateriaSummary */}
          <summary
            key={nm_primaryName}>
            {nm_primaryName}
          </summary>
          {/* </AsideMateriaSummary> */}
          <ul className="nolistp">
            <li><a href={`/${nm_linkName}`}>Inicio</a></li>
            <ClasesMaterias lista={lista} materiaName={nm_linkName} />
          </ul>
        </details>
      </li>
    </>
  )
}

export default MateriaAside