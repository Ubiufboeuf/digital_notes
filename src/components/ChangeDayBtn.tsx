import { dateConstructor } from "@/services/dateConstructor"
import { linkConstructor } from "@/services/linkConstructor";

export default function ChangeDayBtn({ visible, type, title, materiaLinkName }: { visible: boolean, type: string, title: ClassDate, materiaLinkName: MateriaLinkName }) {
  if (type !== 'prev' && type !== 'next') return;
  const isPrev = (type === "prev") ? true : false
  
  const link: Link = linkConstructor({date: title, materiaLinkName: materiaLinkName})
  return (
    <a href={link && link.toString()} className={`${(visible) ? "border-[4px] border-secondary rounded-xl hover:bg-secondary transition-colors" : ""} cursor-pointer flex flex-col items-center justify-center h-20 w-[45%] min-w-48 max-w-96`}>
      <header className={`${(visible) ? "" : "hidden"} flex items-center justify-center gap-4`}>
        <p className={`text-[14px] ${(isPrev) ? "" : "hidden"}`}>&lt;--</p>
        {(isPrev) ? 'anterior' : 'siguiente'}
        <p className={`text-[14px] ${(!isPrev) ? "" : "hidden"}`}>--&gt;</p>
      </header>
      <p className={`${(visible) ? "" : "hidden"} text-[17px]`}><strong>{dateConstructor(title)}</strong></p>
    </a>
  )
}