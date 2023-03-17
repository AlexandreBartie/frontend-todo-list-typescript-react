import { List } from "../generic/optionList"

export class listStatus extends List {
  constructor() {
    super("status", "Status")
    this.add({ id: "1", name: "Todo" })
    this.add({ id: "2", name: "Doing" })
    this.add({ id: "3", name: "Done" })
  }
}
