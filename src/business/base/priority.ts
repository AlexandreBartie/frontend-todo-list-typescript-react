import { EnumList, IItemEnumList, ItemEnumList } from "../generic/EnumList"

import { getColorPriority } from "../../visual/theme/colors/taskColors"

export enum ePriority {
  normal = 1,
  high = 2,
}

export class Priority extends ItemEnumList {

  get color(): string { return getColorPriority(this.id) }

}
export class PriorityList extends EnumList<Priority, IItemEnumList> {
  constructor() {
    super("priority", "Priority")
    this.add({ id: ePriority.normal, name: "Normal" })
    this.add({ id: ePriority.high, name: "High" })
  }
}


