/// <reference types="astro/client" />

type ClassDate = {
  dia: number,
  mes: number,
  año: number
}

type MateriaLinkName = "ing" | "fis" | "elec" | "ds" | "geo" | "prog" | "mat" | "lr" | "eco" | "apt" | "so" | "bd"

type Link = `/${MateriaLinkName}/` | `/${MateriaLinkName}/${MateriaLinkName}_day${number}_${number}_${number}`