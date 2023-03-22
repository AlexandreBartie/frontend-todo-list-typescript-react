import { getColorStatus } from "../../visual/theme/colors/taskColors"
import { EnumList, IItemEnumList, ItemEnumList } from "../generic/enumList"

export enum eStatus {
  todo = 1,
  doing = 2,
  done = 3,
}

export interface IStatus extends IItemEnumList {
  count: number
}

export class Status extends ItemEnumList implements IStatus {
  readonly count: number

  get color(): string {
    return getColorStatus(this.id)
  }

  constructor(id: eStatus, name: string, count: number) {
    super(id, name)
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
    })
    this.add({
      id: eStatus.doing,
      name: "Doing",
      count: 9,
    })
    this.add({
      id: eStatus.done,
      name: "Done",
      count: 7,
    })
  }

  add(item: IStatus) {
    super.add(item)
  }
}
