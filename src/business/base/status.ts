import { EnumList, IItemEnumList, ItemEnumList } from "../generic/enumList"

import { getColorStatus } from "../../visual/theme/taskColors"

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

  constructor(data: IStatus) {
    super(data)
    this.count = data.count
  }
}

export class StatusList extends EnumList<Status> {
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
    super.add(new Status(item))
  }
}
