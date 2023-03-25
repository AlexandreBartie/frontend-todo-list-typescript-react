export interface IItemEnumList {
  id: number
  name: string
}

export class EnumList<T extends ItemEnumList> {
  readonly name!: string
  readonly label!: string

  public all: T[] = []

  constructor(name: string, label: string, items?: T[]) {
    this.name = name
    this.label = label
    if (items) this.set(items)
  }

  public set(items: T[]) {
    this.all = items
  }

  public add(item: T) {
    this.all.push(item)
  }

  public get(id: number): T {
    const item = this.all.find((item) => {
      return item.id === id
    })
    if (item) return item
    return this.all[0]
  }
}

export class ItemEnumList implements IItemEnumList {
  readonly id: number
  readonly name: string


  constructor(data: IItemEnumList) {
    this.id = data.id
    this.name = data.name
  }
}
