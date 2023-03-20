import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { TaskList } from "../../../../business/core/task"
import { UXTaskCard } from "../TaskCard/TaskCard"

export type IUXTaskView = { tasks: TaskList }

export function UXTaskView(props: IUXTaskView): ReactElement {
  const { tasks } = props

  return (
    <>
      <Grid item display="flex" flexDirection="column" xs={10} md={8}>
        {tasks.all.map((task) => (
          <UXTaskCard key={task.id} task={task}/>
        ))}
      </Grid>
    </>
  )
}
