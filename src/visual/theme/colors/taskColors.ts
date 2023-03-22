import { ePriority } from "../../../business/base/priority"
import { eStatus } from "../../../business/base/status"

export function getColorStatus(id: eStatus): string {
  switch (id) {
    case eStatus.todo:
      return "error"

    case eStatus.doing:
      return "warning"

    case eStatus.done:
      return "success"
  }
}

export function getColorPriority(id: ePriority): string {
    switch (id) {
      case ePriority.high:
        return "warning"
  
      case ePriority.normal:
        return "info"

    }
  }