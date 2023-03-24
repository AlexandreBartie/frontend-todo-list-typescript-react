import { describe, expect, test } from "@jest/globals"
// import { TaskDTO } from '../../src/schema/tasks.schema'

import { AppClient } from "../../src/business/core/app"

describe("Database", () => {
  test.skip("TaskDB", async () => {
    const app = new AppClient()

    if (app.tasks.all) {
      const task0 = app.tasks.all[0]
      const task1 = app.tasks.all[1]
      const task2 = app.tasks.all[2]

      expect(true).toBe(task0.isDoing)
      expect(true).toBe(task1.isDoing)
      expect(false).toBe(task2.isDoing)

      expect("warning").toEqual(task0.status.color)
      expect("warning").toEqual(task1.status.color)
      expect("error").toEqual(task2.status.color)
    }
  })

  test("List", async () => {

    const list = [-9, -2, 4, 7, 10, 14, 23]

    const target = 13

    const result = (list.indexOf(target) !== -1)

    let minIndex = 1
    let maxIndex = list.length

    let size = 0
    let index = 0
    let value = 0

    let found = false

    while (!found) {
      size = maxIndex - minIndex + 1

      index = Math.floor(size / 2) + minIndex

      value = list[index - 1]

      if (value === target)
        found = true
      else
       {
        if (maxIndex === minIndex) break
        if (value <= target) minIndex = index + 1
        else maxIndex = index - 1
       }

    }

    if (found)
    console.log('Ok')
    else
    console.log('So bad!')

    expect(result).toBe(found)
  })
})
