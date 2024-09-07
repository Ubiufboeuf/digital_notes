export default function ChangeDayBtn({ visible, type, clase }) {
  const isPrev = (type === "prev") ? true : false
  const iconSrc = (isPrev) ? "prev" : "next"
  return (
    <button className={`${(visible) ? "border-[4px] border-secondary rounded-xl hover:bg-secondary transition-colors" : ""} flex flex-col items-center justify-center h-20 w-[45%] min-w-48`}>
      <header className={`${(visible) ? "" : "hidden"} flex items-center justify-center gap-4`}>
        <p className={`text-[14px] ${(isPrev) ? "" : "hidden"}`}>&lt;--</p>
        {type}
        <p className={`text-[14px] ${(!isPrev) ? "" : "hidden"}`}>--&gt;</p>
      </header>
      <p className={`${(visible) ? "" : "hidden"} text-[17px]`}><strong>{clase}</strong></p>
    </button>
  )
}