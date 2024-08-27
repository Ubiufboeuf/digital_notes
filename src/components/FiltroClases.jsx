import ClasesMaterias from "@components/ClasesMaterias";
import FechaAños from "@/lib/FechaAños";
import { listaMaterias } from "@/lib/listaDeListas";
import { useEffect, useState } from "react";

export default function FiltroClases({ linkName }) {
  const [FullList] = useState(listaMaterias[linkName])
  const [DynamicList, setDynamicList] = useState(FullList)

  useEffect(() => {
    // console.log(DynamicList)
    // console.log(FullList)
    if (FullList.length === 0) {
      setDynamicList()
    }
  }, [FullList])

  function filtredListiltrada(list, value) {
    const filtredList = list.map((item) => {
      let año
      año = (item && item.año) ? item.año : null
      año = (año && typeof año === "number") ? año.toString() : null
      return (value === "all" || value === año) ? item : null
    })

    const finalList = []

    for (const elemento of filtredList) {
      if (elemento !== null) {
        finalList.push(elemento)
      }
    }
    return (finalList.length === 0) ? null : finalList
  }

  function handleChange(e) {
    const value = e.target.value
    // console.log("localList: ", FullList)
    // console.log("value change: ", value)
    const newList = filtredListiltrada(FullList, value)
    setDynamicList(newList)
  }

  return (
    <>
      <div className="w-full flex justify-center items-center gap-3">
        <select
          onChange={handleChange}
          id="filtro"
          className="select select-bordered select-sm w-full max-w-xs"
        >
          <option disabled>Filtrar materias por:</option>
          {
            FechaAños.map((fecha, idx) => {
              return (
                <option
                  key={idx}
                  value={fecha.value}
                >
                  {fecha.title}
                </option>
              );
            })
          }
        </select>
      </div>
      <ul className="w-full">
        <ClasesMaterias lista={DynamicList} materiaName={linkName} isLong={true} />
      </ul>
    </>
  )
}