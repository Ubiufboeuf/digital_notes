
export default function Temas() {
  console.log("tailwindConfig: ", tailwindConfig.daisyui.themes)
  function handleClick(e) {
    document.body.setAttribute("data-theme", e.target.value)
  }

  return (
    <>
      <li>
        <input
          onClick={handleClick}
          type="radio"
          name="theme-dropdown"
          className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Predeterminado"
          value="default" />
      </li>
    </>
  )
}