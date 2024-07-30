import { SubMaterias } from "./SubMaterias"
// Acá debería haber un import
// de todas las listas con las
// clases de las materias

function MateriaAside({ materia }) {  
  return (
    <>
      <li>
        <details name="materiaAside">
          <summary>{materia.title}</summary>
          <ul>
            <li><a href={materia.link}>Inicio</a></li>
            <SubMaterias materia={materia} />
          </ul>
        </details>
      </li>
    </>
  )
}

export default MateriaAside