export default function ordenador({ lista, tipo }) {
  const mapped = [...lista].map((el, i) => {
    if (tipo === "materias") {
      return { idx: i, value: el.title.toLowerCase() }
    } else if (tipo === "reciente") {
      return { idx: i, value: { id: el.id, fecha: el?.fecha } }
    }
    return { idx: i, value: el }
  })

  mapped.sort((a, b) => {
    if (a.value > b.value) return 1
    if (a.value < b.value) return -1
    return 0
  })

  const result = mapped.map((el) => {
    // console.log("ordenador: ", el)
    return { idx: el.idx, value: el.value }
  })

  return result
}

/* 
const mappedMaterias = listaMateriasAside.map((el, i) => {
  return { index: i, value: el.title.toLowerCase() }
});

mappedMaterias.sort((a, b) => {
  if (a.value > b.value) return 1
  if (a.value < b.value) return -1
  return 0
});

const materiasOrdenadas = mappedMaterias.map((el) => el.index);
 */