import { List } from "../generic/optionList"

export class listPriority extends List {
  constructor() {
    super("priority", "Priority")
    this.add({ id: "1", name: "Normal" })
    this.add({ id: "2", name: "High" })
    this.add({ id: "3", name: "Low" })
  }
}