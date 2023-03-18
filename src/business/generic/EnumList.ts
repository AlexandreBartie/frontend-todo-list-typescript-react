export abstract class EnumList<T extends ItemEnumList> {
  readonly name!: string
  readonly label!: string

  public items: T[] = []

  constructor(name: string, label: string, items?: T[]) {
    this.name = name
    this.label = label
    if (items)
    this.set(items)

  }

  public set(items: T[])
  {
    this.items = items
  }

  public add(item: T)
  {
    this.items.push(item)
  }

}

export abstract class ItemEnumList {
  readonly id: string
  readonly name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}