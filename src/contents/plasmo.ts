import type { PlasmoCSConfig } from "plasmo"
import loadScript from "~script"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN"
}

loadScript()