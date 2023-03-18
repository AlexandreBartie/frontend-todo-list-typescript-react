import { PriorityList } from "../base/priority"
import { StatusList } from "../base/status"

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

export class TaskEnum {
  statusList = new StatusList()
  priorityList = new PriorityList()

}

export class TaskManager {
  tasks!: Task[]

  enum = new TaskEnum()
  view = new TaskView(this)

  getProfile() {
    return new Profile("Carlos Alberto Bartie")
  }
}
