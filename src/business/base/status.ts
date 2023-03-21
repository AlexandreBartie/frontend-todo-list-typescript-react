import { EnumList, IItemEnumList, ItemEnumList } from "../generic/EnumList"

export enum eStatus {
  todo = 1,
  doing = 2,
  done = 3,
}

export interface IStatus extends IItemEnumList {
  color: string
  count: number
}

export class Status extends ItemEnumList implements IStatus {
  readonly color: string
  readonly count: number

  constructor(id: eStatus, name: string, color: string, count: number) {
    super(id, name)
    this.color = color
    this.count = count
  }

}

export class StatusList extends EnumList<Status, IStatus> {
  constructor() {
    super("status", "Status")
    this.add({
      id: eStatus.todo,
      name: "Todo",
      count: 16,
      color: "error.light",
    })
    this.add({
      id: eStatus.doing,
      name: "Doing",
      count: 9,
      color: "warning.light",
    })
    this.add({
      id: eStatus.done,
      name: "Done",
      count: 7,
      color: "success.light",
    })
  }

  add(item: IStatus) {
    super.add(item)
  }
}
