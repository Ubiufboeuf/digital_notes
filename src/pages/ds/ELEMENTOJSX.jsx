import { $process as process, $fs as fs, $os as os } from "@/pages/node.mjs"

export default function ELEMENTOJSX () {
  const newOS = Object.fromEntries(Object.entries(os))
  return (
    <>
      <ul>
        <li>os.type(): {newOS.type()}</li>
        <li>os.arch(): {newOS.arch()}</li>
        <li>os.uptime(): {newOS.uptime()}</li>
        <li>os.machine(): {newOS.machine()}</li>
        <li>os.userInfo(): {}</li>
        <li>process.env.LANG: {process.env.LANG}</li>
        <li>
          <p>os.userInfo():</p>
          <ul>
            {
              Object.entries(os.userInfo()).map(([k, v]) => {
                return (
                  <li>{k}: {v}</li>
                )
              })
            }
          </ul>
        </li>
        <li>os.version(): {os.version()}</li>
        <li>os.release(): {os.release()}</li>
      </ul>
    </>
  )
}