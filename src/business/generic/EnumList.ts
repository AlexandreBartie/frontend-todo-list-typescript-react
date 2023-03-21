export abstract class EnumList<T extends ItemEnumList, D extends IItemEnumList> {
  readonly name!: string
  readonly label!: string

  public items: T[] = []

  constructor(name: string, label: string, items?: T[]) {
    this.name = name
    this.label = label
    if (items) this.set(items)
  }

  public set(items: T[]) {
    this.items = items
  }

  public add(item: D) {
    this.items.push(item as unknown as T)
  }

  public get(id: number): T {
    const item = this.items.find((item) => {
      return item.id === id
    })
    if (item) return item
    return this.items[0]
  }
}
export interface IItemEnumList {
  id: number
  name: string
}

export abstract class ItemEnumList implements IItemEnumList {
  readonly id: number
  readonly name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}