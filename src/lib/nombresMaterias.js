export function nombresMaterias(materiaShortName) {
  // El nombre de "arreglo" no es por array,
  // es para arreglar el nombre y que coincida
  // con el nombre de la propiedad
  const arregloDeNombres = {
    "apt": "apt",
    "bd": "bd",
    "ds": "ds",
    "eco": "eco",
    "elec": "elec",
    "fis": "fis",
    "geo": "geo",
    "ing": "ing",
    "lr": "lr",
    "redes": "lr",
    "lab_redes": "lr",
    "mat": "mat",
    "prog": "prog",
    "so": "so",
  }

  const nombresMaterias = {
    "apt": {
      nm_primaryName: "APT",
      nm_shortName: "APT",
      nm_longName: "Análisis y Producción de Textos",
      nm_linkName: "apt",
    },
    "bd": {
      nm_primaryName: "BD",
      nm_shortName: "BD",
      nm_longName: "Bases de Datos",
      nm_linkName: "bd",
    },
    "ds": {
      nm_primaryName: "Diseño Web",
      nm_shortName: "DS",
      nm_longName: "Diseño Web",
      nm_linkName: "ds",
    },
    "eco": {
      nm_primaryName: "Economía",
      nm_shortName: "Eco",
      nm_longName: "Economía",
      nm_linkName: "eco",
    },
    "elec": {
      nm_primaryName: "Electrónica",
      nm_shortName: "Elec",
      nm_longName: "Electrónica",
      nm_linkName: "elec",
    },
    "fis": {
      nm_primaryName: "Física",
      nm_shortName: "Fis",
      nm_longName: "Física",
      nm_linkName: "fis",
    },
    "geo": {
      nm_primaryName: "Geometría",
      nm_shortName: "Geo",
      nm_longName: "Geometría",
      nm_linkName: "geo",
    },
    "ing": {
      nm_primaryName: "Inglés",
      nm_shortName: "Ing",
      nm_longName: "Inglés",
      nm_linkName: "ing",
    },
    "lr": {
      nm_primaryName: "Lab Redes",
      nm_shortName: "LR",
      nm_longName: "Laboratorio de Redes de Área Local",
      nm_linkName: "lr"
    },
    "mat": {
      nm_primaryName: "Matemáticas",
      nm_shortName: "Mat",
      nm_longName: "Matemáticas",
      nm_linkName: "mat",
    },
    "prog": {
      nm_primaryName: "Programación",
      nm_shortName: "Prog",
      nm_longName: "Programación",
      nm_linkName: "prog",
    },
    "so": {
      nm_primaryName: "Sistemas Operativos",
      nm_shortName: "SO",
      nm_longName: "Sistemas Operativos",
      nm_linkName: "so",
    },
  }

  const nuevoNombre = arregloDeNombres[materiaShortName]
  
  return nombresMaterias[nuevoNombre]
}