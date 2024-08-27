export default function ThemeList({ tema }) {
  const nombreTema = tema.value[0].toUpperCase() + tema.value.substr(1, tema.value.length)
  function changeTheme(e) {
    const { value } = e.target
    window.localStorage.setItem("theme", value)
    console.log("theme value: ", value)
    const tema = window.localStorage.getItem("theme")
    console.log("tema: ", tema)
    document.body.setAttribute("data-theme", tema)
  }
  return (
    <input
      onClick={changeTheme}
      type="radio"
      name="theme-dropdown"
      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
      aria-label={nombreTema}
      value={tema.value}
      checked={(tema.value === "luxury") ? true : false}
    />
  )
}