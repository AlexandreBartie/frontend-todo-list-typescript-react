import { EnumList, ItemEnumList } from "../generic/EnumList"

export class Status extends ItemEnumList {
  readonly color: string
  readonly count: number

  constructor(id: string, name: string, color: string, count: number) {
    super(id, name)
    this.color = color
    this.count = count
  }
}

export class StatusList extends EnumList<Status> {
  constructor() {
    super("status", "Status")
    this.add({ id: "1", name: "Todo", count: 16, color: "error.light" })
    this.add({ id: "2", name: "Doing", count: 9, color: "warning.light" })
    this.add({ id: "3", name: "Done", count: 7, color: "success.light" })
  }
}
