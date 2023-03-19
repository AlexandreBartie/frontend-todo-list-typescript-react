import { AppClient } from "../../../../business/core/app"

import { Priority } from "../../../../business/base/priority"
import { Status } from "../../../../business/base/status"
import { Task } from "../../../../business/core/task"

export enum actionTaskForm {
  view = "view",
  edit = "edit",
}

export class TaskForm {
  readonly app: AppClient

  readonly action = actionTaskForm.edit

  public task = new Task()

  get statusList(): Status[] {
    return this.app.domain.statusList.items
  }
  get priorityList(): Priority[] {
    return this.app.domain.priorityList.items
  }

  get disabled(): boolean {
    return this.action !== actionTaskForm.edit
  }

  setTask(task: Task) {
    this.task = task
  }

  constructor(app: AppClient) {
    this.app = app
  }
}
