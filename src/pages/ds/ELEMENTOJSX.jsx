import { principalDir, $fs as fs, $os as os } from "@/pages/node.mjs"

export default function ELEMENTOJSX () {
  const dri = fs.readdirSync(`ftp://192.168.1.4/`,)

  return dri.map((item) => {
    return (
      <li>{item}</li> 
    )
  })
}