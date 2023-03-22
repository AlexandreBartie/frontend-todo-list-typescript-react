import { describe, expect, test } from "@jest/globals"
// import { TaskDTO } from '../../src/schema/tasks.schema'

import { AppClient } from "../../src/business/core/app"

describe("Database", () => {
  test("TaskDB", async () => {
    const app = new AppClient()

    if (app.tasks.all) {
      const task0 = app.tasks.all[0]
      const task1 = app.tasks.all[1]
      const task2 = app.tasks.all[2]

      expect(true).toBe(task0.isDoing)
      expect(true).toBe(task1.isDoing)
      expect(false).toBe(task2.isDoing)
    }
  })
})
