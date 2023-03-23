import { ePriority } from "../../business/base/priority"
import { eStatus } from "../../business/base/status"

// export type Color = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default'

export function getColorStatus(id: number): string {
  let color: string

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

  return color + ".light"
}

export function getColorPriority(id: number): string {
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

  return color + ".light"
}
