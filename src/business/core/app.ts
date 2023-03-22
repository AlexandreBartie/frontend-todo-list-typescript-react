import { ePriority, Priority, PriorityList } from "../base/priority"
import { eStatus, Status, StatusList } from "../base/status"

import { TaskForm } from "../../visual/components/Task/TaskForm/TaskFormController"

import { TaskList } from "../base/task"
import { Profile } from "../security/users/profile"

export class AppView {
  readonly taskForm: TaskForm

  constructor(app: AppClient) {
    this.taskForm = new TaskForm(app)
  }
}

export class AppDomain {
  statusList = new StatusList()
  priorityList = new PriorityList()

  getStatus(id: eStatus): Status {
    return this.statusList.get(id)
  }

  getPriority(id: ePriority): Priority {
    return this.priorityList.get(id)
  }

}

export class AppClient {
  readonly view = new AppView(this)
  readonly domain = new AppDomain()

  readonly profile = new Profile("Carlos Alberto Bartie")

  readonly tasks = new TaskList(this)
}

export class AppBase {
  readonly app: AppClient

  constructor(app: AppClient) {
    this.app = app
  }
}
