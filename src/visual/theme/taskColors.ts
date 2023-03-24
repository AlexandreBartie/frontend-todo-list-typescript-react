import { ePriority } from "../../business/base/priority"
import { eStatus } from "../../business/base/status"

export type ColorBase = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'

export type ColorTone = 'light' | 'dark'

export function getBaseColorStatus(id: number): ColorBase {
  let color: ColorBase

  switch (id) {
    case eStatus.todo:
      color = "error"
      break

    case eStatus.doing:
      color = "warning"
      break

    case eStatus.done:
      color = "success"
      break

    default:
      return "default"
  }

  return color
}

export function getColorStatus(id: number, tone: ColorTone): string {
  const base = getBaseColorStatus(id)
  return `${base}.${tone}`
}

export function getColorPriority(id: number, tone: ColorTone): string {
  let color: string

  switch (id) {
    case ePriority.high:
      color = "warning"
      break

    case ePriority.normal:
      color = "info"
      break

    default:
      return "default"
  }

  return `${color}.${tone}`
}
