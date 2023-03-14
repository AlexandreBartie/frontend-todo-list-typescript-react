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
    return this.firstName[0] + this.lastName[0]
    
    // if (this.firstName) {
    //   if (this.lastName) return this.firstName[0] + this.lastName[0]
    //   else if (this.firstName.length >= 2) return this.firstName[0] + this.firstName[1]
    //   else this.firstName[0]
    // } return "--"
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
