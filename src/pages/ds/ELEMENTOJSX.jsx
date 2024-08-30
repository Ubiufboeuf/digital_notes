import { principalDir, $fs as fs, $os as os } from "@/pages/node.mjs"

export default function ELEMENTOJSX () {
  const dri = fs.readdirSync(`${os.homedir()}/`,)

  return dri.map((item) => {
    return (
      <li>{item}</li> 
    )
  })
}