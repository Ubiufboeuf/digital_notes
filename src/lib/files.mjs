import { writeFileSync, readdirSync, readFileSync } from "node:fs"

export const $writeFileSync = ({ file, data }) => {
  return writeFileSync(file, data)
}

export const $readdir = (dir) => {
  return readdirSync(dir, (err, data) => {
    return data
  })
}

export const $readFileSync = ({ file }) => {
  return readFileSync(file, "utf8", (err, data) => {
    return data
  })
}