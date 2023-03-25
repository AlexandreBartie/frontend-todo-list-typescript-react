import React, { ReactElement } from "react"

import { Grid } from "@mui/material"

import { TaskList } from "../../../../business/base/task"
import { UXTaskCard } from "../TaskCard/TaskCard"

export type IUXTaskList = {
  tasks: TaskList
  action: {
    onTaskChange: () => void
  }
}

export function UXTaskList(props: IUXTaskList): ReactElement {
  const { tasks } = props

  return (
    <>
      <Grid item display="flex" flexDirection="column" xs={10} md={8}>
        {tasks.all.map((task) => (
          <UXTaskCard
            key={task.id}
            {...{
              task: task,
              action: { onTaskChange: props.action.onTaskChange },
            }}
          />
        ))}
      </Grid>
    </>
  )
}
