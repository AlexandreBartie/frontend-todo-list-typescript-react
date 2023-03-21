import { AppClient } from "../../../../business/core/app"

import { Priority } from "../../../../business/base/priority"
import { Status } from "../../../../business/base/status"
import { Task } from "../../../../business/base/task"

export enum actionTaskForm {
  view = "view",
  edit = "edit",
}

export class TaskForm {
  readonly app: AppClient

  readonly action = actionTaskForm.edit

  get task(): Task {
    if (this.app.tasks.current)
    return this.app.tasks.current
    return new Task(this.app)
  }

  get statusList(): Status[] {
    return this.app.domain.statusList.items
  }
  get priorityList(): Priority[] {
    return this.app.domain.priorityList.items
  }

  get disabled(): boolean {
    return this.action !== actionTaskForm.edit
  }

  constructor(app: AppClient) {
    this.app = app
  }
}
