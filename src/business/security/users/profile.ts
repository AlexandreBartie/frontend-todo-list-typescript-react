export class Profile {
  private name: string

  get fullName(): string {
    return this.name
  }

  get firstName(): string {
    return this.parts[0]
  }

  get lastName(): string {
    return this.parts[this.parts.length - 1]
  }

  get sigla(): string {   
    if (this.firstName) {
      if (this.lastName) return this.firstName[0] + this.lastName[0]
    } return "--"
  }

  private get parts(): string[] {
    return this.fullName.trim().split(/\s+/)
  }

  constructor(name = "") {
    this.name = name
  }

  public setName(name: string) {
    this.name = name
  }

}
