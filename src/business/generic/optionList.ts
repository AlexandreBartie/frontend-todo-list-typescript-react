export abstract class List {
  readonly name: string
  readonly label: string

  public options: optionList[] = []

  constructor(name: string, label: string, options?: optionList[]) {
    this.name = name
    this.label = label
    if (options)
    this.set(options)

  }

  public set(options: optionList[])
  {
    this.options = options
  }

  public add(option: optionList)
  {
    this.options.push(option)
  }

}

export abstract class optionList {
  readonly id: string
  readonly name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}