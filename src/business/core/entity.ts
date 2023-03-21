import { AppClient } from "./app"

class EntityBase {
  readonly app: AppClient

  constructor(app: AppClient) {
    this.app = app
  }

}
export interface IEntity {
  id: number
}

export abstract class Entity<T> extends EntityBase implements IEntity {
  id!: number

  abstract set(item: unknown): T
}

export class EntityList<T extends Entity<T>> extends EntityBase {

  readonly all: T[] = []

  addItem(item: T, data: unknown) {
    // const object = new <T>() //   this.createObject(T, this.app)
    this.all.push(item.set(data))
  }

}

