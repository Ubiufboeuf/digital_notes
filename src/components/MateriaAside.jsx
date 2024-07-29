import ListaRedes from "../pages/lab_redes/ListaRedes"
// Acá debería haber un import
// de todas las listas con las
// clases de las materias

function MateriaAside({ item }) {  
  return (
    <>
      <li>
        <details open={false} name="materiaAside">
          <summary>{item.title}</summary>
          <ul>
            <li><a href={item.link}>Inicio</a></li>
            {/* Acá debería haber un
              renderizado concidicional
              para cada materia y sus calses
            */}
            {
              ListaRedes.map((clase, idx) => {
                return (
                  // <li><a href={`${item.link}${clase.link}`}>{clase.name}</a></li>
                  // No tiene sentido hacer lo de
                  // arriba, al menos por ahora
                  <li key={idx}><a href={`${item.link}${clase.link}`}>{`Clase ${clase.fecha.dia}/${clase.fecha.mes}`}</a></li>
                )
              })
            }
          </ul>
        </details>
      </li>
    </>
  )
}

export default MateriaAside