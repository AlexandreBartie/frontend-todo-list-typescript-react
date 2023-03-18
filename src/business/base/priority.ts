import { EnumList, ItemEnumList } from "../generic/EnumList"

export class PriorityList extends EnumList<ItemEnumList> {
  constructor() {
    super("priority", "Priority")
    this.add({ id: "1", name: "Normal" })
    this.add({ id: "2", name: "High" })
    this.add({ id: "3", name: "Low" })
  }
}
