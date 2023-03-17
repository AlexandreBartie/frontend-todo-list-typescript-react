import { listPriority } from "../base/priority"
import { listStatus } from "../base/status"

import { Task } from "./task"

import { Profile } from "../security/users/profile"

export class TasksManager {
  tasks!: Task[]
  status = new listStatus()
  priority = new listPriority()

  getProfile() {
    return new Profile("Carlos Alberto Bartie")
  }
}
