import { AppClient } from "../core/app"

import { Entity, EntityList, IEntity } from "../core/entity"

import { eStatus, Status } from "./status"
import { ePriority, Priority } from "./priority"

import { Today } from "../../library/date/currentDate"



export interface ITask extends IEntity {
  title: string
  description: string
  date?: Date | undefined
  statusId?: eStatus | undefined
  priorityId?: ePriority | undefined
}

export class Task extends Entity<Task> implements ITask {
  title!: string
  description!: string
  date = new Date()
  statusId = eStatus.todo
  priorityId = ePriority.normal

  get status(): Status {
    return this.app.domain.statusList.get(this.statusId)
  }

  get priority(): Priority {
    return this.app.domain.statusList.get(this.priorityId)
  }

  set(task: ITask): Task {
    this.id = task.id
    this.title = task.title
    this.description = task.description

    if (task.date) this.date = task.date
    if (task.statusId) this.statusId = task.statusId
    if (task.priorityId) this.priorityId = task.priorityId

    return this

  }
}

export class TaskList extends EntityList<Task> {

  public current!: Task | null

  constructor(app: AppClient)
 {
  super(app)
  this.setup()
  }

  add(data: ITask)
  { super.addItem(new Task(this.app), data) }

  setup() {
    this.add({
      id: 1,
      title: "Wake Up",
      description: "Dont forget to schedule the radio to turn on at 7am",
      date: Today(),
      statusId: eStatus.doing,
      priorityId: ePriority.high,
    })
    this.add({
      id: 2,
      title: "Brush Teeth",
      description: "Please, take care of your personal higiene",
      date: Today(3),
      statusId: eStatus.doing,
    })
    this.add({
      id: 3,
      title: "Take BreakFast",
      description: "Prepare coffe, eggs and bread to eat in the morning.",
      date: Today(5),
      priorityId: ePriority.low,
    })

    this.current = this.all[0]

  }

}
