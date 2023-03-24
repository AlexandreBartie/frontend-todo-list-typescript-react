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

  get isDoing(): boolean {
    return this.statusId === eStatus.doing
  }

  get isDone(): boolean {
    return this.statusId === eStatus.done
  }

  private _status!: Status
  private _priority!: Priority

  get status(): Status {
    if (this._status === undefined) {
      this._status = this.app.domain.getStatus(this.statusId)
    }
    return this._status
  }

  get priority(): Priority {
    if (this._priority === undefined) {
      this._priority = this.app.domain.getPriority(this.priorityId)
    }
    return this._priority
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

export class TaskFactory {
  private list: ITask[] = []

  private add(data: ITask) {
    this.list.push(data)
  }

  build(): ITask[] {
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
    })

    this.add({
      id: 4,
      title: "Read Emails",
      description: "Reserve your 30 minutes to answer your private emails.",
      date: Today(5),
    })

    this.add({
      id: 5,
      title: "Start Work",
      description:
        "Use Pomodoro approach to be focused and your main target of the day.",
      date: Today(5),
      priorityId: ePriority.high,
    })

    return this.list
  }
}

export class TaskList extends EntityList<Task> {
  public current!: Task | null

  constructor(app: AppClient) {
    super(app)
    this.add(new TaskFactory().build())
  }

  add(data: ITask | ITask[]) {
    if (!Array.isArray(data)) {
      data = [data]
    }

    data.map((item) => {
      this.current = super.addItem(new Task(this.app), item)
    })
  }
}
