import { useEffect } from "react"

export default function ThemeList({ tema }) {
  const nombreTema = tema.value[0].toUpperCase() + tema.value.substr(1, tema.value.length)
  const { value } = tema
  function changeTheme(e) {
    const { value } = e.target
    window.localStorage.setItem("theme", value)
    console.log("theme value: ", value)
    const tempTema = window.localStorage.getItem("theme")
    console.log("tema: ", tema)
    console.log("tempTema: ", tempTema)
    document.body.setAttribute("data-theme", tema.value)
  }

  return (
    <input
      onClick={changeTheme}
      type="radio"
      name="theme-dropdown"
      className="theme-controller btn btn-sm btn-block btn-ghost justify-center"
      aria-label={(value === "luxury") ? `${nombreTema} (Predeterminado)` : nombreTema}
      value={value}
      defaultChecked={(value === "luxury") ? true : false}
    />
  )
}