export interface ITask {
  id: string
  title: string
  description: string
  date: Date
}

export class Task implements ITask {
  id!: string
  title!: string
  description!: string
  date = new Date()

  constructor(task?: ITask) {
    if (task) this.set(task)
  }

  set(task: ITask) {
    this.id = task.id
    this.title = task.title
    this.description = task.description
    this.date = task.date
  }
}

export class TaskList {
  readonly all: Task[] = []

  constructor() {
    this.add({
      id: "1",
      title: "Wake Up",
      description: "Dont forget to schedule the radio to turn on at 7am",
      date: new Date(),
    })
    this.add({
      id: "2",
      title: "Brush Teeth",
      description: "Please, take care of your personal higiene",
      date: new Date(),
    })
    this.add({
      id: "3",
      title: "Take BreakFast",
      description: "Prepare coffe, eggs and bread to eat in the morning.",
      date: new Date(),
    })
  }

  add(task: ITask) {
    // if (task instanceof Task) this.all.push(task)
    // else
    
    this.all.push(new Task(task))
  }
}
