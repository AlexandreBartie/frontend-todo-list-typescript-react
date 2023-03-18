import { TaskManager } from "../../../../business/core/manager"
import { Task } from "../../../../business/core/task"

export enum actionTaskForm {
  view = "view",
  edit = "edit",
}

export class TaskForm {
  readonly manager: TaskManager

  readonly action = actionTaskForm.edit

  public task = new Task()

  get disabled(): boolean {
    return this.action !== actionTaskForm.edit
  }

  setTask(task: Task) {
    this.task = task
  }

  constructor(manager: TaskManager) {
    this.manager = manager
  }
}
