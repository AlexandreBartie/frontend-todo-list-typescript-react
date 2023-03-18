import { TaskManager } from "../../../../business/core/manager"

export class TaskArea {
  readonly manager: TaskManager

  constructor(manager: TaskManager) {
    this.manager = manager
  }
}
