import { EnumList, IItemEnumList, ItemEnumList } from "../generic/EnumList"

export enum ePriority {
  normal = 1,
  high = 2,
  low = 3,
}

export class Priority extends ItemEnumList {
}
export class PriorityList extends EnumList<Priority, IItemEnumList> {
  constructor() {
    super("priority", "Priority")
    this.add({ id: ePriority.normal, name: "Normal" })
    this.add({ id: ePriority.high, name: "High" })
    this.add({ id: ePriority.low, name: "Low" })
  }
}
