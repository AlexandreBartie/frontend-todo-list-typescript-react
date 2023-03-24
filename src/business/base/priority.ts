import { ItemEnumList, EnumList, IItemEnumList } from "../generic/enumList"

import { getColorPriority } from "../../visual/theme/taskColors"

export enum ePriority {
  normal = 1,
  high = 2,
}

export class Priority extends ItemEnumList {
  get color(): string {
    return getColorPriority(this.id, 'light')
  }
}
export class PriorityList extends EnumList<Priority> {
  constructor() {
    super("priority", "Priority")
    this.add({ id: ePriority.normal, name: "Normal" })
    this.add({ id: ePriority.high, name: "High" })
  }

  add(item: IItemEnumList) {
    super.add(new Priority(item))
  }
}
