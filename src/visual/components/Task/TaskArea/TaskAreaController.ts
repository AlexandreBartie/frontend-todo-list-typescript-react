import { TaskManager } from "../../../../business/core/manager"

export class TaskArea {
  readonly manager: TaskManager

  get countTodo(): number {
    return 10
  }
  get countDoing(): number {
    return 2
  }
  get countDone(): number {
    return 7
  }

  constructor(manager: TaskManager) {
    this.manager = manager
  }
}
