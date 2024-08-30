import os from "node:os"
import fs from "node:fs"

export const $os = os
export const $fs = fs

export function principalDir() {
  fs.readdir(`${os.homedir()}/`, (err, data) => {
    if (err) throw new err();
    // console.log("data: ", data)
    try {
      const l = [];
      for (const i of data) {
        l.push(i);
      }
      // console.log("l: ", l);
      // console.log(data);
      return l;
    } catch (e) {
      console.error(e);
    }
  })
}
