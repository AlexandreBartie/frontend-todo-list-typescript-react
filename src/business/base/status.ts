import { EnumList, IItemEnumList, ItemEnumList } from "../generic/enumList"

import { getColorStatus } from "../../visual/theme/taskColors"
import { AppClient } from "../core/app"

export enum eStatus {
  todo = 1,
  doing = 2,
  done = 3,
}

export interface IStatus extends IItemEnumList {
  count: number
}

export class Status extends ItemEnumList {

  readonly app: AppClient

  constructor(app: AppClient, data: IItemEnumList)
  {
    super(data)
    this.app = app
  }

  get counter(): number {
    return this.app.tasks.counter(this.id)
  }

  get color(): string {
    return getColorStatus(this.id)
  }

}

export class StatusList extends EnumList<Status> {
  
  readonly app: AppClient

  constructor(app: AppClient) {
    super("status", "Status")
    this.app = app
    this.add({
      id: eStatus.todo,
      name: "Todo",
    })
    this.add({
      id: eStatus.doing,
      name: "Doing",
    })
    this.add({
      id: eStatus.done,
      name: "Done",
    })
  }

  add(item: IItemEnumList) {
    super.add(new Status(this.app, item))
  }
}
