import { listPriority } from "../base/priority"
import { listStatus } from "../base/status"

import { TaskForm } from "../../visual/components/Task/TaskForm/TaskFormController"
import { TaskArea } from "../../visual/components/Task/TaskArea/TaskAreaController"

import { Task } from "./task"
import { Profile } from "../security/users/profile"

export class TaskView {
  readonly taskForm: TaskForm
  readonly taskArea: TaskArea

  constructor(manager: TaskManager) {
    this.taskForm = new TaskForm(manager)
    this.taskArea = new TaskArea(manager)
  }
}

export class TaskManager {
  tasks!: Task[]
  status = new listStatus()
  priority = new listPriority()

  view = new TaskView(this)

  getProfile() {
    return new Profile("Carlos Alberto Bartie")
  }
}
