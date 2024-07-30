import { ListaInglés }from "@/lib/ListaInglés"
import { ListaRedes } from "@lib/ListaRedes"

export function SubMaterias({ materia }) {
  const listaMaterias = {
    "Inglés": {
      "title": "Inglés",
      "lib": ListaInglés,
    },
    "Física": {
      "title": "Física",
      "lib": ListaRedes,
    },
    "Electrónica": {
      "title": "Electrónica",
      "lib": ListaRedes,
    },
    "Diseño Web": {
      "title": "Diseño Web",
      "lib": ListaRedes,
    },
    "Geometría": {
      "title": "Geometría",
      "lib": ListaRedes,
    },
    "Programación": {
      "title": "Programación",
      "lib": ListaRedes,
    },
    "Matemáticas": {
      "title": "Matemáticas",
      "lib": ListaRedes,
    },
    "Lab Redes": {
      "title": "Lab Redes",
      "lib": ListaRedes,
    },
    "Economía": {
      "title": "Economía",
      "lib": ListaRedes,
    },
    "APT": {
      "title": "APT",
      "lib": ListaRedes,
    },
    "SO": {
      "title": "SO",
      "lib": ListaRedes,
    },
    "BD": {
      "title": "BD",
      "lib": ListaRedes,
    },
  }

  // console.log(listaMaterias[materia])

  let lib = listaMaterias[materia.title].lib
  return lib.map((item, idx) => {
    // console.log("materia", materia.title, "item", item)
    return (
      <li><a href={`${materia.link}${item.link}`}>{item.date}</a></li>
    )
  })
  return (
    <li><p>{lib[0].date}</p></li>
  )
}