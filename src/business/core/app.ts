import { PriorityList } from "../base/priority"
import { StatusList } from "../base/status"

import { TaskForm } from "../../visual/components/Task/TaskForm/TaskFormController"

import { Task } from "./task"
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

}

export class AppClient {
  readonly tasks!: Task[]

  readonly view = new AppView(this)
  readonly domain = new AppDomain()

  readonly profile = new Profile("Carlos Alberto Bartie")

}
