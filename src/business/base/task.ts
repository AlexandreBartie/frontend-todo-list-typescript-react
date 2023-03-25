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
    return this.statusId == eStatus.doing
  }

  get isDone(): boolean {
    return this.statusId == eStatus.done
  }

  get status(): Status {
    return this.app.domain.getStatus(this.statusId)
  }

  get priority(): Priority {
    return this.app.domain.getPriority(this.priorityId)
  }

  setChange(){
    if (this.isDoing)
      this.statusId = eStatus.todo
    else
      this.statusId = eStatus.doing
  }

  setDone(){
    if (this.isDone)
      this.statusId = eStatus.doing
    else
      this.statusId = eStatus.done
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
      statusId: eStatus.done,      
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

    this.add({
      id: 6,
      title: "Play games",
      description:
        "Select roblox or other plataform to play your prefered game.",
      date: Today(2),
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

  counter(statusId: eStatus): number {
    let count = 0
    this.all.forEach((item) => {
      if (item.statusId === statusId) {
        count++
      }
    })
    return count
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
